export function commonSequenceTableMaker(
  str1: string,
  str2: string
): number[][] {
  const str1len = str1.length;
  const str2len = str2.length;
  const cst2dArr = new Array(str1len + 1).map((_) =>
    new Array(str2len + 1).fill(0)
  );

  console.log(11, str1len);
  console.log(12, str2len);
  console.log();

  console.log(15, str1);
  console.log(16, str2);
  console.log();

  for (let i = 0; i < str1len; ++i) {
    for (let j = 0; j < str2len; ++j) {
      if (str1[i] === str2[j]) {
        cst2dArr[i + 1][j + 1] = cst2dArr[i][j] + 1;
      }
    }
  }

  return cst2dArr;
}

export function commonSequenceIndexFinder(str2dArr: number[][]): {
  str1arr: number[];
  str2arr: number[];
} {
  const str1arr = [];
  const str2arr = [];

  const str1len = str2dArr.length;
  const str2len = str2dArr[0].length;

  let k = 1;

  for (let i = 1; i <= str1len; ++i) {
    for (let j = k; j <= str2len; ++j) {
      if (str2dArr[i][j] > 0) {
        str1arr.push(i);
        str2arr.push(j);
        k++;
      }
    }
  }

  return { str1arr, str2arr };
}
