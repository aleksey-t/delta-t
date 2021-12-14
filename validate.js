let nameField = document.getElementById("customerName");
let phoneNumber = document.getElementById("phone");
let zajavka = document.getElementById("message-box");
let sendOrder = document.getElementById("order");

function checkFields() {
  if (!nameField.value.length) {
    nameField.style.borderColor = "red";
    console.log("эээ, слищищь. Скажи, как тебя зовут, Ара");
  }
  if (!phoneNumber.value.length) {
    phoneNumber.style.borderColor = "red";
    console.log("вай-вай! Дай по телефону позвоню!");
  }
  if (!zajavka.value.length) {
    zajavka.style.borderColor = "red";
    console.log("напиши всё, что пришло тебе в голову, дорогой друг!");
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
