package com.codecheff.programs;
import java.util.*;
import java.lang.*;

public class IsBoth {

	public static void main (String[] args) throws java.lang.Exception
	{
		// your code goes here
		Scanner input= new Scanner(System.in);
		int a = input.nextInt();
		if(a%5==0 || a%11==0){
		    System.out.println("ONE");
		}
		else if(a%5==0 && a%11==0){
		     System.out.println("BOTH"); 
		}
		else{
		      System.out.println("NONE");
		}
	}
	
}
