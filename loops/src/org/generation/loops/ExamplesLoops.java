package org.generation.loops;

public class ExamplesLoops {
	public static void main(String[] args) {
	int contador=1;
	while (contador<=5){
	System.out.println("Iteracion " + contador);
	contador++;
}
	//doWhile
	int contadorDoWhile=1;
	do {
		System.out.println("Iteración Do While: "+ contadorDoWhile);
		contadorDoWhile++;
	}while (contadorDoWhile<=5);
	
	  /*For
     * Las condiciones de los for se basan en 3 partes:
     * 1.Inicializacion - > se inicializa el contador 
     * 2.Condicion ->  se utiliza la comparacion de dos variables el inicialziador
     * y la cantidad o la condicion que delimite n de iteraciones, de preferencia 
     * se iguala =
     * 3. el incremento o actualizacion del contador */
	
	for(int i=0; i<=5; i++) {
		System.out.println("contador For: "+i);
	}
	
	/*ForEach Java
     * utiliza la palabra reservada for, similar a como usa un for puro
     * en lugar de recibir condicional de tres partes: 
     * (inicializador; condicion;incremento)
     * Va a utilizar una estructura de parametros 
     * (TipodeElemento elemento(identificadorElemento) : collection(array,ArrayList,set,map)*/
    String[] names = {"xamitl", "maggy","alex"};
    
    String misCompaneros = "";
    for(String name : names) {
        misCompaneros += name;
    }
    System.out.println(misCompaneros);
	}}
	

