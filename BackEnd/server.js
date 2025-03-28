require('dotenv').config();

const app = require('./src/app')

app.listen(3000,() => {
  console.log(`Server is running on codereviewerbackend-hxejcyffg6ahbff8.eastasia-01.azurewebsites.net`);
  
})