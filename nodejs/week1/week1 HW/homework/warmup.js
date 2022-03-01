console.log("inside warmup file");

class circle{
constructor(radius){
    this.radius =radius;
}
    
    get Diameter(){
        return this.radius *2;
    }
    get Circumference(){
        return this.Diameter *Math.PI;
    }
    get Area(){
        return (this.radius*this.radius)*Math.PI;
    }

};
var circleCalculator =new circle(12);
console.log(circleCalculator.Area,circleCalculator.Circumference, circleCalculator.Diameter)

