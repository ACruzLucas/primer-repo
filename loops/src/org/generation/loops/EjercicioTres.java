package org.generation.loops;
import java.util.Scanner;

public class EjercicioTres {
	public static void main(String[] args){
		Scanner scanner = new Scanner(System.in);
		System.out.println("Introduce un nombre: ");
		String name = scanner.nextLine();
		
		for (int i=0; i<name.length();i++) {
			System.out.println(name.charAt(i));
		}
		scanner.close();
		
		
	}

}
