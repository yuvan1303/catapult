class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
       
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,250,20);
        image(this.sling2,220,15);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(10);
            stroke(48,22,8);
            line(pointA.x - 30, pointA.y, pointB.x  - 20, pointB.y);
            line(pointA.x + 20, pointA.y, pointB.x  + 30, pointB.y);
            image(this.sling3,pointA.x - 20, pointA.y - 5,40 ,20);
        }
    }
    
}