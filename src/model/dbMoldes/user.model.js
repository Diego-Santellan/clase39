//en este archivo creamo este modelo con mongoose realizar las operciones ya sobre la db
const mongoose = require("mongoose");

//definimos la collection
const userCollection = "users";

//creamos los esquemas de los usuarios
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    dni:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

// creamos el modelo
const UserModel = mongoose.model(userCollection, userSchema);

module.exports = {UserModel};