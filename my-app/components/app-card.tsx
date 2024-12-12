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
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <p className={footerClassName}>{footer}</p>
      </CardFooter>
    </Card>
  );
}
