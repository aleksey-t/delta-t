let nameField = document.getElementById("customer-name");
let phoneNumber = document.getElementById("phone");
let sendOrder = document.getElementById("order");
let formMessage = document.getElementById("form-message");

function checkFields() {
  const name = nameField.value.length;
  const phone = phoneNumber.value.length;
  const formValid = name && phone;

  if (!name) {
    nameField.style.borderColor = "red";
  }else {
    nameField.style.borderColor = "grey";
  }

  if (!phone) {
    phoneNumber.style.borderColor = "red";
  }else {
    phoneNumber.style.borderColor = "grey";
  }

  if(!formValid){
    formMessage.innerHTML = "Заполните обязательные поля";
  }else {
    formMessage.innerHTML = "";
  }
}
sendOrder.addEventListener("click", checkFields);
nameField.addEventListener("change", checkFields);
phoneNumber.addEventListener("change", checkFields);



// у кнопки id=order
//
// создать callback -функцию для события клик
//
// задать id полям имя телефон и текст заявки в html
//
// проверять длину каждого поля на введенные символы
