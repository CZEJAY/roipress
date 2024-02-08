import { ChatBubbleIcon, DiscordLogoIcon } from "@radix-ui/react-icons";
import {
  BookType,
  Linkedin,
  Printer,
  SettingsIcon,
  Sheet,
  UserCheck2,
  Users,
} from "lucide-react";
import { FaDiscord, FaGithub, FaIdCard, FaTelegramPlane, FaTools } from "react-icons/fa";

export const homeRoutes = [
  {
    name: "Printing Job",
    link: "/dashboard/jobs",
    icon: Printer,
    content: "Manage your printing jobs.",
    color: "bg-blue-500",
    hovercolor: "hover:bg-blue-400",
  },
  {
    name: "Book Writing",
    link: "/dashboard/blog",
    icon: BookType,
    content: "Write and manage your book chapters.",
    color: "bg-purple-600",
    hovercolor: "hover:bg-purple-400",
  },
  {
    name: "Design ID Cards",
    link: "/dashboard/create-dev",
    icon: FaIdCard,
    content: "Create a design for an ID card.",
    color: "bg-green-700",
    hovercolor: "hover:bg-green-900",
  },
  {
    name: "Print Banners",
    link: "/dashboard/create-dev",
    icon: Sheet,
    content: "Print  banner designs with Luzifer's Designer.",
    color: "bg-red-800",
    hovercolor: "hover:bg-red-900",
  },
];
export const onlineServices = [
  {
    name: "Telegram Support",
    link: "https://t.me/Luzifer_Support",
    icon: FaTelegramPlane,
    content: "Contact us via Telegram.",
    color: "bg-teal-300 dark:bg-teal-100",
    hovercolor: "hover:bg-teal-600",
  },
  {
    name: "Discord Server",
    link: "https://discord.gg/Vb2ZJrX",
    icon: FaDiscord,
    content: "Join our Discord server to get support or just chat about stuff.",
    color: "bg-blue-500 dark:bg-blue-400",
    hovercolor: "hover:bg-blue-700",
  },
  {
    name: "Github",
    link: "https://github.com/luzifer/luci",
    icon: FaGithub,
    content: "Check out the source code on Github.",
    color: "bg-black text-white",
    hovercolor: "text-gray-200",
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
    icon: FaGithub,
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
