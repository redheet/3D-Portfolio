import React, { Fragment } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { Container } from "../layout/Container";
import { Logo } from "../layout/Logo";
import { NavLink } from "../layout/NavLink";
import DarkNight from "../DarkNight";
import ChangeLanguages from "../../languages/ChangeLanguages";
import { useTranslation } from "react-i18next";

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  );
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0"
        )}
      />
    </svg>
  );
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [8:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigtaion"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ducation-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#">Home</MobileNavLink>
            <MobileNavLink href="#">About</MobileNavLink>
            <MobileNavLink href="#">Team</MobileNavLink>
            {/* <hr className="m-2 border-slate-300/40" /> */}
            <MobileNavLink href="#">Contact</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="sticky z-10 top-0 py-4 bg-base-100">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="#">{t("Home")}</NavLink>
              <NavLink href="#">{t("About")}</NavLink>
              <NavLink href="#">{t("Team")}</NavLink>
              <NavLink href="#">{t("Contact")}</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink href="/">Sign in</NavLink>
            </div>
            {/* <Menu /> */}

            <ChangeLanguages />
            <DarkNight />
            {/* <Button href="/" color="blue">
            </Button> */}
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
