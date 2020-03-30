const inquirer = require('inquirer')
const fs = require('fs');
const path = './.env';
// console.log("\033[31m this will be red \033[91m and this will be normal");

let questions = [
    {
        type: 'confirm',
        name: 'createFile',
        message: 'Create a new .env file ? (If Already exists it will be overited)',
        default: true
    }
]
inquirer.prompt(questions).then(answers => {
    if(!answers.createFile)
        process.exit()
    if (fs.existsSync(path)) {
        fs.unlinkSync(path)
        console.log('\x1b[32m\x1b[2m' + '!' + '\x1b[37m\x1b[1m File Deleted! Creating a New One...');
    }
    let questions = [
        {
            type: 'input',
            name: 'port',
            message: 'Insert the PORT of backend: ',
            default: '3000'
        },
        {
            type: 'input',
            name: 'db_username',
            message: 'Insert the USERNAME of your database: ',
            default: 'root'
        },
        {
            type: 'input',
            name: 'db_password',
            message: 'Insert the PASSWORD of your database: ',
            default: ''
        },
        {
            type: 'input',
            name: 'db_name',
            message: 'Insert the NAME of your database: ',
            default: 'helpi'
        },
        {
            type: 'input',
            name: 'db_hostname',
            message: 'Insert the HOSTNAME/IP of your database: ',
            default: '127.0.0.1'
        },
        {
            type: 'input',
            name: 'secret',
            message: 'Insert the SECRET STRING of the program: ',
            default: 'SOMERANDOMPHRASE'
        }
    ]
    
    inquirer.prompt(questions).then(answers => {
        fs.writeFile(path, 
`PORT=${answers.port}
SECRET=${answers.secret}
DB_USERNAME=${answers.db_username}
DB_PASSWORD=${answers.db_password}
DB_NAME=${answers.db_name}
DB_HOSTNAME=${answers.db_hostname}`, 
            (err) => {
            if(err){
                console.log('\x1b[32m\x1b[2m' + '!' + '\x1b[37m\x1b[1m Error: ' + err);
                process.exit()
            }
            console.log('\x1b[32m\x1b[2m' + '!' + '\x1b[37m\x1b[1m File Created! Enjoy!');
        })
    })
})