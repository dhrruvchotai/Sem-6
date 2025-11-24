#include<stdio.h>

void main(){
    char ch;

    FILE *fp1,*fp2;

    fp1 = fopen("file1.txt", "a");
    fp2 = fopen("file2.txt","r");

    if(fp1 == NULL || fp2 == NULL){
        printf("Error in opening files!");
        return;
    }

    while((ch = fgetc(fp2)) != EOF){
        // fputc(ch,fp1);
        fprintf(fp1,"%c",ch);
    }

    fclose(fp2);
}