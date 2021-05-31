var names=new Array();
names[0]="Ayan";
names[1]="jo";
names[2]="Jack";
names[3]="Jason";
names[4]="Asmit";
names[5]="Raj";
names[6]="Jason";
names[7]="Joe";
names[8]="Iyer";
names[9]="Jimmyj";
for (var i=0;i<names.length;i++){
	if(names[i].charAt(0)=='J'|| names[i].charAt(0)=='j'){
     console.log("GoodBye "+names[i])
	}
	else{
		console.log("Hello "+names[i])
	}
}
