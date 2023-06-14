function setup(){
     canvas = createCanvas(400,400)
     canvas.position(560,150)
     video = createCapture(VIDEO)
     video.size(550,500)
     poseNet = ml5.poseNet(video,modelLoaded)
     poseNet.on("pose",gotResults)
}
noseX = 0
noseY = 0
leftWrist = 0
difference = 0
rightWrist = 0

function gotResults(results){
     if(results.length>0){
          console.log(results)
          noseX = results[0].pose.nose.x
          noseY = results[0].pose.nose.y
          console.log("NOSE X :"+noseX+
          "NOSE Y : "+noseY)

          leftWrist = results[0].pose.leftWrist.x
          rightWrist = results[0].pose.rightWrist.x
          difference = floor(leftWrist-rightWrist)
     }
}

function modelLoaded(){
     console.log("MODEL READY!")
}

function draw(){
     background("grey")
     fill("yellow")
     square(noseX,noseY,difference)
}

