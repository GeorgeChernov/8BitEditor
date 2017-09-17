import MatrixHelper from '../scripts/MatrixHelper'

const matrix = [
    [1, 0, 0],
    [0, 1, 1],
    [1, 0, 1]
];

test('MatrixHelper getEmptyMatrix - correct number of columns and rows', () => {

    const x = 2;
    const y = 2;

    var emptyMatrix = new MatrixHelper().getEmptyMatrix(x, y);

    expect(emptyMatrix.length).toBe(2);
    expect(emptyMatrix[0].length).toBe(2);
    expect(emptyMatrix[1].length).toBe(2);
});

test('MatrixHelper getEmptyMatrix - all elements equal 0', () => {

    const x = 2;
    const y = 2;

    var emptyMatrix = new MatrixHelper().getEmptyMatrix(x, y);

    expect(emptyMatrix[0][0]).toBe(0);
    expect(emptyMatrix[0][1]).toBe(0);
    expect(emptyMatrix[1][0]).toBe(0);
    expect(emptyMatrix[1][1]).toBe(0);
});

test('MatrixHelper getNext - move to a next element in a row', () => {

    const currentPosition = {
        x: 1,
        y: 0
    }

    var element = new MatrixHelper().getNext(matrix, currentPosition);

    expect(element.position.x).toBe(2);
    expect(element.position.y).toBe(0);
    expect(element.value).toBe(0);
});

test('MatrixHelper getNext - move to a next row', () => {

    const currentPosition = {
        x: 2,
        y: 0
    }

    var element = new MatrixHelper().getNext(matrix, currentPosition);

    expect(element.position.x).toBe(0);
    expect(element.position.y).toBe(1);
    expect(element.value).toBe(0);
});

test('MatrixHelper getNext - currentElement is the latest one', () => {

    const currentPosition = {
        x: 2,
        y: 2
    }

    var element = new MatrixHelper().getNext(matrix, currentPosition);

    expect(element).toBeNull();
});

test('MatrixHelper getFirst - correct first element', () => {

    var element = new MatrixHelper().getFirst(matrix);

    expect(element.position.x).toBe(0);
    expect(element.position.y).toBe(0);
    expect(element.value).toBe(1);
});

test('MatrixHelper getAsErray - correct positions and values', () => {

    var array = new MatrixHelper().matrixToArray(matrix);

    // row 0
    expect(array[0].position.x).toBe(0);
    expect(array[0].position.y).toBe(0);
    expect(array[0].value).toBe(1);

    expect(array[1].position.x).toBe(1);
    expect(array[1].position.y).toBe(0);
    expect(array[1].value).toBe(0);

    expect(array[2].position.x).toBe(2);
    expect(array[2].position.y).toBe(0);
    expect(array[2].value).toBe(0);

    // row 1
    expect(array[3].position.x).toBe(0);
    expect(array[3].position.y).toBe(1);
    expect(array[3].value).toBe(0);

    expect(array[4].position.x).toBe(1);
    expect(array[4].position.y).toBe(1);
    expect(array[4].value).toBe(1);

    expect(array[5].position.x).toBe(2);
    expect(array[5].position.y).toBe(1);
    expect(array[5].value).toBe(1);

    // row 2
    expect(array[6].position.x).toBe(0);
    expect(array[6].position.y).toBe(2);
    expect(array[6].value).toBe(1);

    expect(array[7].position.x).toBe(1);
    expect(array[7].position.y).toBe(2);
    expect(array[7].value).toBe(0);

    expect(array[8].position.x).toBe(2);
    expect(array[8].position.y).toBe(2);
    expect(array[8].value).toBe(1);
});

test('MatrixHelper updateElement', () => {

    var element = {
        position: {
            x: 2,
            y: 0
        },
        value: 1
    };
    var matrixHelper = new MatrixHelper();

    expect(matrix[element.position.y][element.position.x]).toBe(0);

    var newMatrix = matrixHelper.updateElement(matrix, element);

    expect(newMatrix[element.position.y][element.position.x]).toBe(1);
});

test('MatrixHelper updateElement', () => {

    var array = [1, 0, 1, 1, 0, 0];
    var matrixHelper = new MatrixHelper();
    var newMatrix = matrixHelper.arrayToMatrix(array, 3, 2);

    expect(newMatrix[0][0]).toBe(1);
    expect(newMatrix[0][1]).toBe(0);
    expect(newMatrix[0][2]).toBe(1);

    expect(newMatrix[1][0]).toBe(1);
    expect(newMatrix[1][1]).toBe(0);
    expect(newMatrix[1][2]).toBe(0);
});