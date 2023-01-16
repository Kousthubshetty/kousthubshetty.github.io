BEGIN {
count=0;
pc=0;
}
{
event=$1;
if(event=="d") { count++;}
if(event=="r") { pc++;}
}
END {
printf("\n Number of packets dropped is:%d\n",count);
printf("\n Number of packets recieced is:%d\n",pc);
}