import { StringCompareOutput } from "./dto";

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
      } else {
        cst2dArr[i + 1][j + 1] = Math.max(
          cst2dArr[i][j + 1],
          cst2dArr[i + 1][j]
        );
      }
    }
  }

  return cst2dArr;
}

export function commonSequenceIndexFinder(
  cst2dArr: number[][],
  str1: string,
  str2: string
): StringCompareOutput {
  const str1CommonIdxArr = [];
  const str2CommonIdxArr = [];

  // console.log(30, cst2dArr);

  let str1idx = str1.length - 1;
  let str2idx = str2.length - 1;

  while (str1idx >= 0 && str2idx >= 0) {
    if (str1[str1idx] === str2[str2idx]) {
      str1CommonIdxArr.push(str1idx--);
      str2CommonIdxArr.push(str2idx--);
    } else if (
      cst2dArr[str1idx][str2idx + 1] >= cst2dArr[str1idx + 1][str2idx]
    ) {
      str1idx--;
    } else {
      str2idx--;
    }
  }

  str1CommonIdxArr.sort((a, b) => a - b);
  str2CommonIdxArr.sort((a, b) => a - b);

  return { str1CommonIdxArr, str2CommonIdxArr };
}
