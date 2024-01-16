function convert(){
    var decimal=document.getElementById("decimal").value;
    var temp,r,binary=0,place=1;
    temp=decimal;
    while(temp>0)
    {
        r=temp%2;
        binary=binary+(r*place);
        temp=parseInt(temp/2);
        place=place*10;
    }
    alert(binary);
}