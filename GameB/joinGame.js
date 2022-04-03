function mousePressed() {
  // try to join if not a player
  if(gameState == "TITLE") {
    
  } else if(gameState == "RULE") {
    
  } else if(gameState == "PLAYING"){
    if (me.role !== "player1" && me.role !== "player2" && me.role !== "player3") {
      joinGame();
      return;
    }
  }
  
  if (me.state === "dead") return;
  
}

function spawn(germ) {
  me.x = germ.spawnX;
  me.y = germ.spawnY;
  me.x_speed = germ.x_speed;
  me.x_speed_record = germ.x_speed_record;
  me.y_speed = germ.y_speed;
  me.y_speed_record = germ.y_speed_record;
  me.x_acceleration = germ.x_acceleration
  me.y_acceleration = germ.y_acceleration
  me.skill_used = germ.skill_used;
  me.skill_time_gap = germ.skill_time_gap;
  //me.r = germ.r
  //me.name = germ.name;
  me.direction = "up";
  me.state = germ.state;
}

function joinGame() {
  // don't let current players double join
  BGM.play()
  if (me.role === "player1" || me.role === "player2" || me.role === "player3") return;

  if (!participants.find((p) => p.role === "player1")) {
    spawn(germs[0]);
    me.role = "player1";
   //germ_r_add_on = 40
   shared.player1_r = 40
    return true;
  }
  if (!participants.find((p) => p.role === "player2")) {
    spawn(germs[1]);
    me.role = "player2";
    
    shared.player2_r = 20
    return true;
  }
  if (!participants.find((p) => p.role === "player3")) {
    spawn(germs[2]);
    me.role = "player3";
    
    
    shared.player3_r = 20
    return true;
  }
}

function watchGame() {
  me.role = "observer";
}

 