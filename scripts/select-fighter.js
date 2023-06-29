// Get all the character elements
const characters = document.querySelectorAll('.character');

// Get the select span
const selectSpan = document.querySelector('select');
const left =  document.getElementById("left");

let playerTurn = 1;
let previousPlayer1CharacterIndex = null;
let previousPlayer2CharacterIndex = null;
let player1CharacterIndex = null;
let player2CharacterIndex = null;
let isButtonPressed = false;
let lastAudio = document.getElementById('xanaudio');

function selectCharacter(characterIndex) {
  if (playerTurn === 1) {
    characters.forEach(character => character.classList.remove('selected-player1'));
  
    characters[characterIndex].classList.add('selected-player1');
    
 previousPlayer1CharacterIndex = player1CharacterIndex; 
    console.log(previousPlayer1CharacterIndex)
    player1CharacterIndex = characterIndex;
    console.log(player1CharacterIndex) 
    characters[characterIndex].style.borderColor = 'red';
    if(previousPlayer1CharacterIndex !== null){
    characters[previousPlayer1CharacterIndex].style.borderColor = 'rgba(24,24,24,1)';
    }
    
    // Change background image based on character index
    switch (characterIndex) {
        case 0:
          document.getElementById('left-image').src= 'images/char-select/bigDalida.png';
          lastAudio.pause();
          break;
        case 1:
          document.getElementById('left-image').src= 'images/char-select/bigKairow.png';
          lastAudio.pause();
          lastAudio = document.getElementById('kairowaudio')
          lastAudio.play()
          break;
        case 2:
          document.getElementById('left-image').src= 'images/char-select/bigSani2.png';
          lastAudio.pause();
          lastAudio = document.getElementById('sani')
          lastAudio.play()

          break;
        case 3:
          document.getElementById('left-image').src= 'images/char-select/bigXan.png';
          lastAudio.pause();
          lastAudio = document.getElementById('xanaudio')
          lastAudio.play()
          console.log(lastAudio)
          break;
        default:
          // Handle other cases or provide a fallback image
          document.getElementById('left-image').src= 'images/char-select/bigDalida.png';
          break;
      }

    document.getElementById('selectButton').onclick = function() {
      playerTurn = 2;
      console.log("Select button is pressed.");
  
   };
  }
  
  else if (playerTurn === 2) {
    characters.forEach(character => character.classList.remove('selected-player1'));
  
    characters[characterIndex].classList.add('selected-player1');
  
    characters[characterIndex].style.borderColor = 'blue';
    previousPlayer2CharacterIndex = player2CharacterIndex; 

    player2CharacterIndex = characterIndex;
    if(previousPlayer2CharacterIndex !== null){
        characters[previousPlayer2CharacterIndex].style.borderColor = 'rgba(24,24,24,1)';
    }
    if(previousPlayer2CharacterIndex == player1CharacterIndex){
      characters[player1CharacterIndex].style.borderColor = 'red';

    }

        switch (characterIndex) {
          case 0:
            document.getElementById('right-image').src= 'images/char-select/bigDalida.png';
            document.getElementById('right-image').style.transform = "scaleX(-1)";
            lastAudio.pause();

            break;
          case 1:
            document.getElementById('right-image').src= 'images/char-select/bigKairow.png';
            document.getElementById('right-image').style.transform = "scaleX(-1)";
            lastAudio.pause();
            lastAudio = document.getElementById('kairowaudio')
            lastAudio.play()
            break;
          case 2:
            document.getElementById('right-image').src= 'images/char-select/bigSani2.png';
            document.getElementById('right-image').style.transform = "scaleX(-1)";
            lastAudio.pause();
            lastAudio = document.getElementById('sani')
            lastAudio.play()
            break;
          case 3:
            document.getElementById('right-image').src= 'images/char-select/bigXan.png';
            document.getElementById('right-image').style.transform = "scaleX(-1)";
            lastAudio.pause();
            lastAudio = document.getElementById('xanaudio')
            lastAudio.play()
            break;
          default:
            // Handle other cases or provide a fallback image
            document.getElementById('left-image').src= 'images/char-select/bigDalida.png';
            break;
        }   
    document.getElementById('selectButton').onclick = function() {
      localStorage.setItem("player1", player1CharacterIndex);
      localStorage.setItem("player2", player2CharacterIndex);
      window.location.href = "./fight.html";
    };}
}

function characterClickHandler() {
  const characterIndex = Array.from(characters).indexOf(this);

    selectCharacter(characterIndex)
}

characters.forEach(character => character.addEventListener('click', characterClickHandler));
