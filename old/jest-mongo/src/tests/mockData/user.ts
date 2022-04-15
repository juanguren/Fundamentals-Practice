
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

export const mockResponse
 : Array<object> = 
 [
    {
        "code": fk.datatype.uuid(),
        "name": fk.name.findName(),
        "age": fkAge,
        "income": fk.datatype.number()*10,
        "admin": false,
        "professionType": Number(fkAge) > 65 ? 'RETIRED' : 'PROFESSIONAL'
    },
    {
        "code": fk.datatype.uuid(),
        "name": fk.name.findName(),
        "age": fkAge,
        "income": fk.datatype.number()*10,
        "admin": false,
        "professionType": Number(fkAge) > 65 ? 'RETIRED' : 'PROFESSIONAL'
    }
];

export const mockResponseById = {
    "professionType": "PROFESSIONAL",
    "_id": "6060fecd4d26aa40ec1df90d",
    "code": "KJ8",
    "name": "Juan",
    "age": "25",
    "income": 95300,
    "admin": true,
    "__v": 0
}

export const faultyUser = {
    "code": fk.datatype.uuid(),
    "name": fk.name.findName(),
    "age": fkAge,
    "income": fk.datatype.number()*10,
    "professionType": Number(fkAge) > 65 ? 'RETIRED' : 'PROFESSIONAL'
}

