class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
      this.image1=loadImage("sprites/sling1.png")
      this.image2=loadImage("sprites/sling2.png")
      this.image3=loadImage("sprites/sling3.png")
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //to add image of the catpult
        image (this.image1,200,50)
        image (this.image2,170,50)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           //to give stroke color to rubber band
            stroke (48,22,8)
            //when we drag our rubber band behind so its thickness is more and when we drag our rubber band in front so its thickness is less
            if(pointA.x<200){
                strokeWeight(8);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3)
                image (this.image3,pointA.x-30,pointA.y-10,15,30) 
            }
else{strokeWeight(4);
    line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
    line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3)
    image (this.image3,pointA.x+25,pointA.y-10,15,30)

}
            
            
        }
    }
    
}