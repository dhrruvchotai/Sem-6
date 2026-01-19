#include<stdio.h>
#include<string.h>

char str[100];
int indx = 0;
int length = 0;

void F(){
    if(str[indx] == 'i' && str[indx+1] == 'd'){
        printf("ID Matched!\n");
        indx+=2;
        return;
    }
    return;
}

void T_dash(){
    if(str[indx] == '*' && indx < length){
        printf("* Matched!\n");
        indx+=1;
        F();
        T_dash();
    }
    return;
}  

void T(){
    F();
    T_dash();
}

void E_dash(){
    if(str[indx] == '+' && indx < length){
        printf("+ Matched!\n");
        indx++;
        T();
        E_dash();
    }
    return;
}

void E(){
    T();
    E_dash();
}



void main(){
    printf("Enter string : ");
    fgets(str, sizeof(str), stdin); 
    length = strlen(str)-1;
    E();
    if(indx == length){
        printf("Matched!");
    }
    else{
        printf("Not Matched!");
    }
}