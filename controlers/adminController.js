const Movies = require('../models/Movies');
const Series = require('../models/Series');
const Users = require('../models/Users');
const UserList = require('../models/UserList');

exports.MostraPageList = (req, res) => {
    if (req.session.isadmin) {
        let movies = Movies.getAll((movies) =>{
               let series =Series.getAllS((series) =>{
                    res.render('list-movies',{movies : movies, user : req.session.user,series:series});
           }) 
        });
   } else {
       res.redirect('login');
   }
}

exports.MostraPaginaAdd = (req, res) => {

    if (req.session.isadmin) {
        res.render('form-add', {user : req.session.user});
   } else {
       res.redirect('login');
   }

   
}

exports.MostraPaginaAddSerie = (req, res) => {

    if (req.session.isadmin) {
        res.render('form-addserie', {user : req.session.user});
   } else {
       res.redirect('login');
   }

   
}

exports.MostraPaginaEdit = (req, res) => {

    if (req.session.isadmin) {

        Movies.getByID(req.params.id)    
        .then(resultado => {
          
            res.render('form-edit',{movies : resultado,user : req.session.user});
        })
       
   } else {
       res.redirect('login');
   }

   
}


exports.MostraPaginaEditSerie = (req, res) => {

    if (req.session.isadmin) {

        Series.getByID(req.params.id)    
        .then(resultado => {

            Series.getEpsByID(req.params.id)    
                .then(episodios => {

                res.render('form-editserie',{series : resultado,user : req.session.user, episodios:episodios });
            })        
        })
       
   } else {
       res.redirect('login');
   }
}

exports.MostraPaginaInteracoes = (req, res) => {
    if (req.session.isadmin) {
        UserList.getInterationsByID(req.params.id)    
        .then(resultado => {          
            res.render('interacoes',{interacoes : resultado,user : req.session.user});
        })

   } else {
       res.redirect('login');
   }
}


/*
exports.MostraPaginaInteracoes = (req, res) => {
    if (req.session.isadmin) {
        Movies.getInterationsByID(req.params.id)    
        .then(resultado => {
            res.render('interacoes',{interacoes : resultado,user : req.session.user});
        })
   } else {
       res.redirect('login');
   }
}*/

exports.EditaMovie = async (req, res) => {

    let movies = new Movies();
    movies.Id = req.body.Id;
    movies.Mname = req.body.Mname;
    movies.Mgenre = req.body.Mgenre;
    movies.Mdescription = req.body.Mdescription;
    movies.Mimage = req.body.Mimage;
    //movies.Mvideo = req.body.Mvideo;
    if(req.file){
        movies.Mvideo=req.file.path;
    }else{
        movies.Mvideo= req.body.lastvideo;
    }
    

    movies.Mtype = req.body.Mtype;
    

    await movies.editar();
    console.log("editpi");
    res.redirect('/admin');

}


exports.DestakMovie= async(req, res) => {

    if (req.session.isadmin) {

        Movies.addDest(req.body.type,req.body.idm,req.body.dest)    
        .then(resultado => {
          return resultado;
        })
        
       
   } else {
       res.redirect('login');
   }

}



exports.FazCadastro= async(req, res) => {


    let user = new Users();
     user.name=req.body.UName;
     user.password=req.body.ULogin;
     user.email=req.body.UEmail;
     user.type='1';
     user.login=req.body.UUsername;
     user.cpf=req.body.Ucpf;
 
     await user.salvar();
     res.redirect('/login');
 }
exports.CadastraMovie = async (req, res) => {

    let movies = new Movies();
    
    movies.Mname = req.body.Mname;
    movies.Mgenre = req.body.Mgenre;
    movies.Mdescription = req.body.Mdescription;
    movies.Mimage = req.body.Mimage;
    //movies.Mvideo = req.body.Mvideo;
    movies.Mvideo=req.file.path;
    movies.Mtype = req.body.Mtype;


    await movies.salvar();
    res.redirect('/admin');

}
exports.CadastraSerie = async (req, res) => {

    let serie = new Series();
    
    serie.Titulo = req.body.Mname;
    serie.Description = req.body.Mdescription;
    serie.Stype=req.body.Mtype;
    serie.Sgenre=req.body.Mgenre;
    serie.Simage=req.body.Simage;

    
     id= await serie.salvar();

    req.files.forEach( async element => {
        await serie.salvarEps(element.path);
       console.log(element.path);
    });

 // await serie.salvarEps();

    res.redirect('/admin');


}


exports.EditaSerie = async (req, res) => {
    let serie = new Series();
    serie.Id = req.body.Id;
    serie.Titulo = req.body.Mname;
    serie.Description = req.body.Mdescription;
    serie.Stype=req.body.Mtype;
    serie.Sgenre=req.body.Mgenre;
    serie.Simage=req.body.Simage;

    
     id= await serie.editar();

    req.files.forEach( async element => {
        await serie.salvarEps(element.path);
       console.log(element.path);
      // console.log(id);
    });



    res.redirect('/admin');

}

exports.RemoveEps= async(req, res) => {
    let ul= new Series();
    ul.idSerie=req.body.idSerie;
    ul.ideps=req.body.ideps;
   
     await ul.RemoveEps();
     return true;
 }

exports.ExcluiMovie = (req, res) => {
    Movies.excluir(req.params.id).then(result => {
        res.redirect('/admin');
    })
   
}
exports.ExcluiSerie = (req, res) => {
    Series.excluir(req.params.id).then(result => {
        res.redirect('/admin');
    })
   
}




