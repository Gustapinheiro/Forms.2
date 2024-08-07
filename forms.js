$(document).ready(function(){
    alert("Meu site carregou");

     $( "#botãoOla").on( "click", function(){
        alert( "olá turma 2F" );
     });
    $( "#cabcidade" ).on( "change", function(){
        alert( "tem certeza?");
    });
     $( "#Gener" ).on( "change", function(){
        alert( "Tudo certo?");
     })

    $( "#botãosalvar" ).on( "click", function(){
        let dados = "";

        if($("#Nomedomano").val() == ""){
            alert("Preencha seu nome meu mano!");
            return 0;
        }else {
            dados += "Nome: " + $("#Nomedomano").val() + "\n";
        }
            
            if($("#Sobrenomedomano").val() == ""){
            alert("preencha seu sobrenome mané!");
            return 0;

        }else{
            dados += "Sobrenome: " + $("#Sobrenomedomano").val() + "\n";
        } 
        
        if($("#Rgdoparceiro").val() ==""){
            alert("Coloca o RG meu filho👀!");
            return 0;
        }else{
            dados += "RG: " + $("#Rgdoparceiro").val() + "\n";
        } 
        
        if($("#tex4to").val() == ""){
            alert("Cade o CPF?");
            return 0;
        }else{
            dados += "CPF: " + $("#tex4to").val() + "\n";
        } 
        
        if($("#tex5to").val() == ""){
            alert("Informe seu telefone né!");
            return 0;
        }else{
            dados += "Telefone: " + $("#tex5to").val() + "\n";
        } 
        
        if($("#tex6to").val() == ""){
            alert("Esqueceu a idade🤣");
            return 0;
        }else{
            dados += "idade: " + $("#tex6to").val() + "\n";
        } 
        
        if($("#Gener").val() == ""){
            alert("informe seu genero!");
            return 0;
        }else{
            dados += "Gênero: " + $("#Gener").val() + "\n";
        } 
        
        if($("#Estadoderelacionamento").val() == ""){
            alert("informe seu estado civil!");
            return 0;
        }else{
            dados += "Estado Civil: " + $("#Estadoderelacionamento").val() + "\n";
        } 
        
        if($("#cabcidade").val() == ""){
            alert("Selecione sua cidade mano!");
            return 0;
        }else{
            dados += "Cidade: " + $("#cabcidade").val() + "\n";
        }
            alert(dados + "Dados salvos com sucesso bro!");
      
    });

    

});