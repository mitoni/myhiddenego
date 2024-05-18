"use client";

import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const combinations = [
  {
    color: "#f0298c",
    backgroundColor: "#46b0fe",
  },
  {
    color: "#46b0fe",
    backgroundColor: "#fad70c",
  },
  {
    color: "#fad70c",
    backgroundColor: "#f0298c",
  },
];

function Menu() {
  const dot = React.useRef<HTMLDivElement>(null);
  const hover = React.useRef<HTMLElement>(null!);

  const [isOpen, setOpen] = React.useState(false);

  const handlePointerMove = React.useCallback((event: React.PointerEvent) => {
    if (!dot.current) return;

    const target = event.target as HTMLElement;

    if (!target.getAttribute("data-m-item")) return;

    if (target == hover.current) {
      return;
    }

    if (hover.current) {
      hover.current.style.color = "#ffffff";
    }

    const ci = Math.floor(Math.random() * combinations.length);
    const combination = combinations[ci];
    target.style.color = combination.color;
    dot.current.style.backgroundColor = combination.backgroundColor;

    hover.current = target;
  }, []);

  return (
    <>
      <a
        className="fixed top-[2rem] right-[2rem] w-10 h-10 flex justify-center items-center rounded-full bg-white z-40"
        onMouseDown={() => setOpen(!isOpen)}
      >
        <IoMenu className="z-40" />

        <div
          ref={dot}
          className="absolute inset bg-[#1d1d1b] rounded-full pointer-events-none z-30"
          style={{
            transitionProperty: "width, height, background-color",
            transitionDuration: "1s, 1s, 150ms",
            transitionTimingFunction: "cubic-bezier(0.87, 0, 0.13, 1)",
            width: isOpen ? "400vh" : "0px",
            height: isOpen ? "400vh" : "0px",
          }}
        />
      </a>

      <div
        className="fixed inset-0 flex flex-col justify-between items-center p-16 z-40 text-white pointer-events-none"
        style={{ visibility: isOpen ? "visible" : "hidden" }}
      >
        <div
          className="flex flex-1 flex-col justify-center items-center gap-4 pointer-events-auto"
          onPointerMove={handlePointerMove}
        >
          <a
            data-m-item
            className="text-5xl font-semibold"
            style={{
              transitionProperty: "color",
              transitionDuration: "150ms",
              transitionTimingFunction: "cubic-bezier(0.87, 0, 0.13, 1)",
            }}
          >
            Home
          </a>
          <a
            data-m-item
            className="text-5xl font-semibold"
            style={{
              transitionProperty: "color",
              transitionDuration: "150ms",
              transitionTimingFunction: "cubic-bezier(0.87, 0, 0.13, 1)",
            }}
          >
            Art Therapy
          </a>
          <a
            data-m-item
            className="text-5xl font-semibold"
            style={{
              transitionProperty: "color",
              transitionDuration: "150ms",
              transitionTimingFunction: "cubic-bezier(0.87, 0, 0.13, 1)",
            }}
          >
            About Us
          </a>
          <a
            data-m-item
            className="text-5xl font-semibold"
            style={{
              transitionProperty: "color",
              transitionDuration: "150ms",
              transitionTimingFunction: "cubic-bezier(0.87, 0, 0.13, 1)",
            }}
          >
            Contacts
          </a>
        </div>

        <div className="flex-grow-1 flex flex-row pointer-events-auto">
          <FaFacebook />
          <FaTiktok />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
    </>
  );
}

export { Menu };
