var username;
var userOne;
var userTwo;

var registry = 0;
//initializing firebase
var config = {
    apiKey: "AIzaSyAYzoIRl5Tr3t23pkaQYWe2KVKYO0FE4ck",
    authDomain: "fir-prologue.firebaseapp.com",
    databaseURL: "https://fir-prologue.firebaseio.com",
    projectId: "fir-prologue",
    storageBucket: "fir-prologue.appspot.com",
    messagingSenderId: "432553448888"
};

firebase.initializeApp(config);

var database = firebase.database(); 



database.ref().on("value", function(data) {
    if (data.forEach {
        registry+=2;
    } else if (data.child("playerOne").exists()) {
        registry++;
    }

    console.log("registry is equal to: ", registry);
})

$("#go").on("click", function() {

    event.preventDefault();

    username = $("#user").val();
    
    if (registry === 0) {
        database.ref().push({
            playerOne: username
        });
    } else if (registry === 1) {
        database.ref().push({
            playerTwo: username
        })
    } else {
        alert ("There are too many users online right now.")
    }
});

$(".choice").click(function() {
    userChoice = $(this).attr("id");
    if (userChoice === "scissors") {
        console.log("scissors");
        $("#choice-symbol").html("<i class='fas fa-hand-scissors'></i>")
    } else if (userChoice === "rock") {
        console.log("rock");
        $("#choice-symbol").html("<i class='fas fa-hand-rock'></i>")
    } else {
        console.log("paper");
        $("#choice-symbol").html("<i class='fas fa-hand-paper'></i>")
    }

    var computerChoice = Math.floor(Math.random() * 4);

    if (computerChoice === 0) {
        computerChoice = "rock";
        $("#their-choice-symbol").html("<i class='fas fa-hand-rock'></i>");
    } else if (computerChoice === 1) {
        computerChoice = "paper";
        $("#their-choice-symbol").html("<i class='fas fa-hand-paper'></i>");
    } else {
        computerChoice = "scissors";
        $("#their-choice-symbol").html("<i class='fas fa-hand-scissors'></i>");
    };

    if (userChoice === computerChoice) {
        alert("It's a tie!");
    }

});




