var player_x=60;
var player_y=70;

var block_width=30;
var block_height=30;

var player_object="";
var block_object="";

var canvas=new fabric.Canvas("myCanvas");

function new_block(get_image){
fabric.Image.fromURL(get_image,function(IMG){

    block_object=IMG;

    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);

    block_object.set({
        top:player_y,left:player_x
        });
        canvas.add(block_object);
});
}

function player_update(){
    fabric.Image.fromURL("player.png",function(IMG){
    
        player_object=IMG;
    
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
    
        player_object.set({
            top:player_y,left:player_x
            });
            canvas.add(player_object);
    });
    }

    window.addEventListener("keydown", mykeypress)

    function mykeypress(e){
        keypress=e.keyCode;
        console.log(keypress);
           if(keypress=='80'&& e.shiftKey==true){
               console.log("You pressed shift + P")
               if(block_width<300){
                block_width+=10; //this is similair to block width=blockwidth+10 instead you can write like blockwidth+=10
                block_height+=10; 
                document.getElementById("current_width").innerHTML=block_width;
                document.getElementById("current_height").innerHTML=block_height;
               }
          
           }

           if(keypress=='77'&& e.shiftKey==true){
            console.log("You pressed shift + M")
            if(block_height>20){
                block_width-=10; 
                block_height-=10; 
                document.getElementById("current_width").innerHTML=block_width;
                document.getElementById("current_height").innerHTML=block_height;
            }
        
        }
        
        if(keypress == '67' || keypress=='99'){
            new_block("cloud.jpg");
            console.log("you pressed C/c");
        }
        if(keypress == '68' || keypress=='100'){
            new_block("dark_green.png");
            console.log("you pressed D/d");
        }
        if(keypress == '71'|| keypress=='103'){
            new_block("ground.png");
            console.log("you pressed G/g");
        }
        if(keypress == '76'|| keypress=='108'){
            new_block("light_green.png");
            console.log("you pressed L/l");
        }
        if(keypress == '82'|| keypress=='114'){
            new_block("roof.jpg");
            console.log("you pressed R/r");
        }
        if(keypress == '84'|| keypress=='116'){
            new_block("trunk.jpg");
            console.log("you pressed T/t");
        }
        if(keypress == '85'|| keypress=='117'){
            new_block("unique.png");
            console.log("you pressed U/u");
        }
        if(keypress == '87'|| keypress=='119'){
            new_block("wall.jpg");
            console.log("you pressed W/w");
        }
        if(keypress == '89'|| keypress=='121'){
            new_block("yellow_wall.png");
            console.log("you pressed Y/y");
        }

        if (keypress == '37'){
            left();
            console.log("You pressed LEFT");
        }
        if (keypress == '38'){
            up();
            console.log("You pressed UP");
        }
        if (keypress == '39'){
            right();
            console.log("You pressed RIGHT");
        }
        if (keypress == '40'){
            down();
            console.log("You pressed DOWN");
        }
    }

    function left() {
        if (player_x>=0){
        player_x=player_x-block_width;
        console.log("The X =" + player_x+" y =  " + player_y);
        canvas.remove(player_object);
        player_update();
        }
    }
    function right() {
        if (player_x<=850){
        player_x=player_x+block_width;
        console.log("The X =" + player_x+" y =  " + player_y);
        canvas.remove(player_object);
        player_update();
        }
        }
    function up() {
            if (player_y>=0){
            player_y=player_y-block_height;
            console.log("The X =" + player_x+" y =  " + player_y);
            canvas.remove(player_object);
            player_update();
            }
        }
        function down() {
            if (player_y<=450){
            player_y=player_y+block_height;
            console.log("The X =" + player_x+" y =  " + player_y);
            canvas.remove(player_object);
            player_update();
            }
        }