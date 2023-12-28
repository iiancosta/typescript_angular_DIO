"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
// CLASSES
/*
    Data Modifiers
      '-> pode-se fazer isso em propriedades e em métodos.
    public - passada a propriedade/método como defaut/padrão, podendo-se acessar fora da classe.
    private - permite acesso as propriedades ou métodos apenas dentro da classe.
    protected - permite acesso apenas na classe e em que herdar essa classe.
*/
class character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
class magician extends character {
    constructor(name, stregth, skill, magic) {
        super(name, stregth, skill);
        this.magic = magic;
    }
}
const p1 = new character("Son Goku", 10, 98);
const p2 = new magician("Natsu Dragneel", 6, 70, 300);
p1.attack();
console.log(p1);
console.log(p2);
// p1.skill = 39; // Dá erro pois skill é uma propriedade READONLY
// GENERICS
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["felipe"], ["Son", "Vegeta"]);
console.log(numArray);
console.log(stgArray);
// DECORATORS 
function exibirNome(target) {
    console.log(target);
}
let funcionario = class funcionario {
};
funcionario = __decorate([
    exibirNome
], funcionario);
let srQuincas = class srQuincas {
};
srQuincas = __decorate([
    exibirNome
], srQuincas);
function apiVersion(version) {
    return (target) => {
        Object.assign(target.prototype, { __version: version, __name: "felipe" });
    };
}
let Api = class Api {
};
Api = __decorate([
    apiVersion("1.10")
], Api);
const api = new Api();
console.log(api.__name);
console.log(api.__version);
; //para visualizar no terminal use: npm run start:dev
