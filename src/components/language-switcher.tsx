"use client";

import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "./ui/tooltip";
import { DockIcon } from "./magicui/dock";
import ReactCountryFlag from "react-country-flag";
import { useLanguage } from "@/context/language-context";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();

  const countryCode = language === "en" ? "US" : "FR";

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <Tooltip>
      <TooltipTrigger>
        <div onClick={toggleLanguage}>
          <DockIcon className="rounded-3xl size-full bg-background p-0 text-muted-foreground backdrop-blur-3xl border border-border transition-colors hover:text-foreground hover:bg-muted cursor-pointer">
            <ReactCountryFlag
              countryCode={countryCode}
              svg
              style={{ width: "1.5em", height: "1.5em" }}
              suppressHydrationWarning
              
            />
          </DockIcon>
        </div>
      </TooltipTrigger>

      <TooltipContent side="top" sideOffset={8}>
        <p>{language === "en" ? "English" : "Français"}</p>
        <TooltipArrow />
      </TooltipContent>
    </Tooltip>
  );
}
