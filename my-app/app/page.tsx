import { AppCard } from "@/components/app-card";
import { AppBarChartMixed } from "@/components/bar-chart-mixed";

const cardsData = [
  { title: "Total Patient", description: "Description 1", content: "84", footer: "↓ -17.65% Since last week", footerClassName: "text-red-700" },
  { title: "Today's Appointment", description: "Description 2", content: "4", footer: "Next Appointment - 10:00 AM", footerClassName: "text-slate-700" },
  { title: "Patient Request", description: "Description 3", content: "10", footer: "+2 Appointment", footerClassName: "text-green-700" },
  { title: "Inventory Updates", description: "Description 4", content: "84", footer: "↓ -17.65% Since last week", footerClassName: "text-red-700" },
];

export default function Home() {
  return (
    <>

      <main className="px-8">
        <div className="py-4">
          <p className="text-2xl font-bold">Good Day, Juan</p>
          <p>Check out the latest updates from the past 7 days!</p>
        </div>
        <div className="grid grid-cols-1 justify-items-center gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:pl-20 2xl:flex 2xl:flex-row">
          {cardsData.map((card, index) => (
            <AppCard
              key={index}
              title={card.title}
              content={card.content}
              footer={card.footer}
              footerClassName={card.footerClassName}
            />
          ))}
        </div>
        <div className="flex justify-center sm:justify-end">
          <AppBarChartMixed />
        </div>

      </main>
    </>
  );
}
