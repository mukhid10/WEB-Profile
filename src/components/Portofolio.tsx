"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./ui/portoClick";
import amo from "../img/amo1.jpg";
import odslogin from "../img/odslogin.jpg";
import tpn from "../img/tpn.jpg";

export function Porto() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <div className="max-w-7xl md:ml-28 py-16 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Portofolio
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-lg">
          Some of my portfolios during my career as a WEB Developer both as a FrontEnd and BackEnd Developer.
        </p>
      </div>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-fill object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    // href={active.ctaLink == '' ? '/' : active.ctaLink}
                    target="_blank"
                    className={active.ctaText == "Active" ? "px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white" : "px-4 py-3 text-sm rounded-full font-bold bg-gray-600 text-white"}
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-contain object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-gray-600 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaTextList}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Online digital and settlement",
    title: "Odissey",
    src: odslogin,
    ctaText: "Active",
    ctaTextList: "Details",
    ctaLink: "https://odissey-staging.digipart.id/",
    content: () => {
      return (
        <p>
          I work at PT Telkom Indonesia as a frontend WEB Developer, at Telkom I develop WEB features called Odissey (Online Digital Settlement) using React JS and other supporting libraries to accommodate the needs of Odissey users. In developing Odissey features, I enjoy collaborating with other competent Telkom talents in their fields such as UI/UX Design, QA Engineer, Backend Developer, and Odissey users of course. During my time developing Odissey, I gained a lot of valuable experience and supported the development of my potential.
        </p>
      );
    },
  },
  {
    description: "Telkom Partner Network",
    title: "TPN",
    src: tpn,
    ctaText: "Active",
    ctaTextList: "Details",
    ctaLink: "https://partner.telkom.co.id/",
    content: () => {
      return (
        <p>
          In the TPN (Telkom Partner Network) Application, in Telkom I only help develop Telkom Partner WEB features using react js and other supporting libraries to accommodate the needs of Telkom Partner users. In developing Telkom Partner Network features, I enjoy collaborating with other competent Telkom talents in their fields such as UI/UX Design, QA Engineer, Backend Developer, and Telkom Partner Network users of course.
        </p>
      );
    },
  },
  {
    description: "Amospa Bali FrontEnd WEB",
    title: "Amospa FE",
    src: amo,
    ctaText: "Inactive",
    ctaTextList: "Details",
    ctaLink: '',
    content: () => {
      return (
        <p>
          In the amospa project I was trusted to develop the Fullstack WEB Developer project myself without collaborating with the team. I developed Amospa Using React JS and other supporting libraries for the Frontend section and using NodeJS ExpressJS and other supporting libraries for the Backend section, in working on this project I was quite happy because it was challenging and able to accommodate all reuirment.
        </p>
      );
    },
  },
  {
    description: "Amospa Bali BackEnd WEB (API)",
    title: "Amospa BE",
    src: amo,
    ctaText: "Inactive",
    ctaTextList: "Details",
    ctaLink: '',
    content: () => {
      return (
        <p>
          In the amospa project I was trusted to develop the Fullstack WEB Developer project myself without collaborating with the team. I developed Amospa Using React JS and other supporting libraries for the Frontend section and using NodeJS ExpressJS and other supporting libraries for the Backend section, in working on this project I was quite happy because it was challenging and able to accommodate all reuirment.
        </p>
      );
    },
  },
];
