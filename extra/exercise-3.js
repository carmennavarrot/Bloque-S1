const movies = [{
    name: "Your Name",
    durationInMinutes: 130
},
{
    name: "Pesadilla antes de navidad",
    durationInMinutes: 225
},
{
    name: "Origen",
    durationInMinutes: 165
},
{
    name: "El señor de los anillos",
    durationInMinutes: 967
},
{
    name: "Solo en casa",
    durationInMinutes: 214
},
{
    name: "El jardin de las palabras",
    durationInMinutes: 40
}];
let pelisCortas = [];
let PelisMedianas = [];
let pelisLargas = [];
for (let index = 0; index < movies.length; index++) {
    const movie = movies[index];
    if (movie.durationInMinutes < 100) {
        pelisCortas.push(movie);
    } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
        PelisMedianas.push(movie);
    } else {
        pelisLargas.push(movie);
    }
}
console.log(pelisCortas);
console.log(PelisMedianas);
console.log (pelisLargas);