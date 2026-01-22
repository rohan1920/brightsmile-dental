import {
  Activity,
  BadgeCheck,
  Braces,
  CircleDot,
  HeartPulse,
  ShieldCheck,
  Smile,
  Sparkles,
  Syringe,
  type LucideIcon,
} from "lucide-react";

export const brand = {
  name: "BrightSmile Dental Care",
  tagline: "Your Smile, Our Priority",
  voice:
    "Warm, calm, and professional — like a modern clinic that feels premium, safe, and human.",
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

export const trustBadges = [
  { icon: ShieldCheck, label: "Certified Sterile Care" },
  { icon: BadgeCheck, label: "ISO-Friendly Processes" },
  { icon: HeartPulse, label: "Patient-First Safety" },
] as const satisfies { icon: LucideIcon; label: string }[];

export const stats = [
  { label: "Patients Served", value: 12840, suffix: "+" },
  { label: "Treatments Delivered", value: 34210, suffix: "+" },
  { label: "Expert Dentists", value: 14, suffix: "" },
  { label: "Happy Smiles", value: 19000, suffix: "+" },
] as const;

export const services = [
  {
    icon: Smile,
    title: "Teeth Cleaning",
    description: "Gentle polishing + deep cleaning for a fresh, healthy smile.",
  },
  {
    icon: Braces,
    title: "Braces & Aligners",
    description: "Personalized orthodontics with transparent progress tracking.",
  },
  {
    icon: Sparkles,
    title: "Whitening",
    description: "Safe, effective brightening with natural-looking results.",
  },
  {
    icon: Syringe,
    title: "Root Canal Therapy",
    description: "Precise, pain-minimized care using modern techniques.",
  },
  {
    icon: CircleDot,
    title: "Dental Implants",
    description: "Confident chewing and aesthetics with long-term stability.",
  },
  {
    icon: Activity,
    title: "Emergency Care",
    description: "Fast triage and calming support when you need it most.",
  },
] as const satisfies {
  icon: LucideIcon;
  title: string;
  description: string;
}[];

export const doctors = [
  {
    name: "Dr. Aisha Rahman",
    role: "Cosmetic Dentistry",
    experience: "10+ years",
    image: "/images/doctors/dr-aisha.svg",
  },
  {
    name: "Dr. Daniel Park",
    role: "Implant Specialist",
    experience: "12+ years",
    image: "/images/doctors/dr-daniel.svg",
  },
  {
    name: "Dr. Sofia Martinez",
    role: "Orthodontics",
    experience: "9+ years",
    image: "/images/doctors/dr-sofia.svg",
  },
  {
    name: "Dr. Omar Hassan",
    role: "Endodontics",
    experience: "11+ years",
    image: "/images/doctors/dr-omar.svg",
  },
] as const;

export const testimonials = [
  {
    name: "Mariam K.",
    verified: true,
    rating: 5,
    avatar: "/images/avatars/av-mariam.svg",
    text: "The clinic feels like a premium startup product — super clean, calm, and organized. My whitening results were natural and stunning.",
  },
  {
    name: "Ahmad R.",
    verified: true,
    rating: 5,
    avatar: "/images/avatars/av-ahmad.svg",
    text: "The team explained everything clearly and the treatment was smooth. I loved the appointment flow and how reassuring the staff felt.",
  },
  {
    name: "Sara N.",
    verified: true,
    rating: 4,
    avatar: "/images/avatars/av-sara.svg",
    text: "Braces consultation was fast and professional. The plan was personalized, and I left feeling confident about the timeline and results.",
  },
  {
    name: "Yousef T.",
    verified: true,
    rating: 5,
    avatar: "/images/avatars/av-yousef.svg",
    text: "Emergency visit handled perfectly. They made me feel safe and comfortable, and the outcome was better than I expected.",
  },
] as const;

export const gallery = [
  {
    id: "case-01",
    title: "Whitening — Natural Bright",
    before: "/images/gallery/whiten-before.svg",
    after: "/images/gallery/whiten-after.svg",
  },
  {
    id: "case-02",
    title: "Aligners — Smile Line",
    before: "/images/gallery/align-before.svg",
    after: "/images/gallery/align-after.svg",
  },
  {
    id: "case-03",
    title: "Implant — Confidence",
    before: "/images/gallery/implant-before.svg",
    after: "/images/gallery/implant-after.svg",
  },
  {
    id: "case-04",
    title: "Cleaning — Fresh Finish",
    before: "/images/gallery/clean-before.svg",
    after: "/images/gallery/clean-after.svg",
  },
] as const;

export const contact = {
  address: "123 Medical Plaza, Suite 400, Downtown District",
  phone: "+1 (555) 013-2048",
  email: "hello@brightsmile.dental",
  hours: "Mon–Sat: 9:00 AM – 8:00 PM",
};

export const appointmentServices = [
  "Teeth Cleaning",
  "Whitening",
  "Braces / Aligners",
  "Root Canal",
  "Implants",
  "Emergency Care",
] as const;

export const chatbotQuickReplies = [
  { label: "Book Appointment", value: "book" },
  { label: "View Services", value: "services" },
  { label: "Talk to Doctor", value: "doctor" },
] as const;

export const expoDemoNotes = {
  appointment: "Demo mode: No data is sent anywhere. This is UI-only.",
  chatbot: "Demo mode: Pre-scripted responses for expo interaction.",
  map: "Map is a placeholder to keep the project fully offline-ready.",
};

