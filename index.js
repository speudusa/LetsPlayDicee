//------------ variables ------------
    //random number generator to 'roll' the die
    var randomNumber1 = Math.floor((Math.random() * 6));
    var randomNumber2 = Math.floor((Math.random() * 6));

    //array of images
    var diceArray = [];
        diceArray.push("./images/dice1.png");
        diceArray.push("./images/dice2.png");
        diceArray.push("./images/dice3.png");
        diceArray.push("./images/dice4.png");
        diceArray.push("./images/dice5.png");
        diceArray.push("./images/dice6.png");

// ----------------- updating the dice images ---------------
    //matching the dice image to the random number
    
    //---player 1
    var d1 = document.querySelector(".img1");
    d1.setAttribute("src", diceArray[randomNumber1].toString());

    //--- player 2
    var d1 = document.querySelector(".img2");
    d1.setAttribute("src", diceArray[randomNumber2].toString());

// ----------------- updating winner status ----------------

    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }
    else if(randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
    else{
        document.querySelector("h1").innerHTML = "Tie!";
    }