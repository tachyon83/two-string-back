export function commonSequenceTableMaker(str1: string, str2: string) {
  const str1len = str1.length;
  const str2len = str2.length;
  const cst2dArr = new Array(str1len + 1).map((_) =>
    new Array(str2len + 1).fill(0)
  );
  for (let i = 0; i < str1len; ++i) {
    for (let j = 0; j < str2len; ++j) {
      if (str1[i] === str2[j]) {
        cst2dArr[i + 1][j + 1] = cst2dArr[i][j] + 1;
      }
    }
  }

  return cst2dArr;
}
