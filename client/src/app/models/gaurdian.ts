import { User } from './user';

export interface Gaurdian extends User {

    relation: string;
    student: string;
}
