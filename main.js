canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["nasa-image-1.jpg", "nasa-image-2.jpg", "nasa-image-3.jpg", "nasa-image-4.jpg"]
var random_number = Math.floor(Math.random() * 4);

console.log(random_number);

rover_width = 100;
rover_height = 90;

background_image = nasa_mars_images_array[random_number];
console.log("Background image = " + background_image);
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add()
{
    background_imgtag = new Image();
    background_imgtag.onload = uploadBackground;
    background_imgtag.src = background_image;

    rover_imgtag = new Image();
    rover_imgtag.onload = uploadRover;
    rover_imgtag.src = rover_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}

function uploadRover()
{
    ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    key_pressed = e.keyCode;
    console.log(key_pressed);

    if(key_pressed == '38')
    {
        up();
        console.log("up");
    }

    if(key_pressed == '40')
    {
        down();
        console.log("down");
    }

    if(key_pressed == '37')
    {
        left();
        console.log("left");
    }

    if(key_pressed == '39')
    {
        right();
        console.log("right");
    }
}

function up()
{
    if(rover_y >= 0)
    {
        rover_y = rover_y - 10;
        console.log("When up is pressed, x = " + rover_x + ", y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function down()
{
    if(rover_y <= 500)
    {
        rover_y = rover_y + 10;
        console.log("When down is pressed, x = " + rover_x + ", y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left()
{
    if(rover_x >= 0)
    {
        rover_x = rover_x - 10;
        console.log("When left is pressed, x = " + rover_x + ", y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right()
{
    if(rover_x <= 700)
    {
        rover_x = rover_x + 10;
        console.log("When right is pressed, x = " + rover_x + ", y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}