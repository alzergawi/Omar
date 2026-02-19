import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useEffect, useRef } from "react";

const COACH_TELEGRAM = "https://t.me/omo_rabah";
const WHATSAPP_URL = "https://wa.me/+33662766729";
const TELEGRAM_URL = "https://t.me/omo_rabah";
const INSTAGRAM_URL = "https://www.instagram.com/c.omar6?igsh=MXE5NDlhazM1d3NpMg==";
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

// === المسارات ===
// الصور: ...
// الفيديوهات: ...
// مجلد public و public

function WhatsAppIcon({size=24}){return(<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>);}
function TelegramIcon({size=24}){return(<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>);}
function InstagramIcon({size=24}){return(<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>);}

function AnimBG(){return(<div style={{position:"fixed",inset:0,zIndex:0,overflow:"hidden",pointerEvents:"none"}}><div style={{position:"absolute",width:600,height:600,borderRadius:"50%",background:"radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",top:"-10%",right:"-10%",animation:"floatOrb 20s ease-in-out infinite"}}/><div style={{position:"absolute",width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)",bottom:"10%",left:"-5%",animation:"floatOrb 25s ease-in-out infinite reverse"}}/><div style={{position:"absolute",width:300,height:300,borderRadius:"50%",background:"radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",top:"40%",left:"50%",animation:"floatOrb 18s ease-in-out infinite"}}/></div>);}

function FadeIn({children,delay=0,style={}}){const ref=useRef(null);const[visible,setVisible]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){setVisible(true);obs.disconnect();}},{threshold:0.15});obs.observe(el);return()=>obs.disconnect();},[]);return(<div ref={ref} style={{opacity:visible?1:0,transform:visible?"translateY(0)":"translateY(40px)",transition:`opacity 0.7s ${delay}s ease, transform 0.7s ${delay}s ease`,...style}}>{children}</div>);}

function Card({children,gold,glow,onClick,style={}}){const[hover,setHover]=useState(false);return(<div onClick={onClick} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{background:gold?"linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(30,30,30,0.95) 100%)":"rgba(255,255,255,0.04)",border:gold?"1px solid rgba(212,175,55,0.4)":"1px solid rgba(255,255,255,0.08)",borderRadius:20,padding:"28px 24px",cursor:onClick?"pointer":"default",transition:"all 0.4s cubic-bezier(0.4,0,0.2,1)",transform:hover&&onClick?"translateY(-6px) scale(1.02)":"translateY(0) scale(1)",boxShadow:hover&&glow?"0 20px 60px rgba(212,175,55,0.15)":hover&&onClick?"0 12px 40px rgba(0,0,0,0.3)":"none",backdropFilter:"blur(20px)",position:"relative",overflow:"hidden",...style}}>{gold&&<div style={{position:"absolute",top:0,left:0,right:0,height:2,background:"linear-gradient(90deg, transparent, #d4af37, transparent)"}}/>}{children}</div>);}

function Btn({children,primary,outline,href,onClick,full,small,style={}}){const[h,setH]=useState(false);const base={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,padding:small?"10px 20px":"14px 32px",fontSize:small?14:16,fontWeight:600,fontFamily:"'Tajawal', sans-serif",borderRadius:14,cursor:"pointer",transition:"all 0.3s ease",textDecoration:"none",border:"none",width:full?"100%":"auto",background:primary?(h?"linear-gradient(135deg, #e5c246 0%, #c9a020 100%)":"linear-gradient(135deg, #d4af37 0%, #b8941f 100%)"):outline?"transparent":(h?"rgba(255,255,255,0.12)":"rgba(255,255,255,0.06)"),color:primary?"#0a0a0a":"#fff",border:outline?"1px solid rgba(212,175,55,0.5)":"none",transform:h?"translateY(-2px)":"none",boxShadow:h&&primary?"0 8px 30px rgba(212,175,55,0.3)":"none",...style};const Tag=href?"a":"button";const extra=href?{href,target:"_blank",rel:"noopener noreferrer"}:{onClick};return <Tag {...extra} style={base} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>{children}</Tag>;}

function Badge({children,color="#d4af37"}){return(<span style={{display:"inline-block",padding:"4px 14px",borderRadius:50,fontSize:12,fontWeight:700,background:`${color}22`,color,border:`1px solid ${color}44`,letterSpacing:0.5}}>{children}</span>);}

function Stat({value,label,icon}){return(<div style={{textAlign:"center",padding:"20px 12px"}}><div style={{fontSize:36,marginBottom:4}}>{icon}</div><div style={{fontSize:32,fontWeight:800,color:"#d4af37",fontFamily:"'Tajawal', sans-serif",lineHeight:1.2}}>{value}</div><div style={{fontSize:14,color:"rgba(255,255,255,0.6)",marginTop:4}}>{label}</div></div>);}

function SectionTitle({icon,title,sub}){return(<div style={{textAlign:"center",marginBottom:48}}><div style={{fontSize:48,marginBottom:12}}>{icon}</div><h2 style={{fontSize:32,fontWeight:800,color:"#fff",margin:"0 0 12px",fontFamily:"'Tajawal', sans-serif"}}>{title}</h2>{sub&&<p style={{fontSize:16,color:"rgba(255,255,255,0.5)",margin:0,maxWidth:500,marginInline:"auto"}}>{sub}</p>}<div style={{width:60,height:3,background:"linear-gradient(90deg, #d4af37, transparent)",margin:"16px auto 0",borderRadius:2}}/></div>);}

function VideoPlayer({src,style={}}){const[playing,setPlaying]=useState(false);const videoRef=useRef(null);const handlePlay=()=>{if(videoRef.current){if(playing){videoRef.current.pause();}else{videoRef.current.play();}setPlaying(!playing);}};return(<div style={{position:"relative",borderRadius:16,overflow:"hidden",border:"1px solid rgba(212,175,55,0.2)",background:"#000",cursor:"pointer",...style}} onClick={handlePlay}><video ref={videoRef} src={src} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} onEnded={()=>setPlaying(false)} onError={(e)=>{e.target.style.display="none";}} playsInline preload="metadata"/>{!playing&&(<div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.4)"}}><div style={{width:64,height:64,borderRadius:"50%",background:"rgba(212,175,55,0.9)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 30px rgba(212,175,55,0.4)"}}><div style={{width:0,height:0,borderTop:"12px solid transparent",borderBottom:"12px solid transparent",borderLeft:"20px solid #0a0a0a",marginLeft:4}}/></div></div>)}</div>);}

function CardImage({src,height=160,radius=14}){return(<div style={{width:"100%",height,borderRadius:radius,overflow:"hidden",marginBottom:16,background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)"}}><img src={src} alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} /></div>);}

function SectionImage({src,style={}}){return(<div style={{width:"100%",borderRadius:20,overflow:"hidden",border:"1px solid rgba(212,175,55,0.2)",marginBottom:32,...style}}><img src={src} alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} /></div>);}

function DetailCard({icon,title,desc,items,color="#d4af37",image}){const[open,setOpen]=useState(false);return(<Card onClick={()=>setOpen(!open)} style={{cursor:"pointer"}}>{image&&open&&<CardImage src={image} height={140}/>}<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><div style={{display:"flex",gap:12,alignItems:"center"}}>{icon&&<span style={{fontSize:28}}>{icon}</span>}<div><h4 style={{fontSize:17,fontWeight:700,color,margin:0,fontFamily:"'Tajawal', sans-serif"}}>{title}</h4>{desc&&<p style={{fontSize:13,color:"rgba(255,255,255,0.5)",margin:"4px 0 0"}}>{desc}</p>}</div></div><span style={{color,fontSize:20,transition:"transform 0.3s",transform:open?"rotate(45deg)":"rotate(0)",flexShrink:0}}>+</span></div>{open&&items&&(<div style={{marginTop:16,paddingTop:12,borderTop:"1px solid rgba(255,255,255,0.08)"}}>{items.map((item,i)=>(<div key={i} style={{display:"flex",gap:8,alignItems:"flex-start",marginBottom:8}}><span style={{color,flexShrink:0,fontSize:12,marginTop:3}}>◆</span><span style={{fontSize:14,color:"rgba(255,255,255,0.75)",lineHeight:1.7}}>{item}</span></div>))}</div>)}</Card>);}

function Nav({active,setActive}){const[open,setOpen]=useState(false);const[scrolled,setScrolled]=useState(false);useEffect(()=>{const fn=()=>setScrolled(window.scrollY>50);window.addEventListener("scroll",fn);return()=>window.removeEventListener("scroll",fn);},[]);const items=[{id:"home",label:"الرئيسية"},{id:"gointel",label:"GO Intel"},{id:"goos",label:"GO OS"},{id:"packages",label:"الباقات"},{id:"success",label:"قصص النجاح"},{id:"contact",label:"تواصل"}];return(<nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,background:scrolled?"rgba(10,10,10,0.95)":"rgba(10,10,10,0.7)",backdropFilter:"blur(20px)",borderBottom:"1px solid rgba(255,255,255,0.06)",transition:"all 0.3s ease"}}><div style={{maxWidth:1200,margin:"0 auto",padding:"0 24px",display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}><div style={{display:"flex",alignItems:"center",gap:10,cursor:"pointer"}} onClick={()=>{setActive("home");window.scrollTo({top:0,behavior:"smooth"});}}><span style={{fontSize:28}}>👑</span><span style={{fontSize:20,fontWeight:800,color:"#d4af37",fontFamily:"'Tajawal', sans-serif"}}>الباشا</span></div><div style={{display:"flex",gap:8,alignItems:"center"}} className="nav-desktop">{items.map(it=>(<button key={it.id} onClick={()=>{setActive(it.id);setOpen(false);}} style={{background:active===it.id?"rgba(212,175,55,0.15)":"transparent",color:active===it.id?"#d4af37":"rgba(255,255,255,0.7)",border:"none",padding:"8px 16px",borderRadius:10,cursor:"pointer",fontSize:14,fontWeight:600,fontFamily:"'Tajawal', sans-serif",transition:"all 0.3s ease"}}>{it.label}</button>))}</div><button className="nav-mobile-toggle" onClick={()=>setOpen(!open)} style={{background:"none",border:"none",color:"#d4af37",fontSize:24,cursor:"pointer",display:"none"}}>{open?"✕":"☰"}</button></div>{open&&(<div className="nav-mobile-menu" style={{padding:"8px 24px 20px",display:"flex",flexDirection:"column",gap:4,borderTop:"1px solid rgba(255,255,255,0.06)"}}>{items.map(it=>(<button key={it.id} onClick={()=>{setActive(it.id);setOpen(false);}} style={{background:active===it.id?"rgba(212,175,55,0.15)":"transparent",color:active===it.id?"#d4af37":"rgba(255,255,255,0.7)",border:"none",padding:"12px 16px",borderRadius:10,cursor:"pointer",fontSize:15,fontWeight:600,fontFamily:"'Tajawal', sans-serif",textAlign:"right",transition:"all 0.3s ease"}}>{it.label}</button>))}</div>)}</nav>);}

function Hero({setActive}){return(<section style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"100px 24px 60px",position:"relative"}}>
  {/* Hero Banner */}
  <FadeIn style={{width:"100%",maxWidth:900,marginBottom:40}}><div style={{borderRadius:24,overflow:"hidden",border:"1px solid rgba(212,175,55,0.3)",boxShadow:"0 20px 80px rgba(212,175,55,0.1)"}}><img src="/images/hero-banner.jpg" alt="الباشا" style={{width:"100%",display:"block"}} /></div></FadeIn>

  {/* Circular Profile */}
  <FadeIn><div style={{width:180,height:180,borderRadius:"50%",overflow:"hidden",border:"4px solid rgba(212,175,55,0.6)",boxShadow:"0 0 60px rgba(212,175,55,0.2), 0 0 120px rgba(212,175,55,0.08)",margin:"0 auto 32px",background:"linear-gradient(135deg, rgba(212,175,55,0.2), rgba(10,10,10,0.9))",position:"relative"}}><img src="/images/coach-profile.webp" alt="كوتش عمر رباح الباشا" style={{width:"110%",height:"110%",objectFit:"cover",display:"block",position:"absolute",top:"-5%",left:"-5%"}} onError={(e)=>{e.target.style.display="none";}}/><div style={{position:"absolute",inset:-4,borderRadius:"50%",border:"2px solid transparent",borderTopColor:"#d4af37",borderBottomColor:"#d4af37",animation:"spinRing 8s linear infinite",pointerEvents:"none"}}/></div></FadeIn>

  <div style={{textAlign:"center",maxWidth:800,position:"relative",zIndex:1}}>
    <FadeIn delay={0.05}><Badge>🇫🇷 رائد أعمال في فرنسا</Badge></FadeIn>
    <FadeIn delay={0.15}><h1 style={{fontSize:"clamp(36px, 7vw, 64px)",fontWeight:900,lineHeight:1.15,margin:"24px 0 0",fontFamily:"'Tajawal', sans-serif",background:"linear-gradient(135deg, #fff 0%, #d4af37 50%, #fff 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundSize:"200% 200%",animation:"shimmer 4s ease infinite"}}>كوتش عمر رباح الباشا</h1></FadeIn>
    <FadeIn delay={0.25}><p style={{fontSize:22,color:"#d4af37",margin:"16px 0 0",fontWeight:700,fontFamily:"'Tajawal', sans-serif",letterSpacing:1}}>✦ الباشا معكم.. فلا خوف عليكم ✦</p></FadeIn>
    <FadeIn delay={0.35}><p style={{fontSize:18,color:"rgba(255,255,255,0.65)",margin:"20px auto 0",maxWidth:550,lineHeight:1.8}}>مؤسس نظام <strong style={{color:"#d4af37"}}>SB Model</strong> ومشروع <strong style={{color:"#d4af37"}}>X</strong><br/>مستشار وخبير في أسواق المال<br/>تداول • استثمار • ذكاء اصطناعي • دخل سلبي</p></FadeIn>
    <FadeIn delay={0.4}>
  <div style={{maxWidth:600, margin:"32px auto 0"}}>
    <p style={{fontSize:15, color:"#d4af37", fontWeight:700, marginBottom:12, fontFamily:"'Tajawal', sans-serif"}}>
      🎬 تعرّف على الكوتش عمر الباشا
    </p>
    
    {/* بداية كود اليوتيوب */}
    <div style={{
      position: "relative",
      paddingBottom: "56.25%", /* نسبة عرض إلى ارتفاع 16:9 */
      height: 0,
      overflow: "hidden",
      borderRadius: 16,
      border: "1px solid rgba(212,175,55,0.2)", /* الإطار الذهبي */
      background: "#000",
      boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
    }}>
      <iframe 
        src="https://www.youtube.com/embed/VIDEO_ID_HERE" 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: 0
        }}
        title="YouTube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      />
    </div>
    {/* نهاية كود اليوتيوب */}

  </div>
</FadeIn>
    <FadeIn delay={0.5}><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:16,margin:"40px auto",maxWidth:650}}><Stat icon="🏆" value="+2,779" label="متدرب"/><Stat icon="📅" value="+9" label="سنوات خبرة"/><Stat icon="🌍" value="+15" label="دولة عربية"/><Stat icon="⭐" value="SB" label="Model"/></div></FadeIn>
    <FadeIn delay={0.6}><div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap",marginTop:16}}><Btn primary onClick={()=>setActive("packages")}>📦 ابدأ الآن</Btn><Btn outline onClick={()=>setActive("gointel")}>🚀 استكشف GO Intel</Btn></div></FadeIn>
  </div>
</section>);}

function GoIntel({setActive}){
  const markets=[{icon:"💱",name:"Forex",desc:"أزواج العملات الرئيسية والثانوية",image:"/images/market-forex.jpg"},{icon:"📈",name:"Stocks",desc:"الأسهم العالمية",image:"/images/market-stocks.jpg"},{icon:"🪙",name:"Crypto",desc:"العملات الرقمية",image:"/images/market-crypto.jpg"}];
  const strategies=[{icon:"🎯",title:"Maestro",desc:"Total market intelligence at a glance.",image:"/images/strategy-maestro.jpg",items:["رؤية شاملة للسوق في لحظة","تحليل متعدد الأطر الزمنية","دمج المؤشرات والهيكل السعري","تنبيهات ذكية فورية"]},{icon:"🔍",title:"Seeker",desc:"Precision entries made simple.",image:"/images/strategy-seeker.jpg",items:["نقاط دخول دقيقة ومبسطة","فلترة إشارات السوق الضوضائية","تحديد أفضل لحظات الدخول","مناسب للمبتدئين والمحترفين"]},{icon:"🏛️",title:"SMC",desc:"Institutional-Driven Market Framework.",image:"/images/strategy-smc.jpg",items:["إطار عمل مبني على حركة المؤسسات","تحديد مناطق السيولة","تتبع الأموال الذكية Smart Money","كشف التلاعب المؤسسي"]},{icon:"⚡",title:"Strike 90",desc:"Built for precision timing and discipline.",image:"/images/strategy-strike90.jpg",items:["دقة توقيت عالية جداً","نظام انضباط صارم","نسبة نجاح مرتفعة","مثالي للصفقات السريعة"]},{icon:"📊",title:"Technical Analysis",desc:"Structure-Based Price Analysis.",image:"/images/strategy-technical.jpg",items:["تحليل هيكلي للسعر","الدعم والمقاومة الديناميكية","أنماط الشموع اليابانية","تحليل الترندات والقنوات السعرية"]}];
  const indicators=[{icon:"🛡️",title:"Defender",desc:"Capital protection and risk clarity.",image:"/images/indicator-defender.jpg",items:["حماية رأس المال أولاً","وضوح كامل في إدارة المخاطر","تحديد وقف الخسارة الذكي","حساب حجم الصفقة الآمن"]},{icon:"🏹",title:"Hunter",desc:"Quick momentum-based execution.",image:"/images/indicator-hunter.jpg",items:["تنفيذ سريع مبني على الزخم","اقتناص الفرص اللحظية","مؤشر قوة الاتجاه","إشارات دخول وخروج فورية"]},{icon:"🎯",title:"Maestro",desc:"Total market intelligence at a glance.",image:"/images/indicator-maestro.jpg",items:["ذكاء سوقي شامل","لوحة تحكم متكاملة","تحليل متعدد الأبعاد","قراءة فورية للسوق"]},{icon:"🔍",title:"Seeker",desc:"Precision entries made simple.",image:"/images/indicator-seeker.jpg",items:["دخول دقيق مبسط","كشف فرص الدخول المثالية","فلتر إشارات عالي الجودة","مناسب لجميع المستويات"]},{icon:"🎯",title:"Strike90",desc:"High-probability strike zone.",image:"/images/indicator-strike90.jpg",items:["منطقة ضربة عالية الاحتمالية","توقيت مثالي للدخول","نظام ثقة مبني على البيانات","أداء مُثبت ومُختبر"]}];
  return(
    <section style={{padding:"80px 24px",maxWidth:1200,margin:"0 auto"}}>
      <SectionTitle icon="📊" title="GO Intel" sub="معلومات تداول فورية عبر الأسواق الرئيسية"/>
      <FadeIn><SectionImage src="/images/hero-banner4.jpg"/></FadeIn>
      <FadeIn><Card gold style={{textAlign:"center",marginBottom:48,padding:"40px 24px"}}><p style={{fontSize:18,color:"rgba(255,255,255,0.8)",lineHeight:2,margin:0}}><strong style={{color:"#d4af37"}}>GO INTEL</strong> يقدم معلومات تداول فورية عبر الأسواق الرئيسية<br/>جمع وتحليل بيانات الأسواق المالية بشكل مستمر<br/>رصد الاتجاهات العامة والزخم السعري<br/>استخراج الإشارات والتنبيهات التداولية<br/>دعم قرارات الدخول والخروج من الصفقات<br/>تزويد المستخدم بـ<strong style={{color:"#d4af37"}}>رؤى تحليلية مبنية على البيانات</strong></p></Card></FadeIn>

      <FadeIn><h3 style={{textAlign:"center",fontSize:24,fontWeight:800,color:"#d4af37",margin:"0 0 24px",fontFamily:"'Tajawal', sans-serif"}}>🌐 الأسواق المدعومة</h3></FadeIn>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:20,marginBottom:48}}>
        {markets.map((m,i)=>(<FadeIn key={i} delay={i*0.08}><Card gold style={{textAlign:"center"}}><CardImage src={m.image} height={150}/><span style={{fontSize:40}}>{m.icon}</span><div style={{fontSize:20,fontWeight:700,color:"#fff",marginTop:8}}>{m.name}</div><div style={{fontSize:13,color:"rgba(255,255,255,0.5)",marginTop:4}}>{m.desc}</div></Card></FadeIn>))}
      </div>

      <FadeIn delay={0.1}><h3 style={{textAlign:"center",fontSize:26,color:"#d4af37",fontWeight:800,fontFamily:"'Tajawal', sans-serif",marginBottom:8}}>⚔️ Strategies</h3><p style={{textAlign:"center",fontSize:14,color:"rgba(255,255,255,0.5)",marginBottom:28}}>استراتيجيات التداول المتقدمة</p></FadeIn>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(340px, 1fr))",gap:16,marginBottom:48}}>
        {strategies.map((s,i)=>(<FadeIn key={i} delay={0.15+i*0.06}><DetailCard icon={s.icon} title={s.title} desc={s.desc} items={s.items} image={s.image}/></FadeIn>))}
      </div>

      <FadeIn delay={0.2}><h3 style={{textAlign:"center",fontSize:26,color:"#d4af37",fontWeight:800,fontFamily:"'Tajawal', sans-serif",marginBottom:8}}>📡 Indicators</h3><p style={{textAlign:"center",fontSize:14,color:"rgba(255,255,255,0.5)",marginBottom:28}}>المؤشرات الذكية</p></FadeIn>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(340px, 1fr))",gap:16}}>
        {indicators.map((ind,i)=>(<FadeIn key={i} delay={0.25+i*0.06}><DetailCard icon={ind.icon} title={ind.title} desc={ind.desc} items={ind.items} image={ind.image} color="#a78bfa"/></FadeIn>))}
      </div>
      <FadeIn delay={0.4}><div style={{textAlign:"center",marginTop:40}}><Btn primary onClick={()=>setActive("packages")}>📦 اختر باقتك الآن</Btn></div></FadeIn>
    </section>
  );
}

function GoOS({setActive}){
  const tasks=["تحليل البيانات السوقية باستخدام خوارزميات الذكاء الاصطناعي","رصد الأنماط السعرية والاتجاهات العامة للأسواق","دعم أنظمة التنبؤ بحركة الأسعار","إدارة عمليات التداول ضمن منظومة GO AI","المساهمة في تحسين إدارة المخاطر وتوقيت الدخول والخروج"];
  return(
    <section style={{padding:"80px 24px",maxWidth:1200,margin:"0 auto"}}>
      <SectionTitle icon="🤖" title="GO OS" sub="نظام التشغيل الذكي في قلب منظومة GO"/>
      <FadeIn><SectionImage src="/images/hero-banner1.jpg"/></FadeIn>
      <FadeIn><Card gold style={{textAlign:"center",marginBottom:48,padding:"40px 24px"}}><p style={{fontSize:18,color:"rgba(255,255,255,0.8)",lineHeight:2,margin:0}}><strong style={{color:"#d4af37"}}>GO OS</strong> هو مصمّم ليكون المحرك المركزي الذي يدير ويشغّل جميع أدوات وخدمات التداول المعتمدة على الذكاء الاصطناعي داخل الشركة<br/><br/>يهدف GO OS إلى توظيف التقنيات الحديثة في تحليل الأسواق المالية لدعم المتداولين والمستثمرين باتخاذ <strong style={{color:"#d4af37"}}>قرارات أكثر دقة وفعالية</strong></p></Card></FadeIn>

      <FadeIn><SectionImage src="/images/hero-banner2.jpg"/></FadeIn>

      <FadeIn delay={0.1}><Card style={{marginBottom:40,padding:"32px 28px"}}><h3 style={{fontSize:22,fontWeight:800,color:"#d4af37",margin:"0 0 20px",fontFamily:"'Tajawal', sans-serif"}}>مهام ووظائف GO OS</h3><div style={{display:"flex",flexDirection:"column",gap:14}}>{tasks.map((item,i)=>(<div key={i} style={{display:"flex",gap:12,alignItems:"flex-start"}}><span style={{color:"#d4af37",flexShrink:0,fontSize:20,fontWeight:800,marginTop:-2}}>{i+1}</span><span style={{fontSize:16,color:"rgba(255,255,255,0.8)",lineHeight:1.7}}>{item}</span></div>))}</div></Card></FadeIn>

      {/* GO LAB */}
      <FadeIn delay={0.2}><SectionImage src="/images/hero-banner3.jpg"/></FadeIn>

      {/* GO Library */}
      <FadeIn delay={0.3}><SectionImage src="/images/hero-banner4.jpg" style={{marginBottom:0}}/></FadeIn>

      <FadeIn delay={0.4}><div style={{textAlign:"center",marginTop:40}}><Btn primary onClick={()=>setActive("packages")}>📦 اشترك للوصول</Btn></div></FadeIn>
    </section>
  );
}

function Packages(){
  const pkgs=[
    {id:"lite",name:"LITE Package",tag:"للأفراد الجدد",price:"349",origPrice:"999",days:"30",color:"#4ade80",recommended:false,eTrading:["2 قنوات توصيات","تداول مدعوم بالذكاء الاصطناعي","مؤشرات خاصة","نظام ذكي لتقييم أدائك وانضباطك"],strategy:"استراتيجية الدخول R1+R2",strategyDetails:["ملف جاهز لإدارة المخاطر","خطة تطبيق يومية"],eModel:true},
    {id:"pro",name:"Pro Package",tag:"للمستثمرين المتوسطين",price:"999",origPrice:"2,999",days:"60",color:"#d4af37",recommended:true,eTrading:["5 قنوات توصيات بالـ AI","تداول مدعوم بالذكاء الاصطناعي","مؤشرات خاصة بالـ AI","تداول لايف يومي مع المحللين","كورس الحسابات الممولة والربح بالـ AI"],strategy:"🍊 استراتيجية برتقالة الفجر",strategyDetails:["استراتيجية التداول الذكية","تعمل على MT5","تركّز على نقاط الدخول بدقة عالية"],eModel:true},
    {id:"ultra",name:"ULTRA Package",tag:"للمحترفين",price:"1,699",origPrice:"4,999",days:"90",color:"#a78bfa",recommended:false,eTrading:["12 قناة توصيات بالـ AI","4 مؤشرات التداول بالـ AI","تداول لايف يومي مع المحللين","تداول بالـ AI","جلسات خاصة لتحليل حسابك وأخطائك","كورس الحسابات الممولة والربح بالـ AI","كورس نفسي لبناء عقلية المتداول"],strategy:"⚡ الجيل الجديد من SB MODEL",strategyDetails:["مستويات SB MODEL بالـ AI","مستوى SB-Raven","نقلة نوعية في التحليل الموجي والتداول الذكي"],eModel:true},
  ];
  return(
    <section style={{padding:"80px 24px",maxWidth:1200,margin:"0 auto"}}>
      <SectionTitle icon="📦" title="الباقات التعليمية" sub="استثمر في مستقبلك المالي — نظام مُجرّب ومبني على نتائج حقيقية"/>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(340px, 1fr))",gap:24,alignItems:"stretch"}}>
        {pkgs.map((p,i)=>(<FadeIn key={p.id} delay={i*0.12}><div style={{position:"relative",height:"100%"}}>{p.recommended&&(<div style={{position:"absolute",top:-14,left:"50%",transform:"translateX(-50%)",zIndex:2,background:"linear-gradient(135deg, #d4af37, #b8941f)",color:"#0a0a0a",padding:"6px 24px",borderRadius:50,fontSize:13,fontWeight:800,fontFamily:"'Tajawal', sans-serif",whiteSpace:"nowrap"}}>⭐ يُوصى بها</div>)}<Card gold={p.recommended} glow={p.recommended} style={{height:"100%",display:"flex",flexDirection:"column",border:p.recommended?"1px solid rgba(212,175,55,0.5)":"1px solid rgba(255,255,255,0.08)"}}><div style={{textAlign:"center",marginBottom:20}}><Badge color={p.color}>{p.tag}</Badge><h3 style={{fontSize:26,fontWeight:800,color:p.color,margin:"16px 0 4px",fontFamily:"'Tajawal', sans-serif"}}>{p.name}</h3><div style={{color:"rgba(255,255,255,0.4)",fontSize:14,textDecoration:"line-through"}}>قيمة المحتوى {p.origPrice}$</div><div style={{display:"flex",alignItems:"baseline",justifyContent:"center",gap:4,marginTop:8}}><span style={{fontSize:44,fontWeight:900,color:"#fff",fontFamily:"'Tajawal', sans-serif"}}>{p.price}</span><span style={{fontSize:18,color:"rgba(255,255,255,0.5)"}}>$</span></div><div style={{fontSize:14,color:"rgba(255,255,255,0.4)"}}>{p.days} يوم</div></div><div style={{borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:16,marginBottom:12}}><div style={{fontSize:13,fontWeight:700,color:p.color,marginBottom:10,letterSpacing:1}}>📊 e-Trading</div>{p.eTrading.map((item,j)=>(<div key={j} style={{display:"flex",gap:8,alignItems:"flex-start",marginBottom:8}}><span style={{color:p.color,flexShrink:0}}>✅</span><span style={{fontSize:14,color:"rgba(255,255,255,0.75)"}}>{item}</span></div>))}</div><div style={{borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:12,marginBottom:12}}><div style={{fontSize:14,fontWeight:700,color:p.color,marginBottom:8}}>{p.strategy}</div>{p.strategyDetails.map((s,j)=>(<div key={j} style={{display:"flex",gap:8,marginBottom:6}}><span style={{color:p.color,flexShrink:0}}>•</span><span style={{fontSize:13,color:"rgba(255,255,255,0.65)"}}>{s}</span></div>))}</div><div style={{borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:12,marginBottom:20}}><div style={{fontSize:13,fontWeight:700,color:p.color,marginBottom:8}}>💰 e-Model (الدخل السلبي)</div>{["Weekly Commission — عمولات أسبوعية","Leverage Profit — مضاعفة الأرباح","Business Asset 24/7 — أصل رقمي","Fast Payout — سحب سريع"].map((m,j)=>(<div key={j} style={{display:"flex",gap:8,marginBottom:5}}><span style={{color:p.color,flexShrink:0,fontSize:12}}>💎</span><span style={{fontSize:13,color:"rgba(255,255,255,0.6)"}}>{m}</span></div>))}</div><div style={{marginTop:"auto"}}><Btn primary={p.recommended} outline={!p.recommended} full href={COACH_TELEGRAM}>اشترك الآن — {p.price}$</Btn></div></Card></div></FadeIn>))}
      </div>
      <FadeIn delay={0.3}><div style={{textAlign:"center",marginTop:32}}><p style={{color:"rgba(255,255,255,0.4)",fontSize:14}}>🎁 خصم <strong style={{color:"#d4af37"}}>15%</strong> عند الدفع بالكريبتو!</p></div></FadeIn>
    </section>
  );
}

function SuccessStories({setActive}){
  const stories=[
    {flag:"🇮🇶",name:"متدرب مرتضى من العراق",text:"بدأ بمبلغ 21$ وخلال 27 يوم وصل إلى 3,000$ وسحب 2 مليون دينار عراقي",highlight:"21$ → 3,000$",video:"/videos/success-1.mp4"},
    {flag:"🏅",name:"مدرب في مشروع X",text:"قبل ما يدخل معي كان خسران 20,000$ والآن حقق 400,000$ خلال 30 يوم فقط!",highlight:"20K$ → 400K$",video:"/videos/success-2.mp4"},
    {flag:"🎓",name:"ورشة تدريب مكثف أوف لاين",text:"تجمعات مع المتدربين وأخذ تعليمات وأسرار تساعدهم في مجال التداول والأسواق المالية",highlight:"تدريب حي",video:"/videos/success-3.mp4"},
  ];
  return(
    <section style={{padding:"80px 24px",maxWidth:1200,margin:"0 auto"}}>
      <SectionTitle icon="🏆" title="قصص نجاح متدربيني" sub="آراء المتدربين تحت إشرافي"/>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(340px, 1fr))",gap:24}}>
        {stories.map((s,i)=>(<FadeIn key={i} delay={i*0.1}><Card gold style={{textAlign:"center"}}><div style={{marginBottom:16}}><VideoPlayer src={s.video} style={{aspectRatio:"16/9",borderRadius:14}}/></div><div style={{fontSize:36,marginBottom:8}}>{s.flag}</div><h4 style={{fontSize:18,fontWeight:700,color:"#d4af37",margin:"0 0 8px",fontFamily:"'Tajawal', sans-serif"}}>{s.name}</h4><p style={{fontSize:14,color:"rgba(255,255,255,0.7)",lineHeight:1.8,margin:"0 0 16px"}}>{s.text}</p><div style={{display:"inline-block",padding:"8px 24px",borderRadius:50,background:"rgba(212,175,55,0.15)",color:"#d4af37",fontSize:18,fontWeight:800,fontFamily:"'Tajawal', sans-serif"}}>{s.highlight}</div></Card></FadeIn>))}
      </div>
      <div style={{textAlign:"center",marginTop:40}}><Btn primary onClick={()=>setActive("packages")}>📦 ابدأ رحلتك الآن</Btn></div>
    </section>
  );
}

function Contact(){
  return(
    <section style={{padding:"80px 24px",maxWidth:700,margin:"0 auto"}}>
      <SectionTitle icon="📞" title="تواصل معنا" sub="نحن هنا لمساعدتك في أي وقت"/>
      <FadeIn><Card gold style={{padding:"36px 28px"}}>
        <div style={{fontSize:36,textAlign:"center",marginBottom:12}}>👤</div>
        <h4 style={{textAlign:"center",color:"#d4af37",fontSize:20,fontWeight:700,margin:"0 0 20px"}}>كوتش عمر رباح الباشا</h4>

        {/* Social Icons */}
        <div style={{display:"flex",justifyContent:"center",gap:14,marginBottom:24}}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{width:52,height:52,borderRadius:16,background:"linear-gradient(135deg, #25D366, #128C7E)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",boxShadow:"0 4px 15px rgba(37,211,102,0.3)",textDecoration:"none"}}><WhatsAppIcon size={26}/></a>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" style={{width:52,height:52,borderRadius:16,background:"linear-gradient(135deg, #2AABEE, #229ED9)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",boxShadow:"0 4px 15px rgba(42,171,238,0.3)",textDecoration:"none"}}><TelegramIcon size={26}/></a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" style={{width:52,height:52,borderRadius:16,background:"linear-gradient(135deg, #F58529, #DD2A7B, #8134AF, #515BD4)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",boxShadow:"0 4px 15px rgba(221,42,123,0.3)",textDecoration:"none"}}><InstagramIcon size={26}/></a>
        </div>

        <Btn primary full href={COACH_TELEGRAM} style={{marginBottom:24}}>💬 تواصل عبر تلجرام</Btn>

        {/* Consultation Info */}
        <div style={{borderTop:"1px solid rgba(255,255,255,0.1)",paddingTop:24}}>
          <h4 style={{color:"#d4af37",fontSize:17,fontWeight:700,margin:"0 0 16px",textAlign:"center",fontFamily:"'Tajawal', sans-serif"}}>📋 لحجز مكالمة استشارية مجانية (15 دقيقة)</h4>
          <p style={{fontSize:15,color:"rgba(255,255,255,0.7)",lineHeight:2,margin:"0 0 16px",textAlign:"center"}}>تواصل معي على الانستغرام وأرسل:</p>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {["١- اسمك","٢- عمرك","٣- الدولة يلي انت ساكن فيها","٤- البرنامج التعليمي والاستثماري يلي انت اخترته"].map((item,i)=>(<div key={i} style={{display:"flex",gap:10,alignItems:"center"}}><span style={{color:"#d4af37",fontSize:14}}>✦</span><span style={{fontSize:15,color:"rgba(255,255,255,0.8)"}}>{item}</span></div>))}
          </div>
          <div style={{marginTop:20}}><Btn outline full href={INSTAGRAM_URL}>📸 تواصل عبر انستغرام</Btn></div>
        </div>
      </Card></FadeIn>
    </section>
  );
}

function FAQ(){
  const[openIdx,setOpenIdx]=useState(null);
  const faqs=[
    {q:"هل العمل معك في هذا المجال حلال أم حرام؟",a:"حلال بشكل كامل وهذه تعمل بحلك الخاص بدا أحد تتأكد"},
    {q:"كم أحتاج من الوقت؟",a:"يومياً ساعتين وإذا كان لديك وقت أكثر بيكون ذلك أفضل لك"},
    {q:"كيف أبدأ؟",a:"معنا حتى لو كان المجال جديد عليك لكن التزامك معي يضمن لك الفهم والتعلم 100%"},
    {q:"متى سأبدأ تحقيق الأرباح؟",a:"من شهر إلى شهرين، ولكن يعتمد ذلك على الصبر والمثابرة والالتزام"},
    {q:"كم يمكن أن أحقق فعلاً من الأرباح؟",a:"يعتمد على عدة عوامل مثل رأس المال ووضع السوق والفرص المتاحة"},
    {q:"هل هذا المجال مناسب لأي فئة أو تجربة؟",a:"نعم النظام مصمم للمبتدئين ولمن يبتعهم خبرة أيضاً"},
    {q:"ليس لدي خبرة في استخدام اللابتوب والإنترنت؟",a:"لا مشكلة العمل سهل وبسيط ولا يتطلب خبرة تقنية"},
    {q:"هل يمكنني التعلم من الهاتف إذا لم يكن لدي لابتوب؟",a:"نعم يمكنك التعلم من الهاتف"},
    {q:"هل يمكنني الدخول في هذا المجال دون حساب بنكي؟",a:"نعم هناك طرق دفع مختلفة ومحافظ إلكترونية ونساعدك في ذلك"},
    {q:"ما وضع الضريبة في دولتي عند تحقيق الأرباح؟",a:"في الدول الأوروبية يتم فرض ضرائب على الأرباح عند السحب. للدول العربية لا توجد ضرائب على الأرباح."},
  ];
  return(
    <section style={{padding:"60px 24px 80px",maxWidth:700,margin:"0 auto"}}>
      <SectionTitle icon="❓" title="أسئلة وأجوبة"/>
      <div style={{display:"flex",flexDirection:"column",gap:8}}>{faqs.map((f,i)=>(<FadeIn key={i} delay={i*0.04}><div onClick={()=>setOpenIdx(openIdx===i?null:i)} style={{background:openIdx===i?"rgba(212,175,55,0.08)":"rgba(255,255,255,0.03)",border:openIdx===i?"1px solid rgba(212,175,55,0.3)":"1px solid rgba(255,255,255,0.06)",borderRadius:14,padding:"16px 20px",cursor:"pointer",transition:"all 0.3s ease"}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><span style={{fontSize:15,fontWeight:600,color:openIdx===i?"#d4af37":"#fff"}}>{f.q}</span><span style={{color:"#d4af37",fontSize:18,transition:"transform 0.3s",transform:openIdx===i?"rotate(45deg)":"rotate(0)"}}>+</span></div>{openIdx===i&&(<p style={{fontSize:14,color:"rgba(255,255,255,0.65)",margin:"12px 0 0",lineHeight:1.8,borderTop:"1px solid rgba(255,255,255,0.06)",paddingTop:12}}>{f.a}</p>)}</div></FadeIn>))}</div>
    </section>
  );
}

function Footer(){return(<footer style={{borderTop:"1px solid rgba(255,255,255,0.06)",padding:"40px 24px",textAlign:"center"}}><div style={{fontSize:24,marginBottom:8}}>👑</div><div style={{color:"#d4af37",fontSize:18,fontWeight:700,fontFamily:"'Tajawal', sans-serif"}}>الباشا معكم.. فلا خوف عليكم</div><div style={{display:"flex",justifyContent:"center",gap:16,marginTop:20}}><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{width:44,height:44,borderRadius:12,background:"rgba(37,211,102,0.15)",border:"1px solid rgba(37,211,102,0.3)",display:"flex",alignItems:"center",justifyContent:"center",color:"#25D366",textDecoration:"none"}}><WhatsAppIcon size={22}/></a><a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" style={{width:44,height:44,borderRadius:12,background:"rgba(42,171,238,0.15)",border:"1px solid rgba(42,171,238,0.3)",display:"flex",alignItems:"center",justifyContent:"center",color:"#2AABEE",textDecoration:"none"}}><TelegramIcon size={22}/></a><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" style={{width:44,height:44,borderRadius:12,background:"rgba(221,42,123,0.15)",border:"1px solid rgba(221,42,123,0.3)",display:"flex",alignItems:"center",justifyContent:"center",color:"#DD2A7B",textDecoration:"none"}}><InstagramIcon size={22}/></a></div><div style={{color:"rgba(255,255,255,0.3)",fontSize:13,marginTop:16}}>© 2026 كوتش عمر رباح الباشا — جميع الحقوق محفوظة</div></footer>);}

export default function App(){
  const[active,setActive]=useState("home");
  useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"});},[active]);
  const renderSection=()=>{switch(active){case"gointel":return<GoIntel setActive={setActive}/>;case"goos":return<GoOS setActive={setActive}/>;case"packages":return<Packages/>;case"success":return<SuccessStories setActive={setActive}/>;case"contact":return<Contact/>;default:return(<><Hero setActive={setActive}/><GoIntel setActive={setActive}/><GoOS setActive={setActive}/><Packages/><SuccessStories setActive={setActive}/><FAQ/><Contact/></>);}};
  return(
    <div style={{minHeight:"100vh",background:"#0a0a0a",color:"#fff",fontFamily:"'Tajawal', sans-serif",direction:"rtl",position:"relative",overflowX:"hidden"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}body{background:#0a0a0a;}
        ::selection{background:rgba(212,175,55,0.3);color:#fff;}
        ::-webkit-scrollbar{width:6px;}::-webkit-scrollbar-track{background:#0a0a0a;}::-webkit-scrollbar-thumb{background:rgba(212,175,55,0.3);border-radius:3px;}
        @keyframes shimmer{0%,100%{background-position:200% 50%;}50%{background-position:0% 50%;}}
        @keyframes floatOrb{0%,100%{transform:translate(0,0) scale(1);}33%{transform:translate(30px,-40px) scale(1.05);}66%{transform:translate(-20px,20px) scale(0.95);}}
        @keyframes spinRing{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}
        @media(max-width:768px){.nav-desktop{display:none !important;}.nav-mobile-toggle{display:block !important;}}
        @media(min-width:769px){.nav-mobile-menu{display:none !important;}}
      `}</style>
      <AnimBG/><Nav active={active} setActive={setActive}/>
      <div style={{position:"relative",zIndex:1}}>{renderSection()}<Footer/></div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);


