const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var dateTime;
var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
var responseJSON = await response.json()
var dateTime=responseJSON.currentDateTime;
    // write code slice the datetime
hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
if(hour>=06&&hour<19){
    bg="sprites/sunrise1.png"
}
else{
    bg="sprites/sunset12.png"
}

    //load the image in backgroundImg variable here
backgroundImg=loadImage(bg);
}
