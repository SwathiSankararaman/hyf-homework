class Circle {

    constructor(radius) {
        this.radius = radius;
    }


    getDiameter() {
        this.diameter = 2 * this.radius;
        console.log(this.diameter);
    }

    getCircumference() {

        this.circumference = 2 * Math.PI * this.radius;
        console.log(this.circumference.toFixed(2));
    }

    getArea() {
        this.area = Math.PI * this.radius * this.radius;
        console.log(this.area.toFixed(2));
      
    }
}

const circle1 = new Circle(10);
circle1.getDiameter();

const circle2 = new Circle(50);
circle2.getDiameter();
circle2.getCircumference();
circle2.getArea();
