console.log("item connected");

const handleSubmit = () => {
  let items = document.querySelector("#item").value;
  let quantity = document.querySelector("quantity").value;
  let price = document.querySelector("#price").value;

  let userData = { items: items, quantity, price };
  console.log("userData", userData);
};
