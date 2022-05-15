import { CreateRecordDTO } from 'src/services/globalArray-types';

export const returnRecordObject = (
  data: object,
  keyName: string,
): CreateRecordDTO => ({
  content: { data },
  instructions: {
    keyName,
  },
});
