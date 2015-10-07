var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;  
var canHeight;

var lastTime;  //开始时间
var deltaTime;  //两帧之间的时间

var bgPic = new Image();

var ane;  //海葵
var fruit;  //果实
var mom;  //大鱼

var baby; //小鱼

var mx; //鼠标坐标
var my; 

document.body.onload = game;

function game()
{
	init();  //初始化
	lastTime = Date.now();
	gameloop();
}

function init()
{
	//获得canvas context
	can1 = document.getElementById('canvas1'); //fishes, dust, UI, circle
	ctx1 = can1.getContext('2d');
	can2 = document.getElementById('canvas2'); //background, ane, fruits
	ctx2 = can2.getContext('2d');

	can1.addEventListener('mousemove', onMouseMove, false);

	bgPic.src = "./src/background.jpg";

	canWidth = can1.width;
	canHeight = can1.height;

	ane = new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();

	mom = new momObj();
	mom.init();

	baby = new babyObj();
	baby.init();

	mx = canWidth * 0.5;
	my = canHeight * 0.5;
}

function gameloop()
{
	requestAnimFrame(gameloop); //setInterval, setTimeout, frame per second
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;

	// if(deltaTime > 40) deltaTime = 40;

	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();

	ctx1.clearRect(0, 0, canWidth, canHeight);
	mom.draw();

	momFruitsCollision();

	baby.draw();
}

function onMouseMove(e)
{
	if(e.offsetX || e.layerX)
	{
		mx = e.offsetX == undefined ? e.layerX : e.offsetX;
		my = e.offsetY == undefined ? e.layerY : e.offsetY;
	

	}
}