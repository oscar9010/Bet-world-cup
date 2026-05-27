const firebaseConfig={apiKey:"AIzaSyA0ste6piBQQI1j8WpGyvUB2Ozpp3gHLcw",authDomain:"rancho-paisa-c2ee0.firebaseapp.com",databaseURL:"https://rancho-paisa-c2ee0-default-rtdb.firebaseio.com",projectId:"rancho-paisa-c2ee0",storageBucket:"rancho-paisa-c2ee0.firebasestorage.app",messagingSenderId:"742011746838",appId:"1:742011746838:web:9a597341874e2ad94b5337"};
firebase.initializeApp(firebaseConfig);
const db=firebase.database();

const MATCHES_INIT=[
{id:1,phase:"Grupo A",home:{n:"Mexico",f:"MX"},away:{n:"Marruecos",f:"MA"},date:"2026-06-11",time:"21:00",venue:"SoFi Stadium, LA"},
{id:2,phase:"Grupo A",home:{n:"Portugal",f:"PT"},away:{n:"Italia",f:"IT"},date:"2026-06-12",time:"18:00",venue:"Rose Bowl, LA"},
{id:3,phase:"Grupo A",home:{n:"Mexico",f:"MX"},away:{n:"Italia",f:"IT"},date:"2026-06-16",time:"18:00",venue:"SoFi Stadium, LA"},
{id:4,phase:"Grupo A",home:{n:"Portugal",f:"PT"},away:{n:"Marruecos",f:"MA"},date:"2026-06-16",time:"21:00",venue:"Rose Bowl, LA"},
{id:5,phase:"Grupo A",home:{n:"Marruecos",f:"MA"},away:{n:"Italia",f:"IT"},date:"2026-06-20",time:"18:00",venue:"Rose Bowl, LA"},
{id:6,phase:"Grupo A",home:{n:"Mexico",f:"MX"},away:{n:"Portugal",f:"PT"},date:"2026-06-20",time:"21:00",venue:"SoFi Stadium, LA"},
{id:7,phase:"Grupo B",home:{n:"Argentina",f:"AR"},away:{n:"Ecuador",f:"EC"},date:"2026-06-13",time:"15:00",venue:"MetLife, NY"},
{id:8,phase:"Grupo B",home:{n:"Espana",f:"ES"},away:{n:"Corea del Sur",f:"KR"},date:"2026-06-13",time:"18:00",venue:"AT&T Stadium, Dallas"},
{id:9,phase:"Grupo B",home:{n:"Argentina",f:"AR"},away:{n:"Corea del Sur",f:"KR"},date:"2026-06-17",time:"15:00",venue:"MetLife, NY"},
{id:10,phase:"Grupo B",home:{n:"Espana",f:"ES"},away:{n:"Ecuador",f:"EC"},date:"2026-06-17",time:"18:00",venue:"AT&T Stadium, Dallas"},
{id:11,phase:"Grupo B",home:{n:"Ecuador",f:"EC"},away:{n:"Corea del Sur",f:"KR"},date:"2026-06-21",time:"15:00",venue:"AT&T Stadium, Dallas"},
{id:12,phase:"Grupo B",home:{n:"Argentina",f:"AR"},away:{n:"Espana",f:"ES"},date:"2026-06-21",time:"18:00",venue:"MetLife, NY"},
{id:13,phase:"Grupo C",home:{n:"Colombia",f:"CO"},away:{n:"Senegal",f:"SN"},date:"2026-06-12",time:"12:00",venue:"Hard Rock, Miami"},
{id:14,phase:"Grupo C",home:{n:"Alemania",f:"DE"},away:{n:"Japon",f:"JP"},date:"2026-06-12",time:"15:00",venue:"Levis Stadium, SF"},
{id:15,phase:"Grupo C",home:{n:"Colombia",f:"CO"},away:{n:"Japon",f:"JP"},date:"2026-06-16",time:"12:00",venue:"Hard Rock, Miami"},
{id:16,phase:"Grupo C",home:{n:"Alemania",f:"DE"},away:{n:"Senegal",f:"SN"},date:"2026-06-16",time:"15:00",venue:"Levis Stadium, SF"},
{id:17,phase:"Grupo C",home:{n:"Senegal",f:"SN"},away:{n:"Japon",f:"JP"},date:"2026-06-20",time:"12:00",venue:"Levis Stadium, SF"},
{id:18,phase:"Grupo C",home:{n:"Colombia",f:"CO"},away:{n:"Alemania",f:"DE"},date:"2026-06-20",time:"15:00",venue:"Hard Rock, Miami"},
{id:19,phase:"Grupo D",home:{n:"Francia",f:"FR"},away:{n:"Australia",f:"AU"},date:"2026-06-13",time:"12:00",venue:"Gillette, Boston"},
{id:20,phase:"Grupo D",home:{n:"Brasil",f:"BR"},away:{n:"Croacia",f:"HR"},date:"2026-06-13",time:"21:00",venue:"SoFi Stadium, LA"},
{id:21,phase:"Grupo D",home:{n:"Francia",f:"FR"},away:{n:"Croacia",f:"HR"},date:"2026-06-17",time:"12:00",venue:"Gillette, Boston"},
{id:22,phase:"Grupo D",home:{n:"Brasil",f:"BR"},away:{n:"Australia",f:"AU"},date:"2026-06-17",time:"21:00",venue:"SoFi Stadium, LA"},
{id:23,phase:"Grupo D",home:{n:"Australia",f:"AU"},away:{n:"Croacia",f:"HR"},date:"2026-06-21",time:"12:00",venue:"SoFi Stadium, LA"},
{id:24,phase:"Grupo D",home:{n:"Francia",f:"FR"},away:{n:"Brasil",f:"BR"},date:"2026-06-21",time:"21:00",venue:"Gillette, Boston"},
{id:25,phase:"Grupo E",home:{n:"Paises Bajos",f:"NL"},away:{n:"Peru",f:"PE"},date:"2026-06-14",time:"12:00",venue:"Lincoln Financial, Philly"},
{id:26,phase:"Grupo E",home:{n:"Belgica",f:"BE"},away:{n:"Camerun",f:"CM"},date:"2026-06-14",time:"15:00",venue:"Estadio Azteca, CDMX"},
{id:27,phase:"Grupo E",home:{n:"Paises Bajos",f:"NL"},away:{n:"Camerun",f:"CM"},date:"2026-06-18",time:"12:00",venue:"Lincoln Financial, Philly"},
{id:28,phase:"Grupo E",home:{n:"Belgica",f:"BE"},away:{n:"Peru",f:"PE"},date:"2026-06-18",time:"15:00",venue:"Estadio Azteca, CDMX"},
{id:29,phase:"Grupo E",home:{n:"Peru",f:"PE"},away:{n:"Camerun",f:"CM"},date:"2026-06-22",time:"15:00",venue:"Estadio Azteca, CDMX"},
{id:30,phase:"Grupo E",home:{n:"Paises Bajos",f:"NL"},away:{n:"Belgica",f:"BE"},date:"2026-06-22",time:"18:00",venue:"Lincoln Financial, Philly"},
{id:31,phase:"Grupo F",home:{n:"USA",f:"US"},away:{n:"Panama",f:"PA"},date:"2026-06-14",time:"18:00",venue:"SoFi Stadium, LA"},
{id:32,phase:"Grupo F",home:{n:"Uruguay",f:"UY"},away:{n:"Argelia",f:"DZ"},date:"2026-06-14",time:"21:00",venue:"Hard Rock, Miami"},
{id:33,phase:"Grupo F",home:{n:"USA",f:"US"},away:{n:"Argelia",f:"DZ"},date:"2026-06-18",time:"18:00",venue:"SoFi Stadium, LA"},
{id:34,phase:"Grupo F",home:{n:"Uruguay",f:"UY"},away:{n:"Panama",f:"PA"},date:"2026-06-18",time:"21:00",venue:"Hard Rock, Miami"},
{id:35,phase:"Grupo F",home:{n:"Panama",f:"PA"},away:{n:"Argelia",f:"DZ"},date:"2026-06-22",time:"18:00",venue:"Hard Rock, Miami"},
{id:36,phase:"Grupo F",home:{n:"USA",f:"US"},away:{n:"Uruguay",f:"UY"},date:"2026-06-22",time:"21:00",venue:"SoFi Stadium, LA"},
{id:37,phase:"Grupo G",home:{n:"Inglaterra",f:"GB"},away:{n:"Serbia",f:"RS"},date:"2026-06-15",time:"12:00",venue:"MetLife, NY"},
{id:38,phase:"Grupo G",home:{n:"Dinamarca",f:"DK"},away:{n:"Tunez",f:"TN"},date:"2026-06-15",time:"15:00",venue:"Gillette, Boston"},
{id:39,phase:"Grupo G",home:{n:"Inglaterra",f:"GB"},away:{n:"Tunez",f:"TN"},date:"2026-06-19",time:"12:00",venue:"MetLife, NY"},
{id:40,phase:"Grupo G",home:{n:"Dinamarca",f:"DK"},away:{n:"Serbia",f:"RS"},date:"2026-06-19",time:"15:00",venue:"Gillette, Boston"},
{id:41,phase:"Grupo G",home:{n:"Serbia",f:"RS"},away:{n:"Tunez",f:"TN"},date:"2026-06-23",time:"15:00",venue:"Gillette, Boston"},
{id:42,phase:"Grupo G",home:{n:"Inglaterra",f:"GB"},away:{n:"Dinamarca",f:"DK"},date:"2026-06-23",time:"18:00",venue:"MetLife, NY"},
{id:43,phase:"Grupo H",home:{n:"Suiza",f:"CH"},away:{n:"Bolivia",f:"BO"},date:"2026-06-15",time:"18:00",venue:"Arrowhead, KC"},
{id:44,phase:"Grupo H",home:{n:"Polonia",f:"PL"},away:{n:"Arabia Saudita",f:"SA"},date:"2026-06-15",time:"21:00",venue:"Lincoln Financial, Philly"},
{id:45,phase:"Grupo H",home:{n:"Suiza",f:"CH"},away:{n:"Arabia Saudita",f:"SA"},date:"2026-06-19",time:"18:00",venue:"Arrowhead, KC"},
{id:46,phase:"Grupo H",home:{n:"Polonia",f:"PL"},away:{n:"Bolivia",f:"BO"},date:"2026-06-19",time:"21:00",venue:"Lincoln Financial, Philly"},
{id:47,phase:"Grupo H",home:{n:"Bolivia",f:"BO"},away:{n:"Arabia Saudita",f:"SA"},date:"2026-06-23",time:"18:00",venue:"Lincoln Financial, Philly"},
{id:48,phase:"Grupo H",home:{n:"Suiza",f:"CH"},away:{n:"Polonia",f:"PL"},date:"2026-06-23",time:"21:00",venue:"Arrowhead, KC"},
{id:49,phase:"Grupo I",home:{n:"Canada",f:"CA"},away:{n:"Ghana",f:"GH"},date:"2026-06-16",time:"12:00",venue:"BC Place, Vancouver"},
{id:50,phase:"Grupo I",home:{n:"Chile",f:"CL"},away:{n:"Nigeria",f:"NG"},date:"2026-06-16",time:"15:00",venue:"Estadio Akron, GDL"},
{id:51,phase:"Grupo I",home:{n:"Canada",f:"CA"},away:{n:"Nigeria",f:"NG"},date:"2026-06-20",time:"12:00",venue:"BC Place, Vancouver"},
{id:52,phase:"Grupo I",home:{n:"Chile",f:"CL"},away:{n:"Ghana",f:"GH"},date:"2026-06-20",time:"15:00",venue:"Estadio Akron, GDL"},
{id:53,phase:"Grupo I",home:{n:"Ghana",f:"GH"},away:{n:"Nigeria",f:"NG"},date:"2026-06-24",time:"15:00",venue:"Estadio Akron, GDL"},
{id:54,phase:"Grupo I",home:{n:"Canada",f:"CA"},away:{n:"Chile",f:"CL"},date:"2026-06-24",time:"18:00",venue:"BC Place, Vancouver"},
{id:55,phase:"Grupo J",home:{n:"Ucrania",f:"UA"},away:{n:"Iran",f:"IR"},date:"2026-06-17",time:"12:00",venue:"Arrowhead, KC"},
{id:56,phase:"Grupo J",home:{n:"Turquia",f:"TR"},away:{n:"China",f:"CN"},date:"2026-06-17",time:"15:00",venue:"Camping World, Orlando"},
{id:57,phase:"Grupo J",home:{n:"Ucrania",f:"UA"},away:{n:"China",f:"CN"},date:"2026-06-21",time:"12:00",venue:"Arrowhead, KC"},
{id:58,phase:"Grupo J",home:{n:"Turquia",f:"TR"},away:{n:"Iran",f:"IR"},date:"2026-06-21",time:"15:00",venue:"Camping World, Orlando"},
{id:59,phase:"Grupo J",home:{n:"Iran",f:"IR"},away:{n:"China",f:"CN"},date:"2026-06-25",time:"15:00",venue:"Camping World, Orlando"},
{id:60,phase:"Grupo J",home:{n:"Ucrania",f:"UA"},away:{n:"Turquia",f:"TR"},date:"2026-06-25",time:"18:00",venue:"Arrowhead, KC"},
{id:61,phase:"Grupo K",home:{n:"Nueva Zelanda",f:"NZ"},away:{n:"Venezuela",f:"VE"},date:"2026-06-18",time:"12:00",venue:"Estadio Universitario, MTY"},
{id:62,phase:"Grupo K",home:{n:"Costa Rica",f:"CR"},away:{n:"Costa de Marfil",f:"CI"},date:"2026-06-18",time:"15:00",venue:"Camping World, Orlando"},
{id:63,phase:"Grupo K",home:{n:"Nueva Zelanda",f:"NZ"},away:{n:"Costa de Marfil",f:"CI"},date:"2026-06-22",time:"12:00",venue:"Estadio Universitario, MTY"},
{id:64,phase:"Grupo K",home:{n:"Costa Rica",f:"CR"},away:{n:"Venezuela",f:"VE"},date:"2026-06-22",time:"15:00",venue:"Camping World, Orlando"},
{id:65,phase:"Grupo K",home:{n:"Venezuela",f:"VE"},away:{n:"Costa de Marfil",f:"CI"},date:"2026-06-26",time:"15:00",venue:"Camping World, Orlando"},
{id:66,phase:"Grupo K",home:{n:"Nueva Zelanda",f:"NZ"},away:{n:"Costa Rica",f:"CR"},date:"2026-06-26",time:"18:00",venue:"Estadio Universitario, MTY"},
{id:67,phase:"Grupo L",home:{n:"Rumania",f:"RO"},away:{n:"Argelia",f:"DZ"},date:"2026-06-19",time:"12:00",venue:"Estadio Akron, GDL"},
{id:68,phase:"Grupo L",home:{n:"Japon",f:"JP"},away:{n:"Qatar",f:"QA"},date:"2026-06-19",time:"15:00",venue:"BC Place, Vancouver"},
{id:69,phase:"Grupo L",home:{n:"Rumania",f:"RO"},away:{n:"Qatar",f:"QA"},date:"2026-06-23",time:"12:00",venue:"Estadio Akron, GDL"},
{id:70,phase:"Grupo L",home:{n:"Japon",f:"JP"},away:{n:"Argelia",f:"DZ"},date:"2026-06-23",time:"15:00",venue:"BC Place, Vancouver"},
{id:71,phase:"Grupo L",home:{n:"Argelia",f:"DZ"},away:{n:"Qatar",f:"QA"},date:"2026-06-27",time:"15:00",venue:"BC Place, Vancouver"},
{id:72,phase:"Grupo L",home:{n:"Rumania",f:"RO"},away:{n:"Japon",f:"JP"},date:"2026-06-27",time:"18:00",venue:"Estadio Akron, GDL"},
{id:73,phase:"Octavos de Final",home:{n:"1A",f:"--"},away:{n:"2B",f:"--"},date:"2026-07-01",time:"18:00",venue:"MetLife, NY"},
{id:74,phase:"Octavos de Final",home:{n:"1C",f:"--"},away:{n:"2D",f:"--"},date:"2026-07-01",time:"21:00",venue:"Hard Rock, Miami"},
{id:75,phase:"Octavos de Final",home:{n:"1E",f:"--"},away:{n:"2F",f:"--"},date:"2026-07-02",time:"18:00",venue:"SoFi Stadium, LA"},
{id:76,phase:"Octavos de Final",home:{n:"1G",f:"--"},away:{n:"2H",f:"--"},date:"2026-07-02",time:"21:00",venue:"AT&T Dallas"},
{id:77,phase:"Octavos de Final",home:{n:"1B",f:"--"},away:{n:"2A",f:"--"},date:"2026-07-03",time:"18:00",venue:"Gillette, Boston"},
{id:78,phase:"Octavos de Final",home:{n:"1D",f:"--"},away:{n:"2C",f:"--"},date:"2026-07-03",time:"21:00",venue:"Levis Stadium, SF"},
{id:79,phase:"Octavos de Final",home:{n:"1F",f:"--"},away:{n:"2E",f:"--"},date:"2026-07-04",time:"18:00",venue:"Lincoln Financial, Philly"},
{id:80,phase:"Octavos de Final",home:{n:"1H",f:"--"},away:{n:"2G",f:"--"},date:"2026-07-04",time:"21:00",venue:"Arrowhead, KC"},
{id:81,phase:"Octavos de Final",home:{n:"1I",f:"--"},away:{n:"2J",f:"--"},date:"2026-07-05",time:"18:00",venue:"BC Place, Vancouver"},
{id:82,phase:"Octavos de Final",home:{n:"1K",f:"--"},away:{n:"2L",f:"--"},date:"2026-07-05",time:"21:00",venue:"Estadio Azteca, CDMX"},
{id:83,phase:"Octavos de Final",home:{n:"Mejor 3ro A/B/C",f:"--"},away:{n:"Mejor 3ro D/E/F",f:"--"},date:"2026-07-06",time:"18:00",venue:"Estadio Universitario, MTY"},
{id:84,phase:"Octavos de Final",home:{n:"Mejor 3ro G/H/I",f:"--"},away:{n:"Mejor 3ro J/K/L",f:"--"},date:"2026-07-06",time:"21:00",venue:"Camping World, Orlando"},
{id:85,phase:"Cuartos de Final",home:{n:"G73",f:"--"},away:{n:"G74",f:"--"},date:"2026-07-10",time:"18:00",venue:"MetLife, NY"},
{id:86,phase:"Cuartos de Final",home:{n:"G75",f:"--"},away:{n:"G76",f:"--"},date:"2026-07-10",time:"21:00",venue:"SoFi Stadium, LA"},
{id:87,phase:"Cuartos de Final",home:{n:"G77",f:"--"},away:{n:"G78",f:"--"},date:"2026-07-11",time:"18:00",venue:"AT&T Dallas"},
{id:88,phase:"Cuartos de Final",home:{n:"G79",f:"--"},away:{n:"G80",f:"--"},date:"2026-07-11",time:"21:00",venue:"Gillette, Boston"},
{id:89,phase:"Cuartos de Final",home:{n:"G81",f:"--"},away:{n:"G82",f:"--"},date:"2026-07-12",time:"18:00",venue:"Hard Rock, Miami"},
{id:90,phase:"Cuartos de Final",home:{n:"G83",f:"--"},away:{n:"G84",f:"--"},date:"2026-07-12",time:"21:00",venue:"Levis Stadium, SF"},
{id:91,phase:"Semifinales",home:{n:"G85",f:"--"},away:{n:"G86",f:"--"},date:"2026-07-15",time:"21:00",venue:"MetLife, NY"},
{id:92,phase:"Semifinales",home:{n:"G87",f:"--"},away:{n:"G88",f:"--"},date:"2026-07-16",time:"21:00",venue:"AT&T Dallas"},
{id:93,phase:"Semifinales",home:{n:"G89",f:"--"},away:{n:"G90",f:"--"},date:"2026-07-17",time:"21:00",venue:"Hard Rock, Miami"},
{id:94,phase:"Tercer Puesto",home:{n:"Perdedor SF1",f:"--"},away:{n:"Perdedor SF2",f:"--"},date:"2026-07-18",time:"18:00",venue:"Levis Stadium, SF"},
{id:95,phase:"Tercer Puesto",home:{n:"Perdedor SF3",f:"--"},away:{n:"Perdedor SF4",f:"--"},date:"2026-07-19",time:"15:00",venue:"Rose Bowl, LA"},
{id:96,phase:"Final",home:{n:"Finalista 1",f:"--"},away:{n:"Finalista 2",f:"--"},date:"2026-07-19",time:"21:00",venue:"MetLife, New York"}
];

let currentUser=null,expandedMatch=null,filterPhase='all',searchQ='',dbUsers={},dbMatches={},dbBets={};

const FLAGS={"MX":"🇲🇽","MA":"🇲🇦","PT":"🇵🇹","IT":"🇮🇹","AR":"🇦🇷","EC":"🇪🇨","ES":"🇪🇸","KR":"🇰🇷","CO":"🇨🇴","SN":"🇸🇳","DE":"🇩🇪","JP":"🇯🇵","FR":"🇫🇷","AU":"🇦🇺","BR":"🇧🇷","HR":"🇭🇷","NL":"🇳🇱","PE":"🇵🇪","BE":"🇧🇪","CM":"🇨🇲","US":"🇺🇸","PA":"🇵🇦","UY":"🇺🇾","DZ":"🇩🇿","GB":"🏴󠁧󠁢󠁥󠁮󠁧󠁿","RS":"🇷🇸","DK":"🇩🇰","TN":"🇹🇳","CH":"🇨🇭","BO":"🇧🇴","PL":"🇵🇱","SA":"🇸🇦","CA":"🇨🇦","GH":"🇬🇭","CL":"🇨🇱","NG":"🇳🇬","UA":"🇺🇦","IR":"🇮🇷","TR":"🇹🇷","CN":"🇨🇳","NZ":"🇳🇿","VE":"🇻🇪","CR":"🇨🇷","CI":"🇨🇮","RO":"🇷🇴","QA":"🇶🇦","--":"🏳"};

async function initDB(){
  const us=await db.ref('users').once('value');
  if(!us.exists()){
    await db.ref('users').set({
      admin:{name:'Admin Rancho',pass:'ranchopaisa2026',role:'admin',color:'#d4a017'},
      carlos:{name:'Carlos',pass:'carlos123',role:'user',color:'#e74c3c'},
      luisa:{name:'Luisa',pass:'luisa123',role:'user',color:'#3498db'},
      pipe:{name:'Pipe',pass:'pipe123',role:'user',color:'#2ecc71'},
      tatiana:{name:'Tatiana',pass:'tatiana123',role:'user',color:'#9b59b6'},
      elprofe:{name:'El Profe',pass:'profe123',role:'user',color:'#f39c12'}
    });
  }
  const ms=await db.ref('matches').once('value');
  if(!ms.exists()){
    const obj={};
    MATCHES_INIT.forEach(m=>{obj[m.id]={id:m.id,phase:m.phase,homeN:m.home.n,homeF:m.home.f,awayN:m.away.n,awayF:m.away.f,date:m.date,time:m.time,venue:m.venue,status:'open',apuesta:5000,resultHome:-1,resultAway:-1};});
    await db.ref('matches').set(obj);
  }
}

function startListeners(){
  db.ref('users').on('value',s=>{dbUsers=s.val()||{};refreshLoginSelect();if(currentUser)refreshTopbar();refresh();});
  db.ref('matches').on('value',s=>{dbMatches=s.val()||{};refresh();});
  db.ref('bets').on('value',s=>{dbBets=s.val()||{};refresh();});
}

function refresh(){
  const sp=document.getElementById('sec-partidos');
  const st=document.getElementById('sec-tabla');
  const sa=document.getElementById('sec-admin');
  if(sp&&sp.classList.contains('active'))renderMatches();
  if(st&&st.classList.contains('active'))renderLeaderboard();
  if(sa&&sa.classList.contains('active'))renderAdmin();
}

function refreshLoginSelect(){
  const sel=document.getElementById('login-user');
  const cur=sel.value;
  sel.innerHTML='<option value="">-- Selecciona tu usuario --</option>';
  Object.entries(dbUsers).forEach(([id,u])=>{
    const o=document.createElement('option');
    o.value=id;o.textContent=u.name+(u.role==='admin'?' (Admin)':'');
    if(id===cur)o.selected=true;
    sel.appendChild(o);
  });
}

function doLogin(){
  const uid=document.getElementById('login-user').value;
  const pass=document.getElementById('login-pass').value;
  const u=dbUsers[uid];
  if(!u||u.pass!==pass){document.getElementById('login-error').style.display='block';return;}
  document.getElementById('login-error').style.display='none';
  currentUser={id:uid,...u};
  document.getElementById('login-screen').style.display='none';
  document.getElementById('main-screen').style.display='block';
  if(u.role==='admin')document.getElementById('tab-admin').style.display='';
  refreshTopbar();renderMatches();
}

function doLogout(){
  currentUser=null;expandedMatch=null;
  document.getElementById('login-screen').style.display='flex';
  document.getElementById('main-screen').style.display='none';
  document.getElementById('tab-admin').style.display='none';
  document.getElementById('login-pass').value='';
  showTab('partidos');
}

function refreshTopbar(){
  if(!currentUser)return;
  const u=dbUsers[currentUser.id]||currentUser;
  const ini=u.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
  document.getElementById('topbar-user').innerHTML=`<div class="topbar-avatar" style="background:${u.color}22;color:${u.color}">${ini}</div><span style="font-size:12px;font-weight:700">${u.name}</span>${u.role==='admin'?'<span style="color:#d4a017">Admin</span>':''}<button class="btn-logout" onclick="doLogout()">Salir</button>`;
}

function showTab(tab){
  document.querySelectorAll('.nav-tab').forEach((t,i)=>t.classList.toggle('active',['partidos','tabla','admin'][i]===tab));
  ['partidos','tabla','admin'].forEach(s=>document.getElementById('sec-'+s).classList.toggle('active',s===tab));
  if(tab==='tabla')renderLeaderboard();
  if(tab==='admin')renderAdmin();
}

function fmt(n){return '$'+Number(n).toLocaleString('es-CO');}
function flag(code){return FLAGS[code]||code;}
function paidBets(mid){return dbBets[mid]?Object.values(dbBets[mid]).filter(b=>b.paid):[];}
function allBets(mid){return dbBets[mid]?Object.values(dbBets[mid]):[];}
function winners(mid){const m=dbMatches[mid];if(!m||m.resultHome<0)return[];return paidBets(mid).filter(b=>b.home===m.resultHome&&b.away===m.resultAway);}
function pozo(mid){const m=dbMatches[mid];if(!m)return 0;return paidBets(mid).length*(m.apuesta||5000);}
function prize(mid){const w=winners(mid);return w.length?pozo(mid)/w.length:0;}
function canBet(m){if(m.status!=='open')return false;return new Date()<new Date(m.date+'T'+m.time)-15*60000;}

function ptsUser(uid){
  let p=0;
  Object.values(dbMatches).forEach(m=>{
    if(m.resultHome<0)return;
    const b=dbBets[m.id]&&dbBets[m.id][uid];
    if(!b||!b.paid)return;
    if(b.home===m.resultHome&&b.away===m.resultAway)p+=3;
    else if((b.home-b.away)===(m.resultHome-m.resultAway))p+=1;
    else if((b.home>b.away&&m.resultHome>m.resultAway)||(b.home<b.away&&m.resultHome<m.resultAway))p+=1;
  });
  return p;
}
function exactUser(uid){return Object.values(dbMatches).filter(m=>m.resultHome>=0&&winners(m.id).find(b=>b.user===uid)).length;}

function renderMatches(){
  const list=Object.values(dbMatches).sort((a,b)=>a.id-b.id);
  let fil=list;
  if(filterPhase!=='all')fil=fil.filter(m=>m.phase===filterPhase);
  if(searchQ)fil=fil.filter(m=>m.homeN.toLowerCase().includes(searchQ)||m.awayN.toLowerCase().includes(searchQ));
  const phases=[...new Set(list.map(m=>m.phase))];
  const opts=phases.map(p=>`<option value="${p}"${filterPhase===p?' selected':''}>${p}</option>`).join('');
  let html=`<div class="search-bar"><input type="text" class="search-input" placeholder="Buscar equipo..." value="${searchQ}" oninput="searchQ=this.value.toLowerCase();renderMatches()"/><select class="filter-select" onchange="filterPhase=this.value;renderMatches()"><option value="all">Todas las fases</option>${opts}</select></div>`;
  const groups={};fil.forEach(m=>{if(!groups[m.phase])groups[m.phase]=[];groups[m.phase].push(m);});
  if(!fil.length)html+='<div style="text-align:center;color:rgba(255,255,255,.3);padding:30px">No hay partidos</div>';
  Object.entries(groups).forEach(([ph,ms])=>{
    html+=`<div class="phase-header"><span style="font-size:8px;color:#d4a017">&#9679;</span>${ph}<span class="phase-badge">${ms.length}</span></div>`;
    ms.forEach(m=>{html+=buildCard(m);});
  });
  document.getElementById('sec-partidos').innerHTML=html;
}

function buildCard(m){
  const smap={open:'Abierto',closed:'Cerrado',finished:'Finalizado',live:'EN VIVO'};
  const cmap={open:'s-open',closed:'s-closed',finished:'s-finished',live:'s-live'};
  const isExp=expandedMatch===m.id;
  const ub=dbBets[m.id]&&dbBets[m.id][currentUser.id];
  const pb=paidBets(m.id);
  const ab=allBets(m.id);
  const wlist=winners(m.id);
  const pz=pozo(m.id);const pw=prize(m.id);
  const cb=canBet(m);const hasR=m.resultHome>=0;
  const hf=flag(m.homeF);const af=flag(m.awayF);
  const vsBlock=hasR?`<span class="mc-result">${m.resultHome}-${m.resultAway}</span>`:`<span class="mc-vs">VS</span>`;
  let ex='';
  if(isExp){
    ex+=`<div class="pozo-row"><div><div class="pozo-lbl">POZO</div><div class="pozo-detail">${pb.length} abonados x ${fmt(m.apuesta||5000)}</div></div><div class="pozo-val">${fmt(pz)}</div></div>`;
    if(m.status==='finished'){
      if(wlist.length){ex+=wlist.map(b=>{const u=dbUsers[b.user];const un=u?u.name:b.user;return`<div class="winner-row"><span style="font-size:22px">&#127942;</span><div style="flex:1"><div class="winner-name">${un}</div><div class="winner-sub">Acerto ${m.resultHome}-${m.resultAway}</div></div><div><div class="winner-prize">${fmt(pw)}</div><div class="prize-sub">su premio</div></div></div>`;}).join('');}
      else{ex+=`<div class="no-winner-row">Nadie acerto el marcador exacto</div>`;}
    }
    const chips=ab.map(b=>{const u=dbUsers[b.user];const un=u?u.name:b.user;const isW=hasR&&b.home===m.resultHome&&b.away===m.resultAway;return`<div class="b-chip${isW?' bwin':''}">${isW?'&#127942;':''}<span class="bcs">${b.home}-${b.away}</span><span class="bcu">${un}</span><span class="${b.paid?'bcp':'bcx'}">${b.paid?'v':'x'}</span></div>`;}).join('');
    ex+=`<div style="margin-bottom:8px"><div style="font-size:10px;color:rgba(255,255,255,.4);margin-bottom:5px">Pronosticos (${ab.length}) - <span style="color:#6ddc96">${pb.length} abonados</span></div><div class="bets-grid">${chips||'<span style="font-size:11px;color:rgba(255,255,255,.3)">Sin pronosticos</span>'}</div></div>`;
    if(ub){const isW=hasR&&ub.home===m.resultHome&&ub.away===m.resultAway;ex+=`<div class="my-bet-row"><span style="color:rgba(255,255,255,.4)">Tu apuesta:</span><span style="font-weight:800;color:#d4a017">${ub.home}-${ub.away}</span><span class="${ub.paid?'bcp':'bcx'}">${ub.paid?'Abonado':'Sin abonar'}</span>${!ub.paid?'<span style="font-size:10px;color:#f0918a">- abona para participar</span>':''}${isW?`<span style="font-size:10px;color:#d4a017;font-weight:800">Ganaste ${fmt(pw)}!</span>`:''}</div>`;if(cb){ex+=`<div class="bet-form"><span style="font-size:14px">${hf}</span><input type="number" min="0" max="20" class="si" id="h${m.id}" value="${ub.home}" onclick="event.stopPropagation()"/><span class="sd">-</span><input type="number" min="0" max="20" class="si" id="a${m.id}" value="${ub.away}" onclick="event.stopPropagation()"/><span style="font-size:14px">${af}</span><button class="btn-apostar" onclick="event.stopPropagation();placeBet(${m.id})">Actualizar</button></div>`;}}
    else if(cb){ex+=`<div class="bet-form"><span style="font-size:14px">${hf}</span><input type="number" min="0" max="20" class="si" id="h${m.id}" value="0" onclick="event.stopPropagation()"/><span class="sd">-</span><input type="number" min="0" max="20" class="si" id="a${m.id}" value="0" onclick="event.stopPropagation()"/><span style="font-size:14px">${af}</span><button class="btn-apostar" onclick="event.stopPropagation();placeBet(${m.id})">Apostar</button></div>`;}
    else if(m.status!=='finished'){ex+=`<div class="closed-msg">Apuestas cerradas (15 min antes del partido)</div>`;}
    if(currentUser.role==='admin'&&m.status!=='finished'){
      ex+=`<div class="admin-quick"><span style="font-size:10px;color:rgba(255,255,255,.35);width:100%">Admin:</span><input type="number" min="0" max="20" class="ri" id="qrh${m.id}" value="0" onclick="event.stopPropagation()"/><span style="font-family:'Bebas Neue';font-size:16px;color:rgba(255,255,255,.25)">-</span><input type="number" min="0" max="20" class="ri" id="qra${m.id}" value="0" onclick="event.stopPropagation()"/><button class="bs bsuc" onclick="event.stopPropagation();setResult(${m.id})">Finalizar</button>${m.status==='closed'?`<button class="bs bsuc" onclick="event.stopPropagation();openMatch(${m.id})">Abrir</button>`:`<button class="bs bdgr" onclick="event.stopPropagation();closeMatch(${m.id})">Cerrar</button>`}<button class="bs bwarn" onclick="event.stopPropagation();toggleLive(${m.id})">Vivo</button></div>`;
    }
  }
  return`<div class="match-card${isExp?' expanded':''}" onclick="toggleMatch(${m.id})" id="mc${m.id}"><div class="mc-top"><span class="mc-num">#${m.id}</span><div class="mc-teams"><span class="mc-flag">${hf}</span><span class="mc-name">${m.homeN}</span>${vsBlock}<span class="mc-name">${m.awayN}</span><span class="mc-flag">${af}</span></div><div class="mc-right"><div class="mc-date">${m.date}<br/>${m.time}</div><span class="mc-status ${cmap[m.status]||'s-open'}">${smap[m.status]||'Abierto'}</span>${ub&&ub.paid?'<span title="Abonado" style="font-size:12px">&#9989;</span>':''}${ub&&!ub.paid?'<span title="Sin abonar" style="font-size:12px">&#9888;</span>':''}</div></div><div class="mc-expand">${ex}</div></div>`;
}

function toggleMatch(id){expandedMatch=(expandedMatch===id)?null:id;renderMatches();if(expandedMatch)setTimeout(()=>{const el=document.getElementById('mc'+id);if(el)el.scrollIntoView({behavior:'smooth',block:'nearest'});},60);}

async function placeBet(mid){
  const h=parseInt(document.getElementById('h'+mid).value)||0;
  const a=parseInt(document.getElementById('a'+mid).value)||0;
  const existing=dbBets[mid]&&dbBets[mid][currentUser.id];
  const paid=existing?existing.paid:false;
  await db.ref(`bets/${mid}/${currentUser.id}`).set({user:currentUser.id,home:h,away:a,paid});
  showToast(existing?'Marcador actualizado'+(paid?' (sigues abonado)':''):'Apuesta registrada! Recuerda abonar para participar');
}

function renderLeaderboard(){
  const players=Object.entries(dbUsers).filter(([,u])=>u.role!=='admin');
  const rows=players.map(([id,u])=>({id,u,p:ptsUser(id),ex:exactUser(id),active:Object.values(dbMatches).some(m=>dbBets[m.id]&&dbBets[m.id][id]&&dbBets[m.id][id].paid)})).sort((a,b)=>b.p-a.p||b.ex-a.ex);
  const totalPot=Object.values(dbMatches).reduce((s,m)=>s+pozo(m.id),0);
  const totalBets=Object.values(dbBets).reduce((s,mb)=>s+Object.keys(mb).length,0);
  const fin=Object.values(dbMatches).filter(m=>m.status==='finished').length;
  document.getElementById('sec-tabla').innerHTML=`<div class="stats-grid"><div class="stat-card"><div class="stat-val">${fin}</div><div class="stat-lbl">Jugados</div></div><div class="stat-card"><div class="stat-val">${totalBets}</div><div class="stat-lbl">Apuestas</div></div><div class="stat-card"><div class="stat-val">${fmt(totalPot)}</div><div class="stat-lbl">Pozo total</div></div></div><div style="font-family:'Bebas Neue';font-size:20px;letter-spacing:2px;color:#d4a017;margin-bottom:4px">Tabla del Mundial</div><div class="hint">3 pts marcador exacto - 1 pt resultado correcto - Solo apuestas abonadas</div>${rows.map((row,i)=>{const ini=row.u.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();const abg=row.active?`<span style="font-size:9px;padding:2px 6px;border-radius:8px;background:rgba(109,220,150,.12);color:#6ddc96;border:1px solid rgba(109,220,150,.25);font-weight:700">Activo</span>`:`<span style="font-size:9px;padding:2px 6px;border-radius:8px;background:rgba(240,145,138,.12);color:#f0918a;border:1px solid rgba(240,145,138,.25);font-weight:700">Sin abonar</span>`;return`<div class="lb-card r${i+1}"><span class="lb-rank">${i+1}</span><div class="lb-avatar" style="background:${row.u.color}22;color:${row.u.color}">${ini}</div><div class="lb-name">${row.u.name}${row.ex>0?`<br><span class="xbadge">&#127942; ${row.ex} exacto${row.ex>1?'s':''}</span>`:''}</div>${abg}<div><div class="lb-pts">${row.p}</div><div class="lb-ptslbl">puntos</div></div></div>`;}).join('')}`;
}

function renderAdmin(){
  if(currentUser.role!=='admin')return;
  const totalPot=Object.values(dbMatches).reduce((s,m)=>s+pozo(m.id),0);
  const open=Object.values(dbMatches).filter(m=>m.status==='open').length;
  const fin=Object.values(dbMatches).filter(m=>m.status==='finished').length;
  let html=`<div class="admin-banner"><span>Admin</span><span>Panel Super Admin - Control total del torneo</span></div><div class="stats-grid"><div class="stat-card"><div class="stat-val">${open}</div><div class="stat-lbl">Abiertos</div></div><div class="stat-card"><div class="stat-val">${fin}</div><div class="stat-lbl">Finalizados</div></div><div class="stat-card"><div class="stat-val">${fmt(totalPot)}</div><div class="stat-lbl">Pozo total</div></div></div>`;
  html+=`<div class="adm-title">Jugadores</div><div class="add-user-form"><div style="font-size:13px;font-weight:700;color:#d4a017;margin-bottom:10px">Agregar jugador</div><div class="add-user-grid"><input type="text" class="form-input" id="nu-name" placeholder="Nombre"/><input type="text" class="form-input" id="nu-id" placeholder="ID (sin espacios)"/><input type="password" class="form-input" id="nu-pass" placeholder="Contrasena"/><select class="form-input" id="nu-role"><option value="user">Jugador</option><option value="admin">Admin</option></select></div><button class="btn-add" onclick="addUser()">Agregar</button></div>`;
  Object.entries(dbUsers).forEach(([uid,u])=>{
    const ini=u.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
    const bc=Object.values(dbMatches).filter(m=>dbBets[m.id]&&dbBets[m.id][uid]).length;
    html+=`<div class="adm-user-card"><div class="lb-avatar" style="background:${u.color}22;color:${u.color};width:34px;height:34px;flex-shrink:0">${ini}</div><div style="flex:1"><div style="font-size:13px;font-weight:700">${u.name}${u.role==='admin'?' (Admin)':''}</div><div style="font-size:10px;color:rgba(255,255,255,.4)">${uid} - pass: ${u.pass} - ${bc} partidos apostados</div></div><button class="bs bwarn" onclick="editUserPass('${uid}')">Clave</button>${uid!=='admin'?`<button class="bs bdgr" onclick="removeUser('${uid}')">Eliminar</button>`:''}</div>`;
  });
  const phases=[...new Set(Object.values(dbMatches).sort((a,b)=>a.id-b.id).map(m=>m.phase))];
  html+=`<div class="adm-title">Partidos</div>`;
  phases.forEach(ph=>{
    html+=`<div class="phase-header" style="font-size:13px">${ph}</div>`;
    Object.values(dbMatches).filter(m=>m.phase===ph).sort((a,b)=>a.id-b.id).forEach(m=>{
      const pb=paidBets(m.id);const ab=allBets(m.id);
      const betRows=ab.map(b=>{const u=dbUsers[b.user];return`<div class="adm-bet-row"><span>${u?u.name:b.user}</span><span style="font-weight:800;color:#d4a017">${b.home}-${b.away}</span><button class="tpaid ${b.paid?'paid':'unpaid'}" onclick="togglePaid(${m.id},'${b.user}')">${b.paid?'Abonado':'Sin abonar'}</button></div>`;}).join('')||'<div style="font-size:10px;color:rgba(255,255,255,.3)">Sin apuestas</div>';
      const ctrl=m.status!=='finished'
        ?`<div class="adm-ctrl"><span class="adm-lbl">Apuesta:</span><input type="number" class="ai" id="amt${m.id}" value="${m.apuesta||5000}" min="0" step="1000"/><button class="bs bwarn" onclick="setApuesta(${m.id})">Guardar</button></div><div class="adm-ctrl"><span class="adm-lbl">Resultado:</span><input type="number" min="0" max="20" class="ri" id="rh${m.id}" value="${m.resultHome>=0?m.resultHome:0}"/><span style="color:rgba(255,255,255,.3);font-family:'Bebas Neue';font-size:16px">-</span><input type="number" min="0" max="20" class="ri" id="ra${m.id}" value="${m.resultAway>=0?m.resultAway:0}"/><button class="bs bsuc" onclick="setResult(${m.id})">Finalizar</button>${m.status==='closed'?`<button class="bs bsuc" onclick="openMatch(${m.id})">Abrir apuestas</button>`:`<button class="bs bdgr" onclick="closeMatch(${m.id})">Cerrar</button>`}<button class="bs bwarn" onclick="toggleLive(${m.id})">Vivo</button></div>`
        :`<div style="margin-top:6px;font-size:10px;color:#6ddc96">Finalizado ${m.resultHome}-${m.resultAway} - Pozo: ${fmt(pozo(m.id))} - Premio: ${fmt(prize(m.id))} c/u</div><button class="bs bdgr" style="margin-top:4px" onclick="resetMatch(${m.id})">Reabrir</button>`;
      html+=`<div class="adm-match-card"><div class="adm-match-title"><span>#${m.id} ${flag(m.homeF)}${m.homeN} vs ${m.awayN}${flag(m.awayF)}</span><span style="font-size:9px;color:rgba(255,255,255,.3)">${m.date} ${m.time}</span></div><div class="adm-pozo-info">Apuesta: ${fmt(m.apuesta||5000)} - Pozo: ${fmt(pozo(m.id))} - ${pb.length} abonados</div>${betRows}${ctrl}</div>`;
    });
  });
  document.getElementById('sec-admin').innerHTML=html;
}

async function addUser(){
  const name=document.getElementById('nu-name').value.trim();
  const id=document.getElementById('nu-id').value.trim().replace(/\s/g,'').toLowerCase();
  const pass=document.getElementById('nu-pass').value.trim();
  const role=document.getElementById('nu-role').value;
  if(!name||!id||!pass){showToast('Completa todos los campos');return;}
  if(dbUsers[id]){showToast('Ese ID ya existe');return;}
  const cols=['#e74c3c','#3498db','#2ecc71','#9b59b6','#f39c12','#1abc9c','#e67e22','#e91e63'];
  await db.ref(`users/${id}`).set({name,pass,role,color:cols[Object.keys(dbUsers).length%cols.length]});
  showToast(`${name} agregado`);
}
async function removeUser(uid){if(!confirm('Eliminar?'))return;await db.ref(`users/${uid}`).remove();showToast('Eliminado');}
async function editUserPass(uid){const np=prompt(`Nueva clave para ${dbUsers[uid].name}:`);if(!np)return;await db.ref(`users/${uid}/pass`).set(np.trim());showToast('Clave actualizada');}
async function togglePaid(mid,uid){const b=dbBets[mid]&&dbBets[mid][uid];if(!b)return;await db.ref(`bets/${mid}/${uid}/paid`).set(!b.paid);showToast(b.paid?`${uid} desmarcado`:`${uid} marcado como abonado`);}
async function setApuesta(mid){const v=parseInt(document.getElementById('amt'+mid).value)||0;await db.ref(`matches/${mid}/apuesta`).set(v);showToast(`Apuesta: ${fmt(v)}`);}
async function setResult(mid){
  const rhEl=document.getElementById('rh'+mid)||document.getElementById('qrh'+mid);
  const raEl=document.getElementById('ra'+mid)||document.getElementById('qra'+mid);
  const h=parseInt(rhEl.value)||0;const a=parseInt(raEl.value)||0;
  await db.ref(`matches/${mid}`).update({resultHome:h,resultAway:a,status:'finished'});
  const w=winners(mid);
  if(w.length){const names=w.map(b=>{const u=dbUsers[b.user];return u?u.name:b.user;}).join(', ');showToast(`${names} - ${fmt(prize(mid))} c/u!`);}
  else showToast('Nadie acerto el marcador exacto');
}
async function closeMatch(mid){await db.ref(`matches/${mid}/status`).set('closed');showToast('Apuestas cerradas');}
async function openMatch(mid){await db.ref(`matches/${mid}/status`).set('open');showToast('Apuestas abiertas');}
async function toggleLive(mid){const m=dbMatches[mid];const ns=m.status==='live'?'closed':'live';await db.ref(`matches/${mid}/status`).set(ns);showToast(ns==='live'?'EN VIVO activado':'Cerrado');}
async function resetMatch(mid){if(!confirm('Reabrir?'))return;await db.ref(`matches/${mid}`).update({status:'open',resultHome:-1,resultAway:-1});showToast('Reabierto');}

function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),2800);}

(async()=>{
  try{
    await initDB();
    startListeners();
    document.getElementById('loading-screen').style.display='none';
    document.getElementById('login-screen').style.display='flex';
  }catch(e){
    document.getElementById('loading-screen').innerHTML=`<div style="color:#f0918a;text-align:center;padding:30px"><div style="font-size:30px">Error</div><div style="font-size:14px;margin-top:8px">No se pudo conectar a Firebase</div><div style="font-size:11px;color:rgba(255,255,255,.4);margin-top:4px">${e.message}</div><div style="font-size:11px;color:rgba(255,255,255,.4);margin-top:8px">Asegurate de configurar las reglas de Firebase Realtime Database en modo test</div></div>`;
  }
})();
