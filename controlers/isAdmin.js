module.exports = (req, res, next)=>{

    if (req.session.isadmin) 
        next()
    else
       // res.send('Não autorizado');
        res.redirect('/admin/login');
}

  