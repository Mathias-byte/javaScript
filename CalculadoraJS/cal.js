class Calculadora{

    resultado;
    n1;
    n2;


    Somar(){

        this.n1 = Number(prompt("Diga o Primeino Numero"))
        this.n2 = Number(prompt("Diga o Segundo Segundo Numero"))

        this.resultado = this.n1 + this.n2
        alert(this.resultado)
    }


    Subtracao(){
        this.n1 = Number(prompt("Diga o Primeino Numero"))
        this.n2 = Number(prompt("Diga o Segundo Segundo Numero"))

        this.resultado = this.n1 - this.n2
        alert(this.resultado)
    }


    Multiplicar(){
        this.n1 = Number(prompt("Diga o Primeino Numero"))
        this.n2 = Number(prompt("Diga o Segundo Segundo Numero"))

        this.resultado = this.n1 * this.n2
        alert(this.resultado)

    }


    divisao(){
        this.n1 = Number(prompt("Diga o Primeino Numero"))
        this.n2 = Number(prompt("Diga o Segundo Segundo Numero"))
        
        this.resultado = this.n1 / this.n2
        alert(this.resultado)

    }


}