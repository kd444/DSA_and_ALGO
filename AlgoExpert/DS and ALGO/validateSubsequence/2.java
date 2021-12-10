import java.util*;

class Program{
    public static boolean isVaildSubSequence(List<Integer>array,List<Integer>sequence){
        int arrIdx=0;
        int seqIdx=0;

        while(arrIdx<array.size() && seqIdx<sequence.size()){
          if(array.get(arrIdx)==sequence.get(seqIdx)){
              seqIdx++;
          }
          arrIdx++;
        }
        return seqIdx==sequence.size();
    }
}