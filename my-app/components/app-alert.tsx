import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"



export function AppAlert() {
  return (
    <Alert className="w-80">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>You have booked an appointment.</AlertDescription>
    </Alert>
  );
}


