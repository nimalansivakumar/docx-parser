import { Result } from './Result';
import * as Collections from 'typescript-collections';

export class DocumentTextResult extends Result {
  ContentType: string;
  ActualText: string | null;
  MetaData: Collections.Dictionary<string, string>;

  constructor(
    Error_Code: number,
    Error_Message: string,
    ContentType: string,
    ActualText: string,
    MetaData: Collections.Dictionary<string, string>
  ) {
    super(Error_Code, Error_Message);

    this.ContentType = ContentType;
    this.ActualText = ActualText;
    this.MetaData = MetaData;
  }
}
