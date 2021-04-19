class Box {
  constructor(x,y,width,height) {
    var options = {
        
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("lightblue");
    rect(pos.x, pos.y, this.width, this.height);
    console.log(this.body.speed);
    if(this.body.speed<3){
     
    }
    else{
      World.remove(world,this.body)
    }
    
  }

};
