let nameField = document.getElementById("customer-name");
let phoneNumber = document.getElementById("phone");
let zajavka = document.getElementById("message-box");
let sendOrder = document.getElementById("order");

function checkFields() {
  if (!nameField.value.length) {
    nameField.style.borderColor = "red";
  }
  if (!phoneNumber.value.length) {
    phoneNumber.style.borderColor = "red";
  }
  if (!zajavka.value.length) {
    zajavka.style.borderColor = "red";
  }
}
sendOrder.addEventListener("click", checkFields);

// у кнопки id=order
//
// создать callback -функцию для события клик
//
// задать id полям имя телефон и текст заявки в html
//
// проверять длину каждого поля на введенные символы
