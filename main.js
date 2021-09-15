noseX = 0;
noseY = 0;

leftWrist= 0;
rightWrist = 0;
difference=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550, 550);
    canvas.position(560,140);

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotResult);
}
function draw(){
    background("grey");
    document.getElementById("square_size").innerHTML="The width and height of the square will be = "+difference+"px";
textSize(difference);
fill("#037bfc")
text("Anirudh",noseX,noseY);
    
}
function modelLoaded(){
    console.log("model loaded!");
}
function gotResult(result){
    if(result.length > 0){
        console.log(result);
        noseX = result[0].pose.nose.x
        noseY = result[0].pose.nose.y
        console.log("NoseX: "+noseX+"nosey= "+noseY);

        leftWrist = result[0].pose.leftWrist.x;
        rightWrist = result[0].pose.rightWrist.x;
        difference = floor(leftWrist - rightWrist);
        console.log("LeftWristX: "+leftWrist+" rightWristX: "+rightWrist+" difference = "+difference);

    }
}

