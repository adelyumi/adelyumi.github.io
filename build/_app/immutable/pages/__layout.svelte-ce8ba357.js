import{F as ee,S as D,i as K,s as N,e as m,t as j,k as A,c as d,a as h,h as H,d as u,m as I,b as a,G as z,g as F,H as o,n as G,I as te,J as R,K as ae,x as Y,y as W,z as X,L as se,M as oe,N as re,r as S,p as C,C as Z}from"../chunks/index-7feb0769.js";const le=()=>{const l=ee("__svelte__");return{page:{subscribe:l.page.subscribe},navigating:{subscribe:l.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:l.navigating.subscribe}},session:l.session,updated:l.updated}},ie={subscribe(l){return le().page.subscribe(l)}};function ne(l){let t,n,s,f,i,v,g,r,e,c,q,k,y,E,M,_,p,w;return{c(){t=m("header"),n=m("nav"),s=m("ul"),f=m("li"),i=m("a"),v=j("Home"),g=A(),r=m("li"),e=m("a"),c=j("About Me"),q=A(),k=m("li"),y=m("a"),E=j("My Projects"),M=A(),_=m("li"),p=m("a"),w=j("Random Dog"),this.h()},l(b){t=d(b,"HEADER",{class:!0});var $=h(t);n=d($,"NAV",{class:!0});var L=h(n);s=d(L,"UL",{class:!0});var x=h(s);f=d(x,"LI",{class:!0});var P=h(f);i=d(P,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var T=h(i);v=H(T,"Home"),T.forEach(u),P.forEach(u),g=I(x),r=d(x,"LI",{class:!0});var V=h(r);e=d(V,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var O=h(e);c=H(O,"About Me"),O.forEach(u),V.forEach(u),q=I(x),k=d(x,"LI",{class:!0});var Q=h(k);y=d(Q,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var U=h(y);E=H(U,"My Projects"),U.forEach(u),Q.forEach(u),M=I(x),_=d(x,"LI",{class:!0});var B=h(_);p=d(B,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var J=h(p);w=H(J,"Random Dog"),J.forEach(u),B.forEach(u),x.forEach(u),L.forEach(u),$.forEach(u),this.h()},h(){a(i,"sveltekit:prefetch",""),a(i,"href","/"),a(i,"class","svelte-1m35oaq"),a(f,"class","svelte-1m35oaq"),z(f,"active",l[0].url.pathname==="/"),a(e,"sveltekit:prefetch",""),a(e,"href","/about"),a(e,"class","svelte-1m35oaq"),a(r,"class","svelte-1m35oaq"),z(r,"active",l[0].url.pathname==="/about"),a(y,"sveltekit:prefetch",""),a(y,"href","/projects"),a(y,"class","svelte-1m35oaq"),a(k,"class","svelte-1m35oaq"),z(k,"active",l[0].url.pathname==="/projects"),a(p,"sveltekit:prefetch",""),a(p,"href","/api"),a(p,"class","svelte-1m35oaq"),a(_,"class","svelte-1m35oaq"),z(_,"active",l[0].url.pathname==="/api"),a(s,"class","svelte-1m35oaq"),a(n,"class","svelte-1m35oaq"),a(t,"class","svelte-1m35oaq")},m(b,$){F(b,t,$),o(t,n),o(n,s),o(s,f),o(f,i),o(i,v),o(s,g),o(s,r),o(r,e),o(e,c),o(s,q),o(s,k),o(k,y),o(y,E),o(s,M),o(s,_),o(_,p),o(p,w)},p(b,[$]){$&1&&z(f,"active",b[0].url.pathname==="/"),$&1&&z(r,"active",b[0].url.pathname==="/about"),$&1&&z(k,"active",b[0].url.pathname==="/projects"),$&1&&z(_,"active",b[0].url.pathname==="/api")},i:G,o:G,d(b){b&&u(t)}}}function ce(l,t,n){let s;return te(l,ie,f=>n(0,s=f)),[s]}class ue extends D{constructor(t){super(),K(this,t,ce,ne,N,{})}}function fe(l){let t,n,s,f,i,v,g,r,e,c,q,k,y,E,M;return{c(){t=m("footer"),n=m("a"),s=m("img"),i=A(),v=m("a"),g=m("img"),e=A(),c=m("a"),q=m("img"),y=A(),E=m("p"),M=j("email: a.kildeeva@innopolis.university"),this.h()},l(_){t=d(_,"FOOTER",{class:!0});var p=h(t);n=d(p,"A",{href:!0});var w=h(n);s=d(w,"IMG",{class:!0,src:!0,alt:!0}),w.forEach(u),i=I(p),v=d(p,"A",{href:!0});var b=h(v);g=d(b,"IMG",{class:!0,src:!0,alt:!0}),b.forEach(u),e=I(p),c=d(p,"A",{href:!0});var $=h(c);q=d($,"IMG",{class:!0,src:!0,alt:!0}),$.forEach(u),y=I(p),E=d(p,"P",{id:!0,class:!0});var L=h(E);M=H(L,"email: a.kildeeva@innopolis.university"),L.forEach(u),p.forEach(u),this.h()},h(){a(s,"class","logo svelte-1syd687"),R(s.src,f="https://i.ibb.co/cQL9m6T/vk-48.png")||a(s,"src",f),a(s,"alt","vk logo"),a(n,"href","https://vk.com/adelina_yumi"),a(g,"class","logo svelte-1syd687"),R(g.src,r="https://i.ibb.co/VtrBKbY/telegram-48.png")||a(g,"src",r),a(g,"alt","tg logo"),a(v,"href","https://t.me/yumiue"),a(q,"class","logo svelte-1syd687"),R(q.src,k="https://i.ibb.co/KLk2zQc/github-11-48.png")||a(q,"src",k),a(q,"alt","github logo"),a(c,"href","https://github.com/adelyumi"),a(E,"id","email"),a(E,"class","svelte-1syd687"),a(t,"class","svelte-1syd687")},m(_,p){F(_,t,p),o(t,n),o(n,s),o(t,i),o(t,v),o(v,g),o(t,e),o(t,c),o(c,q),o(t,y),o(t,E),o(E,M)},p:G,i:G,o:G,d(_){_&&u(t)}}}class me extends D{constructor(t){super(),K(this,t,null,fe,N,{})}}function de(l){let t,n,s,f,i,v;t=new ue({});const g=l[1].default,r=ae(g,l,l[0],null);return i=new me({}),{c(){Y(t.$$.fragment),n=A(),s=m("main"),r&&r.c(),f=A(),Y(i.$$.fragment)},l(e){W(t.$$.fragment,e),n=I(e),s=d(e,"MAIN",{});var c=h(s);r&&r.l(c),c.forEach(u),f=I(e),W(i.$$.fragment,e)},m(e,c){X(t,e,c),F(e,n,c),F(e,s,c),r&&r.m(s,null),F(e,f,c),X(i,e,c),v=!0},p(e,[c]){r&&r.p&&(!v||c&1)&&se(r,g,e,e[0],v?re(g,e[0],c,null):oe(e[0]),null)},i(e){v||(S(t.$$.fragment,e),S(r,e),S(i.$$.fragment,e),v=!0)},o(e){C(t.$$.fragment,e),C(r,e),C(i.$$.fragment,e),v=!1},d(e){Z(t,e),e&&u(n),e&&u(s),r&&r.d(e),e&&u(f),Z(i,e)}}}function pe(l,t,n){let{$$slots:s={},$$scope:f}=t;return l.$$set=i=>{"$$scope"in i&&n(0,f=i.$$scope)},[f,s]}class he extends D{constructor(t){super(),K(this,t,pe,de,N,{})}}export{he as default};
