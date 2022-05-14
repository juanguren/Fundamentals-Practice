export interface CreateRecordDTO {
  content: object;
  instructions: Instructions;
}

interface Instructions {
  keyName: string;
  overwrite?: boolean;
}

export interface GetRecordDTO {
  data: object;
}
