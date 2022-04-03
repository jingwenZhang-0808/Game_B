function stepLocal(germ_r_add_on) {
  // find the current players, if they exist
  const p1 = participants.find((p) => p.role === "player1");
  const p2 = participants.find((p) => p.role === "player2");
  const p3 = participants.find((p) => p.role === "player3");
  
  // hide players if they are not in the game
  if (!p1) germs[0].x = -32;
  if (!p2) germs[1].x = -32;
  if (!p3) germs[2].x = -32;
  
  // sync germ positions from shared to local
  const syncGerm = (germ, player,germ_r_add_on) => {
    germ.x = player.x;
    germ.y = player.y;
    germ.x_speed = player.x_speed;
    germ.y_speed = player.y_speed;
    germ.x_acceleration = player.x_acceleration;
    germ.y_acceleration = player.y_acceleration;

  };
  
  
  if (p1) syncGerm(germs[0], p1);
  if (p2) syncGerm(germs[1], p2);
  if (p3) syncGerm(germs[2], p3);
    
  
  //check germs collision 
  shared.dist1 = dist(germs[0].x, germs[0].y, germs[1].x, germs[1].y);
  shared.dist2 = dist(germs[0].x, germs[0].y, germs[2].x, germs[2].y);
  shared.dist3 = dist(germs[2].x, germs[2].y, germs[1].x, germs[1].y);
  shared.collisionDist1 = (shared.player1_r + shared.player2_r)/2;
  shared.collisionDist2 = (shared.player1_r + shared.player3_r)/2;
  shared.collisionDist3 = (shared.player3_r +shared.player1_r)/2;
  
  //console.log(germs[1].r);

  //case1: germ0 and germ1 collision happen
  if((shared.dist1 - shared.collisionDist1) < 0) {
    if(shared.player1_r > shared.player2_r) {
      if(shared.player2_r!==0.001){
      if(eatPlayer_played == false){
      
      eatPlayer.play()
      eatPlayer_played = true
      }
      }
      shared.player1_r += shared.player2_r;
      shared.player2_r = 0.001;
      console.log("0");
      shared.player2_body = "player2's body";
      germs[1].state = "dead";
      console.log(germs[1].name);
      germs[1].state = "dead";
     
      return;
      }
    else if(shared.player1_r < shared.player2_r){
      shared.player2_r += shared.player1_r;
      shared.player1_r = 0.001;
      shared.player1_body = "player1's body"
      germs[0].state = "dead";
      if(eatPlayer_played == false){
      eatPlayer.play()
      eatPlayer_played = true
      }
    }
  }
  
  //case2: germ0 and germ2 collision happen
  if((shared.dist2 - shared.collisionDist2) < 0) {
    if(shared.player1_r > shared.player3_r) {
      if(shared.player3_r!==0.001){
      if(eatPlayer_played == false){
      
      eatPlayer.play()
      eatPlayer_played = true
      }
      }
      shared.player1_r += shared.player3_r;
      shared.player3_r = 0.001;
      shared.player3_body = "player3's body";
      germs[2].state = "dead";
      
      return;
      }
    else if(shared.player1_r < shared.player3_r){
      shared.player3_r += shared.player1_r;
      shared.player1_r = 0.001;
      shared.player1_body = "player1's body";
      germs[0].state = "dead";
      if(eatPlayer_played == false){
      eatPlayer.play()
      eatPlayer_played = true
      }
    }
  }
  
  //case1: germ2 and germ1 collision happen
  if((shared.dist3 - shared.collisionDist3) < 0) {
    if(shared.player3_r > shared.player2_r) {
      if(shared.player2_r!==0.001){
      if(eatPlayer_played == false){
      
      eatPlayer.play()
      eatPlayer_played = true
      }
      }
      shared.player3_r += shared.player2_r;
      shared.player2_r = 0.001;
      germ.h = 0;
      console.log("1");
      shared.player2_body = "player2's body";
      germs[1].state = "dead";
      
      return;
      }
    else if(shared.player3_r < shared.player2_r){
      shared.player2_r += shared.player3_r;
      shared.player3_r = 0.001;
      shared.player3_body = "player3's body";
      germs[2].state = "dead";
      if(eatPlayer_played == false){
      eatPlayer.play()
      eatPlayer_played = true
      }
    }
  }
  
}

//generate foods on canvas based on host's shared food array
function stepHost(){
  shared.foods.forEach((sharedfood, i) => {
    const localfood = shared.foods[i];
  });
}