const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();

  await prisma.user.createMany({
    data: [
      {
        nombre: "Brayan",
        correo: "brayan@gmail.com",
        edad: 22
      },
      {
        nombre: "Carlos",
        correo: "carlos@gmail.com",
        edad: 25
      }
    ]
  });

  await prisma.product.createMany({
    data: [
      {
        nombre: "Laptop",
        precio: 6500.50,
        stock: 5,
        categoria: "Tecnologia"
      },
      {
        nombre: "Mouse",
        precio: 150.00,
        stock: 20,
        categoria: "Accesorios"
      }
    ]
  });

  console.log("Datos insertados correctamente");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });