var video;
var canvas;
var posenet;
var direitoX=0;
var esquerdoX=0;
var diferenca=0;

function setup(){
    canvas=createCanvas(600, 600);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(600, 600);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("poseNet foi iniciado");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        direitoX=results[0].pose.rightWrist.x;
        esquerdoX=results[0].pose.leftWrist.x;
        diferenca=floor(direitoX-esquerdoX);//errado esse//
    }
}

function draw(){
    background("gray");
    document.getElementById("tamanho_fonte").innerHTML="tamanho da fonte sera: "+diferenca+"px";
    textSize(diferenca);
    fill("white");
    text("oi tudo bem???",300,300);
}