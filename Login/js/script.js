

var manterConectado = document.querySelector('#conectado')
var nome = document.querySelector('#nome')


if (localStorage.nome == null || localStorage.nome == undefined || localStorage.nome == ""){
    nome.value = '';
    manterConectado.checked = false
}else{
    nome.value = localStorage.nome;
    manterConectado.checked = true
}

function manter(){
    
    if (localStorage.nome == null || localStorage.nome == undefined || localStorage.nome == ""){
        if(manterConectado.checked && nome != ""){
            localStorage.nome = nome.value
        }
    }else{
        if (manterConectado.checked == false) {
            localStorage.removeItem("nome");
        }
    }
    
    //alert(localStorage.nome)
}