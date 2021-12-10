package com.codecheff.programs;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class RangeOdd {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input= new Scanner(System.in);
		List<Integer> l1 = new ArrayList<Integer>();
	    int a = 0;
	    int b=0;
	    int i =0;
	    if(input.hasNextInt()) {
	    	a = input.nextInt();	
			b = input.nextInt();	
		    
		}
	    
	    for(i=a;i<=b;i++) {
	    	if(i%3==0) {
	    	 System.out.println(i);
	    	}
	    }
        

	}

	
}
