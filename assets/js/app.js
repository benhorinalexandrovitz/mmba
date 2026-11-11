document.documentElement.classList.add('js');
document.documentElement.setAttribute('dir','rtl');document.documentElement.setAttribute('lang','he');
(function(){
"use strict";
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const hoverless=matchMedia('(hover:none)').matches;
const pad=n=>String(n).padStart(2,'0');

/* ---------- icons ---------- */
const I={
 golden:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M7 4h10v4a5 5 0 0 1-10 0V4z"/><path d="M7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4"/><path d="M12 13v4M8 21h8M9 17h6v4H9z"/></svg>',
 creative:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/><path d="M12 7v3l2 1"/></svg>',
 diamond:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M9 3l3 18 3-18M6 3l3 6M18 3l-3 6"/></svg>',
 strategic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><path d="M12 3v3M21 12h-3"/></svg>',
 swag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M2 9h20"/><path d="M3 9l1 5a3 3 0 0 0 3 2h1a3 3 0 0 0 3-2l.5-2h1l.5 2a3 3 0 0 0 3 2h1a3 3 0 0 0 3-2l1-5"/></svg>',
 social:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M12 15.5s-3.5-2-3.5-4.2a1.8 1.8 0 0 1 3.5-.6 1.8 1.8 0 0 1 3.5.6c0 2.2-3.5 4.2-3.5 4.2z"/></svg>',
 smart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M12 2l7 7-7 13L5 9z"/><circle cx="12" cy="10" r="1.6"/><path d="M12 11.6V22"/></svg>',
 combi:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="9" cy="12" r="6"/><circle cx="15" cy="12" r="6"/></svg>',
 collab:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M2 12l4-4 4 2 3-2 3 1 6 3"/><path d="M6 8l-4 4 6 6 2-1"/><path d="M22 13l-4 4-3 1-2-1-3-2"/><path d="M13 8l-3 4 2 1 3-2"/><path d="M12 19l2 1M15 18l1.5 1"/></svg>',
 film:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="3" y="9" width="18" height="12" rx="1.5"/><path d="M3 9l1.5-5 17 3-1.2 2"/><path d="M8 4.8l-1.6 4.2M13 5.7l-1.6 3.3M18 6.6l-1 2.4"/><path d="M10 13v5l4-2.5z"/></svg>',
 probono:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M12 20s-7.5-4.6-7.5-10A4.2 4.2 0 0 1 12 7.6 4.2 4.2 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z"/><path d="M12 11v4M10 13h4"/></svg>',
 surprise:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M12 3l2.4 5.3 5.6.6-4.2 3.8 1.2 5.6L12 15.4 7 18.3l1.2-5.6L4 8.9l5.6-.6z"/><path d="M19 2v3M17.5 3.5h3M4 16v3M2.5 17.5h3"/></svg>',
 commendation:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M7 20c-3-3-4-8-2-13M17 20c3-3 4-8 2-13"/><path d="M5 11c1.5 0 2.5 1 3 2M4.6 7.5c1.4.2 2.3 1.2 2.6 2.4M19 11c-1.5 0-2.5 1-3 2M19.4 7.5c-1.4.2-2.3 1.2-2.6 2.4"/><path d="M12 8l1.2 2.4 2.6.4-1.9 1.8.5 2.6L12 14l-2.4 1.2.5-2.6-1.9-1.8 2.6-.4z"/></svg>',
 star:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17l-6.1 3.4 1.5-6.8L2.2 9l6.9-.7z"/></svg>',
 check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>',
 img:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-9 9"/></svg>'
};

/* ---------- static data ---------- */
const CATS=[
 {k:'golden',en:'Golden MMBA',he:'המהלך הגדול של השנה',d:'מהלך סוחף ובעל משמעות, שהגיע לפלטפורמות הגדולות והמובילות.',joint:false,wide:true},
 {k:'creative',en:'Lord of Creativity',he:'המוח היצירתי שמאחורי המהלך',d:'רעיון מקורי או פיצוח יצירתי שהפכו את התוצר למה שהוא.',joint:false},
 {k:'diamond',en:'Diamond Kapa',he:'האייטם הבודד של השנה',d:'כתבה אחת. אייטם אחד. לא אוסף ולא מהלך מרובה תוצרים.',joint:false},
 {k:'strategic',en:'Strategic',he:'המהלך ששינה את כללי המשחק',d:'שינוי אמיתי בשוק, בחברה או באקו־סיסטם, שהשיג את יעדי הלקוח דרך התקשורת.',joint:false},
 {k:'social',en:'Social Move',he:'המהלך שהשאיר חותם ברשת',d:'הקפיץ צפיות, יצר אינטראקציות, העלה עוקבים.',joint:false},
 {k:'film',en:'BHAwood',he:'הסרט המצטיין',d:'סרט, סרטון או קמפיין וידאו שהמשרד הוביל, ובלט ברעיון, בביצוע ובהשפעה.',joint:true},
 {k:'swag',en:'SWAG Award',he:'הכי נכון. הכי בסטייל.',d:'המהלך המגניב והנכון ביותר בתחום המשפיענים או הווידאו.',joint:true},
 {k:'smart',en:'smART',he:'עיצוב שנשאר בזיכרון',d:'מודעה, פוסט או פרויקט רחב, שהעיצוב שלו בלט ונשאר.',joint:true},
 {k:'combi',en:'CombiBHA',he:'שת״פ תקשורתי בין מחלקות',d:'שיתוף פעולה בין מחלקות במשרד 1+1=3, שיוצר מהלך גדול מסך חלקיו.',joint:true},
 {k:'collab',en:'CollaBHA',he:'שת״פ ממומן',d:'שיתוף פעולה ממומן עם גוף תקשורת מוביל, כמו כנס, מתחם תוכן או פרויקט מיוחד, שיצר באז והשפעה ללקוח.',joint:true},
 {k:'probono',en:'Heart of Gold',he:'פרו בונו. המהלך שנעשה מהלב',d:'מהלך עבור לקוח בהתנדבות. מגישים מהלך שלם, לא אייטם בודד.',joint:false},
 {k:'surprise',en:'Rising Star',he:'ההפתעה של השנה',d:'פרגון לצעירים: פעולה שעשה יועץ או יועצת בחצי השנה הראשונה שלהם במשרד.',joint:false},
 {k:'commendation',en:'צל״ש מחלקתי',he:'הצוותים שעושים את ההבדל',d:'כל מחלקה יכולה להגיש עד שלושה מהלכים (צוות אייל וצוות נוי: עד שניים כל אחד). בהצבעה מוצגים רק הצוותים של המחלקות האחרות.',joint:false,heb:true}
];
const CAT=Object.fromEntries(CATS.map(c=>[c.k,c]));
const DEPTS=['מחלקת צרכנות ומשפיענים','מחלקה ציבורית','מחלקת אסטרטגיה ודיגיטל','מחלקת סושיאל ווידאו','מחלקת אימפקט','מחלקה עסקית','צוות אייל','צוות נוי'];
const PH=["assets/img/ph/1.webp", "assets/img/ph/2.webp", "assets/img/ph/3.webp", "assets/img/ph/4.webp"];
const HOF_IMG={"סיקס סנסס — גל גדות במסוק דו־מנועי": "assets/img/hof/01.webp", "עמותת אנוש — קמפיין R U OK?": "assets/img/hof/02.webp", "אות זיכרון": "assets/img/hof/03.webp", "כשרות צהר — מתיחת פנים לשפה הגרפית": "assets/img/hof/04.webp", "איגוד נפגעות תקיפה מינית — זמר מפורסם פגע בך?": "assets/img/hof/05.webp", "שטראוס — המהלך שהחזיר לקהילת הצליאק את הביטחון לאכול": "assets/img/hof/06.webp", "שטראוס — השקת קאו פריי": "assets/img/hof/07.webp", "מזרחי טפחות × כלכליסט — כנס מדד הצמיחה": "assets/img/hof/08.webp", "JFNA": "assets/img/hof/09.webp", "לובי המיליון": "assets/img/hof/10.webp", "מטה המילואימניקים": "assets/img/hof/11.webp", "קול החטופות מול התקשורת העולמית": "assets/img/hof/12.webp", "טוטו": "assets/img/hof/13.webp", "מרכזי סיוע לנפגעות תקיפה מינית": "assets/img/hof/14.webp", "ארגון נכי צה״ל — יום ההוקרה לפצועי צה״ל": "assets/img/hof/15.webp", "אבוט — מנכ״ל אבוט שובר את הלינקדאין": "assets/img/hof/16.webp", "מכון אדלר — כך מתמודדים האסירים שהם אבות עם המרחק": "assets/img/hof/17.webp", "רשות העתיקות — מטבעות זהב עתיקים שוברים את הרשת": "assets/img/hof/18.webp", "מגדלי הים התיכון — חתונה בסופר": "assets/img/hof/19.webp", "תנו לחיות לחיות — פרשת הכלבים בחברון": "assets/img/hof/20.webp"};
const imgsOf=h=>h.imgs&&h.imgs.length?h.imgs.map(src):(HOF_IMG[h.title]?[HOF_IMG[h.title]]:[]);
const HEB_STYLE=' style="font-family:var(--heb);font-weight:700;letter-spacing:0;text-transform:none"';

/* ---------- crypto: passwords are never stored in plain text ---------- */
const enc=new TextEncoder();
const hex=b=>[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('');
async function kdf(pass,salt){
  const k=await crypto.subtle.importKey('raw',enc.encode(pass),'PBKDF2',false,['deriveBits']);
  return hex(await crypto.subtle.deriveBits({name:'PBKDF2',salt:enc.encode(salt),iterations:120000,hash:'SHA-256'},k,256));
}
const SUB_SALT='mmba-sub-2026', SUB_H='0cf54ffd5345bb715c78d1f1160c640046d3efa6544e9a075b1d0144882ca21f';
const ADM_SALT='mmba-adm-2026', ADM_H='cb9715b99895e4f97db21f1834ab59ef2b489d947ed433a4a4abf8c6614b12c3';
const randStr=(n,abc='abcdefghjkmnpqrstuvwxyz23456789')=>{const a=new Uint32Array(n);crypto.getRandomValues(a);return [...a].map(x=>abc[x%abc.length]).join('')};
const uid=p=>p+Date.now().toString(36)+randStr(5);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ss={get(k){try{return sessionStorage.getItem(k)}catch(e){return null}},set(k,v){try{sessionStorage.setItem(k,v)}catch(e){}},del(k){try{sessionStorage.removeItem(k)}catch(e){}}};
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('on');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('on'),3000)}
function shake(el){el.classList.remove('shake');void el.offsetWidth;el.classList.add('shake')}
function errMsg(e){
  const c=e&&e.code;
  if(c==='not_granted'||c==='not_uploader') return 'אין לך הרשאת כתיבה באתר. בקשו מבעל האתר הרשאה.';
  if(c==='no_assets') return 'העלאת תמונות לא זמינה בחשבון הזה.';
  if(c==='too_large') return 'התמונה גדולה מדי.';
  if(c==='bad_image') return 'אחד הקבצים אינו תמונה שהדפדפן יודע לקרוא (נסו JPG או PNG).';
  if(c==='rate_limited') return 'יותר מדי פעולות ברצף. נסו שוב בעוד רגע.';
  if(c==='quota_exceeded'||c==='quota_or_state'||c==='resource_exhausted') return 'נגמר המקום בשרת.';
  if(c==='quota') return 'המחלקה הזו כבר מיצתה את מכסת ההגשות בקטגוריה הזו.';
  if(c==='closed') return 'השלב הזה סגור כרגע.';
  if(c==='bad_admin') return 'סיסמת הניהול לא תקפה. היכנסו מחדש.';
  if(c==='bad_login') return 'שם המשתמש או הסיסמה לא נכונים.';
  if(c==='bad_code') return 'קוד ההגשה לא נכון.';
  if(c==='dup') return 'שם המשתמש הזה כבר קיים.';
  if(c==='weak_pass') return 'הסיסמה קצרה מדי (לפחות 4 תווים).';
  if(c==='missing') return 'חסרים שדות חובה.';
  if(c==='not_rising') return 'ב־Rising Star המהלך צריך להיות מחצי השנה הראשונה של היועץ/ת במשרד.';
  if(c==='bad_user') return 'שם משתמש: 3–40 תווים, אותיות באנגלית, ספרות, נקודה, מקף או קו תחתון.';
  if(c==='bad_url') return 'כתובת הלוג צריכה להתחיל ב־https://script.google.com/';
  if(c==='too_long') return 'ההסבר ארוך מ־250 מילים.';
  if(c==='locked') return 'ההצבעה כבר אושרה ולא ניתן לשנות אותה.';
  if(c==='local_video') return 'שמירת סרטונים זמינה רק כשהאתר מחובר לשרת.';
  return 'השמירה נכשלה. בדקו את החיבור ונסו שוב.';
}

/* ---------- storage: secure server when available, this browser otherwise ---------- */
const SB_URL='https://ilwldmwstgvosbabknbg.supabase.co', SB_KEY='sb_publishable_8UA2cqer3xBLN75cWw5byA_ubv9oo4y', SB_BUCKET='mmba-images';
const B={server:false,db:null,assets:null,sb:null,ready:false};
let sbAdminPass=null,sbCode=null,sbCreds=null;
function sbErr(e){const m=String((e&&e.message)||'');for(const c of ['bad_code','bad_login','bad_admin','quota','closed','missing','weak_pass'])if(m.includes(c))return {code:c,message:m};if(e&&e.code==='23505')return {code:'dup',message:m};return {code:'net',message:m}}
async function rpc(fn,args){const {data,error}=await B.sb.rpc(fn,args);if(error)throw sbErr(error);return data}
const mapNom=n=>({deletedAt:n.deleted_at?+n.deleted_at:null,extra:n.extra||{},id:n.id,ts:+n.ts,cat:n.cat,title:n.title,client:n.client,dept:n.dept,joint:n.joint||[],team:n.team||'',desc:n.descr,link:n.link||'',by:n.by_name,status:n.status,imgs:n.imgs||[]});
async function sbLoadPublic(){
  const [s,c,h,n]=await Promise.all([
    B.sb.from('mmba_settings').select('*').eq('id',1).maybeSingle(),
    B.sb.from('mmba_content').select('*').eq('id',1).maybeSingle(),
    B.sb.from('mmba_hof').select('*').order('year',{ascending:false}).order('ord',{ascending:true}),
    B.sb.from('mmba_noms').select('*').order('ts',{ascending:false})]);
  for(const r of [s,c,h,n])if(r.error)throw sbErr(r.error);
  DB.settings={subOpen:s.data?s.data.sub_open:true,voteOpen:s.data?s.data.vote_open:true,logUrl:s.data?s.data.log_url||'':'',logToken:s.data?s.data.log_token||'':''};
  DB.content={texts:(c.data&&c.data.texts)||{},ts:c.data?+c.data.ts:0};
  DB.hof=(h.data||[]).map(x=>({id:x.id,year:x.year,cat:x.cat,dept:x.dept,title:x.title,imgs:x.imgs||[],order:+x.ord}));
  if(!sbAdminPass)DB.noms=(n.data||[]).map(mapNom);
}
async function sbLoadAdmin(){
  if(!sbAdminPass)return;
  const d=await rpc('mmba_admin_dump',{p_admin:sbAdminPass});
  DB.noms=(d.noms||[]).map(mapNom);DB.voters=d.voters||[];
  DB.ballots=(d.ballots||[]).map(b=>({...b,ts:+b.ts}));DB.history=(d.history||[]).map(x=>({...x,ts:+x.ts}));
}
let sbBusy=false;
async function sbSync(){
  if(sbBusy)return;sbBusy=true;
  try{await sbLoadPublic();await sbLoadAdmin()}
  catch(e){console.error(e);if(e.code==='bad_admin'){sbAdminPass=null;ss.del('mmba.adm');ss.del('mmba.admp')}else if(!B.ready)toast('אין חיבור לשרת כרגע. נסו לרענן.')}
  sbBusy=false;B.ready=true;schedule();
}
let DB={settings:{subOpen:true,voteOpen:true},content:{texts:{}},noms:[],voters:[],ballots:[],hof:[],history:[]};
const LKEY='mmba2026.v2';
const clean=o=>JSON.parse(JSON.stringify(o));
function saveLocal(){if(B.server)return;try{localStorage.setItem(LKEY,JSON.stringify(DB))}catch(e){toast('האחסון בדפדפן מלא. מחקו תמונות ישנות.')}}
function sortCol(c){if(c==='noms'||c==='history')DB[c].sort((a,b)=>(b.ts||0)-(a.ts||0));if(c==='hof')DB.hof.sort((a,b)=>(b.year-a.year)||((a.order||0)-(b.order||0)))}
async function put(col,obj){
  const arr=DB[col],i=arr.findIndex(x=>x.id===obj.id);if(i>=0)arr[i]=obj;else arr.unshift(obj);sortCol(col);
  if(B.server){const {id,...data}=obj;await B.db.collection(col).doc(id).set(clean(data))}else saveLocal();
}
async function drop(col,id){DB[col]=DB[col].filter(x=>x.id!==id);if(B.server)await B.db.collection(col).doc(id).delete();else saveLocal()}
async function putDoc(name,data){DB[name]=data;if(B.server)await B.db.doc('site/'+name).set(clean(data));else saveLocal()}
async function safe(fn,ok){try{await fn();if(ok)toast(ok);return true}catch(e){console.error(e);toast(errMsg(e));return false}}

function seedLocal(){
  const hof=[[2025,'Diamond Kapa','מחלקת צרכנות ומשפיענים','סיקס סנסס — גל גדות במסוק דו־מנועי'],[2025,'Lord of Creativity','מחלקה ציבורית','עמותת אנוש — קמפיין R U OK?'],[2025,'Golden MMBA','מחלקת אסטרטגיה ודיגיטל','אות זיכרון'],[2025,'smART','מחלקת סושיאל ווידאו','כשרות צהר — מתיחת פנים לשפה הגרפית'],[2025,'Social Move','מחלקת אימפקט','איגוד נפגעות תקיפה מינית — זמר מפורסם פגע בך?'],[2025,'SWAG Award','מחלקה עסקית','שטראוס — המהלך שהחזיר לקהילת הצליאק את הביטחון לאכול'],[2025,'Strategic','מחלקה עסקית','שטראוס — השקת קאו פריי'],[2025,'CollaBHA','מחלקה עסקית','מזרחי טפחות × כלכליסט — כנס מדד הצמיחה'],[2024,'Diamond Item','צוות אייל','JFNA'],[2024,'Lord of Creativity','מחלקה עסקית','לובי המיליון'],[2024,'Golden MMBA','צוות נועה','מרכזי סיוע לנפגעות תקיפה מינית'],[2024,'Strategic','מחלקת אסטרטגיה ודיגיטל','מטה המילואימניקים'],[2024,'Iron Swords','מחלקה ציבורית','קול החטופות מול התקשורת העולמית'],[2024,'Social Move','מחלקת סושיאל','טוטו'],[2022,'Golden MMBA','מחלקה ציבורית','תנו לחיות לחיות — פרשת הכלבים בחברון'],[2022,'Lord of Creativity','מחלקת צרכנות ומשפיענים','מגדלי הים התיכון — חתונה בסופר'],[2022,'Social Move','מחלקת סושיאל','רשות העתיקות — מטבעות זהב עתיקים שוברים את הרשת'],[2021,'Golden MMBA','מחלקה ציבורית','ארגון נכי צה״ל — יום ההוקרה לפצועי צה״ל'],[2021,'Diamond Kapa','מחלקה ציבורית','מכון אדלר — כך מתמודדים האסירים שהם אבות עם המרחק'],[2021,'Social Move','מחלקת סושיאל','אבוט — מנכ״ל אבוט שובר את הלינקדאין']].map(([year,cat,dept,title],i)=>({id:'h'+i,year,cat,dept,title,order:i,imgs:[]}));
  const noms=[['golden','[דוגמה] מהלך השקה ארצי','מחלקה עסקית','approved'],['golden','[דוגמה] קמפיין מודעות לאומי','מחלקה ציבורית','approved'],['creative','[דוגמה] פיצוח יצירתי בסושיאל','מחלקת סושיאל ווידאו','approved'],['creative','[דוגמה] אייטם וידאו ויראלי','מחלקת אימפקט','approved'],['diamond','[דוגמה] כתבת שער','מחלקת צרכנות ומשפיענים','pending']].map(([cat,title,dept,status],i)=>({id:'n'+i,ts:Date.now()-i*36e5,cat,title,dept,status,client:'לקוח לדוגמה',desc:'מועמדות לדוגמה. אפשר למחוק באזור ההגדרות.',by:'דוגמה',joint:[],team:'',link:'',imgs:[]}));
  return {settings:{subOpen:true,voteOpen:true},content:{texts:{}},noms,voters:[{id:'v0',name:'מצביע לדוגמה',user:'demo',salt:'demo-salt-7f3a',hash:'fe56027c9ead67411a98faf3d4a86f4549d7329d167c6e254cef507962de4c1b',dept:'מחלקת אסטרטגיה ודיגיטל',role:'emp'}],ballots:[],hof,history:[]};
}

async function initBackend(){
  let db=null;
  if(window.claude&&typeof window.claude.use==='function'){try{db=await window.claude.use('db')}catch(e){db=null}}
  if(db){
    B.server=true;B.db=db;
    try{B.assets=await window.claude.use('assets')}catch(e){B.assets=null}
    subscribe();
  }else if(window.supabase&&typeof window.supabase.createClient==='function'&&SB_URL){
    const sbFetch=(input,init={})=>{const h=new Headers(init.headers||(input instanceof Request?input.headers:undefined));if(/^Bearer sb_(publishable|secret)_/.test(h.get('Authorization')||''))h.delete('Authorization');return fetch(input,{...init,headers:h})};
    B.sb=window.supabase.createClient(SB_URL,SB_KEY,{auth:{persistSession:false,autoRefreshToken:false},global:{fetch:sbFetch}});
    sbAdminPass=ss.get('mmba.admp');if(!sbAdminPass)ss.del('mmba.adm');
    await sbSync();
    setInterval(()=>{if(!document.hidden&&!editing)sbSync()},30000);
    document.addEventListener('visibilitychange',()=>{if(!document.hidden&&!editing)sbSync()});
  }else{
    let d=null;try{d=JSON.parse(localStorage.getItem(LKEY)||'null')}catch(e){}
    DB=d||seedLocal();if(!d)saveLocal();
    ['noms','hof','history'].forEach(sortCol);
    B.ready=true;schedule();
  }
}
function subscribe(){
  const wait=new Set(['noms','voters','ballots','hof','history','settings','content']);
  const done=k=>{wait.delete(k);if(!wait.size)B.ready=true;schedule()};
  const fail=k=>e=>{console.error(k,e);done(k)};
  ['noms','voters','ballots','hof'].forEach(c=>B.db.collection(c).onSnapshot(s=>{DB[c]=s.docs.map(d=>({id:d.id,...d.data()}));sortCol(c);done(c)},fail(c)));
  B.db.collection('history').orderBy('ts','desc').limit(80).onSnapshot(s=>{DB.history=s.docs.map(d=>({id:d.id,...d.data()}));done('history')},fail('history'));
  B.db.doc('site/settings').onSnapshot(s=>{DB.settings={subOpen:true,voteOpen:true,...(s.exists?s.data():{})};done('settings')},fail('settings'));
  B.db.doc('site/content').onSnapshot(s=>{DB.content=s.exists?s.data():{texts:{}};done('content')},fail('content'));
  setTimeout(()=>{if(!B.ready){B.ready=true;schedule()}},10000);
}
let sched=0;function schedule(){if(sched)return;sched=requestAnimationFrame(()=>{sched=0;refresh()})}

/* ---------- images ---------- */
const src=ref=>!ref?'':(/^(data:|https?:|\/|blob:|assets\/)/.test(ref)?ref:'/_blob/'+ref);
async function toBlob(file,max,q){
  let bmp;try{bmp=await createImageBitmap(file)}catch(e){throw {code:'bad_image'}}
  const s=Math.min(1,max/Math.max(bmp.width,bmp.height)),c=document.createElement('canvas');
  c.width=Math.round(bmp.width*s);c.height=Math.round(bmp.height*s);c.getContext('2d').drawImage(bmp,0,0,c.width,c.height);
  return new Promise((res,rej)=>c.toBlob(b=>b?res(b):rej({code:'bad_image'}),'image/jpeg',q));
}
async function uploadImage(file){
  if(B.sb){
    const blob=await toBlob(file,2200,.86),path=`${new Date().getFullYear()}/${uid('i')}.jpg`;
    const {error}=await B.sb.storage.from(SB_BUCKET).upload(path,blob,{contentType:'image/jpeg',upsert:false});
    if(error)throw {code:'net',message:error.message};
    return B.sb.storage.from(SB_BUCKET).getPublicUrl(path).data.publicUrl;
  }
  if(B.server){
    if(!B.assets)throw {code:'no_assets'};
    const r=await B.assets.upload(await toBlob(file,2200,.86),{type:'image/jpeg'});return r.id;
  }
  const b=await toBlob(file,1100,.72);
  return await new Promise(res=>{const fr=new FileReader();fr.onload=()=>res(fr.result);fr.readAsDataURL(b)});
}
async function uploadMany(files,label){
  const out=[];let i=0;
  for(const f of files){i++;if(label)label(i,files.length);out.push(await uploadImage(f))}
  return out;
}
async function deleteAsset(ref){if(B.server&&B.assets&&ref&&!/^(data:|https?:|\/)/.test(ref)){try{await B.assets.delete(ref)}catch(e){}}}
function bindDrop(zone,input,onFiles){
  input.addEventListener('change',()=>{onFiles([...input.files]);input.value=''});
  ['dragenter','dragover'].forEach(t=>zone.addEventListener(t,e=>{e.preventDefault();zone.classList.add('over')}));
  ['dragleave','drop'].forEach(t=>zone.addEventListener(t,e=>{e.preventDefault();zone.classList.remove('over')}));
  zone.addEventListener('drop',e=>onFiles([...e.dataTransfer.files].filter(f=>/^image\//.test(f.type))));
}

/* ---------- username: English first name + last-name initial + gematria of the full name ---------- */
const GEM={'א':1,'ב':2,'ג':3,'ד':4,'ה':5,'ו':6,'ז':7,'ח':8,'ט':9,'י':10,'כ':20,'ך':20,'ל':30,'מ':40,'ם':40,'נ':50,'ן':50,'ס':60,'ע':70,'פ':80,'ף':80,'צ':90,'ץ':90,'ק':100,'ר':200,'ש':300,'ת':400};
const gematria=s=>[...s].reduce((t,c)=>t+(GEM[c]||0),0);
const NAMES=Object.fromEntries(`אביב:aviv,אביגיל:avigail,אביה:aviya,אבי:avi,אביטל:avital,אבישג:avishag,אברהם:avraham,אדם:adam,אדר:adar,אהרון:aharon,אהוד:ehud,אודי:udi,אודיה:odaya,אופיר:ofir,אופק:ofek,אור:or,אורי:ori,אוריה:oriya,אורית:orit,אורן:oren,אורנה:orna,אושרת:osherat,אושר:osher,איה:aya,איל:eyal,אייל:eyal,איילת:ayelet,אילה:ayala,אילן:ilan,אילנה:ilana,אילת:eilat,איתי:itay,איתן:eitan,איתמר:itamar,אלה:ela,אלון:alon,אלונה:alona,אלי:eli,אליאור:elior,אליה:eliya,אליהו:eliyahu,אלירן:eliran,אלכס:alex,אלמוג:almog,אלעד:elad,אלקנה:elkana,אמיר:amir,אמית:amit,אנה:anna,אסף:asaf,אפרת:efrat,אריאל:ariel,אריאלה:ariela,אריה:arye,ארז:erez,אתי:eti,בועז:boaz,בן:ben,בני:beni,בר:bar,ברק:barak,בת:bat,בתיה:batya,גאיה:gaya,גאיל:gail,גבי:gabi,גבריאל:gavriel,גדי:gadi,גיא:guy,גיל:gil,גילה:gila,גילי:gili,גלי:gali,גל:gal,גליה:galya,גלית:galit,גפן:gefen,דביר:dvir,דבורה:dvora,דוד:david,דור:dor,דורית:dorit,דורון:doron,דין:din,דינה:dina,דן:dan,דנה:dana,דני:dani,דניאל:daniel,דניאלה:daniela,דפנה:dafna,דקל:dekel,הדס:hadas,הדר:hadar,הילה:hila,הלל:hillel,ורד:vered,זהבה:zehava,זיו:ziv,חגית:hagit,חובב:hovav,חיים:haim,חן:chen,חנה:hana,חני:hani,טל:tal,טלי:tali,טליה:talya,טובה:tova,יאיר:yair,יהודה:yehuda,יהונתן:yehonatan,יואב:yoav,יובל:yuval,יוגב:yogev,יוסי:yossi,יוסף:yosef,יונתן:yonatan,יעל:yael,יעקב:yaakov,יערה:yaara,יפעת:yifat,יצחק:yitzhak,ירדן:yarden,ירון:yaron,ישי:yishai,כנרת:kineret,כרמל:carmel,כרמית:karmit,לאה:lea,ליאור:lior,ליאת:liat,ליה:lia,לילך:lilach,לימור:limor,לי:li,ליבי:libi,לירון:liron,ליטל:lital,לינוי:linoy,לירז:liraz,מאיה:maya,מאיר:meir,מוטי:moti,מור:mor,מורן:moran,מורית:morit,מיה:mia,מיכאל:michael,מיכל:michal,מירב:merav,מירית:mirit,מלכה:malka,מנחם:menahem,מעיין:maayan,מרים:miriam,משה:moshe,מתן:matan,נגה:noga,נדב:nadav,נוי:noy,נויה:noya,נועה:noa,נועם:noam,נוה:nave,נטע:neta,ניר:nir,נירית:nirit,נעמה:naama,נעמי:naomi,נתן:natan,נתנאל:netanel,סהר:sahar,סיון:sivan,סתיו:stav,ספיר:sapir,עדי:adi,עדן:eden,עדינה:adina,עדית:adit,עומר:omer,עופר:ofer,עוז:oz,עזרא:ezra,עידו:ido,עידן:idan,עינב:inbar,ענבר:inbar,ענבל:inbal,עמית:amit,עמרי:omri,ערן:eran,פזית:pazit,פנינה:pnina,צביקה:tzvika,צחי:tzachi,ציפי:tzipi,קרן:keren,רביד:ravid,רועי:roy,רוני:roni,רונית:ronit,רון:ron,רונן:ronen,רות:ruth,רז:raz,רחל:rachel,רינה:rina,רמי:rami,רן:ran,רעות:reut,רפאל:refael,שגיא:sagi,שגית:sagit,שחר:shahar,שי:shai,שירה:shira,שירן:shiran,שיר:shir,שלומי:shlomi,שלום:shalom,שמואל:shmuel,שמעון:shimon,שני:shani,שקד:shaked,שרה:sara,שרון:sharon,שרית:sarit,תום:tom,תומר:tomer,תמר:tamar,תמי:tami,תהילה:tehila,תחיה:tchiya,גלעד:gilad,אורטל:ortal,עינת:einat,ענת:anat,אסנת:osnat,אפי:efi,יגאל:yigal,יגל:yagel,ליהי:lihi,ליאל:liel,מאי:may,נאוה:nava,נטלי:natali,סיגל:sigal,סיגלית:sigalit,עמוס:amos,עוזי:uzi,צליל:tzlil,קובי:kobi,רותם:rotem,רעיה:raya,שלי:shelly,שמרית:shimrit,תאיר:tair,תמרה:tamara,יוליה:yulia,אלינור:elinor,אלין:elin,הלן:helen,אוהד:ohad,אורי:ori,אסתר:ester,בתאל:batel,גיתית:gitit,דנית:danit,הגר:hagar,זוהר:zohar,חגי:hagai,חנן:hanan,טליה:talya,יעלי:yaeli,כפיר:kfir,ליעד:liad,לירון:liron,מאור:maor,מיטל:meital,מיקה:mika,נגב:negev,נווה:nave,ניצן:nitzan,נעה:noa,סער:saar,עדיאל:adiel,עלמה:alma,עמנואל:emanuel,פלג:peleg,צור:tzur,קורל:koral,רוית:ravit,רוני:roni,רז:raz,רנן:renan,שגב:segev,שון:shon,שחף:shahaf,שלמה:shlomo,שמרית:shimrit,תהל:tahel,תמיר:tamir`.split(',').map(p=>p.split(':')));
function translit(w){
  w=w.replace(/[^א-ת]/g,'');if(!w)return'';
  if(NAMES[w])return NAMES[w];
  const C={'ב':'v','ג':'g','ד':'d','ה':'h','ז':'z','ח':'h','ט':'t','כ':'ch','ך':'ch','ל':'l','מ':'m','ם':'m','נ':'n','ן':'n','ס':'s','פ':'f','ף':'f','צ':'tz','ץ':'tz','ק':'k','ר':'r','ש':'sh','ת':'t'};
  const F={'ב':'b','כ':'k','פ':'p'};
  const L=[...w];let out='',prevCons=false;
  L.forEach((c,i)=>{
    const first=i===0,last=i===L.length-1,nx=L[i+1];
    if(c==='א'&&first&&(nx==='ו'||nx==='י')){prevCons=false;return}
    if(c==='א'||c==='ע'){out+=first||!prevCons?'a':(last?'a':'');prevCons=false;return}
    if(c==='ו'){if(nx==='ו'){out+='v';prevCons=true;return}if(L[i-1]==='ו')return;out+=first?'v':'o';prevCons=first;return}
    if(c==='י'){if(nx==='י'){out+='y';prevCons=true;return}if(L[i-1]==='י')return;out+=first?'y':'i';prevCons=first;return}
    if(c==='ה'&&last){out+='a';prevCons=false;return}
    if(prevCons)out+='a';
    out+=first&&F[c]?F[c]:(C[c]||'');prevCons=true;
  });
  return out;
}
function initialOf(w){
  if(/^[a-z]/i.test(w))return w[0].toLowerCase();
  w=w.replace(/[^א-ת]/g,'');if(!w)return'';
  const c=w[0],n=w[1];
  if(c==='פ')return(n==='ו'||n==='י')?'f':'p';
  return({'א':'a','ב':'b','ג':'g','ד':'d','ה':'h','ו':'v','ז':'z','ח':'h','ט':'t','י':'y','כ':'k','ל':'l','מ':'m','נ':'n','ס':'s','ע':'a','צ':'t','ק':'k','ר':'r','ש':'s','ת':'t'})[c]||'';
}
function genUser(full,taken=[]){
  const parts=full.trim().split(/\s+/).filter(Boolean);if(!parts.length)return'';
  const first=/^[a-z]/i.test(parts[0])?parts[0].toLowerCase().replace(/[^a-z]/g,''):translit(parts[0]);
  const ini=parts.length>1?initialOf(parts[1]):'';
  const g=gematria(full);
  let base=(first+ini+(g||'')).toLowerCase().replace(/[^a-z0-9]/g,'')||'user';
  let u=base,k=0;while(taken.includes(u))u=base+String.fromCharCode(98+(k++));
  return u;
}

/* ---------- activity log → Google Sheets (Apps Script web app) ---------- */
function logEvent(action,o={}){
  const st=DB.settings||{},url=st.logUrl;
  if(!url||!/^https:\/\/script\.google\.com\//.test(url))return;
  const body=JSON.stringify({token:st.logToken||'',action,who:o.who||'',dept:o.dept||'',cat:o.cat?((CAT[o.cat]||{}).en||o.cat):'',details:o.details||'',ref:o.ref||'',page:location.hash||'#home'});
  try{fetch(url,{method:'POST',mode:'no-cors',keepalive:true,headers:{'Content-Type':'text/plain;charset=utf-8'},body}).catch(()=>{})}catch(e){}
}
const live=()=>DB.noms.filter(n=>!n.deletedAt);

/* ---------- category cards ---------- */
function catCard(c,i,featured){
  return `<button type="button" class="cat rv${featured?' featured':''}${c.k==='golden'?' gold':''}" data-k="${c.k}" aria-label="${esc(c.en)}: ${esc(c.he)}">
    <span class="num">${pad(i+1)} / ${pad(CATS.length)}</span>
    <span class="ico">${I[c.k]}</span>
    <span class="en"${c.heb?HEB_STYLE:''}>${esc(c.en)}</span>
    <span class="he">${esc(c.he)}</span>
    <span class="desc">${esc(c.d)}</span>
    <span class="foot">${c.joint?'<span class="chip joint">פתוח להגשה משותפת</span>':'<span class="chip">מחלקה או צוות עצמאי</span>'}<span style="color:var(--gold)">להגשה ←</span></span>
  </button>`;
}
$('#homeCats').innerHTML=CATS.map((c,i)=>catCard(c,i,!!c.wide)).join('');
$('#allCats').innerHTML=CATS.map((c,i)=>catCard(c,i,!!c.wide)).join('');
let pendingCat=null;
document.addEventListener('click',e=>{
  if(editing)return;
  const c=e.target.closest('.cat');if(!c)return;
  pendingCat=c.dataset.k;location.hash='nominate';
});
function bindTilt(){
  if(reduce||hoverless)return;
  $$('.cat,.win').forEach(el=>{
    if(el._t)return;el._t=1;
    el.addEventListener('pointermove',e=>{
      const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
      el.style.setProperty('--mx',x*100+'%');el.style.setProperty('--my',y*100+'%');
      el.style.transform=`perspective(900px) rotateX(${(.5-y)*5}deg) rotateY(${(x-.5)*7}deg) translateY(-4px)`;
    });
    el.addEventListener('pointerleave',()=>{el.style.transform=''});
  });
}

/* ---------- cinematic reel ---------- */
const DUR=6500;let reelI=-1,reelTimer=null,reelSig='',reelPaused=false;
function reelData(){
  let items=DB.hof.map((x,i)=>({cat:x.cat,year:x.year,title:x.title,dept:x.dept,img:imgsOf(x)[0]||PH[i%PH.length],more:imgsOf(x).slice(1)}));
  if(!items.length)items=PH.slice(0,4).map(p=>({cat:'MMBA',year:2026,title:'המהלך הבא שלכם',dept:'ממב״א 2026',img:p,more:[]}));
  return items.slice(0,30);
}
function renderReel(){
  if(!B.ready&&!DB.hof.length)return;
  const items=reelData(),sig=JSON.stringify(items.map(i=>[i.title,i.cat,i.year,i.dept,i.img.length>200?i.img.slice(-60):i.img]));
  if(sig===reelSig)return;reelSig=sig;
  $('#reelStage').innerHTML=items.map((it,i)=>`<figure class="slide" data-i="${i}" aria-hidden="true"><div class="sl-img"><img ${i===0?'src':'data-src'}="${esc(it.img)}" alt="${esc(it.title)}" decoding="async"></div><div class="sl-shade"></div><div class="sl-sweep"></div><span class="sl-num" aria-hidden="true">${pad(i+1)}</span><figcaption class="sl-cap"><span class="sl-cat">${esc(it.cat)} · ${esc(it.year)}</span><h3><span class="line-mask"><span>${esc(it.title)}</span></span></h3><span class="sl-dep">${esc(it.dept)}</span></figcaption></figure>`).join('');
  $('#reelBars').innerHTML=items.map((it,i)=>`<button type="button" class="rb" data-i="${i}" aria-label="${esc(it.title)}"><i></i><span>${esc(it.cat)}</span></button>`).join('');
  $('#reelBars').style.setProperty('--dur',DUR+'ms');
  let tiles=[];items.forEach(it=>{tiles.push([it.img,it.title]);it.more.forEach(m=>tiles.push([m,it.title]))});
  let k=0;while(tiles.length<14){tiles.push([PH[k%PH.length],'']);k++}
  const half=Math.ceil(tiles.length/2),row=arr=>{const h=arr.map(([s,t])=>`<figure><img src="${esc(s)}" alt="" loading="lazy" decoding="async">${t?`<figcaption>${esc(t)}</figcaption>`:''}</figure>`).join('');return h+h};
  $('#strip1').innerHTML=row(tiles.slice(0,half));$('#strip2').innerHTML=row(tiles.slice(half).concat(tiles.slice(0,Math.max(0,half-(tiles.length-half)))));
  reelI=-1;showSlide(0);
}
function showSlide(i){
  const S=$$('#reelStage .slide');if(!S.length)return;const n=S.length;i=((i%n)+n)%n;
  if(i===reelI)return;
  const prev=reelI;
  S.forEach((s,k)=>{if(k!==i&&k!==prev){s.classList.remove('on','prev')}});
  if(prev>=0&&S[prev]){S[prev].classList.remove('on');S[prev].classList.add('prev');S[prev].setAttribute('aria-hidden','true')}
  [i,(i+1)%n].forEach(k=>{const im=S[k].querySelector('img[data-src]');if(im){im.src=im.dataset.src;im.removeAttribute('data-src')}});
  const t=S[i];t.classList.remove('on','prev');void t.offsetWidth;t.classList.add('on');t.setAttribute('aria-hidden','false');
  reelI=i;
  $$('#reelBars .rb').forEach((b,k)=>{b.classList.remove('on');b.classList.toggle('done',k<i);const bar=b.querySelector('i');bar.style.animation='none';void bar.offsetWidth;bar.style.animation=''});
  const cur=$$('#reelBars .rb')[i];if(cur)cur.classList.add('on');
  $('#reelCount').textContent=pad(i+1)+' / '+pad(n);
  armReel();
}
function armReel(){clearTimeout(reelTimer);if(reduce||reelPaused||editing||cur!=='home')return;reelTimer=setTimeout(()=>showSlide(reelI+1),DUR)}
const stage=$('#reelStage');
$('#reelNext').addEventListener('click',()=>showSlide(reelI+1));
$('#reelPrev').addEventListener('click',()=>showSlide(reelI-1));
$('#reelBars').addEventListener('click',e=>{const b=e.target.closest('.rb');if(b)showSlide(+b.dataset.i)});
stage.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')showSlide(reelI+1);if(e.key==='ArrowRight')showSlide(reelI-1)});
stage.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'){reelPaused=true;$('.reel').classList.add('paused');clearTimeout(reelTimer)}});
stage.addEventListener('pointerleave',e=>{reelPaused=false;$('.reel').classList.remove('paused');stage.style.setProperty('--px',0);stage.style.setProperty('--py',0);armReel()});
stage.addEventListener('pointermove',e=>{if(reduce)return;const r=stage.getBoundingClientRect();stage.style.setProperty('--px',((e.clientX-r.left)/r.width-.5).toFixed(3));stage.style.setProperty('--py',((e.clientY-r.top)/r.height-.5).toFixed(3))});
let sx=null;stage.addEventListener('pointerdown',e=>{sx=e.clientX});
stage.addEventListener('pointerup',e=>{if(sx==null)return;const dx=e.clientX-sx;sx=null;if(Math.abs(dx)>50)showSlide(reelI+(dx>0?1:-1))});
document.addEventListener('visibilitychange',()=>{if(document.hidden)clearTimeout(reelTimer);else armReel()});

/* ---------- hall plates teaser ---------- */
function renderPlates(){
  const top=DB.hof.filter(h=>h.year===(DB.hof[0]||{}).year).slice(0,3);
  $('#hallPlates').innerHTML=top.map(h=>`<div class="plate"><small>WINNER · ${esc(h.year)} · ${esc(h.cat)}</small><b>${esc(h.title)}</b><span>${esc(h.dept)}</span></div>`).join('');
}

/* ---------- countdown & phase ---------- */
const EVENT=new Date('2026-12-30T19:00:00+02:00');
function tick(){
  const ms=Math.max(0,EVENT-Date.now());
  const v={d:Math.floor(ms/864e5),h:Math.floor(ms/36e5)%24,m:Math.floor(ms/6e4)%60,s:Math.floor(ms/1e3)%60};
  $$('#count b').forEach(b=>{const n=pad(v[b.dataset.u]);if(b.textContent!==n)b.textContent=n});
}
tick();setInterval(tick,1000);
function phase(){
  const now=new Date();
  const ymd=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Jerusalem'}).format(now).split('-').map(Number);
  const days=Math.round((Date.UTC(2026,10,16)-Date.UTC(ymd[0],ymd[1]-1,ymd[2]))/864e5);
  let t;
  if(days>2)t=`ההגשות נפתחות ב־16.11, שזה בדיוק בעוד ${days} ימים`;
  else if(days===2)t='ההגשות נפתחות ב־16.11, שזה בדיוק בעוד יומיים';
  else if(days===1)t='ההגשות נפתחות ב־16.11, שזה ממש מחר!';
  else if(days===0)t='ההגשות נפתחו, בהצלחה!';
  else{
    const P=[['2026-12-04T00:00:00+02:00','ההגשות פתוחות עד 03.12. בהצלחה!'],['2026-12-08T10:00:00+02:00','המועמדויות בבדיקה. הקלפי נפתחת ב־08.12'],['2026-12-10T10:00:00+02:00','הקלפי פתוחה עד 10.12 בשעה 10:00'],['2026-12-30T23:59:00+02:00','נתראה על הבמה ב־30.12']];
    t='ממב״א 2026 הסתיים. נתראה בשנה הבאה';
    for(const [d,txt] of P){if(now<new Date(d)){t=txt;break}}
  }
  $('#phaseText').textContent=t;
  $$('.tl-item').forEach(it=>{it.classList.remove('now');it.classList.toggle('lit',now>=new Date(it.dataset.d+'T00:00:00+02:00'))});
  const nxt=$$('.tl-item').find(it=>!it.classList.contains('lit'));if(nxt)nxt.classList.add('now');
}
setInterval(phase,60000);
phase();

function banners(){
  const so=DB.settings.subOpen,vo=DB.settings.voteOpen;
  $('#subStatus').className='status-banner'+(so?' open':'');
  $('#subStatus').innerHTML=`<span class="pulse"></span><span>${so?'ההגשות פתוחות. חלון ההגשה הרשמי: 16.11 עד 03.12.':'ההגשות סגורות כרגע. חלון ההגשה: 16.11 עד 03.12.'}</span>`;
  $('#voteStatus').className='status-banner'+(vo?' open':'');
  $('#voteStatus').innerHTML=`<span class="pulse"></span><span>${vo?'הקלפי פתוחה. רק מועמדויות מאושרות מופיעות כאן.':'הקלפי סגורה. הצבעת העובדים: 08.12 10:00 עד 10.12 10:00.'}</span>`;
}

/* ---------- nomination card (ballot + preview) ---------- */
const fmtD=d=>{if(!d)return'';const x=new Date(d);return isNaN(x)?d:x.toLocaleDateString('he-IL',{day:'2-digit',month:'2-digit',year:'numeric'})};
const mediaOf=n=>{const a=[];if(n.video)a.push({t:'v',s:src(n.video)});(n.imgs||[]).forEach(i=>a.push({t:'i',s:src(i)}));return a};
const mediaMain=m=>m.t==='v'?`<video src="${esc(m.s)}" controls preload="metadata" playsinline></video>`:`<img src="${esc(m.s)}" alt="" loading="lazy">`;
function nomCard(n,o={}){
  const c=CAT[n.cat]||{en:n.cat,he:''},M=mediaOf(n);
  return `<article class="ncard${o.sel?' sel':''}${o.own?' own':''}" data-n="${esc(n.id||'')}" data-c="${esc(n.cat)}">
   <span class="nc-badge">${I.check}</span>
   <div class="nc-media">${M.length?mediaMain(M[0]):`<div class="noimg">${I[n.cat]||I.star}</div>`}</div>
   ${M.length>1?`<div class="nc-thumbs">${M.map((m,i)=>`<button type="button" class="nc-thumb${i?'':' on'}" data-t="${m.t}" data-s="${esc(m.s)}" aria-label="מדיה ${i+1}">${m.t==='v'?`<video src="${esc(m.s)}" preload="metadata" muted></video><span class="pl">▶</span>`:`<img src="${esc(m.s)}" alt="" loading="lazy">`}</button>`).join('')}</div>`:''}
   <div class="nc-body">
     <span class="nc-cat"${c.heb?HEB_STYLE:''}>${esc(c.en)}</span>
     <h4>${esc(n.title)}</h4>
     <div class="nc-meta"><span class="dep">${esc(n.team?n.team+' · ':'')}${esc(n.dept)}${(n.joint||[]).length?' + '+esc(n.joint.join(', ')):''}</span><span>· ${esc(n.client)}</span></div>
     ${n.cat==='surprise'&&n.extra&&n.extra.consultant?`<div class="nc-rise">★ ${esc(n.extra.consultant)} · במשרד מ־${esc(fmtD(n.extra.startDate))}</div>`:''}
     <p class="nc-desc">${esc(n.desc)}</p>
     ${(n.desc||'').length>170?'<button type="button" class="nc-more">קראו עוד</button>':''}
     ${n.link?`<a class="nc-link" href="${esc(n.link)}" target="_blank" rel="noopener">לצפייה בתוצר ↗</a>`:''}
     ${o.own?'<span class="nc-own">המחלקה שלך. לא ניתן לבחור.</span>':o.pick?`<div class="nc-pick"><button type="button" class="btn small pick-btn">${o.sel?'✓ נבחר':'בחירה במהלך הזה'}</button></div>`:''}
   </div></article>`;
}
document.addEventListener('click',e=>{
  if(editing)return;
  const th=e.target.closest('.nc-thumb');
  if(th){const card=th.closest('.ncard');card.querySelector('.nc-media').innerHTML=mediaMain({t:th.dataset.t,s:th.dataset.s});card.querySelectorAll('.nc-thumb').forEach(x=>x.classList.toggle('on',x===th));return}
  const mo=e.target.closest('.nc-more');
  if(mo){const card=mo.closest('.ncard');card.classList.toggle('open');mo.textContent=card.classList.contains('open')?'פחות':'קראו עוד'}
});

/* ---------- NOMINATE ---------- */
const deptOpts=sel=>DEPTS.map(d=>`<option${d===sel?' selected':''}>${esc(d)}</option>`).join('');
$('#nDept').innerHTML='<option value="">בחירה…</option>'+deptOpts();
$('#catPick').innerHTML=CATS.map(c=>`<input type="radio" name="ncat" id="nc-${c.k}" value="${c.k}" disabled><label for="nc-${c.k}"><span class="ci">${I[c.k]}</span><span><span class="lat"${c.heb?HEB_STYLE:''}>${esc(c.en)}</span><span style="display:block;font-size:.8rem;color:var(--muted)">${esc(c.he)}</span></span></label>`).join('');
let taken=[];
const LIMIT=(cat,dept)=>cat!=='commendation'?1:(dept==='צוות אייל'||dept==='צוות נוי')?2:3;
const usedBy=(cat,dept)=>taken.filter(t=>t.cat===cat&&t.dept===dept).length;
const isTaken=(cat,dept)=>usedBy(cat,dept)>=LIMIT(cat,dept);
async function loadTaken(){
  if(B.sb){if(!sbCode)return;try{taken=await rpc('mmba_taken',{p_code:sbCode})||[]}catch(e){console.error(e)}}
  else taken=live().map(n=>({cat:n.cat,dept:n.dept,joint:n.joint||[]}));
  updCats();
}
function updCats(){
  const dept=$('#nDept').value;let avail=0;
  $('#catPick').classList.toggle('locked',!dept);
  CATS.forEach(c=>{const tk=!!dept&&isTaken(c.k,dept),inp=$('#nc-'+c.k);$(`label[for=nc-${c.k}]`).classList.toggle('taken',tk);inp.disabled=tk||!dept;if(tk&&inp.checked)inp.checked=false;if(!tk)avail++});
  {const lab=$('label[for=nc-commendation]'),old=lab.querySelector('.left');if(old)old.remove();if(dept&&!isTaken('commendation',dept)){const sp=document.createElement('span');sp.className='left';sp.textContent=`נותרו ${LIMIT('commendation',dept)-usedBy('commendation',dept)} מתוך ${LIMIT('commendation',dept)}`;lab.querySelector('span:last-child').appendChild(sp)}}
  if(dept&&pendingCat){const r=$('#nc-'+pendingCat);if(r&&!r.disabled)r.checked=true;pendingCat=null}
  $('#catHint').textContent=!dept?'בחרו קודם מחלקה. קטגוריות שהמחלקה כבר הגישה אליהן לא יופיעו.':(avail?`${avail} קטגוריות פתוחות ל${dept}.`:`${dept} כבר הגישה בכל הקטגוריות.`);
  updJoint();
}
function updJoint(){
  const k=($('input[name=ncat]:checked')||{}).value,own=$('#nDept').value;
  $('#jointWrap').hidden=!(k&&CAT[k].joint);$('#teamWrap').hidden=k!=='commendation';$('#riseWrap').hidden=k!=='surprise';
  $('#catNote').hidden=!k;if(k)$('#catNote').innerHTML=`<b class="lat"${CAT[k].heb?HEB_STYLE:''}>${esc(CAT[k].en)}</b> ${esc(CAT[k].d)}`;
  const was=($('#nJoint input:checked')||{}).value||'';
  $('#nJoint').innerHTML=`<input type="radio" name="njoint" id="njnone" value=""${was?'':' checked'}><label for="njnone">בלי שותפה</label>`+DEPTS.filter(d=>d!==own).map((d,i)=>{const tk=false;return `<input type="radio" name="njoint" id="nj${i}" value="${esc(d)}"${was===d&&!tk?' checked':''}${tk?' disabled':''}><label for="nj${i}"${tk?' style="opacity:.35;text-decoration:line-through" title="כבר הגישה בקטגוריה הזו"':''}>${esc(d)}</label>`}).join('');
}
$('#nDept').addEventListener('change',updCats);$('#catPick').addEventListener('change',updJoint);
const words=s=>(s.trim().match(/\S+/g)||[]).length;
function updCount(){const v=$('#nDesc').value,w=words(v);$('#nDescCount').textContent=`${w}/250 מילים · ${v.length.toLocaleString('he-IL')}/1,250 תווים`;$('#nDescCount').classList.toggle('over',w>250)}
$('#nDesc').addEventListener('input',updCount);
let nomFiles=[],nomVideo=null,previewUrls=[];
function renderNomThumbs(){
  $('#nThumbs').innerHTML=(nomVideo?`<div class="thumb vid"><video src="${nomVideo.url}" muted preload="metadata"></video><span class="tag">סרטון · ${(nomVideo.file.size/1048576).toFixed(1)}MB</span><button type="button" data-v="1" aria-label="הסרת הסרטון">✕</button></div>`:'')+nomFiles.map((f,i)=>`<div class="thumb"><img src="${f.url}" alt=""><button type="button" data-i="${i}" aria-label="הסרת תמונה">✕</button></div>`).join('');
}
bindDrop($('#nDrop'),$('#nImgs'),files=>{
  for(const f of files){if(!/^image\//.test(f.type))continue;if(nomFiles.length>=5){toast('אפשר לצרף עד 5 תמונות');break}if(f.size>25e6){toast('תמונה מעל 25MB דולגה');continue}nomFiles.push({file:f,url:URL.createObjectURL(f)})}
  renderNomThumbs();
});
const vInput=$('#nVid'),vZone=$('#nVDrop');
function takeVideo(f){if(!f)return;if(!/^video\//.test(f.type)){toast('הקובץ אינו סרטון');return}if(f.size>20*1048576){toast(`הסרטון שוקל ${(f.size/1048576).toFixed(1)}MB. המקסימום הוא 20MB.`);return}if(nomVideo)URL.revokeObjectURL(nomVideo.url);nomVideo={file:f,url:URL.createObjectURL(f)};renderNomThumbs()}
vInput.addEventListener('change',()=>{takeVideo(vInput.files[0]);vInput.value=''});
['dragenter','dragover'].forEach(t=>vZone.addEventListener(t,e=>{e.preventDefault();vZone.classList.add('over')}));
['dragleave','drop'].forEach(t=>vZone.addEventListener(t,e=>{e.preventDefault();vZone.classList.remove('over')}));
vZone.addEventListener('drop',e=>takeVideo([...e.dataTransfer.files].find(f=>/^video\//.test(f.type))));
$('#nThumbs').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.v){URL.revokeObjectURL(nomVideo.url);nomVideo=null}else{URL.revokeObjectURL(nomFiles[+b.dataset.i].url);nomFiles.splice(+b.dataset.i,1)}renderNomThumbs()});
async function uploadVideo(file){
  if(file.size>20*1048576)throw {code:'too_large'};
  if(B.sb){
    const ext=((file.name.split('.').pop()||'mp4').toLowerCase().replace(/[^a-z0-9]/g,''))||'mp4',path=`${new Date().getFullYear()}/${uid('v')}.${ext}`;
    const {error}=await B.sb.storage.from(SB_BUCKET).upload(path,file,{contentType:file.type||'video/mp4',upsert:false});
    if(error)throw {code:'net',message:error.message};
    return B.sb.storage.from(SB_BUCKET).getPublicUrl(path).data.publicUrl;
  }
  if(B.server){if(!B.assets)throw {code:'no_assets'};const r=await B.assets.upload(file,{type:file.type||'video/mp4'});return r.id}
  throw {code:'local_video'};
}
function nomView(){
  banners();
  const ok=ss.get('mmba.nom')==='1'&&DB.settings.subOpen&&(!B.sb||!!sbCode);
  $('#nomGate').hidden=ok;$('#nomFormWrap').hidden=!ok;$('#nomDone').hidden=true;
  if(!DB.settings.subOpen)$('#nomGateErr').textContent='ההגשות סגורות כרגע.';
  if(ok)loadTaken();else updCats();
}
$('#nomGateForm').addEventListener('submit',async e=>{
  e.preventDefault();
  if(!DB.settings.subOpen){$('#nomGateErr').textContent='ההגשות סגורות כרגע.';shake($('#nomGate'));return}
  const code=$('#nomPin').value.trim();let good=false;
  if(B.sb){try{good=await rpc('mmba_check_code',{p_code:code})}catch(err){toast(errMsg(err));return}if(good)sbCode=code}
  else good=await kdf(code,SUB_SALT)===SUB_H;
  if(!good)logEvent('קוד הגשה שגוי');
  if(good){ss.set('mmba.nom','1');$('#nomPin').value='';$('#nomGateErr').textContent='';await loadTaken();swapPanels($('#nomGate'),$('#nomFormWrap'))}
  else{$('#nomGateErr').textContent='הקוד לא נכון. בדקו את המייל הפנימי ונסו שוב.';shake($('#nomGate'))}
});
function swapPanels(a,b){
  a.style.transition='opacity .35s, transform .35s';a.style.opacity='0';a.style.transform='scale(.97)';
  setTimeout(()=>{a.hidden=true;a.style.cssText='';b.hidden=false;if(!reduce)b.animate([{opacity:0,transform:'translateY(20px)'},{opacity:1,transform:'none'}],{duration:600,easing:'cubic-bezier(.2,.8,.15,1)'})},reduce?0:340);
}
$('#nomForm').addEventListener('submit',async e=>{
  e.preventDefault();
  const btn=$('#nomForm button[type=submit]');if(btn.disabled)return;
  const cat=($('input[name=ncat]:checked')||{}).value,partner=($('#nJoint input:checked')||{}).value||'';
  const f={cat,title:$('#nTitle').value.trim(),client:$('#nClient').value.trim(),dept:$('#nDept').value,desc:$('#nDesc').value.trim(),link:$('#nLink').value.trim(),by:$('#nBy').value.trim(),team:$('#nTeam').value.trim(),joint:cat&&CAT[cat].joint&&partner?[partner]:[],extra:cat==='surprise'?{consultant:$('#nRName').value.trim(),startDate:$('#nRStart').value,actionDate:$('#nRAction').value}:{}};
  const miss=[];
  if(!f.dept)miss.push('מחלקה');if(!f.cat)miss.push('קטגוריה');if(!f.title)miss.push('שם המהלך');if(!f.client)miss.push('לקוח');if(!f.by)miss.push('שם המגיש/ה');if(!f.desc)miss.push('הסבר');if(f.cat==='commendation'&&!f.team)miss.push('שם הצוות');
  if(f.cat==='surprise'){if(!f.extra.consultant)miss.push('שם היועץ/ת');if(!f.extra.startDate)miss.push('תאריך תחילת העבודה');if(!f.extra.actionDate)miss.push('תאריך המהלך')}
  if(miss.length){$('#nomErr').textContent='חסר: '+miss.join(', ');return}
  if(f.cat==='surprise'){const s0=new Date(f.extra.startDate),a0=new Date(f.extra.actionDate),lim=new Date(s0);lim.setMonth(lim.getMonth()+6);if(a0<s0||a0>lim){$('#nomErr').textContent='ב־Rising Star המהלך צריך להיות מחצי השנה הראשונה של היועץ/ת במשרד.';return}}
  if(words(f.desc)>250||f.desc.length>1250){$('#nomErr').textContent='ההסבר ארוך מ־250 מילים. קצרו אותו מעט.';return}
  if(f.link&&!/^https?:\/\//i.test(f.link)){$('#nomErr').textContent='הקישור צריך להתחיל ב־https://';return}
  if(isTaken(f.cat,f.dept)){$('#nomErr').textContent='המחלקה הזו כבר מיצתה את מכסת ההגשות בקטגוריה הזו.';updCats();return}
  if(nomVideo&&!B.sb&&!B.server){$('#nomErr').textContent='שמירת סרטונים זמינה רק כשהאתר מחובר לשרת.';return}
  $('#nomErr').textContent='';btn.disabled=true;const label=btn.innerHTML;
  const ok=await safe(async()=>{
    const imgs=await uploadMany(nomFiles.map(x=>x.file),(i,n)=>{btn.textContent=`מעלים תמונות ${i}/${n}…`});
    let video='';if(nomVideo){btn.textContent='מעלים את הסרטון…';video=await uploadVideo(nomVideo.file)}
    btn.textContent='שומרים…';
    if(B.sb){await rpc('mmba_submit',{p_code:sbCode,p:{...f,imgs,video}});sbSync()}
    else await put('noms',{id:uid('n'),ts:Date.now(),status:'pending',...f,imgs,video});
  });
  btn.disabled=false;btn.innerHTML=label;
  if(!ok){loadTaken();return}
  logEvent('הגשת מועמדות',{who:f.by,dept:f.dept,cat:f.cat,details:`${f.title} · לקוח: ${f.client}${f.joint.length?' · שותפה: '+f.joint.join(', '):''}${f.team?' · צוות: '+f.team:''}${f.extra&&f.extra.consultant?' · יועץ/ת: '+f.extra.consultant:''} · ${nomFiles.length} תמונות${nomVideo?' + סרטון':''}`});
  previewUrls.forEach(u=>URL.revokeObjectURL(u));
  previewUrls=[...nomFiles.map(x=>x.url),...(nomVideo?[nomVideo.url]:[])];
  $('#nomPreview').innerHTML=nomCard({...f,imgs:nomFiles.map(x=>x.url),video:nomVideo?nomVideo.url:''},{pick:false});
  $('#nomDoneText').textContent=`"${f.title}" נכנס/ה למרוץ על ${CAT[f.cat].en}. אחרי אישור המנכ״לים המועמדות תעלה לקלפי.`;
  const keepDept=f.dept;
  $('#nomForm').reset();nomFiles=[];nomVideo=null;renderNomThumbs();updCount();$('#nDept').value=keepDept;
  swapPanels($('#nomFormWrap'),$('#nomDone'));confetti();
  await loadTaken();
});
$('#nomAgain').addEventListener('click',()=>{swapPanels($('#nomDone'),$('#nomFormWrap'));updCats()});

/* ---------- VOTE (step-by-step wizard) ---------- */
let voter=null,picks={},step=0,wzMode='step',saveT=null,confirmed=false;
const myBallot=()=>DB.ballots.find(b=>b.id===voter.id);
// own department: greyed out everywhere; in צל״ש it is hidden altogether
const isOwn=(c,n)=>n.dept===voter.dept||(n.joint||[]).includes(voter.dept);
const choosable=c=>live().filter(n=>n.cat===c.k&&n.status==='approved'&&!(c.k==='commendation'&&isOwn(c,n)));
function voteView(){
  banners();
  if(B.sb){if(!sbCreds)voter=null}
  else{const id=ss.get('mmba.voter');voter=DB.voters.find(v=>v.id===id)||null}
  if(voter&&DB.settings.voteOpen){$('#voteGate').hidden=true;openBallot()}
  else{$('#voteGate').hidden=false;$('#ballot').hidden=true;$('#voteDone').hidden=true;if(!DB.settings.voteOpen)$('#voteGateErr').textContent='הקלפי סגורה כרגע.'}
}
function openBallot(){
  if(B.sb){picks={...(voter.picks||{})};confirmed=!!voter.confirmed}
  else{const b=myBallot();picks={...((b||{}).picks||{})};confirmed=!!(b&&b.confirmed)}
  $('#vName').textContent=voter.name;$('#vDept').textContent=voter.dept+(voter.role==='ceo'?' · מנכ״ל/ית':'');$('#vAvatar').textContent=voter.name.trim()[0]||'?';
  if(confirmed){$('#ballot').hidden=true;renderDone();$('#voteDone').hidden=false;return}
  $('#voteDone').hidden=true;$('#ballot').hidden=false;
  const first=CATS.findIndex(c=>!picks[c.k]);step=first<0?0:first;wzMode=first<0?'summary':'step';
  renderWizard();
}
$('#voteGateForm').addEventListener('submit',async e=>{
  e.preventDefault();
  if(!DB.settings.voteOpen){$('#voteGateErr').textContent='הקלפי סגורה כרגע.';shake($('#voteGate'));return}
  const u=$('#vUser').value.trim(),p=$('#vPass').value.trim();
  if(B.sb){
    try{voter=await rpc('mmba_login',{p_user:u,p_pass:p})}catch(err){$('#voteGateErr').textContent=errMsg(err);shake($('#voteGate'));return}
    sbCreds={u,p};
  }else{
    const v=DB.voters.find(x=>x.user.toLowerCase()===u.toLowerCase()||x.name===u);
    if(!v||!p||await kdf(p,v.salt)!==v.hash){$('#voteGateErr').textContent='שם המשתמש או הסיסמה לא נכונים.';shake($('#voteGate'));return}
    voter=v;ss.set('mmba.voter',v.id);
    if(!myBallot()){const now=Date.now();await safe(()=>put('ballots',{id:v.id,picks:{},ts:now,startedAt:now,confirmed:false,confirmedAt:null}))}
  }
  $('#voteGateErr').textContent='';$('#vPass').value='';
  logEvent('כניסה לקלפי',{who:voter.name+' ('+u+')',dept:voter.dept});
  $('#voteGate').style.transition='opacity .35s';$('#voteGate').style.opacity='0';
  setTimeout(()=>{$('#voteGate').hidden=true;$('#voteGate').style.cssText='';openBallot()},reduce?0:340);
});
function progress(){const n=CATS.filter(c=>picks[c.k]).length;$('#vProg').textContent=`${n} מתוך ${CATS.length} קטגוריות נבחרו`;$('#vBar').style.width=(n/CATS.length*100)+'%'}
function renderStepper(){
  $('#stepper').innerHTML=CATS.map((c,i)=>`<button type="button" class="stp${wzMode==='step'&&i===step?' on':''}${picks[c.k]?' done':''}" data-s="${i}"><i></i><span${c.heb?HEB_STYLE:''}>${esc(c.en)}</span></button>`).join('')+`<button type="button" class="stp${wzMode==='summary'?' on':''}" data-s="sum"><i></i><span style="font-family:var(--heb);letter-spacing:0">סיכום</span></button>`;
}
function summaryRows(editable){
  return CATS.map((c,i)=>{const n=DB.noms.find(x=>x.id===picks[c.k]);const im=n&&(n.imgs||[])[0];
    return `<div class="sum-row${n?'':' nopick'}"><span class="st-img">${im?`<img src="${esc(src(im))}" alt="">`:I[c.k]}</span><div><small${c.heb?HEB_STYLE:''}>${esc(c.en)}</small><b>${n?esc(n.title):'לא נבחר מהלך'}</b></div>${editable?`<button type="button" class="linkbtn" data-s="${i}">שינוי</button>`:''}</div>`}).join('');
}
function renderWizard(dir){
  progress();renderStepper();
  const W=$('#wizard');let h='';
  if(wzMode==='summary'){
    h=`<div class="wz${dir==='back'?' back':''}"><div class="sum-head"><span class="eyebrow">Your Ballot</span><h2>סיכום ההצבעה שלך</h2><p>בדקו את הבחירות. אחרי האישור לא ניתן לשנות.</p></div>
      <div class="sum-list">${summaryRows(true)}</div>
      <div class="sum-actions"><button type="button" class="btn solid" id="wzConfirm">כן, אני בטוח/ה. אישור ההצבעה <span class="arrow">←</span></button><button type="button" class="btn ghost" id="wzRestart">אני רוצה לשנות</button></div></div>`;
  }else{
    const c=CATS[step],ns=choosable(c),any=ns.some(n=>!isOwn(c,n));
    h=`<div class="wz${dir==='back'?' back':''}"><div class="wz-head"><span class="ico">${I[c.k]}</span><div><small>קטגוריה ${step+1} מתוך ${CATS.length}</small><h3${c.heb?HEB_STYLE:''}>${esc(c.en)}</h3><p>${esc(c.he)}</p></div></div>
      ${ns.length?`<div class="ncards">${ns.map(n=>nomCard(n,{pick:true,own:isOwn(c,n),sel:picks[c.k]===n.id})).join('')}</div>`:'<div class="empty">אין מועמדויות מאושרות בקטגוריה הזו.</div>'}
      <div class="wz-nav"><button type="button" class="btn small ghost" id="wzPrev"${step===0?' disabled':''}>→ הקודם</button>
        <span class="mid">${picks[c.k]?'✓ הבחירה נשמרה':any?'בחרו מהלך אחד, או <button type="button" class="linkbtn" id="wzSkip">דלגו</button>':'אין כאן מהלך שאפשר לבחור'}</span>
        <button type="button" class="btn small ${picks[c.k]||!any?'solid':'ghost'}" id="wzNext">${step===CATS.length-1?'לסיכום':'הבא'} <span class="arrow">←</span></button></div></div>`;
  }
  W.innerHTML=h;observe();
}
function go(i,dir){step=Math.max(0,Math.min(CATS.length-1,i));wzMode='step';renderWizard(dir);$('#ballot').scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'})}
function toSummary(){wzMode='summary';renderWizard();$('#ballot').scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'})}
async function saveBallot(confirm){
  if(B.sb){await rpc('mmba_vote',{p_user:sbCreds.u,p_pass:sbCreds.p,p_picks:{...picks},p_confirm:!!confirm});voter={...voter,picks:{...picks},confirmed:!!confirm}}
  else{const b=myBallot()||{},now=Date.now();await put('ballots',{id:voter.id,picks:{...picks},ts:now,startedAt:b.startedAt||now,confirmed:!!confirm,confirmedAt:confirm?now:null})}
}
function autosave(){
  clearTimeout(saveT);$('#vSaved').textContent='שומר…';
  saveT=setTimeout(async()=>{saveT=null;try{await saveBallot(false);$('#vSaved').textContent='✓ נשמר'}catch(e){$('#vSaved').textContent='';toast(errMsg(e))}},450);
}
$('#stepper').addEventListener('click',e=>{const b=e.target.closest('.stp');if(!b)return;if(b.dataset.s==='sum')toSummary();else go(+b.dataset.s,+b.dataset.s<step?'back':'')});
$('#wizard').addEventListener('click',async e=>{
  const t=e.target;
  const pb=t.closest('.pick-btn');
  if(pb){const card=pb.closest('.ncard');if(card.classList.contains('own'))return;const c=card.dataset.c,n=card.dataset.n;
    if(picks[c]===n)delete picks[c];else picks[c]=n;
    {const nn=DB.noms.find(x=>x.id===n);logEvent(picks[c]?'בחירה בקלפי':'ביטול בחירה',{who:voter.name,dept:voter.dept,cat:c,details:nn?nn.title:'',ref:n})}
    $$('#wizard .ncard').forEach(x=>{const on=x.dataset.n===picks[c];x.classList.toggle('sel',on);const btn=x.querySelector('.pick-btn');if(btn)btn.textContent=on?'✓ נבחר':'בחירה במהלך הזה'});
    if(picks[c]&&!reduce)card.animate([{transform:'scale(.97)'},{transform:'scale(1.02)'},{transform:'scale(1)'}],{duration:450,easing:'cubic-bezier(.2,.8,.15,1)'});
    const mid=$('#wizard .mid');if(mid)mid.innerHTML=picks[c]?'✓ הבחירה נשמרה':'בחרו מהלך אחד, או <button type="button" class="linkbtn" id="wzSkip">דלגו</button>';
    const nx=$('#wzNext');if(nx){nx.classList.toggle('solid',!!picks[c]);nx.classList.toggle('ghost',!picks[c])}
    progress();renderStepper();autosave();return}
  if(t.closest('#wzPrev')){go(step-1,'back');return}
  if(t.closest('#wzNext')||t.closest('#wzSkip')){if(step===CATS.length-1)toSummary();else go(step+1);return}
  if(t.closest('#wzRestart')){go(0,'back');return}
  const ls=t.closest('.linkbtn[data-s]');if(ls){go(+ls.dataset.s,'back');return}
  const cf=t.closest('#wzConfirm');
  if(cf){cf.disabled=true;clearTimeout(saveT);
    const ok=await safe(()=>saveBallot(true));cf.disabled=false;if(!ok)return;
    confirmed=true;logEvent('אישור הצבעה',{who:voter.name,dept:voter.dept,details:CATS.map(c=>{const nn=DB.noms.find(x=>x.id===picks[c.k]);return nn?c.en+': '+nn.title:null}).filter(Boolean).join(' | ')||'ללא בחירות'});renderDone();swapPanels($('#ballot'),$('#voteDone'));confetti();window.scrollTo({top:0,behavior:reduce?'auto':'smooth'})}
});
function renderDone(){$('#doneList').innerHTML=summaryRows(false)}
function logoutVoter(){ss.del('mmba.voter');voter=null;sbCreds=null;picks={};$('#ballot').hidden=true;$('#voteDone').hidden=true;$('#voteGate').hidden=false}
$('#vLogout').addEventListener('click',logoutVoter);$('#vLogout2').addEventListener('click',logoutVoter);

/* ---------- client chat (WhatsApp style) ---------- */
const MSGS=`מנהל שיווק|תקשיב, שיחקת אותה! איזה מהלך מבריק!
מנכ"לית|וואו! כל המשפחה החמיאה לי על הכתבה!
סמנכ"ל אסטרטגיה|זה היה בחדשות 12?! איך הצלחתם להכניס את זה?
דוברת|אין לי מילים. פשוט אין לי מילים.
מנכ"ל|חברים, אתם פשוט אלופים. איזה ביצוע!
מנהלת סושיאל|אני לא מפסיקה לרענן את הפיד. המספרים מטורפים!
סמנכ"לית שיווק|זה בדיוק מה שדמיינתי, רק הרבה יותר טוב.
יו"ר דירקטוריון|קיבלתי כבר חמש שיחות על הכתבה. שאפו ענק!
מנהל תקשורת|איך לעזאזל הצלחתם להביא את הכתב הזה?!
מנהלת מותג|אני מאוהבת בקמפיין הזה. באמת.
מנכ"לית|יש מצב שאתם קוראים לי מחשבות?
דובר|אתם מבינים שהצלחתם להפוך את כל השיח?!
סמנכ"ל דיגיטל|המספרים האלה אמיתיים? תבדקו שוב!
מנהלת משאבי אנוש|אפילו העובדים הכי ציניים אצלנו שיתפו את הסרטון.
מנהל שיווק|וואלה, הפתעתם אותי. ובגדול.
מנכ"ל|זה מסוג הדברים שבגללם בחרנו לעבוד איתכם.
מנהלת תקשורת|התקשורת פשוט עפה על הסיפור הזה!
סמנכ"לית אסטרטגיה|הברקה. אין מילה אחרת.
מנהל דיגיטל|רגע, זה אורגני?! בלי שקל מדיה?!
יו"ר עמותה|הצלחתם לגעת בלב של אנשים. זה לא מובן מאליו.
מנהלת שיווק|חצי מהחברה שלחה לי את הפוסט שלכם.
מנכ"לית|בעלי שאל אותי מי הגאון שחשב על זה.
סמנכ"ל תקשורת|אני 20 שנה בתחום ולא ראיתי דבר כזה.
מנהלת סושיאל|תעצרו הכול. אנחנו ויראליים!
מנכ"ל|לא יודע איך עשיתם את זה, אבל תמשיכו.
מנהלת מותג|זאת הפעם הראשונה שקריאייטיב עובר אצלנו בלי תיקונים.
סמנכ"ל שיווק|זה לא קמפיין, זו יצירת אמנות.
דוברת|אתם מבינים שהפכנו ממשבר להזדמנות?
מנהל קשרי ממשל|אפילו השר התייחס לזה בנאום שלו!
מנכ"לית|אתם גורמים לי להיראות ממש טוב. תודה!
מנהל שיווק|אני רוצה שתדעו שהמנכ"ל לא מפסיק לדבר עליכם.
סמנכ"ל דיגיטל|איזה דיוק. כל מילה, כל פריים, כל שנייה.
מנהלת תקשורת|שלושה עיתונאים התקשרו אליי מיוזמתם. שלושה!
מנכ"ל|זה היה שווה כל שקל.
מנהלת סושיאל|תגידו, איך אתם תמיד יודעים מה יעבוד?
סמנכ"לית שיווק|הרמתם לנו פה משהו ברמה בינלאומית.
מנהל מותג|אני מודה, לא האמנתי ברעיון בהתחלה. טעיתי.
דובר|בחיים לא קיבלתי כל כך הרבה תגובות חיוביות.
מנכ"לית עמותה|הצלחתם להסביר בדקה משהו שאנחנו מנסים להסביר כבר שנים.
מנהל דיגיטל|הקמפיין הזה פשוט שבר את האלגוריתם.
סמנכ"ל אסטרטגיה|זה לא רק חכם. זה חכם בטירוף.
מנהלת שיווק|מתי הספקתם לעשות את כל זה?!
מנכ"ל|קחו את המחמאה הכי גדולה: אין לי הערות.
מנהלת תוכן|הכותרת הזאת גאונית. פשוט גאונית.
סמנכ"לית תקשורת|הבאתם אותנו לפריים טיים. לא פחות.
מנהל שיווק|כבר שאלו אותי מי המשרד שעשה את זה.
מנכ"לית|תמסרו לכל הצוות שאתם מדהימים.
דוברת|סוף סוף מישהו שהבין בדיוק מה אני צריכה.
מנהלת משפיענים|איך הצלחתם להביא את כולם לשתף פעולה?
סמנכ"ל דיגיטל|זה הסרטון הכי טוב שהפקנו אי פעם.
מנכ"ל|פשוט תענוג לעבוד עם אנשים שיודעים מה הם עושים.
מנהלת שיווק|אתם לא נורמליים! במובן הכי טוב שיש.
מנהל תקשורת|הכותרת הראשית?! אתם רציניים?!
סמנכ"לית אסטרטגיה|לקחתם רעיון בינוני והפכתם אותו למהלך ענק.
מנהלת סושיאל|תקשיבו, התגובות לא מפסיקות להגיע.
מנכ"לית|הבוקר בישיבת ההנהלה כולם דיברו על הסרטון.
מנהל מותג|זאת בדיוק השפה שחיפשנו כבר שנתיים.
דובר|הייתי בטוח שזה אבוד. הצלתם אותנו.
סמנכ"ל שיווק|אין. אתם פשוט יודעים להביא תוצאות.
מנהלת דיגיטל|העלינו לפני עשר דקות וכבר יש אלפי צפיות!
מנכ"ל|פעם ראשונה שאני נהנה לקרוא מצגת אסטרטגיה.
מנהלת תקשורת|אפילו המתחרים שלנו מפרגנים. זה אומר הכול.
מנהל שיווק|איך לא חשבנו על זה קודם?!
סמנכ"לית תוכן|זה חד, מדויק, מצחיק ובדיוק במידה.
יו"ר|התקשרו אליי מהדירקטוריון במיוחד כדי להחמיא.
מנהלת משפיענים|לא מאמינה שהוא הסכים להשתתף בקמפיין!
מנכ"לית|אני כבר רוצה להראות את זה לכולם.
מנהל דיגיטל|הנתונים האלה הולכים ישר למצגת של הדירקטוריון.
דוברת|הצלחתם להכניס את המסר שלנו בלי שזה ירגיש כמו פרסומת.
סמנכ"ל שיווק|אם הייתי יכול, הייתי נותן לכם עוד תקציב רק על הרעיון.
מנהלת מותג|לא הפסקתי לחייך לאורך כל הסרטון.
מנכ"ל|אתם יודעים מה הכי יפה? שזה פשוט עובד.
מנהלת תקשורת|קיבלנו סיקור שבחיים לא היינו מקבלים לבד.
סמנכ"לית אסטרטגיה|סוף סוף מישהו שמבין גם את התמונה הגדולה וגם את הפרטים.
מנהל שיווק|זה הרבה מעבר למה שביקשנו.
מנהלת סושיאל|אני בשוק מכמות השיתופים. בשוק.
מנכ"לית|אמא שלי ראתה אותי בטלוויזיה והתקשרה לבכות מהתרגשות.
דובר|הצלחתם לגרום לעיתונאי הכי סקפטי להתעניין בסיפור.
מנהל קריאייטיב|הלוואי שאני הייתי חושב על זה.
סמנכ"ל דיגיטל|זה הקמפיין עם הביצועים הכי טובים שלנו השנה.
מנכ"ל|יש לכם כישרון לקחת כאוס ולעשות ממנו סדר.
מנהלת שיווק|תגידו לצוות הקריאייטיב שאני רוצה לחבק אותם.
מנהל תקשורת|רגע, גם בגלובס וגם בכלכליסט באותו יום?!
סמנכ"לית שיווק|איזה מהלך אלגנטי. בדיוק ככה עושים את זה.
מנהלת משפיענים|הבחירה במשפיענית הזאת הייתה בול בפוני.
מנכ"לית|הפעם הצלחתם להפתיע אפילו אותי.
מנהל מותג|כל מי שראה את הסרטון שאל איפה עשינו אותו.
דוברת|תודה שהייתם זמינים גם בשעה הלא הגיונית הזאת.
סמנכ"ל אסטרטגיה|בשקף אחד הסברתם מה שאנחנו לא מצליחים להסביר ב-40.
מנהלת דיגיטל|אני רוצה את אותו צוות גם בקמפיין הבא. אין דיון.
מנכ"ל|זה ההבדל בין ספק לבין שותף אמיתי.
מנהלת תקשורת|ידעתם בדיוק מתי להוציא את ההודעה. תזמון מושלם.
מנהל שיווק|תקשיבו, זה הולך להיות קייס סטאדי.
סמנכ"לית משאבי אנוש|בחיים לא ראיתי את העובדים ככה גאים במקום העבודה.
מנהל סושיאל|יש לנו יותר תגובות מאשר לעמוד של המתחרה בכל החודש!
מנכ"לית|אני חושבת שזה המהלך הכי טוב שעשינו השנה.
מנהלת מותג|זה מרגיש כמו קמפיין של מותג ענק. איזה כיף!
דובר|תוך שעה שיניתם לגמרי את הכותרות. לא ייאמן.
סמנכ"ל שיווק|איך אתם מצליחים להמציא את עצמכם מחדש בכל פעם?
מנכ"לית|אני אומרת את זה מכל הלב: איזה מזל שאתם איתנו.`.split('\n').map(l=>l.split('|'));
(function chat(){
  const body=$('#chatBody'),recent=[];
  const rnd=n=>{const a=new Uint32Array(1);crypto.getRandomValues(a);return a[0]%n};
  const clock=(minsAgo=0)=>{const d=new Date(Date.now()-minsAgo*60000);return pad(d.getHours())+':'+pad(d.getMinutes())};
  const next=()=>{let i;do{i=rnd(MSGS.length)}while(recent.includes(i));recent.push(i);if(recent.length>30)recent.shift();return MSGS[i]};
  const bubble=(m,minsAgo)=>{const el=document.createElement('div');el.className='bub';el.innerHTML=`<b>${esc(m[0])}</b><p>${esc(m[1])}</p><time>${clock(minsAgo)}</time>`;return el};
  const trim=()=>{const bs=[...body.querySelectorAll('.bub:not(.out)')];while(bs.length>4){const b=bs.shift();b.classList.add('out');setTimeout(()=>b.remove(),560)}};
  [7,4,2,1].forEach(ago=>{const b=bubble(next(),ago);b.style.animation='none';body.appendChild(b)});
  function tick(){
    if(document.hidden||(cur!=='home'&&cur!=='edit-home')){setTimeout(tick,1500);return}
    if(reduce){body.appendChild(bubble(next()));trim();setTimeout(tick,4000);return}
    const ty=document.createElement('div');ty.className='bub typing';ty.innerHTML='<i></i><i></i><i></i>';body.appendChild(ty);trim();$('#chatStatus').textContent='מקליד/ה…';
    setTimeout(()=>{ty.replaceWith(bubble(next()));$('#chatStatus').textContent='מחוברים עכשיו';trim();setTimeout(tick,2100+Math.random()*900)},1150);
  }
  setTimeout(tick,1600);
})();

/* ---------- HALL ---------- */
let hallYear=null;
function hallView(){
  const yrs=[...new Set(DB.hof.map(h=>+h.year))].sort((a,b)=>b-a);
  if(!yrs.includes(hallYear))hallYear=yrs[0];
  $('#yearTabs').innerHTML=yrs.map(y=>`<button class="tab${y===hallYear?' on':''}" data-y="${y}" role="tab" aria-selected="${y===hallYear}"><span class="lat">${y}</span></button>`).join('');
  const deps=[...new Set(DB.hof.filter(h=>+h.year===hallYear).map(h=>h.dept))];
  const curD=$('#deptFilter').value;
  $('#deptFilter').innerHTML='<option value="">כל המחלקות והצוותים</option>'+deps.map(d=>`<option${d===curD?' selected':''}>${esc(d)}</option>`).join('');
  renderWinners();
}
function renderWinners(){
  const dep=$('#deptFilter').value;
  const list=DB.hof.filter(h=>+h.year===hallYear&&(!dep||h.dept===dep));
  $('#winners').innerHTML=list.length?list.map((h,i)=>{const im=imgsOf(h)[0];return `<article class="win rv${im?' has-img':''}" style="transition-delay:${(i%2)*.08}s">${im?`<figure class="win-img"><img src="${esc(src(im))}" alt="" loading="lazy"></figure>`:''}<div class="medal">${I.star}</div><div style="min-width:0"><div class="w-top"><span class="w-cat">${esc(h.cat)}</span><span class="w-yr">WINNER · ${esc(h.year)}</span></div><h3>${esc(h.title)}</h3><div class="w-dep">${esc(h.dept)}</div></div></article>`}).join(''):`<div class="empty" style="grid-column:1/-1">${B.ready?'אין זוכים להצגה.':'טוענים את היכל התהילה…'}</div>`;
  observe();bindTilt();
}
$('#yearTabs').addEventListener('click',e=>{const b=e.target.closest('.tab');if(!b)return;hallYear=+b.dataset.y;$('#deptFilter').value='';hallView()});
$('#deptFilter').addEventListener('change',renderWinners);

/* ---------- ADMIN ---------- */
const isAdmin=()=>ss.get('mmba.adm')==='1'&&(!B.sb||!!sbAdminPass);
const A=p=>({p_admin:sbAdminPass,...p});
async function after(){if(B.sb)await sbSync()}
function adminView(){$('#admGate').hidden=isAdmin();$('#admin').hidden=!isAdmin();if(isAdmin())renderAdmin()}
$('#admGateForm').addEventListener('submit',async e=>{
  e.preventDefault();
  const pw=$('#admPin').value.trim();let good=false;
  if(B.sb){try{await rpc('mmba_admin_dump',{p_admin:pw});good=true}catch(err){if(err.code!=='bad_admin'){toast(errMsg(err));return}}
    if(good){sbAdminPass=pw;ss.set('mmba.admp',pw);await sbSync()}}
  else good=await kdf(pw,ADM_SALT)===ADM_H;
  logEvent(good?'כניסת מנהל':'ניסיון כניסה שגוי לאזור הניהול',{who:'מנהל'});
  if(good){ss.set('mmba.adm','1');$('#admPin').value='';$('#admErr').textContent='';renderAdmin();swapPanels($('#admGate'),$('#admin'))}
  else{$('#admErr').textContent='סיסמה שגויה.';shake($('#admGate'))}
});
let pane='overview';
$('#admNav').addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.dataset.p==='logout'){ss.del('mmba.adm');ss.del('mmba.admp');sbAdminPass=null;if(B.sb)sbSync();adminView();return}
  pane=b.dataset.p;
  $$('#admNav button').forEach(x=>x.classList.toggle('on',x===b));
  $$('.apane').forEach(p=>p.classList.toggle('on',p.id==='p-'+pane));
  renderAdmin();
});
let nomFilt='all',editUserId=null;
const thumbsHTML=(imgs,owner,col)=>`<div class="mini">${(imgs||[]).map((r,i)=>`<div class="thumb"><img src="${esc(src(r))}" alt="" loading="lazy">${owner?`<button type="button" data-a="delimg" data-col="${col}" data-id="${owner}" data-i="${i}" aria-label="הסרת תמונה">✕</button>`:''}</div>`).join('')}</div>`;
const fmtTs=ts=>ts?new Date(ts).toLocaleString('he-IL',{dateStyle:'short',timeStyle:'short'}):'';
const SL={pending:'ממתינה',approved:'מאושרת',rejected:'נדחתה'};
function renderAdmin(){
  if(!isAdmin())return;
  const L=live(),D=DB.noms.filter(n=>n.deletedAt);
  $('#cNoms').textContent=L.length;$('#cVoters').textContent=DB.voters.length;$('#cHof').textContent=DB.hof.length;
  $('#storeBadge').innerHTML=(B.server||B.sb)?'<span class="badge-store srv">מחובר לשרת מאובטח · הנתונים משותפים לכל המשתמשים</span>':'<span class="badge-store loc">מצב תצוגה מקדימה · הנתונים נשמרים בדפדפן זה בלבד</span>';
  const voted=DB.ballots.filter(b=>b.confirmed&&DB.voters.some(v=>v.id===b.id)).length;
  $('#kpis').innerHTML=[['מועמדויות',L.length],['ממתינות לאישור',L.filter(n=>n.status==='pending').length],['מצביעים רשומים',DB.voters.length],['אישרו הצבעה',voted+(DB.voters.length?` <small style="font-size:.9rem;color:var(--muted)">(${Math.round(voted/DB.voters.length*100)}%)</small>`:'')]].map(([l,v])=>`<div class="kpi"><small>${l}</small><b>${v}</b></div>`).join('');
  const max=Math.max(1,...CATS.map(c=>L.filter(n=>n.cat===c.k).length));
  $('#ovCats').innerHTML=CATS.map(c=>{const t=L.filter(n=>n.cat===c.k),a=t.filter(n=>n.status==='approved').length;return `<div class="res-row" style="grid-template-columns:minmax(0,1fr) minmax(0,2fr) 60px"><div class="nm"><b class="lat" style="font-weight:400">${esc(c.en)}</b></div><div class="bars"><div class="e"><span>סה״כ</span><i style="width:${t.length/max*100}%"></i></div><div class="c"><span>מאושרות</span><i style="width:${a/max*100}%"></i></div></div><div class="score" style="font-size:1.1rem">${a}/${t.length}</div></div>`}).join('');
  // nominations + deleted archive
  const fl=[['all','הכל',L.length],['pending','ממתינות',L.filter(n=>n.status==='pending').length],['approved','מאושרות',L.filter(n=>n.status==='approved').length],['rejected','נדחו',L.filter(n=>n.status==='rejected').length],['deleted','נמחקו',D.length]];
  $('#nomFilter').innerHTML=fl.map(([k,l,c])=>`<button class="tab${nomFilt===k?' on':''}${k==='deleted'?' tab-del':''}" data-f="${k}">${l} · ${c}</button>`).join('');
  const rows=nomFilt==='deleted'?D:L.filter(n=>nomFilt==='all'||n.status===nomFilt);
  $('#nomRows').innerHTML=rows.length?rows.map(n=>`<tr${n.deletedAt?' class="row-del"':''}><td><span class="lat">${esc((CAT[n.cat]||{}).en||n.cat)}</span></td><td style="min-width:240px"><b>${esc(n.title)}</b><div style="font-size:.82rem;color:var(--dim)">${esc(n.client)}${n.team?' · '+esc(n.team):''}${n.extra&&n.extra.consultant?` · ★ ${esc(n.extra.consultant)} (במשרד מ־${esc(fmtD(n.extra.startDate))}, מהלך ${esc(fmtD(n.extra.actionDate))})`:''}${n.link?` · <a href="${esc(n.link)}" target="_blank" rel="noopener" style="color:var(--gold)">קישור</a>`:''}${n.video?` · <a href="${esc(src(n.video))}" target="_blank" rel="noopener" style="color:var(--gold)">סרטון</a>`:''}</div><div style="font-size:.82rem;color:var(--muted);margin:4px 0 6px;max-width:46ch">${esc(n.desc)}</div>${thumbsHTML(n.imgs)}</td><td>${esc(n.dept)}${n.joint&&n.joint.length?`<div style="font-size:.78rem;color:var(--dim)">+ ${n.joint.map(esc).join(', ')}</div>`:''}</td><td>${esc(n.by)}<div style="font-size:.75rem;color:var(--dim)">${fmtTs(n.ts)}</div></td><td>${n.deletedAt?`<span class="st rejected">נמחקה</span><div style="font-size:.75rem;color:var(--dim);margin-top:4px">${fmtTs(n.deletedAt)}<br>(הייתה ${SL[n.status]})</div>`:`<span class="st ${n.status}">${SL[n.status]}</span>`}</td><td><div class="row-actions">${n.deletedAt?`<button class="icon-btn ok" data-a="restorenom" data-id="${n.id}">שחזור</button>`:`${n.status!=='approved'?`<button class="icon-btn ok" data-a="approve" data-id="${n.id}">אישור</button>`:''}${n.status!=='rejected'?`<button class="icon-btn bad" data-a="reject" data-id="${n.id}">דחייה</button>`:''}<button class="icon-btn bad" data-a="delnom" data-id="${n.id}">מחיקה</button>`}</div></td></tr>`).join(''):`<tr><td colspan="6"><div class="empty" style="border:0">${nomFilt==='deleted'?'לא נמחקו מועמדויות.':'אין מועמדויות בסינון הזה.'}</div></td></tr>`;
  $('#delNote').hidden=nomFilt!=='deleted';
  if(!$('#vfDept').options.length){$('#vfDept').innerHTML=deptOpts();$('#hfDept').innerHTML=deptOpts()}
  // voters
  const bmap=Object.fromEntries(DB.ballots.map(b=>[b.id,b])),nmap=Object.fromEntries(DB.noms.map(n=>[n.id,n]));
  const dur=ms=>{const m=Math.round(ms/60000);return m<1?'פחות מדקה':m<60?`${m} דק׳`:`${Math.floor(m/60)} ש׳ ${m%60} דק׳`};
  $('#voterRows').innerHTML=DB.voters.length?DB.voters.map(v=>{const b=bmap[v.id],np=b?Object.keys(b.picks||{}).length:0;
    const st=!b?'<span class="st rejected">לא הצביע/ה</span>':b.confirmed?'<span class="st approved">אישר/ה הצבעה</span>':`<span class="st pending">בתהליך · ${np}/${CATS.length}</span>`;
    const fin=b&&b.confirmed?`<details><summary>הבחירות הסופיות</summary><ul>${CATS.map(c=>(b.picks||{})[c.k]?`<li><span class="lat">${esc(c.en)}</span> · ${esc((nmap[b.picks[c.k]]||{}).title||'(נמחקה)')}</li>`:'').join('')||'<li>לא נבחרו מהלכים</li>'}</ul></details>`:'';
    const time=b&&b.confirmed&&b.startedAt&&b.confirmedAt?dur(b.confirmedAt-b.startedAt):'—';
    const ucell=editUserId===v.id?`<span class="user-edit"><input type="text" id="ueInput" value="${esc(v.user)}" dir="ltr" maxlength="40" aria-label="שם משתמש חדש"><button class="icon-btn ok" data-a="saveuser" data-id="${v.id}">שמירה</button><button class="icon-btn" data-a="canceluser" data-id="${v.id}">ביטול</button></span>`:`<span class="cred">${esc(v.user)}</span> <button class="icon-btn mini-btn" data-a="edituser" data-id="${v.id}" aria-label="עריכת שם המשתמש">עריכה</button>`;
    return `<tr><td><b>${esc(v.name)}</b></td><td>${ucell}</td><td>${esc(v.dept)}</td><td><span class="role${v.role==='ceo'?' ceo':''}">${v.role==='ceo'?'מנכ״ל/ית':'עובד/ת'}</span></td><td><div class="vstat">${st}${fin}</div></td><td style="font-variant-numeric:tabular-nums">${time}</td><td><div class="row-actions">${b&&b.confirmed?`<button class="icon-btn" data-a="reopen" data-id="${v.id}">פתיחה מחדש</button>`:''}<button class="icon-btn" data-a="newpass" data-id="${v.id}">סיסמה חדשה</button><button class="icon-btn bad" data-a="delvoter" data-id="${v.id}">הסרה</button></div></td></tr>`}).join(''):'<tr><td colspan="7"><div class="empty" style="border:0">אין מצביעים עדיין. הוסיפו את הראשון בטופס למעלה.</div></td></tr>';
  if(editUserId){const i=$('#ueInput');if(i&&document.activeElement!==i){i.focus();i.select()}}
  renderResults();
  $('#catNames').innerHTML=CATS.map(c=>`<option value="${esc(c.en)}">`).join('')+'<option value="Diamond Item"><option value="Iron Swords">';
  $('#hofRows').innerHTML=DB.hof.length?DB.hof.map(h=>`<tr><td class="lat">${esc(h.year)}</td><td><span class="lat">${esc(h.cat)}</span></td><td style="min-width:220px"><b>${esc(h.title)}</b></td><td>${esc(h.dept)}</td><td>${thumbsHTML(h.imgs,h.id,'hof')}</td><td><div class="row-actions"><button class="icon-btn" data-a="addimg" data-id="${h.id}">+ תמונה</button><button class="icon-btn bad" data-a="delhof" data-id="${h.id}">מחיקה</button></div></td></tr>`).join(''):'<tr><td colspan="6"><div class="empty" style="border:0">אין זוכים עדיין.</div></td></tr>';
  $('#sSub').checked=!!DB.settings.subOpen;$('#sVote').checked=!!DB.settings.voteOpen;
  if(document.activeElement!==$('#logUrl'))$('#logUrl').value=DB.settings.logUrl||'';
  if(document.activeElement!==$('#logToken'))$('#logToken').value=DB.settings.logToken||'';
  $('#logState').textContent=DB.settings.logUrl?'מחובר: כל פעולה באתר נרשמת בגיליון':'לא מחובר';
  $('#logState').className='log-state'+(DB.settings.logUrl?' on':'');
  renderHistory();
}
function renderResults(){
  const vmap=Object.fromEntries(DB.voters.map(v=>[v.id,v]));
  $('#resScore').innerHTML=CATS.map(c=>{
    const ns=live().filter(n=>n.cat===c.k&&n.status==='approved');
    let eT=0,cT=0;const e={},k={};
    for(const b of DB.ballots){const v=vmap[b.id];if(!v||!b.confirmed)continue;const p=(b.picks||{})[c.k];if(!p)continue;if(v.role==='ceo'){k[p]=(k[p]||0)+1;cT++}else{e[p]=(e[p]||0)+1;eT++}}
    const rows=ns.map(n=>{const es=eT?(e[n.id]||0)/eT:0,cs=cT?(k[n.id]||0)/cT:0;return {n,ev:e[n.id]||0,cv:k[n.id]||0,es,cs,score:(es+cs)/(((eT?1:0)+(cT?1:0))||1)}}).sort((a,b)=>b.score-a.score);
    const lead=rows.length&&rows[0].score>0?rows[0].n.id:null;
    return `<div class="res-cat"><h3${c.heb?HEB_STYLE:''}>${esc(c.en)}</h3><div class="rc-sub">${eT} קולות עובדים · ${cT} קולות מנכ״לים</div>${rows.length?rows.map(r=>`<div class="res-row${r.n.id===lead?' lead':''}"><div class="nm"><b title="${esc(r.n.title)}">${esc(r.n.title)}</b><small>${esc(r.n.dept)}</small></div><div class="bars"><div class="e"><span>עובדים ${r.ev}</span><i style="width:${r.es*100}%"></i></div><div class="c"><span>מנכ״לים ${r.cv}</span><i style="width:${r.cs*100}%"></i></div></div><div class="score">${(r.score*100).toFixed(0)}%</div></div>`).join(''):'<div class="empty">אין מועמדויות מאושרות.</div>'}</div>`;
  }).join('')+'<p class="note">נספרות רק הצבעות שאושרו. כשאין עדיין קולות מנכ״לים, הניקוד מבוסס על קולות העובדים בלבד (ולהפך).</p>';
  const nm=Object.fromEntries(DB.noms.map(n=>[n.id,n]));
  const bl=DB.ballots.filter(b=>vmap[b.id]&&Object.keys(b.picks||{}).length).sort((a,b)=>b.ts-a.ts);
  $('#resBallots').innerHTML=bl.length?bl.map(b=>{const v=vmap[b.id];return `<div class="bl"><div class="bl-h"><div><b>${esc(v.name)}</b> <span style="color:var(--dim);font-size:.85rem">· ${esc(v.dept)}</span></div><div style="display:flex;gap:8px;align-items:center">${b.confirmed?'<span class="st approved">אישר/ה</span>':'<span class="st pending">טיוטה</span>'}<span class="role${v.role==='ceo'?' ceo':''}">${v.role==='ceo'?'מנכ״ל/ית':'עובד/ת'}</span><span style="color:var(--dim);font-size:.8rem">${fmtTs(b.ts)}</span></div></div><ul>${CATS.map(c=>(b.picks||{})[c.k]?`<li><span class="lat">${esc(c.en)}</span> · ${esc((nm[b.picks[c.k]]||{}).title||'(נמחקה)')}</li>`:'').join('')}</ul></div>`}).join(''):'<div class="empty">עוד לא נשלחו פתקים.</div>';
}
$('#resTabs').addEventListener('click',e=>{const b=e.target.closest('.tab');if(!b)return;$$('#resTabs .tab').forEach(x=>x.classList.toggle('on',x===b));$('#resScore').hidden=b.dataset.t!=='score';$('#resBallots').hidden=b.dataset.t!=='ballots'});
$('#nomFilter').addEventListener('click',e=>{const b=e.target.closest('.tab');if(!b)return;nomFilt=b.dataset.f;renderAdmin()});
function showCred(v,pass){
  $('#newCred').innerHTML=`<div class="new-cred"><div><b>פרטי כניסה עבור ${esc(v.name)}</b><p>שם משתמש <span class="cred">${esc(v.user)}</span> · סיסמה <span class="cred">${esc(pass)}</span> · הסיסמה נשמרת מוצפנת ותוצג רק עכשיו.</p></div><div style="display:flex;gap:8px"><button class="btn small solid" type="button" id="credCopy">העתקה</button><button class="btn small ghost" type="button" id="credClose">סגירה</button></div></div>`;
  $('#credCopy').onclick=()=>{const t=`ממב״א 2026 · כניסה לקלפי\nשם משתמש: ${v.user}\nסיסמה: ${pass}`;(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(()=>toast('הפרטים הועתקו'),()=>toast('סמנו את הפרטים והעתיקו ידנית'))};
  $('#credClose').onclick=()=>{$('#newCred').innerHTML=''};
}
// username: generated from the name, editable before saving
let userTouched=false;
const otherUsers=id=>DB.voters.filter(v=>v.id!==id).map(v=>v.user);
$('#vfName').addEventListener('input',()=>{if(!userTouched)$('#vfUser').value=genUser($('#vfName').value,otherUsers())});
$('#vfUser').addEventListener('input',()=>{userTouched=!!$('#vfUser').value.trim()});
const USER_RE=/^[a-z0-9._-]{3,40}$/;
$('#voterForm').addEventListener('submit',async e=>{
  e.preventDefault();const name=$('#vfName').value.trim();if(!name)return;
  const pass=$('#vfPass').value.trim()||randStr(6),dept=$('#vfDept').value,role=$('#vfRole').value;
  const user=($('#vfUser').value.trim()||genUser(name,otherUsers())).toLowerCase();
  if(!USER_RE.test(user)){toast(errMsg({code:'bad_user'}));return}
  if(DB.voters.some(v=>v.user===user)){toast('שם המשתמש הזה כבר קיים. בחרו שם אחר.');return}
  let v;
  const ok=await safe(async()=>{
    if(B.sb){const id=await rpc('mmba_admin_add_voter',A({p_name:name,p_user:user,p_pass:pass,p_dept:dept,p_role:role}));v={id,name,user,dept,role};await after()}
    else{const salt=randStr(16);v={id:uid('v'),name,user,salt,hash:await kdf(pass,salt),dept,role};await put('voters',v)}
  });
  if(ok){logEvent('הוספת מצביע',{who:'מנהל',dept,details:`${name} · ${user} · ${role==='ceo'?'מנכ״ל/ית':'עובד/ת'}`});$('#vfName').value='';$('#vfPass').value='';$('#vfUser').value='';userTouched=false;renderAdmin();showCred(v,pass)}
});
$('#hofForm').addEventListener('submit',async e=>{
  e.preventDefault();const y=parseInt($('#hfYear').value,10),c=$('#hfCat').value.trim(),t=$('#hfTitle').value.trim();
  if(!y||!c||!t){toast('מלאו שנה, קטגוריה ומהלך');return}
  const btn=$('#hofForm button[type=submit]');btn.disabled=true;
  const files=[...$('#hfImgs').files];
  const ok=await safe(async()=>{const imgs=await uploadMany(files,(i,n)=>{btn.textContent=`${i}/${n}`});
    if(B.sb){await rpc('mmba_admin_save_hof',A({p:{year:y,cat:c,dept:$('#hfDept').value,title:t,imgs}}));await after()}
    else await put('hof',{id:uid('h'),year:y,cat:c,dept:$('#hfDept').value,title:t,imgs,order:Date.now()})},'הזוכה נוסף להיכל התהילה');
  btn.disabled=false;btn.textContent='הוספה';
  if(ok){logEvent('הוספת זוכה להיכל התהילה',{who:'מנהל',dept:$('#hfDept').value,details:`${y} · ${c} · ${t}`});$('#hfTitle').value='';$('#hfCat').value='';$('#hfImgs').value='';renderAdmin();schedule()}
});
const updHof=async h=>{if(B.sb){await rpc('mmba_admin_save_hof',A({p:{id:h.id,year:h.year,cat:h.cat,dept:h.dept,title:h.title,imgs:h.imgs||[]}}));await after()}else await put('hof',h)};
let addImgTarget=null;
$('#hofAdd').addEventListener('change',async()=>{
  const h=DB.hof.find(x=>x.id===addImgTarget),files=[...$('#hofAdd').files];$('#hofAdd').value='';if(!h||!files.length)return;
  toast('מעלים תמונות…');
  if(await safe(async()=>{const imgs=await uploadMany(files);await updHof({...h,imgs:[...(h.imgs||[]),...imgs]})},'התמונות נשמרו'))logEvent('הוספת תמונה לזוכה',{who:'מנהל',details:`${h.year} · ${h.title} · ${files.length} תמונות`});
  renderAdmin();schedule();
});
$('#admin').addEventListener('keydown',e=>{if(e.target.id==='ueInput'){if(e.key==='Enter'){e.preventDefault();$('[data-a=saveuser]').click()}if(e.key==='Escape'){editUserId=null;renderAdmin()}}});
$('#admin').addEventListener('click',async e=>{
  const b=e.target.closest('[data-a]');if(!b)return;const id=b.dataset.id,a=b.dataset.a;
  const n=DB.noms.find(x=>x.id===id),v=DB.voters.find(x=>x.id===id),h=DB.hof.find(x=>x.id===id);
  const nomInfo=n?{who:'מנהל',dept:n.dept,cat:n.cat,details:n.title,ref:n.id}:{};
  const setStatus=st=>B.sb?rpc('mmba_admin_nom_status',A({p_id:id,p_status:st})).then(after):put('noms',{...n,status:st});
  if(a==='approve'&&await safe(()=>setStatus('approved'),'אושרה ועלתה לקלפי'))logEvent('אישור מועמדות',nomInfo);
  if(a==='reject'&&await safe(()=>setStatus('rejected'),'נדחתה'))logEvent('דחיית מועמדות',nomInfo);
  if(a==='restorenom'&&await safe(async()=>{if(B.sb){await rpc('mmba_admin_restore_nom',A({p_id:id}));await after()}else await put('noms',{...n,deletedAt:null})},'המועמדות שוחזרה'))logEvent('שחזור מועמדות שנמחקה',nomInfo);
  if(a==='newpass'){const pass=randStr(6);let nv;
    if(await safe(async()=>{if(B.sb){await rpc('mmba_admin_set_pass',A({p_id:id,p_pass:pass}));nv=v}else{const salt=randStr(16);nv={...v,salt,hash:await kdf(pass,salt)};await put('voters',nv)}})){showCred(nv,pass);logEvent('סיסמה חדשה למצביע',{who:'מנהל',dept:v.dept,details:`${v.name} · ${v.user}`})}}
  if(a==='edituser'){editUserId=id;renderAdmin();return}
  if(a==='canceluser'){editUserId=null;renderAdmin();return}
  if(a==='saveuser'){
    const nu=($('#ueInput').value||'').trim().toLowerCase();
    if(nu===v.user){editUserId=null;renderAdmin();return}
    if(!USER_RE.test(nu)){toast(errMsg({code:'bad_user'}));return}
    if(DB.voters.some(x=>x.id!==id&&x.user===nu)){toast('שם המשתמש הזה כבר קיים.');return}
    if(await safe(async()=>{if(B.sb){await rpc('mmba_admin_set_username',A({p_id:id,p_user:nu}));await after()}else await put('voters',{...v,user:nu})},'שם המשתמש עודכן')){logEvent('שינוי שם משתמש',{who:'מנהל',dept:v.dept,details:`${v.name} · ${v.user} → ${nu}`});editUserId=null}
  }
  if(a==='reopen'){const bb=DB.ballots.find(x=>x.id===id);if(await safe(async()=>{if(B.sb){await rpc('mmba_admin_reopen_ballot',A({p_id:id}));await after()}else await put('ballots',{...bb,confirmed:false,confirmedAt:null})},'ההצבעה נפתחה מחדש לעריכה'))logEvent('פתיחת הצבעה מחדש',{who:'מנהל',dept:v&&v.dept,details:v?v.name:''})}
  if(a==='addimg'){addImgTarget=id;$('#hofAdd').click();return}
  if(a==='delimg'){
    if(b.dataset.sure!=='1'){b.dataset.sure='1';b.textContent='?';setTimeout(()=>{if(b.isConnected){b.dataset.sure='';b.textContent='✕'}},2500);return}
    const i=+b.dataset.i,ref=(h.imgs||[])[i];if(await safe(async()=>{await updHof({...h,imgs:h.imgs.filter((_,k)=>k!==i)});await deleteAsset(ref)},'התמונה הוסרה'))logEvent('הסרת תמונה מזוכה',{who:'מנהל',details:`${h.year} · ${h.title}`});schedule();
  }
  if(['delnom','delvoter','delhof'].includes(a)){
    if(b.dataset.sure!=='1'){b.dataset.sure='1';b.textContent='בטוח?';setTimeout(()=>{if(b.isConnected){b.dataset.sure='';b.textContent=a==='delvoter'?'הסרה':'מחיקה'}},3000);return}
    let ok;
    if(B.sb){
      const fn={delnom:'mmba_admin_delete_nom',delvoter:'mmba_admin_delete_voter',delhof:'mmba_admin_delete_hof'}[a];
      ok=await safe(async()=>{await rpc(fn,A({p_id:id}));await after()},a==='delnom'?'המועמדות הועברה לארכיון "נמחקו"':'נמחק');
    }else{
      if(a==='delnom')ok=await safe(async()=>{await put('noms',{...n,deletedAt:Date.now()});for(const bl of DB.ballots){if(Object.values(bl.picks||{}).includes(id)){const p={...bl.picks};for(const k in p)if(p[k]===id)delete p[k];await put('ballots',{...bl,picks:p})}}},'המועמדות הועברה לארכיון "נמחקו"');
      if(a==='delvoter')ok=await safe(async()=>{await drop('voters',id);if(DB.ballots.some(x=>x.id===id))await drop('ballots',id)},'הוסר/ה');
      if(a==='delhof')ok=await safe(async()=>{await drop('hof',id);for(const r of h.imgs||[])await deleteAsset(r)},'נמחק');
    }
    if(ok){if(a==='delnom')logEvent('מחיקת מועמדות (לארכיון)',nomInfo);if(a==='delvoter')logEvent('הסרת מצביע',{who:'מנהל',dept:v.dept,details:`${v.name} · ${v.user}`});if(a==='delhof')logEvent('מחיקת זוכה מההיכל',{who:'מנהל',details:`${h.year} · ${h.cat} · ${h.title}`})}
    schedule();
  }
  renderAdmin();
});
async function saveSettings(s){if(B.sb){await rpc('mmba_admin_settings',A({p_sub:!!s.subOpen,p_vote:!!s.voteOpen}));DB.settings={...DB.settings,...s};await after()}else await putDoc('settings',s)}
$('#sSub').addEventListener('change',async e=>{const on=e.target.checked;if(await safe(()=>saveSettings({...DB.settings,subOpen:on}),on?'ההגשות נפתחו':'ההגשות נסגרו'))logEvent(on?'פתיחת ההגשות':'סגירת ההגשות',{who:'מנהל'})});
$('#sVote').addEventListener('change',async e=>{const on=e.target.checked;if(await safe(()=>saveSettings({...DB.settings,voteOpen:on}),on?'הקלפי נפתחה':'הקלפי נסגרה'))logEvent(on?'פתיחת הקלפי':'סגירת הקלפי',{who:'מנהל'})});
$('#logSave').addEventListener('click',async()=>{
  const url=$('#logUrl').value.trim(),token=$('#logToken').value.trim();
  if(url&&!/^https:\/\/script\.google\.com\//.test(url)){toast(errMsg({code:'bad_url'}));return}
  if(await safe(async()=>{if(B.sb){await rpc('mmba_admin_set_log',A({p_url:url,p_token:token}));DB.settings={...DB.settings,logUrl:url,logToken:token};await after()}else await putDoc('settings',{...DB.settings,logUrl:url,logToken:token})},url?'הלוג חובר':'הלוג נותק')){if(url)logEvent('חיבור הלוג לגיליון',{who:'מנהל',details:'הלוג חובר בהצלחה'});renderAdmin()}
});
$('#logTest').addEventListener('click',()=>{if(!DB.settings.logUrl){toast('קודם שמרו כתובת');return}logEvent('בדיקת חיבור',{who:'מנהל',details:'שורת בדיקה מאזור הניהול'});toast('נשלחה שורת בדיקה. בדקו בגיליון בעוד כמה שניות.')});
$('#sExport').addEventListener('click',()=>{const t=$('#exportBox');t.hidden=false;const {voters,...rest}=DB;t.value=JSON.stringify({...rest,voters:voters.map(({salt,hash,...v})=>v)},null,2);t.select();(navigator.clipboard?navigator.clipboard.writeText(t.value):Promise.reject()).then(()=>toast('הנתונים הועתקו'),()=>toast('סמנו והעתיקו מהתיבה'));logEvent('ייצוא נתונים (JSON)',{who:'מנהל'})});
$('#resetWrap').addEventListener('click',async e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.id==='sReset'){$('#resetWrap').innerHTML='<span class="confirm-inline">למחוק הכל? <button class="btn small red" id="sReset2" type="button">כן, איפוס</button><button class="btn small ghost" id="sCancel" type="button">ביטול</button></span>';return}
  if(b.id==='sReset2'){$('#resetWrap').innerHTML='<span class="confirm-inline">מוחקים…</span>';if(await safe(async()=>{
    if(B.sb){await rpc('mmba_admin_reset',A({}));await after();return}
    for(const n of [...DB.noms]){await drop('noms',n.id);for(const r of n.imgs||[])await deleteAsset(r)}for(const v of [...DB.voters])await drop('voters',v.id);for(const x of [...DB.ballots])await drop('ballots',x.id)},'הנתונים אופסו'))logEvent('איפוס כל הנתונים',{who:'מנהל',details:'מועמדויות, מצביעים ופתקים נמחקו'})}
  $('#resetWrap').innerHTML='<button class="btn small red" id="sReset" type="button">איפוס</button>';renderAdmin();
});

/* ---------- PDF export of all nominations (browser print → Save as PDF) ---------- */
async function exportPDF(){
  if(B.server){toast('ייצוא PDF זמין באתר עצמו (ב־GitHub). בתצוגה המקדימה הדפדפן חוסם הדפסה.');return}
  const L=live(),D=DB.noms.filter(n=>n.deletedAt);
  if(!L.length&&!D.length){toast('אין עדיין מועמדויות לייצוא');return}
  const card=n=>`<article class="pn">
    <div class="pn-txt">
      <div class="pn-top"><b>${esc(n.title)}</b><span class="pn-st ${n.deletedAt?'del':n.status}">${n.deletedAt?'נמחקה':SL[n.status]}</span></div>
      <div class="pn-meta">${esc(n.team?n.team+' · ':'')}${esc(n.dept)}${(n.joint||[]).length?' + '+esc(n.joint.join(', ')):''} · לקוח: ${esc(n.client)} · הוגש ע״י ${esc(n.by)} · ${fmtTs(n.ts)}${n.deletedAt?' · נמחקה '+fmtTs(n.deletedAt):''}</div>
      ${n.extra&&n.extra.consultant?`<div class="pn-meta">★ Rising Star: ${esc(n.extra.consultant)} · במשרד מ־${esc(fmtD(n.extra.startDate))} · המהלך ${esc(fmtD(n.extra.actionDate))}</div>`:''}
      <p>${esc(n.desc)}</p>
      ${n.link||n.video?`<div class="pn-links">${n.link?`קישור: <a href="${esc(n.link)}">${esc(n.link)}</a>`:''}${n.link&&n.video?' · ':''}${n.video?`סרטון: <a href="${esc(src(n.video))}">${esc(src(n.video))}</a>`:''}</div>`:''}
    </div>
    ${(n.imgs||[]).length?`<div class="pn-imgs">${n.imgs.slice(0,5).map(r=>`<img src="${esc(src(r))}" alt="">`).join('')}</div>`:''}
  </article>`;
  const section=(list,title)=>CATS.map(c=>{const g=list.filter(n=>n.cat===c.k);return g.length?`<section class="pc"><h2><span${c.heb?' class="heb"':''}>${esc(c.en)}</span> <small>${esc(c.he)} · ${g.length}</small></h2>${g.map(card).join('')}</section>`:''}).join('');
  const count=st=>L.filter(n=>n.status===st).length;
  $('#printArea').innerHTML=`<header class="ph"><img src="${$('.brand img').src}" alt=""><div><b>ממב״א 2026 · דוח מועמדויות</b><span>הופק ב־${fmtTs(Date.now())} · ${L.length} מועמדויות (${count('approved')} מאושרות, ${count('pending')} ממתינות, ${count('rejected')} נדחו)${D.length?` · ${D.length} נמחקו`:''}</span></div></header>
    ${section(L)}${D.length?`<h1 class="pd">מועמדויות שנמחקו</h1>${section(D)}`:''}`;
  toast('מכינים את הקובץ…');
  await Promise.all([...$$('#printArea img')].map(i=>i.complete?0:new Promise(r=>{i.onload=i.onerror=r;setTimeout(r,10000)})));
  logEvent('ייצוא מועמדויות ל־PDF',{who:'מנהל',details:`${L.length} מועמדויות${D.length?' + '+D.length+' שנמחקו':''}`});
  const t0=document.title;document.title=`ממב״א 2026 – מועמדויות – ${new Date().toLocaleDateString('he-IL').replace(/\./g,'-')}`;
  window.print();
  setTimeout(()=>{document.title=t0},1000);
}
$$('.pdf-btn').forEach(b=>b.addEventListener('click',exportPDF));
addEventListener('afterprint',()=>{$('#printArea').innerHTML=''});

/* ---------- homepage text editing with version history ---------- */
let editing=false,dirty=false;
const DEFAULTS={};$$('[data-e]').forEach(el=>{DEFAULTS[el.dataset.e]=el.textContent});
function currentTexts(){const t={};$$('[data-e]').forEach(el=>{const k=el.dataset.e,v=el.textContent.replace(/\s+/g,' ').trim();if(v&&v!==DEFAULTS[k].trim())t[k]=v});return t}
function applyTexts(t){$$('[data-e]').forEach(el=>{const k=el.dataset.e,v=(t&&t[k]!=null)?t[k]:DEFAULTS[k];if(el.textContent!==v)el.textContent=v;el.classList.remove('changed')})}
function applyContent(){if(!editing)applyTexts((DB.content||{}).texts||{})}
function setDirty(d){dirty=d;$('#editBar').classList.toggle('dirty',d);$('#ebStatus').textContent=d?'יש שינויים שלא נשמרו':'מצב עריכה · לחצו על טקסט כדי לשנות'}
function enterEdit(){
  editing=true;document.body.classList.add('editing');$('#editBar').hidden=false;$('#editTop').hidden=false;
  applyTexts((DB.content||{}).texts||{});
  $$('[data-e]').forEach(el=>{el.setAttribute('contenteditable','plaintext-only');if(el.contentEditable!=='plaintext-only')el.setAttribute('contenteditable','true');el.spellcheck=false;el.setAttribute('role','textbox');el.setAttribute('aria-label','טקסט לעריכה')});
  $$('.view.on .rv,.view.on .rise').forEach(x=>x.classList.add('in'));
  clearTimeout(reelTimer);setDirty(false);toast('מצב עריכה פעיל');
}
function leaveEdit(){
  editing=false;document.body.classList.remove('editing');$('#editBar').hidden=true;$('#editTop').hidden=true;$('#hist').classList.remove('on');
  $$('[data-e]').forEach(el=>{el.removeAttribute('contenteditable');el.removeAttribute('role');el.removeAttribute('aria-label')});
  setDirty(false);applyContent();
}
document.addEventListener('input',e=>{const el=e.target.closest&&e.target.closest('[data-e]');if(!editing||!el)return;el.classList.add('changed');setDirty(true)});
document.addEventListener('keydown',e=>{if(editing&&e.key==='Enter'&&e.target.closest&&e.target.closest('[data-e]')){e.preventDefault();e.target.blur()}});
document.addEventListener('paste',e=>{const el=e.target.closest&&e.target.closest('[data-e]');if(!editing||!el)return;e.preventDefault();const t=(e.clipboardData||window.clipboardData).getData('text').replace(/\s+/g,' ');document.execCommand('insertText',false,t)});
document.addEventListener('click',e=>{
  if(!editing)return;
  if(e.target.closest('#editBar,#hist,#editTop'))return;
  if(e.target.closest('a,button,.cat')){e.preventDefault();e.stopPropagation()}
},true);
async function saveContent(texts,label){
  logEvent('עריכת טקסטים בדף הבית',{who:'מנהל',details:`${label||'שמירה'} · ${Object.keys(texts).length} טקסטים שונו מהמקור`});
  if(B.sb){const ts=await rpc('mmba_admin_save_content',A({p_texts:texts,p_label:label||'שמירה'}));DB.content={texts,ts:+ts};await after();return}
  const ts=Date.now();
  await putDoc('content',{texts,ts});
  await put('history',{id:uid('c'),texts,ts,label:label||'שמירה'});
  if(!B.server&&DB.history.length>80){DB.history=DB.history.slice(0,80);saveLocal()}
}
$('#ebSave').addEventListener('click',async()=>{
  const btn=$('#ebSave');btn.disabled=true;
  if(await safe(()=>saveContent(currentTexts(),'שמירה מעריכה'),'השינויים נשמרו ופורסמו')){$$('[data-e].changed').forEach(x=>x.classList.remove('changed'));setDirty(false)}
  btn.disabled=false;renderHistory();
});
$('#ebUndo').addEventListener('click',()=>{applyTexts((DB.content||{}).texts||{});setDirty(false);toast('השינויים בוטלו')});
$('#ebHist').addEventListener('click',()=>{renderHistory();$('#hist').classList.add('on')});
$('#histClose').addEventListener('click',()=>$('#hist').classList.remove('on'));
$('#ebExit').addEventListener('click',()=>{
  if(dirty&&$('#ebExit').dataset.sure!=='1'){$('#ebExit').dataset.sure='1';$('#ebExit').textContent='לצאת בלי לשמור?';setTimeout(()=>{$('#ebExit').dataset.sure='';$('#ebExit').textContent='יציאה'},3500);return}
  $('#ebExit').dataset.sure='';$('#ebExit').textContent='יציאה';leaveEdit();location.hash='admin';
});
function renderHistory(){
  const curTs=(DB.content||{}).ts;
  const fmt=ts=>new Date(ts).toLocaleString('he-IL',{dateStyle:'medium',timeStyle:'short'});
  const html=(DB.history.length?DB.history.map(h=>`<div class="h-item${h.ts===curTs?' cur':''}"><div><b>${fmt(h.ts)}</b><small>${esc(h.label||'שמירה')} · ${Object.keys(h.texts||{}).length} טקסטים שונו מהמקור</small></div><button class="icon-btn" type="button" data-restore="${h.id}">שחזור</button></div>`).join(''):'<div class="empty">עדיין אין גרסאות שמורות.</div>')
    +`<div class="h-item"><div><b>הטקסטים המקוריים</b><small>החזרת כל הטקסטים לברירת המחדל</small></div><button class="icon-btn" type="button" data-restore="__default">שחזור</button></div>`;
  $('#histList').innerHTML=html;$('#histAdmin').innerHTML=html;
}
document.addEventListener('click',async e=>{
  const b=e.target.closest('[data-restore]');if(!b)return;
  if(b.dataset.sure!=='1'){b.dataset.sure='1';b.textContent='לשחזר?';setTimeout(()=>{if(b.isConnected){b.dataset.sure='';b.textContent='שחזור'}},3000);return}
  const id=b.dataset.restore,h=id==='__default'?{texts:{},ts:0}:DB.history.find(x=>x.id===id);if(!h)return;
  const label=id==='__default'?'שחזור לטקסטים המקוריים':'שחזור מ־'+new Date(h.ts).toLocaleString('he-IL',{dateStyle:'short',timeStyle:'short'});
  if(await safe(()=>saveContent({...h.texts},label),'הגרסה שוחזרה ופורסמה')){applyTexts(h.texts);setDirty(false);renderHistory()}
},true);

/* ---------- router ---------- */
const ROUTES=['home','categories','nominate','vote','rules','hall','about','admin','edit-home'];
const TITLES={home:'ממב״א 2026',categories:'הקטגוריות · ממב״א 2026',nominate:'הגשת מועמדות · ממב״א 2026',vote:'הצבעה · ממב״א 2026',hall:'היכל התהילה · ממב״א 2026',rules:'כללי התחרות · ממב״א 2026',about:'אודות · ממב״א 2026',admin:'הגדרות · ממב״א 2026','edit-home':'עריכת דף הבית · ממב״א 2026'};
let cur=null;
function route(first){
  let r=(location.hash||'#home').slice(1);if(!ROUTES.includes(r))r='home';
  if(r==='edit-home'&&!isAdmin()){location.hash='admin';return}
  if(r===cur)return;
  const go=()=>{
    if(editing&&r!=='edit-home')leaveEdit();
    const view=r==='edit-home'?'home':r;
    $$('.view').forEach(v=>v.classList.toggle('on',v.id==='v-'+view));
    $$('.links a').forEach(a=>a.classList.toggle('active',a.dataset.r===view));
    document.body.classList.remove('menu-open');$('#burger').setAttribute('aria-expanded','false');
    window.scrollTo(0,0);cur=r;document.title=TITLES[r];
    if(r==='nominate')nomView();if(r==='vote')voteView();if(r==='hall')hallView();if(r==='admin')adminView();
    if(view==='home'){renderReel();renderPlates();armReel()}else clearTimeout(reelTimer);
    resetReveal();observe();bindTilt();
    if(r==='edit-home')enterEdit();
  };
  if(first||reduce){go();return}
  const c=$('#curtain');c.className='curtain in';
  setTimeout(()=>{go();c.className='curtain out';setTimeout(()=>c.className='curtain',800)},560);
}
window.addEventListener('hashchange',()=>route(false));
function refresh(){
  applyContent();
  if(cur==='home'||cur==='edit-home'){renderReel();renderPlates()}
  banners();
  if(cur==='hall')hallView();
  if(cur==='admin')renderAdmin();
  if(cur==='vote'&&$('#ballot').hidden&&$('#voteDone').hidden)voteView();
  renderHistory();
}

/* ---------- reveal on scroll ---------- */
let io=null;
function resetReveal(){$$('.view.on .rv,.view.on .rise').forEach(el=>el.classList.remove('in'))}
function observe(){
  const els=$$('.view.on .rv:not(.in),.view.on .rise:not(.in)');
  if(!('IntersectionObserver' in window)||reduce||editing){els.forEach(e=>e.classList.add('in'));return}
  if(!io)io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  els.forEach((el,i)=>{const r=el.getBoundingClientRect();if(r.top<innerHeight)setTimeout(()=>el.classList.add('in'),80+i*90);else io.observe(el)});
  clearTimeout(observe._t);observe._t=setTimeout(()=>$$('.view.on .rv:not(.in),.view.on .rise:not(.in)').forEach(e=>{if(e.getBoundingClientRect().top<innerHeight*1.2)e.classList.add('in')}),2500);
}

/* ---------- header, menu, glow, timeline ---------- */
const hdr=$('#top');
function onScroll(){
  hdr.classList.toggle('scrolled',scrollY>20);
  const tl=$('#tl');if(tl&&(cur==='home'||cur==='edit-home')){const r=tl.getBoundingClientRect();const p=Math.min(1,Math.max(0,(innerHeight*.6-r.top)/r.height));tl.querySelector('.rail i').style.height=(p*100)+'%'}
}
addEventListener('scroll',onScroll,{passive:true});onScroll();
$('#burger').addEventListener('click',()=>{const o=document.body.classList.toggle('menu-open');$('#burger').setAttribute('aria-expanded',o)});
const glow=$('#glow');let gx=innerWidth/2,gy=innerHeight/3,tx=gx,ty=gy;
addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY},{passive:true});
let glowOn=false;function gl(){gx+=(tx-gx)*.08;gy+=(ty-gy)*.08;glow.style.transform=`translate(${gx-260}px,${gy-260}px)`;if(Math.abs(tx-gx)+Math.abs(ty-gy)>.5)requestAnimationFrame(gl);else glowOn=false}
addEventListener('pointermove',()=>{if(!glowOn&&!hoverless){glowOn=true;requestAnimationFrame(gl)}},{passive:true});
if(!reduce&&!hoverless){
  document.addEventListener('pointermove',e=>{const b=e.target.closest('.btn');$$('.btn.mag').forEach(x=>{if(x!==b){x.style.translate='';x.classList.remove('mag')}});if(!b||b.closest('.edit-bar'))return;const r=b.getBoundingClientRect();b.classList.add('mag');b.style.translate=`${(e.clientX-r.left-r.width/2)*.15}px ${(e.clientY-r.top-r.height/2)*.25}px`});
}

/* ---------- BHA dot field ---------- */
(function dots(){
  const cv=$('#dots'),ctx=cv.getContext('2d');let W,H,pts=[],mx=-999,my=-999;const t0=performance.now(),dpr=Math.min(2,devicePixelRatio||1);
  function build(){
    const r=cv.getBoundingClientRect();W=r.width;H=r.height;cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
    pts=[];const narrow=W<700,cols=narrow?11:18,rows=narrow?9:11,gw=narrow?W*.92:W*.62,gh=H*.86,ox=narrow?W*.04:0,oy=H*.08;
    for(let i=0;i<cols;i++)for(let j=0;j<rows;j++){
      const u=i/(cols-1),v=j/(rows-1),curve=Math.pow(u,1.6);
      const x=ox+gw*(.05+.95*u),y=oy+gh*(v*(1-.35*curve)+.18*curve)+Math.sin(u*Math.PI)*12;
      pts.push({x,y,bx:x,by:y,u,v,s:1.2+3.6*(1-u)*.9+(u<.15?1:0),red:Math.random()<.18+.55*(1-u)});
    }
  }
  function frame(now){
    const t=(now-t0)/1000;ctx.clearRect(0,0,W,H);
    for(const p of pts){
      let x=p.bx+Math.cos(t*.6+p.v*4)*3,y=p.by+Math.sin(t*1.1+p.u*5+p.v*2.4)*6;
      const dx=x-mx,dy=y-my,d=Math.hypot(dx,dy);
      if(d<140){const f=(1-d/140)*26;x+=dx/d*f;y+=dy/d*f}
      p.x+=(x-p.x)*.12;p.y+=(y-p.y)*.12;
      const tw=.55+.45*Math.sin(t*1.7+p.u*9+p.v*3),sz=p.s*(.8+.35*tw)*(d<140?1.25:1);
      ctx.beginPath();ctx.ellipse(p.x,p.y,sz*1.15,sz*.85,-.5+p.u*.6,0,Math.PI*2);
      ctx.fillStyle=p.red?`rgba(196,22,62,${.5+.45*tw*(1-p.u*.5)})`:`rgba(201,163,90,${.2+.45*tw*(1-p.u*.6)})`;ctx.fill();
    }
    if(!reduce&&heroVisible&&!document.hidden)requestAnimationFrame(frame);else running=false;
  }
  let heroVisible=true,running=true;
  const wake=()=>{if(!running&&heroVisible&&!document.hidden&&!reduce){running=true;requestAnimationFrame(frame)}};
  if('IntersectionObserver' in window)new IntersectionObserver(es=>{heroVisible=es[0].isIntersecting;wake()}).observe(cv);
  document.addEventListener('visibilitychange',wake);
  cv.parentElement.addEventListener('pointermove',e=>{const r=cv.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top});
  cv.parentElement.addEventListener('pointerleave',()=>{mx=my=-999});
  addEventListener('resize',build);build();requestAnimationFrame(frame);
})();

/* ---------- confetti ---------- */
function confetti(){
  if(reduce)return;const cv=$('#confetti'),ctx=cv.getContext('2d'),dpr=Math.min(2,devicePixelRatio||1);
  cv.width=innerWidth*dpr;cv.height=innerHeight*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
  const C=['#f0d697','#c9a35a','#8a6d34','#b3123a','#f3ebdc'];
  const ps=Array.from({length:160},()=>({x:innerWidth/2+(Math.random()-.5)*200,y:innerHeight*.45,vx:(Math.random()-.5)*16,vy:-Math.random()*16-4,r:Math.random()*6+3,c:C[Math.random()*C.length|0],a:Math.random()*6,va:(Math.random()-.5)*.3}));
  let f=0;(function step(){ctx.clearRect(0,0,innerWidth,innerHeight);for(const p of ps){p.vy+=.38;p.vx*=.985;p.x+=p.vx;p.y+=p.vy;p.a+=p.va;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.a);ctx.fillStyle=p.c;ctx.fillRect(-p.r/2,-p.r/4,p.r,p.r/2);ctx.restore()}if(++f<170)requestAnimationFrame(step);else ctx.clearRect(0,0,innerWidth,innerHeight)})();
}

route(true);
initBackend();
})();
