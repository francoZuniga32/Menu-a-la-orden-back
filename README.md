# Menu a la orden - backend

## Instalacion
clone el repositorio e instale las dependencias

```bash
npm i
npm run iniciar
npm run dev
```
## Funcionamiento
nuestra base de datos esta ubicada a un nivel por encima de la aplicacion de modo que no interfiera con el demonio nodemon. el script `npm run iniciar` copia la base de datos `data/db.json` y es usada para la persistencia de los datos en la aplicacion.
