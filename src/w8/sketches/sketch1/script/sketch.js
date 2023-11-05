let dom;
let htmlDom;
let canvasW = 600;
let canvasH = 400;

function setup() {
  dom = select('#hereGoesMyP5Sketch');
  htmlDom = document.querySelector('#hereGoesMyP5Sketch');
  console.log(dom);
  let canvas = createCanvas(canvasW, canvasH);
  canvas.parent(dom);
  // ㄴ 원하는 위치에 넣기
  background('black');
}

function draw() {}

function windowResized() {
  console.log('리사이즈됩니다.');
  // dom = select('#hereGoesMyP5Sketch');
  // console.log(dom);
  if (htmlDom.cilentWidth < canvasW) {
    resizeCanvas(
      htmlDom.cilentWidth,
      (htmlDom.cilentWidth * canvasH) / canvasW
    );
    background('black');
  } else if (width !== canvasW) {
    resizeCanvas(canvasW, canvasH);
    background('black');
  }
}
