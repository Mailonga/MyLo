programa
{
	inclua biblioteca Matematica
	
	
		escreva("\t\t+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n")
	}
	funcao inicio()
	{
	     real a, b, c, z, arredondar

          imprimi_linha()
		escreva ("\t\t+++++++++++++++++++Descubra a Hipotenusa do Triângulo!!+++++++++++++++++\n")
		imprimi_linha()
		escreva("\n\n")
		
		escreva("Digite a medida do Primeiro Cateto: ")
		leia(b)
		escreva("\n")
		escreva("Digite oa medida do Segundo Cateto: ")
		leia(c)
		escreva("\n\n")
		
		imprimi_linha()
		escreva("\n\n")

         
          z = mat.raiz((mat.potencia(b, 2.0) + mat.potencia(c, 2.0)), 2.0)
          arredondar = mat.arredondar(z, 2)
           
          escreva("A Hipotenusa é ", arredondar, " cm.\n\n") 
          imprimi_linha()
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 714; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */