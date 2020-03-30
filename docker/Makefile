
ACCOUNT := agarat
SERVICE := policy-calculator
IMAGE := $(ACCOUNT)/$(SERVICE)
TAG := latest
PORT_MAPPING := 8080:8080
	
build:
	$(info Make: Building "$(TAG)" tagged images.)
	@docker build -t $(IMAGE):$(TAG) .
	@make -s tag
	@make -s clean
	
tag:
	$(info Make: Tagging image with "$(TAG)".)
	@docker tag $(IMAGE):latest $(IMAGE):$(TAG)
	
start:
	$(info Make: Starting "$(TAG)" tagged container.)
	@docker run -d -p $(PORT_MAPPING) --name $(SERVICE) $(IMAGE):$(TAG)
	
stop:
	$(info Make: Stopping "$(TAG)" tagged container.)
	@docker stop $(SERVICE)
	@docker rm $(SERVICE)
	
restart:
	$(info Make: Restarting "$(TAG)" tagged container.)
	@make -s stop
	@make -s start
	
rebuild:
	$(info Make: Rebuilding container.)
	@make -k stop
	@make -s build
	@make -s start
#push:
#	$(info Make: Pushing "$(TAG)" tagged image.)
#	@docker push $(IMAGE):$(TAG)
# 
#pull:
#	$(info Make: Pulling "$(TAG)" tagged image.)
#	@docker pull $(IMAGE):$(TAG)
	
clean:
	@docker system prune --volumes --force
	
#login:
#	$(info Make: Login to Docker Hub.)
#	@docker login -u $(DOCKER_USER) -p $(DOCKER_PASS)