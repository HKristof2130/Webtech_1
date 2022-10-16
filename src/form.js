let form = document.forms["targetForm"];
let button = document.getElementById("sendButton");

let name = document.getElementById("formName");
let date = document.getElementById("formDate");


button.addEventListener("click",checkFormValidity);

function checkCorrectNameInputValidity(){
    
    if( nameInput.value == ""){
        alert("Name can't be empty");
        name.style.color = "red";
        name.innerText = "Name is empty";
        
        return false;
    }
    else{
        name.style.color = "#552583";
        name.innerText = "Name:";

        return true;
    }
}

function checkCorrectDateInputValidity(){

    if(dateInput.value == ""){
        alert("Date can't be empty");
        date.style.color = "red";
        date.innerText = "Date is empty";
        return false;
    }
    else{
        date.style.color = "#552583";
        date.innerText = "Birth date:";

        return true;
    }

}

function checkFormValidity() {
    let nameInput = document.getElementById("nameInput");
    let dateInput = document.getElementById("dateInput");
    let importantInput = document.getElementById("importantRB");
    let lbjFan = document.getElementById("lbjFan");
    
    if( !checkCorrectNameInputValidity() ){
        checkCorrectDateInputValidity();
        return;
    }else if( !checkCorrectDateInputValidity() ){
        return;;
    }
    
    const jsonString = {
        "name" : `${nameInput.value}`,
        "birth_date" : `${dateInput.value}`,
        "important" : `${importantInput.checked}`,
        "lebron_fan" : `${lbjFan.checked}`
    }

    const data = JSON.stringify(jsonString);
    console.log(nameInput.value,dateInput.value,importantInput.checked,lbjFan.checked);
    console.log(data);
}