var b1 = false;


function setup()
{
    createCanvas(windowWidth, windowHeight);
    pg = createGraphics(windowWidth, windowHeight, WEBGL);
    background(255, 255, 255);
    strokeWeight(2);
    frameRate(60);
 
}

 function draw()
 {
     
    if(keyIsDown(LEFT_ARROW))
    {
   
        if(b1 == true)
         {
           clear();
         }
         b1 = false;
    
        

        var ang1 = sin(0.01*frameCount+20);
        var tx =  60 * sin(0.01*frameCount+40);
        var size1 = 200 * cos(0.01*frameCount+60);

        var ang2 = PI * noise(0.01*frameCount+20);
        var tx2 =  200 * sin(0.01*frameCount+20);
        var size2 = 50 * tan(0.01*frameCount+70);
    
        translate(width/2, height/2);
        
        for(var i = 0; i<8; i++)
        {
            noFill();
            stroke(i*30, i*50, 0);
            push();
            rotate(ang1 + TWO_PI *i/8 );
            translate(tx, 0);
            line(mouseX, mouseY, pmouseX, pmouseY);
            if (mouseIsPressed === true) 
            {
                stroke(i*100, 100, 0);
                line(mouseX, mouseY, pmouseX, pmouseY);
            }
            line(mouseX-66, mouseY, mouseX+66, mouseY);            
            pop();          
        } 
  
        
    } // end left arrowm
  
    if(keyIsDown(RIGHT_ARROW))
    {
    
        if(b1 == true)
        {
           clear();
        }
        b1 = false;
        background(102, 153, 153);
        frameRate(60);
    

        var ang1 = sin(0.01*frameCount+20);
        var tx =  60 * sin(0.01*frameCount+40);
        var size1 = 200 * cos(0.01*frameCount+60);

        var ang2 = PI * noise(0.01*frameCount+20);
        var tx2 =  200 * sin(0.01*frameCount+20);
        var size2 = 50 * tan(0.01*frameCount+70);
    
        translate(width/2, height/2);
      
        for(var i = 0; i < 90; i ++) 
        {
            stroke(0, 0 ,0);
            ellipse(i + 30, i + 30, size2, size1 * 2);
            fill(i*10, i *10, 80);

            rotate(PI/i);
        }   // ends for     
   } // ends right arrow
     
    if(keyIsDown(DOWN_ARROW)) 
     {
         if(b1 == true)
           {
             clear();
           }
           b1 = false;
 
    pg.frameRate(30);
    pg.background(200);
   
    var tx =  60 * sin(0.01*frameCount+40); 
     
    for(var i = 1; i < 19; i++)
       {
        for(var k = 0; k < 20; k++)
        {
            rotateX(mouseX * 0.001);
            rotateY(mouseY * 0.001);
       
            push();   
            stroke(255, 255, 255);
            fill(0, 0, 0);
            translate(tx, 0);
            
            if(k%2 === 0)
            {
                fill(255, 255, 255);
                stroke(0, 0, 0);
                pg.box(k * 9);
            }
            else
            {
                pg.sphere(k* 8);  
            }
    
                pop();

   
          }// ends inner for
        } // ends outer for
           
     } // end down
     
     
    
}// end draw
   
/* The key released function is used to give b1 a value of true whenever a user releases
   either of the 3 keys. The b1 value essentially serves as a marker stating that one of
   the keys has been pressed prior to the current key being held down. This then clears 
   the previous sketch out to give the canvas to the sketch desired. */

function keyReleased()
{
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW || keyCode === DOWN_ARROW) 
  {
      b1 = true;
  }
}
