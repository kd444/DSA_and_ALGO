import java.util.*;

public class HasPairWithSum {

	public static void main(String[] args) {
				
		// int[] arr1 = {1,2,3,9};
		int[] arr1 = {1,2,4,4};
		int sum = 8;

		HashSet<Integer> set = new HashSet<>();
		boolean hasAPair = false;

		for(int i=0;i<arr1.length;i++){
			if(set.contains(arr1[i])){
				hasAPair = true;
				break;
			}
			set.add(sum-arr1[i]);
		}
		if(hasAPair){
			System.out.println("There are pairs that add up to the given sum.");
		}else{
			System.out.println("There are no pairs that add up to the given sum.");
		}
	}
}
