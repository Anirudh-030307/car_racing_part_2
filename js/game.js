class Game{
    constructor(){









    }

    getState(){
        var toread = database.ref('gameState');
        toread.on("value",function (data) {
            gameState = data.val();
        })
    }

    updateState(State){
        database.ref('/').update({'gameState' : State});
    }

    start(){
        if (gameState === 0) {
            form = new Form();
            form.display();
            player = new Player();
            player.getplayerCount();
        }
    }

    play () {
        form.hide();
        text("GAME STARTS", 120 , 100 );
        Player.getplayerInfo();
        if (allPlayers!==undefined) {
            var displayPosition=130;
            for (var plr in allPlayers){
                displayPosition=displayPosition+20;
                text(allPlayers[plr].name+" : "+allPlayers[plr].distance,120,displayPosition)
            } 
           
        }
    }

}