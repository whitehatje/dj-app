song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;

function setup()
{
canvas = createCanvas(600 , 500);
canvas.center();
video = createCapture(VIDEO);
video.hide();

posenet = ml5.poseNet(video , modelLoaded);
posenet.on('pose' , gotPoses);
}

function gotPoses(results)
{
if (results.length > 0 )
{
console.log(results);
scoreLeftWrist = results[0].pose.keypoint[9].score;
console.log("Score Left Wrist = " + scoreLeftWrist);
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

    fill("#FF0000");
    stroke("#FF0000");
    if(scoreLeftWrist > 0.2)
    {
    circle(leftWristX , leftWristY , 20);

    InNumberLeftWristY = Number(leftWristY);
    Remove_decimals = floor(InNumberLeftWristY);
    volume = Remove_decimals/500;
    document.getElementById("volume").innerHTML = "volume = " + volume;
    song.setVolume(volume);
    }
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

