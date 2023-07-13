

    var diasNegativo = 0;


        const comidas = [
    ['Sanduíche', 10, 10,-5],
    ['Pizza', 15, 20,-10],
    ['Hambúrguer', 12, 15,-10],
    ['Sorvete', 8, 12,-8],
    ['Batata Frita', 10, 10,-10],
    ['Macarrão', 12, 15,-5],
    ['Salada', 5, 8,0],
    ['Torta de Frango', 10, 12,-5],
    ['Coxinha', 8, 10,-10],
    ['Sushi', 10, 18,0],
    ['Cachorro-Quente', 12, 10,-15],
    ['Lasanha', 15, 18,-5],
    ['Pastel', 8, 10,-15],
    ['Churrasco', 18, 25,-5],
    ['Arroz e Feijão', 10, 10,0],
    ];

    const bebidas = [
        ['Refri', 1,5,-10],
        ['Agua', 0,2,5],
        ['Suco natural', 5,8,0],
        ['Café', 5,10,-5],
        ['Suco de caixa', 1,1,-15],
        ['Água de bica', 1,0,-15],
        ['Corote', -5, 10, -20]

    ]

    function testarCurso(meuPersonagem){
        if(porctCurso >= 100){
            console.log('Incrivel, vc completou o curso!');
        }

    }
    function testarSaude(meuPersonagem) {
  if (meuPersonagem.saude < 0) {
    meuPersonagem.saude += 50;
    meuPersonagem.dinheiro += -50;
    meuPersonagem.animo += -20;
    return "Para recuperar saúde foi necessário gastar 50 de dinheiro e 20 de ânimo.";
  }
  return null;
}

function testarAnimo(meuPersonagem) {
  if (meuPersonagem.animo < 0) {
    meuPersonagem.energia -= 30;
    meuPersonagem.animo += 30;
    return "Impossível fazer tarefas antes de recuperar ânimo. Por isso você jogou essa noite";

  }
  return null;
}

function testarFome(meuPersonagem) {
  if (meuPersonagem.fome < 0) {
    meuPersonagem.fome += 10;
    meuPersonagem.animo -= 10;
    return "Impossível fazer tarefas faminto. Você come uma lagartixa frita, mas trate de se recuperar.";
  }
  return null;
}

function testarEnergia(meuPersonagem) {
  if (meuPersonagem.energia < 0) {
    meuPersonagem.animo -= 10;
    meuPersonagem.energia += 25;
    meuPersonagem.fome -= 5;
    return "Você está exausto, por favor, descanse. Para passar este dia você dormiu 12 horas ";
  }
  return null;
}

function testarLimpeza(meuPersonagem) {
  if (meuPersonagem.limpeza < 0) {
    meuPersonagem.limpeza += 5;
    meuPersonagem.animo -= 10;
    return "Você está fedendo, precisa de um banho. Mas alguém atirou uma bexiga de água em você, então você ganhou 5 de limpeza.";
  }
  return null;
}

function testarDinheiro(meuPersonagem) {
  if (meuPersonagem.dinheiro < 0) {
    diasNegativo += 1;
    testarDiasNegativo(diasNegativo);
    return "Não passe mais de 5 dias no cheque especial... senão.";
  }
  diasNegativo = 0;
  return null;
}

function testarDiasNegativo(diasNegativo){
    if (diasNegativo > 5) {
        alert("Game over");
  }
  return null;
}

$('#botaoEnviar').click(function() {
    var nomeUni = $('#nomeUni').val();
    if (nomeUni === '') {
        alert('O campo de nome está vazio. Por favor, preencha-o.');
    } else {
        // O campo de nome não está vazio, continue com a ação desejada
        // por exemplo, chamar a função "criar"
        criar();
    }
});


    let  personagem = {
        nome : '',
        curso : '',
        saude : 100 ,
        animo : 100,
        fome : 100,
        energia : 100,
        dinheiro :100,
        limpeza : 100,
        porctCurso:1
    }

    let horaMundo = 12;
    let diaMundo = 1;
    let meuPersonagem = Object.create(personagem);




    function passarHora(){
        horaMundo = horaMundo + 1;
        if(horaMundo== 24){
            horaMundo = 0;
            diaMundo = diaMundo +1;
            $('#valorHora').empty();
            $('#valorHora').append(horaMundo);
            $('#valorDia').empty();
            $('#valorDia').append(diaMundo);
            passarDia(meuPersonagem);
        }
        $('#valorHora').empty();
        $('#valorHora').append(horaMundo);

        valorDia
    }


    function passarDia(meuPersonagem) {
  let alertas = [];

  // Testar atributos
  let alertaSaude = testarSaude(meuPersonagem);
  let alertaAnimo = testarAnimo(meuPersonagem);
  let alertaFome = testarFome(meuPersonagem);
  let alertaEnergia = testarEnergia(meuPersonagem);
  let alertaLimpeza = testarLimpeza(meuPersonagem);
  let alertaDinheiro = testarDinheiro(meuPersonagem);

  // Adicionar alertas à lista
  if (alertaSaude) {
    alertas.push(alertaSaude);
  }
  if (alertaAnimo) {
    alertas.push(alertaAnimo);
  }
  if (alertaFome) {
    alertas.push(alertaFome);
  }
  if (alertaEnergia) {
    alertas.push(alertaEnergia);
  }
  if (alertaLimpeza) {
    alertas.push(alertaLimpeza);
  }
  if (alertaDinheiro) {
    alertas.push(alertaDinheiro);
  }

  // Exibir alertas na função mostrar
  if (alertas.length > 0) {
    mostrarAlerta(alertas.join(" " ));
    
  } else {
    mostrarAlerta("Nada acontece. Clique para continuar o jogo.");
  }
  meuPersonagem.limpeza -= getRandomInt(5, 25);
  $('#valorNomeBicho').text(meuPersonagem.nome);
    $('#valorSaude').text(meuPersonagem.saude);
    $('#valorAnimo').text(meuPersonagem.animo);
    $('#valorFome').text(meuPersonagem.fome);
    $('#valorEnergia').text(meuPersonagem.energia);
    $('#valorLimpeza').text(meuPersonagem.limpeza);
    $('#valorDinheiro').text(meuPersonagem.dinheiro);

  $(document).one("click", function() {
      console.log('finalizado dia') // Resolva a promessa para indicar o fim da função
    });
}

function mostrar(mensagem) {
  $('#instrucao').empty();
  $('#instrucao').append(mensagem);

  // Aguardar clique do mouse para continuar o jogo

}

function mostrarAlerta(mensagem) {
  $('#alerta').empty();
  $('#alerta').append('Resumo do dia passado: '+mensagem);

  // Aguardar clique do mouse para continuar o jogo

}



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function criar(){

    let nomePersonagem = $('#nomeUni').val();
    if (nomePersonagem == ''){
        alert("O nome Default é Renan, como vc não inseriu seu nome será Renan");
        nomePersonagem = 'Renan';
    }
    
    meuPersonagem.nome = nomePersonagem;

    // Esvaziar a div "comunicados"
    $('#inicio').empty();

    // Remover a div "comunicados" do HTML
    $('#inicio').remove();

    $('#dia').append('<p>Dia <span id = "valorDia">1</span></p>');
    $('#horario').append('<p>Hora: <span id = "valorHora">12</span></p>');
    $('#porctCursoCompleto').append('<span>Porcentagem do curso feito:</span><progress value="'+meuPersonagem.porctCurso+'" max="100">'+meuPersonagem.porctCurso+'</progress>');

    $('#cenario').append('<img id="cenarioImg" src="img/scene/BedRoom.png" class="mx-auto img-fluid">');
    $('#ator').append('<img id="charImg" src="img/Char/Person.png">');
    $('#botoes').append('<div class="d-flex flex-column flex-sm-row flex-wrap align-items-sm-center justify-content-center">' +
        '<button class="btn btn-primary col-6 col-sm-2 mb-2" onclick="Comer(meuPersonagem)" onmouseenter="mostrar(\'O universitário vai comer alguma coisa, que vai provavelmente desgastar sua saúde, diminuir o dinheiro e talvez deixar com ansiedade\')">Comer</button>' +
        '<button class="btn btn-primary col-6 col-sm-2 mb-2" onclick="Banho(meuPersonagem)" onmouseenter="mostrar(\'O universitário vai tomar algum banho, dependendo do tipo iremos recuperar saúde, animo e limpeza\')">Banho</button>' +
        '<button class="btn btn-primary col-6 col-sm-2 mb-2" onclick="Dormir(meuPersonagem)" onmouseenter="mostrar(\'Uma soneca, um cochilo, uma insônia, vamos ver o que nos aguarda. Afeta saúde, energia, animo e limpeza\')">Dormir</button>' +
        '<button class="btn btn-primary col-6 col-sm-2 mb-2" onclick="Estudar(meuPersonagem)" onmouseenter="mostrar(\'Só assim você avança no game. Dependendo da sessão de estudo, você avança sua formação, ganha ou perde animo, perde energia, perde pontos de fome, saúde e limpeza\')">Estudar</button>' +
        '<button class="btn btn-primary col-6 col-sm-2 mb-2" onclick="Trabalhar(meuPersonagem)" onmouseenter="mostrar(\'Uma das formas de ganhar dinheiro. Diminui animo, energia, saúde, limpeza e fome, aumenta grana, mas a que custo?\')">Trabalhar</button>' +
        '<button class="btn btn-primary col-6 col-sm-2 mb-2" onclick="Jogar(meuPersonagem)" onmouseenter="mostrar(\'Aumenta animo, leve chance de aumentar energia e saúde\')">Jogar</button>'+
    '</div>');
    $('#status').append(
    '<table class="table">' +
    '<tr><td>Nome do bicho:</td><td id="valorNomeBicho"></td></tr>' +
    '<tr><td>Saúde:</td><td id="valorSaude"></td></tr>' +
    '<tr><td>Animo:</td><td id="valorAnimo"></td></tr>' +
    '<tr><td>Fome:</td><td id="valorFome"></td></tr>' +
    '<tr><td>Energia:</td><td id="valorEnergia"></td></tr>' +
    '<tr><td>Limpeza:</td><td id="valorLimpeza"></td></tr>' +
    '<tr><td>Dinheiro:</td><td id="valorDinheiro"></td></tr>' +
    '</table>'

    
);
console.log(meuPersonagem);
    $('#valorNomeBicho').text(meuPersonagem.nome);
    $('#valorSaude').text(meuPersonagem.saude);
    $('#valorAnimo').text(meuPersonagem.animo);
    $('#valorFome').text(meuPersonagem.fome);
    $('#valorEnergia').text(meuPersonagem.energia);
    $('#valorLimpeza').text(meuPersonagem.limpeza);
    $('#valorDinheiro').text(meuPersonagem.dinheiro);

    }


function Comer(meuPersonagem) {
  // Selecionar uma comida aleatória
  let indiceComida = Math.floor(Math.random() * comidas.length);
  let comida = comidas[indiceComida];

  // Selecionar uma bebida aleatória
  let indiceBebida = Math.floor(Math.random() * bebidas.length);
  let bebida = bebidas[indiceBebida];

  // Atualizar os atributos do personagem com base nos valores da comida e bebida selecionadas
  meuPersonagem.fome += comida[1];
  meuPersonagem.dinheiro -= comida[2];
  meuPersonagem.saude += comida[3];

  // Exibir os atributos atualizados no HTML
  $('#valorFome').text(meuPersonagem.fome);
  $('#valorDinheiro').text(meuPersonagem.dinheiro);
  $('#valorSaude').text(meuPersonagem.saude);
  // Atualize os outros campos de status da mesma maneira

   $('#acao').text(meuPersonagem.nome + ' comeu '+ comida[0] + ' e bebeu ' + bebida[0]);

  // Exibir a comida e bebida selecionadas no console
  //console.log(comida[0]);
  passarHora();
}


function Banho(meuPersonagem) {
  // Selecionar um tipo de banho aleatório
  let indiceBanho = Math.floor(Math.random() * 5); // 5 opções diferentes de banho
  let tiposBanho = [
    { nome: 'Banho de Chuveiro', saudeRecuperada: 10, animoRecuperado: 5 },
    { nome: 'Banheira de Espuma', saudeRecuperada: 15, animoRecuperado: 10 },
    { nome: 'Banho de Aromaterapia', saudeRecuperada: 20, animoRecuperado: 15 },
    { nome: 'Banho de Cascata', saudeRecuperada: 25, animoRecuperado: 20 },
    { nome: 'Banho de Sauna', saudeRecuperada: 30, animoRecuperado: 25 }
  ];
  let banho = tiposBanho[indiceBanho];

  // Atualizar os atributos do personagem com base no tipo de banho selecionado
  meuPersonagem.saude += banho.saudeRecuperada;
  meuPersonagem.animo += banho.animoRecuperado;
  $('#valorSaude').text(meuPersonagem.saude);
  $('#valorAnimo').text(meuPersonagem.animo);

  // Exibir os atributos atualizados no HTML
  // $('#valorSaude').text(meuPersonagem.saude);
  // $('#valorAnimo').text(meuPersonagem.animo);

  // Exibir o tipo de banho selecionado no console
  console.log(banho.nome);
  passarHora();

  $('#acao').text(meuPersonagem.nome + ' tomou um banho de: ' + banho.nome + ' e está se sentindo mais limpo');
}

function Dormir(meuPersonagem) {
  let opcoesSono = ['Soneca', 'Cochilo', 'Insônia'];
  let indiceSono = Math.floor(Math.random() * opcoesSono.length);
  let sono = opcoesSono[indiceSono];

  let saudeAlterada, energiaAlterada, animoAlterado;

  // Definir as alterações de atributos com base na opção de sono selecionada
  switch (sono) {
    case 'Soneca':
      saudeAlterada = 5;
      energiaAlterada = 10;
      animoAlterado = 5;
      passarHora();
      passarHora();
      passarHora();
      passarHora();
      passarHora();
      passarHora();
      passarHora();
      break;
    case 'Cochilo':
      saudeAlterada = 10;
      energiaAlterada = 20;
      animoAlterado = 10;
      passarHora();
      passarHora();
      passarHora();
      break;
    case 'Insônia':
      saudeAlterada = -10;
      energiaAlterada = -20;
      animoAlterado = -10;
      passarHora();
      passarHora();
      passarHora();
      passarHora();
      break;
    default:
      saudeAlterada = 0;
      energiaAlterada = 0;
      animoAlterado = 0;
      break;
  }

  // Atualizar os atributos do personagem com base na opção de sono selecionada
  meuPersonagem.saude += saudeAlterada;
  meuPersonagem.energia += energiaAlterada;
  meuPersonagem.animo += animoAlterado;

  // Exibir os atributos atualizados no HTML
  $('#valorSaude').text(meuPersonagem.saude);
  $('#valorEnergia').text(meuPersonagem.energia);
  $('#valorAnimo').text(meuPersonagem.animo);

  // Exibir a opção de sono selecionada no console
  console.log(sono);

  $('#acao').text(meuPersonagem.nome + ' dormiu e teve um(a): ' + sono + ' - afetando saúde, energia e ânimo');
}

function Estudar(meuPersonagem) {
  let opcoesEstudo = [
    { nome: 'Consultar Professor', animoAlterado: 1, saudeAlterada: -5, fomeAlterada: -10, energiaAlterada: -15 },
    { nome: 'Ler Material', animoAlterado: 0, saudeAlterada: -5, fomeAlterada: -5, energiaAlterada: -10 },
    { nome: 'Estudar em Conjunto', animoAlterado: 5, saudeAlterada: -5, fomeAlterada: -10, energiaAlterada: -10 },
    { nome: 'Ir para Aula', animoAlterado: -5, saudeAlterada: -5, fomeAlterada: -10, energiaAlterada: -10, dinheiroAlterado: true, limpezaAlterada: -5 },
    { nome: 'Video Aulas', animoAlterado: 0, saudeAlterada: -5, fomeAlterada: -5, energiaAlterada: -10 },
    { nome: 'Estudar Bravamente', animoAlterado: 10, saudeAlterada: -10, fomeAlterada: -15, energiaAlterada: -15 }
  ];
  let indiceEstudo = Math.floor(Math.random() * opcoesEstudo.length);
  let estudo = opcoesEstudo[indiceEstudo];

  let horasPassadas = Math.floor(Math.random() * 6) + 1;
    for (let i = 0; i < horasPassadas; i++) {
    passarHora();
    }


  // Atualizar os atributos do personagem com base no tipo de estudo selecionado
  meuPersonagem.animo += estudo.animoAlterado;
  meuPersonagem.saude += estudo.saudeAlterada;
  meuPersonagem.fome += estudo.fomeAlterada;
  meuPersonagem.energia += estudo.energiaAlterada;
  meuPersonagem.porctCurso += getRandomInt(0, 5);
  if (estudo.dinheiroAlterado){
    meuPersonagem.dinheiro += -5;
  }


  $('#porctCursoCompleto').empty();
  $('#porctCursoCompleto').append('<span>Porcentagem do curso feito:</span><progress value="'+meuPersonagem.porctCurso+'" max="100">'+meuPersonagem.porctCurso+'</progress>');

  // Exibir os atributos atualizados no HTML
  $('#valorAnimo').text(meuPersonagem.animo);
  $('#valorSaude').text(meuPersonagem.saude);
  $('#valorFome').text(meuPersonagem.fome);
  $('#valorEnergia').text(meuPersonagem.energia);
  $('#valorDinheiro').text(meuPersonagem.dinheiro);

  // Exibir o tipo de estudo selecionado no console
  console.log(estudo.nome);

  $('#acao').text(meuPersonagem.nome + ' está estudando: ' + estudo.nome + ' - afetando ânimo, saúde, fome e energia');
}

function Trabalhar(meuPersonagem) {
  let opcoesTrabalho = [
    { nome: 'Entregador do Ifome', dinheiroGanho: 12, horasTrabalhadas: 1 },
    { nome: 'Ajudar seu zé com o computador', dinheiroGanho: 20, horasTrabalhadas: 1 },
    { nome: 'Freelancer', dinheiroGanho: 30, horasTrabalhadas: 3 },
    { nome: 'Revisar texto', dinheiroGanho: 30, horasTrabalhadas: 3 },
    { nome: 'Vender foto na internet', dinheiroGanho: 30, horasTrabalhadas: 1 },
    { nome: 'Passeador de cachorro', dinheiroGanho: 35, horasTrabalhadas: 2 },
    { nome: 'Babá de gato', dinheiroGanho: 40, horasTrabalhadas: 3 },
    { nome: 'Ajudar professor com aula', dinheiroGanho: 60, horasTrabalhadas: 2 },
    { nome: 'Ajudar seu pai com planilhas', dinheiroGanho: 20, horasTrabalhadas: 1 },
    { nome: 'Falsificar documentos para amigos e parentes', dinheiroGanho: 75, horasTrabalhadas: 2 },
    { nome: 'Estágio', dinheiroGanho: 100, horasTrabalhadas: 8 },
    { nome: 'Trabalho efetivo', dinheiroGanho: 200, horasTrabalhadas: 10 },
    { nome: 'Seu time ganhou na betNacional', dinheiroGanho: 100, horasTrabalhadas: 1 },
    { nome: 'Seu time perdeu na betNacional', dinheiroGanho: -250, horasTrabalhadas: 1 },
    { nome: 'Criar jogo mobile', dinheiroGanho: 30, horasTrabalhadas: 8 },
    { nome: 'Criar site de instituição', dinheiroGanho: 30, horasTrabalhadas: 8 },
    { nome: 'Show de palhaço para criançada', dinheiroGanho: 15, horasTrabalhadas: 2 },
    { nome: 'Ganhou campeonato de Yugioh', dinheiroGanho: 50, horasTrabalhadas: 3 },
    { nome: 'Perdeu campeonato de Yugioh', dinheiroGanho: -10, horasTrabalhadas: 3 },
    { nome: 'GhostWriter', dinheiroGanho: 20, horasTrabalhadas: 3 },
    { nome: 'Bolsa de pesquisa', dinheiroGanho: 20, horasTrabalhadas: 6 },
    { nome: 'Fazer um CORRE', dinheiroGanho: 30, horasTrabalhadas: 2 },
    { nome: 'Sair com a SugarMommy', dinheiroGanho: 50, horasTrabalhadas: 1 },
    { nome: 'Video pro youtube', dinheiroGanho: 3, horasTrabalhadas: 4 },
    { nome: 'Investir em criptomoeda da moda, vai dar retorno sim, alguma hora', dinheiroGanho: -40, horasTrabalhadas: 1 }
  ];

  let indiceTrabalho = Math.floor(Math.random() * opcoesTrabalho.length);
  let trabalho = opcoesTrabalho[indiceTrabalho];

  // Atualizar os atributos do personagem com base no tipo de trabalho selecionado
  meuPersonagem.dinheiro += trabalho.dinheiroGanho;
  meuPersonagem.animo -= getRandomInt(10, 30); // Diminui aleatoriamente o ânimo
  meuPersonagem.saude -= getRandomInt(10, 30); // Diminui aleatoriamente a saúde
  meuPersonagem.fome -= getRandomInt(10, 30); // Diminui aleatoriamente a fome
  meuPersonagem.energia -= getRandomInt(10, 30); // Diminui aleatoriamente a energia

  // Passar as horas de trabalho
  let horasTrabalhadas = trabalho.horasTrabalhadas;
  for (let i = 0; i < horasTrabalhadas; i++) {
    passarHora();
  }

  // Exibir os atributos atualizados no HTML
  $('#valorDinheiro').text(meuPersonagem.dinheiro);
  $('#valorAnimo').text(meuPersonagem.animo);
  $('#valorSaude').text(meuPersonagem.saude);
  $('#valorFome').text(meuPersonagem.fome);
  $('#valorEnergia').text(meuPersonagem.energia);

  // Exibir o tipo de trabalho realizado no console
  console.log(trabalho.nome);

  $('#acao').text(
    meuPersonagem.nome +
      ' trabalhou em ' +
      trabalho.nome +
      ' por ' +
      horasTrabalhadas +
      ' horas e teve impacto em diversos atributos'
  );
}



