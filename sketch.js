'use strict';
let osc;
let waveFormSelect;
let pNoise;
let noise, env, delay;

function setup() {
  createCanvas(windowWidth, windowHeight);

//osc = new p5.Oscillator('square');
//osc.setType('triangle');

textAlign(CENTER);
  text('Cloud', width/2, height/2);
  noise = new p5.Noise('brown');
 noise.amp(.08);
 noise.start();

 delay = new p5.Delay();
 delay.process(noise, .50, .4, 4000);
  env = new p5.Envelope(.01, 0.9, .9, .9);


//textAlign(CENTER);
//createSpan('Select waveForm: ')
 //waveFormSelect = createSelect();
 //waveFormSelect.position(10, 10);
 //waveFormSelect.option('sine');
 //waveFormSelect.option('sawtooth');
 //waveFormSelect.option('square');
 //waveFormSelect.option('triangle');
//waveFormSelect.changed(setWaveForm)


}

function setWaveForm(){
osc.setType(waveFormSelect.value());

}

function draw() {

  //pNoise=noise(frameCount/20) * 100
  //osc.freq(map(mouseX,0,width, 60, 1600)+ pNoise);
  //console.log(sin(frameCount / 10));
  //osc.amp(map(mouseY, 0, height, .2, 0));

//osc.amp(map(sin(frameCount / 15),-1, 1 ,0 , .2));


}

function mouseClicked() {
  // is mouse over canvas?

}

function mousePressed(){
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    env.play(noise);

    background(255);

  }
  osc.start();

}

function mouseReleased(){
  background(0,255);

osc.stop();

}
