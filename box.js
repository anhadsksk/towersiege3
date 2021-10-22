class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          density: 3
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      World.add(world, this.body);
      this.image = loadImage("box.png");
    }
    score(){
      if(this.visibility<0 && this.visibility>-105);{
        score++;
        
      }
    }
    display(){
      var pos = this.body.position;
      if(this.body.speed < 3){
        push();
        rectMode(CENTER);
        fill("brown");
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
      }  
      else{
       World.remove(world, this.body);
       push();
       this.visibility -= 5;
       console.log(this.visibility);
       tint(255,this.visibility);
       image(this.image, pos.x, pos.y, this.width, this.height);
       pop();
      }
      }
      
  };