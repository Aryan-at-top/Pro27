class Rope2{
    constructor(bob2,roof2){
    var options={
        bodyA:bob2,
        bodyB:roof2,
        length:10,
        stiffness:0.001
    }
    this. constraint=Matter.Constraint.create(options)
    World.add(world,this.constraint)
    }
    display(){
    strokeWeight(10)
    line(this.constraint.bodyA.position.x,this.constraint.bodyA.position.
        y,700,100)
    }
    }