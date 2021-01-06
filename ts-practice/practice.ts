let count = 1;
count += 1;
// count = '갑자기 분위기 문자열'; //에러
console.log(count);
const message: string = 'hello world';
const done: boolean = true;

console.log(message);
const numbers: number[] = [1, 2, 3]; //숫자배열
const messages: string[] = ['hello', 'world']; //문자열 배열

// messages.push(1); //숫자 넣지 못함

let mightBeUndefined: string | undefined = undefined; //string일수도 undefined 일수도
let nullableNumber: number | null = null; // number 일수도 null 일수도 있음

let color: 'red' | 'orange' | 'yellow' = 'red';// red, orange, yellow 중 하나

color = 'yellow';
// color = 'green'; //에러

//함수 형식
function sum(x: number, y: number): number {
    return x + y;
}

console.log(sum(1, 2));

interface Shape {
    getArea(): number;
}

//클래스
class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;

    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(2, 4);

const shapes: Shape[] = [new Circle(5), new Rectangle(2, 4)];

shapes.forEach(shape => {
    console.log(`도형들의 넓이: ${shape.getArea()}`);
});

interface Person {
    name: string;
    age?: number;
}

interface Developer {
    name: string;
    age?: number;
    skills: string[];
}

const person: Person = {
    name: '김사람',
    age: 20
};

const expert: Developer = {
    name: '김개발',
    skills: ['javascript', 'react']
};

const people: Person[] = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];