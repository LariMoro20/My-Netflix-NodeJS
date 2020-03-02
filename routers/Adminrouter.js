const express = require('express');
const router= express.Router();
const ControladorAdm = require('../controlers/adminController');
const isAdmin = require('../controlers/isAdmin');
const loginController = require('../controlers/loginController');

//Upload Imagens/Videos
const multer = require('multer');
const path = require('path');
const storageFunction = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  });

var upload = multer({ storage: storageFunction })

//Inicio / Login / Logout
router.get('/admin', isAdmin, ControladorAdm.MostraPageList);
router.get('/admin/login', loginController.MostraLogin);
router.post('/admin/dologin', loginController.FazLogin);
router.get('/admin/list-movies', isAdmin, ControladorAdm.MostraPageList);
router.get('/admin/deslogar', loginController.Deslogar);

//Filmes
router.get('/admin/add-filme', isAdmin, ControladorAdm.MostraPaginaAdd);
router.post('/admin/novo-filme',isAdmin,upload.single('file'), ControladorAdm.CadastraMovie);
router.get('/admin/editar-filme/:id',isAdmin, ControladorAdm.MostraPaginaEdit);
router.post('/admin/edit-filme',isAdmin, ControladorAdm.EditaMovie);
router.get('/admin/excluirFilme/:id',isAdmin, ControladorAdm.ExcluiMovie);

//Series
router.get('/admin/editar-serie/:id',isAdmin, ControladorAdm.MostraPaginaEditSerie);
router.post('/admin/edit-serie',upload.array('files',10), ControladorAdm.EditaSerie);
router.post('/admin/removeEps',isAdmin, ControladorAdm.RemoveEps);
router.get('/admin/add-serie', isAdmin, ControladorAdm.MostraPaginaAddSerie);
router.post('/admin/nova-serie',upload.array('files',10), ControladorAdm.CadastraSerie);
router.get('/admin/excluirSerie/:id',isAdmin, ControladorAdm.ExcluiSerie);

router.post('/admin/destak',isAdmin, ControladorAdm.DestakMovie);
router.get('/admin/interacoes/:id',isAdmin, ControladorAdm.MostraPaginaInteracoes);




module.exports = router;