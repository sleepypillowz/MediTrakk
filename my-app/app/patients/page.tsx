import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="px-8">
      <Input />
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
          <TableRow>
            <TableCell className="font-medium">001</TableCell>
            <TableCell>Doe</TableCell>
            <TableCell>John</TableCell>
            <TableCell>45</TableCell>
            <TableCell>Male</TableCell>
            <TableCell>09691234567</TableCell>
            <TableCell>1979-09-11</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}