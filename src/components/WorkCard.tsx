import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface WorkProps {
  work: {
    company: string;
    title: string;
    location: {
      city: string;
      state: string;
    };
    duration: {
      start: string;
      end: string;
    };
    description: string;
  };
}

export function WorkCard({ work }: WorkProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{work.company}</CardTitle>
        <CardDescription>
          <div className="space-y-1">
            <div className="font-semibold text-foreground">{work.title}</div>
            <div>
              {work.duration.start} - {work.duration.end}
            </div>
            <div>
              {work.location.city}, {work.location.state}
            </div>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{work.description}</p>
      </CardContent>
    </Card>
  );
}
