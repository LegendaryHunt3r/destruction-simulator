class box {constructor(x,y,wi,he){
    this.holdingwidth = wi
    this.holdingheight = he
    this.ballthingie = bodies.rectangle(x,y,wi,he)
    World.add(world, this.ballthingie)
}
display(){
    rectMode(CENTER)
    push();
    translate(this.ballthingie.position.x,this.ballthingie.position.y)
    rotate(this.ballthingie.angle)
    rect(0,0,this.holdingwidth,this.holdingheight)
    pop();
}
}
