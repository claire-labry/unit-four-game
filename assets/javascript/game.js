$(document).ready(function() {

// crystal numbers
    
// random computer variable array
    var rand = [];
    for (var i = 19; i < 121; i++) {
            rand.push(i);
    }
    
// crystal numbers array
    var crystals = [];
    for (var c = 1; c < 13; c++) {
        crystals.push(c);
    }
    
// console.log(crystals);
    
// global arrays
    
// random variables selected by computer
    var randNumber; // number to match
    var crystalNumbers = []; // for array of random crystal values
    
    var crys1;
    var crys2;
    var crys3;
    var crys4;
    
    var totalScore = 0; // user's score
    
    var wins = 0;
    var losses = 0;
    
        // ******* FUNCTIONS *******
    
        // pick a random number
        function pickRandomNumber(arr) {
    
            var x = arr[Math.floor(Math.random() * arr.length)];
            randNumber = x;
            $("#randNum").html(randNumber);
    
            console.log("random number: " + randNumber);
    
        } // END of pickRandomNumber function
    
        // pick random numbers for crystals
    
        function pickRandomCrystals(arr) {
    
            for (var y = 0; y < 4; y++){
    
                var a = arr[Math.floor(Math.random() * arr.length)];
    
                crystalNumbers.push(a);
            }
        // check which numbers have been picked
            console.log("crystal numbers: " + crystalNumbers);
    
        } // END of pickRandomCrystals function
    
        function crystalValues(arr) {
    
            // change value of each crystal button according to array
            for (i = 0; i < arr.length; i++) {
    
            $("#crys-" + (i+1)).attr("value", arr[i]);
            console.log(this);
            }
            crys1 = arr[0];
            crys2 = arr[1];
            crys3 = arr[2];
            crys4 = arr[3];
        } // END of crystalValues function
    
        function gameReset(x) {
    
            crystalNumbers = []; // clears crystal number values
    
            pickRandomNumber(rand);
    
            pickRandomCrystals(crystals);
    
            crystalValues(crystalNumbers);
    
            totalScore = 0;
            $("#totalScore").html(totalScore);
    
            alert(x);
        } // END of gameReset function
    
        // *** GAME SETTINGS AT START ***
    
        pickRandomNumber(rand); // random number to match
        pickRandomCrystals(crystals); // array of random crystal values
        crystalValues(crystalNumbers);
    
            // crystal button functions
    
            $("#crys1").on("click", function() {
    
                totalScore += crys1;
                $("#totalScore").html(totalScore);
            });
    
            $("#crys2").on("click", function() {
    
                totalScore += crys2;
                $("#totalScore").html(totalScore);
            });
    
            $("#crys3").on("click", function() {
    
                totalScore += crys3;
                $("#totalScore").html(totalScore);
            });
    
            $("#crys4").on("click", function() {
    
                totalScore += crys4;
                $("#totalScore").html(totalScore);
            });
    
        $("button").on("click", function() {
            // this is what happens if the user wins
            if (totalScore == randNumber) {
    
                wins++;
                console.log(totalScore);
                $("#totalScore").html(totalScore);
                $("#wins").html("Wins: " + wins);
    
    
                setTimeout(function() {gameReset("YOU WIN ALL DA CRYSTALS!")}, 200);
            }
    
            else if (totalScore > randNumber){
    
                losses++;
                $("#totalScore").html(totalScore);
                $("#losses").html("Losses: " + losses);
    
                setTimeout(function() {gameReset("YOU LOSE HA-HA! I OWN ALL THE CRYSTALS!")}, 200);
            }
        });
    
    }); 
