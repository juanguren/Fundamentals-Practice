
import * as fk from 'faker';

const fkAge = (fk.datatype.number().toString()).substring(0,2);

export const mockUser = {
    "code": fk.datatype.uuid(),
    "name": fk.name.findName(),
    "age": fkAge,
    "income": fk.datatype.number()*10,
    "admin": false,
    "professionType": Number(fkAge) > 65 ? 'RETIRED' : 'PROFESSIONAL'
}