const db = require('../database');

class Movies{
    constructor(){
    
    }  


    static getAll(funcToex){
        db.execute('SELECT * FROM movies inner join movies_type on movies_type.Id_type = movies.Mtype  order by movies.Id asc')
        .then(result => {
            //console.log(result);
            funcToex(result[0]);
        })
        .catch(erro => {
            console.log("Deu erro veei: "+erro);
        })
    }

    static addDest(type,idm,dest){
        //console.log(type);
        let table='movies';
        let coll='Mdestaque';
            if(type==1){
                table='movies';
                coll='Mdestaque';
            }else{
                table='series';
                coll='Sdestaque';
            }
            let query='UPDATE '+table+' set '+coll+'=0 where Id='+idm;
            if(dest==1){
                query='UPDATE '+table+' set '+coll+'=0 where Id='+idm;
            }else{
                query='UPDATE '+table+' set '+coll+'=1 where Id='+idm;
            }
            console.log(query);
            return new Promise(
                (resolve, reject) => {
                    db.execute(query)
                    .then(resultado => {
                        resolve(resultado[0]);
                    })
                }
            )
    }

    static getDest(funcToex){
        db.execute('SELECT * FROM movies where Mdestaque = 1')
        .then(result => {
            //console.log(result);
            funcToex(result[0]);
        })
        .catch(erro => {
            console.log("Deu erro veei: "+erro);
        })
    }


    static getByID(id) {       
        return new Promise(
            (resolve, reject) => {
                db.execute("SELECT * FROM movies where Id = " + id+" order by Id desc")
                .then(resultado => {
                    resolve(resultado[0]);
                })
            }
        )
    }
    static getinterations2ByID(id) {  
    return new Promise(
        (resolve, reject) => {
            db.execute("SELECT users.name as username, users.email as useremail, movies.Mname as moviesname, movies.Mimage as moviesimg, movies.Mtype as moviestype, movies.Mdescription as moviesdesc, interations_data.Title as title, interations_data.description as descr, interations2.date as idDate FROM interations2 inner join users on id_user = users.Id inner join movies on id_movie = movies.Id inner join interations_data on id_interation = interations_data.Id where id_movie = " + id+" ")
            .then(resultado => {
                resolve(resultado[0]);
                console.log(resultado);
            })
        }
    )
    }

    static getinterationsByID(id) {   
    return new Promise(
        (resolve, reject) => {
            db.execute("SELECT users.name as username, users.email as useremail, movies.Mname as moviesname, movies.Mimage as moviesimg, movies.Mtype as moviestype, movies.Mdescription as moviesdesc, interations_data.Title as title, interations_data.description as descr, interations2.date as idDate FROM interations2 inner join users on id_user = users.Id inner join movies on id_movie = movies.Id inner join interations_data on id_interation = interations_data.Id where id_movie = " + id+" ")
            .then(resultado => {
                resolve(resultado[0]);
                //console.log(resultado);
            })
        }
    )
    }

    static getinterations2ByIDUser(id) {
    return new Promise(
        (resolve, reject) => {
            db.execute("SELECT users.name as username, users.email as useremail, movies.Mname as moviesname, movies.Mimage as moviesimg, movies.Mtype as moviestype, movies.Mdescription as moviesdesc, interations_data.Title as title, interations_data.description as descr, interations2.date as idDate, interations2.id_movie idiserieint FROM interations2 inner join users on id_user = users.Id inner join movies on id_movie = movies.Id inner join interations_data on id_interation = interations_data.Id where id_user = " + id+" ")
            .then(resultado => {
                resolve(resultado[0]);
                // console.log(resultado);
            })
        })
    }

    async salvar() { 
        let query = `INSERT INTO movies (Mname, Mdescription, Mgenre, Mimage, Mvideo,Mtype) VALUES ('${this.Mname}', '${this.Mdescription}', '${this.Mgenre}', '${this.Mimage}', '${this.Mvideo}', '${this.Mtype}');`;     
        let result = await db.execute(query);
        return result;
    }

    async editar() {  
        let query = `UPDATE movies set Mname='${this.Mname}', Mdescription='${this.Mdescription}', Mgenre='${this.Mgenre}', Mimage='${this.Mimage}', Mvideo='${this.Mvideo}',Mtype='${this.Mtype}' where Id='${this.Id}';`;
        let result = await db.execute(query);
        console.log(query);
        return result;
    }
    static excluir(id) {
        return db.execute("DELETE FROM movies WHERE Id = " +  id);
    }

};



module.exports = Movies;




