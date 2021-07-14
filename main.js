song = "";
leftWristX = 0;
leftWristY = 0;
rigthWristX = 0;
rigthWristY = 0;

function preload(){
    song = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function draw(){
    image(video, 0, 0, 600, 500);
}


function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY = " + leftWristY);

        rigthWristX = results[0].pose.rigthWrist.x;
        rigthWristY = results[0].pose.rigthWrist.y;
        console.log("rightWristX = " + rigthWristX + " rightWristY = " + rightWristY);

    }
}