class Rope3{
    constructor(bob3,roof3){
    var options={
        bodyA:bob3,
        bodyB:roof3,
        length:10,
        stiffness:0.001
    }
    this. constraint=Matter.Constraint.create(options)
    World.add(world,this.constraint)
    }
    display(){
    strokeWeight(10)
    line(this.constraint.bodyA.position.x,this.constraint.bodyA.position.
        y,800,100)
    }
    }