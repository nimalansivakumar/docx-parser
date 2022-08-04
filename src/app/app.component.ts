import { Component } from '@angular/core';
import { DocumentTextResult } from 'src/helper/OutputClass';
import { FileInput } from '../helper/InputClass';
import { ParseFileService } from './services/parse-file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'doc-parser';
  parsedData: any;

  getInput(e: any) {
    let file: File = e.target.files[0];
    let input: FileInput;
    const reader = new FileReader();

    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      let uniCode: Uint8Array = new Uint8Array(reader.result as ArrayBuffer);
      input = new FileInput(file.name, uniCode, file.type);
      this.callService(input);
    };
  }

  callService(input: FileInput) {
    this.parsedData = new ParseFileService().parseFile(input);
    console.log(this.parsedData);
    // let table = this.parsedData.MetaData.table;
    // for (let data in table) {
    //   console.log(data, table[data].key, table[data].value);
    // }
  }
}
