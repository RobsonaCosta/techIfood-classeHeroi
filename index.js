
class arcano {
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade   
        this.tipo = tipo     
        this.ataque = ataque
    }
    
    saudacao(){
        console.log(`Seja bem-vindo ${this.nome}, a sua idade é ${this.idade} e isso lhe dá direito ao início!!!`)        
        console.log("----------------------------------------")
    }
    
    heroiClasse(){
        console.log(`A classe escolhida é ${this.tipo}`)
        console.log("----------------------------------------")
    }
    
    heroiArcano(){
        console.log(`O mago ${this.nome} usou seu primeiro ataque!!`)
        console.log("----------------------------------------")
    }

    heroiAtaque(){
        console.log(`${this.nome} lançou ataque ${this.ataque}`)
        console.log("-----------------------------------")
    }

    saudacaoFinal(){
        console.log(`Parabéns ${this.nome}, foi uma bela vitória!!!`)
    }
}

let heroi = new arcano("Arcano", "39 anos", "Mago", "tempestade de raios")

heroi.saudacao()
heroi.heroiClasse()
heroi.heroiArcano()
heroi.heroiAtaque()
heroi.saudacaoFinal()