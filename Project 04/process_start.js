// My Name: Daniel Hanna
// File Name: process_start.js
// Description: Web Worker providing image processing functionality (using the median function)

self.onmessage = function(ev) {     // The following actions should be performed when the worker receieves a message
    let start = Date.now();     // The start variable will hold the current time (used to calculate elapsed time) 

    ev.data.imdata.data.set(median(ev.data.imdata.data, ev.data.imdata.width, ev.data.imdata.height)); // The pixel data should be changed to whatever the median function calcualtes. The array data, width, and height are passed in

    let elapsed = Date.now() - start;       // The elapsed time will hold the difference in time between now and the start variable time
    ev.data.elapsed = elapsed;      // The elapsed property of the data object will hold the calculated elapsed time
    self.postMessage(ev.data);      // The new data should be sent back to be drawn onto the page
};


// ========================== PRE-PROVIDED MEDIAN FUNCTION ========================== //

// Apply the color median filter to the ImageData and replace data.
// @param {Uint8ClampedArray} arr  array holding image data
// @param {number}            w    Width of image to process
// @param {number}            h    Height of image to process
function median(arr, w, h) {
    let r, c, rr, cc, i, j, k;

    // Create output array
    let arr2 = new Uint8ClampedArray( new ArrayBuffer(4*w*h) );

    // Loop over all pixels
    for (r=1; r<h-1; r++) {
        for (c=1; c<w-1; c++) {

            let ared = [];
            let agrn = [];
            let ablu = [];

            for (i=-1; i<2; i++) {
                rr = r + i;
                for (j=-1; j<2; j++) {
                    cc = c + j;

                    // Push channel values to three color arrays
                    k  = 4*(rr*w + cc);
                    ared.push( arr[k] );
                    agrn.push( arr[k+1] );
                    ablu.push( arr[k+2] );
                }
            }

            // Order pixel values
            ared.sort();
            agrn.sort();
            ablu.sort();

            // Reset all values to the median
            k  = 4*(r*w + c);
            arr2[k]   = ared[4];
            arr2[k+1] = agrn[4];
            arr2[k+2] = ablu[4];

            // Set alpha to a fixed value of 255
            arr2[k+3] = 255;
        }
    }

    return arr2;
}