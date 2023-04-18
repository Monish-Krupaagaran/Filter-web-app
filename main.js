leftEyex = 0
leftEyey = 0

function preload() {
horn = loadImage("https://i.postimg.cc/wTSS5q8g/dc-removebg-preview.png")
}

function setup() {

    canvas = createCanvas(300,300)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()

    posenet = ml5.poseNet(video, model_loaded)
    posenet.on("pose", got_poses)
      
}

function model_loaded() {

    console.log("Model is Loaded")
}

function draw() {

    image(video, 0,0,300,300)
    image(horn,leftEyex,leftEyey,35,50)
}

function got_poses(results) {

    if(results.length > 0) {

        console.log (results)

        leftEyex = results[0].pose.nose.x + 10
        leftEyey = results[0].pose.nose.y + 10
    }

}

function take_snap() {

    save("horn.png")
}
