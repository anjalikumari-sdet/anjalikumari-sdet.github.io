<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta name="description" content="Anjali Kumari — Researcher, Problem Solver, Lifelong Learner">
<title>Anjali Kumari — Researcher & Technologist</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&family=Parisienne&display=swap');

:root{
  --bg:#050913;--bg2:#091225;--panel:rgba(9,18,39,.72);--line:rgba(170,180,255,.18);
  --text:#f8f7fb;--muted:#b6bbca;--purple:#b779ff;--blue:#86bfff;--pink:#ff86d8;
  --max:1200px;--shadow:0 25px 80px rgba(0,0,0,.45)
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:Inter,Arial,sans-serif;color:var(--text);background:
radial-gradient(circle at 75% 12%,rgba(150,95,255,.18),transparent 27rem),
radial-gradient(circle at 10% 55%,rgba(65,140,255,.11),transparent 30rem),
linear-gradient(180deg,#050811,#071126 52%,#050811);overflow-x:hidden}
body:before{content:"";position:fixed;inset:0;pointer-events:none;opacity:.18;background-image:
linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);
background-size:70px 70px;mask-image:linear-gradient(to bottom,black,transparent 80%);z-index:-1}
a{text-decoration:none;color:inherit}.container{width:min(var(--max),92%);margin:auto}
.serif{font-family:"Cormorant Garamond",Georgia,serif}
.script{font-family:Parisienne,cursive}
nav{position:fixed;z-index:100;top:0;left:0;right:0;height:76px;background:rgba(3,7,16,.58);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
.nav{height:100%;display:flex;align-items:center;justify-content:space-between}
.brand{display:flex;align-items:center;gap:10px;font-family:"Cormorant Garamond",serif;font-size:24px;font-weight:600}
.wave{color:var(--pink);font-size:28px;letter-spacing:-8px;transform:rotate(-3deg)}
.brand small{font-family:Parisienne,cursive;font-size:22px;color:#eee}
.links{display:flex;align-items:center;gap:30px;font-size:12px;color:#c9ccda}.links a{padding:29px 0;position:relative}.links a.active,.links a:hover{color:white}.links a.active:after{content:"";position:absolute;height:2px;width:24px;background:linear-gradient(90deg,var(--pink),var(--purple));bottom:20px;left:50%;transform:translateX(-50%);border-radius:10px}
.nav-actions{display:flex;gap:10px;align-items:center}.outline{border:1px solid rgba(230,225,255,.5);border-radius:30px;padding:10px 17px;font-size:11px;color:#fff;background:rgba(255,255,255,.035)}.icon-btn{border:0;background:none;color:#d7d8e0;font-size:18px;cursor:pointer}
.menu{display:none;border:0;background:none;color:white;font-size:24px}

.hero{min-height:760px;padding:145px 0 100px;position:relative;overflow:hidden}
.hero:after{content:"";position:absolute;left:-10%;right:-10%;bottom:-55%;height:70%;background:radial-gradient(ellipse at center,rgba(255,126,215,.17),transparent 65%);pointer-events:none}
.hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:40px;align-items:center;position:relative;z-index:2}
.pill{display:inline-flex;border:1px solid rgba(195,192,255,.45);background:rgba(15,20,45,.6);border-radius:30px;padding:7px 14px;font-size:11px;margin-bottom:22px;color:#f1effb}
h1{font-family:"Cormorant Garamond",serif;font-size:clamp(70px,8vw,118px);line-height:.82;letter-spacing:-5px;font-weight:600}
h1 span{background:linear-gradient(90deg,#fff 20%,#cf9cff 60%,#9bc8ff);-webkit-background-clip:text;color:transparent}
.roleline{display:flex;gap:20px;margin:24px 0 18px;font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:#dce0eb}.roleline b{color:var(--pink)}
.hero p{max-width:530px;color:#c0c5d2;font-family:"Cormorant Garamond",serif;font-size:18px;line-height:1.55}
.buttons{display:flex;gap:12px;margin-top:25px;flex-wrap:wrap}.btn{padding:12px 19px;border-radius:28px;font-size:11px;border:1px solid rgba(220,220,255,.42);background:rgba(255,255,255,.035);transition:.25s}.btn.primary{background:linear-gradient(100deg,#ff7bd9,#9a7cff);border:0;box-shadow:0 8px 35px rgba(179,104,255,.3)}.btn:hover{transform:translateY(-3px)}
.socials{display:flex;gap:9px;margin-top:24px}.socials a{width:31px;height:31px;border:1px solid var(--line);border-radius:50%;display:grid;place-items:center;color:#dfe3ef;font-size:11px}

.visual{height:500px;position:relative;display:grid;place-items:center}
.visual:before{content:"";position:absolute;width:390px;height:390px;border-radius:50%;background:radial-gradient(circle,rgba(180,110,255,.28),rgba(70,100,255,.05) 58%,transparent 70%);filter:blur(8px)}
.portrait{width:350px;height:430px;border-radius:48% 48% 45% 45%;border:1px solid rgba(206,164,255,.75);background:
radial-gradient(circle at 50% 35%,rgba(240,205,255,.18),transparent 22%),
linear-gradient(150deg,rgba(40,57,105,.85),rgba(14,20,42,.8) 60%,rgba(121,52,128,.4));
box-shadow:0 0 70px rgba(165,106,255,.28),inset 0 0 50px rgba(255,255,255,.06);
display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.portrait:before{content:"AK";font-family:"Cormorant Garamond",serif;font-weight:700;font-size:130px;letter-spacing:-10px;color:rgba(255,255,255,.92)}
.portrait:after{content:"";position:absolute;inset:14px;border-radius:45% 45% 42% 42%;border:1px solid rgba(255,255,255,.12)}
.orb{position:absolute;width:65px;height:65px;border-radius:20px;background:linear-gradient(135deg,#ff8ada,#7e78ff);filter:blur(.2px);box-shadow:0 0 35px #a76dff88;animation:float 5s ease-in-out infinite}.o1{right:4%;top:20%}.o2{left:7%;bottom:19%;width:38px;height:38px;border-radius:50%;animation-delay:-2s}
@keyframes float{50%{transform:translateY(-15px) rotate(8deg)}}
.quote{position:absolute;right:-2%;top:53%;font-family:Parisienne,cursive;font-size:28px;line-height:1.1;color:#ffd6f3;transform:rotate(-5deg);text-align:center;text-shadow:0 4px 25px #ff78c855}
.mountain{position:absolute;bottom:-15px;left:0;width:100%;height:160px;background:
linear-gradient(145deg,transparent 49%,#111c36 50%,#111c36 62%,transparent 63%) 0 20px/45% 100% no-repeat,
linear-gradient(215deg,transparent 49%,#0e1830 50%,#0e1830 64%,transparent 65%) 48% 0/55% 100% no-repeat;
opacity:.7}

section{padding:90px 0;position:relative}.section-title{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:35px}.eyebrow{color:#d59aff;font-size:10px;text-transform:uppercase;letter-spacing:.2em;font-weight:700;margin-bottom:8px}.section-title h2{font-family:"Cormorant Garamond",serif;font-size:52px;line-height:.9;letter-spacing:-2px}.section-title h2 span{color:#c18dff}.section-title p{max-width:460px;color:var(--muted);font-size:12px}
.about-card{display:grid;grid-template-columns:1fr 1.05fr;border:1px solid var(--line);background:linear-gradient(120deg,rgba(9,18,40,.9),rgba(31,20,48,.56));border-radius:22px;overflow:hidden;box-shadow:var(--shadow)}
.about-copy{padding:35px}.about-copy h3{font-family:"Cormorant Garamond",serif;font-size:30px;margin-bottom:15px}.about-copy p{font-family:"Cormorant Garamond",serif;color:#d1d3dd;font-size:17px;line-height:1.5}.about-copy p+p{margin-top:14px}
.interests{padding:28px;display:grid;grid-template-columns:repeat(4,1fr);gap:12px;align-content:center;border-left:1px solid var(--line);background:rgba(255,255,255,.018)}.interest{text-align:center;padding:15px 5px}.interest .ico{width:39px;height:39px;margin:auto auto 9px;border:1px solid rgba(191,165,255,.35);border-radius:50%;display:grid;place-items:center;color:#d7b2ff}.interest span{font-size:9px;color:#d1d4de}

.skills{display:flex;flex-wrap:wrap;gap:9px}.skill{border:1px solid rgba(147,169,255,.22);background:rgba(10,20,42,.6);padding:10px 15px;border-radius:25px;font-size:11px;color:#e4e6ee;transition:.2s}.skill:hover{border-color:#bd8dff;transform:translateY(-2px);background:rgba(137,94,255,.1)}
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:18px}.panel{border:1px solid var(--line);border-radius:20px;background:linear-gradient(145deg,rgba(12,22,46,.78),rgba(11,14,30,.7));padding:30px;box-shadow:0 15px 50px rgba(0,0,0,.22)}
.timeline{border-left:1px solid rgba(170,170,255,.28);padding-left:24px}.entry{position:relative;padding-bottom:27px}.entry:last-child{padding-bottom:0}.entry:before{content:"";position:absolute;left:-30px;top:5px;width:9px;height:9px;border-radius:50%;background:#a77cff;box-shadow:0 0 14px #a77cff}.date{font-size:9px;color:#d49dff;letter-spacing:.12em;text-transform:uppercase}.entry h3{font-family:"Cormorant Garamond",serif;font-size:21px;margin:5px 0}.entry p{font-size:11px;color:#aeb5c6}
.research-card{min-height:285px;display:flex;flex-direction:column;justify-content:space-between;background:
radial-gradient(circle at 85% 15%,rgba(191,98,255,.15),transparent 35%),linear-gradient(145deg,rgba(16,25,53,.9),rgba(10,14,29,.85))}
.research-title{display:flex;justify-content:space-between;gap:20px}.research-title h3{font-family:"Cormorant Garamond",serif;font-size:35px}.badge{border:1px solid #8050c5;border-radius:20px;padding:7px 10px;height:max-content;font-size:9px;color:#dbb7ff}.research-card p{font-family:"Cormorant Garamond",serif;font-size:17px;color:#c9ceda;max-width:720px}.chips{display:flex;gap:8px;flex-wrap:wrap}.chip{font-size:9px;border:1px solid var(--line);border-radius:20px;padding:7px 10px;color:#c9ced9}
.achievements{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.achievement{padding:25px;border:1px solid var(--line);border-radius:18px;background:rgba(255,255,255,.025)}.achievement .num{font-family:"Cormorant Garamond",serif;font-size:38px;color:#c28dff}.achievement h3{font-size:13px;margin:8px 0}.achievement p{font-size:10px;color:#aeb5c5}
.contact{padding:100px 0 65px}.contact-box{min-height:270px;border:1px solid rgba(215,168,255,.25);border-radius:25px;padding:45px;display:flex;align-items:center;justify-content:space-between;gap:30px;overflow:hidden;position:relative;background:
radial-gradient(circle at 65% 50%,rgba(174,88,255,.22),transparent 35%),
linear-gradient(100deg,rgba(24,20,51,.88),rgba(10,25,51,.9))}
.contact-box:before{content:"";position:absolute;inset:auto -10% -55% -10%;height:100%;background:linear-gradient(10deg,rgba(91,114,171,.25),transparent 55%);transform:skewY(-5deg)}
.contact-box>*{position:relative;z-index:1}.contact-box h2{font-family:"Cormorant Garamond",serif;font-size:58px;line-height:.9;max-width:680px}.contact-box .script{font-size:27px;color:#ffc6ed;display:block;margin-bottom:10px}
footer{border-top:1px solid var(--line);padding:22px 0;color:#858c9e;font-size:9px;display:flex;justify-content:space-between}

.reveal{opacity:0;transform:translateY(22px);transition:.7s ease}.reveal.show{opacity:1;transform:none}
@media(max-width:900px){.links{display:none}.menu{display:block}.nav-actions{margin-left:auto;margin-right:15px}.hero-grid,.about-card,.two-col{grid-template-columns:1fr}.visual{height:440px}.interests{border-left:0;border-top:1px solid var(--line)}.achievements{grid-template-columns:1fr 1fr}.contact-box{flex-direction:column;align-items:flex-start}}
@media(max-width:600px){h1{font-size:68px}.hero{padding-top:120px}.visual{height:380px}.portrait{width:270px;height:340px}.portrait:before{font-size:95px}.quote{right:0;font-size:22px}.section-title{display:block}.section-title p{margin-top:18px}.interests{grid-template-columns:repeat(2,1fr)}.achievements{grid-template-columns:1fr}.contact-box{padding:30px}.contact-box h2{font-size:43px}footer{display:block;text-align:center}footer span{display:block;margin:5px}}
</style>
</head>
<body>

<nav>
 <div class="container nav">
  <a href="#home" class="brand"><span class="wave">〰</span><small>Anjali Kumari</small></a>
  <div class="links" id="links">
   <a class="active" href="#home">Home</a><a href="#about">About</a><a href="#skills">Skills</a>
   <a href="#education">Education</a><a href="#research">Research</a><a href="#achievements">Achievements</a><a href="#contact">Contact</a>
  </div>
  <div class="nav-actions"><a class="outline" href="#contact">Download Resume ↓</a><button class="icon-btn" id="theme" aria-label="Toggle glow">☾</button><button class="menu" id="menu">☰</button></div>
 </div>
</nav>

<main>
<section class="hero" id="home">
 <div class="container hero-grid">
  <div class="reveal">
   <div class="pill">Hi, I'm</div>
   <h1>Anjali <span>Kumari</span></h1>
   <div class="roleline"><b>Researcher</b><i>•</i><span>Problem Solver</span><i>•</i><span>Lifelong Learner</span></div>
   <p>I am a passionate technology-focused researcher with a strong interest in deep learning, computer vision and human-computer interaction. I love exploring intelligent systems and turning technical ideas into meaningful real-world solutions.</p>
   <div class="buttons"><a class="btn primary" href="#research">View My Work →</a><a class="btn" href="#contact">✉ Get in Touch →</a></div>
   <div class="socials"><a href="https://www.linkedin.com/in/anjali-kumari-sahu/" target="_blank">in</a><a href="#contact">GH</a><a href="#contact">✉</a></div>
  </div>
  <div class="visual reveal">
   <div class="portrait"></div><div class="orb o1"></div><div class="orb o2"></div>
   <div class="quote">Better<br>Technology,<br>Brighter Future ♡</div>
  </div>
 </div>
 <div class="mountain"></div>
</section>

<section id="about">
 <div class="container">
  <div class="section-title reveal"><div><div class="eyebrow">01 — About Me</div><h2>Curiosity drives my <span>research.</span></h2></div><p>A researcher and learner interested in building intelligent, practical and user-centred technology.</p></div>
  <div class="about-card reveal">
   <div class="about-copy"><h3 class="serif">Hello, I'm Anjali.</h3><p>I am Anjali Kumari, a dedicated technology learner and researcher with an academic connection to the National Institute of Science and Technology (NIST), Berhampur.</p><p>My interests span deep learning, computer vision, human-computer interaction, backend technologies, testing and research-driven problem solving.</p><div class="buttons"><a class="btn" href="#skills">More About Me →</a></div></div>
   <div class="interests">
    <div class="interest"><div class="ico">◉</div><span>Deep Learning</span></div><div class="interest"><div class="ico">◌</div><span>Computer Vision</span></div><div class="interest"><div class="ico">◇</div><span>HCI</span></div><div class="interest"><div class="ico">✦</div><span>Research & Innovation</span></div>
    <div style="grid-column:1/-1;text-align:center;padding-top:15px" class="script">“Curiosity drives my research,<br>and impact drives my purpose.”</div>
   </div>
  </div>
 </div>
</section>

<section id="skills">
 <div class="container">
  <div class="section-title reveal"><div><div class="eyebrow">02 — Technical Skills</div><h2>Tools & <span>technologies.</span></h2></div><p>A growing toolkit across programming, AI, computer vision, backend development and software quality.</p></div>
  <div class="skills reveal">
   <span class="skill">Python</span><span class="skill">Java</span><span class="skill">PyTorch</span><span class="skill">TensorFlow</span><span class="skill">OpenCV</span><span class="skill">Machine Learning</span><span class="skill">Deep Learning</span><span class="skill">Computer Vision</span><span class="skill">Data Analysis</span><span class="skill">NLP</span><span class="skill">MATLAB</span><span class="skill">Git</span><span class="skill">VS Code</span><span class="skill">SQL</span><span class="skill">REST APIs</span><span class="skill">Postman</span><span class="skill">Selenium</span><span class="skill">Playwright</span>
  </div>
 </div>
</section>

<section id="education">
 <div class="container">
  <div class="section-title reveal"><div><div class="eyebrow">03 — Education & Journey</div><h2>The journey so <span>far.</span></h2></div><p>Academic growth paired with continuous technical exploration.</p></div>
  <div class="two-col reveal">
   <div class="panel"><div class="timeline">
    <div class="entry"><div class="date">2022 — 2024</div><h3>National Institute of Science and Technology</h3><p>Berhampur — academic chapter highlighted in the public professional profile.</p></div>
    <div class="entry"><div class="date">Continuous</div><h3>Technical Learning</h3><p>Ongoing exploration of software engineering, APIs, testing, databases and intelligent systems.</p></div>
    <div class="entry"><div class="date">Present</div><h3>Research & Innovation</h3><p>Building research depth around AI, computer vision and practical human-centred technology.</p></div>
   </div></div>
   <div class="panel research-card" id="research"><div><div class="eyebrow">Research Spotlight</div><div class="research-title"><h3>GestureNet</h3><span class="badge">IC2NS 2026</span></div><p style="margin-top:15px"><strong>GestureNet: A Robust Deep Learning Framework for Real-Time Sign Language Detection</strong></p><p style="margin-top:10px;font-size:14px">A research work focused on robust sign-language detection, dataset quality, generalization and transfer learning using MobileNetV2 for resource-constrained scenarios.</p></div><div class="chips"><span class="chip">Deep Learning</span><span class="chip">Computer Vision</span><span class="chip">MobileNetV2</span><span class="chip">Transfer Learning</span><span class="chip">Springer LNNS</span></div></div>
  </div>
 </div>
</section>

<section id="achievements">
 <div class="container">
  <div class="section-title reveal"><div><div class="eyebrow">04 — Achievements</div><h2>Milestones & <span>impact.</span></h2></div><p>Selected public professional highlights presented as a clean visual snapshot.</p></div>
  <div class="achievements reveal">
   <div class="achievement"><div class="num">01</div><h3>Research Paper</h3><p>GestureNet research highlighted through public professional activity and conference presentation.</p></div>
   <div class="achievement"><div class="num">02</div><h3>Conference Presentation</h3><p>IC2NS 2026 — International Conference on Intelligent Computing, Cognitive Networks, and Smart Systems.</p></div>
   <div class="achievement"><div class="num">03</div><h3>Springer LNNS</h3><p>Publicly described publication selection for Springer Lecture Notes in Networks and Systems.</p></div>
  </div>
 </div>
</section>

<section class="contact" id="contact">
 <div class="container reveal"><div class="contact-box">
  <div><span class="script">Let's build something amazing together ♡</span><h2>Open to new opportunities, collaborations & meaningful conversations.</h2></div>
  <a class="btn primary" href="https://www.linkedin.com/in/anjali-kumari-sahu/" target="_blank">Connect on LinkedIn →</a>
 </div></div>
</section>
</main>

<footer class="container"><span>© <span id="year"></span> Anjali Kumari</span><span>Designed with ♡ for research, technology & curiosity.</span></footer>

<script>
const menu=document.getElementById('menu'),links=document.getElementById('links');
menu.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

const obs=new IntersectionObserver(entries=>{
 entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

const sections=[...document.querySelectorAll('section[id]')];
const navItems=[...document.querySelectorAll('.links a')];
window.addEventListener('scroll',()=>{
 let current='home';
 sections.forEach(s=>{if(scrollY>=s.offsetTop-180) current=s.id});
 navItems.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current));
});
document.getElementById('theme').addEventListener('click',()=>{
 document.body.classList.toggle('soft');
 document.body.style.setProperty('--bg',document.body.classList.contains('soft')?'#080c18':'#050913');
});
</script>
</body>
</html>
