



const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.7
let musicPlay = false;

const background = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: './img/background.png'
})

const shop = new Sprite({
  position: {
    x: 600,
    y: 128
  },
  imageSrc: './img/shop.png',
  scale: 2.75,
  framesMax: 6
})

let characters = []

let player1 = localStorage.getItem("player1")
let player2= localStorage.getItem("player2")


if(player1==0) {
  document.getElementById('player1-name').textContent = 'Dalida queen';
}else if(player1==1) {
  document.getElementById('player1-name').textContent = 'Kairosh otmarozok';
}else if(player1==2) {
  document.getElementById('player1-name').textContent = 'Sani brat';
}else if(player1==3) {
  document.getElementById('player1-name').textContent =  'Xan ata';
}

if(player2==0) {
  document.getElementById('player2-name').textContent = 'Dalida queen';
}else if(player2==1) {
  document.getElementById('player2-name').textContent = 'Kairosh otmarozok';
}else if(player2==2) {
  document.getElementById('player2-name').textContent = 'Sani brat';
}else if(player2==3) {
  document.getElementById('player2-name').textContent =  'Xan ata';
}




characters[0] = {
  player: {
    position: {
      x: 100,
      y: 128,
    },
    imageSrc: './img/dalida/Idle.png',
    framesMax: 11,
    offset: {
      x: 100,
      y: 128
    },
    idle: {
      imageSrc: './img/dalida/Idle.png',
      framesMax: 11
    },
    run: {
      imageSrc: './img/dalida/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './img/dalida/Jump.png',
      framesMax: 3
    },
    fall: {
      imageSrc: './img/dalida/Fall.png',
      framesMax: 3
    },
    attack1: {
      imageSrc: './img/dalida/Attack1.png',
      framesMax: 7
    },
    takeHit: {
      imageSrc: './img/dalida/Take Hit.png',
      framesMax: 4
    },
    death: {
      imageSrc: './img/dalida/Death.png',
      framesMax: 11
    },
    attackBox: {
      offset: {
        x: -100,
        y: 0
      },
      width: 160,
      height: 50
    },
    dead: false,
  },
  enemy: {
    position: {
      x: 500,
      y: 128,
    },
    offset: {
      x: 0,
      y: 128
    },
    imageSrc: './img/reverseDalida/Idle.png',
    framesMax: 11,
    idle: {
      imageSrc: './img/reverseDalida/Idle.png',
      framesMax: 11
    },
    run: {
      imageSrc: './img/reverseDalida/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './img/reverseDalida/Jump.png',
      framesMax: 3
    },
    fall: {
      imageSrc: './img/reverseDalida/Fall.png',
      framesMax: 3
    },
    attack1: {
      imageSrc: './img/reverseDalida/Attack1.png',
      framesMax: 7
    },
    takeHit: {
      imageSrc: './img/reverseDalida/Take Hit.png',
      framesMax: 4
    },
    death: {
      imageSrc: './img/reverseDalida/Death.png',
      framesMax: 11
    },
    attackBox: {
      offset: {
        x: 0,
        y: 0
      },
      width: 160,
      height: 50
    },
    dead: false,
}
}

characters[1] = {
  player: {
    position: {
      x: 100,
      y: 98,
    },
    offset: {
      x: 100,
      y: 98
    },
    imageSrc: './img/kairow/Idle.png',
    framesMax: 10,
    idle: {
      imageSrc: './img/kairow/Idle.png',
      framesMax: 10
    },
    run: {
      imageSrc: './img/kairow/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './img/kairow/Jump.png',
      framesMax: 3
    },
    fall: {
      imageSrc: './img/kairow/Fall.png',
      framesMax: 3
    },
    attack1: {
      imageSrc: './img/kairow/Attack1.png',
      framesMax: 7
    },
    takeHit: {
      imageSrc: './img/kairow/Take hit.png',
      framesMax: 3
    },
    death: {
      imageSrc: './img/kairow/Death.png',
      framesMax: 7
    },
    attackBox: {
      offset: {
        x: -100,
        y: 0
      },
      width: 160,
      height: 50
    },
    dead: false,
  },
  enemy: {
    position: {
      x: 500,
      y: 98,
    },
    offset: {
      x: 0,
      y: 98
    },
    imageSrc: './img/reverseKairow/Idle.png',
    framesMax: 10,
    idle: {
      imageSrc: './img/reverseKairow/Idle.png',
      framesMax: 10
    },
    run: {
      imageSrc: './img/reverseKairow/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './img/reverseKairow/Jump.png',
      framesMax: 3
    },
    fall: {
      imageSrc: './img/reverseKairow/Fall.png',
      framesMax: 3
    },
    attack1: {
      imageSrc: './img/reverseKairow/Attack1.png',
      framesMax: 7
    },
    takeHit: {
      imageSrc: './img/reverseKairow/Take hit.png',
      framesMax: 3
    },
    death: {
      imageSrc: './img/kairow/Death.png',
      framesMax: 7
    },
    attackBox: {
      offset: {
        x: 0,
        y: 0
      },
      width: 160,
      height: 50
    },
    dead: false
}
}

characters[2] = {
  player: {
    position: {
      x: 100,
      y: 160,
    },
    offset: {
      x: 100,
      y: 160
    },     
    imageSrc: './img/sani/Idle.png',
    framesMax: 4,
    idle: {
      imageSrc: './img/sani/Idle.png',
      framesMax: 4
    },
    run: {
      imageSrc: './img/sani/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './img/sani/Jump.png',
      framesMax: 2
    },
    fall: {
      imageSrc: './img/sani/Fall.png',
      framesMax: 2
    },
    attack1: {
      imageSrc: './img/sani/Attack1.png',
      framesMax: 4
    },
    takeHit: {
      imageSrc: './img/sani/Take hit.png',
      framesMax: 3
    },
    death: {
      imageSrc: './img/kenji/Death.png',
      framesMax: 7
    },
    attackBox: {
      offset: {
        x: -20,
        y: 0
      },
      width: 160,
      height: 50
    },
    dead: false,
  },
  enemy: {
    position: {
      x: 500,
      y: 160,
    },
    offset: {
      x: 0,
      y: 160
    },
    imageSrc: './img/kenji/Idle.png',
    framesMax: 4,
    idle: {
      imageSrc: './img/kenji/Idle.png',
      framesMax: 4
    },
    run: {
      imageSrc: './img/kenji/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './img/kenji/Jump.png',
      framesMax: 2
    },
    fall: {
      imageSrc: './img/kenji/Fall.png',
      framesMax: 2
    },
    attack1: {
      imageSrc: './img/kenji/Attack1.png',
      framesMax: 4
    },
    takeHit: {
      imageSrc: './img/kenji/Take hit.png',
      framesMax: 3
    },
    death: {
      imageSrc: './img/kenji/Death.png',
      framesMax: 7
    },
    attackBox: {
      offset: {
        x: -50,
        y: 0
      },
      width: 160,
      height: 50
    },
    dead: false,
}
}


characters[3] = {
  player: {
    position: {
      x: 100,
      y: 145,
    },
    offset: {
      x: 100,
      y: 145
    },
    imageSrc: './img/Xan/Idle.png',
    framesMax: 8,
    idle: {
      imageSrc: './img/Xan/Idle.png',
      framesMax: 8
    },
    run: {
      imageSrc: './img/Xan/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './img/Xan/Jump.png',
      framesMax: 2
    },
    fall: {
      imageSrc: './img/Xan/Fall.png',
      framesMax: 2
    },
    attack1: {
      imageSrc: './img/Xan/Attack1.png',
      framesMax: 6
    },
    takeHit: {
      imageSrc: './img/Xan/Takehit.png',
      framesMax: 4
    },
    death: {
      imageSrc: './img/Xan/Death.png',
      framesMax: 6
    },
    attackBox: {
      offset: {
        x: 0,
        y: 0
      },
      width: 160,
      height: 50
    },
    dead: false
  },
  enemy: {
    position: {
      x: 500,
      y: 145,
    },
    offset: {
      x: 0,
      y: 145
    },
    imageSrc: './img/reverseXan/Idle.png',
    framesMax: 8,
    idle: {
      imageSrc: './img/reverseXan/Idle.png',
      framesMax: 8
    },
    run: {
      imageSrc: './img/reverseXan/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './img/reverseXan/Jump.png',
      framesMax: 2
    },
    fall: {
      imageSrc: './img/reverseXan/Fall.png',
      framesMax: 2
    },
    attack1: {
      imageSrc: './img/reverseXan/Attack1.png',
      framesMax: 6
    },
    takeHit: {
      imageSrc: './img/reverseXan/Take Hit.png',
      framesMax: 4
    },
    death: {
      imageSrc: './img/Xan/Death.png',
      framesMax: 6
    },
    attackBox: {
      offset: {
        x: -50,
        y: 0
      },
      width: 160,
      height: 50
    }
    ,dead: false
}
}

console.log(characters[player1])
console.log(characters[player2])

let player = new Fighter({
  position: {
    x: characters[player1]['player']['position'].x,
    y: characters[player1]['player']['position'].y,
  },
  velocity: {
    x: 0,
    y: 0
  },
  imageSrc: characters[player1]['player']['idle'].imageSrc,
  framesMax: characters[player1]['player']['idle'].framesMax,
  scale: 2.5,
  offset: {
    x: characters[player1]['player']['offset'].x,
    y: characters[player1]['player']['offset'].y,
  },
  sprites: {
    idle: {
      imageSrc: characters[player1]['player']['idle'].imageSrc,
      framesMax: characters[player1]['player']['idle'].framesMax
    },
    run: {
      imageSrc: characters[player1]['player']['run'].imageSrc,
      framesMax: characters[player1]['player']['run'].framesMax
    },
    jump: {
      imageSrc: characters[player1]['player']['jump'].imageSrc,
      framesMax: characters[player1]['player']['jump'].framesMax
    },
    fall: {
      imageSrc: characters[player1]['player']['fall'].imageSrc,
      framesMax: characters[player1]['player']['fall'].framesMax
    },
    attack1: {
      imageSrc: characters[player1]['player']['attack1'].imageSrc,
      framesMax: characters[player1]['player']['attack1'].framesMax
    },
    takeHit: {
      imageSrc: characters[player1]['player']['takeHit'].imageSrc,
      framesMax: characters[player1]['player']['takeHit'].framesMax
    },
    death: {
      imageSrc: characters[player1]['player']['death'].imageSrc,
      framesMax: characters[player1]['player']['death'].framesMax
    }
  },
  attackBox: {
    offset: {
      x: characters[player1]['player']['attackBox']['offset'].x,
      y: characters[player1]['player']['attackBox']['offset'].y
    },
    width: 160,
    height: 50
  },
  dead: characters[player1]['player']['dead']
})

function openModal() {
  const modal = document.getElementById('fighterModal');
  // modal.style.display = 'block';
}

// Function to close the fighter selection modal
function closeModal() {
  const modal = document.getElementById('fighterModal');

  // modal.style.display = 'none';
}
let selectedFighter = 'fighter1'; // Default fighter option

// Function to change the selected fighter




const enemy = new Fighter({
  position: {
    x: characters[player2]['enemy']['position'].x,
    y: characters[player2]['enemy']['position'].y,
  },
  velocity: {
    x: 0,
    y: 0
  },
  color: 'blue',
  image: characters[player2]['enemy']['idle'].imageSrc,
  imageSrc: characters[player2]['enemy']['idle'].imageSrc,
  framesMax: characters[player2]['enemy']['idle'].framesMax,
  scale: 2.5,
  offset: {
    x: characters[player2]['enemy']['offset'].x,
    y: characters[player2]['enemy']['offset'].y,
  },
  sprites: {
    idle: {
      imageSrc: characters[player2]['enemy']['idle'].imageSrc,
      framesMax: characters[player2]['enemy']['idle'].framesMax
    },
    run: {
      imageSrc: characters[player2]['enemy']['run'].imageSrc,
      framesMax: characters[player2]['enemy']['run'].framesMax
    },
    jump: {
      imageSrc: characters[player2]['enemy']['jump'].imageSrc,
      framesMax: characters[player2]['enemy']['jump'].framesMax
    },
    fall: {
      imageSrc: characters[player2]['enemy']['fall'].imageSrc,
      framesMax: characters[player2]['enemy']['fall'].framesMax
    },
    attack1: {
      imageSrc: characters[player2]['enemy']['attack1'].imageSrc,
      framesMax: characters[player2]['enemy']['attack1'].framesMax
    },
    takeHit: {
      imageSrc: characters[player2]['enemy']['takeHit'].imageSrc,
      framesMax: characters[player2]['enemy']['takeHit'].framesMax
    },
    death: {
      imageSrc: characters[player2]['enemy']['death'].imageSrc,
      framesMax: characters[player2]['enemy']['death'].framesMax
    }
  },
  attackBox: {
    offset: {
      x: characters[player2]['enemy']['attackBox']['offset'].x,
      y: characters[player2]['enemy']['attackBox']['offset'].y
    },
    width: 160,
    height: 50
  },
  dead: characters[player2]['enemy']['dead']
})

console.log(player)

const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  }
}

// Function to open the fighter selection modal


// Function to handle fighter selection
// function selectFighter(fighter) {
//   // Perform actions based on the selected fighter
//   console.log('Selected fighter:', fighter);

//   // Close the modal after selecting a fighter
//   closeModal();
// }

// Add event listener to open the modal on button click
const modalButton = document.getElementById('chooseFighterButton');
// modalButton.addEventListener('click', openModal);
openModal()
decreaseTimer()

let isPaused = false;



function animate() {
  if (!isPaused) {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    background.update()
    shop.update()
    c.fillStyle = 'rgba(255, 255, 255, 0.15)'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    enemy.update()

    player.velocity.x = 0
    enemy.velocity.x = 0

    // player movement

    if (keys.a.pressed && player.lastKey === 'a') {
      player.velocity.x = -5
      player.switchSprite('run')
    } else if (keys.d.pressed && player.lastKey === 'd') {
      player.velocity.x = 5
      player.switchSprite('run')
    } else {
      player.switchSprite('idle')
    }

    // jumping
    if (player.velocity.y < 0) {
      player.switchSprite('jump')
    } else if (player.velocity.y > 0) {
      player.switchSprite('fall')
    }

    // Enemy movement
    if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
      enemy.velocity.x = -5
      enemy.switchSprite('run')
    } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
      enemy.velocity.x = 5
      enemy.switchSprite('run')
    } else {
      enemy.switchSprite('idle')
    }

    // jumping
    if (enemy.velocity.y < 0) {
      enemy.switchSprite('jump')
    } else if (enemy.velocity.y > 0) {
      enemy.switchSprite('fall')
    }

    // detect for collision & enemy gets hit
    if (
      rectangularCollision({
        rectangle1: player,
        rectangle2: enemy
      }) &&
      player.isAttacking &&
      player.framesCurrent === 3
    ) {
      enemy.takeHit()
      player.isAttacking = false

      gsap.to('#enemyHealth', {
        width: enemy.health + '%'
      })
    }

    // if player misses
    if (player.isAttacking && player.framesCurrent === 3) {
      player.isAttacking = false
    }

    // this is where our player gets hit
    if (
      rectangularCollision({
        rectangle1: enemy,
        rectangle2: player
      }) &&
      enemy.isAttacking &&
      enemy.framesCurrent === 2
    ) {
      player.takeHit()
      enemy.isAttacking = false

      gsap.to('#playerHealth', {
        width: player.health + '%'
      })
    }

    // if player misses
    if (enemy.isAttacking && enemy.framesCurrent === 2) {
      enemy.isAttacking = false
    }

    // end game based on health
    if (enemy.health <= 0 || player.health <= 0) {
      determineWinner({ player, enemy, timerId })
    }
  }
}

animate()

function reset(){
  
  enemy.image =characters[player2]['enemy']['idle'].imageSrc;
  enemy.image.src =characters[player2]['enemy']['idle'].imageSrc;
  enemy.framesMax = characters[player2]['enemy']['idle'].framesMax;
  enemy.health = 100;
  enemy.position.x = characters[player2]['enemy']['position'].x;
  
  player.image =characters[player1]['player']['idle'].imageSrc;
  player.image.src =characters[player1]['player']['idle'].imageSrc;
  player.framesMax = characters[player1]['player']['idle'].framesMax;
  player.health = 100;
  player.position.x = characters[player1]['player']['position'].x;
  
  timer = 60;
  player.refresh()
  enemy.refresh()
  // Reset DOM elements
  document.getElementById('playerHealth').style.width = '100%';
  document.getElementById('enemyHealth').style.width = '100%';
  document.getElementById('timer').innerHTML = timer;
  document.getElementById('displayText').style.display = 'none';




  // Restart timer
  clearTimeout(timerId);
  if(!isPaused) {
    decreaseTimer()
  }

}
function pauseGame() {
  if (!isPaused) {
    isPaused = true;
    clearTimeout(timerId);
   
  } else {
    isPaused = false;
    
    animate ()
    decreaseTimer();
  }
}


function resetGame() {
  reset()
}

// Event listener for restart button click
document.getElementById('restartButton').addEventListener('click', resetGame);


// Add event listener to the pause button
const pauseButton = document.querySelector('#pauseButton');
pauseButton.addEventListener('click', pauseGame);



window.addEventListener('keydown', (event) => {
  if (!player.dead) {
    switch (event.key) {
      case 'd':
        keys.d.pressed = true
        player.lastKey = 'd'
        document.getElementById('backMusic').play();
        break
      case 'a':
        keys.a.pressed = true
        player.lastKey = 'a'
        document.getElementById('backMusic').play();
        break
      case 'w':
        player.velocity.y = -20
        document.getElementById('backMusic').play();
        break
      case 'c':
        player.attack()
        document.getElementById('backMusic').play();
        break
    }
  }

  if (!enemy.dead) {
    switch (event.key) {
      case 'ArrowRight':
        keys.ArrowRight.pressed = true
        enemy.lastKey = 'ArrowRight'
        document.getElementById('backMusic').play();
        break
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = true
        enemy.lastKey = 'ArrowLeft'
        document.getElementById('backMusic').play();
        break
      case 'ArrowUp':
        enemy.velocity.y = -20
        document.getElementById('backMusic').play();
        break
      case 'ArrowDown':
        enemy.attack()
        document.getElementById('backMusic').play();
        break
    }
  }
})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
  }

  // enemy keys
  switch (event.key) {
    case 'ArrowRight':
      keys.ArrowRight.pressed = false
      break
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false
      break
  }
})




