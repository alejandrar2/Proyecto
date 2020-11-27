var mongoose = require('mongoose');

var servidor = 'localhost:27017';
var db = 'morgan';

class Database{
    constructor(){
        this.conexionMongoAtlas();
    }

    conectar(){
        //Promesas
        mongoose.connect(`mongodb://${servidor}/${db}`)
        .then(()=>{
            console.log('Se conecto a mongo');
        }).catch((error)=>{
            console.log(error);
        });
    }

    conexionMongoAtlas(){
       // mongodb+srv://rubio:<password>@rubio.vcecl.mongodb.net/<dbname>?retryWrites=true&w=majority
        mongoose.connect(`mongodb+srv://rubio:morgan_1@rubio.vcecl.mongodb.net/morgan?retryWrites=true&w=majority`,{
            useUnifiedTopology: true
        })
        .then(()=>{
            console.log("Se conecto a la base de datos..");
        })
        .catch(error=>{
            
            console.error(JSON.stringify(error));   
        });
    }
}

module.exports = new Database();