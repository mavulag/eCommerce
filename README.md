Navigate to the directory where you want to start your project

``` bash
mkdir yourProjectName
cd yourProjectName
```

then,
``` bash
npm create vite@latest my-project -- --template react
cd my-project
npm i slick-carousel react-slick react-toastify react-router react-router-dom react-redux react-icons apexcharts react-apexcharts moment flowbite axios @reduxjs/toolkit @paypal/react-paypal-js
npm install
npm run dev
``` 

(Get that from https://github.com/settings/tokens)

After that delete the following directories inside my-project
- public
- assets found inside src
- App.css found inside src
- index.css found inside src

Return back to the root directory
``` bash
cd ..
npm init -y
touch .env
mkdir backend
``` 
(Or you can name backend directory with any name you want)

Install the following dependencies
``` bash
npm i nodemon multer mongoose jsonwebtoken express-formidable express-async-handler express dotenv cors cookie-parser concurrently bcryptjs
```

Navigate to the ./package.json, delete this
``` bash 
"scripts": {
    "start": "echo \"Error: no test specified\" && exit 1"
}
```
Add this
``` bash 
"scripts": {
    "backend": "nodemon backend/inde.jx",
    "my-project": "npm run dev --prefix frontend",
    "dev": "concurrently \"npm run frontend\" \"npm run backend\""
}
```

Navigate to backend directory
``` bash
cd backend
mkdir config controllers middlewares models routes utils
touch index.js ./config/dbs.js
```

To run this project type
``` bash
npm run backend

or

npm run frontend

or 

npm run 
```