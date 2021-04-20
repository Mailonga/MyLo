programa
{
	inclua biblioteca Matematica --> mat
	
	funcao inicio()
	{

	//Descrição de Variaveis
	real   l, b, h, a, arredondar1, arredondar2
	cadeia comodo

	//Entrada de Dados
		escreva("Fazendo sua Reforma! \n")
		escreva("Qual o Comôdo que você utilizará? \n")
		escreva("Resposta: \t")
		leia(comodo)
		escreva("\n\n")
		escreva("Digite a Altura da Parede do seu ", comodo, ": \t")
		leia(h)
		escreva("\n")
		escreva("Digite o Largura da Parede do seu ", comodo, ": \t")
		leia(b)
		escreva("\n")
		limpa()

	//Processamento
	     a = b*h
	     l = a/2
	     arredondar1 = mat.arredondar(a, 2)
	     arredondar2 = mat.arredondar(l, 2)

    //saída de Dados 
          escreva("A área Total do ", " ", comodo, "\t é: ", " ", arredondar1*4, "\t m2 \n")
          escreva("Cada Parede contém em área: \t", arredondar1,"\t m2", "\n")
		escreva("Cada Parede precisa de: ", " ", arredondar2, " ","L para pintar o "," ", comodo, " ", "todo. \n")
		escreva("A Quantidade de de tinta para todo o ", " ", comodo, "\t é:", " ", arredondar2*4, "L", "\n")
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1038; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */