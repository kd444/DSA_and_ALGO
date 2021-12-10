package com.codecheff.programs;

import java.util.*;


   public class FactorsFind {

	
	   public static void main(String[] args) {
			Scanner input= new Scanner(System.in);
			int a=0;
			if(input.hasNextInt()) {
				a = input.nextInt();	
			}
			List<Integer> l1 = new ArrayList<Integer>();
			for(int i=1;i <= a; i++) {
				if(a%i==0) {
					l1.add(i);
				}
				
			}
			
			System.out.println(l1.size());

			for(int i=0;i<l1.size();i++) {
				System.out.print(l1.get(i)+" ");
			}
			
		
		}
}
