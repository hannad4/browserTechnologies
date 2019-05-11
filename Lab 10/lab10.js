// My name:  Daniel Hanna
// File name: lab10.js
// Description: This file contains the data manipulation required to grayscale an image

self.onmessage= function(imageData){			// When message is sent to worker, the following actions should be performed
	let data = imageData.data.data; 		// Create a data variable that will hold the array containing RGBA values for pixels in image

	for (let red = 0; red < data.length; red+=4) {		// Modify all of the red value data in the array
		data[red] = (data[red] * .299) + (data[red+1] * .587) + (data[red+2] * .114); 	// Use formula provided in lab assignment pdf	
	}

	for (let blue = 1; blue < data.length; blue+=4) {	// Repeat modification for all of the blue value data in the array 
		data[blue] = (data[blue-1] * .299) + (data[blue] * .587) + (data[blue+1] * .114); 
	}

	for (let green = 2; green < data.length; green+=4) {   // Repeat modification for all of the green value data in the array 
		data[green] = (data[green-2] * .299) + (data[green-1] * .587) + (data[green] * .114); 
	} 

	self.postMessage(imageData.data);  	// Send the new data back so that it may be drawn on the canvas
}