/*Array of objects can be filtered by using the method 
explained in this example: */
var family = [
  { name: "Jack", age: 26 },
  { name: "Jill", age: 22 },
  { name: "James", age: 5 },
  { name: "Jenny", age: 2 }
];
//Filters the Array of Objects to condition set
let filtered = family.filter(person => person.age > 18);
console.log(filtered);
filtered.forEach(q => {
  console.log(q);
});
