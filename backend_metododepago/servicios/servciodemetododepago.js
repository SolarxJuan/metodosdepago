// servicios/metododepagoservicio.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const serviciodemetododepago = {
  async traermetododepago() {
    return await prisma.metodo.findMany();
  },

  async crearmetodop(data) {
    return await prisma.metodo.create({ data });
  },

  async deletemethod(id) {
    return await prisma.metodo.delete({ where: { id: parseInt(id) } });
  }
};

module.exports = serviciodemetododepago;