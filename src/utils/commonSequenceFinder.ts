export function commonSequenceTableMaker(
  str1: string,
  str2: string
): number[][] {
  const str1len = str1.length;
  const str2len = str2.length;
  const cst2dArr = new Array(str1len + 1)
    .fill(0)
    .map((_) => new Array(str2len + 1).fill(0));

  for (let i = 0; i < str1len; ++i) {
    for (let j = 0; j < str2len; ++j) {
      if (str1[i] === str2[j]) {
        cst2dArr[i + 1][j + 1] = cst2dArr[i][j] + 1;
      }
    }
  }

  return cst2dArr;
}

export function commonSequenceIndexFinder(cst2dArr: number[][]): {
  str1arr: number[];
  str2arr: number[];
} {
  const str1arr = [];
  const str2arr = [];

  const str1len = cst2dArr.length;
  const str2len = cst2dArr[0].length;

  let k = 1;

  for (let i = 1; i <= str1len; ++i) {
    for (let j = k; j <= str2len; ++j) {
      if (cst2dArr[i][j] > 0) {
        str1arr.push(i - 1);
        str2arr.push(j - 1);
        k++;
        break;
      }
    }
    if (k > str2len) break;
  }

  return { str1arr, str2arr };
}
