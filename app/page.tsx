"use client";

import Head from "next/head";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button,
  DarkThemeToggle,
} from "flowbite-react";

import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Byron Inc.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <Navbar fluid rounded className="bg-gray-50 shadow-md">
        <NavbarBrand href="/">
          <Image
            src="/images/logo-eng.png"
            width={180}
            height={40}
            alt="Byron Logo"
          />
        </NavbarBrand>
        <div className="flex md:order-2">
          <Button>Contact</Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="#" active>
            Home
          </NavbarLink>
          <NavbarLink href="#services">Services</NavbarLink>
          <NavbarLink href="#about">About Us</NavbarLink>
        </NavbarCollapse>
      </Navbar>

      <section
        className="flex h-[60vh] items-center justify-center bg-cover bg-center text-4xl font-bold text-white"
        style={{ backgroundImage: "url(/images/showcase_bg2.jpg)" }}
      >
        Creating the Future of Business
      </section>

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

      <footer className="bg-gray-800 py-6 text-center text-white">
        © Byron Inc. All Rights Reserved.
      </footer>
    </>
  );
}
