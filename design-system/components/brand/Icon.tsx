"use client";

import type { CSSProperties } from "react";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import {
  ArrowRight, ArrowUpRight, Award, Ban, BadgeCheck, BarChart3, Briefcase, Building2, CalendarCheck, CircleAlert, CircleCheck, CircleX,
  ClipboardList, Coins, Compass, Factory, FileCheck, FileSearch, FileSpreadsheet, Globe, Handshake, Hourglass, KeyRound, Landmark,
  Layers, ListChecks, Lock, Menu, MessageSquareText, Moon, Phone, Receipt, RefreshCw, Route, Scale, SearchCheck, Send, ShieldAlert,
  Sun, Timer, TrendingUp, UserRound, Wallet, X, BookOpen, Bot, BrainCircuit, Calendar, Check, ChevronDown,
  CircleDashed, CircleHelp, Clock, Database, Eye, FileText, Gauge, GraduationCap, Headset, LoaderCircle,
  LockOpen, Mail, MapPin, Minus, MonitorPlay, Play, Plug, Plus, Presentation, Rocket, ScrollText, Search,
  Settings2, ShieldCheck, SlidersHorizontal, Sparkles, Table, Tag, Target, Users, Video, Workflow,
  type LucideIcon,
} from "lucide-react";

/**
 * Brand favourites are bundled statically so they render on the server with no
 * flash; any other Lucide name falls back to lazy loading via DynamicIcon.
 */
const BRAND_ICONS: Partial<Record<IconName, LucideIcon>> = {
  "arrow-right": ArrowRight, "arrow-up-right": ArrowUpRight, "bar-chart-3": BarChart3, "book-open": BookOpen,
  bot: Bot, "brain-circuit": BrainCircuit, calendar: Calendar, check: Check, "chevron-down": ChevronDown,
  "circle-dashed": CircleDashed, "circle-help": CircleHelp, clock: Clock, database: Database, eye: Eye,
  "file-text": FileText, gauge: Gauge, "graduation-cap": GraduationCap, headset: Headset,
  "loader-circle": LoaderCircle, "lock-open": LockOpen, mail: Mail, "map-pin": MapPin, minus: Minus,
  "monitor-play": MonitorPlay, play: Play, plug: Plug, plus: Plus, presentation: Presentation, rocket: Rocket,
  "scroll-text": ScrollText, search: Search, "settings-2": Settings2, "shield-check": ShieldCheck,
  "sliders-horizontal": SlidersHorizontal, sparkles: Sparkles, table: Table, tag: Tag, target: Target,
  users: Users, video: Video, workflow: Workflow,
  award: Award, ban: Ban, "badge-check": BadgeCheck, briefcase: Briefcase, "building-2": Building2, "calendar-check": CalendarCheck,
  "circle-alert": CircleAlert, "circle-check": CircleCheck, "circle-x": CircleX, "clipboard-list": ClipboardList, coins: Coins,
  compass: Compass, factory: Factory, "file-check": FileCheck, "file-search": FileSearch, "file-spreadsheet": FileSpreadsheet,
  globe: Globe, handshake: Handshake, hourglass: Hourglass, "key-round": KeyRound, landmark: Landmark, layers: Layers,
  "list-checks": ListChecks, lock: Lock, menu: Menu, "message-square-text": MessageSquareText, moon: Moon, phone: Phone,
  receipt: Receipt, "refresh-cw": RefreshCw, route: Route, scale: Scale, "search-check": SearchCheck, send: Send,
  "shield-alert": ShieldAlert, sun: Sun, timer: Timer, "trending-up": TrendingUp, "user-round": UserRound, wallet: Wallet, x: X,
};

export type { IconName };

export interface IconProps {
  /** Lucide icon name, kebab-case (e.g. 'sparkles', 'bar-chart-3', 'graduation-cap'). */
  name: IconName;
  /** Pixel size. Default 20. */
  size?: number;
  /** Any CSS color, normally a token: 'var(--accent)'. Default currentColor. */
  color?: string;
  /** Accessible label; omit for decorative icons. */
  title?: string;
  className?: string;
  style?: CSSProperties;
}

/** Outline line icon (Lucide, 2px stroke, rounded caps) tinted with currentColor. */
export function Icon({ name, size = 20, color, title, className, style }: IconProps) {
  const a11y = title ? { role: "img" as const, "aria-label": title } : { "aria-hidden": true as const };
  // Colour goes through CSS (not the stroke attribute) so token values like var(--accent) resolve.
  const common = { size, color: "currentColor", strokeWidth: 2, className, style: { flex: "none", color, ...style }, ...a11y };
  const Static = BRAND_ICONS[name];
  if (Static) return <Static {...common} />;
  return <DynamicIcon name={name} {...common} />;
}
