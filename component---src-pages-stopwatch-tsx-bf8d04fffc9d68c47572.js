"use strict";(self.webpackChunkmulti_stopwatch=self.webpackChunkmulti_stopwatch||[]).push([[587],{588:function(e,t,a){a.r(t),a.d(t,{default:function(){return V}});var l=a(7294),r=a(7896),n=a(7747),o=a(6326),s=a(6554),c=a(8702),m=a(5432),i=a(5893),d=(0,s.G)(((e,t)=>{var a;const{overflow:l,overflowX:r,className:n,...o}=e;return(0,i.jsx)(c.m.div,{ref:t,className:(0,m.cx)("chakra-table__container",n),...o,__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:null!=(a=null!=l?l:r)?a:"auto",overflowY:"hidden",maxWidth:"100%"}})})),u=a(9228),p=a(3179),h=a(5227),[E,f]=(0,h.k)({name:"TableStylesContext",errorMessage:"useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" "}),b=(0,s.G)(((e,t)=>{const a=(0,u.jC)("Table",e),{className:l,layout:r,...n}=(0,p.Lr)(e);return(0,i.jsx)(E,{value:a,children:(0,i.jsx)(c.m.table,{ref:t,__css:{tableLayout:r,...a.table},className:(0,m.cx)("chakra-table",l),...n})})}));b.displayName="Table";var x=(0,s.G)(((e,t)=>{const a=f();return(0,i.jsx)(c.m.thead,{...e,ref:t,__css:a.thead})})),v=(0,s.G)(((e,t)=>{const a=f();return(0,i.jsx)(c.m.tr,{...e,ref:t,__css:a.tr})})),w=(0,s.G)((({isNumeric:e,...t},a)=>{const l=f();return(0,i.jsx)(c.m.th,{...t,ref:a,__css:l.th,"data-is-numeric":e})})),y=a(7239),g=(0,s.G)(((e,t)=>{const a=f();return(0,i.jsx)(c.m.tbody,{...e,ref:t,__css:a.tbody})})),S=a(9993);var T=(0,s.G)((function(e,t){const a=(0,u.mq)("Text",e),{className:l,align:r,decoration:n,casing:o,...s}=(0,p.Lr)(e),d=function(e){const t=Object.assign({},e);for(let a in t)void 0===t[a]&&delete t[a];return t}({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,i.jsx)(c.m.p,{ref:t,className:(0,m.cx)("chakra-text",e.className),...d,...s,__css:a})}));T.displayName="Text";var N=a(882);var A=["h","minH","height","minHeight"],_=(0,s.G)(((e,t)=>{const a=(0,u.mq)("Textarea",e),{className:l,rows:r,...n}=(0,p.Lr)(e),o=(0,N.Y)(n),s=r?function(e,t=[]){const a=Object.assign({},e);for(const l of t)l in a&&delete a[l];return a}(a,A):a;return(0,i.jsx)(c.m.textarea,{ref:t,rows:r,...o,className:(0,m.cx)("chakra-textarea",l),__css:s})}));_.displayName="Textarea";var z=a(6915),k=a(4160),R=a(4027),C=(0,R.I)({d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",displayName:"ArrowBackIcon"}),L=a(6855),D=a(8522),j={horizontal:{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}},vertical:{"> *:first-of-type:not(:last-of-type)":{borderBottomRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderTopRadius:0}}},M={horizontal:e=>({"& > *:not(style) ~ *:not(style)":{marginStart:e}}),vertical:e=>({"& > *:not(style) ~ *:not(style)":{marginTop:e}})},O=(0,s.G)((function(e,t){const{size:a,colorScheme:r,variant:n,className:o,spacing:s="0.5rem",isAttached:d,isDisabled:u,orientation:p="horizontal",...h}=e,E=(0,m.cx)("chakra-button__group",o),f=(0,l.useMemo)((()=>({size:a,colorScheme:r,variant:n,isDisabled:u})),[a,r,n,u]);let b={display:"inline-flex",...d?j[p]:M[p](s)};const x="vertical"===p;return(0,i.jsx)(D.D,{value:f,children:(0,i.jsx)(c.m.div,{ref:t,role:"group",__css:b,className:E,"data-attached":d?"":void 0,"data-orientation":p,flexDir:x?"column":void 0,...h})})}));O.displayName="ButtonGroup";var G=e=>{let{multiStopwatch:t,startAll:a,stopAll:r,resetAll:n}=e;return l.createElement(y.M,{mb:2,mt:2},t.state==o.QR.NOT_STARTED?l.createElement(z.z,{size:"lg",colorScheme:"green",isDisabled:t.state!=o.QR.NOT_STARTED,onClick:()=>a()},"Start All"):l.createElement(O,{isAttached:!0,variant:"solid",size:"lg"},l.createElement(z.z,{isDisabled:t.state!=o.QR.RUNNING,colorScheme:"red",onClick:()=>r()},"Stop All"),l.createElement(z.z,{colorScheme:"yellow",onClick:()=>n()},"Reset All")))},H=(0,s.G)((({isNumeric:e,...t},a)=>{const l=f();return(0,i.jsx)(c.m.td,{...t,ref:a,__css:l.td,"data-is-numeric":e})})),I=a(8783),U=a(3090),Q=(0,R.I)({displayName:"DeleteIcon",path:(0,i.jsx)("g",{fill:"currentColor",children:(0,i.jsx)("path",{d:"M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"})})}),B=e=>{let{sw:t,stop:a,lap:r,remove:n,setName:s}=e;switch(t.state){case o.Mo.NOT_STARTED:return l.createElement(l.Fragment,null,l.createElement(U.I,{maxWidth:"20ch",size:"md",value:t.name,onChange:e=>s(e.target.value)}),l.createElement(S.h,{colorScheme:"red",onClick:n,"aria-label":"Start",icon:l.createElement(Q,null),ml:1}));case o.Mo.RUNNING:return l.createElement(I.g,{spacing:2,m:0,p:1,width:"8em"},l.createElement(T,{fontSize:"lg",as:"b"},t.name),l.createElement(O,{size:"md",isAttached:!0,variant:"solid"},l.createElement(z.z,{colorScheme:"blue",onClick:r},"Lap"),l.createElement(z.z,{colorScheme:"red",onClick:a},"Stop")));case o.Mo.COMPLETED:return l.createElement(I.g,{spacing:2,m:0,p:1,width:"8em"},l.createElement(T,{fontSize:"lg",as:"b"},t.name))}},F=e=>{let{laps:t,startTime:a,index:r}=e;return l.createElement(H,{m:0,p:0,pl:1,pr:1,border:"1px",borderColor:"white"},l.createElement(y.M,null,l.createElement(I.g,{spacing:0},l.createElement(T,{fontSize:"md",as:"b"},(0,o.dH)(t[r]-a)),l.createElement(T,{fontSize:"xs"},(0,o.dH)(t[r]-(r?t[r-1]:a))))))},X=e=>{let{sw:t,index:a,stop:r,lap:n,remove:s,setName:c,maxLaps:m}=e;return l.createElement(v,null,l.createElement(H,{m:0,p:0},l.createElement(y.M,{p:.5,ml:1,mr:1},l.createElement(B,{sw:t,stop:r,lap:n,index:a,remove:s,setName:c}))),t.state!==o.Mo.NOT_STARTED&&l.createElement(l.Fragment,null,l.createElement(W,{sw:t}),Array.from({length:m}).map(((e,a)=>m-a-1<t.laps.length?l.createElement(F,{key:m-a,laps:t.laps,startTime:t.startTime,index:m-a-1}):l.createElement(H,null)))))};const W=e=>{let{sw:t}=e;const{0:a,1:r}=(0,l.useState)(Date.now());return(0,l.useEffect)((()=>{const e=setInterval((()=>{r(Date.now())}),20);return()=>clearInterval(e)}),[]),l.createElement(H,{m:0,p:0},l.createElement(I.g,{spacing:0},l.createElement(T,{fontSize:"xl",as:"b"},(0,o.dH)(o.pS.elapsed(t,a))),l.createElement(T,{fontSize:"sm"},(0,o.dH)(o.pS.currentLap(t,a)))))};var q=a(2459),P=e=>{let{id:t}=e;const{createStopwatch:a,removeStopwatch:r,multiStopwatch:s,stopAll:c,stop:m,startAll:i,resetAll:u,lap:p,setStopwatchName:h,setNotes:E}=(0,o.bl)(t);return l.createElement(n.xu,{m:1},l.createElement(k.rU,{to:"/"},l.createElement(C,{boxSize:8})),l.createElement(G,{multiStopwatch:s,stopAll:c,startAll:i,resetAll:u}),l.createElement(d,null,l.createElement(b,{border:"1px",size:"sm"},l.createElement(x,null,l.createElement(v,null,l.createElement(w,{width:s.state==o.QR.NOT_STARTED?"15em":"8em"}),l.createElement(w,{width:"5em"},s.state!==o.QR.NOT_STARTED?"Time":null),Array.from({length:o.Fw.maxLaps(s)}).map(((e,t,a)=>l.createElement(w,{key:t,width:"5em"},l.createElement(y.M,null,a.length-t)))),l.createElement(w,null))),l.createElement(g,null,s.stopwatches.map(((e,t)=>l.createElement(X,{key:t,sw:e,index:t,stop:()=>m(t),lap:()=>p(t),remove:()=>r(t),setName:e=>h(t,e),maxLaps:o.Fw.maxLaps(s)})))))),s.state==o.QR.NOT_STARTED&&l.createElement(S.h,{colorScheme:"green","aria-label":"Add Stopwatch",onClick:a,icon:l.createElement(L.d,null),mt:2}),l.createElement(T,{mt:2},"Notes"),l.createElement(_,{w:"100%",placeholder:"Write some notes here...",value:s.notes,onChange:e=>E(e.target.value)}),s.state==o.QR.COMPLETE&&l.createElement(z.z,{onClick:()=>{const e=(0,o.MJ)(s),t=new Blob([e],{type:"text/csv"}),a=document.createElement("a");console.log("Downloading");const l=URL.createObjectURL(t);a.setAttribute("href",l),a.setAttribute("download",s.name+".csv"),a.style.visibility="hidden",document.body.appendChild(a),a.click(),document.body.removeChild(a)},mt:2},"Export CSV"),l.createElement(z.z,{onClick:()=>{const e=(0,o.kq)(s),t=q.write(e,{bookType:"xlsx",type:"array"}),a=new Blob([t],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),l=document.createElement("a");console.log("Downloading");const r=URL.createObjectURL(a);l.setAttribute("href",r),l.setAttribute("download",s.name+".xlsx"),l.style.visibility="hidden",document.body.appendChild(l),l.click(),document.body.removeChild(l)},mt:1},"Export XLSX"))};var V=()=>{const e=(0,r.useLocation)(),t=new URLSearchParams(e.search).get("id");return t?l.createElement(n.xu,{bgColor:"#1B1342",color:"#F5EFED",minHeight:"100vh",width:"auto",overflowX:"auto"},l.createElement(P,{id:t})):null}}}]);
//# sourceMappingURL=component---src-pages-stopwatch-tsx-bf8d04fffc9d68c47572.js.map