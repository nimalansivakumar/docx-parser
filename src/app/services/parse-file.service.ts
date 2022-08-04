import { Injectable } from '@angular/core';
import { FileInput } from 'src/helper/InputClass';
import { DocumentTextResult } from 'src/helper/OutputClass';
import { Parser } from '../../helper/Parser';

@Injectable({
  providedIn: 'root',
})
export class ParseFileService {
  constructor() {}

  parseFile(input: FileInput): DocumentTextResult {
    let p = new Parser();
    let result = p.ReadFile(input);
    return result;
  }
}
