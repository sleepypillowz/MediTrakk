import { NextResponse } from 'next/server';

type Patient = {
  id: string;
  lastName: string;
  firstName: string;
  age: number;
  gender: string;
  mobile: string;
  birthday: string;
};

const patients: Patient[] = [
  { id: '001', lastName: 'Doe', firstName: 'John', age: 45, gender: 'Male', mobile: '09691234567', birthday: '1979-09-11' },
  { id: '002', lastName: 'Smith', firstName: 'Jane', age: 32, gender: 'Female', mobile: '09697654321', birthday: '1991-03-24' },
];

export async function GET() {
  return NextResponse.json(patients);
}