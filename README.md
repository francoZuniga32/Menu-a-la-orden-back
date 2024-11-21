# Menu a la orden - backend

## Instalacion
clone el repositorio e instale las dependencias

```bash
npm i 
```

## Configuracion de la db

mueva la carpeta data a un nivel superior esto es tiene que quedar al mismo nivel que la carpeta del proyecto.
esto es para que las actualizaciones del archivo db.json no interfieran con nodemon (entra en bucle infinito).

## Docker compose

inicie la aplicacion con `docker compose up -d` la api estara listandose en el puerto 3001.
no es necesario confiugurar la db ya que el script inicio.sh lo hara por nosotros.