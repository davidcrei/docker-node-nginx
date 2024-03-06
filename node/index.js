const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('David2')`
connection.query(sql)
connection.end()


app.get('/', (req,res) => {
    let html = '<h1>Full Cycle Rocks!</h1>'
    const connection = mysql.createConnection(config)
    const sql = `SELECT * FROM people`
    connection.query(sql,(error, retorno, fields) => {
            if (error) {
                console.log(error);
                mysql.end();
                res.send(`<h1>${error}</h1>`);
            }
            if (retorno.length > 0) {
                console.log(retorno);
                retorno.forEach(element => {
                    html += `\n<h1>nome: ${element['name']}</h1>`
                });
                res.send(html)
            } else {
                res.send(html)
            }
        }
    )
    connection.end()
    
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})