import {
  BookOpen,
  Calculator,
  Clock,
  FlaskConical,
  GraduationCap,
  MapPin,
  Menu,
  Phone,
  Star,
  Target,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

// ─── Intersection Observer hook ──────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const WA_LINK =
  "https://wa.me/919962283139?text=Hi%2C%20I%20am%20interested%20in%20joining%20CONCAVE%20MINDS%20ACADEMY%20online%20classes.";

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      data-ocid="navbar"
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-subtle border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          data-ocid="navbar.logo_link"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <div className="p-1.5 rounded-xl transition-smooth shadow-sm bg-primary/10 border border-primary/20">
            <GraduationCap className="w-5 h-5 text-primary" />
          </div>
          <div className="leading-tight">
            <span className="font-poppins text-sm sm:text-lg font-extrabold tracking-[0.1em] text-foreground uppercase">
              CONCAVE MINDS ACADEMY
            </span>
            <span className="hidden sm:block text-xs text-muted-foreground">
              Chennai & Global Online
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {[
            ["hero", "Home"],
            ["programs", "Programs"],
            ["gallery", "Gallery"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <button
              type="button"
              key={id}
              data-ocid={`navbar.${id}_link`}
              onClick={() => scrollTo(id)}
              className="text-sm font-medium transition-smooth text-foreground hover:text-primary"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:09962283139"
            data-ocid="navbar.call_button"
            className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg transition-smooth text-primary border border-primary/30 hover:bg-primary/5"
          >
            <Phone className="w-3.5 h-3.5" />
            099622 83139
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="navbar.whatsapp_button"
            className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-1.5 rounded-lg transition-smooth shadow-subtle"
          >
            <FaWhatsapp className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          data-ocid="navbar.menu_toggle"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-border px-4 py-4 flex flex-col gap-3 shadow-elevated">
          {[
            ["hero", "Home"],
            ["programs", "Programs"],
            ["gallery", "Gallery"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <button
              type="button"
              key={id}
              onClick={() => scrollTo(id)}
              className="text-left text-sm font-medium text-foreground hover:text-primary py-2 border-b border-border/50 transition-smooth"
            >
              {label}
            </button>
          ))}
          <a
            href="tel:09962283139"
            className="flex items-center gap-2 text-sm font-medium text-primary py-2"
          >
            <Phone className="w-4 h-4" />
            099622 83139
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 text-white text-sm font-semibold px-4 py-2.5 rounded-lg"
          >
            <FaWhatsapp className="w-4 h-4" />
            Join Online Class
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="hero"
      data-ocid="hero.section"
      className="relative min-h-[700px] h-screen flex items-center pt-32 pb-20 md:pb-28 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80"
          alt="Classroom"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 navy-overlay" />
        {/* extra top gradient for navbar readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16 md:mt-0">
        {/* Rating badge */}
        <div
          className="inline-flex items-center gap-2 glassmorphic-dark rounded-full px-4 py-2 mb-6"
          style={{ animation: "fade-in-up 0.5s ease-out both" }}
        >
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-white text-sm font-semibold font-inter">
            4.9 from 18+ Reviews
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white leading-tight mb-4 max-w-4xl"
        >
          Flexible Online & Offline Learning for
          <br />
          <span className="text-white">Students Around the World</span>
        </h1>

        {/* Subheading */}
        <p
          className="text-white/80 text-lg sm:text-xl font-inter mb-6 max-w-xl"
        >
          Live interactive coaching from India for students worldwide.<br />
          Learn anytime, anywhere with structured, concept-based teaching.
        </p>

        {/* Announcement Badge */}
        <div
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white font-inter text-sm px-4 py-2 rounded-full mb-8 shadow-elevated"
          style={{ animation: "fade-in-up 0.6s 0.25s ease-out both" }}
        >
          <span className="flex items-center justify-center h-6 px-2.5 rounded-full bg-accent text-accent-foreground font-bold text-[10px] uppercase tracking-wider">New</span>
          Free demo sessions for international students now available.
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="hero.whatsapp_button"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold font-poppins text-base px-7 py-3.5 rounded-xl transition-smooth shadow-elevated"
          >
            <FaWhatsapp className="w-5 h-5" />
            Join Online Class
          </a>
          <a
            href="tel:09962283139"
            data-ocid="hero.call_button"
            className="flex items-center justify-center gap-2 border-2 border-white/60 text-white hover:bg-white/10 font-semibold font-poppins text-base px-7 py-3.5 rounded-xl transition-smooth"
          >
            <Phone className="w-5 h-5" />
            Book Free Demo Session
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Trust Strip ──────────────────────────────────────────────────────────────
const trustItems = [
  { icon: BookOpen, label: "Live Interactive Classes" },
  { icon: TrendingUp, label: "Expert Indian Faculty" },
  { icon: Users, label: "Global Student Reach" },
  { icon: Target, label: "Flexible Online Timings" },
];

function TrustStrip() {
  const { ref, visible } = useInView();
  return (
    <section
      ref={ref}
      data-ocid="trust.section"
      className="relative z-10 -mt-12 mx-4 sm:mx-8 lg:mx-auto max-w-5xl"
    >
      <div
        className={`bg-white/95 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-3xl px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        {trustItems.map(({ icon: Icon, label }, i) => (
          <div
            key={label}
            data-ocid={`trust.item.${i + 1}`}
            className="flex flex-col items-center gap-2 py-2"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-foreground font-poppins font-semibold text-sm text-center">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Split Section ────────────────────────────────────────────────────────────
function SplitSection() {
  const { ref, visible } = useInView();
  return (
    <section
      ref={ref}
      id="about"
      data-ocid="about.section"
      className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
        >
          <div className="relative overflow-hidden rounded-3xl rounded-tl-[3rem] shadow-elevated">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=80"
              alt="Students studying"
              className="w-full h-[420px] lg:h-[500px] object-cover"
            />
            {/* Accent overlay badge */}
            <div className="absolute bottom-6 left-6 glassmorphic-dark rounded-2xl px-5 py-3">
              <p className="text-white font-poppins font-bold text-2xl">500+</p>
              <p className="text-white/80 text-xs font-inter">
                Students Worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Text */}
        <div
          className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
        >
          <div className="w-12 h-1 bg-accent rounded-full mb-6" />
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-foreground mb-5 leading-tight">
            Global
            <br />
            <span className="text-primary">Online Academy</span>
          </h2>
          <p className="text-muted-foreground font-inter text-base leading-relaxed mb-8">
            We provide India's expert teaching to students worldwide through our
            live interactive online platform. Our goal is to build a strong
            academic foundation in Maths & Physics for long-term success.
          </p>
          <ul className="space-y-3">
            {[
              "Expert tutors from India",
              "Live interactive online sessions",
              "Flexible timings for international students",
              "Strong focus on Maths & Physics",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-foreground font-inter text-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="about.cta_button"
            className="inline-flex items-center gap-2 mt-8 gradient-primary text-white font-poppins font-semibold px-6 py-3 rounded-xl transition-smooth hover:opacity-90 shadow-elevated"
          >
            <FaWhatsapp className="w-4 h-4" />
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Courses ──────────────────────────────────────────────────────────────────
const programs = [
  {
    icon: Calculator,
    title: <> Mathematics (8–12)</>,
    desc: "Comprehensive coaching for class 8-12. We ensure deep concept clarity in Algebra, Calculus, and Geometry for global curricula.",
    tag: "Both online and offline Classes",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
    imageAlt: "Mathematics",
  },
  {
    icon: FlaskConical,
    title: <> Physics (8–12)</>,
    desc: "Master Physics concepts with live demonstrations and expert teaching. Focused on board exams and competitive foundations.",
    tag: "Both online and offline Classes",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80",
    imageAlt: "Physics",
  },
  {
    icon: Target,
    title: <>Board Exam Preparation</>,
    desc: "Specialized coaching for CBSE, State, and International boards. Focused on scoring high with structured practice.",
    tag: "Exam Focused",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
    imageAlt: "Exam Preparation",
  },
  {
    icon: BookOpen,
    title: <>Revision & Crash Courses</>,
    desc: "Quick, intensive online revision modules for last-minute prep and concept brush-up before exams.",
    tag: "Fast Track",
    image:
      "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=600&q=80",
    imageAlt: "Crash Course",
  },
];


function Programs() {
  const { ref, visible } = useInView();
  return (
    <section
      ref={ref}
      id="programs"
      data-ocid="programs.section"
      className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div
        className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="w-8 h-1 bg-accent rounded-full mx-auto mb-4" />
        <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-foreground">
          Our Programs
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {programs.map((p, i) => (
          <div
            key={i}
            data-ocid={`programs.item.${i + 1}`}
            className={`group bg-card border border-border rounded-2xl overflow-hidden shadow-subtle hover:shadow-card-hover hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${i * 150 + 100}ms` }}
          >
            {/* Card image */}
            <div className="w-full h-48 overflow-hidden">
              <img
                src={p.image}
                alt={p.imageAlt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* Card header strip */}
            <div className="gradient-primary px-6 py-4 flex items-center gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <p.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-poppins font-semibold text-base">
                  {p.title}
                </h3>
                <span className="text-white/70 text-xs font-inter">
                  {p.tag}
                </span>
              </div>
            </div>
            <div className="px-6 py-5">
              <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                {p.desc}
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-primary font-poppins font-semibold text-sm hover:gap-2.5 transition-all duration-200"
              >
                Enquire about this program
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Gallery ──────────────────────────────────────────────────────────────────
const galleryImages = [
  {
    src: "gallery/image1.png",
    alt: "Expert instruction session",
    span: "row-span-2",
  },
  {
    src: "gallery/image2.png",
    alt: "Focused students during class",
    span: "",
  },
  {
    src: "gallery/image3.png",
    alt: "Academy Branding",
    span: "",
  },
  {
    src: "gallery/image4.png",
    alt: "Modern learning classroom",
    span: "row-span-2",
  },
  {
    src: "gallery/image1.png",
    alt: "Peer learning and discussion",
    span: "",
  },
  {
    src: "gallery/image2.png",
    alt: "Collaborative study environment",
    span: "",
  },
];


function Gallery() {
  const { ref, visible } = useInView(0.1);
  return (
    <section
      ref={ref}
      id="gallery"
      data-ocid="gallery.section"
      className="py-24 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <div className="w-8 h-1 bg-accent rounded-full mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-foreground">
            Our Learning Space
          </h2>
          <p className="text-muted-foreground font-inter text-sm mt-3 max-w-md mx-auto">
            A focused, comfortable environment designed for deep learning
          </p>
        </div>
        {/* Masonry grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          style={{ transitionDelay: "150ms" }}
        >
          {galleryImages.map((img, i) => (
            <div
              key={img.src}
              data-ocid={`gallery.item.${i + 1}`}
              className={`overflow-hidden rounded-2xl group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Differentiators ──────────────────────────────────────────────────────────
const differentiators = [
  {
    title: "Global Reach",
    desc: "Teaching students across UAE, Singapore, UK, US, and more with flexible online scheduling.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80",
    imageAlt: "Teacher at whiteboard with students",
  },
  {
    title: "Concept Focus",
    desc: "We build deep intuition in Maths & Physics, helping students understand the 'why' behind every concept.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
    imageAlt: "Students collaborating and having an aha moment",
  },
  {
    title: "Live Interaction",
    desc: "Small batch online sessions ensure every student can interact directly with our expert Indian faculty.",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80",
    imageAlt: "Students in a structured classroom setting",
  },
  {
    title: "Performance Tracking",
    desc: "Weekly online tests and regular assessments to track and improve student performance globally.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80",
    imageAlt: "Modern teaching tools and digital board",
  },
];

function Differentiators() {
  const { ref, visible } = useInView();
  return (
    <section
      ref={ref}
      data-ocid="differentiators.section"
      className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="w-8 h-1 bg-accent rounded-full mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-foreground">
            Why Choose Us
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((d, i) => (
            <div
              key={d.title}
              data-ocid={`differentiators.item.${i + 1}`}
              className={`glassmorphic bg-white/60 rounded-2xl overflow-hidden shadow-subtle hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100 + 150}ms` }}
            >
              {/* Card image */}
              <div className="w-full h-44 overflow-hidden">
                <img
                  src={d.image}
                  alt={d.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-foreground font-poppins font-semibold text-base mb-2">
                  {d.title}
                </h3>
                <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                  {d.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    quote:
      "This coaching academy has excellent teachers with strong skills.",
    reviewer: "Priya Sharma",
    initial: "P",
  },
  {
    quote:
      "Great work by brilliant tutors.",
    reviewer: "Rajesh Kumar",
    initial: "R",
  },
  {
    quote:
      "Excellent teaching quality. It has significantly improved my daughter's board exam prep.",
    reviewer: "Sanjana V",
    initial: "S",
  },
];

function Testimonials() {
  const { ref, visible } = useInView();
  return (
    <section
      ref={ref}
      id="reviews"
      data-ocid="testimonials.section"
      className="py-24 bg-gradient-to-b from-muted/40 to-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="w-8 h-1 bg-accent rounded-full mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-foreground">
            What Parents Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.reviewer}
              data-ocid={`testimonials.item.${i + 1}`}
              className={`bg-card border border-border rounded-2xl p-6 shadow-subtle hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 120 + 150}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {["s1", "s2", "s3", "s4", "s5"].map((sk) => (
                  <Star
                    key={sk}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-foreground font-inter text-sm leading-relaxed mb-5 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center text-white font-poppins font-bold text-sm">
                  {t.initial}
                </div>
                <span className="text-muted-foreground text-xs font-inter">
                  {t.reviewer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CTABanner() {
  const { ref, visible } = useInView();
  return (
    <section
      ref={ref}
      data-ocid="cta.section"
      className="relative py-28 overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&q=80"
          alt="Learning environment"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/80" />
      </div>
      <div
        className={`relative z-10 max-w-3xl mx-auto px-4 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <span className="inline-block bg-accent/20 border border-accent/40 text-accent-foreground text-xs font-poppins font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
          Admissions Open Now
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mb-4 leading-tight">
          Admissions Open —<br />
          Limited Seats
        </h2>
        <p className="text-white/80 font-inter text-lg mb-10">
          Secure your child's seat today. Expert coaching, limited seats,
          maximum results.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="cta.whatsapp_button"
          className="relative inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-poppins font-bold text-base px-8 py-4 rounded-xl shadow-elevated transition-smooth animate-pulse-subtle"
        >
          <FaWhatsapp className="w-5 h-5" />
          Chat on WhatsApp Now
        </a>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  const { ref, visible } = useInView();
  return (
    <section
      ref={ref}
      id="contact"
      data-ocid="contact.section"
      className="py-24 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="w-8 h-1 bg-accent rounded-full mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-foreground">
            Global Headquarters
          </h2>
        </div>
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "150ms" }}
        >
          {/* Info */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-subtle">
            <h3 className="font-poppins font-semibold text-foreground text-lg mb-6">
              Contact Information
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-inter mb-0.5">
                    Academy Headquarters
                  </p>
                  <p className="text-foreground font-inter text-sm leading-relaxed">
                    5, Devaraj Nagar 2nd St,
                    <br />
                    Sai Balaji Nagar, Pallikaranai,
                    <br />
                    Chennai, Tamil Nadu 600100
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-inter mb-0.5">
                    Phone
                  </p>
                  <a
                    href="tel:09962283139"
                    data-ocid="contact.call_button"
                    className="text-primary font-inter font-semibold text-sm hover:underline"
                  >
                    099622 83139
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-inter mb-0.5">
                    Hours
                  </p>
                  <p className="text-foreground font-inter text-sm">
                    Mon–Sat: 7 AM – 9 PM
                  </p>
                </div>
              </li>
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:09962283139"
                data-ocid="contact.call_cta_button"
                className="flex items-center justify-center gap-2 border border-primary text-primary font-poppins font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-primary/5 transition-smooth"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.whatsapp_button"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-poppins font-semibold text-sm px-5 py-2.5 rounded-xl transition-smooth"
              >
                <FaWhatsapp className="w-4 h-4" />
                Join Online Class
              </a>
            </div>
          </div>

          {/* Map */}
          <div
            className="overflow-hidden rounded-2xl shadow-elevated border border-border"
            style={{ height: "360px" }}
          >
            <iframe
              title="CONCAVE MINDS ACADEMY Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.8!2d80.2437!3d12.9165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPallikaranai%2C+Chennai!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer data-ocid="footer.section" className="bg-primary py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <GraduationCap className="w-5 h-5 text-white/70" />
          <span className="text-white font-poppins font-semibold text-base">
            CONCAVE MINDS ACADEMY
          </span>
        </div>
        <p className="text-white/60 font-inter text-xs mb-2">
          5, Devaraj Nagar 2nd St, Sai Balaji Nagar, Pallikaranai, Chennai, Tamil Nadu 600100
        </p>
        <p className="text-white/60 font-inter text-xs mb-5">099622 83139</p>
        <div className="border-t border-white/10 pt-5">
          <p className="text-white/40 font-inter text-xs">
            © {year} CONCAVE MINDS ACADEMY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Floating WhatsApp Button ─────────────────────────────────────────────────
function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="floating.whatsapp_button"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative w-14 h-14">
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
        {/* Button */}
        <div className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-xl transition-smooth group-hover:scale-110">
          <FaWhatsapp className="w-7 h-7 text-white" />
        </div>
      </div>
      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-foreground text-background text-xs font-inter font-medium px-3 py-1.5 rounded-lg shadow-elevated opacity-0 group-hover:opacity-100 transition-smooth whitespace-nowrap pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustStrip />
      <SplitSection />
      <Programs />
      <Gallery />
      <Differentiators />
      <Testimonials />
      <CTABanner />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
