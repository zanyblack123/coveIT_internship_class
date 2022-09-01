//const name = document.getElementById("name");
//const password = document.getElementById("password");
let button = document.querySelector("#btn");
button.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  let symbol = ["#", "@", "%", "*", "&"];
  if (email.value === "" || password.value === "") {
    return window.alert("all field are required");
  } else if (password.value.length < 8) {
    return window.alert("password must be greater or equal to 8");
  } else if (symbol.includes(password.value !== -1)) {
    return window.alert("please add symbol to your password field");
  }
  console.log("email", email.value);
  console.log("password", password.value);
});

// password.addEventListener('input',()=>{
//   event.preventDefault()
//   const passBox = document.querySelector('.passBox');
//   const passText = document.querySelector('.passText');
//   const passPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

//   if(password.value.match(passPattern)){
//     passBox.classList.add('valid');
//     passBox.classList.remove('invalid');
//     passText.innerHTML = "Your Password in Valid";
//   }else{
//     passBox.classList.add('invalid');
//     passBox.classList.remove('valid');
//     passText.innerHTML = "Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.";
//   }
// });
