"use strict";

Array.prototype.unique = function () {
  return [...new Set(this)];
};

const arr = [3, 6, 6, 4, 5, 9, 4, 5];

console.log(arr.unique());

const h1 = document.querySelector("h1");

console.log(h1.__proto__);

console.dir((x) => x + 1);

// CODE CHALLENGE
const kmFormat = function (velocidade) {
  return new Intl.NumberFormat("pt-BR", {
    style: "unit",
    unit: "kilometer-per-hour",
    unitDisplay: "short",
    maximumFractionDigits: 0,
  }).format(velocidade);
};
const Car = function (marca, velocidade) {
  this.marca = marca;
  this.velocidade = velocidade;
};

Car.prototype.acelerar = function () {
  this.velocidade += 10;
  console.log(kmFormat(this.velocidade));
};

Car.prototype.frear = function () {
  this.velocidade -= 5;
  console.log(kmFormat(this.velocidade));
};

const x1 = new Car("BMW", 120);

console.log(x1.velocidade);
x1.acelerar();
x1.acelerar();

const c180 = new Car("Mercedes", 95);
c180.frear();
c180.acelerar();

// Classes ES6
class PessoaCl {
  constructor(primeiroNome, anoNasc) {
    this.primeiroNome = primeiroNome;
    this.anoNasc = anoNasc;
  }

  calcIdade() {
    console.log(2037 - this.anoNasc);
  }

  get idade() {
    return 2037 - this.anoNasc;
  }

  static hey() {
    console.log("Olá 😘");
  }
}

const jessica = new PessoaCl("Jessica", 1996);
console.log(jessica);
jessica.calcIdade();

PessoaCl.prototype.saudacoes = function () {
  console.log(`Olá ${this.primeiroNome}`);
};

jessica.saudacoes();
console.log(jessica.idade);

const conta = {
  proprietario: "jonas",
  transacoes: [200, 530, 120, 300],

  get recente() {
    return this.transacoes.slice(-1).pop();
  },

  set recente(trans) {
    this.transacoes.push(trans);
  },
};

console.log(conta.recente);

conta.recente = 50;
console.log(conta.transacoes);

// Métodos estáticos

// Object create
const PessoaProto = {
  calcIdade() {
    console.log(2037 - this.anoNasc);
  },

  init(primeiroNome, anoNasc) {
    this.primeiroNome = primeiroNome;
    this.anoNasc = anoNasc;
  },
};

const steven = Object.create(PessoaProto);
steven.nome = "Steven";
steven.anoNasc = 2002;

steven.calcIdade();

const sarah = Object.create(PessoaProto);
sarah.init("Sarah", 2010);
sarah.calcIdade();

// CODE CHALLENGE 02
class Car2 {
  constructor(marca, velocidade) {
    this.marca = marca;
    this.velocidade = velocidade;
  }

  acelerar() {
    this.velocidade += 10;
    console.log(kmFormat(this.velocidade));
  }

  frear() {
    this.velocidade -= 5;
    console.log(kmFormat(this.velocidade));
  }

  get speedUS() {
    return this.velocidade / 1.6;
  }

  set speedUS(velocidade) {
    this.velocidade = velocidade * 1.6;
  }
}

const fiesta = new Car2("Ford", 120);

console.log(fiesta.speedUS);
fiesta.speedUS = 50;
console.log(fiesta.speedUS);

// Herança entre classes
const Pessoa = function (primeiroNome, anoNasc) {
  this.primeiroNome = primeiroNome;
  this.anoNasc = anoNasc;
};

Pessoa.prototype.calcIdade = function () {
  return 2037 - this.anoNasc;
};

const Estudante = function (primeiroNome, anoNasc, curso) {
  Pessoa.call(this, primeiroNome, anoNasc);
  this.curso = curso;
};

Estudante.prototype = Object.create(Pessoa.prototype);

Estudante.prototype.introduce = function () {
  console.log(`Meu nome é ${this.primeiroNome} e estudo ${this.curso}`);
};

const mike = new Estudante("Mike", 2020, "Ciencia da computação");
mike.introduce();
console.log(mike.calcIdade());

Estudante.prototype.constructor = Estudante;

console.log(mike.__proto__.__proto__);

const EV = function (marca, velocidade, carga) {
  Car.call(this, marca, velocidade);
  this.carga = carga;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.carga = chargeTo;
};

EV.prototype.acelerar = function () {
  this.velocidade += 20;
  this.carga -= 1;
  console.log(
    `${this.marca} is going at ${this.velocidade} km/h with a charge of ${this.carga}%`
  );
};

EV.prototype.constructor = EV;

const tesla = new EV("Tesla", 120, 23);

tesla.frear();
tesla.chargeBattery(35);
tesla.acelerar();
