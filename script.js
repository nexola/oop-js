"use strict";

class Pessoa {
  constructor(primeiroNome, sobrenome, anoNasc) {
    // Instance properties
    this.primeiroNome = primeiroNome;
    this.sobrenome = sobrenome;
    this.anoNasc = anoNasc;
  }

  printNome() {
    console.log(this.primeiroNome + " " + this.sobrenome);
  }
}

const vitor = new Pessoa("Vitor", "Vianna", 1999);

console.log(vitor);
vitor.printNome();

console.log(vitor instanceof Pessoa);
console.log(vitor.country);
