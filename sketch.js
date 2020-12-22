const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
}

function draw() {
  background("black");
  
  for(var k = 0; k<=innerWidth; k=k+80) {
    divisions.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
 
  divisions.display();
  drawSprites();
}