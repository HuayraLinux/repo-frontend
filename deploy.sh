#!/bin/bash
# Si hay un error o se usa una variable no definida se termina la ejecución
set -o errexit -o nounset
# Hash corto de commit
rev=$(git rev-parse --short HEAD)

# Instalamos las dependencias
npm install
node_modules/.bin/bower install

# Generamos la página
node_modules/.bin/ember build --prod

(
  cd dist
  # Queremos que nos tomen las carpetas que empiezan con _ (fuente: http://stackoverflow.com/a/39691475)
  touch .nojekyll
  # Iniciamos un repo vacío con la data del boto
  git init
  git config user.name "Autopush (Travis-CI)"
  git config user.email "iglosiggio@gmail.com"
  git remote add origin "https://${GH_TOKEN}@${GH_REF}"
  # Pedimos el historial y nos movemos a gh-pages
  git fetch --depth=1 origin gh-pages
  git reset origin/gh-pages
  # Agregamos todo lo que haya cambiado y commiteamos
  git add -A .
  git commit -m "Deploy automático de ${rev}"
  # Pusheamos a gh-pages
  git push --quiet origin HEAD:gh-pages >/dev/null 2>&1
)
