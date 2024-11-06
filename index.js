class heroi{
    constructor(tipo, ataque, nome, idade){
        this.tipo = tipo
        this.ataque = ataque
        this.nome = nome
        this.idade = idade
        
    }
    atacar(){
     console.log(`O ${this.tipo} atacou usando ${this.ataque}, Herói de nome ${this.nome} e ${this.idade} anos`);
    }

}

let heroiMago = new heroi ("Mago", "magia", "Willian", 28 );
let heroiGuerreiro = new heroi ("Guerreiro", "espada", "Thiago", 22);
let heroiMonge = new heroi ("Monge", " artes marciais", "Anthoni", 55);
let heroiNinja = new heroi ("Ninja", "shuriken", "beny", 16);


heroiMago.atacar();
heroiGuerreiro.atacar()
heroiMonge.atacar()
heroiNinja.atacar()
