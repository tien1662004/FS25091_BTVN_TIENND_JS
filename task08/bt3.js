function sortNumber(a,b,c){
    if(a>b){
        a = a + b;
        b = a- b;
        a = a-b;
    }
    if(b > c){
        b = b + c;
        c = b -c;
        b = b -c;
    }
    if(a > b) {
        a = a+b;
        b = a - b;
        a = a -b;
    }
    console.log(a,b,c);
}
sortNumber(3, 2, 1); 
sortNumber(9, 2, 4); 
sortNumber(1, 9, 7);
