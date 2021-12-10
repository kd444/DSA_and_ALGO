// Online C++ compiler to run C++ program online
#include <bits/stdc++.h>

using namespace std;

string isPossible(int a, int b, int c, int d) {
    if(a==c && b==d){
        string result = "Yes";
        return result;
    }else if(a>c || b>d){
        string result = "No";
        return result;
    }else{
        isPossible(a+b,b,c,d);
        isPossible(a, a + b, c, d);
    }
}

int main() {
    // Write C++ code here
    int a = 1;
    int b = 1;
    int c = 2;
    int d = 2;
 string result = isPossible(a, b, c, d);    
    std::cout << result;

    return 0;
}