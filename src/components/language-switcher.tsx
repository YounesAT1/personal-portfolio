import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "./ui/tooltip";
import { DockIcon } from "./magicui/dock";
import ReactCountryFlag from "react-country-flag";
import { useLanguage } from "@/context/language-context";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const countryCode = language === "en" ? "US" : "FR";

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div onClick={toggleLanguage}>
          <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
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
