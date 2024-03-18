db.createCollection("users");

db.users.insertMany([{
    nombres: "Juan",
    apellidos: "Pérez",
    correo: "juanperez@example.com",
    ciudad: "Buenos Aires",
    país: "Argentina",
    salario: 3000,
    edad: 30,
    altura: 175,
    peso: 160
},
{
    nombres: "María",
    apellidos: "Gómez",
    correo: "mariagomez@example.com",
    ciudad: "Madrid",
    país: "España",
    salario: 3500,
    edad: 28,
    altura: 165,
    peso: 140
},
{
    nombres: "John",
    apellidos: "Smith",
    correo: "johnsmith@example.com",
    ciudad: "New York",
    país: "United States",
    salario: 4000,
    edad: 35,
    altura: 180,
    peso: 180
},
{
    nombres: "Luisa",
    apellidos: "Martínez",
    correo: "luisamartinez@example.com",
    ciudad: "Lima",
    país: "Perú",
    salario: 2800,
    edad: 32,
    altura: 160,
    peso: 130
},
{
    nombres: "David",
    apellidos: "Brown",
    correo: "davidbrown@example.com",
    ciudad: "London",
    país: "United Kingdom",
    salario: 4500,
    edad: 40,
    altura: 185,
    peso: 200
},
{
    nombres: "Ana",
    apellidos: "González",
    correo: "anagonzalez@example.com",
    ciudad: "Barcelona",
    país: "Spain",
    salario: 3200,
    edad: 25,
    altura: 170,
    peso: 150
},
{
    nombres: "Michael",
    apellidos: "Johnson",
    correo: "michaeljohnson@example.com",
    ciudad: "Los Angeles",
    país: "United States",
    salario: 3800,
    edad: 33,
    altura: 178,
    peso: 170
},
{
    nombres: "Sofía",
    apellidos: "Hernández",
    correo: "sofiahernandez@example.com",
    ciudad: "Mexico City",
    país: "Mexico",
    salario: 3100,
    edad: 29,
    altura: 163,
    peso: 135
},
{
    nombres: "Pedro",
    apellidos: "Alvarez",
    correo: "pedroalvarez@example.com",
    ciudad: "Santiago",
    país: "Chile",
    salario: 2900,
    edad: 27,
    altura: 175,
    peso: 155
},
{
    nombres: "Emily",
    apellidos: "Davis",
    correo: "emilydavis@example.com",
    ciudad: "Sydney",
    país: "Australia",
    salario: 4200,
    edad: 37,
    altura: 168,
    peso: 145
}
]);


// EJERCICIOS DE ACTUALIZACIÒN
db.users.find();

// 1. Incrementar el salario de todos los usuarios en un 10%.
db.users.updateMany(
    {},
    {$mul: {salario: 1.1}}
);

// 2. Cambiar la ciudad de residencia de los usuarios que actualmente viven en "New York" a "Los Ángeles".
db.users.updateMany(
  {ciudad: "New York"},
  {$set: {ciudad: "Los Ángeles"}}
);

// 3. Agregar el correo electrónico "nuevo@riwi.com" al usuario con nombre "Juan" y apellido "Perez".
db.users.updateOne(
    {nombres: "Juan", apellidos: "Pérez"},
    {$set: {correo: "nuevo@riwi.com"}}
);

// 4. Actualizar la edad del usuario con correo electrónico "ejemplo@riwi.es" a 35 años.
db.users.updateOne(
    {correo: "ejemplo@riwi.es"},
    {$set: {edad: 35}}
);

// 5. Cambiar el país de residencia de los usuarios que son de "Mexico" a "Canada".
db.users.updateMany(
    {país: "Mexico"},
    {$set: {país: "Canada"}}
);

// 6. Aumentar la altura de todos los usuarios en 5 centímetros.
db.users.updateMany(
    {},
    {$inc: {altura: 5}}
);

// 7. Cambiar el apellido del usuario con correo electrónico "otro@riwi.net" a "González".
db.users.updateOne(
    {correo: "otro@riwi.net"},
    {$set: {apellidos: "González"}}
);

// 8. Actualizar el peso del usuario con nombre "Maria" a 140 libras.
db.users.updateOne(
    {nombres: "María"},
    {$set: {peso:140}}
);

// 9. Incrementar el salario de todos los usuarios que son de "Estados Unidos" en un 15%.
db.users.updateMany(
    {país: "United States"},
    {$mul: {salario: 1.15}}
);

// 10. Actualizar el correo electrónico del usuario con nombre "Pedro" a "nuevo_correo@riwi.co".
db.users.updateOne(
    {nombres: "Pedro"},
    {$set: {correo: "nuevo_correo@riwi.co"}}
);

// 11. Cambiar la edad de todos los usuarios menores de 30 años a 30 años.
db.users.updateMany(
    {edad: {$lt: 30}},
    {$set: {edad:30}}
);

// 12. Incrementar el salario de los usuarios que tienen un salario inferior a 3000 dólares en un 20%.
db.users.updateMany(
    {salario: {$lt: 3000}},
    {$mul: {salario: 1.20}}
);

// 13. Actualizar la ciudad de residencia de todos los usuarios que actualmente viven en "Bogotá" a "Medellín".
db.users.updateMany(
    {ciudad: "Bogotá"},
    {$set: {ciudad: "Medellín"}}
);

// 14. Cambiar el país de residencia de los usuarios con un salario superior a 5000 dólares a "Australia".
db.users.updateMany(
    {salario: {$gt: 5000}},
    {$set: {país: "Australia"}}
);

// 15. Reducir la edad de todos los usuarios que tienen más de 50 años en 5 años.
db.users.updateMany(
    {edad: {$gt: 50}},
    {$inc: {edad: -5}}
);

// 16. Actualizar el peso de los usuarios que pesan más de 200 libras a 180 libras.
db.users.updateMany(
    {peso: {$gt: 200}},
    {$set: {peso: 180}}
);

// 17. Incrementar el salario de los usuarios que viven en "London" en un 25%.
db.users.updateMany(
    {ciudad: "London"},
    {$mul: {salario:2.25}}
);

// 18. Cambiar el apellido de los usuarios con un salario superior a 4000 dólares a "Smith".
db.users.updateMany(
    {salario: {$gt: 4000}},
    {$set: {apellidos: "Smith"}}
)

// 19. Actualizar el correo electrónico de todos los usuarios cuyo nombre empiece por "A" a "nuevo@riwi.es".
db.users.updateMany(
    {nombres: {$regex: /^A/}},
    {$set: {correo: "nuevo@riwi.es"}}
);

// 20. Cambiar la ciudad de residencia de los usuarios con una altura inferior a 160 centímetros a "París".
db.users.updateMany(
    {altura: {$lt: 160}},
    {$set: {ciudad: "París"}}
);


//EJERCICIOS DE ELIMINACIÓN
// 1. Eliminar todos los usuarios que tienen un salario menor que 2000 dólares.
db.users.deleteMany(
    {salario: {$lt: 2000}},
);

// 2. Eliminar usuarios que tienen una edad menor que 25 años.
db.users.deleteMany(
    {edad: {$lt: 25}}
);

// 3. Borrar todos los usuarios que viven en "París".
db.users.deleteMany(
    {ciudad: "París"},
);

// 4. Eliminar usuarios que tienen un peso superior a 180 libras.
db.users.deleteMany(
    {peso: {$gt: 180}},
);

//5. Eliminar usuarios que tienen una altura inferior a 160 centímetros.
db.users.deleteMany(
    {altura: {$lt: 160}},
);

// 6. Eliminar todos los usuarios que tienen el nombre "John" y el apellido "Doe".
db.users.deleteMany(
    {nombres:"John", apellidos:"Doe"}
);

// 7. Borrar usuarios que tienen una dirección de correo electrónico específica, por ejemplo, "borrar@riwi.com".
db.users.deleteMany(
    {correo: "otro@riwi.net"}
);

// 8. Eliminar usuarios que no tienen una dirección de correo electrónico registrada.
db.users.deleteMany(
    {correo: {$exists: false}},
);

// 9. Eliminar usuarios que viven en "Tokyo".
db.users.deleteMany(
    {ciudad: "Tokyo"}
);

// 10. Borrar todos los usuarios que son menores de 18 años.
db.users.deleteMany(
    {edad: {$lt: 18}}
);

// 11. Eliminar usuarios que tienen un salario igual a 0.
db.users.deleteMany(
    {salario: 0}
);

// 12. Borrar usuarios que viven en "New York" y tienen un salario superior a 5000 dólares.
db.users.deleteMany(
    {ciudad: "New York", salario: {$gt: 5000}}
);

// 13. Eliminar usuarios que tienen una dirección de correo electrónico que contiene la palabra "spam".
db.users.deleteMany(
    {correo: "spam"}
);

// 14. Borrar usuarios que viven en "Bello" y tienen más de 50 años.
db.users.deleteMany(
    {ciudad: "Bello", edad: {$gt: 50}}
);

// 15. Eliminar todos los usuarios que tienen el apellido "González".
db.users.deleteMany(
    {apellidos: "González"},
);

// 16. Borrar usuarios que tienen una edad superior a 70 años.
db.users.deleteMany(
    {edad: {$gt: 70}},
);

// 17. Eliminar usuarios que tienen un país de residencia igual a "Canadá" y un salario inferior a 4000 dólares.
db.users.deleteMany({
    $and: [
        {país:"Canadá"},
        {salario: {$lt: 4000}}
    ]
});

// 18. Borrar usuarios que tienen un salario entre 1000 y 2000 dólares.
db.users.deleteMany({
    $and: [
        {salario: {$gte: 1000}},
        {salario: {$lte: 2000}}
    ]
});

// 19. Eliminar usuarios que tienen una edad igual a 30 años.
db.users.deleteMany(
    {edad: 30}
);

// 20. Borrar usuarios que tienen una altura superior a 190 centímetros.
db.users.deleteMany(
    {altura: {$gt: 190}}
);