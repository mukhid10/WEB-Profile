import React from "react";
import {
  IconSitemap,
  IconDeviceLaptop,
  IconTerminal2, IconUser
} from "@tabler/icons-react";
import { FloatingDock } from "./floatingDock";

export function FloatingDockComponent() {
  const links = [
    {
      title: "About me",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Experience",
      icon: (
        <IconSitemap className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Portofolio",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Tech Stack",
      icon: (
        <IconDeviceLaptop className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center">
      <FloatingDock
        // mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}
