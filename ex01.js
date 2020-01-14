Array.prototype.removeNum = async function (num) {
    return this.filter(e=>e!==num);
};
console.log('Start');
[1, 3, 4, 2, 1, 5].removeNum(1).then(console.log);
console.log('Finish');

// removeNum is async function and when line 5 is executed it will place then function in macro queue
// after 'Start' and 'Finish' printed then event loop will check macro queue and prints array to console.