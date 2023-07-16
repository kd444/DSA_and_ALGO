public class ValidAnagram {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length())
            return false;
        int[] char_counts = new int[26];
        for (int i = 0; i < s.length(); i++) {
            char_counts[s.charAt(i) - 'a']++;
            char_counts[t.charAt(i) - 'a']--;
        }
        for (int count : char_counts) {
            if (count != 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        ValidAnagram anagramChecker = new ValidAnagram();
        String s = "anagram";
        String t = "nagaram";
        boolean result = anagramChecker.isAnagram(s, t);
        System.out.println("Is Anagram: " + result);
    }
}
