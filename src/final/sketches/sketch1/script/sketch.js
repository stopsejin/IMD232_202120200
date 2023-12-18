let video;
let faceClassifier;
let christmasHat;

function preload() {
  faceClassifier = ml5.faceClassifier('FaceDetector');
  christmasHat = loadImage('christmas_hat.png'); // 크리스마스 모자 이미지 파일
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  // 영상 감추기
  video.hide();

  // 얼굴 분류기 초기화
  faceClassifier.detect(video, gotFaces);
}

function gotFaces(error, results) {
  if (error) {
    console.error(error);
    return;
  }

  // 얼굴이 감지되었을 때 크리스마스 모자를 그립니다.
  if (results.length > 0) {
    image(video, 0, 0, width, height);
    drawChristmasHat(results[0].parts.nose.x, results[0].parts.nose.y);
  }

  // 다음 프레임에서 얼굴을 계속 감지
  faceClassifier.detect(video, gotFaces);
}

function drawChristmasHat(x, y) {
  // 크리스마스 모자를 얼굴 위치에 그립니다.
  let hatWidth = 120;
  let hatHeight = 90;
  image(christmasHat, x - hatWidth / 2, y - hatHeight, hatWidth, hatHeight);
}
