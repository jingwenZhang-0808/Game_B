function titleScreen() {
  background(bg);
  push();
  fill(255);
  textSize(180);
     textFont("Palette Mosaic");
    text("COCCI", 300, 600);
  text("MONSTER", 350, 800);
  pop();
  push();
  textSize(60);
  if (mouseIsPressed && mouseY<=1000 && mouseY>=580) {
    fill(0);
     textFont("Righteous");
    text("LET'S GO",580, 1000);
     //textFont(fontTitle);
    stateChange = "toRUlE";
  } else {
    fill(255);
     textFont("Righteous");
    text("LET'S GO", 580, 1000);
    
     
  }
  pop();
}