package com.codecheff.programs;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.Collections;


public class SecondLargestt {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input= new Scanner(System.in);
		List<Integer> l1 = new ArrayList<Integer>();
	    int a = 0;
	    int b=0;
	    int c=0;
	    if(input.hasNextInt()) {
	    	a = input.nextInt();	
			b = input.nextInt();	
		    c = input.nextInt();	
		}
	    
        l1.add(a);
        l1.add(b);
        l1.add(c);
        l1.remove(Collections.max(l1));
        System.out.println(Collections.max(l1));
	}
}