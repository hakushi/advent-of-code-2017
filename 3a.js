const start = 1;
const width = 2000;
const input = 12;
let current = start;
let last = current;
let right, top, left, bottom;

const sortFunc = (a, b) => {
    if(parseInt(a, 10) > parseInt(b, 10)) {
        return 1
    }
    if((a, b) => parseInt(a, 10) < parseInt(b, 10)) {
        return -1
    }
    return 0;
}


for (i = 0; i < width; i++) {
    console.log('size :', current)
    if(input < current ) {
        const distances = [Math.abs(input-right), Math.abs(input-top), Math.abs(input-left), Math.abs(input-bottom)];
        const distanceToCenter = parseInt(distances.sort(sortFunc)[0], 10);
        console.log('janne', distances.sort(sortFunc))
        console.log('Dis', distanceToCenter)
        console.log('distance to start', i-1)
        console.log('Manhattan distance: ', distanceToCenter + i-1)
        break;
    }
    current = current + 2*(4*i);
    let side = i*2+1;
    last =  current - 2*(4*i);
    right = i + last;
    top = right + side-1;
    left = top + side-1;
    bottom = left + side-1; 
    console.log('right:', right)
    console.log('top:', top)
    console.log('left:', left)
    console.log('bottom:', bottom)

}

