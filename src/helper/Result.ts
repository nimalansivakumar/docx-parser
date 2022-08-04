export class Result {
  Error_Code: number;
  Error_Message: string;

  constructor(Error_Code: number, Error_Message: string) {
    (this.Error_Code = Error_Code), (this.Error_Message = Error_Message);
  }
}
