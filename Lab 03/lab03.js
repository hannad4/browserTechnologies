// File Name: lab03.js
// My Name: Daniel Hanna
// Description: This file utilizes herons formula to calculate the area of any convex polygon, and demonstrates the utilization of classes in javascript

class ConvexPoly {												// Creating class called ConvexPoly
	constructor(points=[]) {									// Creating a constructor that contains a points array 
		this._points = points; 		
	}

	get area() {												// Creating a getter function named area
		return this.computeArea(this._points); 					// This will return the computeArea function that will find the area
	}

	_heron = function(p1, p2, p3) {								// Using the heron function as provided from the lab handout 
		let a = Math.sqrt((p2.x-p1.x)*(p2.x-p1.x) + (p2.y-p1.y)*(p2.y-p1.y));
		let b = Math.sqrt((p3.x-p2.x)*(p3.x-p2.x) + (p3.y-p2.y)*(p3.y-p2.y));
		let c = Math.sqrt((p3.x-p1.x)*(p3.x-p1.x) + (p3.y-p1.y)*(p3.y-p1.y));
		let s = (a+b+c)/2;

		return Math.sqrt(s*(s-a)*(s-b)*(s-c));
	}

	computeArea = function(areaPoints) {						// Creating a computeArea function
		let areaShape = 0; 
		for (let i =0; i < areaPoints.length -2; i++) {			// Developing the 3 vertices that will help split the shape into triangles
			areaShape = areaShape + this._heron(areaPoints[0], areaPoints[i+1], areaPoints[i+2]); 
		}
		return areaShape; 										// Return the areaShape that was calculated
	}
}

class RegularPoly extends ConvexPoly {
	constructor(center, nsides, radius) {
		let createArray = function(center, nsides, radius) {
			let theta = 2*(Math.PI); 							// Theta is equal to 2*pi
			let array = []; 									// Creating an empty array, which will have items be pushed to it
			for(let i = 0; i < theta; i = i + theta/nsides) { 	// Computing vertices by looping angle variable as provided in hint
				let x = (radius * Math.cos(i) + center.x); 		// Finding x coordinate via formula provided
       			let  y = (radius * Math.sin(i) + center.y); 	// Finding y coordinate via formula provided
          		array.push({x:x, y:y}); 						// Pushing the found values into the previously defined array
          	}
        return array; 
		}
		super(createArray(center, nsides, radius)); 			// Use super to call the constructor of the parent class and passing the newly built array to it
	}
}

let s1 = new RegularPoly( {x:50, y:50}, 4, 50*Math.sqrt(2)); 	// Using first tester function as provided
console.log(`Square1 area (a regularPoly): ${s1.area}`);

let s2 = new ConvexPoly( [{x:0, y:0},{x:0, y:100},{x:100, y:100},{x:100, y:0}] ); // Using second tester function as provided
console.log(`Square2 area (a convexPoly): ${s2.area}`);