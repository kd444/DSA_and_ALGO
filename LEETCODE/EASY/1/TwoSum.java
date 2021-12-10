import java.util.ArrayList;

/**
 * TwoSum
 */

public class TwoSum {

    public static void main(String[] args) {
        
		int[] intArray = new int[]{ 2,3,4,5,7,9,2}; 
        int target= 9;
        ArrayList<Integer> intIndex
        = new ArrayList<Integer>();
        boolean pairPresent = false;
        for(int i=0;i < intArray.length; i++) {
            
                for(int j=i+1;j<intArray.length; j++){
                    if(intArray[i]+intArray[j]==target){
                        System.out.println("yes"+i+j);
                        intIndex.add(i);
                        intIndex.add(j);
                       
                        pairPresent=true;
                        break;
                        // if(intArray[])
                    }    
                    
                   
                }
                if(pairPresent)break;
    
            }
            if(pairPresent)
            {
                System.out.println(intIndex);
            }
            else{
                System.out.println("pair not present");
            }
    }
}