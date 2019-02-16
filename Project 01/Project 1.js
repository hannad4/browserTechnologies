let simulate = function() {
    let nstay; 
    let nswitch; 

    let play = function() {
    	let doors = [];
        let counter; 
        let goatCount = 0; 
        let carCount = 0; 
        for (counter=0; counter<3; counter++){
            let x = Math.floor(Math.random() * Math.floor(3));  
            if (x === 0) {
                goatCount++; 
                if (goatCount === 3) {
                    doors.push('car'); 
                }
                else {
                    doors.push('goat'); 
                }  
            }
            else if (x === 1) {
                goatCount++; 
                if (goatCount === 3) {
                    doors.push('car'); 
                }
                else {
                    doors.push('goat'); 
                } 
            }
            else {
                carCount++;
                if (carCount > 1) {
                    doors.push('goat'); 
                }
                else {
                    doors.push('car');
                }
            }
        }
        console.log(doors[0]+ " " +doors[1]+ " " +doors[2]);  
    } 
    play(); 
}
simulate(); 