#include<stdio.h>

void main(){
    FILE* fp1,*fp2;
    char ch;
    fp1 = fopen("sample_data.txt","r");
    fp2 = fopen("output.txt","w");

    ch = fgetc(fp1);
    while(ch != EOF){
        if(ch == '/'){
            char next = fgetc(fp1);
            if(next == '/'){
                while(ch != '\n'){
                    ch = fgetc(fp1);
                }
            }
            else if(next == '*'){
                while(ch != '*' && fgetc(fp1) != '/'){
                    ch = fgetc(fp1);
                }
            }
        }
        else{
            fputc(ch,fp2);
        }
        ch = fgetc(fp1);
    }
}

