// 8 kyu
// Sum of positive
export function positiveSum(arr:number[]):number 
{
  let output: number = 0; 
  arr.forEach(num => num > 0 && (output += num))
  return output; 
}

// 8 kyu
// Count of positives / sum of negatives
export function countPositivesSumNegatives(input: any): any[] | number[]
{
  if (input === null || input.length ===0) return [];

  let output: number[] = [0, 0];
  for (const num of input) {
    output[0] += Math.max(0, Math.sign(num));
    output[1] += Math.min(0, num);
  }
  return output;
}

// 8 kyu
// Square(n) Sum
export function squareSum(numbers: number[]): number {
  return numbers.reduce((sum, cur) => sum + (cur**2) ,0);
}

// 8 kyu
// Counting sheep...
export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  let output: number = 0;
  let trueSheep: any[] = arrayOfSheep.filter(sheep => sheep === true);
  output = trueSheep.length;
  return output;
}

// 8 kyu
// Convert number to reversed array of digits
export const digitize = (n: number): number[] => {
  let output: number[] = [];
  let strArr: string[] = n.toString().split("");
  let numArr: number[] = strArr.map((x: string) => Number(x));
  output = numArr.reverse();
  return output;
};

// 8 kyu
// A Needle in the Haystack
export function findNeedle(haystack: any[]):string {
  let needleIndex: number = haystack.indexOf('needle')
  return `found the needle at position ${needleIndex}`
}

// 8 kyu
// Beginner - Lost Without a Map
export function maps(x: number[]): number[]{
  return x.map(i => i+i);
}

// Invert values
export function invert(array: number[]): number[] {
  return array.map(x => x*-1);
}

// You only need one - Beginner
export const check = (a: (number | string)[], x: number | string): boolean => {
  return a.includes(x); 
}

// Calculate average
export function findAverage(array: number[]): number {
  let output: number = 0;
  let n: number = array.length; 
  if(n === 0) return 0; 
  
  array.forEach(val => output += val); 
  return output/n;
}

// Fake Binary
export const fakeBin = (x:string):string => {
  let output: string = "";
  for(const numStr of x)
    if(parseInt(numStr) < 5)
      output += '0';
    else 
      output += '1'; 
  
  return output; 
};

// Beginner - Reduce but Grow
export function grow(arr: number[]): number {
  let output: number = arr.reduce((sum,n) => sum*n); 
  return output; 
}

// Sentence Smash
export function smash (words: string[]): string {
  return words.join(' '); 
};

// Convert a string to an array
export function stringToArray(s: string): string[] {
	return s.split(' '); 
}

// Total amount of points
export function points(games : string[]): number {
  let output: number = 0
  for(const score of games) {
    const arr = score.split(":")
    if(Number(arr[0]) > Number(arr[1])) 
      output += 3
    else if (Number(arr[0]) == Number(arr[1])) 
      output += 1
  }

  return output;
}

// Get the mean of an array
export function getAverage(marks:number[]):number{
  let output: number = 0; 
  let n: number = marks.length; 
  marks.forEach(num => output += num);
  output = Math.floor(output/n); 
  return output; 
}

// Sum Mixed Array
export function sumMix(x: any[]): number {
  let nums: number[] = x.map(num => parseInt(num)); 
  return nums.reduce((num, sum) => sum += num, 0); 
}

// Which are in?
export function inArray(a1: string[], a2: string[]): string[] {
  let output: string[] = []; 
  a1 = a1.sort(); 
  for(let i = 0; i < a1.length; i++)
    for(let j = 0; j < a2.length; j++)
      if(a2[j].indexOf(a1[i]) !== -1) {
        output.push(a1[i]);
        break;
      }
  
  return output; 
}

// Count the Monkeys!
export function monkeyCount(n: number) {
  let output: number[] = []; 
  for(let i = 1; i <= n; i++) 
    output.push(i);
  
  return output; 
}