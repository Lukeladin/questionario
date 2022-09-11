class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
  // escreva aqui o código para ocultar os elementos da questão
    hide();
    // escreva o código aqui para mudar a cor de fundo
    backgroundColor("#DC143C")
    // escreva o código para exibir um cabeçalho indicando o resultado do Quiz
    push();
    textsize(40);
    text("resultado do questionário",425,20);
    pop();
    // chame getContestantInfo () aqui
    getPlayerInfo();

    // escreva a condição para verificar se contestantInfor não é indefinido
    if(allContestants !== undefined){
      fill("blue");
      textsize(20);
      TextTrack("jogador que respondeu corretamente é destacado de verde",130,230);
    }
    // escreva aqui o código para adicionar uma nota

    // escreva o código para destacar o competidor que respondeu corretamente
    
  }

}
