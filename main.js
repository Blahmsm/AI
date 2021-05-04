song = "";
song2="";
leftwristX=0;
leftwristY=0;
rightWristX=0;
rightWristY=0;
function preload()
{
	song = loadSound("music.mp3");
    song2= loadSound("music2.mp3");
}
function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is initialized");
}
function draw() {
	image(video, 0, 0, 600, 500);
}
function play()
{
	song.play();
    song.setVolume(1);
    song.rate(1);
}


function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
   leftwristY=results[0].pose.leftWrist.y;
   console.log("leftWristX="+leftwristX+"leftWristY="+leftwristY);
  rightWristX=results[0].pose.rightWrist.x;
  rightWristY=results[0].pose.rightWrist.y;
   console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY);
    }     
}