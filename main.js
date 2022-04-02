status="";
input="";
function setup() {
    canvas=createCanvas(470 ,370);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function start() {
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
    input= document.getElementById("lol").value;
    console.log(input);
}

function modelLoaded() {
    console.log('Model Loaded');
    status=true;
}

function draw() {
    image(video , 0 , 0 ,470 ,370)
}