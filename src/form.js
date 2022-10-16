let form = document.forms["targetForm"];
let button = document.getElementById("sendButton");

let name = document.getElementById("formName");
let date = document.getElementById("formDate");

let nameInput = document.getElementById("nameInput");
let dateInput = document.getElementById("dateInput");

let text = document.getElementById("text");
let textInput = document.getElementById("textBox");

let importantInput = document.getElementById("importantRB");
let lbjFan = document.getElementById("lbjFan");


button.addEventListener("click", checkFormValidity);

function checkCorrectNameInputValidity() {

    if (nameInput.value == "") {
        alert("Name can't be empty");
        name.style.color = "red";
        name.innerText = "Name is empty";

        return false;
    }
    else {
        name.style.color = "#552583";
        name.innerText = "Name:";

        return true;
    }
}

function checkCorrectDateInputValidity() {

    if (dateInput.value == "") {
        alert("Date can't be empty");
        date.style.color = "red";
        date.innerText = "Date is empty";
        return false;
    }
    else {
        date.style.color = "#552583";
        date.innerText = "Birth date:";

        return true;
    }

}

function checkCorrectTextBoxValidity(){

    if (textInput.value == "") {
        alert("Message can't be empty");
        text.style.color = "red";
        text.innerText = "Message is empty";

        return false;
    }
    else {
        text.style.color = "#552583";
        text.innerText = "Message: ";
        
        return true;
    }

}

function checkFormValidity() {

    if (!checkCorrectNameInputValidity()) {
        checkCorrectDateInputValidity();
        checkCorrectTextBoxValidity();
        return;
    } else if (!checkCorrectDateInputValidity()) {
        checkCorrectTextBoxValidity();
        return;
    } else if (! checkCorrectTextBoxValidity()){
        return;
    }

    const jsonString = {
        "name": `${nameInput.value}`,
        "birth_date": `${dateInput.value}`,
        "message" : `${textInput.value}`,
        "important": `${importantInput.checked}`,
        "lebron_fan": `${lbjFan.checked}`
    }

    const data = JSON.stringify(jsonString);
    console.log(data);
}