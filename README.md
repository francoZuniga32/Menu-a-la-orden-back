# Menu a la orden - backend

## Instalacion
clone el repositorio e instale las dependencias

```bash
# instrucciones para iniciar el proyecto
bash iniciar.sh

```

## Api

|ruta|descripcion|metodo|body|
|---|---|---|---|
|/usuario/|creamos un usuario nuevo|POST|{username: string,password:string,nombre: string,apellidos: string, email: string}|
|/usuario/:id| editamos un usuario|PUT|{username: string,password:string,nombre: string,apellidos: string, email: string}|
|/usuario/:id| eliminamos un usuario | DELETE||
|/usuario/login| realizamos el login de un usuario| POST |{username: string,password:string}|
|/menu/| mostramos todos los menus disponibles | GET | |
|/menu/:id| mostramos un menu por su id | GET ||
|/menu/| creamos un menu nuevo | POST | {nombre: string, template: string}|
|/menu/:id| editamos un menu por su id | PUT | {nombre: string, template: string}|
|/menu/items/| agregamos un item al menu | POST | {items:[ { id: 0,titulo: string, precio: number, descripcion: string, foto: rutafoto,idMenu: number,  },... ]}|
|/upload/| cargamos una imagen a el sistema | POST - Multipart Form | miniatura: file|

## Docker compose

inicie la aplicacion con `docker compose up -d` la api estara listandose en el puerto 3001.
no es necesario confiugurar la db ya que el script inicio.sh lo hara por nosotros.
