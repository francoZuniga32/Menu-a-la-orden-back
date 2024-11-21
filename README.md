# Menu a la orden - backend

## Instalacion
clone el repositorio e instale las dependencias

```bash
npm i
npm run iniciar
npm run dev
```
<<<<<<< HEAD

## Configuracion de la db

mueva la carpeta data a un nivel superior esto es tiene que quedar al mismo nivel que la carpeta del proyecto.
esto es para que las actualizaciones del archivo db.json no interfieran con nodemon (entra en bucle infinito).

## Docker compose

inicie la aplicacion con `docker compose up -d` la api estara listandose en el puerto 3001.
no es necesario confiugurar la db ya que el script inicio.sh lo hara por nosotros.
=======
## Funcionamiento
nuestra base de datos esta ubicada a un nivel por encima de la aplicacion de modo que no interfiera con el demonio nodemon. el script `npm run iniciar` copia la base de datos `data/db.json` y es usada para la persistencia de los datos en la aplicacion.
>>>>>>> 2367626ed2f46561dfa5d1d6fbc31d0dbcb75d12
