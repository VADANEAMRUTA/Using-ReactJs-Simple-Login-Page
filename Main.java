public class Main {
    public boolean isPalindrome(int x){
        if(x<0)
         return false;
    }
    long sum=0;
    int y=x;
    while(y>0)
    sum=(sum*10)+(y%10);
    y/=10;
    
}
