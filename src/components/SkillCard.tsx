import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SkillProps {
  skill: {
    area: string;
    proficient: string[];
    knowledgeable: string[];
    experienceWith: string[];
  };
}

export function SkillCard({ skill }: SkillProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{skill.area}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {skill.proficient.length > 0 && (
          <div>
            <h4 className="font-semibold text-sm mb-2 text-primary">Proficient</h4>
            <div className="flex flex-wrap gap-2">
              {skill.proficient.map((item, idx) => (
                <span key={idx} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
        {skill.knowledgeable.length > 0 && (
          <div>
            <h4 className="font-semibold text-sm mb-2 text-secondary">Knowledgeable</h4>
            <div className="flex flex-wrap gap-2">
              {skill.knowledgeable.map((item, idx) => (
                <span key={idx} className="px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
        {skill.experienceWith.length > 0 && (
          <div>
            <h4 className="font-semibold text-sm mb-2 text-muted-foreground">Experience With</h4>
            <div className="flex flex-wrap gap-2">
              {skill.experienceWith.map((item, idx) => (
                <span key={idx} className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
