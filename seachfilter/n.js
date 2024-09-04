console.log(1);
// La primera línea se ejecuta inmediatamente, e imprime`1`.
// Por ahora, las colas de micro y macrotareas están vacías.

setTimeout(() => console.log(2));
// `setTimeout` agrega la callback a la cola de macrotareas.
// - contenido de la cola de macrotareas:
//   `console.log(2)`

Promise.resolve().then(() => console.log(3));
// La callback es agregada a la cola de microtareas.
// - contenido de la cola de microtareas:
//   `console.log(3)`

Promise.resolve().then(() => setTimeout(() => console.log(4)));
// La callback con `setTimeout(...4)` es agregada a las microtareas.
// - contenido de la cola de microtareas:
//   `console.log(3); setTimeout(...4)`

Promise.resolve().then(() => console.log(5));
// La callback es agregada a la cola de microtareas
// - contenido de la cola de microtareas:
//   `console.log(3); setTimeout(...4); console.log(5)`

setTimeout(() => console.log(6));
// `setTimeout` agrega la callback a las macrotareas
// - contenido de la cola de macrotareas:
//   `console.log(2); console.log(6)`

console.log(7);
// Imprime 7 inmediatamente.