class Rope1{
    constructor(bob1,roof1){
    var options={
        bodyA:bob1,
        bodyB:roof1,
        length:10,
        stiffness:0.001
    }
    this. constraint=Matter.Constraint.create(options)
    World.add(world,this.constraint)
    }
    display(){
    strokeWeight(10)
    line(this.constraint.bodyA.position.x,this.constraint.bodyA.position.
    y,600,100)
    }
    }