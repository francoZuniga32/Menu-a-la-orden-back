#!/bin/bash

cp -r data ../
npm install 
# corremos las migraciones 
cd src/database
npx sequelize-cli db:migrate
