import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useEffect, useRef } from "react";

// === إعدادات الروابط العامة ===
const COACH_TELEGRAM = "https://t.me/omo_rabah";
const WHATSAPP_URL = "https://wa.me/+33662766729";
const TELEGRAM_URL = "https://t.me/omo_rabah";
const INSTAGRAM_URL = "https://www.instagram.com/c.omar6?igsh=MXE5NDlhazM1d3NpMg==";

// === مكونات الأيقونات (SVG) ===
function WhatsAppIcon({size=24}){return(<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>);}
function TelegramIcon({size=24}){return(<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>);}
function InstagramIcon({size=24}){return(<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>);}

// === مكونات التصميم الأساسية ===
function AnimBG(){return(<div style={{position:"fixed",inset:0,zIndex:0,overflow:"hidden",pointerEvents:"none"}}><div style={{position:"absolute",width:600,height:600,borderRadius:"50%",background:"radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",top:"-10%",right:"-10%",animation:"floatOrb 20s ease-in-out infinite"}}/><div style={{position:"absolute",width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)",bottom:"10%",left:"-5%",animation:"floatOrb 25s ease-in-out infinite reverse"}}/><div style={{position:"absolute",width:300,height:300,borderRadius:"50%",background:"radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",top:"40%",left:"50%",animation:"floatOrb 18s ease-in-out infinite"}}/></div>);}

function FadeIn({children,delay=0,style={}}){const ref=useRef(null);const[visible,setVisible]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){setVisible(true);obs.disconnect();}},{threshold:0.15});obs.observe(el);return()=>obs.disconnect();},[]);return(<div ref={ref} style={{opacity:visible?1:0,transform:visible?"translateY(0)":"translateY(40px)",transition:`opacity 0.7s ${delay}s ease, transform 0.7s ${delay}s ease`,...style}}>{children}</div>);}

function Card({children,gold,glow,onClick,style={}}){const[hover,setHover]=useState(false);return(<div onClick={onClick} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{background:gold?"linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(30,30,30,0.95) 100%)":"rgba(255,255,255,0.04)",border:gold?"1px solid rgba(212,175,55,0.4)":"1px solid rgba(255,255,255,0.08)",borderRadius:20,padding:"28px 24px",cursor:onClick?"pointer":"default",transition:"all 0.4s cubic-bezier(0.4,0,0.2,1)",transform:hover&&onClick?"translateY(-6px) scale(1.02)":"translateY(0) scale(1)",boxShadow:hover&&glow?"0 20px 60px rgba(212,175,55,0.15)":hover&&onClick?"0 12px 40px rgba(0,0,0,0.3)":"none",backdropFilter:"blur(20px)",position:"relative",overflow:"hidden",...style}}>{gold&&<div style={{position:"absolute",top:0,left:0,right:0,height:2,background:"linear-gradient(90deg, transparent, #d4af37, transparent)"}}/>}{children}</div>);}

function Btn({children,primary,outline,href,onClick,full,small,style={}}){const[h,setH]=useState(false);const base={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,padding:small?"10px 20px":"14px 32px",fontSize:small?14:16,fontWeight:600,fontFamily:"'Tajawal', sans-serif",borderRadius:14,cursor:"pointer",transition:"all 0.3s ease",textDecoration:"none",border:"none",width:full?"100%":"auto",background:primary?(h?"linear-gradient(135deg, #e5c246 0%, #c9a020 100%)":"linear-gradient(135deg, #d4af37 0%, #b8941f 100%)"):outline?"transparent":(h?"rgba(255,255,255,0.12)":"rgba(255,255,255,0.06)"),color:primary?"#0a0a0a":"#fff",border:outline?"1px solid rgba(212,175,55,0.5)":"none",transform:h?"translateY(-2px)":"none",boxShadow:h&&primary?"0 8px 30px rgba(212,175,55,0.3)":"none",...style};const Tag=href?"a":"button";const extra=href?{href,target:"_blank",rel:"noopener noreferrer"}:{onClick};return <Tag {...extra} style={base} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>{children}</Tag>;}

function Badge({children,color="#d4af37"}){return(<span style={{display:"inline-block",padding:"4px 14px",borderRadius:50,fontSize:12,fontWeight:700,background:`${color}22`,color,border:`1px solid ${color}44`,letterSpacing:0.5}}>{children}</span>);}

function Stat({value,label,icon}){return(<div style={{textAlign:"center",padding:"20px 12px"}}><div style={{fontSize:36,marginBottom:4}}>{icon}</div><div style={{fontSize:32,fontWeight:800,color:"#d4af37",fontFamily:"'Tajawal', sans-serif",lineHeight:1.2}}>{value}</div><div style={{fontSize:14,color:"rgba(255,255,255,0.6)",marginTop:4}}>{label}</div></div>);}

function SectionTitle({icon,title,sub}){return(<div style={{textAlign:"center",marginBottom:48}}><div style={{fontSize:48,marginBottom:12}}>{icon}</div><h2 style={{fontSize:32,fontWeight:800,color:"#fff",margin:"0 0 12px",fontFamily:"'Tajawal', sans-serif"}}>{title}</h2>{sub&&<p style={{fontSize:16,color:"rgba(255,255,255,0.5)",margin:0,maxWidth:500,marginInline:"auto"}}>{sub}</p>}<div style={{width:60,height:3,background:"linear-gradient(90deg, #d4af37, transparent)",margin:"16px auto 0",borderRadius:2}}/></div>);}

function VideoPlayer({src,style={}}){const[playing,setPlaying]=useState(false);const videoRef=useRef(null);const handlePlay=()=>{if(videoRef.current){if(playing){videoRef.current.pause();}else{videoRef.current.play();}setPlaying(!playing);}};return(<div style={{position:"relative",borderRadius:16,overflow:"hidden",border:"1px solid rgba(212,175,55,0.2)",background:"#000",cursor:"pointer",...style}} onClick={handlePlay}><video ref={videoRef} src={src} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} onEnded={()=>setPlaying(false)} onError={(e)=>{e.target.style.display="none";}} playsInline preload="metadata"/>{!playing&&(<div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.4)"}}><div style={{width:64,height:64,borderRadius:"50%",background:"rgba(212,175,55,0.9)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 30px rgba(212,175,55,0.4)"}}><div style={{width:0,height:0,borderTop:"12px solid transparent",borderBottom:"12px solid transparent",borderLeft:"20px solid #0a0a0a",marginLeft:4}}/></div></div>)}</div>);}

function CardImage({src,height=160,radius=14}){return(<div style={{width:"100%",height,borderRadius:radius,overflow:"hidden",marginBottom:16,background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)"}}><img src={src} alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} onError={(e)=>{e.target.style.opacity="0.3";}}/></div>);}

function DetailCard({icon,title,desc,items,color="#d4af37",image}){const[open,setOpen]=useState(false);return(<Card onClick={()=>setOpen(!open)} style={{cursor:"pointer"}}>{image&&open&&<CardImage src={image} height={140}/>}<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><div style={{display:"flex",gap:12,alignItems:"center"}}>{icon&&<span style={{fontSize:28}}>{icon}</span>}<div><h4 style={{fontSize:17,fontWeight:700,color,margin:0,fontFamily:"'Tajawal', sans-serif"}}>{title}</h4>{desc&&<p style={{fontSize:13,color:"rgba(255,255,255,0.5)",margin:"4px 0 0"}}>{desc}</p>}</div></div><span style={{color,fontSize:20,transition:"transform 0.3s",transform:open?"rotate(45deg)":"rotate(0)",flexShrink:0}}>+</span></div>{open&&items&&(<div style={{marginTop:16,paddingTop:12,borderTop:"1px solid rgba(255,255,255,0.08)"}}>{items.map((item,i)=>(<div key={i} style={{display:"flex",gap:8,alignItems:"flex-start",marginBottom:8}}><span style={{color,flexShrink:0,fontSize:12,marginTop:3}}>◆</span><span style={{fontSize:14,color:"rgba(255,255,255,0.75)",lineHeight:1.7}}>{item}</span></div>))}</div>)}</Card>);}

// === شريط التنقل (Navbar) ===
function Nav({active,setActive}){
  const[open,setOpen]=useState(false);
  const[scrolled,setScrolled]=useState(false);
  useEffect(()=>{const fn=()=>setScrolled(window.scrollY>50);window.addEventListener("scroll",fn);return()=>window.removeEventListener("scroll",fn);},[]);
  const items=[{id:"home",label:"الرئيسية"},{id:"gointel",label:"GO Intel"},{id:"goos",label:"GO OS"},{id:"golibrary",label:"GO Library"},{id:"packages",label:"الباقات"},{id:"success",label:"قصص النجاح"},{id:"contact",label:"تواصل"}];
  return(<nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,background:scrolled?"rgba(10,10,10,0.95)":"rgba(10,10,10,0.7)",backdropFilter:"blur(20px)",borderBottom:"1px solid rgba(255,255,255,0.06)",transition:"all 0.3s ease"}}><div style={{maxWidth:1200,margin:"0 auto",padding:"0 24px",display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}><div style={{display:"flex",alignItems:"center",gap:10,cursor:"pointer"}} onClick={()=>{setActive("home");window.scrollTo({top:0,behavior:"smooth"});}}><span style={{fontSize:28}}>👑</span><span style={{fontSize:20,fontWeight:800,color:"#d4af37",fontFamily:"'Tajawal', sans-serif"}}>الباشا</span></div><div style={{display:"flex",gap:8,alignItems:"center"}} className="nav-desktop">{items.map(it=>(<button key={it.id} onClick={()=>{setActive(it.id);setOpen(false);}} style={{background:active===it.id?"rgba(212,175,55,0.15)":"transparent",color:active===it.id?"#d4af37":"rgba(255,255,255,0.7)",border:"none",padding:"8px 16px",borderRadius:10,cursor:"pointer",fontSize:14,fontWeight:600,fontFamily:"'Tajawal', sans-serif",transition:"all 0.3s ease"}}>{it.label}</button>))}</div><button className="nav-mobile-toggle" onClick={()=>setOpen(!open)} style={{background:"none",border:"none",color:"#d4af37",fontSize:24,cursor:"pointer",display:"none"}}>{open?"✕":"☰"}</button></div>{open&&(<div className="nav-mobile-menu" style={{padding:"8px 24px 20px",display:"flex",flexDirection:"column",gap:4,borderTop:"1px solid rgba(255,255,255,0.06)"}}>{items.map(it=>(<button key={it.id} onClick={()=>{setActive(it.id);setOpen(false);}} style={{background:active===it.id?"rgba(212,175,55,0.15)":"transparent",color:active===it.id?"#d4af37":"rgba(255,255,255,0.7)",border:"none",padding:"12px 16px",borderRadius:10,cursor:"pointer",fontSize:15,fontWeight:600,fontFamily:"'Tajawal', sans-serif",textAlign:"right",transition:"all 0.3s ease"}}>{it.label}</button>))}</div>)}</nav>);
}

// === قسم الهيرو (Hero) ===
function Hero({setActive}){
  return(
    <section style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"100px 24px 60px",position:"relative"}}>
      <FadeIn style={{width:"100%",maxWidth:900,marginBottom:40}}>
        <div style={{borderRadius:24,overflow:"hidden",border:"1px solid rgba(212,175,55,0.3)",boxShadow:"0 20px 80px rgba(212,175,55,0.1)"}}>
          {/* صورة البانر الرئيسية */}
          <img src="/images/hero-bg.jpg" alt="الباشا" style={{width:"100%",display:"block"}} onError={(e)=>{e.target.parentElement.parentElement.style.display="none";}}/>
        </div>
      </FadeIn>

      <FadeIn>
        <div style={{width:180,height:180,borderRadius:"50%",overflow:"hidden",border:"4px solid rgba(212,175,55,0.6)",boxShadow:"0 0 60px rgba(212,175,55,0.2), 0 0 120px rgba(212,175,55,0.08)",margin:"0 auto 32px",background:"linear-gradient(135deg, rgba(212,175,55,0.2), rgba(10,10,10,0.9))",position:"relative"}}>
          {/* صورة البروفايل */}
          <img src="/images/omar-profile.webp" alt="كوتش عمر رباح الباشا" style={{width:"110%",height:"110%",objectFit:"cover",display:"block",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}} />
          <div style={{position:"absolute",inset:-4,borderRadius:"50%",border:"2px solid transparent",borderTopColor:"#d4af37",borderBottomColor:"#d4af37",animation:"spinRing 8s linear infinite",pointerEvents:"none"}}/>
        </div>
      </FadeIn>

      <div style={{textAlign:"center",maxWidth:800,position:"relative",zIndex:1}}>
        <FadeIn delay={0.05}><Badge>🇫🇷 رائد أعمال في فرنسا</Badge></FadeIn>
        <FadeIn delay={0.15}><h1 style={{fontSize:"clamp(36px, 7vw, 64px)",fontWeight:900,lineHeight:1.15,margin:"24px 0 0",fontFamily:"'Tajawal', sans-serif",background:"linear-gradient(135deg, #fff 0%, #d4af37 50%, #fff 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundSize:"200% 200%",animation:"shimmer 4s ease infinite"}}>كوتش عمر رباح الباشا</h1></FadeIn>
        <FadeIn delay={0.25}><p style={{fontSize:22,color:"#d4af37",margin:"16px 0 0",fontWeight:700,fontFamily:"'Tajawal', sans-serif",letterSpacing:1}}>✦ الباشا معكم.. فلا خوف عليكم ✦</p></FadeIn>
        <FadeIn delay={0.35}><p style={{fontSize:18,color:"rgba(255,255,255,0.65)",margin:"20px auto 0",maxWidth:550,lineHeight:1.8}}>مؤسس نظام <strong style={{color:"#d4af37"}}>SB Model</strong> ومشروع <strong style={{color:"#d4af37"}}>X</strong><br/>مستشار وخبير في أسواق المال<br/>تداول • استثمار • ذكاء اصطناعي • دخل سلبي</p></FadeIn>
        
        <FadeIn delay={0.4}>
          <div style={{width:"100%",maxWidth:600,margin:"32px auto 0",padding:"0 0"}}>
            <p style={{fontSize:15,color:"#d4af37",fontWeight:700,marginBottom:12,fontFamily:"'Tajawal', sans-serif",textAlign:"center"}}>🎬 تعرّف على الكوتش عمر الباشا</p>
            <div style={{position:"relative",width:"100%",paddingBottom:"56.25%",height:0,overflow:"hidden",borderRadius:16,border:"1px solid rgba(212,175,55,0.2)",background:"#000",boxShadow:"0 10px 30px rgba(0,0,0,0.5)"}}>
              <iframe src="https://www.youtube.com/embed/0WQrnPqGctQ" style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:0}} title="YouTube Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.5}><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:16,margin:"40px auto",maxWidth:650}}><Stat icon="🏆" value="+2,779" label="متدرب"/><Stat icon="📅" value="+9" label="سنوات خبرة"/><Stat icon="🌍" value="+15" label="دولة عربية"/><Stat icon="⭐" value="SB" label="Model"/></div></FadeIn>
        <FadeIn delay={0.6}><div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap",marginTop:16}}><Btn primary onClick={()=>setActive("packages")}>📦 ابدأ الآن</Btn><Btn outline onClick={()=>setActive("gointel")}>🚀 استكشف GO Intel</Btn></div></FadeIn>
      </div>
    </section>
  );
}

// === قسم الأسواق ===
function MarketGroup({title,color,items}){return(<div style={{marginBottom:32}}><h4 style={{fontSize:18,fontWeight:700,color:color||"#d4af37",marginBottom:16,fontFamily:"'Tajawal', sans-serif"}}>{title}</h4><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:14}}>{items.map((m,i)=>(<FadeIn key={i} delay={i*0.06}><Card gold style={{textAlign:"center",padding:"20px 16px"}}><CardImage src={m.image} height={120}/><div style={{fontSize:17,fontWeight:700,color:"#fff"}}>{m.name}</div></Card></FadeIn>))}</div></div>);}

// === قسم GO Intel ===
function GoIntel({setActive}){
  // صور الأسواق (Market Images)
  const forexMarkets=[
    {name:"Currencies",image:"/images/market-currencies.jpg"},
    {name:"Forex",image:"/images/market-forex.jpg"},
    {name:"Gold",image:"/images/market-gold.jpg"},
    {name:"Oil",image:"/images/market-oil.jpg"}
  ];
  const stockMarkets=[
    {name:"CFD",image:"/images/market-cfd.jpg"},
    {name:"Investing",image:"/images/market-investing.jpg"},
    {name:"Halal Investing",image:"/images/market-halal.jpg"}
  ];
  const cryptoMarkets=[
    {name:"Spot",image:"/images/market-spot.jpg"},
    {name:"Futures",image:"/images/market-futures.jpg"},
    {name:"CFD",image:"/images/market-crypto-cfd.jpg"}
  ];

  // صور الاستراتيجيات (Strategies)
  const strategies=[
    {icon:"🎯",title:"Maestro",desc:"شاهد ما لا يراه الآخرون",image:"/images/strategy-maestro.jpg",items:["استراتيجية متقدمة تركّز على هيكل السوق والسيولة","تحليل كامل للسوق بنظرة واحدة"]},
    {icon:"🔍",title:"Seeker",desc:"اعثر على الفرصة",image:"/images/strategy-seeker.jpg",items:["تحديد أفضل نقاط الدخول","حركة ذكية ومحسوبة"]},
    {icon:"🏛️",title:"SMC",desc:"تداول بمنطق المؤسسات",image:"/images/strategy-smc.jpg",items:["تحليل حركة المؤسسات","هيكل السوق والسيولة"]},
    {icon:"⚡",title:"Strike 90",desc:"90 دقيقة.. حركة واحدة دقيقة",image:"/images/strategy-strike90.jpg",items:["استراتيجية تنفيذ مبنية على الوقت","أول 90 دقيقة بعد الافتتاح"]},
    {icon:"📊",title:"Technical Analysis",desc:"وضوح تقني في حركة السوق",image:"/images/strategy-technical.jpg",items:["أنماط الرسوم البيانية والترندات","الدعم والمقاومة والزخم"]},
  ];

  // صور المؤشرات (Indicators)
  const indicators=[
    {icon:"🛡️",title:"Defender",desc:"احمِ ما تكسبه",image:"/images/indicator-defender.jpg",items:["إدارة المخاطر وحماية رأس المال"]},
    {icon:"🏹",title:"Hunter",desc:"اضرب بنيّة",image:"/images/indicator-hunter.jpg",items:["فرص سكالبينج مبنية على الزخم"]},
    {icon:"🎯",title:"Maestro",desc:"رؤى سوقية متقدمة",image:"/images/indicator-maestro.jpg",items:["إبراز الهيكل والزخم والمناطق الرئيسية"]},
    {icon:"🔍",title:"Seeker",desc:"نقاط دخول دقيقة",image:"/images/indicator-seeker.jpg",items:["يمسح السوق لتحديد نقاط الدخول"]},
    {icon:"⚡",title:"Strike90",desc:"منطقة ضربة عالية الاحتمالية",image:"/images/indicator-strike90.jpg",items:["نظام ثقة مبني على البيانات"]},
  ];

  return(
    <section style={{padding:"80px 24px",maxWidth:1200,margin:"0 auto"}}>
      <SectionTitle icon="📊" title="GO Intel" sub="معلومات تداول فورية عبر الأسواق الرئيسية"/>
      <FadeIn><Card gold style={{textAlign:"center",marginBottom:48,padding:"40px 24px"}}><p style={{fontSize:18,color:"rgba(255,255,255,0.8)",lineHeight:2,margin:0}}><strong style={{color:"#d4af37"}}>GO INTEL</strong> يقدم معلومات تداول فورية عبر الأسواق الرئيسية<br/>يحصل الأعضاء على <strong style={{color:"#d4af37"}}>رؤى قابلة للتنفيذ</strong></p></Card></FadeIn>
      
      <FadeIn><h3 style={{textAlign:"center",fontSize:24,fontWeight:800,color:"#d4af37",margin:"0 0 24px",fontFamily:"'Tajawal', sans-serif"}}>🌐 الأسواق المدعومة</h3></FadeIn>
      <MarketGroup title="💱 Forex" color="#60a5fa" items={forexMarkets}/>
      <MarketGroup title="📈 Stocks" color="#c084fc" items={stockMarkets}/>
      <MarketGroup title="🪙 Crypto" color="#fbbf24" items={cryptoMarkets}/>

      <FadeIn delay={0.1}><h3 style={{textAlign:"center",fontSize:26,color:"#d4af37",fontWeight:800,fontFamily:"'Tajawal', sans-serif",marginBottom:8,marginTop:32}}>⚔️ الاستراتيجيات</h3></FadeIn>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(340px, 1fr))",gap:16,marginBottom:48}}>
        {strategies.map((s,i)=>(<FadeIn key={i} delay={0.15+i*0.06}><DetailCard icon={s.icon} title={s.title} desc={s.desc} items={s.items} image={s.image}/></FadeIn>))}
      </div>

      <FadeIn delay={0.2}><h3 style={{textAlign:"center",fontSize:26,color:"#d4af37",fontWeight:800,fontFamily:"'Tajawal', sans-serif",marginBottom:8}}>📡 المؤشرات</h3></FadeIn>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(340px, 1fr))",gap:16}}>
        {indicators.map((ind,i)=>(<FadeIn key={i} delay={0.25+i*0.06}><DetailCard icon={ind.icon} title={ind.title} desc={ind.desc} items={ind.items} image={ind.image} color="#a78bfa"/></FadeIn>))}
      </div>
      <FadeIn delay={0.4}><div style={{textAlign:"center",marginTop:40}}><Btn primary onClick={()=>setActive("packages")}>📦 اختر باقتك الآن</Btn></div></FadeIn>
    </section>
  );
}

// === قسم Go OS ===
function GoOS({setActive}){
  // صور مميزات Go OS
  const features=[
    {icon:"🧠",title:"ذكاء تداول شخصي",image:"/images/goos-personal.jpg",desc:"تجربة مخصصة حسب أهدافك"},
    {icon:"📡",title:"إشارات ذكية",image:"/images/goos-signals.jpg",desc:"إشارات تولد من نماذج ذكاء حية"},
    {icon:"⚙️",title:"محرك الاستراتيجيات",image:"/images/goos-engine.jpg",desc:"منطق استراتيجي متقدم"},
    {icon:"📸",title:"تحليل الشارت بالصور",image:"/images/goos-chart.jpg",desc:"ارفع صورة شارت للتحليل الفوري"},
    {icon:"📊",title:"تتبع الأداء الحي",image:"/images/goos-performance.jpg",desc:"تتبع كل إشارة وتفاعل"},
    {icon:"📰",title:"أخبار فورية",image:"/images/goos-news.jpg",desc:"يدمج الأخبار الماكروية والسوقية"},
    {icon:"🌍",title:"تواصل متعدد اللغات",image:"/images/goos-global.jpg",desc:"يتواصل بطلاقة عبر لغات متعددة"},
  ];
  return(
    <section style={{padding:"80px 24px",maxWidth:1200,margin:"0 auto"}}>
      <SectionTitle icon="🤖" title="GO OS" sub="نظام التشغيل الذكي في قلب منظومة GO"/>
      <FadeIn><Card gold style={{textAlign:"center",marginBottom:48,padding:"40px 24px"}}><p style={{fontSize:18,color:"rgba(255,255,255,0.8)",lineHeight:2,margin:0}}><strong style={{color:"#d4af37"}}>GO OS</strong> هو نظام التشغيل الذكي في قلب منظومة GO<br/>يحوّل التعقيد إلى <strong style={{color:"#d4af37"}}>وضوح في الوقت الفعلي</strong></p></Card></FadeIn>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(340px, 1fr))",gap:20}}>
        {features.map((f,i)=>(<FadeIn key={i} delay={0.25+i*0.06}><Card style={{height:"100%"}}><CardImage src={f.image} height={160}/><div style={{fontSize:40,marginBottom:12}}>{f.icon}</div><h4 style={{fontSize:18,fontWeight:700,color:"#d4af37",margin:"0 0 8px",fontFamily:"'Tajawal', sans-serif"}}>{f.title}</h4><p style={{fontSize:14,color:"rgba(255,255,255,0.7)",margin:0,lineHeight:1.8}}>{f.desc}</p></Card></FadeIn>))}
      </div>
      <FadeIn delay={0.5}><div style={{textAlign:"center",marginTop:40}}><Btn primary onClick={()=>setActive("packages")}>📦 اشترك للوصول</Btn></div></FadeIn>
    </section>
  );
}

// === قسم المكتبة Go Library ===
function GoLibrary({setActive}){
  // صور مستويات المكتبة
  const levels=[
    {title:"أساسيات السوق",titleEn:"Market Foundation",desc:"تعلّم كيف يعمل سوق الفوركس فعلاً",image:"/images/lib-market.jpg",items:["ما هو التداول؟","بداية الرحلة"]},
    {title:"الأساسيات التطبيقية",titleEn:"Applied Foundation",desc:"تطبيق المفاهيم في السوق الحقيقي",image:"/images/lib-applied.jpg",items:["فوركس وأسهم وكريبتو","إدارة المخاطر"]},
    {title:"الأساسيات المتقدمة",titleEn:"Advanced Foundation",desc:"هيكل السوق المتقدم والتنفيذ الدقيق",image:"/images/lib-advanced.jpg",items:["هيكل السوق المتقدم","علم النفس"]},
  ];
  return(
    <section style={{padding:"80px 24px",maxWidth:1200,margin:"0 auto"}}>
      <SectionTitle icon="📚" title="GO Library" sub="مكتبة معرفية رقمية شاملة"/>
      <div style={{display:"flex",flexDirection:"column",gap:24}}>
        {levels.map((lvl,i)=>(<FadeIn key={i} delay={i*0.1}><Card style={{padding:"32px 28px"}}><CardImage src={lvl.image} height={180}/><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12,flexWrap:"wrap",gap:8}}><h3 style={{fontSize:22,fontWeight:800,color:"#d4af37",margin:0,fontFamily:"'Tajawal', sans-serif"}}>{lvl.title}</h3><Badge>{lvl.titleEn}</Badge></div><p style={{fontSize:15,color:"rgba(255,255,255,0.75)",lineHeight:1.8,margin:"0 0 16px"}}>{lvl.desc}</p></Card></FadeIn>))}
      </div>
      <FadeIn delay={0.4}><div style={{textAlign:"center",marginTop:40}}><Btn primary onClick={()=>setActive("packages")}>📦 اشترك للوصول</Btn></div></FadeIn>
    </section>
  );
}

// === قسم الباقات ===
function Packages(){
  const pkgs=[
    {id:"lite",name:"LITE Package",tag:"للأفراد الجدد",price:"349",origPrice:"999",days:"30",color:"#4ade80",recommended:false,eTrading:["2 قنوات توصيات","تداول مدعوم بالذكاء الاصطناعي","مؤشرات خاصة","نظام ذكي لتقييم أدائك وانضباطك"],strategy:"استراتيجية الدخول R1+R2",strategyDetails:["ملف جاهز لإدارة المخاطر","خطة تطبيق يومية"],eModel:true},
    {id:"pro",name:"Pro Package",tag:"للمستثمرين المتوسطين",price:"999",origPrice:"2,999",days:"60",color:"#d4af37",recommended:true,eTrading:["5 قنوات توصيات بالـ AI","تداول مدعوم بالذكاء الاصطناعي","مؤشرات خاصة بالـ AI","تداول لايف يومي مع المحللين","كورس الحسابات الممولة والربح بالـ AI"],strategy:"🍊 استراتيجية برتقالة الفجر",strategyDetails:["استراتيجية التداول الذكية","تعمل على MT5","تركّز على نقاط الدخول بدقة عالية"],eModel:true},
    {id:"ultra",name:"ULTRA Package",tag:"للمحترفين",price:"1,699",origPrice:"4,999",days:"90",color:"#a78bfa",recommended:false,eTrading:["12 قناة توصيات بالـ AI","4 مؤشرات التداول بالـ AI","تداول لايف يومي مع المحللين","تداول بالـ AI","جلسات خاصة لتحليل حسابك وأخطائك","كورس الحسابات الممولة والربح بالـ AI","كورس نفسي لبناء عقلية المتداول"],strategy:"⚡ الجيل الجديد من SB MODEL",strategyDetails:["مستويات SB MODEL بالـ AI","مستوى SB-Raven","نقلة نوعية في التحليل الموجي والتداول الذكي"],eModel:true},
  ];
  return(
    <section style={{padding:"80px 24px",maxWidth:1200,margin:"0 auto"}}>
      <SectionTitle icon="📦" title="الباقات التعليمية" sub="استثمر في مستقبلك المالي"/>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(340px, 1fr))",gap:24,alignItems:"stretch"}}>
        {pkgs.map((p,i)=>(<FadeIn key={p.id} delay={i*0.12}><div style={{position:"relative",height:"100%"}}>{p.recommended&&(<div style={{position:"absolute",top:-14,left:"50%",transform:"translateX(-50%)",zIndex:2,background:"linear-gradient(135deg, #d4af37, #b8941f)",color:"#0a0a0a",padding:"6px 24px",borderRadius:50,fontSize:13,fontWeight:800,fontFamily:"'Tajawal', sans-serif",whiteSpace:"nowrap"}}>⭐ يُوصى بها</div>)}<Card gold={p.recommended} glow={p.recommended} style={{height:"100%",display:"flex",flexDirection:"column",border:p.recommended?"1px solid rgba(212,175,55,0.5)":"1px solid rgba(255,255,255,0.08)"}}><div style={{textAlign:"center",marginBottom:20}}><Badge color={p.color}>{p.tag}</Badge><h3 style={{fontSize:26,fontWeight:800,color:p.color,margin:"16px 0 4px",fontFamily:"'Tajawal', sans-serif"}}>{p.name}</h3><div style={{color:"rgba(255,255,255,0.4)",fontSize:14,textDecoration:"line-through"}}>قيمة المحتوى {p.origPrice}$</div><div style={{display:"flex",alignItems:"baseline",justifyContent:"center",gap:4,marginTop:8}}><span style={{fontSize:44,fontWeight:900,color:"#fff",fontFamily:"'Tajawal', sans-serif"}}>{p.price}</span><span style={{fontSize:18,color:"rgba(255,255,255,0.5)"}}>$</span></div><div style={{fontSize:14,color:"rgba(255,255,255,0.4)"}}>{p.days} يوم</div></div><div style={{borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:16,marginBottom:12}}><div style={{fontSize:13,fontWeight:700,color:p.color,marginBottom:10,letterSpacing:1}}>📊 e-Trading</div>{p.eTrading.map((item,j)=>(<div key={j} style={{display:"flex",gap:8,alignItems:"flex-start",marginBottom:8}}><span style={{color:p.color,flexShrink:0}}>✅</span><span style={{fontSize:14,color:"rgba(255,255,255,0.75)"}}>{item}</span></div>))}</div><div style={{marginTop:"auto"}}><Btn primary={p.recommended} outline={!p.recommended} full href={COACH_TELEGRAM}>اشترك الآن</Btn></div></Card></div></FadeIn>))}
      </div>
    </section>
  );
}

// === قسم قصص النجاح ===
function SuccessStories({setActive}){
  // فيديوهات قصص النجاح
  const stories=[
    {flag:"🇮🇶",name:"متدرب مرتضى من العراق",text:"21$ → 3,000$",highlight:"ربح خيالي",video:"/videos/success-iraq.mp4"},
    {flag:"🏅",name:"مدرب في مشروع X",text:"20K$ → 400K$",highlight:"قصة ملهمة",video:"/videos/success-projectx.mp4"},
    {flag:"🎓",name:"ورشة تدريب مكثف",text:"تدريب حي مع المتدربين",highlight:"أوف لاين",video:"/videos/success-workshop.mp4"},
  ];
  return(
    <section style={{padding:"80px 24px",maxWidth:1200,margin:"0 auto"}}>
      <SectionTitle icon="🏆" title="قصص نجاح متدربيني" sub="آراء المتدربين تحت إشرافي"/>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(340px, 1fr))",gap:24}}>
        {stories.map((s,i)=>(<FadeIn key={i} delay={i*0.1}><Card gold style={{textAlign:"center"}}><div style={{marginBottom:16}}><VideoPlayer src={s.video} style={{aspectRatio:"16/9",borderRadius:14}}/></div><div style={{fontSize:36,marginBottom:8}}>{s.flag}</div><h4 style={{fontSize:18,fontWeight:700,color:"#d4af37",margin:"0 0 8px",fontFamily:"'Tajawal', sans-serif"}}>{s.name}</h4><p style={{fontSize:14,color:"rgba(255,255,255,0.7)",lineHeight:1.8,margin:"0 0 16px"}}>{s.text}</p></Card></FadeIn>))}
      </div>
      <div style={{textAlign:"center",marginTop:40}}><Btn primary onClick={()=>setActive("packages")}>📦 ابدأ رحلتك الآن</Btn></div>
    </section>
  );
}

// === قسم التواصل والأسئلة ===
function Contact(){return(<section style={{padding:"80px 24px",maxWidth:700,margin:"0 auto"}}><SectionTitle icon="📞" title="تواصل معنا"/><FadeIn><Card gold style={{padding:"36px 28px",textAlign:"center"}}><div style={{fontSize:36,marginBottom:12}}>👤</div><h4 style={{color:"#d4af37",fontSize:20,fontWeight:700,marginBottom:20}}>كوتش عمر رباح الباشا</h4><div style={{display:"flex",justifyContent:"center",gap:14,marginBottom:24}}><a href={WHATSAPP_URL} target="_blank" style={{width:52,height:52,borderRadius:16,background:"linear-gradient(135deg, #25D366, #128C7E)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff"}}><WhatsAppIcon size={26}/></a><a href={TELEGRAM_URL} target="_blank" style={{width:52,height:52,borderRadius:16,background:"linear-gradient(135deg, #2AABEE, #229ED9)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff"}}><TelegramIcon size={26}/></a></div><Btn primary full href={COACH_TELEGRAM}>💬 تواصل عبر تلجرام</Btn></Card></FadeIn></section>);}
function FAQ(){const[idx,setIdx]=useState(null);const faqs=[{q:"هل العمل معك حلال؟",a:"نعم بشكل كامل."},{q:"كم أحتاج من الوقت؟",a:"ساعتين يومياً."},{q:"كيف أبدأ؟",a:"اشترك واختر باقتك وسنكون معك."}];return(<section style={{padding:"60px 24px 80px",maxWidth:700,margin:"0 auto"}}><SectionTitle icon="❓" title="أسئلة وأجوبة"/><div style={{display:"flex",flexDirection:"column",gap:8}}>{faqs.map((f,i)=>(<FadeIn key={i}><div onClick={()=>setIdx(idx===i?null:i)} style={{background:idx===i?"rgba(212,175,55,0.08)":"rgba(255,255,255,0.03)",border:idx===i?"1px solid rgba(212,175,55,0.3)":"1px solid rgba(255,255,255,0.06)",borderRadius:14,padding:"16px 20px",cursor:"pointer"}}><div style={{display:"flex",justifyContent:"space-between"}}><span style={{color:idx===i?"#d4af37":"#fff"}}>{f.q}</span><span>{idx===i?"-":"+"}</span></div>{idx===i&&<p style={{marginTop:10,color:"rgba(255,255,255,0.6)"}}>{f.a}</p>}</div></FadeIn>))}</div></section>);}
function Footer(){return(<footer style={{borderTop:"1px solid rgba(255,255,255,0.06)",padding:"40px 24px",textAlign:"center"}}><div style={{color:"#d4af37",fontSize:18,fontWeight:700}}>الباشا معكم.. فلا خوف عليكم</div><div style={{color:"rgba(255,255,255,0.3)",fontSize:13,marginTop:16}}>© 2026 كوتش عمر رباح الباشا</div></footer>);}

// === التطبيق الرئيسي ===
function App(){
  const[active,setActive]=useState("home");
  useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"});},[active]);
  const renderSection=()=>{switch(active){case"gointel":return<GoIntel setActive={setActive}/>;case"goos":return<GoOS setActive={setActive}/>;case"golibrary":return<GoLibrary setActive={setActive}/>;case"packages":return<Packages/>;case"success":return<SuccessStories setActive={setActive}/>;case"contact":return<Contact/>;default:return(<><Hero setActive={setActive}/><GoIntel setActive={setActive}/><GoOS setActive={setActive}/><GoLibrary setActive={setActive}/><Packages/><SuccessStories setActive={setActive}/><FAQ/><Contact/></>);}};
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
        iframe{max-width:100% !important;}video{max-width:100% !important;}img{max-width:110%;}section{overflow:hidden;}
      `}</style>
      <AnimBG/><Nav active={active} setActive={setActive}/>
      <div style={{position:"relative",zIndex:1}}>{renderSection()}<Footer/></div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
