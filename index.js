// Note please uncomment the block and
// comment it back after use for better experience
// Run the project using npx nodemon --ignore db.json
console.clear();
console.log("\tLets Begin Es6\n")

// #region 1. Let & Const

// console.log("1. Let & Const")

// ES5
// var name = 'Dibesh';
// var dob = '07/14/1999';
// var title = 'Associate Software Engineer';

// ES6
// const name = "Dibesh"; // Dibesh will always be called Dibesh
// const dob = '07/14/1999'; // My DOB will not change
// let title = 'Associate Software Engineer' // But My title Can change

// Years Later
// title = 'Chief Technical Officer'

// You cannot re-assign to a constant but perform other operations.

// const age = 20;
// const n = ["D", "i", "b", "e", "s"];
// console.log(age)
// n.push("h");
// console.log(n)

// var -> is not block-scoped
// Office area
// var pet = "Dog";
// var inHome = true;

// if (inHome) {
//     var pet = "Parrot";
// }

// console.log(pet)
// var gets hoisted to parent scope

// let -> is block scoped
// let pet = "Dog";
// let inHome = true;

// if (inHome) {
//     let pet = "Parrot";
// }

// console.log(pet)

//  “let is the new var”.

// #endregion

// #region 2. Template Literals

// console.log("2. Template Literals")

// console.log("Hello " + "world " + new Date())
// console.log(`Hello world ${new Date()}`)

// #endregion

// #region 3. Destructuring objects

// console.log("3. Destructuring objects")

// const user = {
//     fullName: "Dibesh Raj Subedi",
//     address: {
//         city: "Kathmandu",
//         country: "Nepal"
//     }
// }

// const { fullName, address: { city, country } } = user

// console.log(`${fullName} lives in ${city}, ${country}.`)

// #endregion

// #region 4. Destructuring Array

// console.log("4. Destructuring Array")

// let [firstName, middleName, lastName] = ["Dibesh", "Raj", "Sdi"];

// console.log(`My full name is ${firstName} ${middleName} ${lastName}.`)

// lastName = "Subedi"

// console.log(`My full name is ${firstName} ${middleName} ${lastName}.`)

// #endregion

// #region 5. Object Literals

// console.log("5. Object Literals")

// function nameFormatter(firstName, middleName, lastName) {
//     return { firstName, middleName, lastName }
// }

// console.log(nameFormatter("Dibesh", "Raj", "Subedi"))

// #endregion

// #region 6. For of Loop

// console.log("6. For of Loop")

// const fullName = "Dibesh Raj Subedi"
// for (const char of fullName) {
//     console.log(char)
// }

// const students = [
//     { name: "John", city: "New York" },
//     { name: "Peter", city: "Paris" },
//     { name: "Kate", city: "Sidney" }
// ]

// for (const student of students) {
//     console.log(`${student.name} lives in ${student.city}.`)
// }

// #endregion

// #region 7. Spread Operator

// console.log("7. Spread Operator")
// let names = ["Dibesh", "Dinesh", "Dipesh"]

// let updatedNames = ["Danny", ...names];

// names.push("David")

// console.log("Names:", names)
// console.log("UpdatedNames:", updatedNames)

// let person = {
//     name: "Dibesh",
//     city: "Kathmandu"
// }

// let buddies = {
//     ...person,
//     subject: "React",
//     contact: "xyz@abc.com"
// }

// console.log("Person:", person)
// console.log("Buddies:", buddies)
// #endregion

// #region 8. Rest Operator

// console.log("8. Rest Operator")
// function add(...numbers) {
//     console.log(numbers)
//     // console.log(arguments) -> Deprecated with rest operator
// }

// add(4, 2)
// #endregion

// #region 9. Arrow function & default parameters

// console.log("9. Arrow function & default parameters")

// Function deceleration
// function greetings() {
//     return "Good Evening";
// }
// Anonymous function
// const welcome = function () {
//     return "Welcome to ReactBuddy"
// }

// Arrow function with default parameter
// const topic = (lesson = "Es6") => {
//     return `We are learning ${lesson}`
// }
// const topic = () => "We are learning Es6"

// console.log("Greetings:", greetings())
// console.log("Welcome:", welcome())
// console.log("Topic Default:", topic())
// console.log("Topic React:", topic("React"))
// #endregion

// #region 10. includes()

// console.log("10. includes()")
// let names = ["Dibesh", "Dinesh", "Dipesh"]
// let numbers = [1, 2, 3, 4, 5]

// console.log("\nIndex of:", numbers.indexOf(0))
// console.log("\nIndex of:", numbers.indexOf(2))
// console.log("\nIncludes:", numbers.includes(1))
// console.log("\nIncludes:", names.includes("Dibesh"))
// Not supported by Internet Explorer
// #endregion

// #region 11. Import & Export

// console.log("11. Import & Export")
// import Animal, { Dog, Cat } from "./Animals.js"

// const pet1 = new Dog("Tommy")
// pet1.introduce()
// console.log(pet1.info)

// const pet2 = new Cat("Rani")
// pet2.says()
// console.log(pet2.info)

// #endregion

// #region 13. Promises

// console.log("13. Promises")

// const makePayment = (amount = 0) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (amount <= 200) {
//                 reject("Sorry Payment, not successful")
//             }
//             else {
//                 resolve("Thank you, your payment was successful")
//             }
//         }, 2000)
//     })
// }

// makePayment(201)
//     .then((response) => {
//         console.log("Success:", response)
//     })
//     .catch((response) => {
//         console.log("Failure:", response)
//     })

// #endregion

// #region 14. Fetch

// console.log("14. Fetch")
// npx json-server --watch db.json

// Get Request
// fetch("http://localhost:3000/posts")
//     .then(response => response.json())
//     .then((response) => {
//         console.log("Success:", response)
//     })
//     .catch((response) => {
//         console.log("Failure:", response)
//     })

// Post Request
// const headers = new Headers();
// headers.append("Content-Type", "application/json");
// fetch("http://localhost:3000/posts", {
//     method: "POST",
//     headers,
//     body: JSON.stringify({
//         "id": 3,
//         "title": "React Project",
//         "author": "Subham Shrestha"
//     })
// })
//     .then(response => response.text())
//     .then((response) => {
//         console.log("Success:", response)
//     })
//     .catch((response) => {
//         console.log("Failure:", response)
//     })


// #endregion

// #region 15. Async & Await

// console.log("15. Async & Await")

// const photos = []

// const uploadPhoto = async () => {
//     let uploadStatus = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             photos.push("Profile Pic")
//             resolve("Photo Uploaded")
//         }, 2000)
//     })

//     let result = await uploadStatus;
//     console.log(result, photos.length) // Promise Resolved
// }

// uploadPhoto()

// #endregion

// #region 16. Sets

// console.log("15. Sets")

// const exampleSet = new Set([1, 1, 1, 2, 2, 2])
// exampleSet.add(5).add(6)
// console.log(exampleSet.delete(2)) // Return boolean
// console.log(exampleSet.has(1))
// exampleSet.clear()
// console.log(exampleSet)
// Set is also iterable use foreEach loops

// #endregion