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
  { label: "Patients Served", value: 12000, suffix: "+" },
  { label: "Treatments", value: 30000, suffix: "+" },
  { label: "Expert Dentists", value: 14, suffix: "" },
  { label: "Happy Smiles", value: 19000, suffix: "+" },
] as const;

export const services = [
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description: "Safe, professional whitening for a brighter smile.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop&q=80",
  },
  {
    icon: CircleDot,
    title: "Dental Implants",
    description: "Restore your smile with permanent, natural-looking implants.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop&q=80",
  },
  {
    icon: Syringe,
    title: "Root Canal",
    description: "Pain-free root canal therapy with modern techniques.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop&q=80",
  },
  {
    icon: Braces,
    title: "Braces & Aligners",
    description: "Straighten your teeth with clear aligners or traditional braces.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=600&fit=crop&q=80",
  },
  {
    icon: Smile,
    title: "Routine Checkups",
    description: "Regular cleanings and preventive care for optimal oral health.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop&q=80",
  },
] as const satisfies {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
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
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
    text: "The clinic feels like a premium startup product — super clean, calm, and organized. My whitening results were natural and stunning.",
  },
  {
    name: "Ahmad R.",
    verified: true,
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
    text: "The team explained everything clearly and the treatment was smooth. I loved the appointment flow and how reassuring the staff felt.",
  },
  {
    name: "Sara N.",
    verified: true,
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
    text: "Braces consultation was fast and professional. The plan was personalized, and I left feeling confident about the timeline and results.",
  },
  {
    name: "Yousef T.",
    verified: true,
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80",
    text: "Emergency visit handled perfectly. They made me feel safe and comfortable, and the outcome was better than I expected.",
  },
] as const;

export const gallery = [
  {
    id: "case-01",
    title: "Modern Clinic Interior",
    before: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "case-02",
    title: "Treatment Room",
    before: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "case-03",
    title: "Dental Equipment",
    before: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "case-04",
    title: "Patient Care",
    before: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=600&fit=crop&q=80",
    after: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop&q=80",
  },
] as const;

export const contact = {
  address: "123 Medical Plaza, Suite 400, Downtown District",
  phone: "03242364787",
  email: "rajbutbaba@gmail.com",
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

