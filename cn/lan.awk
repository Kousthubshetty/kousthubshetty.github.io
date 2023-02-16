BEGIN{
}
{
if($6==”cwnd_” )
{
printf("\n%f\t %f\n",$1,$7);
}
}
END{
}