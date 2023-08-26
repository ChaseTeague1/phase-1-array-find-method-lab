// code your solution here
function superbowlWin(record){
    const result1 = record.find(record => record.result === 'W');
    return !!result1 ? result1.year : undefined;
}