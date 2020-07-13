export const FindMean = (nums) => {
    var sum = nums.reduce((num1, num2) => num1 + num2);
    return sum/nums.length;
}

export const FindMedian  = (nums) => {
    const sorted = nums.sort((a,b) => a-b);
    console.log(sorted)
    
    console.log(nums.length%2)
    const midpoint = Math.ceil(nums.length/2);
    console.log(midpoint)
    return nums.length % 2 === 0 ? (sorted[midpoint] + sorted[midpoint-1]) / 2 : sorted[midpoint-1];
}

export const FindMode = (nums) => {
    const map = {};
    var highestFreq = 0;
    let mode;
    nums.forEach((num) => {
        map[num] = (map[num] || 0) + 1;
        if(highestFreq < map[num]){
            highestFreq = map[num];
            mode = num;
        }
    });
    return mode;
};

export const FindStdDev = (nums) => {
    const mean = FindMean(nums);
    const len = nums.length;
    return Math.sqrt(nums.map(num => Math.pow(parseFloat(num-mean), 2)).reduce((a,b) => a+b) / len);
}