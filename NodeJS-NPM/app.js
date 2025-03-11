const validator = require("validator")
const chalk = require('chalk')

// console.log(validator.isEmail("rebelmail.com"))
// console.log(validator.isMobilePhone("087723123", 'id-ID'))


// console.log(chalk.blue("Hello world"))

console.log(
  chalk.greenBright(
    `aku sayang ${chalk.blue("hanum")}, tapi ${chalk.blue(
      "hanum"
    )} tidak sayang aku... ${chalk.red("yahh sedih!")}. \nHanum, kamu lagi apa sekarang, sayang?`
  )
);

//nodemon jika diintal -g nodemon: maka akan jalan dimanapun, global


//nodemon jika diintal nodemon --save-dev: maka tidak akan jalan di local, dan harus menggunakan "scripts" di package.json: "start": "nodemon app.js"



