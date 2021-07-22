import { Fragment } from "react";
import { Popover, Menu, Transition } from "@headlessui/react";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/outline";

const navigation = [
  // { name: "Home", href: "#", current: true },

  { name: "HOME", href: "#Home", current: false },
  { name: "ABOUT", href: "#About", current: false },
  { name: "WORK", href: "#Work", current: false },
  { name: "CONTACT", href: "#Contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  return (
    <Popover as="nav" className="top-0 z-50 bg-transparent">
      {({ open }) => (
        <>
          <div className="p-2 mx-auto ml-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-10">
              <div className="absolute flex items-center justify-end right-2 sm:hidden">
                {/* Mobile menu button*/}
                <Popover.Button className="inline-flex items-center justify-center hover:text-mybeige focus:outline-none">
                  <span className="sr-only">Open main menu</span>

                  <MenuAlt2Icon
                    className="self-end block w-8 h-8 text-mybeige"
                    aria-hidden="true"
                  />
                </Popover.Button>
              </div>

              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-myorange text-mybeige"
                          : "text-mybeige  hover:text-myorange",
                        "px-3 py-2  text-xs font-extrabold tracking-wide font-headline hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out transform"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Popover.Panel
            className={`${
              open
                ? "z-50 opacity-100 fixed inset-0 overflow-hidden"
                : "opacity-0"
            } bg-myorange animate-fade-in-down `}
          >
            <div className="inset-y-0 flex justify-end mt-4 mr-4 sm:hidden">
              <Popover.Button className="inline-flex items-center justify-center hover:text-mybeige focus:outline-none ">
                <XIcon
                  className="block w-8 h-8 text-mybeige"
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>
            <div className="flex flex-col items-center justify-center px-2 pt-2 pb-3 space-y-1 ">
              {navigation.map((item) => (
                <Popover.Button
                  className="mt-24 animate-fade-in-down "
                  onClick={() => (open = false)}
                >
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-myorange text-myblue"
                        : "text-mybeige  hover:text-myblue",
                      "block px-3 py-6  text-2xl font-extrabold font-headline tracking-wide "
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                </Popover.Button>
              ))}
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
