"use strict";(self.webpackChunkd3=self.webpackChunkd3||[]).push([[771],{771:function(t,e,n){n.r(e),n.d(e,{default:function(){return Z}});var r=n(3433),i=n(9439),l=n(2791),a=n(184);function u(t){var e=t.color;return(0,a.jsx)("circle",{cx:"16",cy:"16",r:"4",fill:e||"rgb(126, 164, 248)"})}function c(){return(0,a.jsxs)("g",{children:[(0,a.jsx)("rect",{y:"0",type:"h",fill:"rgb(216, 211, 231)",width:"32",height:"32"}),(0,a.jsx)("text",{x:"14.21875",y:"21.5",fill:"#ffffff",children:"I"})]})}function s(){return(0,a.jsxs)("g",{children:[(0,a.jsx)("rect",{y:"0",type:"h",fill:"rgb(226, 106, 84)",width:"32",height:"32"}),(0,a.jsx)("text",{x:"4.21875",y:"21.5",fill:"#ffffff",children:"PVZ"})]})}function o(){return(0,a.jsxs)("g",{children:[(0,a.jsx)("rect",{y:"0",type:"h",fill:"rgb(96, 199, 175)",width:"32",height:"32"}),(0,a.jsx)("text",{x:"8.21875",y:"21.5",fill:"#ffffff",children:"VZ"})]})}function h(){return(0,a.jsxs)("g",{children:[(0,a.jsx)("rect",{y:"0",type:"h",fill:"rgb(80, 161, 226)",width:"32",height:"32"}),(0,a.jsx)("text",{x:"12.21875",y:"21.5",fill:"balck",children:"Y"})]})}function f(t){var e=t.name;var n=function(t){var e=t.charCodeAt(0);return"rgb("+43*e%256+", "+67*e%256+", "+97*e%256+")"}(e);return(0,a.jsxs)("g",{children:[(0,a.jsx)("rect",{y:"0",type:"h",fill:n,width:"32",height:"32"}),(0,a.jsx)("text",{textAnchor:"middle",alignmentBaseline:"middle",width:"32",height:"32",x:"14.21875",y:"18",fill:"#ffffff",children:e})]})}function d(t){var e,n,i=t.gate,l=Math.min.apply(Math,(0,r.Z)(null===i||void 0===i?void 0:i.qubit)),d=Math.max.apply(Math,(0,r.Z)(null===i||void 0===i?void 0:i.qubit));return(0,a.jsxs)("g",{children:[i&&(null===(e=i.qubit)||void 0===e?void 0:e.map((function(t,e){return(0,a.jsx)("g",{transform:"translate(0,".concat(40*t+24,")"),children:function(){switch(i.name){case"cz":return(0,a.jsx)(u,{});case"i":return(0,a.jsx)(c,{});case"pvz":return(0,a.jsx)(s,{});case"vz":return(0,a.jsx)(o,{});case"y":return(0,a.jsx)(h,{});default:return(0,a.jsx)(f,{name:null===i||void 0===i?void 0:i.name})}}()},e)}))),(null===(n=i.qubit)||void 0===n?void 0:n.length)>1&&(0,a.jsx)("line",{strokeWidth:"2",stroke:"rgb(126, 164, 248)",x1:16,x2:16,y1:40*l+40,y2:40*d+40})]})}function x(t){var e=t.x,n=t.item;t.qubitLineArry;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("g",{transform:"translate(".concat(45*e+95,")"),children:null===n||void 0===n?void 0:n.map((function(t,r){return(0,a.jsx)(d,{name:n.name,x:e,gate:t,y:r},r)}))})})}var g=n(4059),m=n(5499),b=n(9992),j=n(5602);function v(t){return JSON.parse(JSON.stringify(t))}function y(t){for(var e,n,r=[],i=[],l=0,a=0;0!==t.length;){l=-1,a=-1;var u=[];i=[];for(var c=0;c<t.length;c++)t[c].qubit.sort((function(t,e){return t-e})),1==t[c].qubit.length?(e=t[c].qubit[0],n=t[c].qubit[0]):(e=t[c].qubit[0],n=t[c].qubit[t[c].qubit.length-1]),-1==l?(l=e,a=n,i.push(v(t[c]))):n>=l&&a>=e?u.push(v(t[c])):(i.push(v(t[c])),l=Math.min(l,e),a=Math.max(a,n));t=u,r.push(v(i))}return r.sort((function(t,e){for(var n=-1,r=-1,i=0;i<t.length;i++)n=Math.max(t[i].qubit.length,n);for(var l=0;l<e.length;l++)r=Math.max(e[l].qubit.length,r);return r-n})),r}function p(t){for(var e=t.index,n=(t.item,t.qubitLineArry),r=t.delCurcuitLenght,i=0,l=0;l<e+1;l++)i+=r[l];return(0,a.jsxs)("g",{transform:"translate(".concat(45*i-45+30,")"),children:[(0,a.jsx)("rect",{fill:"rgb(215, 215, 215)",width:5,height:40*n.length,y:"30",x:"100"}),(0,a.jsx)("text",{x:e>9?94:99,y:"21.5",fill:"green",children:e}),(0,a.jsx)("line",{x1:102.5,x2:102.5,y1:30,y2:40*n.length,strokeDasharray:"4",stroke:"rgb(45, 45, 45)"})]})}function q(t){var e=t.color;return(0,a.jsx)("circle",{cx:"16",cy:"16",r:"4",fill:e||"rgb(126, 164, 248)",stroke:"black",strokeWidth:"1"})}function k(t){var e,n,i=t.gate,l=Math.min.apply(Math,(0,r.Z)(null===i||void 0===i?void 0:i.qubit)),u=Math.max.apply(Math,(0,r.Z)(null===i||void 0===i?void 0:i.qubit));return(0,a.jsxs)("g",{children:[(null===(e=i.qubit)||void 0===e?void 0:e.length)>1&&(0,a.jsx)("line",{strokeWidth:"1",stroke:"rgb(31, 161, 206)",x1:16,x2:16,y1:20*l+40,y2:20*u+40}),null===(n=i.qubit)||void 0===n?void 0:n.map((function(t,e){return(0,a.jsx)("g",{transform:"translate(0,".concat(20*t+24,")"),children:(0,a.jsx)(q,{color:i.qubit.length>1?"yellow":"red"})},e)}))]})}function z(t){var e=t.x,n=t.item;return(0,a.jsx)("g",{children:(0,a.jsx)("g",{transform:"translate(".concat(20*e+95,")"),children:null===n||void 0===n?void 0:n.map((function(t,r){return(0,a.jsx)(k,{name:n.name,x:e,gate:t,y:r},r)}))})})}function L(){return(0,a.jsxs)("g",{children:[(0,a.jsx)("rect",{x:"8",y:"16",width:23,height:17,fill:"#fff"}),(0,a.jsx)("path",{d:"M8, 30A10 10 90 1 1 30 30M19, 30",strokeWidth:"1",stroke:"black",fill:"none"}),(0,a.jsx)("circle",{r:"2.5",cx:"19",cy:"28",fill:"black"}),(0,a.jsx)("line",{x1:"19",y1:"28",x2:"28",y2:"15",strokeWidth:"1",stroke:"black"})]})}function C(t){for(var e=t.index,n=(t.item,t.qubitLineArry,t.delCurcuitLenght),r=0,i=0;i<e+1;i++)r+=n[i];return(0,a.jsx)("g",{transform:"translate(".concat(20*r-20+8,")"),children:(0,a.jsx)("text",{fontSize:12,x:e>9?94:99,y:"21.5",fill:"green",children:e})})}function w(t){var e=t.circuit,n=t.qubitLineArry,r=t.delCircuit1,i=t.delCurcuitLenght,l=20*e.length+230,u=20*n.length+230;return(0,a.jsx)("div",{style:{marginLeft:50},children:(0,a.jsxs)("svg",{width:l,height:u,style:{backgroundColor:"#fff"},id:"circuit",children:[n.map((function(t,e){return(0,a.jsxs)("g",{transform:"translate(60,".concat(20+20*e?20*e:0,")"),children:[(0,a.jsx)("g",{transform:"translate(-14,4)",children:(0,a.jsx)("text",{x:"38.4",y:"36",dy:".3em",fill:"rgb(111, 111, 111)",fontWeight:"400",textAnchor:"end",fontSize:"14px",children:(0,a.jsxs)("tspan",{children:["q[",e,"]"]})})}),(0,a.jsx)("line",{className:"qubit",strokeWidth:"1",x1:"30",y1:"40",x2:l-80,y2:"40","data-dis":"0",stroke:"black"})]},e)})),n.map((function(t,n){return(0,a.jsx)("g",{transform:"translate(".concat(20*e.length+180,",").concat(20+20*n?20*n+17:0,")"),children:(0,a.jsx)(L,{})})})),r.map((function(t,e){return(0,a.jsx)(z,{qubitLineArry:n,x:e,item:t},e)})),i.map((function(t,e){return(0,a.jsx)(C,{item:t,index:e,qubitLineArry:n,delCurcuitLenght:i},e)}))]})})}var A=[[{name:"cz",qubit:[3,4,5,6,7]},{name:"cz",qubit:[5,6]},{name:"i",qubit:[7]},{name:"pvz",qubit:[0]}],[{name:"cz",qubit:[0,1]},{name:"cz",qubit:[2,3,4,5]},{name:"i",qubit:[4]},{name:"i",qubit:[5]},{name:"cz",qubit:[6,7,8,9]},{name:"cz",qubit:[8,9,10,11,12,13,14,15]},{name:"cz",qubit:[16,17]},{name:"cz",qubit:[9,14]},{name:"cz",qubit:[10,11]},{name:"cz",qubit:[12,13]}],[{name:"cz",qubit:[3,4,5]},{name:"y",qubit:[7]}],[{name:"cz",qubit:[3,4]},{name:"pvz",qubit:[7]}],[{name:"pvz",qubit:[1]}],[{name:"pvz",qubit:[2]}],[{name:"pvz",qubit:[3]}],[{name:"pvz",qubit:[4]}],[{name:"pvz",qubit:[5]}],[{name:"pvz",qubit:[6]}],[{name:"pvz",qubit:[7]}],[{name:"pvz",qubit:[8]}]];function M(t){var e=t.circuit,n=t.qubitLineArry,r=t.delCircuit1,i=t.delCurcuitLenght,l=60*e.length+200,u=60*n.length+200;return(0,a.jsx)("div",{children:(0,a.jsxs)("svg",{style:{backgroundColor:"#fff"},id:"circuit",width:l,height:u,children:[n.map((function(t,e){return(0,a.jsxs)("g",{transform:"translate(60,".concat(20+40*e?40*e:0,")"),children:[(0,a.jsx)("g",{transform:"translate(-14,4)",children:(0,a.jsx)("text",{x:"38.4",y:"36",dy:".3em",fill:"rgb(111, 111, 111)",fontWeight:"400",textAnchor:"end",fontSize:"14px",children:(0,a.jsxs)("tspan",{children:["q[",e,"]"]})})}),(0,a.jsx)("line",{className:"qubit",strokeWidth:"2",x1:"30",y1:"40",x2:l-80,y2:"40","data-dis":"0",stroke:"black"})]},e)})),r.map((function(t,e){return(0,a.jsx)(x,{qubitLineArry:n,x:e,item:t},e)})),i.map((function(t,e){return(0,a.jsx)(p,{item:t,index:e,qubitLineArry:n,delCurcuitLenght:i},e)}))]})})}function Z(){for(var t=(0,l.useRef)(),e=(0,l.useState)(A),n=(0,i.Z)(e,2),u=n[0],c=n[1],s=u.map((function(t){return(0,r.Z)(t)})),o=[],h=0;h<u.length;h++)o.push(y(u[h]));for(var f=[],d=0;d<o.length;d++)f.push(o[d].length);for(var x=[],v=0;v<o.length;v++)if(o[v].length>=1)for(var p=0;p<o[v].length;p++)x.push(o[v][p]);for(var q=function(t){return t.reduce((function(t,e){var n=e.reduce((function(t,e){return Math.max.apply(Math,[t].concat((0,r.Z)(e.qubit||[])))}),0);return Math.max(n,t)}),0)}(s),k=[],z=0;z<=q;z++)k.push(z);var L=150*u.length+300>1e3?150*u.length+300:1e3;!(150*u.length+300>1e3)||u.length,!(150*u.length+300>1e3)||u.length;var C=40*k.length+300>600?40*k.length+300:600,Z=(0,l.useState)(null),S=(0,i.Z)(Z,2),W=S[0],N=S[1];(0,l.useEffect)((function(){null!==W&&void 0!==W&&W.length&&c(W)}),[W]);var T=[{key:"1",label:"Normal",children:(0,a.jsx)(M,{delCircuit1:x,qubitLineArry:k,circuit:u,delCurcuitLenght:f})},{key:"2",label:"Simple",children:(0,a.jsx)(w,{delCircuit1:x,qubitLineArry:k,circuit:u,delCurcuitLenght:f})}];return(0,a.jsxs)("div",{style:{background:"#fff",overflowX:"scroll",overflowY:"scroll"},children:[(0,a.jsxs)("div",{style:{marginTop:20,marginLeft:20},className:"uploding",children:[(0,a.jsx)("input",{ref:t,style:{display:"none"},onChange:function(t){var e=new FileReader;e.onload=function(){try{var t=JSON.parse(e.result);N(t)}catch(n){g.ZP.error(n)}},e.readAsText(t.target.files[0])},type:"file",accept:".json"}),(0,a.jsx)(m.Z,{onClick:function(){t.current.click()},style:{marginTop:20},children:"\u5bfc\u5165\u6570\u636e(json)"}),(0,a.jsx)(m.Z,{onClick:function(){(0,j.ZP)(document.getElementById("circuit"))},style:{marginTop:20,marginLeft:10},children:"\u5bfc\u51fa\u56fe\u7247"})]}),(0,a.jsx)("div",{style:{background:"#fff",width:L,height:C,marginTop:50,marginLeft:50},className:"svgConten",children:(0,a.jsx)(b.Z,{defaultActiveKey:"1",items:T})})]})}}}]);
//# sourceMappingURL=771.aee26508.chunk.js.map