export class User {
  userId!: number;
  name!: string;
  surname!: string;
  email!: string;
  birthdate!: Date;
  education!: number;

}

export enum EducationLevel {
  Infantil = 0,
  Fundamental = 1,
  Médio = 2,
  Superior = 3
}
