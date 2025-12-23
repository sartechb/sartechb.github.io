import { GithubLogo, XLogo, LinkedinLogo, Envelope } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';

interface SocialLink {
  name: string;
  url: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

const iconMap: Record<string, React.ReactNode> = {
  Github: <GithubLogo size={18} />,
  Twitter: <XLogo size={18} />,
  LinkedIn: <LinkedinLogo size={18} />,
  Email: <Envelope size={18} />,
};

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <Button key={link.name} variant="outline" asChild>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            {iconMap[link.name]}
            <span>{link.name}</span>
          </a>
        </Button>
      ))}
    </div>
  );
}
