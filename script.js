// ================================================================
//
//  ⚙️⚙️⚙️  CONFIGURATION - EDIT EVERYTHING HERE  ⚙️⚙️⚙️
//
// ================================================================

const CFG = {

    // ---- YOUR STATUS ----
    // Options: 'available' | 'focused' | 'offline'
    status: 'offline',

    // ---- PROFILE INFO ----
    profile: {
        username: "0xislamx0",
        name: "Islam Omar",
        role: "Penetration Tester  & Bug Hunter",
        // location: "Cairo, Egypt",
        experience: "1 year",
        email: "0xislam.social@gmail.com",
        bio: "Passionate about breaking things before bad actors do. Specialized in web application security, API testing, and logical vulnerabilities.",
        motto: "\"With great power comes great responsibility... and bigger bounties.\"",
        platforms: [
            "YesWeHack",
            // "Bugcrowd",
        ]
    },

    // ============================================================
    //
    //  📊 STATISTICS - CUSTOMIZE YOUR NUMBERS HERE!
    //
    //  Each stat needs:
    //    value   → the number (required)
    //    prefix  → "$" for money or leave "" (optional)
    //    label   → the description text (required)
    //
    //  ➡️ Add as many as you want by copying a line!
    //
    // ============================================================
    stats: [
        { value: 0, label: "Total Bugs Found" },
        { value: 0, prefix: "$", label: "Total Earnings" },
        { value: 0,  label: "Programs Hacked" }
    ],

    // ---- BOUNTIES ----
    bounties: [
        { program: "NotYet", severity: "critical", vulnType: "NotYet", reward: "NotYet", date: "NotYet" },
        { program: "NotYet", severity: "high", vulnType: "NotYet", reward: "NotYet", date: "NotYet" },
        { program: "NotYet", severity: "high", vulnType: "NotYet", reward: "NotYet", date: "NotYet" },
        { program: "NotYet", severity: "medium", vulnType: "NotYet", reward: "NotYet", date: "NotYet" },
        { program: "NotYet", severity: "medium", vulnType: "NotYet", reward: "NotYet", date: "NotYet" },
        { program: "NotYet", severity: "low", vulnType: "NotYet", reward: "NotYet", date: "NotYet" }
    ],

    // ---- VULNERABILITY TYPES ----
    vulnTypes: [
        "SSRF","Authentication","Business Logic Errors",
        "Race Conditions","Information Disclosure","Brokn Access Control"
    ],

    // ---- TOOLS ----
    tools: [
        "Burp Suite", "OWASP ZAP", "Nmap",,
        "Gobuster", "FFUF", "Nuclei",
        "Amass","Git","Proxychains",
    ],
    // ---- PROGRAMMING LANGUAGES ----
    programing: [
        "Python", "JavaScript", "Bash", "Go", "PHP",
    ],

    // ---- PLATFORMS / SOCIAL (WITH REAL URLS) ----
    platforms: [
        { name: "HackerOne", handle: "@0xislamx0", url: "https://hackerone.com/0xislamx0?type=user", icon: "H1" },
        //{ name: "Bugcrowd", handle: "@0xislamx0", url: "https://bugcrowd.com/h/0xislamx0", icon: "BC" },
        { name: "GitHub", handle: "0xislamx0", url: "https://github.com/0xislamx0", icon: "GH" },
        { name: "LinkedIn", handle: "in/0xislamx0", url: "https://www.linkedin.com/in/0xislamx0/", icon: "LI" },
        { name: "Twitter/X", handle: "@0xislamx0", url: "https://x.com/0xislamx0", icon: "X" },
        { name: "Telegram", handle: "xislamx0", url: "https://t.me/xislamx0", icon: "TG" },
        { name: "Email", handle: "0xislam.social@gmail.com", url: "mailto:0xislam.social@gmail.com", icon: "EM" }
    ],

    // ---- SECRET MODAL MESSAGES ----
    secretMsgs: [
        { type:'prompt', text:'whoami' },
        { type:'out', text:'curious_hacker', hl:true },
        { type:'space' },
        { type:'prompt', text:'$ cat /dev/motivation' },
        { type:'out', text:'You found the secret door!' },
        { type:'out', text:'' },
        { type:'out', text:'Every expert was once a beginner.' },
        { type:'out', text:'Every critical bug started as a hunch.' },
        { type:'out', text:'Your next big bounty is one request away.' },
        { type:'out', text:'' },
        { type:'out', text:'Keep hunting. Keep breaking. Keep learning.', accent:true },
        { type:'space' },
        { type:'prompt', text:'echo $FUTURE', hl:true },
        { type:'out', text:'UNLIMITED_POTENTIAL', white:true },
        { type:'end' }
    ]
};

const ST_MSG = {
    available: { text:"Available for new programs", desc:"Currently accepting new bug bounty invitations and collaborations." },
    focused:   { text:"I'm currently focused on specific programs", desc:"but I'm also open to receiving new ones." },
    offline:   { text:"Taking a break.", desc:" Check back later!" }
};

// ================================================================
//  INITIALIZATION
// ================================================================

(function initStatus() {
    const s = CFG.status;
    document.getElementById('stCard').dataset.s = s;
    const d = document.getElementById('stDot');
    d.className = 'stDot ' + s;
    const l = document.getElementById('stLbl');
    l.className = 'stLbl ' + s;
    l.textContent = ST_MSG[s].text;
    document.getElementById('stDesc').textContent = ST_MSG[s].desc;
    document.getElementById('stTime').textContent = new Date().toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
})();

// ================================================================
//  TERMINAL ANIMATION
// ================================================================

const termOut = document.getElementById('termOut');
let ti = 0;

function mkTL(d, i) {
    const e = document.createElement('div');
    e.className = 'tL';
    e.style.animationDelay = (i * 140) + 'ms';
    
    switch(d.t) {
        case 'p':
            e.innerHTML = '<span class="tP">visitor@security:~$</span> <span class="tC">' + d.tx + '</span>';
            break;
        case 's':
            e.innerHTML = '<span class="tSp">' + '\u2500'.repeat(45) + '</span>';
            break;
        case 'l':
            e.innerHTML = '<span class="tLb">' + (d.k || '').padEnd(14) + '</span><span class="tV' + (d.h ? 'h' : '') + '">' + d.v + '</span>';
            break;
        case 'b':
            e.innerHTML = '<span class="tBi">"' + d.tx + '"</span>';
            break;
        case 'q':
            e.innerHTML = '<span class="tQt">' + d.tx + '</span>';
            break;
        case 't':
            e.innerHTML = '<span class="tLb">PLATFORMS:</span> ' + d.it.map(function(p) {
                return '<span class="inline-block mr-3 px-2 py-0.5 rounded text-xs" style="background:var(--accent-subtle);color:var(--accent)">' + p + '</span>';
            }).join('');
            break;
        case 'e':
            e.innerHTML = '<span class="tP">visitor@security:~$</span><span class="cursor"></span>';
            break;
    }
    return e;
}

const p = CFG.profile;
const termLines = [
    { t:'p', tx:'whoami' },
    { t:'s' },
    { t:'l', k:'IDENTITY:', v:p.name },
    { t:'l', k:'HANDLE:', v:p.username, h:true },
    { t:'l', k:'ROLE:', v:p.role, h:true },
    { t:'l', k:'LOCATION:', v:p.location },
    { t:'l', k:'EXPERIENCE:', v:p.experience },
    { t:'s' },
    { t:'l', k:'EMAIL', v:p.email },
    { t:'s' },
    { t:'b', tx:p.bio },
    { t:'q', tx:p.motto },
    { t:'s' },
    { t:'t', it:p.platforms },
    { t:'e' }
];

function playT() {
    if(ti >= termLines.length) return;
    termOut.appendChild(mkTL(termLines[ti], ti));
    ti++;
    if(ti < termLines.length) {
        setTimeout(playT, ti === 1 ? 900 : 180);
    }
}
setTimeout(playT, 500);

// ================================================================
//  RENDER STATS WITH COUNTER ANIMATION
// ================================================================

const statsGrid = document.getElementById('statsGrid');

CFG.stats.forEach(function(st) {
    const card = document.createElement('div');
    card.className = 'statCard reveal';
    card.innerHTML = '<div class="statNum" data-target="' + st.value + '" data-prefix="' + (st.prefix || '') + '">' + (st.prefix || '') + '0</div><div class="statLabel">' + st.label + '</div>';
    statsGrid.appendChild(card);
});

setTimeout(function() {
    document.querySelectorAll('.statCard').forEach(function(card) {
        const obs = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if(entry.isIntersecting) {
                    const numEl = card.querySelector('.statNum');
                    const target = parseInt(numEl.dataset.target);
                    const prefix = numEl.dataset.prefix || '';
                    const startT = performance.now();
                    const duration = 2200;
                    
                    function updateCount(now) {
                        const elapsed = now - startT;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const current = Math.floor(eased * target);
                        numEl.textContent = prefix + (target >= 1000 ? current.toLocaleString() : current);
                        if(progress < 1) requestAnimationFrame(updateCount);
                        else numEl.textContent = prefix + (target >= 1000 ? target.toLocaleString() : target);
                    }
                    
                    requestAnimationFrame(updateCount);
                    obs.unobserve(card);
                }
            });
        }, { threshold: 0.5 });
        obs.observe(card);
    });
}, 100);

// ================================================================
//  RENDER BOUNTIES
// ================================================================

const bountiesGrid = document.getElementById('bountiesGrid');

CFG.bounties.forEach(function(b) {
    const sevClass = b.severity === 'critical' ? 'crit' : b.severity === 'high' ? 'high' : b.severity === 'medium' ? 'med' : 'low';
    
    const c = document.createElement('div');
    c.className = 'bountyCard reveal';
    c.innerHTML = 
        '<div class="flex justify-between items-start mb-4">' +
            '<h3 class="font-semibold text-lg">' + b.program + '</h3>' +
            '<span class="sevBadge ' + sevClass + '">' + b.severity + '</span>' +
        '</div>' +
        '<p class="text-sm mb-4" style="color:var(--text-secondary)">' + b.vulnType + '</p>' +
        '<div class="flex justify-between items-center">' +
            '<span class="bountyReward">' + b.reward + '</span>' +
            '<span class="bountyDate">' + b.date + '</span>' +
        '</div>';
    bountiesGrid.appendChild(c);
});

// ================================================================
//  RENDER SKILLS
// ================================================================

const vulnGrid = document.getElementById('vulnGrid');
CFG.vulnTypes.forEach(function(v) {
    const tag = document.createElement('span');
    tag.className = 'skillTag reveal';
    tag.textContent = v;
    vulnGrid.appendChild(tag);
});

const toolsGrid = document.getElementById('toolsGrid');
CFG.tools.forEach(function(t) {
    const tag = document.createElement('span');
    tag.className = 'skillTag reveal';
    tag.textContent = t;
    toolsGrid.appendChild(tag);
});
const langsGrid = document.getElementById('langsGrid');
CFG.programing.forEach(function(l) {
    const tag = document.createElement('span');
    tag.className = 'skillTag reveal';
    tag.textContent = l;
    langsGrid.appendChild(tag);
});

// ================================================================
//  RENDER PLATFORMS
// ================================================================

const platsGrid = document.getElementById('platsGrid');

CFG.platforms.forEach(function(pl) {
    const a = document.createElement('a');
    a.href = pl.url;
    a.target = '_blank';
    a.className = 'platLink reveal';
    a.innerHTML = 
        '<div class="platIco">' + pl.icon + '</div>' +
        '<div>' +
            '<div class="platName">' + pl.name + '</div>' +
            '<div class="platHandle">' + pl.handle + '</div>' +
        '</div>' +
        '<svg class="ml-auto w-5 h-5 shrink-0" style="color:var(--text-muted)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>';
    platsGrid.appendChild(a);
});

// ================================================================
//  MOBILE MENU
// ================================================================

document.getElementById('menuBtn').addEventListener('click', function() {
    document.getElementById('mobMenu').classList.toggle('hidden');
});

// ================================================================
//  SCROLL REVEAL
// ================================================================

document.querySelectorAll('.reveal').forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    const obs = new IntersectionObserver(function(entries, o) {
        entries.forEach(function(e) {
            if(e.isIntersecting) {
                setTimeout(function() {
                    e.target.style.opacity = '1';
                    e.target.style.transform = 'translateY(0)';
                }, Math.random() * 200);
                o.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });
    
    obs.observe(el);
});

// ================================================================
//  NETWORK BACKGROUND
// ================================================================

const cvs = document.getElementById('netCanvas');
const ctx = cvs.getContext('2d');
let nodes = [];
let mX = 0;
let mY = 0;

function resizeNet() {
    cvs.width = innerWidth;
    cvs.height = innerHeight;
    nodes = [];
    var n = Math.max(25, Math.min(Math.floor(cvs.width * cvs.height / 22000), 160));
    for(var i = 0; i < n; i++) {
        nodes.push({
            x: Math.random() * cvs.width,
            y: Math.random() * cvs.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            r: Math.random() * 2 + 1
        });
    }
}

function drawNet() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    var maxD = 150;
    
    for(var i = 0; i < nodes.length; i++) {
        for(var j = i + 1; j < nodes.length; j++) {
            var dx = nodes[i].x - nodes[j].x;
            var dy = nodes[i].y - nodes[j].y;
            var d = Math.sqrt(dx * dx + dy * dy);
            if(d < maxD) {
                ctx.globalAlpha = (1 - d / maxD) * 0.4;
                ctx.lineWidth = 0.6;
                ctx.strokeStyle = 'rgba(239,68,68,';
                ctx.beginPath();
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
                ctx.stroke();
            }
        }
    }
    
    ctx.globalAlpha = 1;
    
    for(var k = 0; k < nodes.length; k++) {
        var nd = nodes[k];
        var dx2 = mX - nd.x;
        var dy2 = mY - nd.y;
        var dm = Math.sqrt(dx2 * dx2 + dy2 * dy2);
        
        if(dm < 200 && dm > 0) {
            var f = (200 - dm) / 200 * 0.02;
            nd.vx -= dx2 / dm * f;
            nd.vy -= dy2 / dm * f;
        }
        
        nd.x += nd.vx;
        nd.y += nd.vy;
        
        if(nd.x < 0 || nd.x > cvs.width) nd.vx *= -1;
        if(nd.y < 0 || nd.y > cvs.height) nd.vy *= -1;
        
        nd.x = Math.max(0, Math.min(cvs.width, nd.x));
        nd.y = Math.max(0, Math.min(cvs.height, nd.y));
        
        nd.vx *= 0.99;
        nd.vy *= 0.99;
        
        ctx.fillStyle = 'rgba(239,68,68,0.55)';
        ctx.beginPath();
        ctx.arc(nd.x, nd.y, Math.max(0.5, nd.r), 0, Math.PI * 2);
        ctx.fill();
    }
    
    requestAnimationFrame(drawNet);
}

var rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

window.addEventListener('resize', resizeNet);
document.addEventListener('mousemove', function(e) { mX = e.clientX; mY = e.clientY; });

resizeNet();
if(!rm) drawNet();

// ================================================================
//  SECRET MODAL
// ================================================================

var modal = document.getElementById('secModal');
var mOut = document.getElementById('modOut');

function openSec() {
    mOut.innerHTML = '';
    modal.classList.add('act');
    document.body.classList.add('no-scroll');
    
    CFG.secretMsgs.forEach(function(m, i) {
        setTimeout(function() {
            var el = document.createElement('div');
            el.className = 'mL';
            
            switch(m.type) {
                case 'prompt':
                    el.innerHTML = '<span class="tP">root@secret:~$</span> <span' + (m.hl ? ' style="color:var(--accent)"' : ' class="tC"') + '>' + m.text + '</span>';
                    break;
                case 'out':
                    if(m.white) {
                        el.innerHTML = '<span class="tWhite">' + m.text + '</span>';
                    } else if(m.accent) {
                        el.innerHTML = '<span style="color:var(--accent)">' + m.text + '</span>';
                    } else if(m.hl) {
                        el.innerHTML = '<span style="color:var(--accent)">' + m.text + '</span>';
                    } else {
                        el.innerHTML = '<span>' + m.text + '</span>';
                    }
                    break;
                case 'space':
                    el.innerHTML = '&nbsp;';
                    break;
                case 'end':
                    el.innerHTML = '<span class="tP">root@secret:~$</span><span class="cursor"></span>';
                    break;
            }
            
            mOut.appendChild(el);
            setTimeout(function() { el.classList.add('show'); }, 10);
        }, i * 190);
    });
}

function closeSec() {
    modal.classList.remove('act');
    document.body.classList.remove('no-scroll');
}

// CV MODAL
var cvModal = document.getElementById('cvModal');
var cvOut = document.getElementById('cvOut');

const cvLines = [
    { type:'prompt', text:'cat CV' },
    { type:'space' },
    { type:'out', text:'Islam Abdelhamid Omar', white:true },
    { type:'out', text:'Penetration Tester & Bug Hunter', hl:true },
    { type:'out', text:'0xislam.social@gmail.com | +201121855868' },
    { type:'space' },
    { type:'out', text:'SUMMARY', accent:true },
    { type:'out', text:'Aspiring Security Researcher and Bug Bounty Hunter with a growing focus on web application' },
    { type:'out', text:'security. Interested in identifying complex vulnerabilities beyond automated scanning,' },
    { type:'out', text:'particularly Business Logic flaws, Server-Side issues, and Broken Access Control.' },
    { type:'out', text:'Developing a deeper understanding of backend application behavior and how vulnerabilities' },
    { type:'out', text:'emerge from flawed logic and design. Currently studying advanced web exploitation concepts,' },
    { type:'out', text:'while strengthening practical skills through hands-on labs and experimentation.' },
    { type:'out', text:'Driven to build a strong offensive security mindset and continuously improve through real-' },
    { type:'out', text:'world practice.' },
    { type:'space' },
    { type:'out', text:'EDUCATION', accent:true },
    { type:'out', text:"Bachelor's Degree in Business Information Systems (BIS)" },
    { type:'out', text:'Misr Higher Institute for Commerce & Computers - Graduated: July 2026' },
    { type:'space' },
    { type:'out', text:'PROJECTS', accent:true },
    { type:'out', text:'Nabd - Blood Bank & Donation Management System', hl:true },
    { type:'out', text:'A comprehensive, multi-branch system designed to automate the blood donation lifecycle and predict demand using AI.' },
    { type:'out', text:'• System Architecture: Architected core logic, PostgreSQL schemas, and data flow using Django.' },
    { type:'out', text:'• Security & Access: Designed and implemented strict RBAC to isolate privileges.' },
    { type:'out', text:'• Vulnerability Analysis: Built from the ground up to gain deep backend architecture understanding.' },
    { type:'space' },
    { type:'out', text:'SKILLS', accent:true },
    { type:'out', text:'• Security: OWASP Top 10, Business Logic, RBAC, API Security' },
    { type:'out', text:'• Tools: Burp Suite, FFUF, Nuclei, Wireshark, Nmap, Git' },
    { type:'out', text:'• Programming: Python, JS, PHP, Bash, SQL' },
    { type:'out', text:'• Operating Systems: Linux, Windows' },
    { type:'space' },
    { type:'out', text:'LANGUAGES', accent:true },
    { type:'out', text:'Arabic (Native) | English (Intermediate)' },
    { type:'space' },
    { type:'end' }
];

let cvTi = 0;
let cvTo = null;

function openCV() {
    cvOut.innerHTML = '';
    cvModal.classList.add('act');
    document.body.classList.add('no-scroll');
    
    cvTi = 0;
    if(cvTo) clearTimeout(cvTo);
    
    function playCV() {
        if(cvTi >= cvLines.length || !cvModal.classList.contains('act')) return;
        var m = cvLines[cvTi];
        var el = document.createElement('div');
        el.className = 'mL';
        
        switch(m.type) {
            case 'prompt':
                el.innerHTML = '<span class="tP">visitor@security:~$</span> <span class="tC">' + m.text + '</span>';
                break;
            case 'out':
                if(m.white) el.innerHTML = '<span class="tWhite" style="font-weight:bold; font-size:16px;">' + m.text + '</span>';
                else if(m.accent) el.innerHTML = '<span style="color:var(--accent); font-weight:bold;">' + m.text + '</span>';
                else if(m.hl) el.innerHTML = '<span style="color:var(--accent)">' + m.text + '</span>';
                else el.innerHTML = '<span style="color:var(--text-secondary)">' + m.text + '</span>';
                break;
            case 'space':
                el.innerHTML = '&nbsp;';
                break;
            case 'end':
                el.innerHTML = '<span class="tP">visitor@security:~$</span><span class="cursor"></span>';
                break;
        }
        
        cvOut.appendChild(el);
        setTimeout(function() { el.classList.add('show'); }, 10);
        
        cvTi++;
        if(cvTi < cvLines.length) {
            cvTo = setTimeout(playCV, cvTi === 1 ? 300 : 200);
        }
    }
    
    setTimeout(playCV, 250);
}

function closeCV() {
    cvModal.classList.remove('act');
    document.body.classList.remove('no-scroll');
}

document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
        if(modal.classList.contains('act')) closeSec();
        if(cvModal.classList.contains('act')) closeCV();
    }
});
