import{S as C,i as O,s as P,O as E,e as h,t as $,k as T,c as p,a as f,h as j,d as o,m as q,b as i,g as _,H as g,P as D,Q as I,n as d,J as S}from"../chunks/index-6cb0634e.js";import{d as L,b as N}from"../chunks/env-97a0ac85.js";function x(a){return{c:d,l:d,m:d,p:d,d}}function A(a){let e,s;return{c(){e=h("img"),this.h()},l(t){e=p(t,"IMG",{id:!0,src:!0,alt:!0,class:!0}),this.h()},h(){i(e,"id","dog"),S(e.src,s=a[2].message)||i(e,"src",s),i(e,"alt","dog"),i(e,"class","svelte-15lld2y")},m(t,l){_(t,e,l)},p(t,l){l&1&&!S(e.src,s=t[2].message)&&i(e,"src",s)},d(t){t&&o(e)}}}function B(a){let e,s;return{c(){e=h("p"),s=$("Loading..."),this.h()},l(t){e=p(t,"P",{class:!0});var l=f(e);s=j(l,"Loading..."),l.forEach(o),this.h()},h(){i(e,"class","svelte-15lld2y")},m(t,l){_(t,e,l),g(e,s)},p:d,d(t){t&&o(e)}}}function G(a){let e,s,t,l,u,m,b,v,n={ctx:a,current:null,token:null,hasCatch:!1,pending:B,then:A,catch:x,value:2};return E(m=a[0],n),{c(){e=h("p"),s=h("button"),t=$("See random dog"),l=T(),u=h("section"),n.block.c(),this.h()},l(r){e=p(r,"P",{class:!0});var c=f(e);s=p(c,"BUTTON",{id:!0,class:!0});var k=f(s);t=j(k,"See random dog"),k.forEach(o),c.forEach(o),l=q(r),u=p(r,"SECTION",{});var y=f(u);n.block.l(y),y.forEach(o),this.h()},h(){i(s,"id","btn"),i(s,"class","svelte-15lld2y"),i(e,"class","svelte-15lld2y")},m(r,c){_(r,e,c),g(e,s),g(s,t),_(r,l,c),_(r,u,c),n.block.m(u,n.anchor=null),n.mount=()=>u,n.anchor=null,b||(v=D(s,"click",a[1]),b=!0)},p(r,[c]){a=r,n.ctx=a,c&1&&m!==(m=a[0])&&E(m,n)||I(n,a,c)},i:d,o:d,d(r){r&&o(e),r&&o(l),r&&o(u),n.block.d(),n.token=null,n=null,b=!1,v()}}}const Q=L,U=N,z=!0;async function w(){return await(await fetch("https://dog.ceo/api/breeds/image/random")).json()}function H(a,e,s){let t=w();return[t,()=>s(0,t=w())]}class F extends C{constructor(e){super(),O(this,e,H,G,P,{})}}export{F as default,Q as hydrate,z as prerender,U as router};
