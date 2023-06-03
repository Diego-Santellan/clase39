//CAPA DE BASE DE DATOS
//En este archivos crearemos una clase para realizar las diferentes operaciones sobre la base de datos
class UserManagerMongo{
    constructor(model){
        this.model = model;
    };

    //creamos dos metodos sensillos 

    async createUser(user){     //metodo para crear usuarios
        try {
            const userCreated = await this.model.create(user);
            if (userCreated) {
                return userCreated;
            } else {
                throw new Error("hubo un error al crear el usuario");
            }
        } catch (error) {
            throw new Error(`hubo un error al crear el usuario ${error.message}`);
        }
    };

    async getAll(){     //metodo para obtener los usuarios
        try {
            const users = await this.model.find();
            return users;
        } catch (error) {
            throw new Error("No se pudo obtener los usuarios");
            
        }
    }

    async getById(id){     //metodo para obteneer los usuarios porid
        try {
            const user = await this.model.findByID(id);
            if (user) {
                return user;
            } else {
                throw new Error("El usuario no existe");
            }
        } catch (error) {
            throw new Error("No se pudo obtener el usuario");
            
        }
    }
}

module.exports = {UserManagerMongo};