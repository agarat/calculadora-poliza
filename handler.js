'use strict';

const axios = require('axios');

function calculatePolicy(data) {
    var return_data = {}
    return_data.workers = []
    var total_cost = 0
    for (let worker of data.policy.workers) {
        var ind_cost = calculateIndividualCost(worker, data.policy.has_dental_care)
        worker.copago = ind_cost * ((100 - data.policy.company_percentage) / 100)
        return_data.workers.push(worker)
        total_cost += ind_cost
    }
    return_data.total_cost = total_cost * (data.policy.company_percentage / 100)
    return return_data
}

function calculateIndividualCost(worker, has_dental) {
    if (worker.age > 65) {
        return 0
    }
    switch (worker.childs) {
        case 0:
            return has_dental ? 0.399 : 0.279
            break;
        case 1:
            return has_dental ? 0.6346 : 0.4396
            break;
        default:
            return has_dental ? 0.8079 : 0.5599
    }
}

function getPolicyData(callback) {
    var url = 'https://dn8mlk7hdujby.cloudfront.net/interview/insurance/policy'
    axios.get(url)
        .then(function (response) {
            return callback(null, response.data);
        })
        .catch(function (error) {
            callback(error);
            console.log(error)
        });
}

module.exports.endpoint = (event, context, callback) => {
    getPolicyData(function (err, data) {
        if (err) return callback(err);
        callback(null, calculatePolicy(data));
    });
};