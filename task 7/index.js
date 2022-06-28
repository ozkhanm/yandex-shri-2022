function solution (n, width, height) {
    const result = [];
    const heightWidthCoeff = height / width;
    const columnsNumber = Math.ceil(Math.sqrt(n));
    const rowsNumber = Math.ceil(n / columnsNumber);
    const videoWidth = Math.round(width / columnsNumber);
    const videoHeight = Math.round(videoWidth * heightWidthCoeff);
    const verticalMargin = (height - (videoHeight * rowsNumber)) / 2;
    const firstRowColumnsNumber = n % columnsNumber !== 0 ? n % columnsNumber : columnsNumber;
    let horizontalMargin = 0;

    for (let i = 0; i < rowsNumber; i++) {
        if (((i + 1) === 1) && (firstRowColumnsNumber !== 0)) {
            horizontalMargin = (width - (firstRowColumnsNumber * videoWidth)) / 2;
        } else {
            horizontalMargin = 0;
        }

        for (let j = 0; j < columnsNumber; j++) {
            if ((i === 0) && (j >= firstRowColumnsNumber) && (firstRowColumnsNumber !== columnsNumber)) {
                continue;
            }

            let x = j * videoWidth;
            let y = i * videoHeight;

            if (verticalMargin > 0) {
                y += verticalMargin;
            }

            if ((horizontalMargin > 0) && ((i + 1) === 1)) {
                x += horizontalMargin;
            }

            result.push({
                width: videoWidth,
                height: videoHeight,
                x,
                y,
            });
        }
    }

    return result;
};

console.log(solution(1, 1200, 800));
console.log(solution(2, 1200, 800));
console.log(solution(3, 1200, 800));
console.log(solution(4, 1200, 800));
console.log(solution(5, 1200, 800));
console.log(solution(6, 1200, 800));
console.log(solution(7, 1200, 800));
console.log(solution(8, 1200, 800));
console.log(solution(9, 1200, 800));