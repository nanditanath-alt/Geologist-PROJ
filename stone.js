class Stone{
    constructor(x,y)
    {
        var options={
            'restitution': 0.8,
            'friction': 0.9,
            'density': 12
        }

        this.x=x;
        this.y=y;
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 60;
        this.height = 100;
         World.add(world, this.body);
    }
    display(){
        var post = this.body.position;
        var angle = this.body.angle;

        push();
        translate(post.x, post.y);
        rotate(angle);
        fill("brown");
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);
        pop();
    }
}