export class FileInput {
  FileName: string;
  FileContent: Uint8Array;
  FileType: string;

  constructor(FileName: string, FileContent: Uint8Array, FileType: string) {
    this.FileName = FileName;
    this.FileContent = FileContent;
    this.FileType = FileType;
  }
}
