ENTREGABLES DE API GRAPHQL
Documento de apoyo para la tarea de Arquitectura de Sistemas
Proyecto	API GraphQL pública conectada a MySQL y Prisma
Endpoint público	https://charming-reverence-production-ea0e.up.railway.app/graphql

Descripción breve. Este documento presenta los entregables solicitados para la actividad: el endpoint público para consumir la API y el esquema de los modelos disponibles en la implementación GraphQL.
1. Endpoint público para consumir la API
URL pública del endpoint: https://charming-reverence-production-ea0e.up.railway.app/graphql
Método de consumo: POST  |  Formato: GraphQL
Nota: La ruta raíz del dominio puede mostrar el mensaje “Cannot GET /”, lo cual es normal. La ruta correcta para consumir la API es /graphql.
Ejemplo de consulta para probar el endpoint
{
  "query": "query { products { id nombre precio stock categoria } }"
}
2. Esquema de los modelos disponibles
La API expone dos modelos principales: User y Product. A continuación se documentan sus campos disponibles.
Modelo: User
Campo	Tipo	Descripción
id	Int!	Identificador único del usuario
nombre	String!	Nombre del usuario
correo	String!	Correo electrónico único del usuario
edad	Int!	Edad del usuario
Modelo: Product
Campo	Tipo	Descripción
id	Int!	Identificador único del producto
nombre	String!	Nombre del producto
precio	Float!	Precio del producto
stock	Int!	Cantidad disponible en inventario
categoria	String!	Categoría a la que pertenece el producto
3. Operaciones disponibles en GraphQL
•	Query users: lista todos los usuarios.
•	Query user(id): obtiene un usuario por su identificador.
•	Query products: lista todos los productos.
•	Query product(id): obtiene un producto por su identificador.
•	Mutation createUser(nombre, correo, edad): crea un nuevo usuario.
•	Mutation createProduct(nombre, precio, stock, categoria): crea un nuevo producto.
Conclusión. Con este documento se cumple con los entregables solicitados: se proporciona el endpoint público para consumir la API y se adjunta la documentación del esquema de los modelos disponibles.
