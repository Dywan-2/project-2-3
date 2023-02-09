song="";
function preload(){
    song=loadSound("music.mp3");
    }
function setup(){
canvas=createCanvas(600,600);
canvas.center();
webcam=createCapture(VIDEO);
webcam.hide();

}
function draw(){
image(webcam,0,0,600,600);

}

function play(){
    song.play();
}