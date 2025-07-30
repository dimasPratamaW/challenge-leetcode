var calPoints = function(operations) {
    var list_point = []


    const length_operation = operations.length
    for(let i = 0;i<length_operation;i++){
        if(operations[i]==="D"){
            list_point.push(Number(list_point[list_point.length-1]*2))
        }
        else if(operations[i]==="C"){
            list_point.pop()
        }
        else if(operations[i]==="+"){
            list_point.push(Number(list_point[list_point.length-2]+list_point[list_point.length-1]))
        }
        else{
        list_point.push(Number(operations[i]))
        }
    }

    return list_point.reduce((a,b)=> a+b,0)

};

console.log(calPoints(["5","-2","4","C","D","9","+","+"]))