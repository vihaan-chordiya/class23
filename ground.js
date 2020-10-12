class Ground{

constructor(x,y,width,height){
     var options={
         isStatic: true
     }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width
    this.height=height
    World.add(ourWorld,this.body)
}
display(){

    //fill("yellow")
    var position=this.body.position
    rectMode(CENTER)
    fill("green")
    rect(position.x,position.y,this.width,this.height)
    }
}

