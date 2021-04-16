canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 10;

background_image = "racing.gif";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;


    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;

}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, 0, 0, car1_width, car1_height);
}

function car2Background() {
    ctx.drawImage(car2_imgTag, 0, 0, car2.width, car2.height);
}

function keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38") {
        car1_up();
        console.log("up arrow key");
    }
    if (keyPressed == "40") {
        car1_down();
        console.log("down arrow key");
    }
    if (keyPressed == "37") {
        car1_left();
        console.log("left arrow key");
    }
    if (keyPressed == "39") {
        car1_right();
        console.log("right arrow key");
    }
    if (keyPressed == "87") {
        car2_up();
        console.log("key w");
    }
    if (keyPressed == "65") {
        car2_left();
        console.log("key a");
    }
    if (keyPressed == "83") {
        car2_down();
        console.log("key s")
    }
    if (keyPressed == "68") {
        car2_right();
        console.log("key d");
    }
}

function car1_up() {
    if (car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log("When Up Arrow Is Pressed, x=" + car1_x + "| y =" + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down() {
    if (car1_y <= 500) {
        car1_y = car1_y + 10
        console.log("When Down Arrow Is Pressed, x=" + car1_x + "| y =" + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left() {
    if (car1_y >= 0) {
        car1_x = car1_x - 10;
        console.log("When Left Arrow Is Pressed, x=" + car1_x + "| y =" + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right() {
    if (car1_y <= 500) {
        car1_y = car1_y + 10;
        console.log("When Right Arrow Is Pressed, x=" + car1_x + "| y =" + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

