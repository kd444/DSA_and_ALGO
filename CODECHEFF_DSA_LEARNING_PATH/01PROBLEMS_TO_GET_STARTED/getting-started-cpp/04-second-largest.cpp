#include<iostream>
#include<bits/stdc++>
using namespace std;
int main()
{   int x,y,z,a;
    int arr[3];
    for(int i=0;i<3;i++){
      cin>>arr[i];
    }
    
    sort(arr,arr+3);
    cout<<"array now is " ,arr;
    return 0;
}