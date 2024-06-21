import {
  commonSequenceIndexFinder,
  commonSequenceTableMaker,
} from "../utils/commonSequenceFinder";

export default class StringService {
  compare(str1: string, str2: string): string {
    const cst = commonSequenceTableMaker(str1, str2);
    console.log(6, cst);
    console.log();

    const res = commonSequenceIndexFinder(cst);
    console.log(9, res.str1arr);
    console.log(10, res.str2arr);
    console.log();

    return "abc";
  }
}
