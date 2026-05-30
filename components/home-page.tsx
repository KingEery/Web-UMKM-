"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Camera,
  ChefHat,
  Clock,
  Coffee,
  Heart,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  Star,
  Wallet,
  X
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const navItems = [
  ["Tentang", "#tentang"],
  ["Menu", "#menu"],
  ["Gallery", "#gallery"],
  ["Testimoni", "#testimoni"],
  ["Lokasi", "#lokasi"]
] as const;

const menuItems = [
  {
    category: "Paket Kremes",
    name: "Paket Kremes 1 (Paha Atas)",
    price: "Rp 18.000",
    image: "/Menu/Paket Kremes 1 (Paha Atas) 18k.jpg",
    description: "Nasi hangat + Ayam Kremes Paha Atas yang gurih renyah + Lalapan + Sambal spesial + FREE Es Teh!"
  },
  {
    category: "Paket Kremes",
    name: "Paket Kremes 2 (Paha Bawah)",
    price: "Rp 16.000",
    image: "/Menu/Paket Kremes 2 (Paha Bawah) 16k.jpg",
    description: "Nasi hangat + Ayam Kremes Paha Bawah renyah + Lalapan + Sambal spesial + FREE Es Teh!"
  },
  {
    category: "Paket Kremes",
    name: "Paket Kremes 3 (Sayap)",
    price: "Rp 15.000",
    image: "/Menu/Paket Kremes 3 (Sayap) 15k.jpg",
    description: "Nasi hangat + Sayap Ayam Kremes yang gurih dan kriuk + Lalapan + Sambal spesial + FREE Es Teh!"
  },
  {
    category: "Paket Kremes",
    name: "Paket Kremes 4 (Telur)",
    price: "Rp 13.000",
    image: "/Menu/Paket Kremes 4 (Telur) 13k.jpg",
    description: "Nasi hangat + Telur Dadar Kremes garing kriuk + Lalapan + Sambal spesial + FREE Es Teh!"
  },
  {
    category: "Paket Kremes",
    name: "Paket Kremes 5 (Lele)",
    price: "Rp 16.000",
    image: "/Menu/Paket Kremes 5 (Lele) 16k.jpg",
    description: "Nasi hangat + Lele Goreng Kremes gurih nan garing + Lalapan + Sambal spesial + FREE Es Teh!"
  },
  {
    category: "Paket Penyet",
    name: "Paket Penyet 1 (Paha Atas)",
    price: "Rp 16.000",
    image: "/Menu/Paket Penyet 1 (Paha Atas) 16k.jpeg",
    description: "Nasi hangat + Ayam Penyet Paha Atas dengan sambal penyet pedas nikmat + Lalapan + FREE Es Teh!"
  },
  {
    category: "Paket Penyet",
    name: "Paket Penyet 2 (Paha Bawah)",
    price: "Rp 14.000",
    image: "/Menu/Paket Penyet 2 (Paha Bawah) 14k.jpeg",
    description: "Nasi hangat + Ayam Penyet Paha Bawah dengan sambal penyet pedas mantap + Lalapan + FREE Es Teh!"
  },
  {
    category: "Paket Penyet",
    name: "Paket Penyet 3 (Sayap)",
    price: "Rp 13.000",
    image: "/Menu/Paket Penyet 3 (Sayap) 13k.jpeg",
    description: "Nasi hangat + Sayap Ayam Penyet sambal pedas berempah + Lalapan + FREE Es Teh!"
  },
  {
    category: "Paket Penyet",
    name: "Paket Penyet 5 (Lele)",
    price: "Rp 14.000",
    image: "/Menu/Paket Penyet 5 (Lele) 14k.jpeg",
    description: "Nasi hangat + Lele Penyet garing bersanding sambal khas pedas nendang + Lalapan + FREE Es Teh!"
  },
  {
    category: "Paket Penyet",
    name: "Paket Penyet 6 (Tahu Tempe)",
    price: "Rp 9.000",
    image: "/Menu/Paket Penyet 6 (Tahu Tempe) 9k.jpg",
    description: "Nasi hangat + Tahu & Tempe Penyet gurih berbalut sambal pedas mantap + Lalapan + FREE Es Teh!"
  }
];

const galleryItems = [
  {
    title: "Interior Cafe",
    height: "h-72",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=85"
  },
  {
    title: "Menu Hangat",
    height: "h-96",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=85"
  },
  {
    title: "Nongkrong Sore",
    height: "h-80",
    image:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=85"
  },
  {
    title: "Lighting Orange",
    height: "h-64",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=85"
  },
  {
    title: "Coffee Corner",
    height: "h-80",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85"
  },
  {
    title: "Table Moment",
    height: "h-96",
    image:
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1000&q=85"
  }
];

const testimonials = [
  {
    quote: "Tempatnya nyaman ditemani upun!",
    name: "Unzurna",
    role: "Mahasiswa"
  },
  {
    quote: "Harga mahasiswa friendly.",
    name: "Raka",
    role: "Pelajar"
  },
  {
    quote: "Makanannya enak dan aesthetic.",
    name: "Dinda",
    role: "Content Creator"
  }
];

const whatsappNumber = "6281227371024";

function BrandLogo({ variant = "nav" }: { variant?: "nav" | "hero" | "footer" }) {
  const sizeClass =
    variant === "hero"
      ? "h-28 w-28 sm:h-32 sm:w-32"
      : variant === "footer"
        ? "h-20 w-20"
        : "h-14 w-14";

  return (
    <a href="#home" className="flex items-center gap-3" aria-label="Kedai Sunshine88">
      <span
        className={`${sizeClass} relative block shrink-0 overflow-hidden rounded-2xl bg-black shadow-glow ring-1 ring-sunshine-orange/25`}
      >
        <img
          src="/logo.jpeg"
          alt="Logo Kedai Sunshine"
          className="h-full w-full object-cover"
        />
      </span>
      {variant !== "hero" && (
        <span className="leading-none">
          <span className="block text-base font-black tracking-wide text-white">
            Sunshine<span className="text-sunshine-orange">88</span>
          </span>
          <span className="block text-xs font-semibold uppercase text-sunshine-cream/70">
            Kedai Magelang
          </span>
        </span>
      )}
    </a>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.65 }}
      className="mx-auto mb-10 max-w-2xl text-center"
    >
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-sunshine-orange">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-white/68">{description}</p>
    </motion.div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0f0f0f]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <BrandLogo />
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold text-white/70 transition hover:text-sunshine-orange"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="#lokasi"
          className="hidden items-center gap-2 rounded-full bg-sunshine-orange px-5 py-3 text-sm font-bold text-[#160b05] shadow-glow transition hover:scale-[1.03] lg:flex"
        >
          <MapPin className="h-4 w-4" />
          Kunjungi
        </a>
        <button
          aria-label="Buka menu"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/8 text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-[#121212] px-5 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-semibold text-white/75 hover:bg-white/8 hover:text-sunshine-orange"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="hero-bg relative min-h-screen overflow-hidden pt-28"
    >
      <div className="absolute right-[8%] top-28 h-64 w-64 rounded-full bg-sunshine-orange/20 blur-3xl" />
      <div className="absolute bottom-12 left-[6%] h-40 w-40 rounded-full bg-orange-300/10 blur-3xl" />
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 px-5 pb-12 sm:px-6 lg:grid-cols-[1fr_0.82fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="max-w-3xl"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-sunshine-orange/30 bg-sunshine-orange/10 px-4 py-2 text-sm font-bold text-sunshine-cream">
            <Star className="h-4 w-4 fill-sunshine-orange text-sunshine-orange" />
            Modern cafe hangat di Kota Magelang
          </div>
          <div className="mb-7">
            <BrandLogo variant="hero" />
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.98] text-white sm:text-6xl lg:text-7xl">
            Hangatnya Rasa,
            <span className="block text-sunshine-orange">Cerahnya Suasana</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
            Kedai modern dengan vibe cozy, menu ramah kantong, dan suasana yang
            pas untuk nongkrong, makan bareng keluarga, atau foto sore yang cantik.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sunshine-orange px-7 py-4 font-black text-[#170b05] shadow-glow transition hover:-translate-y-1"
            >
              Lihat Menu
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Halo%20Kedai%20Sunshine88,%20saya%20ingin%20reservasi.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/16 bg-white/9 px-7 py-4 font-black text-white backdrop-blur transition hover:border-sunshine-orange/70 hover:text-sunshine-orange"
            >
              Reservasi
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 32 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.75 }}
          className="relative hidden lg:block"
        >
          <div className="glass-panel rounded-[2rem] p-5">
            <div className="relative h-[560px] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/background.jpeg"
                alt="Foto Kedai Sunshine88"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-black/55 p-5 backdrop-blur">
                <p className="text-sm font-semibold text-sunshine-orange">Open Daily</p>
                <p className="mt-1 text-2xl font-black">10.00 - 22.00 WIB</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const features = [
    { icon: Heart, title: "Tempat nyaman" },
    { icon: Wallet, title: "Harga terjangkau" },
    { icon: Coffee, title: "Cocok untuk nongkrong" },
    { icon: Camera, title: "Instagramable" }
  ];

  return (
    <section id="tentang" className="bg-[#101010] px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Tentang Kami"
          title="Cafe warm modern untuk semua momen"
          description="Kedai Sunshine88 merupakan tempat makan modern di Kota Magelang yang menghadirkan suasana hangat, nyaman, dan menyenangkan untuk bersantai bersama teman maupun keluarga."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="glass-panel rounded-2xl p-6 transition hover:-translate-y-2 hover:border-sunshine-orange/40"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-sunshine-orange/15 text-sunshine-orange">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-black">{title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedMenu() {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const categories = useMemo(() => ["Semua", "Paket Kremes", "Paket Penyet"], []);
  const [active, setActive] = useState("Semua");
  const filtered =
    active === "Semua"
      ? menuItems
      : menuItems.filter((item) => item.category === active);

  return (
    <section id="menu" className="bg-[#0f0f0f] px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Menu Unggulan"
          title="Pilihan favorit Kedai Sunshine88"
          description="Sajian paket spesial ayam, lele, hingga tahu & tempe dengan kremesan gurih atau sambal penyet pedas membara. Setiap paket sudah dilengkapi nasi hangat dan FREE Es Teh!"
        />
        <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-white/5 pb-5">
          <div className="flex flex-wrap gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-black transition ${
                  active === category
                    ? "bg-sunshine-orange text-[#170b05] shadow-glow"
                    : "border border-white/12 bg-white/6 text-white/70 hover:text-sunshine-orange"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <button
            onClick={() => setIsMenuModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-sunshine-orange/35 bg-sunshine-orange/10 px-5 py-3 text-sm font-black text-sunshine-orange transition hover:bg-sunshine-orange hover:text-[#170b05] hover:shadow-glow self-start sm:self-auto"
          >
            <ArrowRight className="h-4 w-4 rotate-[-45deg]" />
            Lihat Brosur Menu Lengkap (All Menu)
          </button>
        </div>
        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((item) => (
            <motion.article
              layout
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] shadow-card transition hover:-translate-y-2 hover:border-sunshine-orange/45 hover:shadow-glow flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-black/65 px-3 py-1 text-xs font-black text-sunshine-orange backdrop-blur">
                    {item.category}
                  </span>
                  
                  {/* Premium FREE Es Teh Badge */}
                  <span className="absolute right-4 top-4 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-black text-white shadow-md animate-pulse">
                    🥤 Free Es Teh
                  </span>
                </div>
                <div className="p-5 pb-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-black text-white leading-snug">{item.name}</h3>
                    <p className="shrink-0 font-black text-sunshine-orange">{item.price}</p>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-white/60">{item.description}</p>
                </div>
              </div>
              <div className="p-5 pt-4">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Halo%20Kedai%20Sunshine88,%20saya%20ingin%20pesan%20${encodeURIComponent(item.name)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white/9 px-4 py-3 text-sm font-black text-white transition hover:bg-sunshine-orange hover:text-[#170b05]"
                >
                  Pesan via WhatsApp
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {isMenuModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setIsMenuModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-3xl border border-white/10 bg-[#0f0f0f] shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div>
                  <h3 className="text-xl font-black text-white">Brosur Menu Lengkap</h3>
                  <p className="text-xs text-white/50">Kedai Sunshine88 Magelang</p>
                </div>
                <button
                  onClick={() => setIsMenuModalOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white hover:bg-white/10 hover:text-sunshine-orange transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              {/* Modal Body / Image Scrollable */}
              <div className="overflow-auto p-4 flex justify-center bg-black/30">
                <img
                  src="/Menu/All Menu.jpg"
                  alt="Brosur Lengkap Kedai Sunshine88"
                  className="max-h-[70vh] w-auto object-contain rounded-xl shadow-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="bg-[#101010] px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Gallery"
          title="Sudut hangat yang fotogenik"
          description="Nuansa cafe aesthetic dengan lighting warm orange untuk makan, ngobrol, dan membuat konten yang terasa natural."
        />
        <div className="masonry">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.05, duration: 0.55 }}
              className={`masonry-item group relative ${item.height} overflow-hidden rounded-2xl border border-white/10`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
              <p className="absolute bottom-4 left-4 text-lg font-black">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((value) => (value + 1) % testimonials.length);
    }, 3800);
    return () => window.clearInterval(id);
  }, []);

  const testimonial = testimonials[active];

  return (
    <section id="testimoni" className="bg-[#0f0f0f] px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <SectionTitle
          eyebrow="Testimoni"
          title="Kata mereka tentang Sunshine88"
          description="Review ringan dari pengunjung yang datang untuk makan, ngobrol, dan menikmati suasana."
        />
        <motion.div
          key={testimonial.quote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="glass-panel rounded-3xl px-6 py-10 sm:px-12"
        >
          <Quote className="mx-auto mb-5 h-10 w-10 text-sunshine-orange" />
          <p className="text-3xl font-black leading-tight text-white sm:text-4xl">
            "{testimonial.quote}"
          </p>
          <p className="mt-7 font-black text-sunshine-orange">{testimonial.name}</p>
          <p className="text-sm text-white/55">{testimonial.role}</p>
        </motion.div>
        <div className="mt-7 flex justify-center gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              aria-label={`Testimoni ${index + 1}`}
              onClick={() => setActive(index)}
              className={`h-3 rounded-full transition ${active === index ? "w-9 bg-sunshine-orange" : "w-3 bg-white/25"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="lokasi" className="bg-[#101010] px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-7 sm:p-9"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-sunshine-orange">
            Lokasi
          </p>
          <h2 className="text-3xl font-black sm:text-4xl">Datang dan rasakan suasananya</h2>
          <div className="mt-8 space-y-5 text-white/72">
            <p className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-sunshine-orange" />
              Jalan Kapten Suparman, Potrobangsan, Kecamatan Magelang Utara, Kota Magelang.
            </p>
            <p className="flex gap-3">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-sunshine-orange" />
              Buka setiap hari, 10.00 - 22.00 WIB
            </p>
            <p className="flex gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-sunshine-orange" />
              WhatsApp: +62 812-2737-1024
            </p>
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Halo%20Kedai%20Sunshine88,%20saya%20ingin%20bertanya.`}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-sunshine-orange px-6 py-4 font-black text-[#170b05] shadow-glow transition hover:-translate-y-1"
          >
            Hubungi Kami
            <MessageCircle className="h-5 w-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="min-h-[420px] overflow-hidden rounded-3xl border border-white/10 shadow-card"
        >
          <iframe
            title="Peta Kedai Sunshine88"
            src="https://www.google.com/maps?q=Jalan%20Kapten%20Suparman%2C%20Potrobangsan%2C%20Kecamatan%20Magelang%20Utara%2C%20Kota%20Magelang&output=embed"
            className="h-full min-h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0b0b] px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <BrandLogo variant="footer" />
        <div className="flex items-center gap-3">
          {[
            { label: "Instagram", icon: Instagram, href: "https://instagram.com/" },
            { label: "TikTok", icon: ChefHat, href: "https://tiktok.com/" },
            {
              label: "WhatsApp",
              icon: MessageCircle,
              href: `https://wa.me/${whatsappNumber}`
            }
          ].map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/6 text-white/70 transition hover:border-sunshine-orange/50 hover:text-sunshine-orange"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
        <p className="text-sm text-white/48">
          Copyright © 2026 Kedai Sunshine88. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(id);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-[#0f0f0f]"
    >
      <div className="grid place-items-center gap-5">
        <div className="h-24 w-24 animate-pulse overflow-hidden rounded-3xl bg-black shadow-glow ring-1 ring-sunshine-orange/25">
          <img
            src="/logo.jpeg"
            alt="Logo Kedai Sunshine"
            className="h-full w-full object-cover"
          />
        </div>
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-sunshine-orange">
          Kedai Sunshine88
        </p>
      </div>
    </motion.div>
  );
}

export function HomePage() {
  return (
    <>
      <Loader />
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedMenu />
        <Gallery />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <a
        href={`https://wa.me/${whatsappNumber}?text=Halo%20Kedai%20Sunshine88.`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Kedai Sunshine88"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_40px_rgba(37,211,102,0.34)] transition hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </>
  );
}
