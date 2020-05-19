class Bob5{
    constructor(x, y,radius) {
      var opptions={
        isStatic:false
      }
        this.body=Bodies.circle(x, y,radius);
        this.radius=radius;
        World.add(world, this.body);
      }
      display(){
        ellipse(this.body.position.x,this.body.position.y, this.radius);
        fill("blue")
      }
}