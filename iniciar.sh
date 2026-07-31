#!/bin/bash

cp -r data ../
# por ahora no lo cambiamos a pnpm
npm install 
# corremos las migraciones 
cd src/database
npx sequelize-cli db:migrate
# creamos una clave para jwt
clave=$(echo -n "algo" | md5sum | awk '{print $1}')
cd ../..
echo "key=$clave" > .env
