### APP
----------------
## Алгоритм действий
1. Постанровка задачи
2. Создание архитектуры
3. Перейти в папку сервер
4. Инициализируем сервер

npm init -y

5. устанавливаем express
npm install express
6. создаём 
gitignor > node-modules
7 Переход на ES6 modules 
8. создаём структуру сервера

package.json ("type": 'module')

import express from "express"
const app = express()
console.log(`Server has been started on port ${}`)

9. запускаю ноду

node app.js

--------------------

## Halper (не обязательно)

1 Устанавливаем nodemon
npm i nodemon
2 Редактируем script в package.json

"scripts": {
    "dev": "nodemon app.js"
  },

3 Запускаем через нодемун

	npm run dev
