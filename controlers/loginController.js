
const db = require('../database');

exports.MostraLogin = (req, res) => {
    res.render('doLoginAdmin', {pageTitle: "Login",
        logado: req.session.loggedIn,
        user : req.session.user
    })

}


exports.Deslogar = (req, res) => {

    //destruir a sessão
    req.session.destroy();

    //redirecionar
    res.redirect('login');

}


exports.FazLogin = (req, res) => {

    const login = req.body.login;
    const pass = req.body.password;

    let query = `SELECT * FROM users 
        WHERE login = '${login}' AND password = '${pass}'`;

    db.execute(query)
    .then(result => {
        console.log(query);
        console.log(result[0]);
        if (result[0].length > 0) {
            req.session.user = result[0][0];
            req.session.loggedIn = true;
            if (result[0][0].isadmin) {
                res.cookie('isadmin', 'true');
                req.session.isadmin = true;
                res.redirect('/admin/list-movies');  
            } else {
                res.redirect('/admin/login');
            }
        } else {
            //res.write("Usuário e senhas não conferem!");
            //res.end();
            res.render('login', {
            logado: req.session.loggedIn,
            user : req.session.user,
            erro: "Dados não conferem"
        });
        }
    })
    .catch(erro => {
        console.log(erro);
        res.write(JSON.stringify(erro));
        res.end();
    });

}


exports.FazLoginUser = (req, res) => {

    const login = req.body.login;
    const pass = req.body.password;

    let query = `SELECT * FROM users 
        WHERE email = '${login}' AND password = '${pass}'   `;

    db.execute(query)
    .then(result => {
     
        if (result[0].length > 0) {
            req.session.user = result[0][0];
            req.session.loggedIn = true;
            if (result[0][0].isadmin) {
                res.cookie('isadmin', 'true');
                req.session.isadmin = true;
                res.redirect('/');  
            } else {
                res.redirect('/');
            }
        } else {
            res.render('/home', {
            logado: req.session.loggedIn,
            user : req.session.user,
            interaUser : req.session.interaUser,
            erro: "Dados não conferem"
        });
        }
    })
    .catch(erro => {
        console.log(erro);
        res.write(JSON.stringify(erro));
        res.end();
    });

}




exports.Deslogar = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}