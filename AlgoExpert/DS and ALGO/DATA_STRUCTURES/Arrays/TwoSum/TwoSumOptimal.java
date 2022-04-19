import java.util.HashMap;


public class TwoSumOptimal {
    public static void main(String[] args) {
       
        int[] intArray = new int[]{ 2,3,4,5,7,9,2}; 
        int[] pairs = new int[2];
        int total =11;
        // create an empty map 
        HashMap<Integer,Integer> map= new HashMap<>();
        
        // iterate through given array
        for(int i=0;i < intArray.length; i++) {
            //  check  if curret elemnt is key of map 
            if(map.containsKey(intArray[i])){
             // if present return array 
             pairs[0] = map.get(intArray[i]);
             pairs[1] = i;
              
            }else{
                // if not present add complmentary as key and va;ue as index 
                map.put(total - intArray[i], i);
            }
            
        }

        for(int i=0;i<pairs.length;i++){
            System.out.println(pairs[i]);
        }
    /*
    Map:
    Declare 
    add
    get
    contains Key
    */
    }
}

