const db = require('../database');

class UserList{
  constructor(){
  
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
    )}

  static getListByIDUser(id) {
    return new Promise(
        (resolve, reject) => {
            db.execute("SELECT DISTINCT users.name as username, users.email as useremail, movies.Mname as moviesname,  movies.Mimage as moviesimg, movies.Mtype as moviestype,movies.Id as moviesid, movies.Mdescription as moviesdesc, interations_data.Title as title, interations_data.description as descr, interations2.date as idDate FROM interations2 inner join users on id_user = users.Id inner join movies on id_movie = movies.Id inner join interations_data on id_interation = interations_data.Id where id_user = " + id +" and id_interation =2  GROUP BY movies.Mname")
            .then(resultado => {
                resolve(resultado[0]);                
            })
        }
    )
  }

  static getListByIDUserSerie(id) {
    return new Promise(
        (resolve, reject) => {
            db.execute("SELECT DISTINCT users.name as username, users.email as useremail, series.Titulo as seriesname, series.Simage as seriesimg, series.Stype as seriestype,series.Id as seriesid, series.Description as seriesdesc, interations_data.Title as title, interations_data.description as descr, interations2.date as idDate FROM interations2 inner join users on id_user = users.Id inner join series on id_movie = series.Id inner join interations_data on id_interation = interations_data.Id where id_user = " + id +" and id_interation =2  GROUP BY series.Titulo")
            .then(resultado => {
               
              resolve(resultado[0]);
            })
        }
    )}

  static getWatchedListByIDUser(id) {
    return new Promise(
        (resolve, reject) => {
            db.execute("SELECT DISTINCT users.name as username, users.email as useremail, movies.Mname as moviesname,  movies.Mimage as moviesimg, movies.Mtype as moviestype,movies.Id as moviesid, movies.Mdescription as moviesdesc, interations_data.Title as title, interations_data.description as descr, interations2.date as idDate FROM interations2 inner join users on id_user = users.Id inner join movies on id_movie = movies.Id inner join interations_data on id_interation = interations_data.Id where id_user = " + id +" and id_interation =1  GROUP BY movies.Mname")
            .then(resultado => {
                resolve(resultado[0]);
            })
        }
    )
  }
  static getWatchedListByIDUserSerie(id) {
    return new Promise(
        (resolve, reject) => {
            db.execute("SELECT DISTINCT users.name as username, users.email as useremail, series.Titulo as seriesname, series.Simage as seriesimg, series.Stype as seriestype,series.Id as seriesid, series.Description as seriesdesc, interations_data.Title as title, interations_data.description as descr, interations2.date as idDate FROM interations2 inner join users on id_user = users.Id inner join series on id_movie = series.Id inner join interations_data on id_interation = interations_data.Id where id_user = " + id +" and id_interation =1  GROUP BY series.Titulo")
            .then(resultado => {
               
              resolve(resultado[0]);
            })
        }
    )
  }

  async salvar() {
    if(this.inList=='1'){
      let query = `DELETE from interations2 where id_user='${this.id_user}' and id_movie='${this.id_movie}' and type='${this.type}' ;`;
      let result = await db.execute(query);
    }else{
      let query = `INSERT INTO interations2 (id_user, id_movie, id_interation, type) VALUES ('${this.id_user}', '${this.id_movie}', '${this.id_interation}','${this.type}');`;
      let result = await db.execute(query);
      console.log(`INSERT INTO interations2 (id_user, id_movie, id_interation, type) VALUES ('${this.id_user}', '${this.id_movie}', '${this.id_interation}','${this.type}');`);
    }  
    return 'ok';
  }

  static AddListWatch(id_movie,id_user,type,interation){
    return new Promise(
      (resolve, reject) => {
          db.execute(`INSERT INTO interations2 (id_user, id_movie, id_interation, type) VALUES ('${id_user}', '${id_movie}', '${interation}','${type}');`)
          .then(resultado => {
             
            resolve(resultado[0]);
          })
      }
  )}


  static getInterationsByID(id) {  
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
  async remove() {
      let query2 = `DELETE from interations2 where id_user='${this.id_user}' and id_movie='${this.id_movie}' and id_interation=1;`;      
      let result1 = await db.execute(query2); 
      return result1;
  }
  
};



module.exports = UserList;




