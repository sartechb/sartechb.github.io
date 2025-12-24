import { Button } from "@/components/ui/button";
import {
  EnvelopeIcon,
  ForkKnifeIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";

interface SocialLink {
  name: string;
  url: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

const iconMap: Record<string, React.ReactNode> = {
  Github: <GithubLogoIcon size={18} />,
  Twitter: <XLogoIcon size={18} />,
  LinkedIn: <LinkedinLogoIcon size={18} />,
  Email: <EnvelopeIcon size={18} />,
  Beli: <ForkKnifeIcon size={18} />,
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
