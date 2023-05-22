 let persona = {
    name: 'John',
    lastname: 'Doe'
 }
 const { name, lastname } = persona;


 const frutas = ["Manzanas", "Peras"];
 const [f1, f2] = frutas;


 function useState(value){

    return [value, function(v){ value = v;} ]

 }