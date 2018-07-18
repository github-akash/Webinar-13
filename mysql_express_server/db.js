const mysql=require('mysql2')
const connection= mysql.createConnection({
    host:'localhost',
    user:'myuser', 
    database:'mytestdb',
    password:'mypass'
})

function getALLPersons(){
    return new Promise(function(reject,resolve){
        connection.query(
            `SELECT * FROM persons`,
            function(err, rows, cols){
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                }
            }
        )
    })
}

function AddPersons(name,age,city){
    return new Promise(function(reject,resolve){
        coonection.query(
            `INSERT INTO persons(name,age,city) values(?,?,?)`,
            [name,age,city],
            function(err,results){
                if(err){
                    reject(err)
                }else{
                    resolve()
                }
            }
               
        )
    })
}

exports= module.exports={
    getALLPersons,
    AddPersons
}