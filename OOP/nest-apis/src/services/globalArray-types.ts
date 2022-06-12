export interface CreateRecordDTO {
  content: object;
  instructions: Instructions;
}

interface Instructions {
  keyName: string;
  overwrite?: boolean;
}

export interface CreatedRecordDTO {
  message: string;
  keyName: string;
  record: CreateRecordDTO;
}

export interface GetRecordDTO {
  data: object;
}
