import java.util.*;

public class CommonItems {

	public static void main(String[] args) {
				
		char[] arr1 = {'a', 'b', 'c', 'x'};
		char[] arr2 = {'z', 'y', 'y'};
		HashMap<Character,Boolean> map = new HashMap<>();
		boolean commonItems = false;

		for(int i=0;i<arr1.length;i++){
			map.put(arr1[i],true);
		}

		for(int i=0;i<arr2.length;i++){
			if(map.containsKey(arr2[i])){
				commonItems = true;
				break;
			}
		}
		if(commonItems){
			System.out.println("There are common Items.");
		}else{
			System.out.println("There are no common Items.");
		}
	}
}
