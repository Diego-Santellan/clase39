//este archivo representa la capade datos
// (importamos los manager tanto como los modelos)
const {UserManagerMongo} = require("./manager/user.manager");
const {UserModel} = require("./dbMoldes/user.model");

const userManager = new UserManagerMongo(UserModel);

module.exports = {userManager};