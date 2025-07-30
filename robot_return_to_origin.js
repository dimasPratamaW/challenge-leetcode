/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var origin_place = [0,0]

    for(let i =0;i<moves.length;i++){
        if(moves[i]=== "R"){
            origin_place[0] = origin_place[0]+1 
        }
        else if(moves[i]=== "L"){
            origin_place[0] = origin_place[0]-1 
        }
        
        else if(moves[i]=== "U"){
            origin_place[1] = origin_place[1]+1 
        }
        
        else if(moves[i]=== "D"){
            origin_place[1] = origin_place[1]-1 
        }

    }
    
    if(origin_place[0]!==0 || origin_place[1]!==0 ){
        return false
    }

    return true

};

console.log(judgeCircle("DD"))