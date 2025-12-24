import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ListIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Projects", href: "/projects" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <ListIcon size={24} />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-4 pt-4 border-t">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
