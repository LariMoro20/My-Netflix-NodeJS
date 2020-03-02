const express = require('express');
const router= express.Router();
const Controlador = require('../controlers/mainController');
const loginController = require('../controlers/loginController');
const isLoged = require('../controlers/isLoged');

//Upload Imagens/Videos
const multer = require('multer');
const path = require('path');
const storageFunction = multer.diskStorage({
    destination: function (req, file, cb) {
     //cria a pasta do usuário caso nao exista usando o fs.
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  });

var upload = multer({ storage: storageFunction })

//Inicio / Login / Logout
router.get('/login', loginController.MostraLogin);
router.post('/dologin', loginController.FazLoginUser);
router.get('/deslogar', isLoged,loginController.Deslogar);
router.get('/inicial', Controlador.MostraHome);

//Cadastro
router.get('/cadastro',  Controlador.MostraCadastro);
router.post('/novo-user',upload.single('image'), Controlador.FazCadastro);

router.get('/editar-cadastro',isLoged,  Controlador.MostraEditCadastro);
router.post('/edit-user',isLoged,upload.single('image'), Controlador.EditaCadastro);



//Paginas Internas
router.get('/',isLoged, Controlador.MostraPageIndex);
router.get('/watched',isLoged, Controlador.WatchedsMovie);
router.get('/mylist',isLoged, Controlador.getListByIDUser);
router.get('/series', isLoged, Controlador.MostraSeries);
router.get('/filmes', isLoged, Controlador.MostraFilmes);
router.get('/profile', isLoged,  Controlador.MostraPerfil);

//Assistir
router.get('/watch/:id',isLoged, Controlador.WatchMovie);
router.get('/watchserie/:id',isLoged, Controlador.WatchSerie);
router.post('/addList',isLoged, Controlador.AddList);

module.exports = router;