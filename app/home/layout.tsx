"use client";
import { AcmeLogo } from "@/assets/icons/AcmeLogo";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = ["Profile", "Dashboard", "Activity", "Log Out"];
  const router = useRouter();
  return (
    <div className="max-h-screen overflow-hidden">
      <Navbar>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">LETHALITY</p>
        </NavbarBrand>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="/login"
              variant="flat"
              onClick={() => {
                if (typeof window != undefined) {
                  localStorage.setItem("login", "false");
                }
              }}
            >
              Logout
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              size="md"
            />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      {children}
    </div>
  );
}
