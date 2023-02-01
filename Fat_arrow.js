 const sum = (a,b)=> a+b
console.log("sum : "+sum(10,20))

// object creation using fat arrow function 
const person = (name,age) => ({
    name : name,
    age : age
})
// var person1 = new person("abhi",20)
// var person1 = person
// console.log(person1("Abhilash",21).name)
console.log(person("abhi",21).age)
 Book = (name,author) => ({
    name : name,
    author : author,
    getDetails : () =>{
        return "Name of the book:"+name+"\nAuthor:"+author
    }
 })
 
 console.log(Book("java","someone").getDetails())
// function Book(type, author) {
//     this.type = type;
//     this.author = author;
//     this.getDetails = function () {
//         return this.type + " written by " + this.author;
//     }
// }

// var book = new Book("Fiction", "Peter King");

// console.log(book.getDetails());        // => Fiction written by Peter King
