import { FileInput } from './InputClass';
import { DocumentTextResult } from './OutputClass';
import { PPTXReader } from './PPTXReader';
import * as Collections from 'typescript-collections';
import Pizzip  from "pizzip";
import Docxtemplater from 'docxtemplater';


export class Parser implements PPTXReader {
  ReadFile(fileToParse: FileInput): DocumentTextResult {
    let mappedMetaData = new Collections.Dictionary<string , string>;
    mappedMetaData.setValue("file-type" , fileToParse.FileType);
    mappedMetaData.setValue("file-name" , fileToParse.FileName);

    var actualString: string="" , errorMessage : string = "no-error" , errorCode : number = 0;
      console.log(fileToParse.FileContent)
    try{
      
      let zip   = new Pizzip(fileToParse.FileContent);
      let doc =  new Docxtemplater(zip , {
        paragraphLoop :true,
        linebreaks  : true
      })
      doc.render();
       actualString = doc.getFullText();

    }catch(e){
     errorMessage = "Unable to read file"
    }

    let resultClass = new DocumentTextResult(0 , errorMessage , "string", actualString , mappedMetaData);
    return resultClass;
  }
}
