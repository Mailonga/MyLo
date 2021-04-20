programa
{
	inclua biblioteca Matematica --> mat
	

	funcao imprimi_linha(){
		escreva(".............................................................\n")
	}

	funcao compra_cartao(real z){
		real d
		d = z + (z*0.25)}
		             
	funcao inicio()
	{
	   //Declaração de Variaveis
	    inteiro y
	    real z, d, arredondar, arredondar2, arredondar3, arredondar4, arredondar5
	    caracter nome, sobrenome, produto

	    //Entrada de Dados
          imprimi_linha()
		escreva("................COMPRAS.......................................\n")
		imprimi_linha()
		escreva("\n")

		escreva("Digite o Seu Nome : ")
		leia(nome)
		escreva("Digite o Seu Sobrenome: ")
		leia(sobrenome)
		escreva("Digite o valor do Produto: R$ ")
		leia(z)
		escreva("Digite o Código Do Produto: ")
		leia(y)

 
          //Processamento
		arredondar = mat.arredondar( z - (z*0.10), 2)
		arredondar2 = mat.arredondar(z - (z*0.05), 2)
		arredondar3 = mat.arredondar(z + (z*0.10), 2)
		arredondar4 = mat.arredondar(z + (z*0.15), 2)


		//Saída de Dados

		enquanto ( y < 1){
			escreva("Compra Não Aprovada!") pare
		}
		
		escolha(y){
		
		caso 1: 
		escreva ("A Vista 10% de Descontos: R$",arredondar, ".\n")

          pare
		caso 2: 
		escreva("Débito 5% de Desconto: R$", arredondar2, ".\n")

          pare
		caso 3:
		escreva("Cartão em até 3x: R$", arredondar3, ".\n")

          pare
		caso 4:
		escreva("Cartão em até 12x: R$", arredondar4, ".\n" )


          pare
		caso 5:
		compra_cartao(z) // Função vazio com um Parametro determinando o preço de uma compra de mais de 12 parcelas.
	     arredondar5 = mat.arredondar(d = z + (z*0.25), 2)
		escreva("Cartão em mais de 12x: R$", arredondar5, ".\n")}	
		
	}

}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1694; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */