var os=require('os');
var msg='Here is some system info : ';
var sysarray=new Array('Type: '+os.type(),
						'Node Version: '+process.version,
						'Platform: '+os.platform(),
						'Hostname: '+os.hostname(),
						'Total Memory: '+os.totalmem(),
						'Free Memory: '+os.freemem(),
						'Uptime: '+os.uptime()
						);
console.log(msg);
var len=sysarray.length;
for(i=0;i<len;i++)
{
	console.log(sysarray[i]+"\n");
}