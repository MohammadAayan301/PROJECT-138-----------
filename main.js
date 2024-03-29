function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	}

function setup() {
	canvas = createCanvas(1240,336);
    canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
    video.size(800,400);
	video.parent('game_console');
	poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('Model Loaded!');
  }
  
  function gotPoses(results)
  {
	if(results.length > 0)
	{
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	}
  }
  

function scrollup(){
    window.scrollTo(0 , 0);
}

function draw() {
	game();

}

function pause_game(){
	noLoop();
}

function resume_game(){
	loop();
}






