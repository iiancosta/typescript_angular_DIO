"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Tipos primitivos
let ligado = true;
let nome = "Ian Costa";
let idade = 21;
let altura = 1.65;
// Tipos especiais null, undefined são usados para estratégicas específicas como configurações etc.
let nulo = null;
let indefinido = undefined;
// Tipos abrangentes: any, void muito usados nas funções
let retorno;
let retornoView = false;
// OBJETO
let produto = {
    name: "Costa",
    modelo: "pessoa",
    usado: false,
    falatu: "que eu tô cansado"
}; // Objeto sem tipagem e sem Previsibilidade
let meuProduto = {
    nome: "Computador",
    modelo: "Aspire",
    usado: true,
    preco: 3800,
}; // Objeto tipado com Previsibilidade
// ARRAY - formas de declaração
let dados = ["Ian", "Felipe", "Oliveira", "Costa"];
let dados2 = ["Ian", "Felipe", "Oliveira", "Costa"];
//ARRAY de multitipos
let infos = ["ian", 21, 2002, "janeiro"]; // é melhor fazer um objeto tipado
//TUPLAS - deve-se apresentar o tipo e ordem do Array
let boletos = ["Água", 3456127, 189.6];
// MÉTODOS do Array
dados.find;
dados.pop;
dados.map;
dados.reduce;
// Datas
let aniversario = new Date("2002-01-16 05:00");
console.log(aniversario.toString());
// FUNÇÕES 
function addToHello(name) {
    return `Hello ${name}, a soma solicitada deu: `;
}
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(579, 23453);
console.log(addToHello("Costa"), soma);
// Função Multi Tipos
function callToPhone(phone) {
    return phone;
}
console.log(callToPhone(84992356074));
console.log(callToPhone("(84) 9 9235-6074"));
// Função Assincrona
function getDataBase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Felipe";
    });
}
const bot1 = {
    id: "1",
    name: "megaman",
};
const bot2 = {
    id: "1",
    name: "megaman",
    addToHello: function () {
        throw new Error("Function not implemented.");
    }
};
//console.log(bot1.id = 1);
console.log(bot2);
class pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addToHello() {
        return `Hello, i'm ${this.name}`;
    }
}
const p = new pessoa(1, "Costa");
console.log(p.addToHello());
