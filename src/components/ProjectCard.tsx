import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GithubLogo } from '@phosphor-icons/react';

interface ProjectProps {
  project: {
    title: string;
    description: string;
    links: Array<{
      title: string;
      href: string;
    }>;
  };
}

export function ProjectCard({ project }: ProjectProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow flex flex-col">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </CardContent>
      <CardFooter className="gap-2">
        {project.links.map((link, idx) => (
          <Button key={idx} variant="outline" size="sm" asChild>
            <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <GithubLogo size={16} />
              {link.title}
            </a>
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
}
