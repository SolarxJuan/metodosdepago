const servciodemetododepago = require("../servicios/servciodemetododepago")

const metododepagocontrollers = {
    async traermetododepago(req,res){
        const metodop = await servciodemetododepago.traermetododepago();
        res.json(metodop);
    },

    async crearmetodop (req,res){
        const newmethod = req.body;
        const methodcreated = await servciodemetododepago.crearmetodop(newmethod);
        res.json({messege:"metodo_creado",metodo:methodcreated})
    },

    async deletemethod (req,res){
        await servciodemetododepago.deletemethod(req.params.id);
        res.json({messege:"metodo_eliminado"})
    }
}

module.exports=metododepagocontrollers