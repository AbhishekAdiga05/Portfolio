import{c as p}from"./index-DPY_n_6Y.js";import{b as o}from"./vendor-react-BVzsuO4w.js";import{_ as d}from"./vendor-motion-BAJ_Bh9Y.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],x=p("external-link",l);function E(e,{root:t,margin:r,amount:s,once:n=!1,initial:u=!1}={}){const[a,i]=o.useState(u);return o.useEffect(()=>{if(!e.current||n&&a)return;const c=()=>(i(!0),n?void 0:()=>i(!1)),f={root:t&&t.current||void 0,margin:r,amount:s};return d(e.current,c,f)},[t,e,r,n,s]),a}export{x as E,E as u};
