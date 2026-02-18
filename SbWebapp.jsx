import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useEffect, useRef } from "react";

const COACH_TELEGRAM = "https://t.me/omo_rabah";
const WHATSAPP_URL = "https://wa.me/YOURPHONENUMBER";
const TELEGRAM_URL = "https://t.me/YOURUSERNAME";
const WEBSITE_URL = "https://yourwebsite.com";
const BOOKING_URL = "https://yourwebsite.com/booking";

const CHANNELS = {
  members: "https://t.me/YourMembersGroup",
  news: "https://t.me/YourNewsChannel",
  live: "https://t.me/YourLiveChannel",
  education: "https://t.me/YourEducationChannel",
  signals: "https://t.me/YourSignalsChannel",
  fundy: "https://t.me/YourFundyChannel",
};

// ═══════════════════════════════════
// Hero Banner Image path
// ═══════════════════════════════════
// ضع صورة البانر في نفس مجلد المشروع باسم:
// hero-banner.jpg
const HERO_IMAGE = "/hero-banner.jpg";

// ═══════════════════════════════════
// صور الأقسام — ضعها في مجلد public
// ═══════════════════════════════════
// /go-intel.jpg
// /strategies.jpg
// /indicators.jpg
// /go-os.jpg

// ═══════════════════════════════════
// SVG Icons
// ═══════════════════════════════════
function WhatsAppIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function TelegramIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

// ═══════════════════════════════════
// Animated Background
// ═══════════════════════════════════
function AnimBG() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" }}>
      <div style={{
        position: "absolute", width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",
        top: "-10%", right: "-10%", animation: "floatOrb 20s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)",
        bottom: "10%", left: "-5%", animation: "floatOrb 25s ease-in-out infinite reverse",
      }} />
      <div style={{
        position: "absolute", width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
        top: "40%", left: "50%", animation: "floatOrb 18s ease-in-out infinite",
      }} />
    </div>
  );
}

// ═══════════════════════════════════
// Section Fade-In Observer
// ═══════════════════════════════════
function FadeIn({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)",
      transition: `opacity 0.7s ${delay}s ease, transform 0.7s ${delay}s ease`, ...style
    }}>{children}</div>
  );
}

// ═══════════════════════════════════
// Card Component
// ═══════════════════════════════════
function Card({ children, gold, glow, onClick, style = {} }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: gold
          ? "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(30,30,30,0.95) 100%)"
          : "rgba(255,255,255,0.04)",
        border: gold ? "1px solid rgba(212,175,55,0.4)" : "1px solid rgba(255,255,255,0.08)",
        borderRadius: 20, padding: "28px 24px", cursor: onClick ? "pointer" : "default",
        transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
        transform: hover && onClick ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
        boxShadow: hover && glow ? "0 20px 60px rgba(212,175,55,0.15)" : hover && onClick ? "0 12px 40px rgba(0,0,0,0.3)" : "none",
        backdropFilter: "blur(20px)", position: "relative", overflow: "hidden", ...style
      }}
    >
      {gold && <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: "linear-gradient(90deg, transparent, #d4af37, transparent)"
      }} />}
      {children}
    </div>
  );
}

// ═══════════════════════════════════
// Button
// ═══════════════════════════════════
function Btn({ children, primary, outline, href, onClick, full, small, style = {} }) {
  const [h, setH] = useState(false);
  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
    padding: small ? "10px 20px" : "14px 32px",
    fontSize: small ? 14 : 16, fontWeight: 600, fontFamily: "'Tajawal', sans-serif",
    borderRadius: 14, cursor: "pointer", transition: "all 0.3s ease",
    textDecoration: "none", border: "none", width: full ? "100%" : "auto",
    background: primary
      ? h ? "linear-gradient(135deg, #e5c246 0%, #c9a020 100%)" : "linear-gradient(135deg, #d4af37 0%, #b8941f 100%)"
      : outline ? "transparent" : h ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)",
    color: primary ? "#0a0a0a" : "#fff",
    border: outline ? "1px solid rgba(212,175,55,0.5)" : "none",
    transform: h ? "translateY(-2px)" : "none",
    boxShadow: h && primary ? "0 8px 30px rgba(212,175,55,0.3)" : "none",
    ...style
  };
  const Tag = href ? "a" : "button";
  const extra = href ? { href, target: "_blank", rel: "noopener noreferrer" } : { onClick };
  return <Tag {...extra} style={base} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{children}</Tag>;
}

// ═══════════════════════════════════
// Badge
// ═══════════════════════════════════
function Badge({ children, color = "#d4af37" }) {
  return (
    <span style={{
      display: "inline-block", padding: "4px 14px", borderRadius: 50,
      fontSize: 12, fontWeight: 700, background: `${color}22`, color,
      border: `1px solid ${color}44`, letterSpacing: 0.5
    }}>{children}</span>
  );
}

// ═══════════════════════════════════
// Stat Counter
// ═══════════════════════════════════
function Stat({ value, label, icon }) {
  return (
    <div style={{ textAlign: "center", padding: "20px 12px" }}>
      <div style={{ fontSize: 36, marginBottom: 4 }}>{icon}</div>
      <div style={{
        fontSize: 32, fontWeight: 800, color: "#d4af37",
        fontFamily: "'Tajawal', sans-serif", lineHeight: 1.2
      }}>{value}</div>
      <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>{label}</div>
    </div>
  );
}

// ═══════════════════════════════════
// Section Title
// ═══════════════════════════════════
function SectionTitle({ icon, title, sub }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 48 }}>
      <div style={{ fontSize: 48, marginBottom: 12 }}>{icon}</div>
      <h2 style={{
        fontSize: 32, fontWeight: 800, color: "#fff", margin: "0 0 12px",
        fontFamily: "'Tajawal', sans-serif"
      }}>{title}</h2>
      {sub && <p style={{
        fontSize: 16, color: "rgba(255,255,255,0.5)", margin: 0, maxWidth: 500, marginInline: "auto"
      }}>{sub}</p>}
      <div style={{
        width: 60, height: 3, background: "linear-gradient(90deg, #d4af37, transparent)",
        margin: "16px auto 0", borderRadius: 2
      }} />
    </div>
  );
}

// ═══════════════════════════════════
// Image Section Card (for GO Intel, Strategies, etc.)
// ═══════════════════════════════════
function ImageSectionCard({ image, children, reverse }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: 32,
      alignItems: "center",
      marginBottom: 48,
    }}>
      {reverse ? (
        <>
          <div>{children}</div>
          <div style={{ order: -1 }}>
            <div style={{
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid rgba(212,175,55,0.2)",
              aspectRatio: "16/10",
              background: "rgba(255,255,255,0.03)",
            }}>
              <img src={image} alt="" style={{
                width: "100%", height: "100%", objectFit: "cover", display: "block",
              }} onError={(e) => { e.target.style.display = "none"; }} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div style={{
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid rgba(212,175,55,0.2)",
              aspectRatio: "16/10",
              background: "rgba(255,255,255,0.03)",
            }}>
              <img src={image} alt="" style={{
                width: "100%", height: "100%", objectFit: "cover", display: "block",
              }} onError={(e) => { e.target.style.display = "none"; }} />
            </div>
          </div>
          <div>{children}</div>
        </>
      )}
    </div>
  );
}

// ═══════════════════════════════════
// Expandable Detail Card
// ═══════════════════════════════════
function DetailCard({ icon, title, desc, items, color = "#d4af37", defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <Card onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          {icon && <span style={{ fontSize: 28 }}>{icon}</span>}
          <div>
            <h4 style={{ fontSize: 17, fontWeight: 700, color, margin: 0, fontFamily: "'Tajawal', sans-serif" }}>{title}</h4>
            {desc && <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", margin: "4px 0 0" }}>{desc}</p>}
          </div>
        </div>
        <span style={{
          color, fontSize: 20, transition: "transform 0.3s",
          transform: open ? "rotate(45deg)" : "rotate(0)",
          flexShrink: 0,
        }}>+</span>
      </div>
      {open && items && (
        <div style={{ marginTop: 16, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {items.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8 }}>
              <span style={{ color, flexShrink: 0, fontSize: 12, marginTop: 3 }}>◆</span>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>{item}</span>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

// ═══════════════════════════════════
// Navigation
// ═══════════════════════════════════
function Nav({ active, setActive }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const items = [
    { id: "home", label: "الرئيسية" },
    { id: "gointel", label: "GO Intel" },
    { id: "goos", label: "GO OS" },
    { id: "packages", label: "الباقات" },
    { id: "success", label: "قصص النجاح" },
    { id: "contact", label: "تواصل" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(10,10,10,0.95)" : "rgba(10,10,10,0.7)",
      backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)",
      transition: "all 0.3s ease",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: 64
      }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 10, cursor: "pointer"
        }} onClick={() => { setActive("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <span style={{ fontSize: 28 }}>👑</span>
          <span style={{
            fontSize: 20, fontWeight: 800, color: "#d4af37",
            fontFamily: "'Tajawal', sans-serif"
          }}>الباشا</span>
        </div>

        {/* Desktop */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}
          className="nav-desktop">
          {items.map(it => (
            <button key={it.id} onClick={() => { setActive(it.id); setOpen(false); }}
              style={{
                background: active === it.id ? "rgba(212,175,55,0.15)" : "transparent",
                color: active === it.id ? "#d4af37" : "rgba(255,255,255,0.7)",
                border: "none", padding: "8px 16px", borderRadius: 10, cursor: "pointer",
                fontSize: 14, fontWeight: 600, fontFamily: "'Tajawal', sans-serif",
                transition: "all 0.3s ease"
              }}>{it.label}</button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="nav-mobile-toggle" onClick={() => setOpen(!open)} style={{
          background: "none", border: "none", color: "#d4af37", fontSize: 24, cursor: "pointer",
          display: "none"
        }}>{open ? "✕" : "☰"}</button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="nav-mobile-menu" style={{
          padding: "8px 24px 20px", display: "flex", flexDirection: "column", gap: 4,
          borderTop: "1px solid rgba(255,255,255,0.06)"
        }}>
          {items.map(it => (
            <button key={it.id} onClick={() => { setActive(it.id); setOpen(false); }}
              style={{
                background: active === it.id ? "rgba(212,175,55,0.15)" : "transparent",
                color: active === it.id ? "#d4af37" : "rgba(255,255,255,0.7)",
                border: "none", padding: "12px 16px", borderRadius: 10, cursor: "pointer",
                fontSize: 15, fontWeight: 600, fontFamily: "'Tajawal', sans-serif",
                textAlign: "right", transition: "all 0.3s ease"
              }}>{it.label}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ═══════════════════════════════════
// Hero Section
// ═══════════════════════════════════
function Hero({ setActive }) {
  return (
    <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 24px 60px", position: "relative" }}>
      {/* Hero Banner Image */}
      <FadeIn style={{ width: "100%", maxWidth: 900, marginBottom: 40 }}>
        <div style={{
          borderRadius: 24,
          overflow: "hidden",
          border: "1px solid rgba(212,175,55,0.3)",
          boxShadow: "0 20px 80px rgba(212,175,55,0.1)",
          aspectRatio: "16/7",
          background: "linear-gradient(135deg, rgba(212,175,55,0.1), rgba(10,10,10,0.9))",
        }}>
          <img src={HERO_IMAGE} alt="الباشا" style={{
            width: "100%", height: "100%", objectFit: "cover", display: "block",
          }} onError={(e) => {
            e.target.style.display = "none";
          }} />
        </div>
      </FadeIn>

      <div style={{ textAlign: "center", maxWidth: 800, position: "relative", zIndex: 1 }}>
        <FadeIn>
          <Badge>🇫🇷 رائد أعمال في فرنسا</Badge>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 style={{
            fontSize: "clamp(36px, 7vw, 64px)", fontWeight: 900, lineHeight: 1.15,
            margin: "24px 0 0", fontFamily: "'Tajawal', sans-serif",
            background: "linear-gradient(135deg, #fff 0%, #d4af37 50%, #fff 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundSize: "200% 200%", animation: "shimmer 4s ease infinite"
          }}>
            كوتش عمر رباح الباشا
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p style={{
            fontSize: 22, color: "#d4af37", margin: "16px 0 0",
            fontWeight: 700, fontFamily: "'Tajawal', sans-serif",
            letterSpacing: 1
          }}>
            ✦ الباشا معكم.. فلا خوف عليكم ✦
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p style={{
            fontSize: 18, color: "rgba(255,255,255,0.65)", margin: "20px auto 0",
            maxWidth: 550, lineHeight: 1.8
          }}>
            مؤسس نظام <strong style={{ color: "#d4af37" }}>SB Model</strong> ومشروع <strong style={{ color: "#d4af37" }}>X</strong>
            <br />مستشار وخبير في أسواق المال
            <br />تداول • استثمار • ذكاء اصطناعي • دخل سلبي
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: 16, margin: "40px auto", maxWidth: 650
          }}>
            <Stat icon="🏆" value="+2,779" label="متدرب" />
            <Stat icon="📅" value="+9" label="سنوات خبرة" />
            <Stat icon="🌍" value="+15" label="دولة عربية" />
            <Stat icon="⭐" value="SB" label="Model" />
          </div>
        </FadeIn>
        <FadeIn delay={0.5}>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: 16 }}>
            <Btn primary onClick={() => setActive("packages")}>📦 ابدأ الآن</Btn>
            <Btn outline onClick={() => setActive("gointel")}>🚀 استكشف GO Intel</Btn>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ═══════════════════════════════════
// GO Intel Section
// ═══════════════════════════════════
function GoIntel({ setActive }) {
  const markets = [
    { icon: "💱", name: "Forex", desc: "أزواج العملات الرئيسية والثانوية" },
    { icon: "📈", name: "Stocks", desc: "الأسهم العالمية" },
    { icon: "🪙", name: "Crypto", desc: "العملات الرقمية" },
  ];

  const strategies = [
    { icon: "🎯", title: "Maestro", desc: "Total market intelligence at a glance.", items: ["رؤية شاملة للسوق في لحظة", "تحليل متعدد الأطر الزمنية", "دمج المؤشرات والهيكل السعري", "تنبيهات ذكية فورية"] },
    { icon: "🔍", title: "Seeker", desc: "Precision entries made simple.", items: ["نقاط دخول دقيقة ومبسطة", "فلترة إشارات السوق الضوضائية", "تحديد أفضل لحظات الدخول", "مناسب للمبتدئين والمحترفين"] },
    { icon: "🏛️", title: "SMC", desc: "Institutional-Driven Market Framework.", items: ["إطار عمل مبني على حركة المؤسسات", "تحديد مناطق السيولة", "تتبع الأموال الذكية Smart Money", "كشف التلاعب المؤسسي"] },
    { icon: "⚡", title: "Strike 90", desc: "Built for precision timing and discipline.", items: ["دقة توقيت عالية جداً", "نظام انضباط صارم", "نسبة نجاح مرتفعة", "مثالي للصفقات السريعة"] },
    { icon: "📊", title: "Technical Analysis", desc: "Structure-Based Price Analysis.", items: ["تحليل هيكلي للسعر", "الدعم والمقاومة الديناميكية", "أنماط الشموع اليابانية", "تحليل الترندات والقنوات السعرية"] },
  ];

  const indicators = [
    { icon: "🛡️", title: "Defender", desc: "Capital protection and risk clarity.", items: ["حماية رأس المال أولاً", "وضوح كامل في إدارة المخاطر", "تحديد وقف الخسارة الذكي", "حساب حجم الصفقة الآمن"] },
    { icon: "🏹", title: "Hunter", desc: "Quick momentum-based execution.", items: ["تنفيذ سريع مبني على الزخم", "اقتناص الفرص اللحظية", "مؤشر قوة الاتجاه", "إشارات دخول وخروج فورية"] },
    { icon: "🎯", title: "Maestro", desc: "Total market intelligence at a glance.", items: ["ذكاء سوقي شامل", "لوحة تحكم متكاملة", "تحليل متعدد الأبعاد", "قراءة فورية للسوق"] },
    { icon: "🔍", title: "Seeker", desc: "Precision entries made simple.", items: ["دخول دقيق مبسط", "كشف فرص الدخول المثالية", "فلتر إشارات عالي الجودة", "مناسب لجميع المستويات"] },
    { icon: "🎯", title: "Strike90", desc: "High-probability strike zone.", items: ["منطقة ضربة عالية الاحتمالية", "توقيت مثالي للدخول", "نظام ثقة مبني على البيانات", "أداء مُثبت ومُختبر"] },
  ];

  return (
    <section style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <SectionTitle icon="📊" title="GO Intel" sub="معلومات تداول فورية عبر الأسواق الرئيسية" />

      {/* Intro */}
      <FadeIn>
        <Card gold style={{ textAlign: "center", marginBottom: 48, padding: "40px 24px" }}>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", lineHeight: 2, margin: 0 }}>
            <strong style={{ color: "#d4af37" }}>GO INTEL</strong> يقدم معلومات تداول فورية عبر الأسواق الرئيسية
            <br />
            بدلاً من مطاردة الرسوم البيانية طوال اليوم، يحصل الأعضاء على
            <br />
            <strong style={{ color: "#d4af37" }}>سياق سوقي واضح</strong> و<strong style={{ color: "#d4af37" }}>رؤى قابلة للتنفيذ</strong>
          </p>
          <Btn outline small href="#" style={{ marginTop: 20 }}>Open Bot</Btn>
        </Card>
      </FadeIn>

      {/* GO Intel Image + Markets */}
      <FadeIn>
        <ImageSectionCard image="/go-intel.jpg">
          <div>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: "#d4af37", margin: "0 0 16px", fontFamily: "'Tajawal', sans-serif" }}>الأسواق المدعومة</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {markets.map((m, i) => (
                <Card key={i} gold style={{ display: "flex", gap: 14, alignItems: "center", padding: "16px 20px" }}>
                  <span style={{ fontSize: 32 }}>{m.icon}</span>
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: "#fff" }}>{m.name}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{m.desc}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </ImageSectionCard>
      </FadeIn>

      {/* Strategies */}
      <FadeIn delay={0.1}>
        <div style={{ marginTop: 48 }}>
          <h3 style={{
            textAlign: "center", fontSize: 26, color: "#d4af37", fontWeight: 800,
            fontFamily: "'Tajawal', sans-serif", marginBottom: 8,
          }}>⚔️ Strategies</h3>
          <p style={{ textAlign: "center", fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 28 }}>استراتيجيات التداول المتقدمة</p>
        </div>
      </FadeIn>
      <FadeIn delay={0.15}>
        <ImageSectionCard image="/strategies.jpg" reverse>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {strategies.map((s, i) => (
              <DetailCard key={i} icon={s.icon} title={s.title} desc={s.desc} items={s.items} />
            ))}
          </div>
        </ImageSectionCard>
      </FadeIn>

      {/* Indicators */}
      <FadeIn delay={0.2}>
        <div style={{ marginTop: 48 }}>
          <h3 style={{
            textAlign: "center", fontSize: 26, color: "#d4af37", fontWeight: 800,
            fontFamily: "'Tajawal', sans-serif", marginBottom: 8,
          }}>📡 Indicators</h3>
          <p style={{ textAlign: "center", fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 28 }}>المؤشرات الذكية</p>
        </div>
      </FadeIn>
      <FadeIn delay={0.25}>
        <ImageSectionCard image="/indicators.jpg">
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {indicators.map((ind, i) => (
              <DetailCard key={i} icon={ind.icon} title={ind.title} desc={ind.desc} items={ind.items} color="#a78bfa" />
            ))}
          </div>
        </ImageSectionCard>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Btn primary onClick={() => setActive("packages")}>📦 اختر باقتك الآن</Btn>
        </div>
      </FadeIn>
    </section>
  );
}

// ═══════════════════════════════════
// GO OS Section
// ═══════════════════════════════════
function GoOS({ setActive }) {
  const features = [
    { icon: "🧠", title: "ذكاء تداول شخصي", desc: "كل تجربة مخصصة حسب أهدافك، تحمّل المخاطر، الأسواق المفضلة، وأنماط السلوك — لا يوجد لوحتا تحكم متشابهتان" },
    { icon: "📡", title: "إشارات مبنية على الذكاء", desc: "الإشارات تُولّد من نماذج ذكاء حية — تعتمد على الاستراتيجية وظروف السوق والاحتمالية — GO OS يشرح لماذا الإشارة موجودة" },
    { icon: "⚙️", title: "محرك الاستراتيجيات", desc: "منطق متقدم يفكّك تحولات هيكل السوق، مناطق السيولة، إنهاك الزخم، واحتمالية الاستمرار مقابل الانعكاس" },
    { icon: "📸", title: "تحليل الشارت بالصور", desc: "ارفع صورة شارت وGO OS يحللها — يحدد الهيكل والترند والمستويات الرئيسية ويكتشف أخطاء التنفيذ فوراً" },
    { icon: "📊", title: "تتبع الأداء الحي", desc: "نسب الربح/الخسارة، أداء الاستراتيجية، الدقة التاريخية حسب السوق، كفاءة التنفيذ الشخصي — بيانات شفافة ومُحدّثة باستمرار" },
    { icon: "📰", title: "أخبار وبيانات فورية", desc: "GO OS يدمج الأخبار الماكروية والسوقية الفورية ويحولها لسياق قابل للتنفيذ — يفهم التأثير وليس فقط المعلومة" },
    { icon: "🌍", title: "تواصل متعدد اللغات", desc: "GO OS يتواصل بطلاقة عبر لغات متعددة في الوقت الفعلي — مشاركة عالمية سلسة وشاملة" },
  ];

  return (
    <section style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <SectionTitle icon="🤖" title="GO OS" sub="نظام التشغيل الذكي في قلب منظومة GO" />

      <FadeIn>
        <Card gold style={{ textAlign: "center", marginBottom: 48, padding: "40px 24px" }}>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", lineHeight: 2, margin: 0 }}>
            <strong style={{ color: "#d4af37" }}>GO OS</strong> هو نظام التشغيل الذكي في قلب منظومة GO بالكامل
            <br />
            يعمل كالعقل الذي يربط البيانات والاستراتيجية والسلوك والنتائج
            <br />
            يحوّل التعقيد إلى <strong style={{ color: "#d4af37" }}>وضوح في الوقت الفعلي</strong>
          </p>
          <div style={{ marginTop: 16, fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
            GO OS لا يقرأ الأسواق فقط — بل يفهم السياق، يتكيّف مع المستخدم، ويتطور مع كل تفاعل
          </div>
          <Btn outline small href="#" style={{ marginTop: 20 }}>Open GO OS</Btn>
        </Card>
      </FadeIn>

      <FadeIn delay={0.1}>
        <ImageSectionCard image="/go-os.jpg">
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: "#d4af37", margin: "0 0 8px", fontFamily: "'Tajawal', sans-serif" }}>ماذا يفعل GO OS</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 16 }}>
              {[
                "يحلل بيانات السوق والهيكل والزخم والاحتمالية في الوقت الفعلي",
                "يفلتر ضوضاء السوق ويزيل التحيز العاطفي من القرارات",
                "يُشغّل جميع تنبيهات ورؤى وأدوات وطبقات ذكاء GO",
                "يعمل كنظام تشغيل تداول شخصي — وليس مجرد تغذية إشارات عامة",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ color: "#d4af37", flexShrink: 0, marginTop: 2 }}>✦</span>
                  <span style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </ImageSectionCard>
      </FadeIn>

      {/* Core Features Grid */}
      <FadeIn delay={0.2}>
        <h3 style={{
          textAlign: "center", fontSize: 24, color: "#d4af37", fontWeight: 800,
          fontFamily: "'Tajawal', sans-serif", marginBottom: 28, marginTop: 20,
        }}>⚡ المميزات الأساسية</h3>
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 20 }}>
        {features.map((f, i) => (
          <FadeIn key={i} delay={0.25 + i * 0.06}>
            <Card style={{ height: "100%" }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>{f.icon}</div>
              <h4 style={{ fontSize: 18, fontWeight: 700, color: "#d4af37", margin: "0 0 8px", fontFamily: "'Tajawal', sans-serif" }}>{f.title}</h4>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.8 }}>{f.desc}</p>
            </Card>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.5}>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Btn primary onClick={() => setActive("packages")}>📦 اشترك للوصول</Btn>
        </div>
      </FadeIn>
    </section>
  );
}

// ═══════════════════════════════════
// Packages Section
// ═══════════════════════════════════
function Packages() {
  const pkgs = [
    {
      id: "lite", name: "LITE Package", tag: "للأفراد الجدد", price: "349", origPrice: "999", days: "30",
      color: "#4ade80", recommended: false,
      eTrading: ["2 قنوات توصيات", "تداول مدعوم بالذكاء الاصطناعي", "مؤشرات خاصة", "نظام ذكي لتقييم أدائك وانضباطك"],
      strategy: "استراتيجية الدخول R1+R2",
      strategyDetails: ["ملف جاهز لإدارة المخاطر", "خطة تطبيق يومية"],
      eModel: true,
    },
    {
      id: "pro", name: "Pro Package", tag: "للمستثمرين المتوسطين", price: "999", origPrice: "2,999", days: "60",
      color: "#d4af37", recommended: true,
      eTrading: ["5 قنوات توصيات بالـ AI", "تداول مدعوم بالذكاء الاصطناعي", "مؤشرات خاصة بالـ AI", "تداول لايف يومي مع المحللين", "كورس الحسابات الممولة والربح بالـ AI"],
      strategy: "🍊 استراتيجية برتقالة الفجر",
      strategyDetails: ["استراتيجية التداول الذكية", "تعمل على MT5", "تركّز على نقاط الدخول بدقة عالية"],
      eModel: true,
    },
    {
      id: "ultra", name: "ULTRA Package", tag: "للمحترفين", price: "1,699", origPrice: "4,999", days: "90",
      color: "#a78bfa", recommended: false,
      eTrading: ["12 قناة توصيات بالـ AI", "4 مؤشرات التداول بالـ AI", "تداول لايف يومي مع المحللين", "تداول بالـ AI", "جلسات خاصة لتحليل حسابك وأخطائك", "كورس الحسابات الممولة والربح بالـ AI", "كورس نفسي لبناء عقلية المتداول"],
      strategy: "⚡ الجيل الجديد من SB MODEL",
      strategyDetails: ["مستويات SB MODEL بالـ AI", "مستوى SB-Raven", "نقلة نوعية في التحليل الموجي والتداول الذكي"],
      eModel: true,
    },
  ];

  return (
    <section style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <SectionTitle icon="📦" title="الباقات التعليمية" sub="استثمر في مستقبلك المالي — نظام مُجرّب ومبني على نتائج حقيقية" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24, alignItems: "stretch" }}>
        {pkgs.map((p, i) => (
          <FadeIn key={p.id} delay={i * 0.12}>
            <div style={{ position: "relative", height: "100%" }}>
              {p.recommended && (
                <div style={{
                  position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", zIndex: 2,
                  background: "linear-gradient(135deg, #d4af37, #b8941f)", color: "#0a0a0a",
                  padding: "6px 24px", borderRadius: 50, fontSize: 13, fontWeight: 800,
                  fontFamily: "'Tajawal', sans-serif", whiteSpace: "nowrap"
                }}>⭐ يُوصى بها</div>
              )}
              <Card gold={p.recommended} glow={p.recommended} style={{
                height: "100%", display: "flex", flexDirection: "column",
                border: p.recommended ? "1px solid rgba(212,175,55,0.5)" : "1px solid rgba(255,255,255,0.08)",
              }}>
                <div style={{ textAlign: "center", marginBottom: 20 }}>
                  <Badge color={p.color}>{p.tag}</Badge>
                  <h3 style={{ fontSize: 26, fontWeight: 800, color: p.color, margin: "16px 0 4px", fontFamily: "'Tajawal', sans-serif" }}>{p.name}</h3>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, textDecoration: "line-through" }}>قيمة المحتوى {p.origPrice}$</div>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 4, marginTop: 8 }}>
                    <span style={{ fontSize: 44, fontWeight: 900, color: "#fff", fontFamily: "'Tajawal', sans-serif" }}>{p.price}</span>
                    <span style={{ fontSize: 18, color: "rgba(255,255,255,0.5)" }}>$</span>
                  </div>
                  <div style={{ fontSize: 14, color: "rgba(255,255,255,0.4)" }}>{p.days} يوم</div>
                </div>

                <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 16, marginBottom: 12 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: p.color, marginBottom: 10, letterSpacing: 1 }}>📊 e-Trading</div>
                  {p.eTrading.map((item, j) => (
                    <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8 }}>
                      <span style={{ color: p.color, flexShrink: 0 }}>✅</span>
                      <span style={{ fontSize: 14, color: "rgba(255,255,255,0.75)" }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 12, marginBottom: 12 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: p.color, marginBottom: 8 }}>{p.strategy}</div>
                  {p.strategyDetails.map((s, j) => (
                    <div key={j} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                      <span style={{ color: p.color, flexShrink: 0 }}>•</span>
                      <span style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>{s}</span>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 12, marginBottom: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: p.color, marginBottom: 8 }}>💰 e-Model (الدخل السلبي)</div>
                  {["Weekly Commission — عمولات أسبوعية", "Leverage Profit — مضاعفة الأرباح", "Business Asset 24/7 — أصل رقمي", "Fast Payout — سحب سريع"].map((m, j) => (
                    <div key={j} style={{ display: "flex", gap: 8, marginBottom: 5 }}>
                      <span style={{ color: p.color, flexShrink: 0, fontSize: 12 }}>💎</span>
                      <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{m}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: "auto" }}>
                  <Btn primary={p.recommended} outline={!p.recommended} full href={COACH_TELEGRAM}>
                    اشترك الآن — {p.price}$
                  </Btn>
                </div>
              </Card>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.3}>
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14 }}>🎁 خصم <strong style={{ color: "#d4af37" }}>15%</strong> عند الدفع بالكريبتو!</p>
        </div>
      </FadeIn>
    </section>
  );
}

// ═══════════════════════════════════
// Success Stories
// ═══════════════════════════════════
function SuccessStories({ setActive }) {
  const stories = [
    { flag: "🇮🇶", name: "متدرب مرتضى من العراق", text: "بدأ بمبلغ 21$ وخلال 27 يوم وصل إلى 3,000$ وسحب 2 مليون دينار عراقي", highlight: "21$ → 3,000$" },
    { flag: "🏅", name: "مدرب في مشروع X", text: "قبل ما يدخل معي كان خسران 20,000$ والآن حقق 400,000$ خلال 30 يوم فقط!", highlight: "-20K$ → +400K$" },
    { flag: "🎓", name: "ورشة تدريب مكثف أوف لاين", text: "تجمعات مع المتدربين وأخذ تعليمات وأسرار تساعدهم في مجال التداول والأسواق المالية", highlight: "تدريب حي" },
  ];
  return (
    <section style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <SectionTitle icon="🏆" title="قصص نجاح متدربيني" sub="آراء المتدربين تحت إشرافي" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
        {stories.map((s, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <Card gold style={{ textAlign: "center" }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>{s.flag}</div>
              <h4 style={{ fontSize: 18, fontWeight: 700, color: "#d4af37", margin: "0 0 8px", fontFamily: "'Tajawal', sans-serif" }}>{s.name}</h4>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.8, margin: "0 0 16px" }}>{s.text}</p>
              <div style={{
                display: "inline-block", padding: "8px 24px", borderRadius: 50,
                background: "rgba(212,175,55,0.15)", color: "#d4af37",
                fontSize: 18, fontWeight: 800, fontFamily: "'Tajawal', sans-serif"
              }}>{s.highlight}</div>
            </Card>
          </FadeIn>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <Btn primary onClick={() => setActive("packages")}>📦 ابدأ رحلتك الآن</Btn>
      </div>
    </section>
  );
}

// ═══════════════════════════════════
// Contact & Community
// ═══════════════════════════════════
function Contact() {
  const communityLinks = [
    { icon: "🏠", name: "جروب الأعضاء", url: CHANNELS.members },
    { icon: "📰", name: "X NEWS — الأخبار", url: CHANNELS.news },
    { icon: "🔴", name: "X LIVE — تداول لايف", url: CHANNELS.live },
    { icon: "📚", name: "X EDUCATION", url: CHANNELS.education },
    { icon: "📊", name: "X SIGNALS", url: CHANNELS.signals },
    { icon: "💵", name: "X FUNDY", url: CHANNELS.fundy },
  ];
  return (
    <section style={{ padding: "80px 24px", maxWidth: 1000, margin: "0 auto" }}>
      <SectionTitle icon="📞" title="تواصل معنا" sub="نحن هنا لمساعدتك في أي وقت" />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20, marginBottom: 48 }}>
        {/* Coach Card */}
        <FadeIn>
          <Card gold>
            <div style={{ fontSize: 36, textAlign: "center", marginBottom: 12 }}>👤</div>
            <h4 style={{ textAlign: "center", color: "#d4af37", fontSize: 18, fontWeight: 700, margin: "0 0 16px" }}>كوتش عمر رباح الباشا</h4>

            {/* Social Icons */}
            <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 20 }}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                style={{
                  width: 52, height: 52, borderRadius: 16,
                  background: "linear-gradient(135deg, #25D366, #128C7E)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(37,211,102,0.3)",
                  textDecoration: "none",
                }}>
                <WhatsAppIcon size={26} />
              </a>
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer"
                style={{
                  width: 52, height: 52, borderRadius: 16,
                  background: "linear-gradient(135deg, #2AABEE, #229ED9)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(42,171,238,0.3)",
                  textDecoration: "none",
                }}>
                <TelegramIcon size={26} />
              </a>
            </div>

            <Btn primary full href={COACH_TELEGRAM}>💬 تواصل عبر تلجرام</Btn>
          </Card>
        </FadeIn>

        {/* Booking Card */}
        <FadeIn delay={0.1}>
          <Card>
            <div style={{ fontSize: 36, textAlign: "center", marginBottom: 12 }}>📅</div>
            <h4 style={{ textAlign: "center", color: "#fff", fontSize: 18, fontWeight: 700, margin: "0 0 8px" }}>احجز مكالمة استشارية</h4>
            <p style={{ textAlign: "center", fontSize: 13, color: "rgba(255,255,255,0.5)", margin: "0 0 16px" }}>السبت — الخميس | 10ص - 10م (باريس)</p>
            <Btn outline full href={BOOKING_URL}>📅 احجز الآن</Btn>
          </Card>
        </FadeIn>
      </div>

      {/* Community */}
      <FadeIn delay={0.2}>
        <h3 style={{ textAlign: "center", fontSize: 22, color: "#d4af37", fontWeight: 700, marginBottom: 24, fontFamily: "'Tajawal', sans-serif" }}>
          👥 مجتمع الباشا — القنوات والمجموعات
        </h3>
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12 }}>
        {communityLinks.map((ch, i) => (
          <FadeIn key={i} delay={0.3 + i * 0.05}>
            <a href={ch.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <Card style={{ textAlign: "center", padding: "20px 12px" }}>
                <div style={{ fontSize: 28 }}>{ch.icon}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 8, fontWeight: 600 }}>{ch.name}</div>
              </Card>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ═══════════════════════════════════
// FAQ
// ═══════════════════════════════════
function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  const faqs = [
    { q: "هل أحتاج خبرة سابقة؟", a: "لا أبداً! باقة LITE تبدأ معك من الصفر." },
    { q: "كم أحتاج رأس مال للبدء؟", a: "يمكنك البدء بـ 100$ للتطبيق، أو استخدام الحسابات الممولة بدون رأس مال." },
    { q: "ما الفرق بين الباقات الثلاث؟", a: "LITE (349$/30يوم) للمبتدئين، Pro (999$/60يوم) للمتوسطين مع استراتيجية برتقالة الفجر، ULTRA (1,699$/90يوم) الأقوى مع SB-Raven والجيل الجديد من SB Model." },
    { q: "ما هو GO Intel؟", a: "نظام معلومات تداول فوري يغطي الفوركس والأسهم والكريبتو مع استراتيجيات ومؤشرات ذكية." },
    { q: "ما هو GO OS؟", a: "نظام التشغيل الذكي الذي يربط البيانات والاستراتيجية والسلوك — يحول التعقيد إلى قرارات واضحة." },
    { q: "ما هو SB-Raven؟", a: "الجيل الجديد من SB Model بالـ AI — نقلة نوعية في التحليل الموجي والتداول الذكي. متوفر في ULTRA." },
    { q: "هل يمكنني استرجاع المبلغ؟", a: "نعم، خلال أول 7 أيام إذا لم تكن راضياً." },
  ];
  return (
    <section style={{ padding: "60px 24px 80px", maxWidth: 700, margin: "0 auto" }}>
      <SectionTitle icon="❓" title="الأسئلة الشائعة" />
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {faqs.map((f, i) => (
          <FadeIn key={i} delay={i * 0.04}>
            <div
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              style={{
                background: openIdx === i ? "rgba(212,175,55,0.08)" : "rgba(255,255,255,0.03)",
                border: openIdx === i ? "1px solid rgba(212,175,55,0.3)" : "1px solid rgba(255,255,255,0.06)",
                borderRadius: 14, padding: "16px 20px", cursor: "pointer",
                transition: "all 0.3s ease"
              }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: openIdx === i ? "#d4af37" : "#fff" }}>{f.q}</span>
                <span style={{ color: "#d4af37", fontSize: 18, transition: "transform 0.3s", transform: openIdx === i ? "rotate(45deg)" : "rotate(0)" }}>+</span>
              </div>
              {openIdx === i && (
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", margin: "12px 0 0", lineHeight: 1.8, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 12 }}>{f.a}</p>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ═══════════════════════════════════
// Footer
// ═══════════════════════════════════
function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.06)", padding: "40px 24px",
      textAlign: "center"
    }}>
      <div style={{ fontSize: 24, marginBottom: 8 }}>👑</div>
      <div style={{ color: "#d4af37", fontSize: 18, fontWeight: 700, fontFamily: "'Tajawal', sans-serif" }}>الباشا معكم.. فلا خوف عليكم</div>

      {/* Footer Social Icons */}
      <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 20 }}>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
          style={{
            width: 44, height: 44, borderRadius: 12,
            background: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#25D366", transition: "all 0.3s ease",
            textDecoration: "none",
          }}>
          <WhatsAppIcon size={22} />
        </a>
        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer"
          style={{
            width: 44, height: 44, borderRadius: 12,
            background: "rgba(42,171,238,0.15)", border: "1px solid rgba(42,171,238,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#2AABEE", transition: "all 0.3s ease",
            textDecoration: "none",
          }}>
          <TelegramIcon size={22} />
        </a>
      </div>

      <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, marginTop: 16 }}>© 2026 كوتش عمر رباح الباشا — جميع الحقوق محفوظة</div>
    </footer>
  );
}

// ═══════════════════════════════════
// Main App
// ═══════════════════════════════════
export default function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [active]);

  const renderSection = () => {
    switch (active) {
      case "gointel": return <GoIntel setActive={setActive} />;
      case "goos": return <GoOS setActive={setActive} />;
      case "packages": return <Packages />;
      case "success": return <SuccessStories setActive={setActive} />;
      case "contact": return <Contact />;
      default: return (
        <>
          <Hero setActive={setActive} />
          <GoIntel setActive={setActive} />
          <GoOS setActive={setActive} />
          <Packages />
          <SuccessStories setActive={setActive} />
          <FAQ />
          <Contact />
        </>
      );
    }
  };

  return (
    <div style={{
      minHeight: "100vh", background: "#0a0a0a", color: "#fff",
      fontFamily: "'Tajawal', sans-serif", direction: "rtl",
      position: "relative", overflowX: "hidden"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0a0a0a; }
        ::selection { background: rgba(212,175,55,0.3); color: #fff; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: rgba(212,175,55,0.3); border-radius: 3px; }
        @keyframes shimmer {
          0%, 100% { background-position: 200% 50%; }
          50% { background-position: 0% 50%; }
        }
        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile-menu { display: none !important; }
        }
      `}</style>
      <AnimBG />
      <Nav active={active} setActive={setActive} />
      <div style={{ position: "relative", zIndex: 1 }}>
        {renderSection()}
        <Footer />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
