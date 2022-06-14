
function usuario_guardado() {
    event.preventDefault();
    let url = "http://127.0.0.1:5500/teste.html";

    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let tel = document.getElementById("tel").value;
    let list = [];
   
    let check = document.forms[0].techs;

     for (let i = 0; i < check.length; i++) {
        if(check[i].checked) {
            const checked = check[i].value;
           
            list.push(checked);

        }   
     }


    body = {
        "checkbox": list,
        "email": email,
        "password": password,
        "tel": tel
    }

    alert = {}

    }
  