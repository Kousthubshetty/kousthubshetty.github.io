set ns [new Simulator]

set tracefile [open prog1.tr w]
$ns trace-all $tracefile
set namfile [open prog1.nam w]
$ns namtrace-all $namfile

set n0 [$ns node]
set n1 [$ns node]
set n2 [$ns node]

$ns duplex-link $n0 $n1 0.25Mb 10ms DropTail
$ns queue-limit $n0 $n1 5
$ns duplex-link $n1 $n2 100Mb 10ms DropTail
$ns queue-limit $n1 $n2 3

$ns duplex-link-op $n0 $n1 orient right-down
$ns duplex-link-op $n1 $n2 orient left-down

set tcp [new Agent/TCP]
set sink [new Agent/TCPSink]

$ns attach-agent $n0 $tcp
$ns attach-agent $n2 $sink

$ns connect $tcp $sink

set ftp [new Application/FTP]
$ftp attach-agent $tcp

$ns at 0.5 "$ftp start"
$ns at 2.0 "$ftp stop"
$ns at 2.5 "Finish"

proc Finish {} {
global ns tracefile namfile
$ns flush-trace
close $tracefile
close $namfile

exec nam prog1.nam &
exec awk -f prog1.awk prog1.tr &
exit 0
}
puts "simulation starts..."

$ns run