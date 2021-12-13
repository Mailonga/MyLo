programa
{
	inclua biblioteca Matematica --> mat
	
	funcao inicio()
	{
	//Descrição de Variaveis
	real n, r, arredondar
	cadeia nome

	//Entrada de Dados
	     escreva ("Calculando novos Preços!", "\n")
	     escreva("Qual é o Produto?", "\n")
	     escreva("Produto: ", " ")
	     leia(nome)
		escreva("Qual o Preço o Produto?", "\n")
		escreva("Preço: "," ", "R$", " ")
		leia(n)

	//Processamento
	     r = n - (n*0.05)
	     arredondar = mat.arredondar(r, 2)

	//Saída de Dados
         escreva("O novo Preço é : ", " ", "R$", " ", arredondar)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 386; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */