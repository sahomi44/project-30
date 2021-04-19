class Polygon {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var angle =this.body.angle;
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
     
      strokeWeight(2);
      fill("yellow");
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
    }
  };
