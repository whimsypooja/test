function Compare (mainStr,subStr){
    let isSub;
    let num=0;
    for (i=0;i<(mainStr.length-subStr.length)+1;i++){
        const sub=mainStr.slice(i, i+3)
        console.log(sub)
        if (sub==subStr) {
           isSub=true;
           num++
        }
       else {
           isSub=false;
       }
    }
    return num;
    
}

//main string = Nboyishanboyt is a boy auyhgj
//substring = boy
//output =true
//main string = Nishant is a boy
//substring = girl
//output = false

//String.slice(2, 4)

const result=Compare('Nishanboyt is a boy','boy')
console.log(result)