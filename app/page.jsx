"use client";
import Image from "next/image";
import profile_photo from "./assets/images/profile_photo.png";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ChangeLanguage from "./components/change-language";
import { useLanguage } from "./hooks/useLanguage";
import { text } from "./util/text";

const links = [
  {
    url: "home",
    text: "Home",
  },
  {
    url: "about",
    text: "About",
  },
  {
    url: "skills",
    text: "Skills",
  },
  {
    url: "portfolio",
    text: "Portfolio",
  },
  {
    url: "contact",
    text: "Contact",
  },
];

export default function Main() {
  const [openModal, setOpenModal] = useState(false);
  const { language } = useLanguage();

  function closeMenu() {
    setOpenModal(false);
  }

  function openMenu() {
    setOpenModal(true);
  }

  return (
    <>
      <div className="container mx-auto max-w-screen-xl px-4 2xl:px-0">
        <nav className="w-full">
          <ul className="w-full hidden md:flex justify-between font-bold text-lg py-6 border-b-2 ">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
          <div className="flex md:hidden justify-end py-4 relative z-50">
            {openModal ? (
              <button onClick={closeMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            ) : (
              <button onClick={openMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </button>
            )}
          </div>
        </nav>
        <section className="py-20 flex flex-col gap-6">
          <div className="flex items-end justify-between w-full prose">
            <p className="text-3xl md:text-5xl font-bold">
              {text.name[language]} <br /> {text.lastname[language]}
            </p>

            <p
              className="text-xl"
              dangerouslySetInnerHTML={{ __html: text.short_bio[language] }}
            ></p>

            <ChangeLanguage />
          </div>
          <Image
            src={profile_photo}
            className="w-full h-full hidden md:block"
            alt="image"
          />
          <Image
            src={profile_photo}
            className="w-full h-full block md:hidden"
            alt="image"
          />
        </section>
      </div>
      <Transition appear show={openModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden"
          onClose={closeMenu}
        >
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out  transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out  transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto min-h-screen bg-transparent w-full h-screen">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-200 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-500 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-full h-full bg-white/70 relative p-4">
                <Dialog.Panel>hi</Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
