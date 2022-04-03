function drawGerms() {
  push();
  fill(0);
  germs.forEach((germ) => {
    if(germ.name == "player1" || germ.name == "player1's body"){
           textFont("Righteous");

        image(img, germ.x, germ.y, shared.player1_r,shared.player1_r);
     
        text(shared.player1_body, germ.x, germ.y + shared.player1_r/2 + 20);
         
    }
    if(germ.name == "player2" || germ.name == "player2's body"){
      
        image(img3, germ.x, germ.y, shared.player2_r,shared.player2_r);
     
        text(shared.player2_body, germ.x, germ.y + shared.player2_r/2 + 20);
         
    }
    if(germ.name == "player3" || germ.name == "player3's body"){
     
    image(img5,germ.x, germ.y, shared.player3_r,shared.player3_r);
      
      
    text(shared.player3_body, germ.x, germ.y + shared.player3_r/2 + 20);
    }
  })
  pop();
}

function drawFoods(){
  push();
  shared.foods.forEach((food) => {  
        //fill(0);
   image(img2, food.x,food.y,food.r, food.h)
  });
  pop(); 
}