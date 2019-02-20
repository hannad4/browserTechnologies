let simulate = function() {     // Defining a function called simulate  
    let nstay=0;                // Creating the stay and switch variables (to be used later)
    let nswitch=0; 

    let play = function() {     // Defining the play function within the simulate() function
    	let doors = [];         // Creating the doors array, which will store the 3 doors with the door contents
        let counter;            // Creating a counter variable (for a loop to be used later on)
        let goatCount = 0;      // Creating a goat count variable to ensure that the appropiate number of goats is added
        let carCount = 0;       // Creating a car count variable to ensure that the appropiate number of cars is added
        let selection;          // The selection variable will store the door number that is chosen 
        let searchIndex = [];   // The search index will help locate all of the array indeces that contains a goat
        let otherGoat;          // The other goat variable will hold the index value of one of the goats (or the other goat if a goat is already chosen)

        for (counter=0; counter<3; counter++){                          // Creating a for loop to randomly build the door order and selections
            let x = Math.floor(Math.random() * Math.floor(3));          // x will determine whether a car or a goat should be added to the array (it is random, since its value is assigned using Math.random)
            if (x === 0) {                                              // if x is assigned the value of 0, then a goat is to be added
                goatCount++;                                            // The goat count variable must be incremented in order to determine the number of goats that have been added
                if (goatCount === 3) {                                  // Only two goats should be added to the array. If two have already been added, then a car must be pushed.
                    doors.push('car'); 
                }
                else {
                    doors.push('goat');                                 // If there has not yet been two goats added, then a goat may be pushed
                }  
            }
            else if (x === 1) {                                         // Since two goats and one car should be added, two of the values for x (either 0 or 1) will push goat into the array, and would otherwise push a car
                goatCount++; 
                if (goatCount === 3) {                                  // Maintain a check to see if the maximum number of goats have already been added, and add a car if this is true
                    doors.push('car'); 
                }
                else {
                    doors.push('goat'); 
                } 
            }
            else {                                                      // If x is not a value of 0 and not a value of 1 (and is thus a value of 2), then push car into the array instead
                carCount++;                                             // Perform a similar check as above to see if a car has been added the maximum number of times
                if (carCount > 1) {
                    doors.push('goat');                                 
                }
                else {                                                  // Push a car into the array otherwise
                    doors.push('car');
                }
            }
        }
        selection = Math.floor(Math.random() * Math.floor(3));          // the selection variable is assigned a random number between 0 and 2, and represents the selected door
 
        for(counter=0; counter<doors.length; counter++) {
            if(doors[counter] === 'goat') {                             // The search index will have all the index values of where the goats are be pushed to it
                searchIndex.push(counter); 
            }
        }
         
        if (searchIndex[0] === selection) {                          // If the number at the 0th index in searchIndex matches the selection value, then the other goat must be in the door number that matches the number at the 1st index value of searchIndex
            otherGoat = searchIndex[1];  
        }
        else {
            otherGoat = searchIndex[0];                             // Otherwise, the otherGoat must be in the door number that matches the number at the 0th index of searchIndex
        }
        if (doors[selection] === 'car') {                           // If the item located at the selected door is a car, then it is in the users favor to stay with their door selection
            nstay++;                                                // Increment the stay variable 
        }   
        else {                                                      // In other circumstances, it is in the users favor to switch doors. Increment the switch variable
            nswitch++; 
        }
    } 
    for(counter=0; counter<100000; counter++){                      // Run play 100,000 times, as per the project requirements 
    play(); 
}
console.log("Probability that you would win if you switched: " + nswitch/100000); // Determine the percent probability that switching would result in a win
console.log("Probability that you would win if you stayed: " + nstay/100000);     // Determine the percent probability that staying would result in a win 
}                                                                                 // Running this simulation an infinite number of times should theoretically result in a switch win percentage of 66% and a stay win percentage of 33 % (roughly)      
simulate();                             // Run simulation to see the statistical probability of winning given a switch or stay 