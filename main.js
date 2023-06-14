function setup(){
     canvas = createCanvas(400,400)
     canvas.position(560,150)
     video = createCapture(VIDEO)
     video.size(550,500)
     poseNet = ml5.poseNet(video,modelLoaded)
     poseNet.on("pose",gotResults)
}

function modelLoaded(){
     console.log("MODEL LOADED!")
}

function draw(){
     background("grey")
     
}

function gotResults(results){
     if(results.length>0){
          console.log(results)
     }
}

