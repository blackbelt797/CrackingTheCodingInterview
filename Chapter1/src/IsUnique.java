package Chapter1.src;

public class IsUnique {

    /** 
     * O(N) 0(1)
     */
 
    boolean isUniqueChars(String str) {
                if(str.length() > 128) return false;
            
            boolean[] char_set = new boolean[128];
            for (int i = 0; i < str.length(); i++) {
                int val = str.charAt(i);
                if ( char_set[val]){ // Already found this char in string
                    return false;
                }
                char_set[val] = true;
            }
            return true;
    }

    /**
     * 
     */

    boolean isUniqueChars2(String str) {
         int checker = 0;

        for (int i = 0; i < str.length(); i++) {
           int val = str.charAt(i) - 'a';
           if((checker & (1 << val)) > 0) {
               return false;
           }
           checker |= (1 << val);
            }
            return true;
    }

    public static void main(String[] args) {
        IsUnique iu = new IsUnique();
        String str = "abcd";
        System.out.println(iu.isUniqueChars(str));
        System.out.println(iu.isUniqueChars2(str));
    }

    }
