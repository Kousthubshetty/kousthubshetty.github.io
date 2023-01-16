if {$argc!=1} {
error "Command:ns <ScriptName.tcl><Number_of_Nodes>"
exit 0
}
set ns [new Simulator]
set tracefile [open p7.tr w]
$ns trace-all $tracefile
set namfile [open p7.nam w]
$ns namtrace-all-wireless $namfile 750 750
proc finish {} {
global ns tracefile namfile
$ns flush-trace
close $tracefile
close $namfile
exec nam p7.nam &
exec awk -f p7.awk p7.tr &
exit 0
}
set val(nn) [lindex $argv 0]
set topo [new Topography]
$topo load_flatgrid 750 750
$ns node-config -adhocRouting AODV \
-llType LL \
-macType Mac/802_11 \
-ifqType Queue/DropTail \
-channelType Channel/WirelessChannel \
-propType Propagation/TwoRayGround \
-antType Antenna/OmniAntenna \
-ifqLen 50 \
-phyType Phy/WirelessPhy \
-topoInstance $topo \
-agentTrace ON \
-routerTrace ON \
-macTrace OFF \
-movementTrace ON
set god_ [create-god $val(nn)]
for {set i 0} {$i<$val(nn)} {incr i} {
set n($i) [$ns node]
}
$n(1) label "TCPSource"
$n(3) label "Sink"
for {set i 0} {$i<$val(nn) } {incr i } {
set XX [expr rand()*750]
set YY [expr rand()*750]
$n($i) set X_ $XX
$n($i) set Y_ $YY
}
for {set i 0} {$i<$val(nn)} {incr i} {
$ns initial_node_pos $n($i) 100
}
proc destination {} {
global ns val n
set now [$ns now]
set time 5.0
for {set i 0} {$i<$val(nn)} {incr i} {
set XX [expr rand()*750]
set YY [expr rand()*750]
$ns at [expr $now+$time] "$n($i) setdest $XX $YY 20.0"
}
$ns at [expr $now+$time] "destination"
}
set tcp [new Agent/TCP]
$ns attach-agent $n(1) $tcp
set ftp [new Application/FTP]
$ftp attach-agent $tcp
set sink [new Agent/TCPSink]
$ns attach-agent $n(3) $sink
$ns connect $tcp $sink
$ns at 0.0 "destination"
$ns at 1.0 "$ftp start"
$ns at 100 "finish"
$ns run