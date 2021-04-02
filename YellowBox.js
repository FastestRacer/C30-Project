class YellowBox extends Box{
    constructor(x,y){
        super(x,y,20,20);
    }

    display(){
        if(this.body.speed<6){
            fill(247,217,3);
            super.display();
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visibiltity = this.Visibiltity-5;
            tint(255,this.Visibiltity);
            rect(this.x,this.y,20,20);
            pop();
        }
    }
}