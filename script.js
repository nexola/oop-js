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
