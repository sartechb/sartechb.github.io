import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MonitorIcon, MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setThemeState] = useState<"light" | "dark" | "system">(
    "system",
  );

  useEffect(() => {
    // Get initial theme from localStorage or default to system
    const savedTheme = localStorage.theme;
    if (savedTheme === "dark" || savedTheme === "light") {
      setThemeState(savedTheme);
    } else {
      setThemeState("system");
    }
  }, []);

  const setTheme = (newTheme: string) => {
    if (newTheme !== "light" && newTheme !== "dark" && newTheme !== "system") {
      return;
    }
    setThemeState(newTheme);

    if (newTheme === "system") {
      localStorage.removeItem("theme");
      // Apply system preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else if (newTheme === "dark") {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="ml-4">
          <SunIcon
            size={20}
            className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <MoonIcon
            size={20}
            className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          <DropdownMenuRadioItem value="light">
            <SunIcon size={16} className="mr-2" />
            Light
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">
            <MoonIcon size={16} className="mr-2" />
            Dark
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">
            <MonitorIcon size={16} className="mr-2" />
            System
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
