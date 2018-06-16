function FixedDigits(i, a, b){
    if(typeof i == "number"){
        var convert = i.toString(b);    
    }else{
        var convert = parseInt(i,a);
	var convert = convert.toString(b);
    }    
    return convert;
}
console.log(FixedDigits("101011",2,10));