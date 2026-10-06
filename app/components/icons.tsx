import type { PropsWithChildren } from "react";

type IconProps = { className?: string };

const Svg = ({ children, className }: PropsWithChildren<IconProps>) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);

export const BriefcaseIcon = (p: IconProps) => <Svg {...p}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M12 7v13"/></Svg>;
export const UserIcon = (p: IconProps) => <Svg {...p}><circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/></Svg>;
export const EducationIcon = (p: IconProps) => <Svg {...p}><path d="m3 9 9-5 9 5-9 5-9-5Z"/><path d="M7 12v5c3 2 7 2 10 0v-5M21 9v6"/></Svg>;
export const MessageIcon = (p: IconProps) => <Svg {...p}><path d="M21 15a4 4 0 0 1-4 4H8l-5 3 1.6-5A8 8 0 1 1 21 15Z"/></Svg>;
export const MailIcon = (p: IconProps) => <Svg {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></Svg>;
export const MenuIcon = (p: IconProps) => <Svg {...p}><path d="M4 7h16M4 12h16M4 17h16"/></Svg>;
export const LinkedinIcon = (p: IconProps) => <Svg {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></Svg>;
export const WhatsAppIcon = (p: IconProps) => <Svg {...p}><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.6a8.5 8.5 0 1 1 16.3-3.9Z"/><path d="M8.1 6.8c.3-.5.6-.5 1-.5h.4c.2 0 .4.1.5.4l1.1 2.5c.1.3.1.5-.1.8l-.8 1c-.2.2-.2.4-.1.7.7 1.4 1.8 2.5 3.2 3 .3.1.5.1.7-.1l1-1.2c.2-.2.5-.3.8-.1l2.3 1.1c.3.1.4.3.4.6 0 .6-.3 1.5-.8 2-.6.7-1.6 1.1-2.6 1.1-1.5 0-3.9-.8-5.9-2.7-2.1-2-3.2-4.6-3.3-6.2 0-.9.1-1.7.2-2.4Z"/><path d="M8.1 6.8c.4 2.7 2.4 4.8 5.2 5.5" opacity="0"/></Svg>;
