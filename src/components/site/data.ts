// ============================================================
// BRAND CONFIG — edit bagian ini saja untuk ganti klien
// ============================================================
export const BRAND = {
  name: "Jojowacaw Organizer",
  nameShort: "Jojowacaw",
  nameDisplay: ["Jojowacaw", "Organizer", ""] as const,
  niche: "Wedding Planner & Organizer",
  tagline: "Savor Every Moment With Us",
  heroDesc: "Jojowacaw Organizer hadir untuk menjadikan hari pernikahan Anda menjadi kenangan terindah — dengan perencanaan menyeluruh, eksekusi profesional, dan sentuhan personal yang tak terlupakan.",
  aboutDesc: "Jojowacaw Organizer adalah layanan wedding planner & organizer profesional berbasis di Subang, Jawa Barat. Kami menyediakan paket lengkap pernikahan — mulai dari perencanaan, dekorasi, MUA, hingga dokumentasi — agar Anda bisa menikmati setiap momen tanpa khawatir. Karena bagi kami, setiap pernikahan adalah cerita unik yang layak dirayakan dengan sempurna.",
  city: "Subang, Jawa Barat",
  address: "Subang, Jawa Barat",
  year: "2022",
  heroImg: "/img/wedding1.jpg",
  metaTitle: "Jojowacaw Organizer — Wedding Planner & Organizer Subang",
  metaDesc: "Wujudkan pernikahan impian Anda bersama Jojowacaw Organizer. Paket lengkap wedding planner, dekorasi, MUA & dokumentasi di Subang, Jawa Barat.",
};
// ============================================================

export const WHATSAPP_NUMBER = "6289677374440";
export const PHONE_DISPLAY = "0896-7737-4440";

export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const NAV_LINKS = [
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Galeri", href: "#galeri" },
  { label: "Paket", href: "#paket" },
  { label: "Blog", href: "#blog" },
  { label: "Kontak", href: "#kontak" },
];

export const SERVICES = [
  {
    title: "Wedding Planner",
    desc: "Perencanaan pernikahan menyeluruh dari konsep hingga hari H dengan pendampingan penuh.",
    icon: "Sparkles",
  },
  {
    title: "Wedding Organizer",
    desc: "Koordinasi semua vendor dan eksekusi hari H agar berjalan lancar tanpa hambatan.",
    icon: "ClipboardList",
  },
  {
    title: "Dekorasi",
    desc: "Konsep dekorasi elegan dan personal sesuai tema impian pasangan.",
    icon: "Flower2",
  },
  {
    title: "MUA & Busana",
    desc: "Riasan dan busana pengantin profesional untuk tampilan terbaik di hari istimewa.",
    icon: "Star",
  },
  {
    title: "Dokumentasi",
    desc: "Foto & video sinematik yang mengabadikan setiap momen berharga pernikahan Anda.",
    icon: "Camera",
  },
  {
    title: "Paket All-in-One",
    desc: "Solusi lengkap satu pintu — WO, dekorasi, MUA, dan dokumentasi dalam satu paket.",
    icon: "Gift",
  },
];

export const GALLERY = [
  { src: "/img/wedding2.jpg", cat: "Wedding", h: "tall" },
  { src: "/img/wedding6.jpg", cat: "Dekorasi", h: "short" },
  { src: "/img/wedding3.jpg", cat: "Wedding", h: "short" },
  { src: "/img/wedding7.jpg", cat: "Dekorasi", h: "tall" },
  { src: "/img/wedding4.jpg", cat: "Wedding", h: "tall" },
  { src: "/img/wedding5.jpg", cat: "Dokumentasi", h: "short" },
  { src: "/img/wedding1.jpg", cat: "Wedding", h: "short" },
  { src: "/img/wedding6.jpg", cat: "Dekorasi", h: "tall" },
  { src: "/img/wedding7.jpg", cat: "Wedding", h: "short" },
];

export const GALLERY_TABS = ["Semua", "Wedding", "Dekorasi", "Dokumentasi"] as const;

type Pkg = { name: string; tag?: string; price: number; popular?: boolean; features: string[] };

export const WO_PACKAGES: Pkg[] = [
  {
    name: "Paket Silver",
    tag: "50 – 150 tamu",
    price: 3_500_000,
    features: [
      "Koordinator & 2 tim hari H",
      "Briefing & technical meeting",
      "Susunan acara & rundown",
      "Pendamping pengantin",
      "Konsultasi gratis",
    ],
  },
  {
    name: "Paket Gold",
    tag: "150 – 300 tamu",
    price: 6_000_000,
    popular: true,
    features: [
      "Koordinator senior & 4 tim hari H",
      "Briefing, TM & gladi resik",
      "Rundown, cue card & timeline",
      "Pendamping kedua pengantin",
      "Koordinasi seluruh vendor",
      "Konsultasi tak terbatas",
    ],
  },
  {
    name: "Paket Platinum",
    tag: "300 – 500 tamu",
    price: 9_500_000,
    features: [
      "Koordinator senior & 7 tim hari H",
      "Briefing, TM & 2x gladi resik",
      "Custom rundown & timeline detail",
      "Pendamping & asisten keluarga",
      "Full vendor coordination",
      "Laporan & evaluasi pasca acara",
    ],
  },
  {
    name: "Paket All Package",
    tag: "WO + Dekorasi + MUA + Foto",
    price: 15_000_000,
    features: [
      "Full wedding organizer",
      "Dekorasi pelaminan & area resepsi",
      "MUA pengantin & keluarga inti",
      "Fotografer & videografer",
      "Koordinasi semua vendor",
      "Konsep & supervisi penuh hari H",
    ],
  },
];

export const DEKOR_PACKAGES: Pkg[] = [
  { name: "Dekorasi Minimalis", tag: "Simpel Elegan", price: 7_000_000, features: ["Pelaminan utama", "Backdrop akad", "Standing flower", "Photobooth sederhana", "Karpet & ornamen"] },
  { name: "Dekorasi Modern", tag: "Contemporary", price: 12_000_000, popular: true, features: ["Pelaminan premium", "Backdrop akad custom", "Fresh flower arrangement", "Photobooth instagramable", "Dekor meja tamu"] },
  { name: "Dekorasi Luxury", tag: "Full Floral", price: 18_000_000, features: ["Pelaminan luxury", "Full fresh flower", "Aisle & entrance deco", "Photobooth premium", "Styling area lengkap"] },
  { name: "Dekorasi Grand", tag: "Full Venue", price: 28_000_000, features: ["Konsep ballroom / outdoor mewah", "Fresh flower & dekorasi lighting", "Stage & backdrop grand", "Photobooth signature", "Full area styling"] },
];

export const DOKUM_PACKAGES: Pkg[] = [
  { name: "Paket Akad", tag: "Akad Only", price: 2_500_000, features: ["1 fotografer", "1 videografer", "150 foto edit", "Highlight video 1 menit", "Soft file lengkap"] },
  { name: "Paket Resepsi", tag: "Akad + Resepsi", price: 4_500_000, popular: true, features: ["2 fotografer", "1 videografer", "350 foto edit", "Highlight video 2 menit", "Album cetak premium"] },
  { name: "Paket Full Day", tag: "Full Day", price: 6_500_000, features: ["3 fotografer", "2 videografer", "Cinematic video 3 menit", "Same day edit", "Album & USB box"] },
  { name: "Paket Sinematik", tag: "Pre + Full Day", price: 8_500_000, features: ["Tim sinematik lengkap", "Pre-wedding session", "Cinematic video 5 menit", "Foto unlimited", "Album luxury box"] },
];

export const PROCESS_STEPS = [
  { n: "01", title: "Konsultasi Gratis", desc: "Ceritakan impian pernikahan Anda. Kami dengar, pahami, dan wujudkan.", icon: "MessageCircle" },
  { n: "02", title: "Perencanaan Detail", desc: "Kami rancang konsep, rundown, dan koordinasikan semua vendor pilihan.", icon: "ClipboardList" },
  { n: "03", title: "Eksekusi Profesional", desc: "Hari H sepenuhnya di tangan kami. Anda tinggal hadir dan bersinar.", icon: "HeartHandshake" },
  { n: "04", title: "Kenangan Selamanya", desc: "Dokumentasi indah sebagai warisan momen bahagia yang takkan terlupakan.", icon: "Image" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Jojowacaw benar-benar membuat hari pernikahan kami sempurna. Tim mereka sangat profesional dan responsif dari awal hingga akhir. Terima kasih Jojowacaw!",
    name: "Indah & Yudha",
    date: "Mei 2025",
    avatar: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=200&q=80",
  },
  {
    quote:
      "Dari dekorasi hingga MUA semuanya indah melebihi ekspektasi kami. All package Jojowacaw benar-benar worth it dan sangat memudahkan.",
    name: "Tika & Deriza",
    date: "Maret 2025",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    quote:
      "Koordinasi vendornya sangat rapi. Kami tidak perlu khawatir apapun di hari H karena tim Jojowacaw sudah handle semuanya dengan luar biasa.",
    name: "Sari & Dimas",
    date: "Januari 2025",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

export const BLOG_POSTS = [
  {
    title: "Tips Memilih Wedding Organizer yang Tepat untuk Hari Spesial Anda",
    cat: "Tips",
    date: "1 Juni 2025",
    img: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&q=80",
  },
  {
    title: "Tren Dekorasi Pernikahan 2025: Dari Minimalis hingga Full Floral",
    cat: "Inspirasi",
    date: "10 Mei 2025",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
  },
  {
    title: "Checklist Persiapan Pernikahan 6 Bulan Sebelum Hari H",
    cat: "Panduan",
    date: "20 April 2025",
    img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
  },
];

export const formatIDR = (n: number) =>
  "Rp " + n.toLocaleString("id-ID");
