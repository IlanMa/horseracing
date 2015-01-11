var horseRacing = new Object();
horseRacing.marginHorseQ = 0;
horseRacing.marginHorseP = 0; 
horseRacing.gameActive = false;
setTimeout(function(){document.getElementById("intro").innerHTML = "READY?";},1000);
setTimeout(function(){document.getElementById("intro").innerHTML = "SET!";},2000); 
setTimeout(function(){
    horseRacing.gameActive = true;
    document.getElementById("horseImageUn").src = "images/horseRunning.gif";  
    document.getElementById("horseImageDeux").src = "images/horseRunning.gif"; 
    document.getElementById("intro").innerHTML = "GO!";
},3000);
setTimeout(function(){document.getElementById("intro").innerHTML = "";},4000);


horseRacing.checkWinner = function(player, section){
    if (this.marginHorseP >=90 || this.marginHorseQ >=90){
        document.getElementById("intro").innerHTML = "Player "+player+" WINS!";  
        this.gameActive = false;
        document.getElementById("horseImageUn").src = "images/horseStanding.gif"; 
        document.getElementById("horseImageDeux").src = "images/horseStanding.gif";
        document.getElementById(section).style.borderColor = "green";
        document.getElementById("clickReset").style.display = "block";
    }  
}
horseRacing.buttonPress = function(e){
    if ((this.marginHorseQ < 90 || this.marginHorseP < 90) && this.gameActive === true){
        if (e.keyCode === 81) {
            this.marginHorseQ = this.marginHorseQ + 0.5;
            document.getElementById("horse1").style.marginLeft = this.marginHorseQ + "%";
            horseRacing.checkWinner(1,'middle')
        } else if (e.keyCode === 80) {
             this.marginHorseP = this.marginHorseP + 0.5;
             document.getElementById("horse2").style.marginLeft = this.marginHorseP + "%"; 
             horseRacing.checkWinner(2,'bottom')
        }
    }
horseRacing.restartGame = function(){
    document.getElementById("middle").style.borderColor = "#bbbbbb";
    document.getElementById("bottom").style.borderColor = "#bbbbbb"; 
    horseRacing.marginHorseQ = 0;
    document.getElementById("clickReset").style.display="none";
    horseRacing.marginHorseP = 0; 
    document.getElementById("intro").innerHTML = "";
    horseRacing.gameActive = false;
    document.getElementById("horse2").style.marginLeft = "0%";   
    document.getElementById("horse1").style.marginLeft = "0%"; 
    setTimeout(function(){document.getElementById("intro").innerHTML = "READY?";},1000);
    setTimeout(function(){document.getElementById("intro").innerHTML = "SET!";},2000); 
    setTimeout(function(){
    horseRacing.gameActive = true;
    document.getElementById("horseImageUn").src = "images/horseRunning.gif";  
    document.getElementById("horseImageDeux").src = "images/horseRunning.gif"; 
    document.getElementById("intro").innerHTML = "GO!";
    },3000);
    setTimeout(function(){document.getElementById("intro").innerHTML = "";},4000);  
    }
}


