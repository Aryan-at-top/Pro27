class Rope4{
    constructor(bob4,roof4){
    var options={
        bodyA:bob4,
        bodyB:roof4,
        length:10,
        stiffness:0.001
    }
    this. constraint=Matter.Constraint.create(options)
    World.add(world,this.constraint)
    }
    display(){
    strokeWeight(10)
    line(this.constraint.bodyA.position.x,this.constraint.bodyA.position.
    y,500,100)
    }
    }