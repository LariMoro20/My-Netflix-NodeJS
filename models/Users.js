const db = require('../database');

class Users {

    constructor(name, email, cpf, pass,login) {
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.login = login;
        this.password = pass;
        this.type = 0;
    }

    static buscarTodos() {
    }

    async salvar() {
        let query = `
        INSERT INTO users 
            (name, login, cpf, email, password, Uimg) 
            VALUES 
            ('${this.name}', '${this.login}','${this.cpf}', '${this.email}', '${this.password}', '${this.Uimg}')`;
        let result = await db.execute(query);
        //console.log(query);
        return result;
    }



    async update() {
        let query = `
        UPDATE users set name='${this.name}', login='${this.login}', cpf='${this.cpf}', email='${this.email}', password='${this.password}', Uimg='${this.Uimg}' where Id='${this.Id}' ;`;
        let result = await db.execute(query);
        console.log(query);
        return result;
    }

    async buscaId(funcToex) {
        let query = `
        select * from users where Id= '${this.Id}'`;
        let result = await db.execute(query);
        funcToex(result[0]);
        //console.log(query);
        return result;
    }

}

module.exports = Users;