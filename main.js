function preload() {
    img = loadImage('https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide()
    tint_color = ""
}

function draw() {
    image(video, 80, 100, 480, 280);
    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(350, 50, 70);
    circle(400, 50, 70);
    circle(450, 50, 70);
    circle(500, 50, 70);
    circle(550, 50, 70);
    circle(600, 50, 70);
    circle(600, 100, 70);
    circle(600, 150, 70);
    circle(600, 200, 70);
    circle(600, 250, 70);
    circle(600, 300, 70);
    circle(600, 350, 70);
    circle(600, 400, 70);
    circle(600, 450, 70);
    circle(550, 450, 70);
    circle(500, 450, 70);
    circle(450, 450, 70);
    circle(400, 450, 70);
    circle(350, 450, 70);
    circle(300, 450, 70);
    circle(250, 450, 70);
    circle(200, 450, 70);
    circle(150, 450, 70);
    circle(100, 450, 70);
    circle(50, 400, 70);
    circle(50, 350, 70);
    circle(50, 300, 70);
    circle(50, 250, 70);
    circle(50, 200, 70);
    circle(50, 150, 70);
    circle(50, 100, 70);
    circle(50, 50, 70);
    circle(100, 50, 70);
    circle(150, 50, 70);
    circle(200, 50, 70);
    circle(250, 50, 70);
    circle(300, 50, 70);

    tint(tint_color)
}

function take_snapshot() {
    save('student_name.png');
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}