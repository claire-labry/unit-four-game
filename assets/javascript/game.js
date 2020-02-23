$(document).ready(function() {


    var rand = [];
    for (var i = 19; i < 121; i++) {
            rand.push(i);
    }
    
    var crystals = [];
    for (var c = 1; c < 13; c++) {
        crystals.push(c);
    }
    

    var randNumber; 
    var crystalNumbers = []; 
    
    var crys1;
    var crys2;
    var crys3;
    var crys4;
    
    var totalScore = 0; 
    
    var wins = 0;
    var losses = 0;
    
    
        function pickRandomNumber(arr) {
    
            var x = arr[Math.floor(Math.random() * arr.length)];
            randNumber = x;
            $("#randNum").html(randNumber);
    
            console.log("random number: " + randNumber);
    
        }
    
        function pickRandomCrystals(arr) {
    
            for (var y = 0; y < 4; y++){
    
                var a = arr[Math.floor(Math.random() * arr.length)];
    
                crystalNumbers.push(a);
            }
        
            console.log("crystal numbers: " + crystalNumbers);
    
        } 
    
        function crystalValues(arr) {
    
            for (i = 0; i < arr.length; i++) {
    
            $("#crys-" + (i+1)).attr("value", arr[i]);
            console.log(this);
            }
            crys1 = arr[0];
            crys2 = arr[1];
            crys3 = arr[2];
            crys4 = arr[3];
        } 
    
        function gameReset(x) {
    
            crystalNumbers = []; 
    
            pickRandomNumber(rand);
    
            pickRandomCrystals(crystals);
    
            crystalValues(crystalNumbers);
    
            totalScore = 0;
            $("#totalScore").html(totalScore);
    
            alert(x);
        } 
    
    
        pickRandomNumber(rand); 
        pickRandomCrystals(crystals); 
        crystalValues(crystalNumbers);
    
    
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
