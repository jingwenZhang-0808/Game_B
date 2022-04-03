function gameScreen(germ_r_add_on) {
  background(bg1);
  
  stepLocal(germ_r_add_on);
  //----------------for those who is not the host, read this shared food array
  stepHost()
  //---------------------------------
  
  drawGerms();
  drawFoods();
  
  //only players can continue
  if (me.role === "player1" || me.role === "player2" || me.role === "player3") {
    moveGerms();
    eatFoods(); 
  }
  
  // if(germs[0].name == "player1's body"){
  //     push()
  //     textFont("Righteous");
  //     textAlign(RIGHT,TOP);
  //     textSize(20);
  //         fill(255);
  //     text("player1 is eaten.",50,25,width-100,300+30*dead_player_number);
  //     pop()
  //     dead_player_number++
  //    }
  //   if(germs[1].name == "player2's body"){
  //     push()
  //     textFont("Righteous");
  //     textAlign(RIGHT,TOP);
  //     textSize(20); 
  //     fill(255);
  //     text("player2 is eaten.",50,25,width-100,300+30*dead_player_number);
  //     pop()
  //     dead_player_number++
  //    }
  //  if(germs[2].name == "player3's body"){
  //     push()
  //     textAlign(RIGHT,TOP);
  //     textSize(20);
  //        fill(255);
  //   textFont("Righteous");
  //     text("player2 is eaten.",50,25,width-100,300+30*dead_player_number);
  //     pop()
  //     dead_player_number++
  //    }
}