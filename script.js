const nextButton = document.querySelector(".nextplay");

let USERSCORE = parseInt(localStorage.getItem("userScore")) || 0;
let CPSCORE = parseInt(localStorage.getItem("cpScore")) || 0;

document.getElementById("userscore").innerHTML = USERSCORE;
document.getElementById("cpscore").innerHTML = CPSCORE;

USERSCORE > CPSCORE
  ? (nextButton.style.display = "block")
  : (nextButton.style.display = "none");

const userHand = (hand) => {
  console.log(hand);
  //show next page that hand you picked and hide the current page
  // hide page
  let hands = document.querySelector(".lower-hero");
  hands.style.display = "none";

  let content = document.querySelector(".contest");
  content.style.display = "flex";

  //   set the user pic
  if (hand === "") {
    document.getElementById("userpickedimg").src = "./asset/rock.png";
    const element = document.querySelector(".handimagedive");

    element.style.borderRadius = "50%";
    element.style.padding = "3px";
    element.style.backgroundColor = "white";
    element.style.border = "10px solid #FFA943";
    element.style.zIndex = "1";
    element.style.cursor = "pointer";
    element.style.transition = "all 0.5s";
  }

  if (hand === "paper") {
    document.getElementById("userpickedimg").src = "./asset/paper.png";
    const element = document.querySelector(".handimagedive");

    // Apply the styles
    element.style.borderRadius = "50%";
    element.style.padding = "3px";
    element.style.backgroundColor = "white";
    element.style.border = "10px solid #BD00FF";
    element.style.zIndex = "1";
    element.style.cursor = "pointer";
    element.style.transition = "all 0.5s";
  }

  if (hand === "scissors") {
    document.getElementById("userpickedimg").src = "./asset/scissors.png";
    const element = document.querySelector(".handimagedive");

    // Apply the styles
    element.style.borderRadius = "50%";
    element.style.padding = "3px";
    element.style.backgroundColor = "white";
    element.style.border = "10px solid #0074B6";
    element.style.zIndex = "1";
    element.style.cursor = "pointer";
    element.style.transition = "all 0.5s";
  }
  let cphand = pickcomputerhand();
  referee(hand, cphand);
  USERSCORE > CPSCORE
    ? (nextButton.style.display = "block")
    : (nextButton.style.display = "none");
};

const pickcomputerhand = () => {
  let hands = ["Rock", "paper", "scissors"];
  let cphand = hands[Math.floor(Math.random() * 3)];
  console.log(cphand);

  if (cphand === "Rock") {
    document.getElementById("cphand").src = "./asset/Rock.png";
    const element = document.querySelector(".computerimgdiv");

    element.style.borderRadius = "50%";
    element.style.padding = "3px";
    element.style.backgroundColor = "white";
    element.style.border = "10px solid #FFA943";
    element.style.zIndex = "1";
    element.style.cursor = "pointer";
    element.style.transition = "all 0.5s";
  }

  if (cphand === "paper") {
    document.getElementById("cphand").src = "./asset/paper.png";
    const element = document.querySelector(".computerimgdiv");

    element.style.borderRadius = "50%";
    element.style.padding = "3px";
    element.style.backgroundColor = "white";
    element.style.border = "10px solid #BD00FF";
    element.style.zIndex = "1";
    element.style.cursor = "pointer";
    element.style.transition = "all 0.5s";
  }

  if (cphand === "scissors") {
    document.getElementById("cphand").src = "./asset/scissors.png";
    const element = document.querySelector(".computerimgdiv");

    element.style.borderRadius = "50%";
    element.style.padding = "3px";
    element.style.backgroundColor = "white";
    element.style.border = "10px solid #0074B6";
    element.style.zIndex = "1";
    element.style.cursor = "pointer";
    element.style.transition = "all 0.5s";
  }

  return cphand;
};

const referee = (userHand, cphand) => {
  if (userHand === "Rock" && cphand === "Rock") {
    setResult("TIE UP");
    document.querySelector(".AGAINSTPC").innerHTML = "";
  }

  if (userHand === "paper" && cphand === "scissors") {
    setResult("YOU LOSE!");
    setcpScore(CPSCORE + 1);

    // document.querySelector(".computerhand").style.borderRadius = "50%";
    // document.querySelector(".computerhand").style.background = "rgba(46, 154, 37, 0.39)";
    //  document.querySelector(".computerhand").style.boxShadow = "0px 1px 62px 0px rgba(0, 0, 0, 0.13)";
  }
  if (userHand === "paper" && cphand === "Rock") {
    setResult("YOU WIN!");
    setUserScore(USERSCORE + 1);
  }
  if (userHand === "paper" && cphand === "paper") {
    setResult("TIE UP");
    document.querySelector(".AGAINSTPC").innerHTML = "";
  }
  if (userHand === "Rock" && cphand === "scissors") {
    setResult("YOU WIN!");
    setUserScore(USERSCORE + 1);
  }
  if (cphand === "Rock" && userHand === "scissors") {
    setResult("YOU WIN!");
    setUserScore(USERSCORE + 1);
  }
  if (userHand === "Rock" && cphand === "paper") {
    setResult("YOU LOSE!");
    setcpScore(CPSCORE + 1);
  }

  if (userHand === "scissors" && cphand === "scissors") {
    setResult("TIE UP");
    document.querySelector(".AGAINSTPC").innerHTML = "";
  }
  if (userHand === "scissors" && cphand === "Rock") {
    setResult("YOU LOSE!");
    setcpScore(CPSCORE + 1);
    console.log("hi");
  }
  if (userHand === "scissors" && cphand === "paper") {
    setResult("YOU WIN!");
    setUserScore(USERSCORE + 1);
  }
};

const setResult = (result) => {
  console.log("result is", result);

  document.querySelector(".final-result").innerHTML = result;
};

const setUserScore = (score) => {
  USERSCORE = score;
  localStorage.setItem("userScore", USERSCORE);
  console.log(USERSCORE, "your score");
  document.getElementById("userscore").innerHTML = score;
};
const setcpScore = (score) => {
  CPSCORE = score;
  localStorage.setItem("cpScore", CPSCORE);
  console.log(CPSCORE, "cpscore");
  document.getElementById("cpscore").innerHTML = score;
};

const playAgain = () => {
  let hands = document.querySelector(".lower-hero");
  hands.style.display = "block";

  let content = document.querySelector(".contest");
  content.style.display = "none";
};

function play() {
  document.querySelector(".main-container").style.display = "flex";
  document.querySelector(".hurrey-page").style.display = "none";
}

function hurreyPage() {
  document.querySelector(".main-container").style.display = "none";
  document.querySelector(".hurrey-page").style.display = "block";
  document.querySelector(".nextplay").style.display = "none";
}
function showRules() {
  document.querySelector(".rule-guide").style.display = "block";
}

function hideRules() {
  document.querySelector(".rule-guide").style.display = "none";
}
