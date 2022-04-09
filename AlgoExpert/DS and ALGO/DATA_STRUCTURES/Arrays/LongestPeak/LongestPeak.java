package Arrays.LongestPeak;

public class LongestPeak {
    public int getLongestPeak(int[] arr) {
        int LongestPeakLength = 0;
        int i = 1;
        while (i < arr.length - 1) {
            boolean isPeak = arr[i - 1] < arr[i] && arr[i] > arr[i + 1];
            if (!isPeak && i < arr.length - 1) {

                i += 1;
                continue;
            }
            int leftIdx = i - 2;
            while (leftIdx >= 0 && arr[leftIdx] < arr[leftIdx + 1] && i < arr.length - 1) {
                leftIdx -= 1;
            }
            int rightIdx = i + 2;
            while (rightIdx >= 0 && arr[rightIdx] < arr[rightIdx - 1] && rightIdx < arr.length - 1) {
                rightIdx += 1;
            }
            int currentPeakLength = rightIdx - leftIdx - 1;
            if (currentPeakLength > LongestPeakLength) {
                LongestPeakLength = currentPeakLength;
            }
            i = rightIdx;
        }
        return LongestPeakLength;
    }

    public static void main(String[] args) {
        // int[] arr = new int[]{1,2,3,3,4,0,10,6,5,-1,-3,2,3};
        // int[] arr = new int[]{0,1,2,3,4,5,4,3,2,1,0};
        // int[] arr = new int[]{0,1,2,3,4,5,4,3,2,1,0};

        LongestPeak obj = new LongestPeak();

        System.out.println(obj.getLongestPeak(arr));
    }
}

// type arr=[1,2,3,3,4,0,10,6,5,-1,-3,2,3]
// LongestPeak(arr)