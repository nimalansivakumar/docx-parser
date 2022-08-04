import { FileInput } from './InputClass';
import { DocumentTextResult } from './OutputClass';

export interface PPTXReader {
  ReadFile(fileToParse: FileInput): DocumentTextResult;
}
