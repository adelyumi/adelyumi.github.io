function N(){}function H(t,e){for(const n in e)t[n]=e[n];return t}function I(t){return t&&typeof t=="object"&&typeof t.then=="function"}function O(t){return t()}function L(){return Object.create(null)}function y(t){t.forEach(O)}function G(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let g;function ft(t,e){return g||(g=document.createElement("a")),g.href=e,t===g.href}function J(t){return Object.keys(t).length===0}function K(t,...e){if(t==null)return N;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function dt(t,e,n){t.$$.on_destroy.push(K(e,n))}function _t(t,e,n,r){if(t){const c=P(t,e,n,r);return t[0](c)}}function P(t,e,n,r){return t[1]&&r?H(n.ctx.slice(),t[1](r(e))):n.ctx}function ht(t,e,n,r){if(t[2]&&r){const c=t[2](r(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const o=[],l=Math.max(e.dirty.length,c.length);for(let u=0;u<l;u+=1)o[u]=e.dirty[u]|c[u];return o}return e.dirty|c}return e.dirty}function mt(t,e,n,r,c,o){if(c){const l=P(e,n,r,o);t.p(l,c)}}function pt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}let w=!1;function Q(){w=!0}function W(){w=!1}function R(t,e,n,r){for(;t<e;){const c=t+(e-t>>1);n(c)<=r?t=c+1:e=c}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let s=0;s<e.length;s++){const f=e[s];f.claim_order!==void 0&&i.push(f)}e=i}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let c=0;for(let i=0;i<e.length;i++){const s=e[i].claim_order,f=(c>0&&e[n[c]].claim_order<=s?c+1:R(1,c,_=>e[n[_]].claim_order,s))-1;r[i]=n[f]+1;const a=f+1;n[a]=i,c=Math.max(a,c)}const o=[],l=[];let u=e.length-1;for(let i=n[c]+1;i!=0;i=r[i-1]){for(o.push(e[i-1]);u>=i;u--)l.push(e[u]);u--}for(;u>=0;u--)l.push(e[u]);o.reverse(),l.sort((i,s)=>i.claim_order-s.claim_order);for(let i=0,s=0;i<l.length;i++){for(;s<o.length&&l[i].claim_order>=o[s].claim_order;)s++;const f=s<o.length?o[s]:null;t.insertBefore(l[i],f)}}function V(t,e){if(w){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function yt(t,e,n){w&&!n?V(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function X(t){t.parentNode.removeChild(t)}function Y(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function bt(){return A(" ")}function gt(){return A("")}function xt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function $t(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,e,n,r,c=!1){tt(t);const o=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const u=t[l];if(e(u)){const i=n(u);return i===void 0?t.splice(l,1):t[l]=i,c||(t.claim_info.last_index=l),u}}for(let l=t.claim_info.last_index-1;l>=0;l--){const u=t[l];if(e(u)){const i=n(u);return i===void 0?t.splice(l,1):t[l]=i,c?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,u}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function et(t,e,n,r){return T(t,c=>c.nodeName===e,c=>{const o=[];for(let l=0;l<c.attributes.length;l++){const u=c.attributes[l];n[u.name]||o.push(u.name)}o.forEach(l=>c.removeAttribute(l))},()=>r(e))}function kt(t,e,n){return et(t,e,n,Y)}function nt(t,e){return T(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>A(e),!0)}function wt(t){return nt(t," ")}function Et(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function vt(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function jt(t,e,n){t.classList[n?"add":"remove"](e)}let p;function d(t){p=t}function b(){if(!p)throw new Error("Function called outside component initialization");return p}function Nt(t){b().$$.on_mount.push(t)}function At(t){b().$$.after_update.push(t)}function Ct(t,e){return b().$$.context.set(t,e),e}function St(t){return b().$$.context.get(t)}const m=[],q=[],$=[],B=[],z=Promise.resolve();let v=!1;function D(){v||(v=!0,z.then(C))}function Mt(){return D(),z}function j(t){$.push(t)}const E=new Set;let x=0;function C(){const t=p;do{for(;x<m.length;){const e=m[x];x++,d(e),rt(e.$$)}for(d(null),m.length=0,x=0;q.length;)q.pop()();for(let e=0;e<$.length;e+=1){const n=$[e];E.has(n)||(E.add(n),n())}$.length=0}while(m.length);for(;B.length;)B.pop()();v=!1,E.clear(),d(t)}function rt(t){if(t.fragment!==null){t.update(),y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const k=new Set;let h;function ct(){h={r:0,c:[],p:h}}function it(){h.r||y(h.c),h=h.p}function F(t,e){t&&t.i&&(k.delete(t),t.i(e))}function lt(t,e,n,r){if(t&&t.o){if(k.has(t))return;k.add(t),h.c.push(()=>{k.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Lt(t,e){const n=e.token={};function r(c,o,l,u){if(e.token!==n)return;e.resolved=u;let i=e.ctx;l!==void 0&&(i=i.slice(),i[l]=u);const s=c&&(e.current=c)(i);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,_)=>{_!==o&&a&&(ct(),lt(a,1,1,()=>{e.blocks[_]===a&&(e.blocks[_]=null)}),it())}):e.block.d(1),s.c(),F(s,1),s.m(e.mount(),e.anchor),f=!0),e.block=s,e.blocks&&(e.blocks[o]=s),f&&C()}if(I(t)){const c=b();if(t.then(o=>{d(c),r(e.then,1,e.value,o),d(null)},o=>{if(d(c),r(e.catch,2,e.error,o),d(null),!e.hasCatch)throw o}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function qt(t,e,n){const r=e.slice(),{resolved:c}=t;t.current===t.then&&(r[t.value]=c),t.current===t.catch&&(r[t.error]=c),t.block.p(r,n)}function Bt(t,e){const n={},r={},c={$$scope:1};let o=t.length;for(;o--;){const l=t[o],u=e[o];if(u){for(const i in l)i in u||(r[i]=1);for(const i in u)c[i]||(n[i]=u[i],c[i]=1);t[o]=u}else for(const i in l)c[i]=1}for(const l in r)l in n||(n[l]=void 0);return n}function Ot(t){return typeof t=="object"&&t!==null?t:{}}function Pt(t){t&&t.c()}function Tt(t,e){t&&t.l(e)}function ut(t,e,n,r){const{fragment:c,on_mount:o,on_destroy:l,after_update:u}=t.$$;c&&c.m(e,n),r||j(()=>{const i=o.map(O).filter(G);l?l.push(...i):y(i),t.$$.on_mount=[]}),u.forEach(j)}function st(t,e){const n=t.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(t,e){t.$$.dirty[0]===-1&&(m.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function zt(t,e,n,r,c,o,l,u=[-1]){const i=p;d(t);const s=t.$$={fragment:null,ctx:null,props:o,update:N,not_equal:c,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:L(),dirty:u,skip_bound:!1,root:e.target||i.$$.root};l&&l(s.root);let f=!1;if(s.ctx=n?n(t,e.props||{},(a,_,...S)=>{const M=S.length?S[0]:_;return s.ctx&&c(s.ctx[a],s.ctx[a]=M)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](M),f&&ot(t,a)),_}):[],s.update(),f=!0,y(s.before_update),s.fragment=r?r(s.ctx):!1,e.target){if(e.hydrate){Q();const a=Z(e.target);s.fragment&&s.fragment.l(a),a.forEach(X)}else s.fragment&&s.fragment.c();e.intro&&F(t.$$.fragment),ut(t,e.target,e.anchor,e.customElement),W(),C()}d(i)}class Dt{$destroy(){st(this,1),this.$destroy=N}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(e){this.$$set&&!J(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Bt as A,Ot as B,st as C,H as D,Mt as E,St as F,jt as G,V as H,dt as I,ft as J,_t as K,mt as L,pt as M,ht as N,Lt as O,xt as P,qt as Q,Dt as S,Z as a,$t as b,kt as c,X as d,Y as e,vt as f,yt as g,nt as h,zt as i,Et as j,bt as k,gt as l,wt as m,N as n,ct as o,lt as p,it as q,F as r,at as s,A as t,Ct as u,At as v,Nt as w,Pt as x,Tt as y,ut as z};
