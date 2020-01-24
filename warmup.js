const countOfPositives_SumOfNegatives = function(Array){
   const result=[0,0];
    for(let i=0;i<Array.length;i++){
    if(Array[i]<=0){
        result[1]=result[1]+Array[i];
    }else result[0]=result[0]+1;
}
return result;
}

const Input=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
countOfPositives_SumOfNegatives(Input);