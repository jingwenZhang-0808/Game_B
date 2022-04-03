function moveGerms() {
  if(keyIsDown(DOWN_ARROW) || keyIsDown(83)){  
    me.y += me.y_speed;
    if(keyIsDown(32) && me.skill_used == false){
      me.y_speed += me.y_acceleration;
      me.skill_used = true;
      setTimeout(UnblockSkill,me.skill_time_gap);
    }
  }
  
  if(keyIsDown(UP_ARROW) || keyIsDown(87)){
    me.y -= me.y_speed;
      
    if(keyIsDown(32) && me.skill_used == false){
      me.y_speed += me.y_acceleration
      me.skill_used = true
      setTimeout(UnblockSkill,me.skill_time_gap);
   }
  }
  
  if(keyIsDown(LEFT_ARROW) || keyIsDown(65)){
    me.x -= me.x_speed
    
    if(keyIsDown(32) && me.skill_used == false){
      me.x_speed += me.x_acceleration
      me.skill_used = true
      setTimeout(UnblockSkill,me.skill_time_gap);
    }
  }
  
  if(keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
    me.x += me.x_speed
    
    if(keyIsDown(32) && me.skill_used == false){
      me.x_speed += me.x_acceleration
      me.skill_used = true
      setTimeout(UnblockSkill,me.skill_time_gap);      
    }
  }
  
}

function keyReleased() {
  me.x_speed = me.x_speed_record;
  me.y_speed = me.y_speed_record;
}

function UnblockSkill(){
  me.skill_used = false;
  console.log("used: " + me.skill_used);
}
