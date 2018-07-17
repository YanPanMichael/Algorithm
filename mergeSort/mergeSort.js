import { makeRe } from "../../../../Library/Caches/typescript/2.6/node_modules/@types/minimatch";

function merge(left, right) {
    var result = [];

    while(left.length > 0 && right.length > 0) {
        if(left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    return result.concat(left).concat(right);
}

// Iteration
function mergeSort(items) {
    if(items.length == 1) {
        return items;
    }
    var middle = Math.floor(items.length/2),
        left = items.slice(0, middle);
        right = items.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

// No iteration
function mergeSort2(items) {
    if(items.length == 1) {
        return items;
    }

    var work = [];
    for(var i = 0, len = items.length; i<len; i++) {
        work.push([items[i]]);
    }
    work.push([]); //if array length is odd
    
    for(var lim=len; lim>1; lim=(lim+1)/2) {
        for(var j=0, k=0; k<lim; j++, k+=2) {
            work[j] = merge(work[k], work[k+1]);
        }
        work[j]=[]; //if array length is odd
    }

    return work[0];
}

console.log('Method 1: ' + mergeSort([2,4,1,3]));
console.log('Method 2: ' + mergeSort2([2,4,1,3,10,7,6]));