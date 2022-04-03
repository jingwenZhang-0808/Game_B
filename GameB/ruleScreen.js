function ruleScreen() {
  background(bg);
  image(img4,0,0);
  push();
      //fill(255);
      textSize(60);


 
  

  if (mouseIsPressed && mouseY<=1000 && mouseY>=580) {
    fill(0);
     textFont("Righteous");
    text("START",580, 1000);
    stateChange = "toGAME";
  } else {
    fill(255);
     textFont("Righteous");
    text("START", 580, 1000);
  }
  pop();
}