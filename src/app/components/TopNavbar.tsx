import Link from "next/link";
import React from "react";
import { Home, Clock, LogIn } from "lucide-react";

interface TopNavbarProps {
  currentPage?: "home" | "lunchtime" | "login";
}

export default function TopNavbar({ currentPage }: TopNavbarProps) {
  const navItems = [
    {
      name: "Home",
      href: "/home",
      icon: Home,
      key: "home" as const
    },
    {
      name: "Lunchtime",
      href: "/lunchtime",
      icon: Clock,
      key: "lunchtime" as const
    },
    {
      name: "Login",
      href: "/login",
      icon: LogIn,
      key: "login" as const
    },
  ];

  return (
    <nav className="flex items-center space-x-4">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentPage === item.key;

        return (
          <Link
            key={item.key}
            href={item.href}
            className={`p-2 rounded-lg transition-colors cursor-pointer ${isActive
              ? "bg-green-100 text-green-600"
              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            title={item.name}
          >
            <Icon size={20} />
          </Link>
        );
      })}
    </nav>
  );
}
