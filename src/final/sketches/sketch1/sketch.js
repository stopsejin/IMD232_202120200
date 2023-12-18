let video;
let faceApi;
let noseImage;

function preload() {
  noseImage = loadImage('rudolph_nose.png');
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  // Load the face-api model
  faceApi = ml5.faceApi(
    video,
    { withLandmarks: true, withExpressions: false },
    modelReady
  );

  // Detect faces
  faceApi.detect(gotFaces);
}

function draw() {
  image(video, 0, 0, width, height);
}

function gotFaces(error, result) {
  if (error) {
    console.error(error);
    return;
  }

  // Clear the canvas
  clear();

  // Draw the video
  image(video, 0, 0, width, height);

  // Draw Rudolph Nose on each detected face
  if (result) {
    for (let i = 0; i < result.length; i++) {
      let face = result[i].parts;
      let nose = face[30]; // Assuming the 31st landmark is the tip of the nose

      // Draw Rudolph Nose at the tip of the nose
      imageMode(CENTER);
      image(noseImage, nose._x, nose._y, 50, 50);
    }
  }

  // Detect faces again
  faceApi.detect(gotFaces);
}

function modelReady() {
  console.log('Face-API model ready!');
}
