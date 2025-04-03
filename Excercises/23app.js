function filterEven(n1){
    let n2
    
    for(let i = 0; i<n1; i++){
        if(n1[i] % 2 == 0){
            n2[i] += n1[i] 
        }
    }
    return console.log(n2)
}
filterEven(12,124,56,78)