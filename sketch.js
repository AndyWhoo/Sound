'use strict';
let osc;
let waveFormSelect;
let pNoise;


function setup() {
  createCanvas(windowWidth, windowHeight);

osc = new p5.Oscillator('square');
//osc.setType('triangle');



//textAlign(CENTER);
createSpan('Select waveForm: ')
 waveFormSelect = createSelect();
 waveFormSelect.position(10, 10);
 waveFormSelect.option('sine');
 waveFormSelect.option('sawtooth');
 waveFormSelect.option('square');
 waveFormSelect.option('triangle');
waveFormSelect.changed(setWaveForm)
}

function setWaveForm(){
osc.setType(waveFormSelect.value());

}

function draw() {

  pNoise=noise(frameCount/20) * 100
  osc.freq(map(mouseX,0,width, 60, 1600)+ pNoise);
  osc.amp(map(mouseY, 0, height, .2, 0));

}

function mousePressed(){
  osc.start();

}

function mouseReleased(){
osc.stop();

}
