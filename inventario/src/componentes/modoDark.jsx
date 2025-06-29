import { useEffect, useState } from "react";
import { IconSun, IconMoon } from "@tabler/icons-react";

export default function ModoDark() {
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setActivo(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", activo);
    localStorage.theme = activo ? "dark" : "light";
  }, [activo]);

  return (
    <div onClick={() => setActivo(!activo)} className="cursor-pointer  bg-clip-text color-secundario font-bold">
      {activo ? <IconSun stroke={2} size={40}  className=" aparecer text-amber-300"/> : <IconMoon stroke={2} size={40} className="aparecer"/>}
    </div>
  );
}
