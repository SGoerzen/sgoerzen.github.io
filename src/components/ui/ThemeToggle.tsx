import * as React from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<"light" | "dark" | "system">(
    () => {
      if (typeof window === "undefined") return "system";
      try {
        const storedTheme = localStorage.getItem("theme");
        return storedTheme === "light" || storedTheme === "dark"
          ? storedTheme
          : "system";
      } catch {
        return "system";
      }
    },
  );

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
  }, [theme]);

  const onChangeTheme = (theme: "light" | "dark" | "system") => {
    setThemeState(theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // The selected theme still applies for the current page.
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => onChangeTheme("light")}>
          Hell
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onChangeTheme("dark")}>
          Dunkel
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onChangeTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
