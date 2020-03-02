const Movies = require('../models/Movies');
const Series = require('../models/Series');
const Users = require('../models/Users');
const UserList = require('../models/UserList');

var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
 
var options = {
    auth: {
        api_key: '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'
    }
}

exports.MostraPageIndex = (req, res) => {
    let movies = Movies.getAll((movies) =>{
        let destaques =Movies.getDest((destaques) =>{
            Movies.getinterations2ByIDUser(req.session.user.Id)    
            .then(interacoes => {
                let series = Series.getAllS((series) =>{
                    res.render('inicial',{series:series,interacoes:interacoes,movies : movies, destaques:destaques, user : req.session.user, interaUser : req.session.interaUser});             
                });
            })         
        }) 
    });
}


exports.MostraPerfil = (req, res) => {        
    res.render('profile',{ user : req.session.user, interaUser : req.session.interaUser});        
}



exports.MostraSeries = (req, res) => {
    let series = Series.getAllS((series) =>{   
            res.render('series',{series : series, user : req.session.user});     
    });
}


exports.MostraFilmes = (req, res) => {
    let movies = Movies.getAll((movies) =>{
        Movies.getinterations2ByIDUser(req.session.user.Id)    
            .then(interacoes => {
                res.render('filmes',{interacoes:interacoes,movies : movies, user : req.session.user});
            })      
    });
}

exports.WatchMovie = (req, res) => {
    let type=1;
    let inte=1;
    Movies.getByID(req.params.id)    
    .then(resultado => {
        UserList.AddListWatch(req.params.id,req.session.user.Id,type,inte)   
            .then(resultado2 => {
                res.render('watch',{movies : resultado,user : req.session.user});
        })
    })
}


exports.WatchSerie = (req, res) => {
    let type=2;
    let inte=1;
    Series.getEpsByID(req.params.id)    
    .then(series => {
        UserList.AddListWatch(req.params.id,req.session.user.Id,type,inte)   
            .then(resultado2 => {
                res.render('watchserie',{series : series,user : req.session.user});
        })
    })
}


exports.WatchedsMovie= (req, res) => {
    UserList.getWatchedListByIDUserSerie(req.session.user.Id)    
    .then(series => {
        UserList.getWatchedListByIDUser(req.session.user.Id)    
            .then(resultado => {
                console.log(series);
                res.render('watcheds',{interacoes : resultado,user : req.session.user,series:series});
            })
        })
}

exports.getListByIDUser = (req, res) => {
   UserList.getListByIDUserSerie(req.session.user.Id)    
    .then(series => {
                UserList.getListByIDUser(req.session.user.Id)    
                .then(resultado => {
                    console.log(series);
                    res.render('interacoesUser',{interacoes : resultado,user : req.session.user,series:series});
            })
        })
}


exports.MostraCadastro= (req, res) => {
    res.render('form-adduser',{user : req.session.user});
}
exports.MostraEditCadastro= (req, res) => {
    res.render('form-editUser',{user : req.session.user});
}

exports.MostraHome= (req, res) => {
    res.render('home',{user : req.session.user});
}

exports.FazCadastro= async(req, res) => {

   let user = new Users();
    user.name=req.body.UName;
    user.password=req.body.ULogin;
    user.email=req.body.UEmail;
    user.type='0';
    user.login=req.body.UUsername;
    user.cpf=req.body.Ucpf;
    user.Uimg=req.file.path;
    await user.salvar();
    var mailer = nodemailer.createTransport(sgTransport(options));
    var email = {
        to: [req.body.UEmail],
        from: 'atendimento@almafilmes.com',
        subject: 'Novo cadastro',
        text: 'Olá!'+req.body.UName+'!  Você realizou um novo cadastro em nosso site!',
        html: '<h2>Olá!'+req.body.UName+'<h2>!<b>Seja bem vindo!</b><p>Entre e aproveite nosso catálogo!</p>'
    };
     
    mailer.sendMail(email, function(err, res) {
        if (err) { 
            console.log(err) 
        }
        console.log(res);
        
    });
    
    res.redirect('/');
}




exports.EditaCadastro= async(req, res) => {

    let user = new Users();
    user.Id=req.body.Id;
     user.name=req.body.UName;
     user.password=req.body.ULogin;
     user.email=req.body.UEmail;
     user.type='0';
     user.login=req.body.UUsername;
     user.cpf=req.body.Ucpf;
     if(req.file){
        user.Uimg=req.file.path;

     }else{
        user.Uimg=req.body.olgimg;

     }
     await user.update();
     
     
     res.redirect('/profile');
 }









exports.AddList= async(req, res) => {
   let ul= new UserList();
   ul.id_user=req.body.user;
   ul.id_movie=req.body.identifier;
   ul.id_interation=req.body.idtype;
   ul.inList = req.body.inList;
   ul.type =  req.body.typeObj;
    await ul.salvar();
    return true;
}


