function somar(n1, n2){
    let resultado = n1 + n2;
    console.log('Resultado: ' + resultado)
}
somar(10,15);

function nomeCompleto(nome, sobrenome){
    console.log(`Meu nome completo é ${nome} ${sobrenome}`);//Template String
    
    //console.log("Meu nome completo é " nome + ' ' + sobrenome);//String
}
nomeCompleto("Rodrigo", "Oliveira");
nomeCompleto("Matheus","Suricato");