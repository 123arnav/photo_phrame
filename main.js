
tint_color="";
function preload(){

}
function filter_img(){
    tint_color=document.getElementById("choose_filter").value;
}
function setup(){
canvas=createCanvas(1000,700);
canvas.position(100,330);
video=createCapture(VIDEO)
video.hide()
}
function draw(){
    tint(tint_color);
    image(video,200,100,600,500);
    fill(0,0,100)
circle(0,0,360,)
fill(200,0,0)
rect(0,170,40,500)
fill(0,0,100)
circle(0,730,360,)
fill(200,0,0)
rect(175,660,800,40)
fill(0,0,100)
circle(1000,730,360,)
fill(200,0,0)
rect(960,60,40,500)
fill(0,0,100)
circle(1000,0,360,)
fill(200,0,0)
rect(175,0,650,40)
}
function capture(){
save("selfie.png")
}

