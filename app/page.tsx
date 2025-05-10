"use client";

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Byron Inc.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      {/* Navbar */}
      <nav className="relative bg-gray-700 text-white shadow-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="/" className="flex items-center">
            <Image
              src="/images/logo-eng.png"
              width={180}
              height={40}
              alt="Byron Logo"
              unoptimized
            />
          </a>
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute top-full right-0 left-0 z-10 w-full md:static md:block md:w-auto`}
          >
            <ul className="flex flex-col space-y-2 bg-gray-700 p-4 text-center md:flex-row md:space-y-0 md:space-x-6 md:p-0">
              <li>
                <a href="#" className="hover:text-green-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-green-400">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Showcase */}
      <section
        className="flex h-[60vh] items-center justify-center bg-cover bg-center text-4xl font-bold text-white"
        style={{ backgroundImage: "url(/images/showcase_bg2.jpg)" }}
      >
        Creating the Future of Business
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-10 text-center text-3xl font-bold">Services</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <ul className="space-y-4">
            <li className="rounded border p-4 shadow">
              System Development & Maintenance
            </li>
            <li className="rounded border p-4 shadow">
              In-house Service Planning & Operation
            </li>
            <li className="rounded border p-4 shadow">
              Web Development Support
            </li>
          </ul>
          <ul className="space-y-4">
            <li className="rounded border p-4 shadow">
              DX & AI Implementation Support
            </li>
            <li className="rounded border p-4 shadow">IT Consulting</li>
            <li className="rounded border p-4 shadow">DX Consulting</li>
            <li className="rounded border p-4 shadow">Website Development</li>
            <li className="rounded border p-4 shadow">
              E-commerce Development
            </li>
          </ul>
          <ul className="space-y-4">
            <li className="rounded border p-4 shadow">
              Matcha Sourcing & Sales in Australia
            </li>
          </ul>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="mb-6 text-center text-3xl font-bold">About Us</h2>
        <p className="text-lg leading-8 text-gray-700">
          Byron Inc. is a Japan-based company delivering digital solutions to
          help businesses grow. We specialize in web and system development, IT
          consulting, DX support, and matcha sales in Australia. With a flexible
          and multilingual approach, we aim to connect cultures and drive
          innovation for a better future.
        </p>
      </section>

      <footer className="bg-gray-700 py-10 text-center text-sm text-white">
        <div className="space-y-2">
          <p>© Byron Inc. All Rights Reserved.</p>
          <p>Founder & CEO: Ryotaro (Ryan) Hyodo</p>
          <p>
            Email:{" "}
            <a href="mailto:inc@byron.co.jp" className="underline">
              inc@byron.co.jp
            </a>
          </p>
          <p>Locations: Ehime, Japan / Cairns, Australia</p>
        </div>
      </footer>
    </>
  );
}
