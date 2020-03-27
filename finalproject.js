var score = 0;

// Audio
var beginSound = new Audio('sounds/begin.mp3')
var correctSound = new Audio('sounds/correct.mp3')
var wrongSound = new Audio('sounds/wrong.mp3')

// Geography
document.querySelector(".geo100").addEventListener("click", function(){
    beginSound.play();
    document.querySelector(".question-area").innerHTML = "Which of the following is the largest ocean in the world?"
    document.querySelector(".answer-area").innerHTML = "<button class='button-confettis' data-confettis onclick='Correct100()'>A</button><p class='correct'>Pacific Ocean</p><img style='display: none;' class='correct-icon' src='images/white.png'><br><button onclick='Wrong100()'>B</button><p class='wrong1'>Atlantic Ocean</p><img style='display: none;' class='wrong-icon1' src='images/white.png'><br><button onclick='Wrong100()'>C</button><p class='wrong2'>Arctic Ocean</p><img style='display: none;' class='wrong-icon2' src='images/white.png'><br><button onclick='Wrong100()'>D</button><p class='wrong3'>Indian Ocean</p><img style='display: none;' class='wrong-icon3' src='images/white.png'>"
    document.querySelector(".geo100").innerHTML = "";
    document.querySelector(".question-number").innerHTML = "Geography 100";
} )

function Correct100(){
  correctSound.play();
  // 1. change style of answers
  document.querySelector(".correct").style.color = "#28A428";
  document.querySelector(".correct-icon").style.display = "inline-block";
  document.querySelector(".correct-icon").src = "images/correct.png";
  document.querySelector(".wrong1").style.color = "#E50000";
  document.querySelector(".wrong-icon1").style.display = "inline-block";
  document.querySelector(".wrong-icon1").src = "images/wrong.png";
  document.querySelector(".wrong2").style.color = "#E50000";
  document.querySelector(".wrong-icon2").style.display = "inline-block";
  document.querySelector(".wrong-icon2").src = "images/wrong.png";
  document.querySelector(".wrong3").style.color = "#E50000";
  document.querySelector(".wrong-icon3").style.display = "inline-block";
  document.querySelector(".wrong-icon3").src = "images/wrong.png";
  // 2. add 100 to score
  score = score + 100;
  document.querySelector(".score").innerHTML = "Score: " + score;
}

function Wrong100(){
  wrongSound.play();
  // 1. change style of answers
  document.querySelector(".correct").style.color = "#28A428";
  document.querySelector(".correct-icon").style.display = "inline-block";
  document.querySelector(".correct-icon").src = "images/correct.png";
  document.querySelector(".wrong1").style.color = "#E50000";
  document.querySelector(".wrong-icon1").style.display = "inline-block";
  document.querySelector(".wrong-icon1").src = "images/wrong.png";
  document.querySelector(".wrong2").style.color = "#E50000";
  document.querySelector(".wrong-icon2").style.display = "inline-block";
  document.querySelector(".wrong-icon2").src = "images/wrong.png";
  document.querySelector(".wrong3").style.color = "#E50000";
  document.querySelector(".wrong-icon3").style.display = "inline-block";
  document.querySelector(".wrong-icon3").src = "images/wrong.png";
  // 2. minus 100 to score
  score = score - 100;
  document.querySelector(".score").innerHTML = "Score: " + score;
}

document.querySelector(".geo200").addEventListener("click", function(){
    beginSound.play();
    document.querySelector(".question-area").innerHTML = "Which of the following is the Earth's largest continent?"
    document.querySelector(".answer-area").innerHTML = "<button onclick='Wrong200()'>A</button><p class='wrong1'>Europe</p><img style='display: none;' class='wrong-icon1' src='images/white.png'><br><button onclick='Wrong200()'>B</button><p class='wrong2'>Africa</p><img style='display: none;' class='wrong-icon2' src='images/white.png'><br><button onclick='Wrong200()'>C</button><p class='wrong3'>Antarctica</p><img style='display: none;' class='wrong-icon3' src='images/white.png'><br><button onclick='Correct200()'>D</button><p class='correct'>Asia</p><img style='display: none;' class='correct-icon' src='images/white.png'>"
    document.querySelector(".geo200").innerHTML = "";
    document.querySelector(".question-number").innerHTML = "Geography 200";
} )

function Correct200(){
  correctSound.play();
  document.querySelector(".correct").style.color = "#28A428";
  document.querySelector(".correct-icon").style.display = "inline-block";
  document.querySelector(".correct-icon").src = "images/correct.png";
  document.querySelector(".wrong1").style.color = "#E50000";
  document.querySelector(".wrong-icon1").style.display = "inline-block";
  document.querySelector(".wrong-icon1").src = "images/wrong.png";
  document.querySelector(".wrong2").style.color = "#E50000";
  document.querySelector(".wrong-icon2").style.display = "inline-block";
  document.querySelector(".wrong-icon2").src = "images/wrong.png";
  document.querySelector(".wrong3").style.color = "#E50000";
  document.querySelector(".wrong-icon3").style.display = "inline-block";
  document.querySelector(".wrong-icon3").src = "images/wrong.png";
  score = score + 200;
  document.querySelector(".score").innerHTML = "Score: " + score;
}

function Wrong200(){
  wrongSound.play();
  document.querySelector(".correct").style.color = "#28A428";
  document.querySelector(".correct-icon").style.display = "inline-block";
  document.querySelector(".correct-icon").src = "images/correct.png";
  document.querySelector(".wrong1").style.color = "#E50000";
  document.querySelector(".wrong-icon1").style.display = "inline-block";
  document.querySelector(".wrong-icon1").src = "images/wrong.png";
  document.querySelector(".wrong2").style.color = "#E50000";
  document.querySelector(".wrong-icon2").style.display = "inline-block";
  document.querySelector(".wrong-icon2").src = "images/wrong.png";
  document.querySelector(".wrong3").style.color = "#E50000";
  document.querySelector(".wrong-icon3").style.display = "inline-block";
  document.querySelector(".wrong-icon3").src = "images/wrong.png";
  score = score - 200;
  document.querySelector(".score").innerHTML = "Score: " + score;
}

document.querySelector(".geo300").addEventListener("click", function(){
    beginSound.play();
    document.querySelector(".question-area").innerHTML = "Which of the following is the smallest country in the world?"
    document.querySelector(".answer-area").innerHTML = "<button onclick='Wrong300()'>A</button><p class='wrong1'>Monaco</p><img style='display: none;' class='wrong-icon1' src='images/white.png'><br><button onclick='Wrong300()'>B</button><p class='wrong2'>Maldives</p><img style='display: none;' class='wrong-icon2' src='images/white.png'><br><button onclick='Correct300()'>C</button><p class='correct'>Vatican City</p><img style='display: none;' class='correct-icon' src='images/white.png'><br><button onclick='Wrong300()'>D</button><p class='wrong3'>Tuvalu</p><img style='display: none;' class='wrong-icon3' src='images/white.png'>"
    document.querySelector(".geo300").innerHTML = "";
    document.querySelector(".question-number").innerHTML = "Geography 300";
} )

function Correct300(){
  correctSound.play();
  document.querySelector(".correct").style.color = "#28A428";
  document.querySelector(".correct-icon").style.display = "inline-block";
  document.querySelector(".correct-icon").src = "images/correct.png";
  document.querySelector(".wrong1").style.color = "#E50000";
  document.querySelector(".wrong-icon1").style.display = "inline-block";
  document.querySelector(".wrong-icon1").src = "images/wrong.png";
  document.querySelector(".wrong2").style.color = "#E50000";
  document.querySelector(".wrong-icon2").style.display = "inline-block";
  document.querySelector(".wrong-icon2").src = "images/wrong.png";
  document.querySelector(".wrong3").style.color = "#E50000";
  document.querySelector(".wrong-icon3").style.display = "inline-block";
  document.querySelector(".wrong-icon3").src = "images/wrong.png";
  score = score + 300;
  document.querySelector(".score").innerHTML = "Score: " + score;
}

function Wrong300(){
  wrongSound.play();
  document.querySelector(".correct").style.color = "#28A428";
  document.querySelector(".correct-icon").style.display = "inline-block";
  document.querySelector(".correct-icon").src = "images/correct.png";
  document.querySelector(".wrong1").style.color = "#E50000";
  document.querySelector(".wrong-icon1").style.display = "inline-block";
  document.querySelector(".wrong-icon1").src = "images/wrong.png";
  document.querySelector(".wrong2").style.color = "#E50000";
  document.querySelector(".wrong-icon2").style.display = "inline-block";
  document.querySelector(".wrong-icon2").src = "images/wrong.png";
  document.querySelector(".wrong3").style.color = "#E50000";
  document.querySelector(".wrong-icon3").style.display = "inline-block";
  document.querySelector(".wrong-icon3").src = "images/wrong.png";
  score = score - 300;
  document.querySelector(".score").innerHTML = "Score: " + score;
}

document.querySelector(".geo400").addEventListener("click", function(){
    beginSound.play();
    document.querySelector(".question-area").innerHTML = "Most of the world's population lives in which hemisphere?"
    document.querySelector(".answer-area").innerHTML = "<button onclick='Wrong400()'>A</button><p class='wrong1'>East</p><img style='display: none;' class='wrong-icon1' src='images/white.png'><br><button onclick='Wrong400()'>B</button><p class='wrong2'>West</p><img style='display: none;' class='wrong-icon2' src='images/white.png'><br><button onclick='Wrong400()'>C</button><p class='wrong3'>South</p><img style='display: none;' class='wrong-icon3' src='images/white.png'><br><button onclick='Correct400()'>D</button><p class='correct'>North</p><img style='display: none;' class='correct-icon' src='images/white.png'>"
    document.querySelector(".geo400").innerHTML = "";
    document.querySelector(".question-number").innerHTML = "Geography 400";
} )

function Correct400(){
  correctSound.play();
  document.querySelector(".correct").style.color = "#28A428";
  document.querySelector(".correct-icon").style.display = "inline-block";
  document.querySelector(".correct-icon").src = "images/correct.png";
  document.querySelector(".wrong1").style.color = "#E50000";
  document.querySelector(".wrong-icon1").style.display = "inline-block";
  document.querySelector(".wrong-icon1").src = "images/wrong.png";
  document.querySelector(".wrong2").style.color = "#E50000";
  document.querySelector(".wrong-icon2").style.display = "inline-block";
  document.querySelector(".wrong-icon2").src = "images/wrong.png";
  document.querySelector(".wrong3").style.color = "#E50000";
  document.querySelector(".wrong-icon3").style.display = "inline-block";
  document.querySelector(".wrong-icon3").src = "images/wrong.png";
  score = score + 400;
  document.querySelector(".score").innerHTML = "Score: " + score;
}

function Wrong400(){
  wrongSound.play();
  document.querySelector(".correct").style.color = "#28A428";
  document.querySelector(".correct-icon").style.display = "inline-block";
  document.querySelector(".correct-icon").src = "images/correct.png";
  document.querySelector(".wrong1").style.color = "#E50000";
  document.querySelector(".wrong-icon1").style.display = "inline-block";
  document.querySelector(".wrong-icon1").src = "images/wrong.png";
  document.querySelector(".wrong2").style.color = "#E50000";
  document.querySelector(".wrong-icon2").style.display = "inline-block";
  document.querySelector(".wrong-icon2").src = "images/wrong.png";
  document.querySelector(".wrong3").style.color = "#E50000";
  document.querySelector(".wrong-icon3").style.display = "inline-block";
  document.querySelector(".wrong-icon3").src = "images/wrong.png";
  score = score - 400;
  document.querySelector(".score").innerHTML = "Score: " + score;
}

document.querySelector(".geo500").addEventListener("click", function(){
    beginSound.play();
    document.querySelector(".question-area").innerHTML = "Where is the lowest point on Earth?"
    document.querySelector(".answer-area").innerHTML = "<button onclick='Wrong500()'>A</button><p class='wrong1'>The Sahara Desert</p><img style='display: none;' class='wrong-icon1' src='images/white.png'><br><button onclick='Wrong500()'>B</button><p class='wrong2'>The Mariana Trench</p><img style='display: none;' class='wrong-icon2' src='images/white.png'><br><button onclick='Correct500()'>C</button><p class='correct'>The Dead Sea</p><img style='display: none;' class='correct-icon' src='images/white.png'><br><button onclick='Wrong500()'>D</button><p class='wrong3'>The Grand Canyon</p><img style='display: none;' class='wrong-icon3' src='images/white.png'>"
    document.querySelector(".geo500").innerHTML = "";
    document.querySelector(".question-number").innerHTML = "Geography 500";
} )

function Correct500(){
  correctSound.play();
  document.querySelector(".correct").style.color = "#28A428";
  document.querySelector(".correct-icon").style.display = "inline-block";
  document.querySelector(".correct-icon").src = "images/correct.png";
  document.querySelector(".wrong1").style.color = "#E50000";
  document.querySelector(".wrong-icon1").style.display = "inline-block";
  document.querySelector(".wrong-icon1").src = "images/wrong.png";
  document.querySelector(".wrong2").style.color = "#E50000";
  document.querySelector(".wrong-icon2").style.display = "inline-block";
  document.querySelector(".wrong-icon2").src = "images/wrong.png";
  document.querySelector(".wrong3").style.color = "#E50000";
  document.querySelector(".wrong-icon3").style.display = "inline-block";
  document.querySelector(".wrong-icon3").src = "images/wrong.png";
  score = score + 500;
  document.querySelector(".score").innerHTML = "Score: " + score;
}

function Wrong500(){
  wrongSound.play();
  document.querySelector(".correct").style.color = "#28A428";
  document.querySelector(".correct-icon").style.display = "inline-block";
  document.querySelector(".correct-icon").src = "images/correct.png";
  document.querySelector(".wrong1").style.color = "#E50000";
  document.querySelector(".wrong-icon1").style.display = "inline-block";
  document.querySelector(".wrong-icon1").src = "images/wrong.png";
  document.querySelector(".wrong2").style.color = "#E50000";
  document.querySelector(".wrong-icon2").style.display = "inline-block";
  document.querySelector(".wrong-icon2").src = "images/wrong.png";
  document.querySelector(".wrong3").style.color = "#E50000";
  document.querySelector(".wrong-icon3").style.display = "inline-block";
  document.querySelector(".wrong-icon3").src = "images/wrong.png";
  score = score - 500;
  document.querySelector(".score").innerHTML = "Score: " + score;
}

// Culture
document.querySelector(".cul100").addEventListener("click", function(){
    beginSound.play();
    document.querySelector(".question-area").innerHTML = "In countries such as Japan and China, people use _____ to give or receive gifts to show mutual respect."
    document.querySelector(".answer-area").innerHTML = "<button onclick='Wrong100()'>A</button><p class='wrong1'>Left hand</p><img style='display: none;' class='wrong-icon1' src='images/white.png'><br><button onclick='Wrong100()'>B</button><p class='wrong2'>Right hand</p><img style='display: none;' class='wrong-icon2' src='images/white.png'><br><button onclick='Correct100()'>C</button><p class='correct'>Both hands</p><img style='display: none;' class='correct-icon' src='images/white.png'><br><button onclick='Wrong100()'>D</button><p class='wrong3'>Either hand</p><img style='display: none;' class='wrong-icon3' src='images/white.png'>"
    document.querySelector(".cul100").innerHTML = "";
    document.querySelector(".question-number").innerHTML = "Culture 100";
} )

document.querySelector(".cul200").addEventListener("click", function(){
    beginSound.play();
    document.querySelector(".question-area").innerHTML = "Which of the following is the most spoken language in the world?"
    document.querySelector(".answer-area").innerHTML = "<button onclick='Correct200()'>A</button><p class='correct'>Chinese</p><img style='display: none;' class='correct-icon' src='images/white.png'><br><button onclick='Wrong200()'>B</button><p class='wrong1'>English</p><img style='display: none;' class='wrong-icon1' src='images/white.png'><br><button onclick='Wrong200()'>C</button><p class='wrong2'>Spanish</p><img style='display: none;' class='wrong-icon2' src='images/white.png'><br><button onclick='Wrong200()'>D</button><p class='wrong3'>French</p><img style='display: none;' class='wrong-icon3' src='images/white.png'>"
    document.querySelector(".cul200").innerHTML = "";
    document.querySelector(".question-number").innerHTML = "Culture 200";
} )

document.querySelector(".cul300").addEventListener("click", function(){
    beginSound.play();
    document.querySelector(".question-area").innerHTML = "What is the currency of Spain?"
    document.querySelector(".answer-area").innerHTML = "Which of the following is the smallest country in the world?"
    document.querySelector(".answer-area").innerHTML = "<button onclick='Wrong300()'>A</button><p class='wrong1'>Ruble</p><img style='display: none;' class='wrong-icon1' src='images/white.png'><br><button onclick='Correct300()'>B</button><p class='correct'>Euro</p><img style='display: none;' class='correct-icon' src='images/white.png'><br><button onclick='Wrong300()'>C</button><p class='wrong2'>Dollar</p><img style='display: none;' class='wrong-icon2' src='images/white.png'><br><button onclick='Wrong300()'>D</button><p class='wrong3'>Rupee</p><img style='display: none;' class='wrong-icon3' src='images/white.png'>"
    document.querySelector(".cul300").innerHTML = "";
    document.querySelector(".question-number").innerHTML = "Culture 300";
} )

document.querySelector(".cul400").addEventListener("click", function(){
    beginSound.play();
    document.querySelector(".question-area").innerHTML = "Fortune cookies were first made in which country?"
    document.querySelector(".answer-area").innerHTML = "<button onclick='Wrong400()'>A</button><p class='wrong1'>China</p><img style='display: none;' class='wrong-icon1' src='images/white.png'><br><button onclick='Wrong400()'>B</button><p class='wrong2'>Japan</p><img style='display: none;' class='wrong-icon2' src='images/white.png'><br><button onclick='Correc400t()'>C</button><p class='correct'>America</p><img style='display: none;' class='correct-icon' src='images/white.png'><br><button onclick='Wrong400()'>D</button><p class='wrong3'>Singapore</p><img style='display: none;' class='wrong-icon3' src='images/white.png'>"
    document.querySelector(".cul400").innerHTML = "";
    document.querySelector(".question-number").innerHTML = "Culture 400";
} )

document.querySelector(".cul500").addEventListener("click", function(){
    beginSound.play();
    document.querySelector(".question-area").innerHTML = "Which of the following is the most linguistically diverse country in the world?"
    document.querySelector(".answer-area").innerHTML = "<button onclick='Correct500()'>A</button><p class='correct'>Papua New Guinea</p><img style='display: none;' class='correct-icon' src='images/white.png'><br><button onclick='Wrong500()'>B</button><p class='wrong1'>Vanuatu</p><img style='display: none;' class='wrong-icon1' src='images/white.png'><br><button onclick='Wrong500()'>C</button><p class='wrong2'>Soloman Islands</p><img style='display: none;' class='wrong-icon2' src='images/white.png'><br><button onclick='Wrong500()'>D</button><p class='wrong3'>Tanzania</p><img style='display: none;' class='wrong-icon3' src='images/white.png'>"
    document.querySelector(".cul500").innerHTML = "";
    document.querySelector(".question-number").innerHTML = "Culture 500";
} )

// Animals
document.querySelector(".ani100").addEventListener("click", function(){
    beginSound.play();
    document.querySelector(".question-area").innerHTML = "Which of the following bird is the universal symbol of peace?"
    document.querySelector(".answer-area").innerHTML = "<button onclick='Wrong100()'>A</button><p class='wrong1'>Pigeon</p><img style='display: none;' class='wrong-icon1' src='images/white.png'><br><button onclick='Correct100()'>B</button><p class='correct'>Dove</p><img style='display: none;' class='correct-icon' src='images/white.png'><br><button onclick='Wrong100()'>C</button><p class='wrong2'>Crow</p><img style='display: none;' class='wrong-icon2' src='images/white.png'><br><button onclick='Wrong100()'>D</button><p class='wrong3'>Nightingale</p><img style='display: none;' class='wrong-icon3' src='images/white.png'>"
    document.querySelector(".ani100").innerHTML = "";
    document.querySelector(".question-number").innerHTML = "Animals 100";
} )

document.querySelector(".ani200").addEventListener("click", function(){
    beginSound.play();
    document.querySelector(".question-area").innerHTML = "Which of the following is the largest mammal on Earth?"
    document.querySelector(".answer-area").innerHTML = "<button onclick='Wrong200()'>A</button><p class='wrong1'>Elephant</p><img style='display: none;' class='wrong-icon1' src='images/white.png'><br><button onclick='Wrong200()'>B</button><p class='wrong2'>Rhino</p><img style='display: none;' class='wrong-icon2' src='images/white.png'><br><button onclick='Correct200()'>C</button><p class='correct'>Blue whale</p><img style='display: none;' class='correct-icon' src='images/white.png'><br><button onclick='Wrong200()'>D</button><p class='wrong3'>Giraffe</p><img style='display: none;' class='wrong-icon3' src='images/white.png'>"
    document.querySelector(".ani200").innerHTML = "";
    document.querySelector(".question-number").innerHTML = "Animals 200";
} )

document.querySelector(".ani300").addEventListener("click", function(){
    beginSound.play();
    document.querySelector(".question-area").innerHTML = "Where is the heart of the shrimp located?"
    document.querySelector(".answer-area").innerHTML = "<button onclick='Wrong300()'>A</button><p class='wrong1'>Abdomen</p><img style='display: none;' class='wrong-icon1' src='images/white.png'><br><button onclick='Wrong300()'>B</button><p class='wrong2'>Leg</p><img style='display: none;' class='wrong-icon2' src='images/white.png'><br><button onclick='Correct300()'>C</button><p class='correct'>Head</p><img style='display: none;' class='correct-icon' src='images/white.png'><br><button onclick='Wrong300()'>D</button><p class='wrong3'>Eye</p><img style='display: none;' class='wrong-icon3' src='images/white.png'>"
    document.querySelector(".ani300").innerHTML = "";
    document.querySelector(".question-number").innerHTML = "Animals 300";
} )

document.querySelector(".ani400").addEventListener("click", function(){
    beginSound.play();
    document.querySelector(".question-area").innerHTML = "The slowest animal of the world is a"
    document.querySelector(".answer-area").innerHTML = "<button onclick='Wrong400()'>A</button><p class='wrong1'>Snail</p><img style='display: none;' class='wrong-icon1' src='images/white.png'><br><button onclick='Wrong400()'>B</button><p class='wrong2'>Turtle</p><img style='display: none;' class='wrong-icon2' src='images/white.png'><br><button onclick='Correct400()'>C</button><p class='correct'>Sloth</p><img style='display: none;' class='correct-icon' src='images/white.png'><br><button onclick='Wrong400()'>D</button><p class='wrong3'>Slug</p><img style='display: none;' class='wrong-icon3' src='images/white.png'>"
    document.querySelector(".ani400").innerHTML = "";
    document.querySelector(".question-number").innerHTML = "Animals 400";
} )

document.querySelector(".ani500").addEventListener("click", function(){
    beginSound.play();
    document.querySelector(".question-area").innerHTML = "Fingerprints of which of the following animal most resemble those of humans?"
    document.querySelector(".answer-area").innerHTML = "<button onclick='Wrong500()'>A</button><p class='wrong1'>Gorilla</p><img style='display: none;' class='wrong-icon1' src='images/white.png'><br><button onclick='Wrong500()'>B</button><p class='wrong2'>Chimpanzee</p><img style='display: none;' class='wrong-icon2' src='images/white.png'><br><button onclick='Wrong500()'>C</button><p class='wrong3'>Monkey</p><img style='display: none;' class='wrong-icon3' src='images/white.png'><br><button onclick='Correct500()'>D</button><p class='correct'>Koala</p><img style='display: none;' class='correct-icon' src='images/white.png'>"
    document.querySelector(".ani500").innerHTML = "";
    document.querySelector(".question-number").innerHTML = "Animals 500";
} )

// Anything
document.querySelector(".any100").addEventListener("click", function(){
    beginSound.play();
    document.querySelector(".question-area").innerHTML = "Which of the following is the most common element in the human body?"
    document.querySelector(".answer-area").innerHTML = "<button onclick='Wrong100()'>A</button><p class='wrong1'>Carbon</p><img style='display: none;' class='wrong-icon1' src='images/white.png'><br><button onclick='Wrong100()'>B</button><p class='wrong2'>Hydrogen</p><img style='display: none;' class='wrong-icon2' src='images/white.png'><br><button onclick='Correct100()'>C</button><p class='correct'>Oxygen</p><img style='display: none;' class='correct-icon' src='images/white.png'><br><button onclick='Wrong100()'>D</button><p class='wrong3'>Calcium</p><img style='display: none;' class='wrong-icon3' src='images/white.png'>"
    document.querySelector(".any100").innerHTML = "";
    document.querySelector(".question-number").innerHTML = "Anything 100";
} )

document.querySelector(".any200").addEventListener("click", function(){
    beginSound.play();
    document.querySelector(".question-area").innerHTML = "Which of the following animal killed the most people?"
    document.querySelector(".answer-area").innerHTML = "<button onclick='Wrong200()'>A</button><p class='wrong1'>Shark</p><img style='display: none;' class='wrong-icon1' src='images/white.png'><br><button onclick='Wrong200()'>B</button><p class='wrong2'>Snake</p><img style='display: none;' class='wrong-icon2' src='images/white.png'><br><button onclick='Correct200()'>C</button><p class='correct'>Mosquito</p><img style='display: none;' class='correct-icon' src='images/white.png'><br><button onclick='Wrong200()'>D</button><p class='wrong3'>Crocodile</p><img style='display: none;' class='wrong-icon3' src='images/white.png'>"
    document.querySelector(".any200").innerHTML = "";
    document.querySelector(".question-number").innerHTML = "Anything 200";
} )

document.querySelector(".any300").addEventListener("click", function(){
    beginSound.play();
    document.querySelector(".question-area").innerHTML = "The longest place name on Earth is consist of 85 letters, and it is located in"
    document.querySelector(".answer-area").innerHTML = "Which of the following is the smallest country in the world?"
    document.querySelector(".answer-area").innerHTML = "<button onclick='Wrong300()'>A</button><p class='wrong1'>Britain</p><img style='display: none;' class='wrong-icon1' src='images/white.png'><br><button onclick='Correct300()'>B</button><p class='correct'>Australia</p><img style='display: none;' class='correct-icon' src='images/white.png'><br><button onclick='Wrong300()'>C</button><p class='wrong2'>Spain</p><img style='display: none;' class='wrong-icon2' src='images/white.png'><br><button onclick='Wrong300()'>D</button><p class='wrong3'>France</p><img style='display: none;' class='wrong-icon3' src='images/white.png'>"
    document.querySelector(".any300").innerHTML = "";
    document.querySelector(".question-number").innerHTML = "Anything 300";
} )

document.querySelector(".any400").addEventListener("click", function(){
    beginSound.play();
    document.querySelector(".question-area").innerHTML = "You can't buy Coca Cola in"
    document.querySelector(".answer-area").innerHTML = "<button onclick='Correct400()'>A</button><p class='correct'>Cuba</p><img style='display: none;' class='correct-icon' src='images/white.png'><br><button onclick='Wrong400()'>B</button><p class='wrong1'>China</p><img style='display: none;' class='wrong-icon1' src='images/white.png'><br><button onclick='Wrong400()'>C</button><p class='wrong2'>South Korea</p><img style='display: none;' class='wrong-icon2' src='images/white.png'><br><button onclick='Wrong400()'>D</button><p class='wrong3'>Hawaii</p><img style='display: none;' class='wrong-icon3' src='images/white.png'>"
    document.querySelector(".any400").innerHTML = "";
    document.querySelector(".question-number").innerHTML = "Anything 400";
} )

document.querySelector(".any500").addEventListener("click", function(){
    beginSound.play();
    document.querySelector(".question-area").innerHTML = "Which of the following is the most-viewed video on Youtube?"
    document.querySelector(".answer-area").innerHTML = "<button onclick='Wrong500()'>A</button><p class='wrong1'>Baby Shark Dance</p><img style='display: none;' class='wrong-icon1' src='images/white.png'><br><button onclick='Wrong500()'>B</button><p class='wrong2'>Shape of You</p><img style='display: none;' class='wrong-icon2' src='images/white.png'><br><button onclick='Wrong500()'>C</button><p class='wrong3'>See You Again</p><img style='display: none;' class='wrong-icon3' src='images/white.png'><br><button onclick='Correct500()'>D</button><p class='correct'>Despacito</p><img style='display: none;' class='correct-icon' src='images/white.png'>"
    document.querySelector(".any500").innerHTML = "";
    document.querySelector(".question-number").innerHTML = "Anything 500";
} )
