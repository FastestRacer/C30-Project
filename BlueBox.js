class BlueBox extends Box{
    constructor(x,y){
        super(x,y,20,20);
    }

    display(){
        console.log(this.body.speed);
        if(this.body.speed<6){
            fill(87,200,206);
            super.display();
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visibiltity = this.Visibiltity-5;
            tint(255,this.Visibiltity);
            rect(999,999,20,20);
            pop();
        }
    }
}