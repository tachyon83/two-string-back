import {
  commonSequenceIndexFinder,
  commonSequenceTableMaker,
} from "../utils/commonSequenceFinder";
import { StringCompareOutput } from "../utils/dto";

export default class StringService {
  compare(str1: string, str2: string): StringCompareOutput {
    return commonSequenceIndexFinder(
      commonSequenceTableMaker(str1, str2),
      str1,
      str2
    );
  }
}
