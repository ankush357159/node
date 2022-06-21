const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'ankush',
    password: 'Entrypass@123',
    database: 'ivymart',
    insecureAuth: true
})

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected successfully')
})