import { commonSequenceTableMaker } from "../utils/commonSequenceFinder";

export default class StringService {
  compare(str1: string, str2: string): string {
    console.log(commonSequenceTableMaker(str1, str2));
    return "abc";
  }
}
