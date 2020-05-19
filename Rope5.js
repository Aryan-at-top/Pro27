class Rope5{
    constructor(bob5,roof5){
    var options={
        bodyA:bob5,
        bodyB:roof5,
        length:10,
        stiffness:0.001
    }
    this. constraint=Matter.Constraint.create(options)
    World.add(world,this.constraint)
    }
    display(){
    strokeWeight(10)
    line(this.constraint.bodyA.position.x,this.constraint.bodyA.position.
    y,400,100)
    }
    }