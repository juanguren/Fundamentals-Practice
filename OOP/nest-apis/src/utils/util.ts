import { CreateRecordDTO } from 'src/services/globalArray-types';

export const returnRecordObject = (
  data: object,
  keyName: string,
  overwrite: boolean,
): CreateRecordDTO => ({
  content: { data },
  instructions: {
    keyName,
    overwrite,
  },
});
