import { AppCard } from "@/components/app-card";

const cardsData = [
  { title: "Total Patient", description: "Description 1", content: "84", footer: "↓ -17.65% Since last week" },
  { title: "Today's Appointment", description: "Description 2", content: "4", footer: "Next Appointment - 10:00 AM" },
  { title: "Patient Request", description: "Description 3", content: "10", footer: "+2 Appointment" },
  { title: "Inventory Updates", description: "Description 4", content: "84", footer: "↓ -17.65% Since last week" },
];

export default function Home() {
  return (
    <>

      <main className="px-4">
        <p className="text-2xl font-bold">Good Day, Juan</p>
        <p>Check out the latest updates from the past 7 days!</p>
        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-2 2xl:flex 2xl:flex-row 2xl:gap-x-8">
          {cardsData.map((card, index) => (
            <AppCard
              key={index}
              title={card.title}
              content={card.content}
              footer={card.footer}
            />
          ))}
        </div>
      </main>
    </>




  );
}
