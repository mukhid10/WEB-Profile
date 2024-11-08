import { cn } from "@/lib/utils";
import React from "react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./ui/bentogrid";
import bootstrap from "../img/bootstrap.png";
import taildwin from "../img/taildwin.png";
import node from "../img/nodejs.png";
import express from "../img/express.png";
import react from "../img/react.png";
import reactNative from "../img/reactnative.png";
import next from "../img/next.jpg";
import Image from "next/image";

export function Skills() {
  return (
    <BentoGrid className="w-full mx-auto h-full overflow-x-auto pt-5 pb-5">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          img={item.img}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "React JS",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    img: <Image
    src={react}
    alt="My Image"
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl"
  />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Next JS",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    img: <Image
    src={next}
    alt="My Image"
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-contain"
  />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Bootstrap",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    img: <Image
    src={bootstrap}
    alt="My Image"
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
  />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Taildwind CSS",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    img: <Image
    src={taildwin}
    alt="My Image"
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
  />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Express JS",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    img: <Image
    src={express}
    alt="My Image"
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-fill"
  />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Node JS",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    img: <Image
    src={node}
    alt="My Image"
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
  />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "React Native",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    img: <Image
    src={reactNative}
    alt="My Image"
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
  />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
