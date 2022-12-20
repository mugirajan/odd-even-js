var mainarray=[10,15,20,25,30,35,40,45,50];
var a=0;
var b=0;
var odd=[];
var even=[];
for(i=0;i<=8;i++){
    if(mainarray[i]%2==0){
        even[a]=mainarray[i];
        a++;
    }
    else{
        odd[b]=mainarray[i];
        b++;
    }
}
 console.log(even)
 console.log(odd)