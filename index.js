const person = {
  name: "elice",
};

function sayHello(message) {
  console.log(`${message}, ${this.name}`);
}

const greet = sayHello.bind(person, "Hello");
greet(); // 출력: Hello, elice
