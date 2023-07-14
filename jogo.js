

    var diasNegativo = 0;
    


        const comidas = [
    ['Sanduíche', 15, 10,-5],
    ['Pizza', 20, 20,-10],
    ['Hambúrguer', 18, 15,-10],
    ['Sorvete', 12, 12,-8],
    ['Batata Frita', 14, 10,-10],
    ['Macarrão', 13, 15,-5],
    ['Salada', 15, 8,0],
    ['Torta de Frango', 15, 12,-5],
    ['Coxinha', 12, 10,-10],
    ['Sushi', 18, 18,0],
    ['Cachorro-Quente', 18, 10,-15],
    ['Lasanha', 25, 18,-5],
    ['Pastel', 15, 10,-15],
    ['Churrasco', 28, 25,-5],
    ['Arroz e Feijão', 22, 10,0],
    ['Parmegiana', 25, 10,-3],
    ['Sanduiche promocional Subway', 12, 13,3],
    ['Abacaxi', 20, 3,10],
    ['Maça', 14, 2,5],
    ['Miojo', 11, 1,-7],
    ['Miojo', 11, 1,-7],
    ['Miojo', 11, 1,-7],
    ['Miojo', 11, 1,-7],
	['Miojo', 11, 1,-7],
	['Miojo', 11, 1,-7],
    ['Cup Nodles', 14, 4,-11],
    ['Cup Nodles', 14, 4,-11],
    ['Cup Nodles', 14, 4,-11],
    ['Restos da geladeira', 5, 0,-5],
    ['Salada lovecraftiana', 10, 1,-3],
    ['Salada de Cenoura', 14, 2,5],
    ['Miojo com salsicha', 14, 5,-9],
    ['Miojo com salsicha', 14, 5,-9],
    ['Miojo com salsicha', 14, 5,-9],
    ['Lanche promocional surpresa do ifome (esfiha vencida)', 30, 7,-15]
    ];

    const bebidas = [
        ['Refri', 1,5,-10],
        ['Refri', 1,5,-10],
		['Refri', 1,5,-10],
        ['Agua', 0,2,5],
        ['Agua', 0,2,5],
        ['Agua', 0,2,5],
        ['Suco natural', 5,8,0],
        ['Café', 5,10,-5],
        ['Café', 5,10,-5],
        ['Café', 5,10,-5],
        ['Café', 5,10,-5],
        ['Suco de caixa', 1,1,-8],
        ['Água de bica', 1,0,-15],
        ['Agua de coco', 5, 3, 6],
        ['Chá de Mate', 3, 5, 5],
        ['Chá de hortelã', 3, 5, 5],
        ['Chá de Canela', 3, 5, 5],
        ['Chá de Morango', 5, 5, 5],
        ['Chá de Camomila', 5, 5, 5],
        ['Guaraná do amazonas', 15, 5, 2],
        ['Vinho barato', 15, 5, -2],
        ['Corote', -5, 10, -20]

    ]

    function testarCurso(meuPersonagem){
        if(porctCurso >= 100){
            console.log('Incrivel, vc completou o curso!');
        }

    }
    function testarSaude(meuPersonagem) {

  if(meuPersonagem.saude < -100){
    gameOver(meuPersonagem);
  }
  if (meuPersonagem.saude < 0) {
    meuPersonagem.saude += 70;
    meuPersonagem.dinheiro += -50;
    meuPersonagem.animo += -20;
    return "Para recuperar saúde foi necessário gastar 50 de dinheiro e 20 de ânimo. Se chegar menos de -100 durante a virada de dia você perde";
  }
  return null;
}

function testarAnimo(meuPersonagem) {
  if (meuPersonagem.fome < -100) {
    gameOver(meuPersonagem);
    return;
  }
  if (meuPersonagem.animo < 0) {
    meuPersonagem.energia -= 30;
    meuPersonagem.animo += 30;
    return "Impossível fazer tarefas antes de recuperar ânimo. Por isso você jogou essa noite";

  }
  return null;
}

function testarFome(meuPersonagem) {
  if (meuPersonagem.fome < -100) {
    gameOver(meuPersonagem);
    return;
  }
  if (meuPersonagem.fome < 0) {
    meuPersonagem.fome += 10;
    meuPersonagem.animo -= 10;
    meuPersonagem.saude -= 10;
    return "Impossível fazer tarefas faminto. Você come uma lagartixa frita, mas trate de se recuperar. Se chegar menos de -100 durante a virada de dia você perde";
  }
  return null;
}

function testarEnergia(meuPersonagem) {
  if (meuPersonagem.energia < 0) {
    meuPersonagem.animo -= 10;
    meuPersonagem.energia += 15;
    meuPersonagem.fome -= 5;
    passarHora();
    passarHora();
    passarHora();
    passarHora();
    passarHora();
    passarHora();
    return "Você está exausto, por favor, descanse. Para passar este dia você dormiu mais 6 horas ";
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

function testarCurso(meuPersonagem){
  if (meuPersonagem.porctCurso >100){
    $('#contenudo').empty();
    let mensagemSucesso = '<h1>Parabéns, você concluiu o curso!</h1>' +
  '<h2>Nome do universitário: ' + meuPersonagem.nome + '</h2>' +
  '<p>Status ao concluir o curso:</p>' +
  '<ul>' +
  '<li>Saúde: ' + meuPersonagem.saude + '</li>' +
  '<li>Ânimo: ' + meuPersonagem.animo + '</li>' +
  '<li>Fome: ' + meuPersonagem.fome + '</li>' +
  '<li>Energia: ' + meuPersonagem.energia + '</li>' +
  '<li>Limpeza: ' + meuPersonagem.limpeza + '</li>' +
  '<li>Dinheiro: ' + meuPersonagem.dinheiro + '</li>' +
  '</ul>' +
  '<p>Dias sobrevividos: ' + diaMundo + '</p>' +
  '<p>Porcentagem do curso concluído: ' + meuPersonagem.porctCurso + '%</p>' +
  '<br>' +
  '<button class="btn btn-primary" onclick="compartilharTwitter(meuPersonagem, diaMundo)">Compartilhar resultados no Twitter</button>' +
  '<button class="btn btn-primary" onclick="compartilharMastodon(meuPersonagem, diaMundo)">Compartilhar resultados no Mastodon</button>' +
  '<p>O ' + meuPersonagem.nome + ' adquiriu no curso:</p>';

// Verificar os status abaixo de 0
mensagemSucesso += '<p>✅ Diploma</p>';
if (meuPersonagem.saude < 0) {
  mensagemSucesso += '<p>✅ Doenças</p>';
}
if (meuPersonagem.animo < 0) {
  mensagemSucesso += '<p>✅ Depressão</p>';
}
if (meuPersonagem.fome < 0) {
  mensagemSucesso += '<p>✅ Fome</p>';
}
if (meuPersonagem.energia < 0) {
  mensagemSucesso += '<p>✅ Burnout</p>';
}
if (meuPersonagem.limpeza < 0) {
  mensagemSucesso += '<p>✅ Sujeira</p>';
}
if (meuPersonagem.dinheiro < 0) {
  mensagemSucesso += '<p>✅ Dívidas</p>';
}

// Adicionar a mensagem à div "contenudo"
$('#contenudo').html(mensagemSucesso);


  }
}

function testarDinheiro(meuPersonagem) {
  if (meuPersonagem.dinheiro < 0) {
    diasNegativo += 1;
    testarDiasNegativo(diasNegativo);
    return "Não passe mais de 5 dias no cheque especial... senão.";
  }
  if (diasNegativo> 5){
    gameOver(meuPersonagem);
  }
  diasNegativo = 0;
  return null;
}

function testarDiasNegativo(diasNegativo){
    if (diasNegativo > 5) {
        gameOver(meuPersonagem);
  }
  return null;
}

function gameOver(meuPersonagem){

      // Esvaziar a div "comunicados"
      $('#contenudo').empty();


      
      let mensagemGameOver = '<h1>Seu universitário foi embora</h1>' +
      '<h2>Nome do universitário: ' + meuPersonagem.nome + '</h2>' +
      '<p>Status quando ele partiu:</p>' +
      '<ul>' +
      '<li>Saúde: ' + meuPersonagem.saude + '</li>' +
      '<li>Ânimo: ' + meuPersonagem.animo + '</li>' +
      '<li>Fome: ' + meuPersonagem.fome + '</li>' +
      '<li>Energia: ' + meuPersonagem.energia + '</li>' +
      '<li>Limpeza: ' + meuPersonagem.limpeza + '</li>' +
      '<li>Dinheiro: ' + meuPersonagem.dinheiro + '</li>' +
      '</ul>' +
      '<p>Dias sobrevividos: ' + diaMundo+ '</p>' +
      '<p>Porcentagem do curso concluído: ' + meuPersonagem.porctCurso + '%</p>' +
      '<br>' +
      '<button class="btn btn-primary" onclick="compartilharTwitter(meuPersonagem, diaMundo)">Compartilhar resultados no Twitter</button>' +
      '<button class="btn btn-primary" onclick="compartilharMastodon(meuPersonagem, diaMundo)">Compartilhar resultados no Mastodon</button>'+
      '<p>O ' + meuPersonagem.nome + ' abandonou o curso por: </p>';
    
    // Verificar os status abaixo de 0
    if (meuPersonagem.saude < 0) {
      mensagemGameOver += '<p>✅ estava doente</p>';
    }
    if (meuPersonagem.animo < 0) {
      mensagemGameOver += '<p>✅ estava depressivo</p>';
    }
    if (meuPersonagem.fome < 0) {
      mensagemGameOver += '<p>✅ estava passando fome</p>';
    }
    if (meuPersonagem.energia < 0) {
      mensagemGameOver += '<p>✅  estava exausto</p>';
    }
    if (meuPersonagem.limpeza < 0) {
      mensagemGameOver += '<p>✅  estava sujo</p>';
    }
    if (meuPersonagem.dinheiro < 0) {
      mensagemGameOver += '<p>✅  estava devendo no banco</p>';
    }
    
    // Adicionar a mensagem à div "contenudo"
    $('#contenudo').html(mensagemGameOver);
    



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
  meuPersonagem.animo -= getRandomInt(35, 55);
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

    $('#valorNomeBicho').text(meuPersonagem.nome);
    $('#valorSaude').text(meuPersonagem.saude);
    $('#valorAnimo').text(meuPersonagem.animo);
    $('#valorFome').text(meuPersonagem.fome);
    $('#valorEnergia').text(meuPersonagem.energia);
    $('#valorLimpeza').text(meuPersonagem.limpeza);
    $('#valorDinheiro').text(meuPersonagem.dinheiro);

    testarCurso(meuPersonagem);

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
    guardarStatusAtual(meuPersonagem);

    // Esvaziar a div "comunicados"
    $('#inicio').empty();

    // Remover a div "comunicados" do HTML
    $('#inicio').remove();

    $('#dia').append('<p>Dia <span id = "valorDia">1</span></p>');
    $('#horario').append('<p>Hora: <span id = "valorHora">12</span></p>');
    $('#porctCursoCompleto').append('<span>Porcentagem do curso feito:</span><progress value="'+meuPersonagem.porctCurso+'" max="100">'+meuPersonagem.porctCurso+'</progress>');

    $('#cenario').append('<img id="cenarioImg" src="img/Scene/BedRoom.png" class="mx-auto img-fluid">');
    $('#ator').append('<img id="charImg" src="img/Char/Person.png">');
    $('#botoes').append('<div class="d-flex flex-column flex-sm-row flex-wrap align-items-sm-center justify-content-center">' +
        '<button class="btn btn-primary col-12 col-sm-6 col-md-2 mb-2" onclick="Comer(meuPersonagem)" onmouseenter="mostrar(\'O universitário vai comer alguma coisa, que vai provavelmente desgastar sua saúde, diminuir o dinheiro e talvez deixar com ansiedade\')">Comer</button>' +
        '<button class="btn btn-primary col-12 col-sm-6 col-md-2 mb-2" onclick="Banho(meuPersonagem)" onmouseenter="mostrar(\'O universitário vai tomar algum banho, dependendo do tipo iremos recuperar saúde, animo e limpeza\')">Banho</button>' +
        '<button class="btn btn-primary col-12 col-sm-6 col-md-2 mb-2" onclick="Dormir(meuPersonagem)" onmouseenter="mostrar(\'Uma soneca, um cochilo, uma insônia, vamos ver o que nos aguarda. Afeta saúde, energia, animo e limpeza\')">Dormir</button>' +
        '<button class="btn btn-primary col-12 col-sm-6 col-md-2 mb-2" onclick="Estudar(meuPersonagem)" onmouseenter="mostrar(\'Só assim você avança no game. Dependendo da sessão de estudo, você avança sua formação, ganha ou perde animo, perde energia, perde pontos de fome, saúde e limpeza\')">Estudar</button>' +
        '<button class="btn btn-primary col-12 col-sm-6 col-md-2 mb-2" onclick="Trabalhar(meuPersonagem)" onmouseenter="mostrar(\'Uma das formas de ganhar dinheiro. Diminui animo, energia, saúde, limpeza e fome, aumenta grana, mas a que custo?\')">Trabalhar</button>' +
        '<button class="btn btn-primary col-12 col-sm-6 col-md-2 mb-2" onclick="Jogar(meuPersonagem)" onmouseenter="mostrar(\'Aumenta animo, leve chance de aumentar energia e saúde\')">Jogar</button>'+
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
  $('#cenarioImg').remove();
  $('#cenario').append('<img id="cenarioImg" src="img/Scene/Kitchen.png" class="mx-auto img-fluid">');
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
  meuPersonagem.animo -= getRandomInt(-5, 5);

   $('#acao').text(meuPersonagem.nome + ' comeu '+ comida[0] + ' e bebeu ' + bebida[0] + '| Status alterados: ' + guardarStatusAtual(meuPersonagem));

  // Exibir a comida e bebida selecionadas no console
  //console.log(comida[0]);
  passarHora();
}


function Banho(meuPersonagem) {
  // Selecionar um tipo de banho aleatório
  $('#cenarioImg').remove();
  $('#cenario').append('<img id="cenarioImg" src="img/Scene/BedRoom.png" class="mx-auto img-fluid">');
  let indiceBanho = Math.floor(Math.random() * 5); // 5 opções diferentes de banho
  let tiposBanho = [
    { nome: 'Banho de Chuveiro', saudeRecuperada: 10, animoRecuperado: 5 },
    { nome: 'Banheira de Espuma', saudeRecuperada: 15, animoRecuperado: 10 },
    { nome: 'Banho de Aromaterapia', saudeRecuperada: 20, animoRecuperado: 15 },
    { nome: 'Banho de Cascata', saudeRecuperada: 25, animoRecuperado: 20 },
    { nome: 'Banho de nervoso', saudeRecuperada: 35, animoRecuperado: 30 },
    { nome: 'Banho de Sauna', saudeRecuperada: 30, animoRecuperado: 25 }
  ];
  let banho = tiposBanho[indiceBanho];

  // Atualizar os atributos do personagem com base no tipo de banho selecionado
  meuPersonagem.saude += banho.saudeRecuperada;
  meuPersonagem.animo += banho.animoRecuperado;
  meuPersonagem.fome += -5;
  meuPersonagem.energia += -5;
  meuPersonagem.limpeza  += 25;

$('#valorLimpeza').text(meuPersonagem.limpeza  );
	
  $('#valorSaude').text(meuPersonagem.saude);
  $('#valorAnimo').text(meuPersonagem.animo);
  $('#valorEnergia').text(meuPersonagem.energia);
  $('#valorFome').text(meuPersonagem.fome);

  // Exibir os atributos atualizados no HTML
  // $('#valorSaude').text(meuPersonagem.saude);
  // $('#valorAnimo').text(meuPersonagem.animo);

  // Exibir o tipo de banho selecionado no console
  console.log(banho.nome);
  passarHora();

  $('#acao').text(meuPersonagem.nome + ' tomou um banho de: ' + banho.nome + ' e está se sentindo mais limpo. O status:' + guardarStatusAtual(meuPersonagem));
}

function Dormir(meuPersonagem) {
  $('#cenarioImg').remove();
  $('#cenario').append('<img id="cenarioImg" src="img/Scene/BedRoom.png" class="mx-auto img-fluid">');
  let opcoesSono = ['Soneca', 'Cochilo', 'Sono pesado'];
  let indiceSono = Math.floor(Math.random() * opcoesSono.length);
  let sono = opcoesSono[indiceSono];

  let saudeAlterada, energiaAlterada, animoAlterado;

  // Definir as alterações de atributos com base na opção de sono selecionada
  switch (sono) {
    case 'Soneca':
      saudeAlterada = 5;
      energiaAlterada = 10;
      animoAlterado = 3;
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
      animoAlterado = -3;
      passarHora();
      passarHora();
      passarHora();
      break;
    case 'Sono pesado':
      saudeAlterada = +10;
      energiaAlterada = +23;
      animoAlterado = -5;
      passarHora();
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
  meuPersonagem.fome  += -20;

  // Exibir os atributos atualizados no HTML
  $('#valorSaude').text(meuPersonagem.saude);
  $('#valorEnergia').text(meuPersonagem.energia);
  $('#valorAnimo').text(meuPersonagem.animo);
  $('#valorFome').text(meuPersonagem.fome);

  // Exibir a opção de sono selecionada no console
  console.log(sono);

  $('#acao').text(meuPersonagem.nome + ' dormiu e teve um(a): ' + sono + ' | ' + guardarStatusAtual(meuPersonagem));
}

function Estudar(meuPersonagem) {
  $('#cenarioImg').remove();
  $('#cenario').append('<img id="cenarioImg" src="img/Scene/ClassRoom.png" class="mx-auto img-fluid">');
  //$('#ator').append('<img id="charImg" src="img/Char/Person.png">');
  let opcoesEstudo = [
    { nome: 'Consultando Professor', animoAlterado: 1, saudeAlterada: -5, fomeAlterada: -10, energiaAlterada: -15 },
    { nome: 'Lendo Material', animoAlterado: 0, saudeAlterada: -5, fomeAlterada: -5, energiaAlterada: -10 },
    { nome: 'Estudando em Conjunto', animoAlterado: 5, saudeAlterada: -5, fomeAlterada: -10, energiaAlterada: -10 },
    { nome: 'Foi para Aula', animoAlterado: -5, saudeAlterada: -5, fomeAlterada: -10, energiaAlterada: -10, dinheiroAlterado: true, limpezaAlterada: -5 },
    { nome: 'Asistindo video Aulas', animoAlterado: 0, saudeAlterada: -5, fomeAlterada: -5, energiaAlterada: -10 },
    { nome: 'Estudando Bravamente', animoAlterado: 10, saudeAlterada: -10, fomeAlterada: -15, energiaAlterada: -15 },
    { nome: 'Matando aula para estudae', animoAlterado: 15, saudeAlterada: -3, fomeAlterada: -3, energiaAlterada: -5 }

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
  meuPersonagem.porctCurso += getRandomInt(1, 3);
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

  $('#acao').text(meuPersonagem.nome + ' está estudando: ' + estudo.nome + ' - afetando: '+ guardarStatusAtual(meuPersonagem));
}

function Trabalhar(meuPersonagem) {
  $('#cenarioImg').remove();

  // Selecionar aleatoriamente a imagem do cenário
  let imagensCenario = [
    'img/Scene/Office.png',
    'img/Scene/City.png',
    'img/Scene/Park.png'
  ];
  let indiceCenario = Math.floor(Math.random() * imagensCenario.length);
  let imagemCenario = imagensCenario[indiceCenario];

  // Adicionar a nova imagem do cenário
  $('#cenario').append('<img id="cenarioImg" src="' + imagemCenario + '" class="mx-auto img-fluid">');

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
    { nome: 'Seu time perdeu na betNacional', dinheiroGanho: -110, horasTrabalhadas: 1 },
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
  meuPersonagem.animo -= getRandomInt(8, 35); // Diminui aleatoriamente o ânimo
  meuPersonagem.saude -= getRandomInt(5, 25); // Diminui aleatoriamente a saúde
  meuPersonagem.fome -= getRandomInt(10, 25); // Diminui aleatoriamente a fome
  meuPersonagem.energia -= getRandomInt(10, 35); // Diminui aleatoriamente a energia

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
  // console.log(trabalho.nome);

  $('#acao').text(
    meuPersonagem.nome +
      ' trabalhou em ' +
      trabalho.nome +
      ' por ' +
      horasTrabalhadas +
      'horas, e impactou em :' +
      guardarStatusAtual(meuPersonagem)
  );
}

function Jogar(meuPersonagem){
  $('#cenarioImg').remove();
  $('#cenario').append('<img id="cenarioImg" src="img/Scene/Office.png" class="mx-auto img-fluid">');
  let tiposJogo = [
    {
      nome: 'Indie bacana',
      saudeAlterada: 3,
      animoAlterado: 13,
      fomeAlterada: -5,
      energiaAlterada: 4,
      limpezaAlterada: 1,
      dinheiroGanho: -1
    },
    {
      nome: 'Counter Strike',
      saudeAlterada: -5,
      animoAlterado: 7,
      fomeAlterada: -6,
      energiaAlterada: -7,
      limpezaAlterada: -3,
      dinheiroGanho: -5
    },
    {
      nome: 'The sims',
      saudeAlterada: 0,
      animoAlterado: 3,
      fomeAlterada: -3,
      energiaAlterada: -3,
      limpezaAlterada: 0,
      dinheiroGanho: 0
    },
    {
      nome: 'Yugioh MasterDuel',
      saudeAlterada: 0,
      animoAlterado: 12,
      fomeAlterada: -6,
      energiaAlterada: 3,
      limpezaAlterada: 0,
      dinheiroGanho: -11
    },
    {
      nome: 'Tetris',
      saudeAlterada: 5,
      animoAlterado: 10,
      fomeAlterada: -6,
      energiaAlterada: -5,
      limpezaAlterada: 5,
      dinheiroGanho: 0
    },
    {
      nome: 'Stardew Valley',
      saudeAlterada: 5,
      animoAlterado: 11,
      fomeAlterada: -5,
      energiaAlterada: 5,
      limpezaAlterada: 5,
      dinheiroGanho: 0
    },
    {
      nome: 'Telethugs',
      saudeAlterada: 5,
      animoAlterado: 25,
      fomeAlterada: -5,
      energiaAlterada: -3,
      limpezaAlterada: 0,
      dinheiroGanho: 0
    },
    {
      nome: 'Guitar hero',
      saudeAlterada: 3,
      animoAlterado: 13,
      fomeAlterada: -15,
      energiaAlterada: -15,
      limpezaAlterada: -11,
      dinheiroGanho: 0
    },
    {
      nome: 'Disco Elysium',
      saudeAlterada: -5,
      animoAlterado: 25,
      fomeAlterada: 5,
      energiaAlterada: 15,
      limpezaAlterada: 0,
      dinheiroGanho: 0
    },
    {
      nome: 'Emulador de PSONE',
      saudeAlterada: 0,
      animoAlterado: 13,
      fomeAlterada: 0,
      energiaAlterada: -3,
      limpezaAlterada: -5,
      dinheiroGanho: 0
    },
    {
      nome: 'Emulador de GBA',
      saudeAlterada: 0,
      animoAlterado: 11,
      fomeAlterada: -3,
      energiaAlterada: 10,
      limpezaAlterada: 0,
      dinheiroGanho: 0
    },
    {
      nome: 'Naruto Ninja Storm',
      saudeAlterada:  0,
      animoAlterado: 11,
      fomeAlterada: -5,
      energiaAlterada: -5,
      limpezaAlterada: 0,
      dinheiroGanho: 0
    },
        {
      nome: 'Fortinite',
      saudeAlterada:  0,
      animoAlterado: 5,
      fomeAlterada: -3,
      energiaAlterada: -5,
      limpezaAlterada: -10,
      dinheiroGanho: 0
    },
    {
      nome: 'Lolzinho',
      saudeAlterada:  -10,
      animoAlterado: 5,
      fomeAlterada: -5,
      energiaAlterada: -5,
      limpezaAlterada: -10,
      dinheiroGanho: -12
    },
    {
      nome: 'Emulador de megadrive',
      saudeAlterada:  0,
      animoAlterado: 20,
      fomeAlterada: -5,
      energiaAlterada: -5,
      limpezaAlterada: -2,
      dinheiroGanho: 0
    }


  ];
  let indiceJogo = Math.floor(Math.random() * tiposJogo.length);
  let jogo = tiposJogo[indiceJogo];

  // Atualizar os atributos do personagem com base no jogo sorteado
  meuPersonagem.saude += jogo.saudeAlterada;
  meuPersonagem.animo += jogo.animoAlterado;
  meuPersonagem.fome += jogo.fomeAlterada;
  meuPersonagem.energia += jogo.energiaAlterada;
  meuPersonagem.limpeza += jogo.limpezaAlterada;
  meuPersonagem.dinheiro += jogo.dinheiroGanho;

  // Exibir as informações do jogo selecionado e atributos atualizados usando a função mostrar()
   passarHora();
  let mensagem = `Você jogou ${jogo.nome} e os atributos foram alterados. \n` + guardarStatusAtual(meuPersonagem);
  $('#valorDinheiro').text(meuPersonagem.dinheiro);
  $('#valorAnimo').text(meuPersonagem.animo);
  $('#valorSaude').text(meuPersonagem.saude);
  $('#valorFome').text(meuPersonagem.fome);
  $('#valorEnergia').text(meuPersonagem.energia);


  $('#acao').text(mensagem);
}

function guardarStatusAtual(meuPersonagem) {
  let statusAfetados = '\n';

  // Verificar e mostrar os status afetados
  if (meuPersonagem.saude !== meuPersonagem.saudeAnterior) {
    const alteracao = meuPersonagem.saude - meuPersonagem.saudeAnterior;
    statusAfetados += `Saúde (${alteracao > 0 ? '+' : ''}${alteracao}) `;
  }
  if (meuPersonagem.animo !== meuPersonagem.animoAnterior) {
    const alteracao = meuPersonagem.animo - meuPersonagem.animoAnterior;
    statusAfetados += `Ânimo (${alteracao > 0 ? '+' : ''}${alteracao}) `;
  }
  if (meuPersonagem.fome !== meuPersonagem.fomeAnterior) {
    const alteracao = meuPersonagem.fome - meuPersonagem.fomeAnterior;
    statusAfetados += `Fome (${alteracao > 0 ? '+' : ''}${alteracao}) `;
  }
  if (meuPersonagem.energia !== meuPersonagem.energiaAnterior) {
    const alteracao = meuPersonagem.energia - meuPersonagem.energiaAnterior;
    statusAfetados += `Energia (${alteracao > 0 ? '+' : ''}${alteracao}) `;
  }
  if (meuPersonagem.limpeza !== meuPersonagem.limpezaAnterior) {
    const alteracao = meuPersonagem.limpeza - meuPersonagem.limpezaAnterior;
    statusAfetados += `Limpeza (${alteracao > 0 ? '+' : ''}${alteracao}) `;
  }
  if (meuPersonagem.dinheiro !== meuPersonagem.dinheiroAnterior) {
    const alteracao = meuPersonagem.dinheiro - meuPersonagem.dinheiroAnterior;
    statusAfetados += `Dinheiro (${alteracao > 0 ? '+' : ''}${alteracao}) `;
  }

  // Atualizar os status anteriores
  meuPersonagem.saudeAnterior = meuPersonagem.saude;
  meuPersonagem.animoAnterior = meuPersonagem.animo;
  meuPersonagem.fomeAnterior = meuPersonagem.fome;
  meuPersonagem.energiaAnterior = meuPersonagem.energia;
  meuPersonagem.limpezaAnterior = meuPersonagem.limpeza;
  meuPersonagem.dinheiroAnterior = meuPersonagem.dinheiro;
	   return statusAfetados.trim();
}





  function compartilharTwitter(meuPersonagem, diaMundo) {
    let tweetText = '';
    tweetText += 'Joguei Universitamagochi #cuideDeUmBixo em https://rtomazini42.github.io/Universitamagochi/ '
  
    if (meuPersonagem.porctCurso > 100) {
      tweetText += 'Meu Bixo se graduou em ' + diaMundo + ' dias :)';
    } else {
      tweetText += 'Meu Bixo largou a universidade em ' + diaMundo + ' dias, com ' + meuPersonagem.porctCurso + '% do curso completo :(';
    }
  
    const tweetUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweetText);
    
    // Abrir a página do Twitter para compartilhar o tweet
    window.open(tweetUrl);
  }

  function compartilharMastodon(meuPersonagem, diaMundo) {
    // Obter a instância do usuário
    const instancia = prompt('Insira a instância Mastodon (ex: mastodon.social), sem https:');
  
    if (!instancia) {
      // Caso o usuário não tenha inserido a instância, retornar sem compartilhar
      return;
    }
  
    let mastodonText = '';
    mastodonText += 'Joguei Universitamagochi #cuideDeUmBixo em https://rtomazini42.github.io/Universitamagochi/ ';
  
    if (meuPersonagem.porctCurso > 100) {
      mastodonText += 'Meu Bixo se graduou em ' + diaMundo + ' dias :)';
    } else {
      mastodonText += 'Meu Bixo largou a universidade em ' + diaMundo + ' dias, com ' + meuPersonagem.porctCurso + '% do curso completo :(';
    }
  
    const mastodonUrl = 'https://' + instancia + '/share?text=' + encodeURIComponent(mastodonText);
  
    // Abrir a página do Mastodon para compartilhar a mensagem
    window.open(mastodonUrl);
  }
  
  
  
