class ball {constructor(x,y,radius){
    this.holdingradius = radius
    this.ballthingie = bodies.circle(x,y,radius)
    World.add(world, this.ballthingie)
}
display(){
    ellipseMode(RADIUS)
    ellipse(this.ballthingie.position.x,this.ballthingie.position.y,this.holdingradius,this.holdingradius)
}
}
