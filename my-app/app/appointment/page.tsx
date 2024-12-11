import { AppDatePicker } from "@/components/app-date-picker";
import { Button } from "@/components/ui/button";
import { AppAlert } from "@/components/app-alert";

export default function Home() {
  return (
    <main>
      <AppDatePicker />
      <Button>Submit</Button>
      <AppAlert />
    </main>

  );
}