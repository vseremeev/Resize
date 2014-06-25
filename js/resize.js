var PICTURE_WIDTH = 1000;
var PICTURE_HEIGHT = 500;
var PIC_WIDTH_TO_HEIGHT = PICTURE_WIDTH/PICTURE_HEIGHT;
var MIN_WIDTH = 500;
var MAX_WIDTH = 1000;

var DOT_WIDTH = 18;
var DOT_HEIGHT = 18;

var DOT1_TOP = 240;
var DOT1_LEFT = 420;

var DOT2_TOP = 290;
var DOT2_LEFT = 375;

var DOT3_TOP = 370;
var DOT3_LEFT = 390;

var HEADER_FONT_SIZE = 25;

var CONTAINER1_TOP = 80;
var CONTAINER1_LEFT = 390;
var CONTAINER1_WIDTH = 290;
var CONTAINER1_HEIGHT = 40;

var CONTAINER2_TOP = 140;
var CONTAINER2_LEFT = 888;
var CONTAINER2_WIDTH = 62;
var CONTAINER2_HEIGHT = 40;

var CONTAINER3_TOP = 215;
var CONTAINER3_LEFT = 760;
var CONTAINER3_WIDTH = 40;
var CONTAINER3_HEIGHT = 240;

var LINE_MARGIN_TOP = 20;
var LINE_WIDTH = 100;
var LINE_LEFT = 250;

var LINE3_TOP = 250;
var LINE4_TOP = 300;
var LINE5_TOP = 380;

var TEXT_FONT_SIZE = 12;

var TEXT1_TOP = 80;
var TEXT1_LEFT = 0;

var TEXT3_TOP = 242;
var TEXT3_LEFT = 25;

var TEXT4_TOP = 292;
var TEXT4_LEFT = 0;

var TEXT5_TOP = 372;
var TEXT5_LEFT = 26;

var TEXT6_TOP = 420;
var TEXT6_LEFT = 84;

var TEXT7_TOP = 80;
var TEXT7_LEFT = 875;

var TEXT8_TOP = 290;
var TEXT8_LEFT = 735;


function resize(){
	if($( window ).width()<MAX_WIDTH && $( window ).width()>MIN_WIDTH){
		var p;
		p = $( window ).width()/MAX_WIDTH;
		picture();
		dots(p);
		header(p);
		containers(p);
		lines(p);
		text(p);
	};
};
		

function picture(){
	var backwidth;
	var backheight;
	
	if($( window ).width()<MAX_WIDTH && $( window ).width()>MIN_WIDTH){
		backwidth = $( window ).width();
		backheight = backwidth/PIC_WIDTH_TO_HEIGHT;
		$("#picture").width(backwidth);
		$("#picture").height(backheight);
		$("#picture").css("background-size", backwidth + "px " +  backheight + "px");
	};
};


function dot(d, p, dot_top, dot_left, dot_width, dot_height){
	d.css("top", dot_top*p + "px");
	d.css("left", dot_left*p + "px");
	d.width(dot_width*p);
	d.height(dot_height*p);
	d.css("background-size", dot_width*p + "px " +  dot_height*p + "px");
};

function dots(p){
	dot($("#dot1"), p, DOT1_TOP, DOT1_LEFT, DOT_WIDTH, DOT_HEIGHT);
	dot($("#dot2"), p, DOT2_TOP, DOT2_LEFT, DOT_WIDTH, DOT_HEIGHT);
	dot($("#dot3"), p, DOT3_TOP, DOT3_LEFT, DOT_WIDTH, DOT_HEIGHT);
};



function header(p) {
	$("#header").css("font-size", HEADER_FONT_SIZE*p + "px");
};

function container(c, p, container_top, container_left, container_width, container_height){
	c.css("top", container_top*p + "px");
	c.css("left", container_left*p + "px");
	c.width(container_width*p);
	c.height(container_height*p);
};

function containers(p){
	container($("#container1"), p, CONTAINER1_TOP, CONTAINER1_LEFT, CONTAINER1_WIDTH, CONTAINER1_HEIGHT);
	container($("#container2"), p, CONTAINER2_TOP, CONTAINER2_LEFT, CONTAINER2_WIDTH, CONTAINER2_HEIGHT);
	container($("#container3"), p, CONTAINER3_TOP, CONTAINER3_LEFT, CONTAINER3_WIDTH, CONTAINER3_HEIGHT);
};

function line_only_margin(l, p, margin_top){
	l.css("margin-top", margin_top*p + "px");
	
};

function line(l, p, line_top, line_left, line_width){
	l.css("top", line_top*p + "px");
	l.css("left", line_left*p + "px");
	l.width(line_width*p);
};

function lines(p){
	line_only_margin($("#line1"), p, LINE_MARGIN_TOP);
	line_only_margin($("#line2"), p, LINE_MARGIN_TOP);
	line($("#line3"), p, LINE3_TOP, LINE_LEFT, LINE_WIDTH);
	line($("#line4"), p, LINE4_TOP, LINE_LEFT, LINE_WIDTH);
	line($("#line5"), p, LINE5_TOP, LINE_LEFT, LINE_WIDTH);
	line_only_margin($("#line6"), p, LINE_MARGIN_TOP);
};
 
function txt_without_absolute_position(t, p, txt_font_size){
	t.css("font-size", txt_font_size*p + "px");
};
 
function txt(t, p, txt_top, txt_left, txt_font_size){
	t.css("top", txt_top*p + "px");
	t.css("left", txt_left*p + "px");
	t.css("font-size", txt_font_size*p + "px");
};
 
function text(p){
	txt($("#text1"), p, TEXT1_TOP, TEXT1_LEFT, TEXT_FONT_SIZE);
	txt_without_absolute_position($("#text2"), p, TEXT_FONT_SIZE);
	txt($("#text3"), p, TEXT3_TOP, TEXT3_LEFT, TEXT_FONT_SIZE);
	txt($("#text4"), p, TEXT4_TOP, TEXT4_LEFT, TEXT_FONT_SIZE);
	txt($("#text5"), p, TEXT5_TOP, TEXT5_LEFT, TEXT_FONT_SIZE);
	txt($("#text6"), p, TEXT6_TOP, TEXT6_LEFT, TEXT_FONT_SIZE);
	txt($("#text7"), p, TEXT7_TOP, TEXT7_LEFT, TEXT_FONT_SIZE);
	txt($("#text8"), p, TEXT8_TOP, TEXT8_LEFT, TEXT_FONT_SIZE);
};