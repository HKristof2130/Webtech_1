let form = document.forms["targetForm"];
let button = document.getElementById("sendButton");

let name = document.getElementById("formName");
let date = document.getElementById("formDate");


button.addEventListener("click",checkFormValidity);


function checkFormValidity() {
    let nameInput = document.getElementById("nameInput");
    let dateInput = document.getElementById("dateInput");
    let importantInput = document.getElementById("importantRB");
    let lbjFan = document.getElementById("lbjFan");
    

    if( nameInput.value == ""){
        alert("Name can't be empty");
        name.style.color = "red";
        name.innerText = "Name is empty";
        
        return ;
    }
    else{
        name.style.color = "#552583";
        name.innerText = "Name:";
    }

    if(dateInput.value == ""){
        alert("Date can't be empty");
        date.style.color = "red";
        date.innerText = "Date is empty";
        return ;
    }
    else{
        date.style.color = "#552583";
        date.innerText = "Birth date:"
    }

    if(lbjFan.checked == true){
        let cb = "Lebron James fan";
    }
    else{
        let cb = "Not a Lebron James fan";
    }



    console.log(nameInput.value,dateInput.value,importantInput.value,lbjFan.value);
}