const db = require('../database');

class Series{
  constructor(){
  }  


  static getAllS(funcToex){
    db.execute('SELECT * FROM series')
    .then(result => {
      funcToex(result[0]);
    })
    .catch(erro => {
        console.log("Deu erro: "+erro);
    })
  }


  static getByID(id) {
    return new Promise(
        (resolve, reject) => {
            db.execute("SELECT * FROM series where Id = " + id+" order by Id desc")
            .then(resultado => {
                resolve(resultado[0]
                  );
            })
        }
    )
}


static getEpsByID(id) {
  return new Promise(
      (resolve, reject) => {
          db.execute("SELECT * FROM series_video inner join series on series.Id=series_video.id_serie where id_serie = '"+id+"' order by series.Id asc")
          .then(resultado => {
              resolve(resultado[0]);
          })
      }
  )}

static getinterations2ByIDUser(id) {
        
  return new Promise(
      (resolve, reject) => {
          db.execute("SELECT users.name as username, users.email as useremail, series.Titulo as seriesname, series.Simage as seriesimg, series.Stype as seriestype, series.Description as seriesdesc, interations_data.Title as title, interations_data.description as descr, interations2.date as idDate, interations2.id_movie idiserieint FROM interations2 inner join users on id_user = users.Id inner join series on id_movie = series.Id inner join interations_data on id_interation = interations_data.Id where id_user = " + id+" ")
          .then(resultado => {
              resolve(resultado[0]);
             // console.log(resultado);
          })
      }
  )

}


  async salvar() {
    let query = `INSERT INTO series (Titulo, Description, Sgenre, Stype, Simage) VALUES ('${this.Titulo}', '${this.Description}', '${this.Sgenre}', '${this.Stype}', '${this.Simage}');`;
    let result = await db.execute(query); 
    return result;
  }


  async salvarEps(path) {
    let query = `INSERT INTO series_video (path, id_serie) VALUES ('${path}', (select Id from series order by Id desc limit 1));`;
    let result = await db.execute(query);
    return result;
  }

  async RemoveEps() {
    let query = `DELETE from series_video where Id='${this.ideps}' and id_serie='${this.idSerie}';`; 
    let result = await db.execute(query);
    return result; 
  }
 
  async editar() {
    let query = `UPDATE series set Titulo='${this.Titulo}', Description='${this.Description}', Sgenre='${this.Sgenre}', Stype='${this.Stype}', Simage='${this.Simage}' where Id='${this.Id}';`;
    let result = await db.execute(query);
    console.log(query);
    return result;
  }
  static excluir(id) {
      return db.execute("DELETE FROM series WHERE Id = " +  id);
  }


};



module.exports = Series;




