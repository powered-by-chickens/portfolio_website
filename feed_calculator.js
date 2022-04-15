let starterAnswer = document.getElementById('starter-answer');
starterAnswer.innerHTML = `You will need _ pounds of starter feed to feed _ chicks for _ weeks.`;

let growerAnswer = document.getElementById('grower-answer');
growerAnswer.textContent = `You will need _ pounds of grower feed to feed _ chickens for _ weeks.`;

let layerAnswer = document.getElementById('layer-answer');
layerAnswer.textContent = `You will need _ pounds of layer feed to feed _ chickens for _ weeks.`;

let starterBirdCount = document.getElementById('starter-bird-count');
let starterWeeks = document.getElementById('starter-weeks');
const starterSubmitBtn = document.getElementById('starter-submit-btn');

let growerBirdCount = document.getElementById('grower-bird-count');
let growerWeeks = document.getElementById('grower-weeks');
const growerSubmitBtn = document.getElementById('grower-submit-btn');

let layerBirdCount = document.getElementById('layer-bird-count');
let layerWeeks = document.getElementById('layer-weeks');
const layerSubmitBtn = document.getElementById('layer-submit-btn');

starterSubmitBtn.addEventListener('click', starterMath);
growerSubmitBtn.addEventListener('click', growerMath);
layerSubmitBtn.addEventListener('click', layerMath);

function starterMath() {
    let result = '';
    result = starterBirdCount.value * 1.25 * starterWeeks.value;
    starterAnswer.innerHTML = `You will need ${result} pounds of starter feed to feed ${starterBirdCount.value} chicks for ${starterWeeks.value} weeks.`;
}

function growerMath() {
    let result = '';
    result = growerBirdCount.value * 1.6 * growerWeeks.value;
    growerAnswer.innerHTML = `You will need ${result} pounds of grower feed to feed ${growerBirdCount.value} chickens for ${growerWeeks.value} weeks.`;
}

function layerMath() {
    let result = '';
    result = layerBirdCount.value * 2 * layerWeeks.value;
    layerAnswer.innerHTML = `You will need ${result} pounds of layer feed to feed ${layerBirdCount.value} chickens for ${layerWeeks.value} weeks.`;
}