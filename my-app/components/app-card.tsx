import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AppCardProps {
  title: string;
  content: string;
  footer: string;
  footerClassName: string;
}

export function AppCard({ title, content, footer, footerClassName }: AppCardProps) {
  return (
    <Card className="w-96 sm:w-72 md:w-80 lg:w-72 xl:w-96">
      <CardHeader>
        <CardTitle className="text-2xl font-normal">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-2xl font-bold">
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <p className={footerClassName}>{footer}</p>
      </CardFooter>
    </Card>
  );
}
