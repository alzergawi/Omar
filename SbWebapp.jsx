import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useEffect, useRef } from "react";

const COACH_TELEGRAM = "https://t.me/omo_rabah";
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
    { id: "projectx", label: "مشروع X" },
    { id: "packages", label: "الباقات" },
    { id: "ai", label: "الذكاء الاصطناعي" },
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
// Hero Section (تعديل حرف الشين)
// ═══════════════════════════════════
function Hero({ setActive }) {
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 24px 80px", position: "relative" }}>
      <div style={{ textAlign: "center", maxWidth: 800, position: "relative", zIndex: 1 }}>
        <FadeIn>
          <Badge>🇫🇷 رائد أعمال في فرنسا</Badge>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 style={{
            fontSize: "clamp(36px, 7vw, 64px)", 
            fontWeight: 800, // تقليل السماكة قليلاً ليصبح الحرف أوضح
            lineHeight: 1.5, // ✅ زيادة ارتفاع السطر لمنع قص النقاط
            paddingBottom: 10, // ✅ إضافة مسافة لمنع قص الحروف من الأسفل أو الأعلى
            paddingTop: 10,    // ✅ مسافة للأعلى للنقاط
            margin: "14px 0 0", 
            fontFamily: "'Tajawal', sans-serif",
            background: "linear-gradient(135deg, #fff 0%, #d4af37 50%, #fff 100%)",
            WebkitBackgroundClip: "text", 
            WebkitTextFillColor: "transparent",
            backgroundSize: "200% 200%", 
            animation: "shimmer 4s ease infinite"
          }}>
            كوتش عمر الباشا
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p style={{
            fontSize: 22, color: "#d4af37", margin: "16px 0 0",
            fontWeight: 700, fontFamily: "'Tajawal', sans-serif",
            letterSpacing: 0 // الأحرف العربية لا تحتاج تباعد كبير
          }}>
            ✦ الباشا معكم.. فلا خوف عليكم ✦
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p style={{
            fontSize: 18, color: "rgba(255,255,255,0.65)", margin: "20px auto 0",
            maxWidth: 550, lineHeight: 1.8
          }}>
            احد مؤسسين نظام <strong style={{ color: "#d4af37" }}>SB Model</strong> ومشروع <strong style={{ color: "#d4af37" }}>X</strong>
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
            <Btn outline onClick={() => setActive("projectx")}>🚀 استكشف مشروع X</Btn>
          </div>
        </FadeIn>

        {/* ═══ فيديو تعريفي — كوتش عمر ═══ */}
        <FadeIn delay={0.6}>
          <div style={{
            marginTop: 48, borderRadius: 20, overflow: "hidden",
            border: "1px solid rgba(212,175,55,0.3)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
            background: "rgba(0,0,0,0.4)",
            maxWidth: 700, marginInline: "auto"
          }}>
            <div style={{ textAlign: "center", padding: "16px 16px 8px" }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: "#d4af37" }}>🎬 تعرّف على كوتش عمر</span>
            </div>
            <video
              controls
              playsInline
              preload="metadata"
              poster=""
              style={{ width: "100%", display: "block", borderRadius: "0 0 20px 20px" }}
            >
              {/* ══ ضع رابط فيديو كوتش عمر هنا ══ */}
              <source src="/videos/coach-omar-intro.mp4" type="video/mp4" />
              متصفحك لا يدعم عرض الفيديو
            </video>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

// ═══════════════════════════════════
// Project X Section
// ═══════════════════════════════════
function ProjectX({ setActive }) {
  const features = [
    { icon: "📐", title: "الاستراتيجيات", desc: "X Psychology • X Master • X Logic", detail: "سيكولوجية التداول، إتقان SB Model، والتحليل العميق بأكثر من 40 مدرسة تحليل" },
    { icon: "🤖", title: "الذكاء الاصطناعي", desc: "تحليل • توصيات • مؤشرات", detail: "تحليل آلاف الشموع خلال ثواني، اكتشاف الفرص، تحديد مناطق الدخول والخروج بدقة" },
    { icon: "🔄", title: "الناسخ — Copy Trading", desc: "نسخ صفقات المحترفين تلقائياً", detail: "نفس الدخول ونفس الخروج — ربح أذكى بوقت أقل بدون تحليل أو تدخل منك" },
    { icon: "💰", title: "E-Commers — دخل سلبي", desc: "بدون تداول • بدون مخاطرة", detail: "عمولات أسبوعية، مضاعفة أرباح، أصل رقمي 24/7، سحب سريع — من 600$ إلى 250,000$ شهرياً" },
    { icon: "💵", title: "حسابات ممولة — X FUNDY", desc: "تداول بدون رأس مال شخصي", detail: "حسابات تصل لـ 200,000$ مع دعم كامل في اجتياز التقييم ونسبة أرباح عالية" },
    { icon: "📊", title: "Go Ai — التوصيات", desc: "فوركس • كريبتو • أسهم", detail: "توصيات يومية بالذكاء الاصطناعي مع نقاط دخول وخروج دقيقة وإدارة مخاطر" },
  ];
  return (
    <section style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <SectionTitle icon="🚀" title="مشروع X" sub="تحوّل لعقلية الاحتراف والحرية المالية" />
      <FadeIn>
        <Card gold style={{ textAlign: "center", marginBottom: 48, padding: "40px 24px" }}>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", lineHeight: 2, margin: 0 }}>
            مشروع X يمثل نظاماً متقدماً يجمع بين <strong style={{ color: "#d4af37" }}>التداول المتخصص</strong>
            {" "}و<strong style={{ color: "#d4af37" }}>الذكاء الاصطناعي</strong>
            {" "}و<strong style={{ color: "#d4af37" }}>التعليم التطبيقي</strong>
            {" "}و<strong style={{ color: "#d4af37" }}>بناء دخل ثابت</strong>
            <br /><br />
            يسعى لتحويل المتداول من ❌ مراقب للسوق إلى ✅ متداول متمرس + رائد أعمال ناجح
          </p>
        </Card>
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 20 }}>
        {features.map((f, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <Card style={{ height: "100%" }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>{f.icon}</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "#d4af37", margin: "0 0 6px", fontFamily: "'Tajawal', sans-serif" }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", margin: "0 0 12px", fontWeight: 600 }}>{f.desc}</p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.8 }}>{f.detail}</p>
            </Card>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.4}>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Btn primary onClick={() => setActive("packages")}>📦 اختر باقتك الآن</Btn>
        </div>
      </FadeIn>
    </section>
  );
}

// ═══════════════════════════════════
// Packages Section
// ═══════════════════════════════════
function Packages() {
  const [hoveredPkg, setHoveredPkg] = useState(null);

  const pkgs = [
    {
      id: "connect",
      name: "باقة Connect",
      // ══ ضع مسار صورة باقة Connect هنا ══
      image: "/images/connect.JPEG",
      price: "349",
      days: "30",
      color: "#4a90d9",
      recommended: false,
      link: COACH_TELEGRAM,
    },
    {
      id: "create",
      name: "باقة Create",
      // ══ ضع مسار صورة باقة Create هنا ══
      image: "/images/create.JPEG",
      price: "999",
      days: "60",
      color: "#2dd4a0",
      recommended: false,
      link: COACH_TELEGRAM,
    },
    {
      id: "complete",
      name: "باقة Complete",
      // ══ ضع مسار صورة باقة Complete هنا ══
      image: "/images/complete.JPEG",
      price: "1,699",
      days: "90",
      color: "#a78bfa",
      recommended: true,
      link: COACH_TELEGRAM,
    },
  ];

  return (
    <section style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <SectionTitle icon="📦" title="الباقات التعليمية" sub="استثمر في مستقبلك المالي — اختر الباقة المناسبة لك" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24, alignItems: "stretch" }}>
        {pkgs.map((p, i) => (
          <FadeIn key={p.id} delay={i * 0.12}>
            <div
              style={{ position: "relative", height: "100%" }}
              onMouseEnter={() => setHoveredPkg(p.id)}
              onMouseLeave={() => setHoveredPkg(null)}
            >
              {p.recommended && (
                <div style={{
                  position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", zIndex: 2,
                  background: "linear-gradient(135deg, #a78bfa, #7c3aed)", color: "#fff",
                  padding: "6px 24px", borderRadius: 50, fontSize: 13, fontWeight: 800,
                  fontFamily: "'Tajawal', sans-serif", whiteSpace: "nowrap"
                }}>⭐ الأقوى والأشمل</div>
              )}
              <div style={{
                borderRadius: 20, overflow: "hidden",
                border: p.recommended ? `2px solid ${p.color}` : "1px solid rgba(255,255,255,0.1)",
                transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
                transform: hoveredPkg === p.id ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                boxShadow: hoveredPkg === p.id
                  ? `0 20px 60px rgba(${p.recommended ? '167,139,250' : '0,0,0'},0.25)`
                  : "0 4px 20px rgba(0,0,0,0.2)",
                background: "rgba(255,255,255,0.03)",
                height: "100%", display: "flex", flexDirection: "column",
              }}>
                <img
                  src={p.image}
                  alt={p.name}
                  style={{
                    width: "100%", display: "block",
                    objectFit: "cover",
                  }}
                  loading="lazy"
                />
                <div style={{ padding: "20px 24px", marginTop: "auto" }}>
                  <Btn primary={p.recommended} outline={!p.recommended} full href={p.link}
                    style={p.recommended ? { background: `linear-gradient(135deg, ${p.color}, #7c3aed)`, color: "#fff" } : { borderColor: `${p.color}88`, color: p.color }}>
                    🚀 اشترك الآن — {p.price}$
                  </Btn>
                </div>
              </div>
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
// AI Section
// ═══════════════════════════════════
function AISection({ setActive }) {
  const items = [
    { icon: "⚡", text: "تحليل آلاف الشموع والمؤشرات خلال ثواني" },
    { icon: "🔍", text: "اكتشاف الفرص قبل ما يلاحظها الإنسان" },
    { icon: "🎯", text: "تحديد مناطق الدخول والخروج بدقة أعلى" },
    { icon: "🧠", text: "تقليل العاطفة والأخطاء النفسية في التداول" },
    { icon: "📊", text: "تحليل السوق على 40 مدرسة تحليل بضغطة زر" },
    { icon: "🤖", text: "آلية دخول الصفقات الذكية" },
  ];
  const channels = [
    { icon: "💱", name: "الفوركس", desc: "العملات الأجنبية" },
    { icon: "🪙", name: "الكريبتو", desc: "العملات الرقمية" },
    { icon: "📈", name: "الأسهم", desc: "أسهم عالمية (حلال)" },
  ];
  return (
    <section style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <SectionTitle icon="🤖" title="الذكاء الاصطناعي" sub="الذكاء الاصطناعي في خدمة تداولك" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20, marginBottom: 40 }}>
        {items.map((it, i) => (
          <FadeIn key={i} delay={i * 0.06}>
            <Card style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <span style={{ fontSize: 28, flexShrink: 0 }}>{it.icon}</span>
              <span style={{ fontSize: 15, color: "rgba(255,255,255,0.8)" }}>{it.text}</span>
            </Card>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.3}>
        <h3 style={{ textAlign: "center", fontSize: 22, color: "#d4af37", fontWeight: 700, fontFamily: "'Tajawal', sans-serif", marginBottom: 24 }}>
          📡 قنوات التوصيات بالـ AI
        </h3>
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16, marginBottom: 32 }}>
        {channels.map((ch, i) => (
          <FadeIn key={i} delay={0.4 + i * 0.08}>
            <Card gold style={{ textAlign: "center" }}>
              <div style={{ fontSize: 40 }}>{ch.icon}</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginTop: 8 }}>{ch.name}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{ch.desc}</div>
            </Card>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.5}>
        <Card style={{ textAlign: "center", padding: 32, background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.2)" }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#d4af37", marginBottom: 8 }}>📊 عدد القنوات حسب الباقة</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap", marginTop: 16 }}>
            {[{ name: "Connect", count: "3", color: "#4a90d9" }, { name: "Create", count: "5", color: "#2dd4a0" }, { name: "Complete", count: "12", color: "#a78bfa" }].map(p => (
              <div key={p.name} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 36, fontWeight: 900, color: p.color }}>{p.count}</div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>{p.name}</div>
              </div>
            ))}
          </div>
        </Card>
      </FadeIn>
      <div style={{ textAlign: "center", marginTop: 32 }}>
        <Btn primary onClick={() => setActive("packages")}>📦 اشترك للوصول</Btn>
      </div>
    </section>
  );
}

// ═══════════════════════════════════
// Success Stories
// ═══════════════════════════════════
function SuccessStories({ setActive }) {
  const stories = [
    {
      flag: "🇮🇶",
      name: "مرتضى من العراق",
      text: "بدأ بمبلغ 21$ وخلال 27 يوم وصل إلى 3,000$ وسحب 2 مليون دينار عراقي",
      highlight: "3,000$ ← 21$",
      // ══ ضع رابط فيديو مرتضى هنا ══
      video: "/videos/success-murtaza.mp4",
    },
    {
      flag: "🇱🇾",
      name: "حليمة من ليبيا",
      text: "مدرّسة وأم لأربعة أطفال، دخلت المجال لتطوّر الواقع المالي لعائلتها. بدأت بـ 100$ وخلال شهر واحد أصبحت 22,000$!",
      highlight: "22,000$ ← 100$",
      // ══ ضع رابط فيديو حليمة هنا ══
      video: "/videos/success-halima.mp4",
    },
    {
      flag: "🏅",
      name: "مدرب في مشروع X",
      text: "قبل ما يدخل معي كان خسران 20,000$ والآن حقق 400,000$ خلال 30 يوم فقط!",
      highlight: "20K$ → 400K$",
      // ══ ضع رابط فيديو مدرب مشروع X هنا ══
      video: "/videos/success-projectx-trainer.mp4",
    },
  ];
  return (
    <section style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <SectionTitle icon="🏆" title="قصص نجاح متدربيني" sub="شاهد بنفسك — قصص حقيقية من متدربين تحت إشرافي" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
        {stories.map((s, i) => (
          <FadeIn key={i} delay={i * 0.12}>
            <Card gold style={{ textAlign: "center", padding: 0, overflow: "hidden" }}>
              {/* ═══ فيديو قصة النجاح ═══ */}
              <div style={{
                position: "relative", background: "#000",
                borderBottom: "1px solid rgba(212,175,55,0.2)"
              }}>
                <video
                  controls
                  playsInline
                  preload="metadata"
                  style={{ width: "100%", display: "block", aspectRatio: "9/16", maxHeight: 420, objectFit: "cover" }}
                >
                  <source src={s.video} type="video/mp4" />
                  متصفحك لا يدعم عرض الفيديو
                </video>
              </div>

              {/* ═══ معلومات القصة ═══ */}
              <div style={{ padding: "20px 24px 24px" }}>
                <div style={{ fontSize: 36, marginBottom: 8 }}>{s.flag}</div>
                <h4 style={{
                  fontSize: 18, fontWeight: 700, color: "#d4af37",
                  margin: "0 0 8px", fontFamily: "'Tajawal', sans-serif"
                }}>{s.name}</h4>
                <p style={{
                  fontSize: 14, color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.8, margin: "0 0 16px"
                }}>{s.text}</p>
                <div style={{
                  display: "inline-block", padding: "10px 28px", borderRadius: 50,
                  background: "linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.08))",
                  color: "#d4af37", fontSize: 20, fontWeight: 800,
                  fontFamily: "'Tajawal', sans-serif",
                  border: "1px solid rgba(212,175,55,0.3)"
                }}>{s.highlight}</div>
              </div>
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
        <FadeIn>
          <Card gold>
            <div style={{ fontSize: 36, textAlign: "center", marginBottom: 12 }}>👤</div>
            <h4 style={{ textAlign: "center", color: "#d4af37", fontSize: 18, fontWeight: 700, margin: "0 0 16px" }}>كوتش عمر رباح الباشا</h4>
            <Btn primary full href={COACH_TELEGRAM}>💬 تواصل عبر تلجرام</Btn>
          </Card>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Card>
            <div style={{ fontSize: 36, textAlign: "center", marginBottom: 12 }}>📅</div>
            <h4 style={{ textAlign: "center", color: "#fff", fontSize: 18, fontWeight: 700, margin: "0 0 8px" }}>احجز مكالمة استشارية</h4>
            <p style={{ textAlign: "center", fontSize: 13, color: "rgba(255,255,255,0.5)", margin: "0 0 16px" }}>السبت — الخميس | 10ص - 10م (باريس)</p>
            <Btn outline full href={BOOKING_URL}>📅 احجز الآن</Btn>
          </Card>
        </FadeIn>
      </div>

      <FadeIn delay={0.2}>
        <h3 style={{ textAlign: "center", fontSize: 22, color: "#d4af37", fontWeight: 700, marginBottom: 8, fontFamily: "'Tajawal', sans-serif" }}>
          👥 مجتمع الباشا — القنوات والمجموعات
        </h3>
        <p style={{ textAlign: "center", fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 24 }}>🔒 خاصة بالمشتركين فقط</p>
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12 }}>
        {communityLinks.map((ch, i) => (
          <FadeIn key={i} delay={0.3 + i * 0.05}>
            <Card style={{ textAlign: "center", padding: "20px 12px", opacity: 0.7, cursor: "default" }}>
              <div style={{ fontSize: 28 }}>{ch.icon}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 8, fontWeight: 600 }}>{ch.name}</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 6 }}>🔒 للمشتركين</div>
            </Card>
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
    { q: "ما الفرق بين الباقات الثلاث؟", a: "Connect (349$/30يوم) للتداول الأساسي والمجتمع، Create (999$/60يوم) للتداول الذكي مع دعم متكامل واستراتيجية Tiger، Complete (1,699$/90يوم) الأقوى والأشمل مع SB Model الجيل الجديد والإرشاد الشخصي." },
    { q: "ما هو مشروع X؟", a: "نظام متقدم يجمع بين التداول والذكاء الاصطناعي والتعليم التطبيقي والدخل السلبي." },
    { q: "ما هو الناسخ؟", a: "نظام ينسخ صفقات المحترفين تلقائياً لحسابك بنفس اللحظة — بدون تحليل أو تدخل." },
    { q: "ما هو E-MODEL؟", a: "نظام دخل سلبي من التجارة الإلكترونية بدون تداول — مضمّن في جميع الباقات." },
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
      <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, marginTop: 12 }}>© 2026 كوتش عمر رباح الباشا — جميع الحقوق محفوظة</div>
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
      case "projectx": return <ProjectX setActive={setActive} />;
      case "packages": return <Packages />;
      case "ai": return <AISection setActive={setActive} />;
      case "success": return <SuccessStories setActive={setActive} />;
      case "contact": return <Contact />;
      default: return (
        <>
          <Hero setActive={setActive} />
          <ProjectX setActive={setActive} />
          <Packages />
          <AISection setActive={setActive} />
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
// ==========================================
// هذا هو الجزء المفقود والمهم جداً للتشغيل
// ==========================================
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

