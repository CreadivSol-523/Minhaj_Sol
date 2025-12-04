"use client";
import Image from "next/image";
import React, { ReactNode } from "react";
import logo from "../../public/Images/Logo.png";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const MainLayout = ({ children, fixedHead }: { children?: ReactNode; fixedHead?: boolean }) => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white">
      <header className={`${fixedHead ? "absolute top-0 z-50" : ""} border-gray-200 w-full px-85 h-20 flex items-center justify-between `}>
        <Image src={logo} alt="Logo" width={80} height={80} />
        <nav className="hidden lg:flex space-x-6 xl:space-x-8">
          <Link href="/" className="text-sm text-gray-700 hover:text-textBlue transition fontJakartaSemiBold">
            Home
          </Link>
          <Link href="/about-us" className="text-sm text-gray-700 hover:text-textBlue transition fontJakartaSemiBold">
            About
          </Link>
          <Link href="/service/123" className="text-sm text-gray-700 hover:text-textBlue transition fontJakartaSemiBold">
            Services
          </Link>
          <Link href="#" className="text-sm text-gray-700 hover:text-textBlue transition fontJakartaSemiBold">
            Resources ▼
          </Link>
          <Link href="/contact-us" className="text-sm text-gray-700 hover:text-textBlue transition fontJakartaSemiBold">
            Contact
          </Link>
        </nav>
        <Button name="Contact" style={{ paddingBlock: "0.5rem", paddingInline: "2rem" }} onClick={() => router.push("/contact-us")} />
      </header>
      {children}
    </div>
  );
};

export default MainLayout;
