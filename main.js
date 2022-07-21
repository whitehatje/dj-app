song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function setup()
{
canvas = createCanvas(600 , 500);
canvas.center();
video = createCapture(VIDEO);
video.hide();

posenet = ml5.posenet(video , modelLoaded);
posenet.on('pose' , gotPoses);
}

function gotPoses(results)
{
if (results.length > 0 )
{
console.log(results);
leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y; 
console.log("Left Wrist x =" + leftWristX + "Left Wrist y =" + leftWristY);

rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("Right Wrist x = " + rightWristX + "Right Wrist y = " + rightWristY);
}
}


function modelLoaded()
{
console.log("posenet is initialized")
}

function draw()
{
    image(video , 0 , 0 , 600 , 500);
}

function preload()
{
song = loadSound("music.mp3");
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

