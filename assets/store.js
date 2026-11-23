/* Ocean Home Appliances — site engine (products, settings, enquiries)
   Demo-level: admin edits are stored in this browser's localStorage. */
(function(){
const R = window.ROOT || "";
const K = {override:"ocean_override", settings:"ocean_settings", pw:"ocean_admin_pw"};
const load=(k,d)=>{try{const v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch(e){return d}};
const save=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const DEFAULT_SETTINGS={wa:"923349001195",email:"weavers2025ai@gmail.com",phone:"+92 334 900 1195"};
window.Ocean={
 K,
 money:n=>"Rs. "+Number(n||0).toLocaleString("en-US"),
 img:p=>{const s=p.img||""; return (s.startsWith("http")||s.startsWith("data:"))?s:R+s;},
 products(){ const o=load(K.override,null); if(Array.isArray(o)&&o.length) return o; return (typeof PRODUCTS!=="undefined"&&Array.isArray(PRODUCTS))?PRODUCTS:[]; },
 saveProducts(list){ save(K.override,list); },
 settings(){ return Object.assign({},DEFAULT_SETTINGS,load(K.settings,{})); },
 saveSettings(s){ save(K.settings,s); },
 enquire(p){
   const s=this.settings();
   const msg="Hello Ocean Home Appliances, I am interested in: "+p.n+(p.m?" ("+p.m+")":"")+". Please share price and details.";
   return "https://wa.me/"+s.wa+"?text="+encodeURIComponent(msg);
 },
 toast(msg){ let t=document.getElementById("ocToast"); if(!t){ t=document.createElement("div"); t.id="ocToast";
   t.style.cssText="position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:#07303c;color:#fff;padding:13px 22px;border-radius:99px;font-weight:700;font-size:14.5px;z-index:300;opacity:0;transition:.35s;box-shadow:0 16px 36px rgba(7,48,60,.3)"; document.body.appendChild(t);} 
   t.textContent=msg; t.style.opacity="1"; t.style.transform="translateX(-50%) translateY(0)";
   clearTimeout(t._h); t._h=setTimeout(()=>{t.style.opacity="0"; t.style.transform="translateX(-50%) translateY(20px)"},2200); }
};
})();
