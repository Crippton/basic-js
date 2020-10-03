function countCats(matrix) {
    let result = 0;
    let temp = [];

    matrix.forEach(element => {
        temp = temp.concat(element);
        });

    temp.forEach(element => {
        if (element === '^^') {
            result += 1;
    }
});
    console.log(matrix);
    console.log(temp);

    console.log(result);
    return result;
};

countCats([
    ['##1', 'dd', '00'],
    ['^^', '..', 'ss'],
    ['AA', 'dd', 'Oo']
]);