#include<stdio.h>

void main(){
    FILE* fp;
    int ch;
    int chars=0,new_lines=0,tabs=0,spaces=0;

    fp = fopen("some_data.txt","r");

    if(fp == NULL){
        printf("Can't Open File!");
        return;
    }

    while((ch = fgetc(fp)) != EOF){
        if(ch == ' ') spaces++;
        else if(ch == '\n') new_lines++;
        else if(ch == '\t') tabs++;
        else chars++;
    }
    fclose(fp);

    printf("Chars = %d\nNew Lines = %d\nTabs = %d\nSpaces = %d",chars,new_lines,tabs,spaces);

}