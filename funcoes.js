const cachorros = require('./database/cachorros.json');
const fs = require("fs")
//.length pq se caso tiver mais cachorros vai poder mostrar o tamanho
 //com o console.error a mensagem sai em vermelho
module.exports = {
    listar: function(){
        console.table(cachorros);
    },
    descrever: function(pos){
        if(pos >= cachorros.length || pos < 0){
            console.log("Cachorro inexistente!");
            return; // o return interrompe a função
        }
        
        let c = cachorros[pos]
        console.log(`Nome: ${c.nome}`);
        console.log(`Sexo: ${c.sexo}`);
        //console.log(`Castrado: ${c.castrado}`);
        if(c.castrado){
            console.log("Castrado: sim")
        }else{
            console.log("Castrado: não")
        };
        console.log(`Data de Nascimento: ${c.dataDeNascimento}`);
        console.log(`Peso: ${c.peso}`);
        console.log("Vacinas:")
        console.table(`${c.vacinas}`);
        console.log("Serviços:")
        console.table(c.servicos);
        },

   //adicionar
     adicionar: function($nome, $sexo, $castrado, $dataDeNascimento, $peso){
     //objeto cachorro
        let dog = {
            nome: $nome,
            sexo: $sexo,
            castrado: $castrado,
            dataDeNascimento: $dataDeNascimento,
            peso: $peso,
            vacinas: [],
            servicos: []
        }
        //adicionar o cachorro criado a array de cachorros 
        cachorros.push(dog);

        //gravar array de cachorros no arquivo cachorros.json
        fs.writeFileSync('./database/cachorros.json', JSON.stringify(cachorros));
    },
    vacinar:function(pos, nomeDaVacina){
        //verificar se existe um cachorro na posição passada
        if(pos >= cachorros.length || pos < 0){
            console.log("Cachorro inexistente");
            return;
    
        }
        let nomeVacina = {
            nome:nomeDaVacina,
            data:(new Date()).toISOString().substr(0,10)
        }
        //adicionar esse objeto literal com as informações da vacina
        cachorros[pos].vacinas.push(nomeVacina);

        //salvar o array de cachorros no arquivos
        fs.writeFileSync('./database/cachorros.json', JSON.stringify(cachorros,null,4));

    }



}
