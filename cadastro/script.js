const form = document.querySelector("form");
const nomeinput = document.getElementById("nome");
const senhainput = document.getElementById("senha");
const emailinput = document.getElementById("email");
const idadeinput = document.getElementById("idade")


    //validações
    const validarNome = () => {
        if(nomeinput.value === ""){
            alert('Por favor, preencha o campo Nome!');
            return false;


            }else{
                return true;
                };


    }

    const validaridade = () => {
        if (idadeinput.value === ""){
            alert('Por favor, preencha a Idade!')
            return false;
           }
}  


              
    const validarSenha = () => {
        if (senhainput.value === ""){
            alert ('Por favor, preencha a Senha!')
            return false;
            } else if (senhainput.length < 6){
                alert ("A senha precisa ter no mínimo 6 caracteres!");
                return false;
                }else{
                    return true;
                    }
    }


    const validaremail = () => {
        if(emailinput.value === ""){
            alert('Por favor, preencha o campo e-mail!');
            return false;


            }else{
                return true;
                };
            }


    //função de envio do formulário
    form.addEventListener("submit" ,(evente) => {
        evente.preventDefault();
       
        //Teste
        console.log(nomeinput.value);
        console.log(senhainput.value);
        console.log(emailinput.value);
        console.log(idadeinput.value);
    });