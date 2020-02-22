$(document).ready(function() {

// Global Variables
var crys1 = Math.floor(Math.random)() * (12 - 1) + 1;
var crys2 = Math.floor(Math.random)() * (12 - 1) + 1;
var crys3 = Math.floor(Math.random)() * (12 - 1) + 1;
var crys4 = Math.floor(Math.random)() * (12 - 1) + 1;


// Functions

    let randNumber = Math.floor(Math.random() * ((120 -19) + 1) + 19);
    $('.ranNum').html(randNumber);
    
    console.log('ranNum = ' + randNumber);
    
    var crys1 = Math.floor(Math.random() * 12) + 1;
    var crys2 = Math.floor(Math.random() * 12) + 1;
    var crys3 = Math.floor(Math.random() * 12) + 1;
    var crys4 = Math.floor(Math.random() * 12) + 1;
    
// Wins + Losses
   
    var win = 0;
    var loss = 0;
    
    
    let totScore = 0;
    $('#totScore').text(totScore);


function win(){
      wins = wins +1;
      $('#wins').text(wins);
      resetTwo();
      reset();
  }

function lose(){
      losses = losses + 1;
      $('#losses').text(losses);
      resetTwo();
      reset();

}
//  Crystal 1 aka Amythyst's Button Action!

$('#crys1').click(() => {
    totScore = totScore + crys1
    $('#totScore').text(totScore);
    if (totScore === randNumber) {
        win();
        reset();
        resetTwo();
    } else if (totScore > randNumber) {
        lose();
        reset();
        resetTwo();
    }
});

//  Crystal 2 aka Apophyllite's Button Action!

$('#crys2').click(() => {
    totScore = totScore + crys2
    $('#totScore').text(totScore);
    if (totScore === randNumber) {
        win();
        reset();
        resetTwo();
    } else if (totScore > randNumber) {
        lose();
        reset();
        resetTwo();
    }
});

//  Crystal 3 aka Aquamarine's Button Action!

$('#crys3').click(() => {
    totScore = totScore + crys3
    $('#totScore').text(totScore);
    if (totScore === randNumber) {
        win();
        reset();
        resetTwo();
    } else if (totScore > randNumber) {
        lose();
        reset();
        resetTwo();
    }
});

//  Crystal 4 aka Sapphire's Button Action!

$('#crys4').click(() => {
    totScore = totScore + crys4
    $('#totScore').text(totScore);
    if (totScore === randNumber) {
        win();
        reset();
        resetTwo();
    } else if (totScore > randNumber) {
        lose();
        reset();
        resetTwo();
    }
});

// Reset

function reset() {
    totScore = 0;
    $('#totScore').text(totScore);
}

// a second reset

function resetTwo() {
    randNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    $('#randNum').html(randNumber);
    crys1 = Math.floor(Math.random() * 12) + 1;
    crys2 = Math.floor(Math.random() * 12) + 1;
    crys3 = Math.floor(Math.random() * 12) + 1;
    crys4 = Math.floor(Math.random() * 12) + 1;
}
});
