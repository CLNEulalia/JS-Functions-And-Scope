const sq = [
    [9,8,7],
    [6,5,4],
    [3,2,1],
]


const curl = (sq, log=false) => {
    
    const M = sq.length     // M = "height" / number of rows
    const N = sq[0].length  // N = "width"  / number of cols

    let outputCounter   = 0
    let stepsCounter    = N;
    let dirCounter      = 0;

    let out = new Array(M*N);

    let row = 0;
    let col = -1;
    
    while (outputCounter < M*N) {
        
        for (let step=0; step < stepsCounter; step++) {
            
            switch(dirCounter) {
                case 0: col++; break;
                case 1: row++; break;
                case 2: col--; break;
                case 3: row--; break;
            }   

            if (log) {console.log(row + " | " + col)}

            out[outputCounter] = sq[row][col]
            outputCounter++
            
        }

        if (dirCounter < 3) {dirCounter++} else {dirCounter = 0}
        
        if (dirCounter % 2 === 1) { stepsCounter--}

        if (log) {console.log(`dir: ${dirCounter} | step: ${stepsCounter}`)}
    }
    
    return out;
}


const ret = curl(sq, log=false);
console.log(ret);