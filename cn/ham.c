#include<stdio.h>
#include<string.h>
int hammingDist(char str1[150], char str2[150])
{
int i,count = 0;
for(i=0;i<strlen(str1);i++)
{
if(str1[i] != str2[i])
count++;
}
return count;
}
int main()
{
char str1[50],str2[50];
printf("Enter the firststring:");
scanf("%s",str1);
printf("Enter the secondstring:");
scanf("%s",str2);
printf("Hamming Distance:%d",hammingDist(str1,str2));
return 0;
}
