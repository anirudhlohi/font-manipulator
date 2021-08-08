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
}
function modelLoaded(){
    console.log("model loaded!");
}
function gotResult(result){
    if(result.length > 0){
        console.log(result);
    }
}

