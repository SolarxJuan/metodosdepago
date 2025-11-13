const metododepagocontrollers=require('../controllers/metododepagocontrollers');
const express = require ('express');
const router = express.Router();


router.get('/metodos', metododepagocontrollers.traermetododepago);
router.post('/metodos', metododepagocontrollers.crearmetodop);
router.delete('/metodos/:id', metododepagocontrollers.deletemethod);

module.exports=router;
