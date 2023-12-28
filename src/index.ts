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


// CLASSES
/*
    Data Modifiers
      '-> pode-se fazer isso em propriedades e em métodos. 
    public - passada a propriedade/método como defaut/padrão, podendo-se acessar fora da classe.
    private - permite acesso as propriedades ou métodos apenas dentro da classe.
    protected - permite acesso apenas na classe e em que herdar essa classe.
*/
class character {
    private name?: string; // ? serve para dizer que a propriedade não é obrigatória 
    protected stregth: number;
    readonly skill: number; // readonly proibe modificação fora da classe

    constructor(name: string, stregth: number, skill:number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void { //não retorna nada, apenas executa o que foi solicitado.
        console.log(`Attack with ${this.stregth} points`);
    }
}

class magician extends character {
    magic: number;

    constructor(name:string, stregth: number, skill:number, magic:number){
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
function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,5], [3]);
const stgArray = concatArray<string[]>(["felipe"], ["Son", "Vegeta"]);

console.log(numArray);
console.log(stgArray);


// DECORATORS 
function exibirNome(target:any) {
    console.log(target);
}

@exibirNome
class funcionario {}

@exibirNome
class srQuincas {}

function apiVersion (version:string) {
    return (target:any) => {
        Object.assign(target.prototype, {__version: version, __name: "felipe"});
    };
}

@apiVersion("1.10")
class Api {}

const api = new Api();
console.log(api.__name);
console.log(api.__version);;//para visualizar no terminal use: npm run start:dev

// Decorator em Propriedades
function minLength(length:number){
    return (target:any, key:string) => {
        let _value = target[key];    

        const getter = () => "[play]" + _value;
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor que ${length}`);
            } else {
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });

    };
};

class forma {
    @minLength(10)
    name: string;

    constructor(name:string){
        this.name = name;
    }
}

const formas = new forma("poadasdadasd");
console.log(formas.name);
