class Block{
    constructor(x, y, width, height) {
        var options = {
                     restitution: 0.4,
                     friction: 0.3,
                    
        }
        this.visibility = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("imgs/block.png");
        World.add(world, this.body);
      }
      display(){
      
        if (this.body.speed>4){
          World.remove(world,this.body);
          push();
          this.visibility-=5;
          tint(255,this.visibility);
          image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
          pop();
        }
        else{
          imageMode(CENTER)
          image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        }
       
        
        
      }
}
