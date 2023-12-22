"use strict";

class Pessoa {
  constructor(primeiroNome, sobrenome, anoNasc) {
    // Instance properties
    this.primeiroNome = primeiroNome;
    this.sobrenome = sobrenome;
    this.anoNasc = anoNasc;
  }
}

const vitor = new Pessoa("Vitor", "Vianna", 1999);

console.log(vitor);
console.log(vitor instanceof Pessoa);

// Prototypes
Pessoa.prototype.printNome = function () {
  console.log(this.primeiroNome + " " + this.sobrenome);
};

vitor.printNome();

// .prototypeOfLinkedObjects

Pessoa.prototype.especie = "Homo Sapiens";

console.log(vitor);
console.log(vitor.hasOwnProperty("primeiroNome"));
console.log(vitor.hasOwnProperty("especie"));

console.log(vitor.__proto__.__proto__);

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
class Car {
  constructor(marca, velocidade) {
    this.marca = marca;
    this.velocidade = velocidade;
  }
}

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
