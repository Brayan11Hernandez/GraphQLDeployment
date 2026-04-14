const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const resolvers = {
  Query: {
    users: async () => {
      return await prisma.user.findMany();
    },
    user: async (_, args) => {
      return await prisma.user.findUnique({
        where: { id: args.id }
      });
    },
    products: async () => {
      return await prisma.product.findMany();
    },
    product: async (_, args) => {
      return await prisma.product.findUnique({
        where: { id: args.id }
      });
    }
  },

  Mutation: {
    createUser: async (_, args) => {
      return await prisma.user.create({
        data: {
          nombre: args.nombre,
          correo: args.correo,
          edad: args.edad
        }
      });
    },
    createProduct: async (_, args) => {
      return await prisma.product.create({
        data: {
          nombre: args.nombre,
          precio: args.precio,
          stock: args.stock,
          categoria: args.categoria
        }
      });
    }
  }
};

module.exports = resolvers;