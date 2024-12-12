"use client"
import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

type Patient = {
  id: string;
  lastName: string;
  firstName: string;
  age: number;
  gender: string;
  mobile: string;
  birthday: string;
};

export default function Patients() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPatients() {
      try {
        const response = await fetch('/api');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Patient[] = await response.json();
        setPatients(data);
      } catch (error) {
        console.error('Error fetching patient data:', error);
        setError('Failed to fetch patients. Please try again later.');
      }
    }

    fetchPatients();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <main className="px-8">
      <Input placeholder="Search patients..." className="mb-4" />
      <Table>
        <TableCaption>A list of your recent patients.</TableCaption>
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead className="w-[100px]">Patient ID</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Mobile Number</TableHead>
            <TableHead>Birthday</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.map(patient => (
            <TableRow key={patient.id}>
              <TableCell className="font-medium">{patient.id}</TableCell>
              <TableCell>{patient.lastName}</TableCell>
              <TableCell>{patient.firstName}</TableCell>
              <TableCell>{patient.age}</TableCell>
              <TableCell>{patient.gender}</TableCell>
              <TableCell>{patient.mobile}</TableCell>
              <TableCell>{patient.birthday}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}

