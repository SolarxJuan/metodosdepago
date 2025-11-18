// servicios/metododepagoservicio.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const serviciodemetododepago = {
  async traermetododepago() {
    return await prisma.modopago.findMany();
  },

  async crearmetodop(data) {
    return await prisma.modopago.create({ data });
  },

  async deletemethod(id) {
    return await prisma.modopago.delete({ where: { id: parseInt(id) } });
  }
};

module.exports = serviciodemetododepago;