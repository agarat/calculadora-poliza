# Calculadora Póliza de seguro

Proyecto en nodeJS que calcula el valor a pagar por una empresa por concepto de póliza de seguro, dada una consulta a un servicio que entrega una lista de empleados y sus cargas. 

## Ejecución

El proyecto utiliza el framework 
`serverless`, que permite ejecutarlo de forma local. También se encuentra disponible dentro del directorio `docker` una versión que permite ejecutarse dentro de un contenedor docker.

Para ejecutar el proyecto con `serverless` se deben ejecutar los siguientes pasos:

```bash
npm install
serverless invoke local --function calculatePolicy
```

Para correr el proyecto con docker, ejecutar los siguientes comandos:
```bash
cd dockerized
make build
make start
```

El contenedor disponibiliza el servicio en [localhost:8080/](localhost:8080/).

### Output

Al llamar al servicio en el endpoint `/`, este consultará a un servicio REST con los datos de los trabajadores de una empresa. La salida entregará una lista de los mismos trabajadores, junto con el copago que les corresponde pagar, además de incluir el valor que debe pagar la empresa por la póliza.

## Autor

* **Arnaldo Garat** - [Github](https://github.com/agarat)