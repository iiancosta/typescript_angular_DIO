
// Tipos primitivos
let ligado:boolean = true;
let nome:string = "Ian Costa";
let idade:number = 21;
let altura:number = 1.65;

// Tipos especiais null, undefined são usados para estratégicas específicas como configurações etc.
let nulo: null = null;
let indefinido: undefined = undefined; 

// Tipos abrangentes: any, void muito usados nas funções
let retorno:void;
let retornoView:any = false; 

// OBJETO
let produto: object = {
    name: "Costa",
    modelo: "pessoa",
    usado: false,
    falatu: "que eu tô cansado"
}; // Objeto sem tipagem e sem Previsibilidade

type produtoLoja = {
    nome: string;
    modelo: string;
    usado: boolean;
    preco: number;
}

let meuProduto: produtoLoja = { 
    nome: "Computador",
    modelo: "Aspire",
    usado: true,
    preco: 3800,
}; // Objeto tipado com Previsibilidade

// ARRAY - formas de declaração
let dados: string[] = ["Ian", "Felipe", "Oliveira", "Costa"];
let dados2: Array<string> = ["Ian", "Felipe", "Oliveira", "Costa"]

//ARRAY de multitipos
let infos: (string | number)[] = ["ian", 21, 2002, "janeiro"] // é melhor fazer um objeto tipado

//TUPLAS - deve-se apresentar o tipo e ordem do Array
let boletos: [string, number, number]= ["Água", 3456127, 189.6];

// MÉTODOS do Array
dados.find;
dados.pop;
dados.map;
dados.reduce;

// Datas
let aniversario: Date = new Date("2002-01-16 05:00");
console.log(aniversario.toString());

// FUNÇÕES 
function addToHello (name: string):string {
    return `Hello ${name}, a soma solicitada deu: `;
}

function addNumber (x: number,y: number): number {
    return x + y;
}

let soma:number = addNumber(579, 23453);

console.log(addToHello("Costa"), soma);

// Função Multi Tipos
function callToPhone (phone: string | number): string | number {
    return phone;
}

console.log(callToPhone(84992356074));
console.log(callToPhone("(84) 9 9235-6074"));

// Função Assincrona
async function getDataBase(id:number): Promise<string>{
    return "Felipe";
}

// INTERFACES
type robot = {
    readonly id: number | string;
    name: string;
}
interface robot2 {
    readonly id: number | string;
    name: string;
    addToHello(): string;
}

const bot1: robot = {
    id: "1",
    name: "megaman",
}
const bot2: robot2 = {
    id: "1",
    name: "megaman",
    addToHello: function (): string {
        throw new Error("Function not implemented.");
    }
}

//console.log(bot1.id = 1);
console.log(bot2);

class pessoa implements robot2 {
    id: string | number;
    name: string;

    constructor(id: string | number, name: string){
        this.id = id;
        this.name = name;
    }
    addToHello(): string {
        return `Hello, i'm ${this.name}`;
    }
}

const p = new pessoa(1, "Costa");
console.log(p.addToHello());


