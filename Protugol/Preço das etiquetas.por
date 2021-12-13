programa
{
	inclua biblioteca Matematica --> mat
	funcao inicio()
	{

	   real x,x1,x2, x3, y, a, a1, a2, a3
	   inteiro numero
	   

	   escreva("Digite o código do Produto: ")
	   leia(numero)

	   escolha (numero){
	   	caso 0:
	   	escreva("Compra à vista.\n\n")

          pare
	   	caso 1:
	   	escreva("Compra no Cheque compensação em até 30 dias.\n\n")

          pare
	   	caso 2:
	   	escreva("Compra no Cartão de Crédito em 2x.\n\n")

          pare
	   	caso 3:
	   	escreva("Compra no Cartão de Crédito em 3x.\n\n")

          pare
	   	caso contrario :
	   	escreva("Compra negociada com o vendedor.\n\n")
	   }

          
		escreva("Digite o Valor do Produto: ")
		leia(y)

		a = y-(y*0.25)
		x = mat.arredondar(a, 2)
		a1 = y - (y*0.20)
		x1 = mat.arredondar (a1, 2)
		a2 = y - (y*0.10)
		x2 = mat.arredondar(a2, 2)
	     a3 = y - (y*0.05)
	     x3 = mat.arredondar(a3, 2)
         
	     
		se(numero==0){
	      	escreva("Compra com 25% de Desconto:  R$ ", x,".\n\n")
	      	
		}senao se(numero == 1){
			escreva("Compra com 20% de Desconto:  R$ ", x1,".\n\n")
		
		}senao se(numero == 2){
			escreva("Compra com 10% de Desconto: R$ ", x2, ".\n\n")
			
		}senao se(numero == 3){
			escreva("Compra com 5% de Desconto: R$ ", x3, ".\n\n")
			
		}senao{
			escreva("Compra Sem Desconto.\n\n")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 609; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */