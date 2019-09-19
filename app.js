

// // 2. Create an array which contains the object you have made above and name the arry "database"
// var database = [
// 	{
// 		username: "andrei",
// 		password: "supersecret"
//   }, 
//   {
//     username: "seun",
//     password: "slick407"
//   },
//   {
//     username: "stephen",
//     password: "ohis"
//   }
// ];

// // 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
// var newsfeed = [
// 	{
// 		username: "Bobby",
// 		timeline: "So tired from all that learning!"
// 	},
// 	{
// 		username: "Sally",
// 		timeline: "Javascript is sooooo cool!"
// 	},
// 	{
// 		username: "Mitch",
// 		timeline: "Javascript is preeetyy cool!"
// 	}
// ];

// promptUsername = prompt("What is your username");
// promptPassword = prompt("What is your password")

// const checkValidity = (use, pas) => {
//   for (let i = 0; i < database.length; i++) {
//     if (use === database[i].username && pas === database[i].password) {
//       return true
//     }
//   } 
//   return false
// }

// const signIn = (username, password) => {
//   if (checkValidity(username, password) === true) {
//     console.log(newsfeed)
//   } else {
//     console.log('username or password is incorrect')
//   }
// }

// signIn(promptUsername, promptPassword)
// // checkValidity = (usersss, passs) => {
// //   const usersss = promptUsername;
// //   const passs = promptPassword
// //   for (i = 0; i < database.length; i++) {
// //     if (users === database[i].username && passs === database[i].password) {
// //       console.log("username =====>", promptUsername)
// //       console.log("database =====>", database[i].username)
// //       return true;
// //     } else {
// //       return false;
// //     }
// //   } 
// // }

// // signIn = (checkValidity) => {
// //   if (checkValidity() === true) {
// //     console.log(newsfeed);
// //   } else {
// //     console.log("Access Denied")
// //   }
// // }

const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector('ul');

const inputLength = () => {
  return input.value.length;
}

const createListElement = () => {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = ""
}

const addListAfterClick = () => {
  if (inputLength() > 0) {
    createListElement();
    }
}

const addListAfterKeypress = (event) => {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);