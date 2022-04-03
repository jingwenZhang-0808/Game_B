let shared;
let me;
let participants;
let BGM
let eatFood
let eatPlayer
let eatPlayer_played = false
//let dead_player_number = 0

let gameState = "TITLE";
let stateChange = "";
let germ_r_add_on = 0
let germ_eat = false
let bg;
let img2;
let img;
let img4;
let img3;
let img5;
let player_dead_number = 0
const germs = [
  {
    x: -200,
    y: -200, 
    r: 40, // size
    h: 40,
    spawnX: 200, // where to spawn
    spawnY: 200,
    x_speed: 2,
    x_speed_record:2,
    y_speed: 2,
    y_speed_record: 2,
    x_acceleration: 5,
    y_acceleration: 5,
    skill_used: false,
    skill_time_gap: 6000,
    name: "player1",
    state: "alive"
  },
  {
    x: -400,
    y: -400,
    r: 20,
    h:40,
    spawnX: 300,
    spawnY: 300,
    x_speed: 1,
    x_speed_record:1,
    y_speed: 1,
    y_speed_record: 1,
    x_acceleration: 10,
    y_acceleration: 10,
    skill_used: false,
    skill_time_gap: 6000,
    name: "player2",
    state: "alive"
  },
  {
    x: -600,
    y: -600,
    r: 20,
    h:40,
    spawnX: 500,
    spawnY: 500,
    x_speed: 3,
    x_speed_record: 4,
    y_speed: 4,
    y_speed_record: 4,
    x_acceleration: 10,
    y_acceleration: 10,
    skill_used: false,
    skill_time_gap: 6000,
    name: "player3",
    state: "alive"
  },
];


function preload() {
  partyConnect(
    "wss://joan-p5-game.herokuapp.com",
    "Game_BBBBBBBBBBBBBb",
    "main81"
  ); 
  shared = partyLoadShared("globals");
  me = partyLoadMyShared();
  participants = partyLoadParticipantShareds();
  BGM = loadSound('music/BGM.mp3')
  eatFood = loadSound('music/eatFood.wav')
  eatPlayer = loadSound('music/eatPlayer.wav')
  
  img = loadImage('image/germ1.GIF');
  bg = loadImage('image/background.png');
  bg1 = loadImage('image/background2.png');
  img2 = loadImage('image/food.png');
  img3 = loadImage('image/germ2.GIF');
  img5 = loadImage('image/germ3.GIF');
  img4 = loadImage('image/rule.png');


}

function setup() {
  
  
  createCanvas(1600, 1200);
  ellipseMode(CENTER);
  
  //the host generates writes the foods array while other players only read （they will write to this array as they     eat foods
  
  //BGM.play()
  if(partyIsHost()){
    shared.r = [40, 20];
    shared.foods = []
    for(i = 0;i<=100;i++){
      let food_x = random(10,1590)
      let food_y = random(10,1190)
      let food_r = 15
      let food_h = 15
      //let food_h = 40
      
      shared.foods.push({
        x:food_x,
        y:food_y,
        r:food_r,
        h:food_h
      
      })
    }
    shared.player1_r = 1
    shared.player2_r = 1
    shared.player3_r = 1
  }
  shared.foods = shared.foods || []
  shared.player1_r = shared.player1_r || 0
  shared.player2_r = shared.player2_r || 0
  shared.player3_r = shared.player3_r || 0
 
  shared.player1_body = "player1"
  shared.player2_body = "player2"
  shared.player3_body = "player3"
  shared.win1 = "player1 successfully occupied the petri dish";
  shared.win2 = "player2 successfully occupied the petri dish";
  shared.win3 = "player3 successfully occupied the petri dish";
  
}

function draw() { 
  background(bg);
  
  console.log(me.skill_used);
  //structure
  germs[0].r = shared.player1_r;
  germs[1].r = shared.player2_r;
  germs[2].r = shared.player3_r;
  
  if (gameState === "TITLE") {
    titleScreen();
  } 
  else if (gameState === "PLAYING") {
    gameScreen(germ_r_add_on);
  } 
  else if (gameState === "RULE") {
    ruleScreen();
  } 
  
  if(germs[0].state == "dead" ){
    push();
    textSize(30);
    textFont("Righteous");
    text("Player1 is eaten.", 100,100)
    pop();
  }
  if(germs[1].state == "dead" ){
    push();
    textSize(30);
    textFont("Righteous");
    text("Player2 is eaten.", 100,200)
    pop();
  }
  if(germs[2].state == "dead" ){
    push();
    textSize(30);
    textFont("Righteous");
    text("Player3 is eaten.", 100,300)
    pop();
  }
  
  
  
  //player 1 win
  if(germs[1].state == "dead" && germs[2].state == "dead" && germs[0].state == "alive") {
    push();
    textSize(30);
         textFont("Righteous");
    text(shared.win1, germs[0].x + shared.player1_r/2 + 10, germs[0].y + shared.player1_r/2 + 10);
    pop();
  }
  //player2 win
  if(germs[0].state == "dead" && germs[2].state == "dead" && germs[1].state == "alive") {
    push();
    textSize(30);
         textFont("Righteous");
    text(shared.win2, germs[1].x + shared.player2_r/2 + 10, germs[1].y + shared.player2_r/2 + 10);
    pop();
  }
  //player3 win
  if(germs[0].state == "dead" && germs[1].state == "dead" && germs[2].state == "alive") {
    push();
    textSize(30);
         textFont("Righteous");
    text(shared.win3, germs[2].x + shared.player3_r/2 + 10, germs[2].y + shared.player3_r/2 + 10);
    pop();
  }
}

function eatFoods() {
  for (const f of shared.foods){
    germs.forEach((germ) => {
      if(dist(germ.x,germ.y,f.x,f.y) < (germ.r+f.r)/2){/////////// I changed condition here
      
        if(me.role === "player1"){
          shared.player1_r +=f.r
        }
        if(me.role === "player2"){
          shared.player2_r +=f.r
        }
        if(me.role === "player3"){
          shared.player3_r +=f.r
        }
      
      //germ.r += f.r
      shared.foods.splice(shared.foods.indexOf(f),1)
      console.log("eat food")
      eatFood.play()//////////////////////////////////////////////I added sound effect here
    }
    })
  }
}

function mouseReleased() {
  if (gameState == "TITLE" && stateChange == "toRUlE") {      
    gameState = "RULE";
  } else if (gameState == "RULE" && stateChange == "toGAME") {
    gameState = "PLAYING";
  }
}





