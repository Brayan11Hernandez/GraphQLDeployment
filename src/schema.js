const typeDefs = `#graphql
  type User {
    id: Int!
    nombre: String!
    correo: String!
    edad: Int!
  }

  type Product {
    id: Int!
    nombre: String!
    precio: Float!
    stock: Int!
    categoria: String!
  }

  type Query {
    users: [User!]!
    user(id: Int!): User
    products: [Product!]!
    product(id: Int!): Product
  }

  type Mutation {
    createUser(nombre: String!, correo: String!, edad: Int!): User!
    createProduct(nombre: String!, precio: Float!, stock: Int!, categoria: String!): Product!
  }
`;

module.exports = typeDefs;