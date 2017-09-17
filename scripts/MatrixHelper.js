export default class MatrixHelper {

    getEmptyMatrix(x, y) {
        var matrix = [];
        for (var i = 0; i < y; i++) {
            matrix[i] = [];
            for (var j = 0; j < x; j++) {
                matrix[i][j] = 0;
            }
        }
        return matrix;
    }

    getFirst(matrix) {
        return {
            position: {
                x: 0,
                y: 0
            },
            value: matrix[0][0]
        };
    }

    getNext(matrix, currentPosition) {

        let x = currentPosition.x;
        let y = currentPosition.y;
        let columnCount = matrix[0].length;
        let rowCount = matrix.length;

        let nextX = 0;
        let nextY = 0;

        // the next element doesn't exist
        if (x === columnCount - 1 && y === rowCount - 1) {
            return null;
        }

        if (x === columnCount - 1) {
            nextX = 0;
            nextY = y + 1;
        } else {
            nextX = x + 1;
            nextY = y;
        }

        return {
            position: {
                x: nextX,
                y: nextY
            },
            value: matrix[nextY][nextX]
        };
    }

    matrixToArray(matrix) {

        let array = [];
        var matrixHelper = new MatrixHelper();

        var firstElement = matrixHelper.getFirst(matrix);
        array.push(firstElement);

        var nextElement = matrixHelper.getNext(matrix, firstElement.position);

        while (nextElement) {
            array.push(nextElement);
            nextElement = matrixHelper.getNext(matrix, nextElement.position)
        }

        return array;
    }

    arrayToMatrix(array, x, y){
        var matrix = [];
        var arrayIndex = 0;
        for (var i = 0; i < y; i++) {
            matrix[i] = [];
            for (var j = 0; j < x; j++) {
                matrix[i][j] = array[arrayIndex++];
            }
        }
        return matrix;
    }

    updateElement(matrix, element){
        var newMatrix = matrix.slice(0);
        newMatrix[element.position.y][element.position.x] = element.value;
        return newMatrix;
    }


}