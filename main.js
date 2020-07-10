// Line Analyzer

// Add Event Listener
document.getElementById('analyze').addEventListener('click', analyzeLine);

// Event Function
function analyzeLine() {
    // Get Inputted Point Data (pt1x, pt1y) and (pt2x, pt2y)
    let pt1x = Number(document.getElementById('pt1x').value);
    let pt1y = Number(document.getElementById('pt1y').value);
    let pt2x = Number(document.getElementById('pt2x').value);
    let pt2y = Number(document.getElementById('pt2y').value);

    // Call Analyze Functions and Display results
    document.getElementById('length').innerHTML = getLength(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('slope').innerHTML = getSlope(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('description').innerHTML = getDescription(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('location-1').innerHTML = getPointLocation(pt1x, pt1y);
    document.getElementById('location-2').innerHTML = getPointLocation(pt2x, pt2y);
    // document.getElementById('equation').innerHTML = getEquation(pt1x, pt1y, pt2x, pt2y);
}

// Line Analyzer Functions (Write your solutions here... getLength is done for you)

function getLength(x1, y1, x2, y2) {
    // Use pythagorean theorem to determine length from (x1, y1) to (x2, y2)
    let rise = y2 - y1;
    let run = x2 - x1;
    return (rise ** 2 + run ** 2) ** 0.5
}

function getSlope(x1, y1, x2, y2) {
    // Using the Slope Formula figure out the Slope
    let rise = y2 - y1;
    let run = x2 - x1;
    return rise / run;
}

function getDescription(x1, y1, x2, y2) {
    // Using the Slope figure out the Description
    let slope = (y2 - y1) / (x2 - x1);

    if (slope == Infinity || slope == (-Infinity)) {
        return 'vertical';
    } else if (slope < 0) {
        return 'decreasing';
    } else if (slope == 0) {
        return 'horizontal';
    } else if (slope > 0) {
        return 'increasing';
    }
}

function getPointLocation(x1, y1) {
    // Using the points figure out the location for X1 and Y1 in the grid

    if (x1 > 0 && y1 > 0) { // Located in Quadrant 1 
        return 'quadrant 1';
    } else if (x1 < 0 && y1 < 0) { // Located in Quadrant 3
        return 'quadrant 3';
    } else if (x1 < 0 && y1 > 0) { // Located in Quadrant 2
        return 'quadrant 2';
    } else if (x1 > 0 && y1 < 0) { // Located in Quadrant 4
        return 'quadrant 4';
    } else if (x1 == 0 && y1 == 0) { // Located at the Origin
        return 'origin';
    } else if (x1 == 0) { // Located on the Y- Axis
        return 'y - axis';
    } else if (y1 == 0) { // Located on the X- Axis
        return 'x - axis';
    }
}

function getPointLocation(x2, y2) {
    // Using the points figure out the location for X2 and Y2 in the grid

    if (x2 > 0 && y2 > 0) { // Located in Quadrant 1 
        return 'quadrant 1';
    } else if (x2 < 0 && y2 < 0) { // Located in Quadrant 3
        return 'quadrant 3';
    } else if (x2 < 0 && y2 > 0) { // Located in Quadrant 2
        return 'quadrant 2';
    } else if (x2 > 0 && y2 < 0) { // Located in Quadrant 4
        return 'quadrant 4';
    } else if (x2 == 0 && y2 == 0) { // Located at the Origin
        return 'origin';
    } else if (x2 == 0) { // Located on the Y- Axis
        return 'y - axis';
    } else if (y2 == 0) { // Located on the X- Axis
        return 'x - axis';
    }
}
