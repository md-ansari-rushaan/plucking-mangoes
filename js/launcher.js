class launcher{
    constructor(body, anchor){
        var options = {
            bodyA: body,
            pointB: anchor,
            stiffness: 0.004,
            length: 1
        }
        this.pointB = anchor;
        this.bodyA = body;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
    attach(body){
        this.launcher.bodyA = body;
        //this.sling.pointB.position.x=200;
        //this.sling.pointB.position.y=50;
    }
    
    fly(){
        this.launcher.bodyA = null;
    }

    display(){
        
        if(this.launcher.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            
            
            strokeWeight(2);
            
                line(pointA.x,pointA.y,pointB.x,pointB.y);
            
           
            
            
        }
    }
    
}