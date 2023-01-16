BEGIN {
PacketRcvd=0;
Throughput=0.0;
}
{
if(($1=="r") && ($3=="_3_") && ($4=="AGT")&& ($7=="tcp") && ($8>1000))
{
PacketRcvd++;
}
}
END {