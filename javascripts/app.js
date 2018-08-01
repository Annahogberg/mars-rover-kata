// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

var rover2 = {
  direction: "S",
  x: 9,
  y: 9,
  travelLog: []
};

var turn = rover;
console.log("Rover's turn starts now.");

// ======================

function turnLeft(){
  console.log("turnLeft was called!");
  if (turn === rover){
    switch (rover.direction){
      case "N":
      rover.direction = "W";
      break;
      case "W":
      rover.direction = "S";
      break;
      case "S":
      rover.direction = "E";
      break;
      case "E":
      rover.direction = "N";
      break;
    }
    console.log("Rover is now facing" + " " + rover.direction);
  }else if (turn === rover2){
    switch (rover2.direction){
      case "N":
      rover2.direction = "W";
      break;
      case "W":
      rover2.direction = "S";
      break;
      case "S":
      rover2.direction = "E";
      break;
      case "E":
      rover2.direction = "N";
      break;
    }
    console.log("Rover2 is now facing" + " " + rover2.direction);
  }
}

function turnRight(){
  console.log("turnRight was called!");
  if(turn === rover){
    switch (rover.direction){
      case "N":
      rover.direction = "E";
      break;
      case "S":
      rover.direction = "S";
      break;
      case "E":
      rover.direction = "W";
      break;
      case "W":
      rover.direction = "N";
      break;
    }
    console.log("Rover is now facing" + " " + rover.direction);
  }else if(turn === rover2){
    switch (rover2.direction) {
      case "N":
      rover2.direction = "E";
      break;
      case "E":
      rover2.direction = "S";
      break;
      case "S":
      rover2.direction = "W";
      break;
      case "W":
      rover2.direction = "N";
      break;
    }
    console.log("Rover2 is now facing" + " " + rover2.direction);
  }
}

function moveForward(){
  console.log("moveForward was called")
  if(turn === rover){
    switch (rover.direction){
      case "N":
      rover.y--;
      break;
      case "S":
      rover.y++;
      break;
      case "E":
      rover.x++;
      break;
      case "W":
      rover.x--;
      break;
    }
    console.log("Moving forward, Rover coordinates are now:" + "[ " + rover.x + ", " + rover.y + " ]");
  }else{
    switch (rover2.direction){
      case "N":
      rover2.y--;
      break;
      case "S":
      rover2.y++;
      break;
      case "E":
      rover2.x++;
      break;
      case "W":
      rover2.x--;
      break;
    }
    turn = rover;
    console.log("Moving forward, Rover2 coordinates are now:" + "[ " + rover2.x + ", " + rover2.y + " ]");
  }
}

function moveBackward(){
  if(turn === rover){
    switch(rover.direction){
      case "N":
      rover.y++;
      break;
      case "S":
      rover.y--;
      break;
      case "E":
      rover.x--;
      break;
      case "W":
      rover.x++;
      break;
    }
    console.log("Moving backward, Rover coordinates are now:" + "[ " + rover.x + ", " + rover.y + " ]");
  }else if(turn === rover2){
    switch(rover2.direction){
      case "N":
      rover2.y++;
      break;
      case "S":
      rover2.y--;
      break;
      case "E":
      rover2.x--;
      break;
      case "W":
      rover2.x++;
      break;
    }
    turn = rover;
    console.log("Moving backward, Rover2 coordinates are now:" + "[ " + rover2.x + ", " + rover2.y + " ]");
  }
}

function commandList() {
var validCommands = ["rffrfflfrff"];
  for(var i = 0; i<validCommands.length; i++) {
    switch(validCommands[i]) {
      case "f":
      moveForward(rover);
      break;
      case "r": 
      turnRight(rover);
      break;
      case "l":
      turnLeft(rover);
      break;
      default:
      return "Is an invalid command:\nThe Rover only responds to:\n'b ----> moveBackward'\n'f ----> moveForward'\n'l ----> turnLeft'\n'r ----> turnRight'\n\nTry again!"
    }
  }
}
console.log("Rover has traveled over next coordinates: " + rover.travelLog + "\nRover is now facing: " + rover.direction);
