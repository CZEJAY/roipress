import {
  BookType,
  Briefcase,
  Github,
  HeartHandshakeIcon,
  Linkedin,
  NewspaperIcon,
  Printer,
  SettingsIcon,
  Sheet,
  UserCheck2,
  Users,
} from "lucide-react";
import { FaIdCard, FaTelegramPlane, FaTools } from "react-icons/fa";

export const homeRoutes = [
  {
    name: "Printing Job",
    link: "/dashboard/jobs",
    icon: Printer,
    content: "Manage your printing jobs.",
    color: "bg-blue-500",
  },
  {
    name: "Book Writing",
    link: "/dashboard/blog",
    icon: BookType,
    content: "Write and manage your book chapters.",
    color: "bg-purple-600",
  },
  {
    name: "Design ID Cards",
    link: "/dashboard/create-dev",
    icon: FaIdCard,
    content: "Create a design for an ID card.",
    color: "bg-green-700",
  },
  {
    name: "Print Banners",
    link: "/dashboard/create-dev",
    icon: Sheet,
    content: "Print  banner designs with Luzifer's Designer.",
    color: "bg-red-800",
  },
];
export const onlineServices = [
  {
    name: "Online",
    link: "/dashboard/jobs",
    icon: Printer,
    content: "Manage your printing jobs.",
    color: "bg-blue-500",
  },
  {
    name: "Book Writing",
    link: "/dashboard/blog",
    icon: BookType,
    content: "Write and manage your book chapters.",
    color: "bg-purple-600",
  },
  {
    name: "Design ID Cards",
    link: "/dashboard/create-dev",
    icon: FaIdCard,
    content: "Create a design for an ID card.",
    color: "bg-green-700",
  },
  {
    name: "Print Banners",
    link: "/dashboard/create-dev",
    icon: Sheet,
    content: "Print  banner designs with Luzifer's Designer.",
    color: "bg-red-800",
  },
];

export const sideBarLinks = [
  {
    label: "Workspace",
    icon: FaTools,
  },
  {
    label: "Verify Account",
    icon: UserCheck2,
  },
  {
    label: "Communities",
    icon: Users,
  },
  {
    label: "Settings",
    icon: SettingsIcon,
  },
];

export const socialLinks = [
  {
    icon: Github,
    href: "https://github.com",
  },
  {
    icon: FaTelegramPlane,
    href: "https://github.com",
  },
  {
    icon: Linkedin,
    href: "https://github.com",
  },
];
