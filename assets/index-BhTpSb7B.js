var ci=Object.defineProperty;var ui=(e,t,n)=>t in e?ci(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var N=(e,t,n)=>ui(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Kt=1e-6,Xe=typeof Float32Array<"u"?Float32Array:Array,di="zyx";function fi(){var e=new Xe(9);return Xe!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}function ke(){var e=new Xe(16);return Xe!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function fo(e){var t=new Xe(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function wn(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function Ro(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function hi(e,t){var n=t[0],o=t[1],i=t[2],s=t[3],a=t[4],r=t[5],l=t[6],c=t[7],u=t[8],m=t[9],b=t[10],d=t[11],h=t[12],x=t[13],B=t[14],y=t[15],C=n*r-o*a,g=n*l-i*a,P=n*c-s*a,v=o*l-i*r,T=o*c-s*r,p=i*c-s*l,E=u*x-m*h,w=u*B-b*h,f=u*y-d*h,S=m*B-b*x,L=m*y-d*x,F=b*y-d*B,z=C*F-g*L+P*S+v*f-T*w+p*E;return z?(z=1/z,e[0]=(r*F-l*L+c*S)*z,e[1]=(i*L-o*F-s*S)*z,e[2]=(x*p-B*T+y*v)*z,e[3]=(b*T-m*p-d*v)*z,e[4]=(l*f-a*F-c*w)*z,e[5]=(n*F-i*f+s*w)*z,e[6]=(B*P-h*p-y*g)*z,e[7]=(u*p-b*P+d*g)*z,e[8]=(a*L-r*f+c*E)*z,e[9]=(o*f-n*L-s*E)*z,e[10]=(h*T-x*P+y*C)*z,e[11]=(m*P-u*T-d*C)*z,e[12]=(r*w-a*S-l*E)*z,e[13]=(n*S-o*w+i*E)*z,e[14]=(x*g-h*v-B*C)*z,e[15]=(u*v-m*g+b*C)*z,e):null}function mi(e,t,n){var o=t[0],i=t[1],s=t[2],a=t[3],r=t[4],l=t[5],c=t[6],u=t[7],m=t[8],b=t[9],d=t[10],h=t[11],x=t[12],B=t[13],y=t[14],C=t[15],g=n[0],P=n[1],v=n[2],T=n[3];return e[0]=g*o+P*r+v*m+T*x,e[1]=g*i+P*l+v*b+T*B,e[2]=g*s+P*c+v*d+T*y,e[3]=g*a+P*u+v*h+T*C,g=n[4],P=n[5],v=n[6],T=n[7],e[4]=g*o+P*r+v*m+T*x,e[5]=g*i+P*l+v*b+T*B,e[6]=g*s+P*c+v*d+T*y,e[7]=g*a+P*u+v*h+T*C,g=n[8],P=n[9],v=n[10],T=n[11],e[8]=g*o+P*r+v*m+T*x,e[9]=g*i+P*l+v*b+T*B,e[10]=g*s+P*c+v*d+T*y,e[11]=g*a+P*u+v*h+T*C,g=n[12],P=n[13],v=n[14],T=n[15],e[12]=g*o+P*r+v*m+T*x,e[13]=g*i+P*l+v*b+T*B,e[14]=g*s+P*c+v*d+T*y,e[15]=g*a+P*u+v*h+T*C,e}function Et(e,t,n,o){var i=t[0],s=t[1],a=t[2],r=t[3],l=i+i,c=s+s,u=a+a,m=i*l,b=i*c,d=i*u,h=s*c,x=s*u,B=a*u,y=r*l,C=r*c,g=r*u,P=o[0],v=o[1],T=o[2];return e[0]=(1-(h+B))*P,e[1]=(b+g)*P,e[2]=(d-C)*P,e[3]=0,e[4]=(b-g)*v,e[5]=(1-(m+B))*v,e[6]=(x+y)*v,e[7]=0,e[8]=(d+C)*T,e[9]=(x-y)*T,e[10]=(1-(m+h))*T,e[11]=0,e[12]=n[0],e[13]=n[1],e[14]=n[2],e[15]=1,e}function pi(e,t,n,o,i){var s=1/Math.tan(t/2);if(e[0]=s/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,i!=null&&i!==1/0){var a=1/(o-i);e[10]=i*a,e[14]=i*o*a}else e[10]=-1,e[14]=-o;return e}function Uo(e,t,n,o,i,s,a){var r=1/(t-n),l=1/(o-i),c=1/(s-a);return e[0]=-2*r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=c,e[11]=0,e[12]=(t+n)*r,e[13]=(i+o)*l,e[14]=s*c,e[15]=1,e}function gi(e,t,n,o){var i,s,a,r,l,c,u,m,b,d,h=t[0],x=t[1],B=t[2],y=o[0],C=o[1],g=o[2],P=n[0],v=n[1],T=n[2];return Math.abs(h-P)<Kt&&Math.abs(x-v)<Kt&&Math.abs(B-T)<Kt?Ro(e):(u=h-P,m=x-v,b=B-T,d=1/Math.sqrt(u*u+m*m+b*b),u*=d,m*=d,b*=d,i=C*b-g*m,s=g*u-y*b,a=y*m-C*u,d=Math.sqrt(i*i+s*s+a*a),d?(d=1/d,i*=d,s*=d,a*=d):(i=0,s=0,a=0),r=m*a-b*s,l=b*i-u*a,c=u*s-m*i,d=Math.sqrt(r*r+l*l+c*c),d?(d=1/d,r*=d,l*=d,c*=d):(r=0,l=0,c=0),e[0]=i,e[1]=r,e[2]=u,e[3]=0,e[4]=s,e[5]=l,e[6]=m,e[7]=0,e[8]=a,e[9]=c,e[10]=b,e[11]=0,e[12]=-(i*h+s*x+a*B),e[13]=-(r*h+l*x+c*B),e[14]=-(u*h+m*x+b*B),e[15]=1,e)}function me(){var e=new Xe(3);return Xe!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function An(e){var t=e[0],n=e[1],o=e[2];return Math.sqrt(t*t+n*n+o*o)}function Ne(e,t,n){var o=new Xe(3);return o[0]=e,o[1]=t,o[2]=n,o}function _o(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function Ie(e,t,n,o){return e[0]=t,e[1]=n,e[2]=o,e}function bi(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}function Gn(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function xi(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}function Rt(e,t,n,o){return e[0]=t[0]+n[0]*o,e[1]=t[1]+n[1]*o,e[2]=t[2]+n[2]*o,e}function yi(e,t){var n=t[0]-e[0],o=t[1]-e[1],i=t[2]-e[2];return Math.sqrt(n*n+o*o+i*i)}function ho(e){var t=e[0],n=e[1],o=e[2];return t*t+n*n+o*o}function Fe(e,t){var n=t[0],o=t[1],i=t[2],s=n*n+o*o+i*i;return s>0&&(s=1/Math.sqrt(s)),e[0]=t[0]*s,e[1]=t[1]*s,e[2]=t[2]*s,e}function ot(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Re(e,t,n){var o=t[0],i=t[1],s=t[2],a=n[0],r=n[1],l=n[2];return e[0]=i*l-s*r,e[1]=s*a-o*l,e[2]=o*r-i*a,e}function Cn(e,t,n){var o=t[0],i=t[1],s=t[2],a=n[3]*o+n[7]*i+n[11]*s+n[15];return a=a||1,e[0]=(n[0]*o+n[4]*i+n[8]*s+n[12])/a,e[1]=(n[1]*o+n[5]*i+n[9]*s+n[13])/a,e[2]=(n[2]*o+n[6]*i+n[10]*s+n[14])/a,e}var vi=An;(function(){var e=me();return function(t,n,o,i,s,a){var r,l;for(n||(n=3),o||(o=0),i?l=Math.min(i*n+o,t.length):l=t.length,r=o;r<l;r+=n)e[0]=t[r],e[1]=t[r+1],e[2]=t[r+2],s(e,e,a),t[r]=e[0],t[r+1]=e[1],t[r+2]=e[2];return t}})();function Pi(){var e=new Xe(4);return Xe!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function Mi(e,t){var n=t[0],o=t[1],i=t[2],s=t[3],a=n*n+o*o+i*i+s*s;return a>0&&(a=1/Math.sqrt(a)),e[0]=n*a,e[1]=o*a,e[2]=i*a,e[3]=s*a,e}(function(){var e=Pi();return function(t,n,o,i,s,a){var r,l;for(n||(n=4),o||(o=0),i?l=Math.min(i*n+o,t.length):l=t.length,r=o;r<l;r+=n)e[0]=t[r],e[1]=t[r+1],e[2]=t[r+2],e[3]=t[r+3],s(e,e,a),t[r]=e[0],t[r+1]=e[1],t[r+2]=e[2],t[r+3]=e[3];return t}})();function Gt(){var e=new Xe(4);return Xe!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e[3]=1,e}function Si(e,t,n){n=n*.5;var o=Math.sin(n);return e[0]=o*t[0],e[1]=o*t[1],e[2]=o*t[2],e[3]=Math.cos(n),e}function ln(e,t,n,o){var i=t[0],s=t[1],a=t[2],r=t[3],l=n[0],c=n[1],u=n[2],m=n[3],b,d,h,x,B;return d=i*l+s*c+a*u+r*m,d<0&&(d=-d,l=-l,c=-c,u=-u,m=-m),1-d>Kt?(b=Math.acos(d),h=Math.sin(b),x=Math.sin((1-o)*b)/h,B=Math.sin(o*b)/h):(x=1-o,B=o),e[0]=x*i+B*l,e[1]=x*s+B*c,e[2]=x*a+B*u,e[3]=x*r+B*m,e}function wi(e,t){var n=t[0]+t[4]+t[8],o;if(n>0)o=Math.sqrt(n+1),e[3]=.5*o,o=.5/o,e[0]=(t[5]-t[7])*o,e[1]=(t[6]-t[2])*o,e[2]=(t[1]-t[3])*o;else{var i=0;t[4]>t[0]&&(i=1),t[8]>t[i*3+i]&&(i=2);var s=(i+1)%3,a=(i+2)%3;o=Math.sqrt(t[i*3+i]-t[s*3+s]-t[a*3+a]+1),e[i]=.5*o,o=.5/o,e[3]=(t[s*3+a]-t[a*3+s])*o,e[s]=(t[s*3+i]+t[i*3+s])*o,e[a]=(t[a*3+i]+t[i*3+a])*o}return e}function Ci(e,t,n,o){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:di,s=Math.PI/360;t*=s,o*=s,n*=s;var a=Math.sin(t),r=Math.cos(t),l=Math.sin(n),c=Math.cos(n),u=Math.sin(o),m=Math.cos(o);switch(i){case"xyz":e[0]=a*c*m+r*l*u,e[1]=r*l*m-a*c*u,e[2]=r*c*u+a*l*m,e[3]=r*c*m-a*l*u;break;case"xzy":e[0]=a*c*m-r*l*u,e[1]=r*l*m-a*c*u,e[2]=r*c*u+a*l*m,e[3]=r*c*m+a*l*u;break;case"yxz":e[0]=a*c*m+r*l*u,e[1]=r*l*m-a*c*u,e[2]=r*c*u-a*l*m,e[3]=r*c*m+a*l*u;break;case"yzx":e[0]=a*c*m+r*l*u,e[1]=r*l*m+a*c*u,e[2]=r*c*u-a*l*m,e[3]=r*c*m-a*l*u;break;case"zxy":e[0]=a*c*m-r*l*u,e[1]=r*l*m+a*c*u,e[2]=r*c*u+a*l*m,e[3]=r*c*m-a*l*u;break;case"zyx":e[0]=a*c*m-r*l*u,e[1]=r*l*m+a*c*u,e[2]=r*c*u-a*l*m,e[3]=r*c*m+a*l*u;break;default:throw new Error("Unknown angle order "+i)}return e}var ko=Mi;(function(){var e=me(),t=Ne(1,0,0),n=Ne(0,1,0);return function(o,i,s){var a=ot(i,s);return a<-.999999?(Re(e,t,i),vi(e)<1e-6&&Re(e,n,i),Fe(e,e),Si(o,e,Math.PI),o):a>.999999?(o[0]=0,o[1]=0,o[2]=0,o[3]=1,o):(Re(e,i,s),o[0]=e[0],o[1]=e[1],o[2]=e[2],o[3]=1+a,ko(o,o))}})();(function(){var e=Gt(),t=Gt();return function(n,o,i,s,a,r){return ln(e,o,a,r),ln(t,i,s,r),ln(n,e,t,2*r*(1-r)),n}})();(function(){var e=fi();return function(t,n,o,i){return e[0]=o[0],e[3]=o[1],e[6]=o[2],e[1]=i[0],e[4]=i[1],e[7]=i[2],e[2]=-n[0],e[5]=-n[1],e[8]=-n[2],ko(t,wi(t,e))}})();const Ti=["terrain","terrainWireframe","marker","section","sectionWireframe","sectionEdge","sectionIntersection","sectionTopProfile","sectionTopProfileEdge","profile","profileEdge","profileMarker","profileMarkerEdge","profileLayer","profileLayerEdge","profileSectionIntersection","solid","solidEdge","solidWireframe","curve"],Bi=new Set(Ti);function Ii(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function yt(e,t){return`${e}[${JSON.stringify(t)}]`}function Se(e,t){if(!Ii(e))throw new Error(`${t} must be an object`);return e}function Ve(e,t){if(!Array.isArray(e))throw new Error(`${t} must be an array`);return e}function Ce(e,t){if(typeof e!="string")throw new Error(`${t} must be a string`);return e}function fe(e,t){if(typeof e!="number"||!Number.isFinite(e))throw new Error(`${t} must be a finite number`);return e}function Ei(e,t){if(typeof e!="boolean")throw new Error(`${t} must be a boolean`);return e}function Jt(e,t,n){const o=Ve(e,t);for(let i=0;i<o.length;i+=1){const s=fe(o[i],`${t}[${i}]`);if(n!=null&&n.integer&&!Number.isInteger(s))throw new Error(`${t}[${i}] must be an integer`)}return o}function Ai(e,t){const n=Ve(e,t);if(n.length!==2)throw new Error(`${t} must have length 2`);return[fe(n[0],`${t}[0]`),fe(n[1],`${t}[1]`)]}function xt(e,t){const n=Ve(e,t);if(n.length!==3)throw new Error(`${t} must have length 3`);return[fe(n[0],`${t}[0]`),fe(n[1],`${t}[1]`),fe(n[2],`${t}[2]`)]}function en(e,t){return Ve(e,t).map((o,i)=>Ai(o,`${t}[${i}]`))}function Gi(e,t){return Ve(e,t).map((o,i)=>en(o,`${t}[${i}]`))}function Di(e,t){const n=Se(e,t),o={id:Ce(n.id,`${t}.id`),name:Ce(n.name,`${t}.name`),color:xt(n.color,`${t}.color`)};return n.patternId!==void 0&&(o.patternId=fe(n.patternId,`${t}.patternId`)),o}function Li(e,t){const n=Ce(e,t);if(!Bi.has(n))throw new Error(`${t} must be a valid SceneObjectType (got ${JSON.stringify(n)})`);return n}function Ni(e,t){const n=Se(e,t),o=Se(n.mesh,`${t}.mesh`),i=Ce(o.primitive,`${t}.mesh.primitive`);if(i!=="box"&&i!=="plane")throw new Error(`${t}.mesh.primitive must be "box" or "plane"`);const s={id:Ce(n.id,`${t}.id`),type:Li(n.type,`${t}.type`),mesh:{primitive:i}};return o.size!==void 0&&(s.mesh.size=xt(o.size,`${t}.mesh.size`)),n.color!==void 0&&(s.color=xt(n.color,`${t}.color`)),n.soilId!==void 0&&(s.soilId=Ce(n.soilId,`${t}.soilId`)),n.patternId!==void 0&&(s.patternId=fe(n.patternId,`${t}.patternId`)),n.gridScale!==void 0&&(s.gridScale=fe(n.gridScale,`${t}.gridScale`)),n.position!==void 0&&(s.position=xt(n.position,`${t}.position`)),n.rotation!==void 0&&(s.rotation=xt(n.rotation,`${t}.rotation`)),n.scale!==void 0&&(s.scale=xt(n.scale,`${t}.scale`)),s}function Vi(e,t){const n=Se(e,t),o={id:Ce(n.id,`${t}.id`),name:Ce(n.name,`${t}.name`),path:en(n.path,`${t}.path`)};return n.vector!==void 0&&(o.vector=Yo(n.vector,`${t}.vector`)),o}function zi(e,t){const n=Se(e,t);return{soilId:Ce(n.soilId,`${t}.soilId`),thickness:fe(n.thickness,`${t}.thickness`),depthFrom:fe(n.depthFrom,`${t}.depthFrom`),depthTo:fe(n.depthTo,`${t}.depthTo`)}}function jo(e,t){const n=Se(e,t),o=Se(n.position,`${t}.position`),i=Ve(n.layers,`${t}.layers`);return{id:Ce(n.id,`${t}.id`),name:Ce(n.name,`${t}.name`),position:{x:fe(o.x,`${t}.position.x`),y:fe(o.y,`${t}.position.y`),zGround:fe(o.zGround,`${t}.position.zGround`)},depth:fe(n.depth,`${t}.depth`),gwt:n.gwt===null?null:fe(n.gwt,`${t}.gwt`),activeForModel:Ei(n.activeForModel,`${t}.activeForModel`),layers:i.map((s,a)=>zi(s,`${t}.layers[${a}]`))}}function Yo(e,t){const n=Se(e,t),o=n.interfaces===void 0?null:Se(n.interfaces,`${t}.interfaces`),i=Object.create(null);if(o)for(const[r,l]of Object.entries(o))i[r]=en(l,yt(`${t}.interfaces`,r));const s=n.patches===void 0?null:Se(n.patches,`${t}.patches`),a=Object.create(null);if(s)for(const[r,l]of Object.entries(s)){const c=Se(l,yt(`${t}.patches`,r));a[r]={rings:Gi(c.rings,`${yt(`${t}.patches`,r)}.rings`)}}return{id:Ce(n.id,`${t}.id`),name:Ce(n.name,`${t}.name`),worldPath:en(n.worldPath,`${t}.worldPath`),LWorld:fe(n.LWorld,`${t}.LWorld`),sMaxCad:fe(n.sMaxCad,`${t}.sMaxCad`),sScale:fe(n.sScale,`${t}.sScale`),zRef:fe(n.zRef,`${t}.zRef`),zBase:fe(n.zBase,`${t}.zBase`),interfaces:i,patches:a}}function Fi(e,t){const n=Se(e,t);return{xMin:fe(n.xMin,`${t}.xMin`),xMax:fe(n.xMax,`${t}.xMax`),zMin:fe(n.zMin,`${t}.zMin`),zMax:fe(n.zMax,`${t}.zMax`),yBase:fe(n.yBase,`${t}.yBase`)}}function Oi(e,t){const n=Se(e,t),o=Jt(n.verticesXZ,`${t}.verticesXZ`),i=Jt(n.triangles,`${t}.triangles`,{integer:!0});if(o.length%2!==0)throw new Error(`${t}.verticesXZ length must be divisible by 2`);if(i.length%3!==0)throw new Error(`${t}.triangles length must be divisible by 3`);const s=o.length/2;for(let a=0;a<i.length;a+=1){const r=i[a];if(r<0||r>=s)throw new Error(`${t}.triangles[${a}] must be in range [0, ${s-1}] (got ${r})`)}return{verticesXZ:o,triangles:i}}function Ri(e){const t=Se(e,"SceneData"),n=Ve(t.soils,"SceneData.soils"),o=Ve(t.objects,"SceneData.objects"),i={soils:n.map((s,a)=>Di(s,`SceneData.soils[${a}]`)),objects:o.map((s,a)=>Ni(s,`SceneData.objects[${a}]`))};if(t.sections!==void 0){const s=Ve(t.sections,"SceneData.sections");i.sections=s.map((a,r)=>Vi(a,`SceneData.sections[${r}]`))}if(t.profiles!==void 0){const s=Ve(t.profiles,"SceneData.profiles");i.profiles=s.map((a,r)=>jo(a,`SceneData.profiles[${r}]`))}return t.solidsModel!==void 0&&(i.solidsModel=$o(t.solidsModel)),i}function $o(e){const t=Se(e,"SolidsModelV2"),n=fe(t.version,"SolidsModelV2.version");if(n!==2)throw new Error(`SolidsModelV2.version must be 2 (got ${n})`);const o=Fi(t.extent,"SolidsModelV2.extent"),i=Oi(t.mesh,"SolidsModelV2.mesh"),s=i.verticesXZ.length/2,a=Se(t.surfaces,"SolidsModelV2.surfaces"),r=Object.create(null);for(const[d,h]of Object.entries(a)){const x=Jt(h,yt("SolidsModelV2.surfaces",d));if(x.length!==s)throw new Error(`${yt("SolidsModelV2.surfaces",d)} must have length ${s} (got ${x.length})`);r[d]=x}const c=Ve(t.solids,"SolidsModelV2.solids").map((d,h)=>{const x=Se(d,`SolidsModelV2.solids[${h}]`),B=Ce(x.top,`SolidsModelV2.solids[${h}].top`),y=Ce(x.bottom,`SolidsModelV2.solids[${h}].bottom`);if(r[B]===void 0)throw new Error(`SolidsModelV2.solids[${h}].top references missing surface ${JSON.stringify(B)}`);if(r[y]===void 0)throw new Error(`SolidsModelV2.solids[${h}].bottom references missing surface ${JSON.stringify(y)}`);return{id:Ce(x.id,`SolidsModelV2.solids[${h}].id`),name:Ce(x.name,`SolidsModelV2.solids[${h}].name`),soilId:Ce(x.soilId,`SolidsModelV2.solids[${h}].soilId`),top:B,bottom:y}});let u;t.sectionCurves!==void 0&&(u=Ve(t.sectionCurves,"SolidsModelV2.sectionCurves").map((h,x)=>{const B=Se(h,`SolidsModelV2.sectionCurves[${x}]`),y=Ve(B.points,`SolidsModelV2.sectionCurves[${x}].points`);return{id:Ce(B.id,`SolidsModelV2.sectionCurves[${x}].id`),name:Ce(B.name,`SolidsModelV2.sectionCurves[${x}].name`),interface:Ce(B.interface,`SolidsModelV2.sectionCurves[${x}].interface`),points:y.map((C,g)=>xt(C,`SolidsModelV2.sectionCurves[${x}].points[${g}]`))}}));let m;if(t.solidOutlines!==void 0){const d=Se(t.solidOutlines,"SolidsModelV2.solidOutlines"),h=Se(d.bySolid,"SolidsModelV2.solidOutlines.bySolid"),x=Object.create(null);for(const[B,y]of Object.entries(h)){const C=Ve(y,yt("SolidsModelV2.solidOutlines.bySolid",B));x[B]=C.map((g,P)=>Jt(g,`${yt("SolidsModelV2.solidOutlines.bySolid",B)}[${P}]`))}m={threshold:fe(d.threshold,"SolidsModelV2.solidOutlines.threshold"),bySolid:x},d.snap!==void 0&&(m.snap=fe(d.snap,"SolidsModelV2.solidOutlines.snap"))}const b={version:2,units:Ce(t.units,"SolidsModelV2.units"),extent:o,mesh:i,surfaces:r,solids:c};return u&&(b.sectionCurves=u),m&&(b.solidOutlines=m),t.meta!==void 0&&(b.meta=Se(t.meta,"SolidsModelV2.meta")),b}function Ui(e){const t=Se(e,"SoilProfilesPayload");return{profiles:Ve(t.profiles,"SoilProfilesPayload.profiles").map((o,i)=>jo(o,`SoilProfilesPayload.profiles[${i}]`))}}function _i(e){const t=Se(e,"SectionVectorDataset");return{sections:Ve(t.sections,"SectionVectorDataset.sections").map((o,i)=>Yo(o,`SectionVectorDataset.sections[${i}]`))}}function ki(e){return e instanceof Error?e.message:String(e)}async function ji(e){const t=await fetch(e);if(!t.ok)throw new Error(`Failed to load scene at ${e}: ${t.status}`);const n=await t.json();try{return Ri(n)}catch(o){throw new Error(`Invalid scene JSON at ${e}: ${ki(o)}`)}}function Pt(e){return{x:e.position.x,z:e.position.y,groundY:e.position.zGround}}function Yi(e,t){e.position.y=t}const st=e=>-e;function $i(e){return e.map(t=>({...t,worldPath:t.worldPath.map(([n,o])=>[n,st(o)])}))}function Wi(e){if(e.objects)for(const t of e.objects)t.position&&(t.position=[t.position[0],t.position[1],st(t.position[2])]);if(e.sections&&(e.sections=e.sections.map(t=>({...t,path:t.path.map(([n,o])=>[n,st(o)])}))),e.profiles)for(const t of e.profiles)Yi(t,st(Pt(t).z))}function Xi(e){const t=e.extent.zMin,n=e.extent.zMax;if(e.extent.zMin=st(n),e.extent.zMax=st(t),e.sectionCurves)for(const s of e.sectionCurves)for(const a of s.points)a[2]=st(a[2]);if(e.solidOutlines)for(const s of Object.values(e.solidOutlines.bySolid))for(const a of s)for(let r=2;r<a.length;r+=3)a[r]=st(a[r]);const{verticesXZ:o,triangles:i}=e.mesh;for(let s=1;s<o.length;s+=2)o[s]=st(o[s]);for(let s=0;s+2<i.length;s+=3){const a=i[s+1];i[s+1]=i[s+2],i[s+2]=a}}function Wo(e){return e instanceof Error?e.message:String(e)}async function mo(e,t){const n=await fetch(e);if(!n.ok)return null;const o=await n.json();try{return t(o)}catch(i){throw new Error(`Invalid JSON at ${e}: ${Wo(i)}`)}}async function Hi(e){const t=await fetch(e);if(!t.ok)return null;const n=await t.json();try{return $o(n)}catch(o){throw new Error(`Invalid JSON at ${e}: ${Wo(o)}`)}}async function qi(e,t){const n=`${e}scene.json`,o=await ji(n),i=await Hi(`${e}solids_model_v2.json`),s=await mo(`${e}soil_profiles_v1.json`,Ui);s!=null&&s.profiles?o.profiles=s.profiles.map(c=>({...c,position:{...c.position},layers:c.layers.map(u=>({...u}))})):o.profiles&&(o.profiles=o.profiles.map(c=>({...c,position:{...c.position},layers:c.layers.map(u=>({...u}))}))),Wi(o),i&&(Xi(i),o.solidsModel=i);const a=await mo(`${e}sections_vector_v1.json`,_i),r=(a==null?void 0:a.sections)??[],l=$i(r);if(l.length>0){const c=new Map(l.map(b=>[b.id,b])),u=[],m=new Set;if(o.sections)for(const b of o.sections){const d=c.get(b.id),h=b.path.length>0?b.path:(d==null?void 0:d.worldPath)??[];u.push({...b,path:h,vector:d}),m.add(b.id)}for(const b of l)m.has(b.id)||u.push({id:b.id,name:b.name,path:b.worldPath,vector:b});o.sections=u}return o}async function Ki(e,t){var a,r,l,c;if(!navigator.gpu){const u=new Error("WebGPU is not supported by this browser.");throw(a=t==null?void 0:t.fail)==null||a.call(t,"navigator.gpu",u),u}const n=(t==null?void 0:t.call("canvas.getContext('webgpu')",()=>e.getContext("webgpu")))??e.getContext("webgpu");if(!n){const u=new Error("Failed to acquire WebGPU context.");throw(r=t==null?void 0:t.fail)==null||r.call(t,"canvas.getContext('webgpu')",u),u}const o=(t?await t.callAsync("navigator.gpu.requestAdapter",()=>navigator.gpu.requestAdapter({powerPreference:"high-performance"})):await navigator.gpu.requestAdapter({powerPreference:"high-performance"}))??null;if(!o){const u=new Error("No suitable GPU adapter found.");throw(l=t==null?void 0:t.fail)==null||l.call(t,"navigator.gpu.requestAdapter",u),u}const i=t?await t.callAsync("GPUAdapter.requestDevice",()=>o.requestDevice()):await o.requestDevice();(c=t==null?void 0:t.attachDevice)==null||c.call(t,i);const s=t?t.call("navigator.gpu.getPreferredCanvasFormat",()=>navigator.gpu.getPreferredCanvasFormat()):navigator.gpu.getPreferredCanvasFormat();return{adapter:o,device:i,context:n,format:s}}class Zi{constructor(t){N(this,"failed",!1);N(this,"attached",!1);this.reportFailure=t}getHint(t){if(!(typeof GPUValidationError<"u"&&t instanceof GPUValidationError))return;const i=(t.message??"").toLowerCase();if(i.includes("depth stencil attachment")&&i.includes("sample count"))return"MSAA mismatch: depth and color attachments must use the same sample count (check overlay passes when MSAA is enabled)."}hasFailed(){return this.failed}fail(t,n,o){if(this.failed)return;const i=o??this.getHint(n);this.failed=!0,this.reportFailure({operation:t,error:n,hint:i})}call(t,n){if(this.failed)throw new Error("WebGPU is in a failed state.");try{return n()}catch(o){throw this.fail(t,o),o}}async callAsync(t,n){if(this.failed)throw new Error("WebGPU is in a failed state.");try{return await n()}catch(o){throw this.fail(t,o),o}}attachDevice(t){this.attached||(this.attached=!0,t.addEventListener("uncapturederror",n=>{this.fail("GPUDevice.uncapturederror",n.error)}),t.lost.then(n=>{this.fail("GPUDevice.lost",new Error(n.message||"The GPU device was lost."),`reason=${n.reason}`)}))}}const po=-Math.PI/2+.001,go=Math.PI/2-.001;class Qi{constructor(){N(this,"target",Ne(0,0,0));N(this,"position",me());N(this,"yaw",Math.PI*.25);N(this,"pitch",Math.PI*.2);N(this,"distance",6);N(this,"aspect",1);N(this,"fov",45*Math.PI/180);N(this,"near",.1);N(this,"far",1e3);N(this,"orthoScale",4);N(this,"mode","perspective");N(this,"view",ke());N(this,"proj",ke());N(this,"viewProj",ke());N(this,"worldUp",Ne(0,1,0));N(this,"tmpForward",me());N(this,"tmpRight",me());N(this,"tmpUp",me())}setAspect(t){this.aspect=Math.max(1e-4,t)}toggleProjection(){this.mode==="perspective"?(this.orthoScale=this.distance*Math.tan(this.fov*.5),this.mode="axonometric"):(this.distance=this.orthoScale/Math.tan(this.fov*.5),this.mode="perspective")}setAngles(t,n){this.yaw=t,this.pitch=Math.max(po,Math.min(go,n))}orbit(t,n,o=.005){this.yaw-=t*o,this.pitch-=n*o,this.pitch=Math.max(po,Math.min(go,this.pitch))}zoom(t,n=.001){const o=Math.exp(t*n);this.mode==="perspective"?this.distance=Math.min(200,Math.max(.2,this.distance*o)):this.orthoScale=Math.min(200,Math.max(.2,this.orthoScale*o))}pan(t,n,o){const i=Math.max(1,o),s=this.getPanScale(i);this.updatePosition(),Gn(this.tmpForward,this.target,this.position),Fe(this.tmpForward,this.tmpForward),Re(this.tmpRight,this.tmpForward,this.worldUp),Fe(this.tmpRight,this.tmpRight),Re(this.tmpUp,this.tmpRight,this.tmpForward),Fe(this.tmpUp,this.tmpUp),Rt(this.target,this.target,this.tmpRight,-t*s),Rt(this.target,this.target,this.tmpUp,n*s)}getViewMatrix(){return this.updatePosition(),gi(this.view,this.position,this.target,this.worldUp),this.view}getProjectionMatrix(){if(this.mode==="perspective")pi(this.proj,this.fov,this.aspect,this.near,this.far);else{const t=this.orthoScale,n=t*this.aspect;Uo(this.proj,-n,n,-t,t,this.near,this.far)}return this.proj}getViewProjMatrix(){return mi(this.viewProj,this.getProjectionMatrix(),this.getViewMatrix()),this.viewProj}getPosition(){return this.updatePosition(),this.position}fitToBounds(t,n,o=1.2){const i=Ne(t[0],t[1],t[2]),s=Ne(n[0],n[1],n[2]),a=me();bi(a,i,s),xi(a,a,.5),_o(this.target,a);const r=.5*yi(i,s)*o;if(this.mode==="perspective"){const l=this.fov*.5,c=r/Math.sin(l),u=r/Math.sin(Math.atan(Math.tan(l)*this.aspect));this.distance=Math.max(c,u)}else this.orthoScale=Math.max(.1,r)}updatePosition(){const t=Math.cos(this.pitch),n=Math.sin(this.pitch),o=Math.cos(this.yaw),i=Math.sin(this.yaw);this.position[0]=this.target[0]+this.distance*t*o,this.position[1]=this.target[1]+this.distance*n,this.position[2]=this.target[2]+this.distance*t*i}getPanScale(t){return this.mode==="perspective"?2*this.distance*Math.tan(this.fov*.5)/t:this.orthoScale*2/t}}const Ji=1.8;class es{constructor(t,n){N(this,"pointerId",null);N(this,"dragMode",null);N(this,"lastX",0);N(this,"lastY",0);N(this,"pointers",new Map);N(this,"lastMidpoint",null);N(this,"lastDistance",null);N(this,"onPointerDown",t=>{if(this.canvas.setPointerCapture(t.pointerId),t.pointerType==="touch"){this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY}),this.updateTouchGestureState();return}this.pointerId=t.pointerId,this.lastX=t.clientX,this.lastY=t.clientY,this.dragMode=this.getDragMode(t)});N(this,"onPointerMove",t=>{if(t.pointerType==="touch"){const i=this.pointers.get(t.pointerId);if(!i)return;const s={x:t.clientX,y:t.clientY};if(this.pointers.set(t.pointerId,s),this.pointers.size===1){const c=s.x-i.x,u=s.y-i.y;this.camera.orbit(-c,-u);return}const a=this.getTwoTouchPoints();if(!a)return;const r=this.getMidpoint(a[0],a[1]),l=this.getDistance(a[0],a[1]);if(this.lastMidpoint&&this.lastDistance!==null){const c=r.x-this.lastMidpoint.x,u=r.y-this.lastMidpoint.y;this.camera.pan(c,u,this.canvas.clientHeight);const m=l-this.lastDistance;Math.abs(m)>0&&this.camera.zoom(-m)}this.lastMidpoint=r,this.lastDistance=l;return}if(this.pointerId!==t.pointerId||!this.dragMode)return;const n=t.clientX-this.lastX,o=t.clientY-this.lastY;this.dragMode==="orbit"?this.camera.orbit(-n,-o):this.camera.pan(n,o,this.canvas.clientHeight),this.lastX=t.clientX,this.lastY=t.clientY});N(this,"onPointerUp",t=>{if(t.pointerType==="touch"){this.pointers.delete(t.pointerId),this.updateTouchGestureState(),this.canvas.releasePointerCapture(t.pointerId);return}this.pointerId===t.pointerId&&(this.canvas.releasePointerCapture(t.pointerId),this.pointerId=null,this.dragMode=null)});N(this,"onWheel",t=>{t.preventDefault();const n=t.deltaY*Ji;this.camera.zoom(n)});N(this,"onContextMenu",t=>{t.preventDefault()});N(this,"onKeyDown",t=>{t.code==="KeyP"&&this.camera.toggleProjection()});this.canvas=t,this.camera=n,this.attach()}attach(){this.canvas.addEventListener("pointerdown",this.onPointerDown),this.canvas.addEventListener("pointermove",this.onPointerMove),this.canvas.addEventListener("pointerup",this.onPointerUp),this.canvas.addEventListener("pointercancel",this.onPointerUp),this.canvas.addEventListener("wheel",this.onWheel,{passive:!1}),this.canvas.addEventListener("contextmenu",this.onContextMenu),window.addEventListener("keydown",this.onKeyDown)}detach(){this.canvas.removeEventListener("pointerdown",this.onPointerDown),this.canvas.removeEventListener("pointermove",this.onPointerMove),this.canvas.removeEventListener("pointerup",this.onPointerUp),this.canvas.removeEventListener("pointercancel",this.onPointerUp),this.canvas.removeEventListener("wheel",this.onWheel),this.canvas.removeEventListener("contextmenu",this.onContextMenu),window.removeEventListener("keydown",this.onKeyDown)}dispose(){this.detach(),this.pointerId=null,this.dragMode=null,this.pointers.clear(),this.lastMidpoint=null,this.lastDistance=null}updateTouchGestureState(){const t=this.getTwoTouchPoints();if(!t){this.lastMidpoint=null,this.lastDistance=null;return}this.lastMidpoint=this.getMidpoint(t[0],t[1]),this.lastDistance=this.getDistance(t[0],t[1])}getTwoTouchPoints(){if(this.pointers.size<2)return null;const t=this.pointers.values(),n=t.next().value,o=t.next().value;return!n||!o?null:[n,o]}getMidpoint(t,n){return{x:(t.x+n.x)*.5,y:(t.y+n.y)*.5}}getDistance(t,n){return Math.hypot(n.x-t.x,n.y-t.y)}getDragMode(t){return t.shiftKey||t.button===1?"pan":t.button===0?"orbit":null}}const ts=`struct FrameUniforms {
  viewProj: mat4x4<f32>,
  cameraPos: vec3<f32>,
  devicePixelRatio: f32,
  cameraDir: vec3<f32>,
  _pad0: f32,
  viewport: vec4<f32>,
};

struct ObjectUniforms {
  model: mat4x4<f32>,
  color: vec4<f32>,
  material: vec4<f32>,
  pick: vec4<f32>,
};

// Keep in sync with \`src/renderer/material.ts\` (MaterialType enum) so TS code, renderer and shader
// agree on numeric material ids.
const MATERIAL_TYPE_STANDARD: i32 = 0;
const MATERIAL_TYPE_TERRAIN: i32 = 1;
const MATERIAL_TYPE_WIREFRAME: i32 = 2;
const MATERIAL_TYPE_GLASS: i32 = 3;
const MATERIAL_TYPE_HIDDEN: i32 = 4;

@group(0) @binding(0)
var<uniform> frame: FrameUniforms;

@group(1) @binding(0)
var<uniform> object: ObjectUniforms;

struct VertexIn {
  @location(0) position: vec3<f32>,
  @location(1) normal: vec3<f32>,
};

struct VertexOut {
  @builtin(position) position: vec4<f32>,
  @location(0) normal: vec3<f32>,
  @location(1) worldPos: vec3<f32>,
};

@vertex
fn vsMain(input: VertexIn) -> VertexOut {
  var out: VertexOut;
  let worldPos = object.model * vec4<f32>(input.position, 1.0);
  out.position = frame.viewProj * worldPos;
  out.normal = normalize((object.model * vec4<f32>(input.normal, 0.0)).xyz);
  out.worldPos = worldPos.xyz;
  return out;
}

// Fade to the average coverage when the pattern is sub-pixel to avoid moire.
fn resolvePattern(value: f32, duty: f32, fw: f32) -> f32 {
  let safeFw = max(fw, 1e-5);
  let fade = clamp(0.5 / safeFw, 0.0, 1.0);
  let clampedDuty = clamp(duty, 0.0, 1.0);
  return mix(clampedDuty, value, fade);
}

// Derivative-based antialiasing for periodic line patterns in screen space.
fn aaLine(u: f32, spacing: f32, thickness: f32) -> f32 {
  let safeSpacing = max(spacing, 1e-5);
  let coord = u / safeSpacing;
  let dist = abs(fract(coord) - 0.5);
  let fw = fwidth(coord);
  let width = clamp(thickness / safeSpacing, 0.0, 1.0);
  let halfWidth = 0.5 * width;
  let line = 1.0 - smoothstep(halfWidth - fw, halfWidth + fw, dist);
  return resolvePattern(line, width, fw);
}

// Antialiased on/off pulse along a period (used for dash segments).
fn aaPulse(u: f32, period: f32, length: f32) -> f32 {
  let safePeriod = max(period, 1e-5);
  let coord = u / safePeriod;
  let phase = fract(coord);
  let fw = fwidth(coord);
  let duty = clamp(length / safePeriod, 0.0, 1.0);
  let head = smoothstep(0.0, fw, phase);
  let tail = 1.0 - smoothstep(duty - fw, duty + fw, phase);
  let pulse = head * tail;
  return resolvePattern(pulse, duty, fw);
}

fn lineMask(
  screenPx: vec2<f32>,
  normal: vec2<f32>,
  spacing: f32,
  thickness: f32
) -> f32 {
  let u = dot(screenPx, normal);
  return aaLine(u, spacing, thickness);
}

fn dashMask(screenPx: vec2<f32>) -> f32 {
  let rowSpacing = 9.0;
  let dashLength = 12.5;
  let dashPeriod = 36.0;
  let thickness = 0.25;
  let rowIndex = floor(screenPx.y / rowSpacing);
  let phase = f32(i32(rowIndex) % 3) * (dashPeriod / 3.0);
  let row = aaLine(screenPx.y, rowSpacing, thickness);
  let dash = aaPulse(screenPx.x + phase, dashPeriod, dashLength);
  return row * dash;
}

fn dashedLineMask(
  screenPx: vec2<f32>,
  normal: vec2<f32>,
  spacing: f32,
  thickness: f32,
  dashLength: f32,
  dashPeriod: f32,
  phase: f32
) -> f32 {
  let line = lineMask(screenPx, normal, spacing, thickness);
  let tangent = vec2<f32>(-normal.y, normal.x);
  let v = dot(screenPx, tangent) + phase;
  let dash = aaPulse(v, dashPeriod, dashLength);
  return line * dash;
}

fn hatchPattern(
  worldPos: vec3<f32>,
  n: vec3<f32>,
  patternId: i32,
  surfaceScale: f32
) -> f32 {
  if (patternId == 0) {
    return 0.0;
  }

  var u = 0.0;
  var v = 0.0;
  let an = abs(n);
  if (an.y >= an.x && an.y >= an.z) {
    u = worldPos.x;
    v = worldPos.z;
  } else if (an.x >= an.z) {
    u = worldPos.z;
    v = worldPos.y;
  } else {
    u = worldPos.x;
    v = worldPos.y;
  }

  let surfacePx = vec2(u, v) * max(surfaceScale, 1e-4);
  let normalA = vec2<f32>(-0.70710678, 0.70710678);
  let normalB = vec2<f32>(0.70710678, 0.70710678);

  if (patternId == 1) {
    let a = lineMask(surfacePx, normalA, 12.0, 0.25);
    let b = lineMask(surfacePx, normalB, 12.0, 0.25);
    return max(a, b);
  } else if (patternId == 2) {
    return dashedLineMask(surfacePx, normalA, 9.0, 0.25, 8.0, 10.0, 0.0);
  } else if (patternId == 3) {
    return dashMask(surfacePx);
  }

  return 0.0;
}

fn gridMask(
  worldPos: vec3<f32>,
  spacing: f32,
  thicknessPx: f32,
  xMin: f32,
  xMax: f32,
  zMin: f32,
  zMax: f32
) -> f32 {
  if (spacing <= 0.0) {
    return 0.0;
  }
  let s = max(1e-4, spacing);
  let lineX = gridLineMask(worldPos.x, s, thicknessPx, xMin, xMax);
  let lineZ = gridLineMask(worldPos.z, s, thicknessPx, zMin, zMax);
  return max(lineX, lineZ);
}

fn gridLineMask(
  u: f32,
  spacing: f32,
  thicknessPx: f32,
  minBound: f32,
  maxBound: f32
) -> f32 {
  let coord = u / spacing;
  // Center grid lines on integer world coordinates so (0,0) is a line crossing.
  let cell = fract(coord);
  let dist = min(cell, 1.0 - cell);
  let fw = max(fwidth(coord), 1e-4);
  let lineIndex = round(coord);
  let linePos = lineIndex * spacing;
  let hasBounds = maxBound > minBound + 1e-4;
  let tol = max(1e-4, spacing * 1e-3);
  let isBoundary =
    hasBounds && (abs(linePos - minBound) < tol || abs(linePos - maxBound) < tol);
  // Convert pixel thickness to grid-space width so the line stays constant on zoom.
  // Boundary lines are clipped by the terrain edge, so widen them to match interior weight.
  let boundaryScale = select(1.0, 2.0, isBoundary);
  let halfWidth = 0.5 * thicknessPx * fw * boundaryScale;
  return 1.0 - smoothstep(halfWidth - fw, halfWidth + fw, dist);
}

@fragment
fn fsMain(input: VertexOut, @builtin(front_facing) isFront: bool) -> @location(0) vec4<f32> {
  let light = normalize(-frame.cameraDir);
  let n = normalize(input.normal);
  let shadeNormal = select(-n, n, isFront);
  var ndotl = 0.0;
  let fill = 0.30;
  let materialType = i32(round(object.material.y));
  let patternId = i32(round(object.material.x));
  let gridOnly = object.material.w;
  // Terrain encodes grid scale in material.z even in glass mode; use it to skip hatch.
  let isTerrain =
    materialType == MATERIAL_TYPE_TERRAIN ||
    (materialType == MATERIAL_TYPE_GLASS && object.material.z > 0.0);

  if (materialType == MATERIAL_TYPE_HIDDEN) {
    // Used for pickable-but-hidden surfaces (e.g. Sections Mesh mode).
    discard;
  }

  ndotl = max(dot(shadeNormal, light), 0.0);

  // Use a mild curve so surfaces darken sooner as they turn away from the light.
  let lightFactor = min(1.0, pow(ndotl, 1.35) + fill);
  let base = object.color.rgb * lightFactor;

  if (materialType == MATERIAL_TYPE_TERRAIN) {
    let gridThicknessPx = select(0.5, 1.0, gridOnly > 0.5);
    let xMin = object.material.x;
    let xMax = object.pick.y;
    let zMin = object.pick.z;
    let zMax = object.pick.w;
    let grid = gridMask(input.worldPos, object.material.z, gridThicknessPx, xMin, xMax, zMin, zMax);
    let gridColor = select(
      vec3<f32>(1.0, 1.0, 1.0),
      vec3<f32>(0.66, 0.66, 0.66),
      gridOnly > 0.5
    );
    if (gridOnly > 0.5) {
      if (grid <= 0.0) {
        discard;
      }
      // Use grid coverage in alpha so alpha-to-coverage can smooth the line without halos.
      return vec4<f32>(gridColor, grid);
    }
    let color = mix(base, gridColor, grid);
    return vec4<f32>(color, object.color.a);
  }

  if (materialType == MATERIAL_TYPE_GLASS) {
    let viewDir = normalize(frame.cameraPos - input.worldPos);
    let fresnel = pow(1.0 - max(dot(shadeNormal, viewDir), 0.0), 3.0);
    let glassLight = mix(0.65, 1.0, ndotl);
    let glassBase = object.color.rgb * glassLight;
    let rim = mix(glassBase, vec3<f32>(1.0, 1.0, 1.0), 0.6);
    let keyLight = normalize(vec3<f32>(0.35, 0.85, 0.25));
    let halfVec = normalize(keyLight + viewDir);
    let spec = pow(max(dot(shadeNormal, halfVec), 0.0), 64.0);
    // Key lights are positioned from the default camera view to hit front/top faces on load.
    let keyLight1 = normalize(vec3<f32>(-0.805159, 0.326138, 0.495332));
    let keyLight2 = normalize(vec3<f32>(0.805159, 0.326138, -0.495332));
    let halfVec1 = normalize(keyLight1 + viewDir);
    let halfVec2 = normalize(keyLight2 + viewDir);
    let spec1 = pow(max(dot(shadeNormal, halfVec1), 0.0), 64.0);
    let spec2 = pow(max(dot(shadeNormal, halfVec2), 0.0), 64.0);
    let extraSpec = (spec1 + spec2) * 0.18;
    let color = mix(glassBase, rim, fresnel) + spec * 0.25 + extraSpec;
    let alpha = clamp(object.color.a * (0.7 + 0.7 * fresnel), 0.0, 1.0);
    if (patternId != 0 && !isTerrain) {
      // Preserve soil hatch even in glass mode (helps keep sections readable while transparent).
      let hatch = hatchPattern(input.worldPos, n, patternId, object.material.w);
      let ink = vec3<f32>(0.0, 0.0, 0.0);
      let hatched = mix(color, ink, clamp(hatch * 0.65, 0.0, 1.0));
      let hatchedAlpha = clamp(alpha + hatch * 0.15, 0.0, 1.0);
      return vec4<f32>(hatched, hatchedAlpha);
    }
    return vec4<f32>(color, alpha);
  }

  if (patternId == 0) {
    return vec4<f32>(base, object.color.a);
  }

  let hatch = hatchPattern(input.worldPos, n, patternId, object.material.w);

  let ink = vec3<f32>(0.0, 0.0, 0.0);
  let color = mix(base, ink, hatch);
  return vec4<f32>(color, object.color.a);
}
`,ns=`struct FrameUniforms {
  viewProj: mat4x4<f32>,
  cameraPos: vec3<f32>,
  devicePixelRatio: f32,
  cameraDir: vec3<f32>,
  _pad0: f32,
  viewport: vec4<f32>,
};

struct ObjectUniforms {
  model: mat4x4<f32>,
  color: vec4<f32>,
  material: vec4<f32>,
  pick: vec4<f32>,
};

@group(0) @binding(0)
var<uniform> frame: FrameUniforms;

@group(1) @binding(0)
var<uniform> object: ObjectUniforms;

struct VertexIn {
  @location(0) start: vec3<f32>,
  @location(1) end: vec3<f32>,
  @location(2) side: f32,
  @location(3) along: f32,
};

struct VertexOut {
  @builtin(position) position: vec4<f32>,
};

fn ndcToScreen(ndc: vec2<f32>, viewport: vec2<f32>) -> vec2<f32> {
  let x = (ndc.x * 0.5 + 0.5) * viewport.x;
  let y = (1.0 - (ndc.y * 0.5 + 0.5)) * viewport.y;
  return vec2<f32>(x, y);
}

@vertex
fn vsMain(input: VertexIn) -> VertexOut {
  let startClip = frame.viewProj * vec4<f32>(input.start, 1.0);
  let endClip = frame.viewProj * vec4<f32>(input.end, 1.0);
  let startNdc = startClip.xy / startClip.w;
  let endNdc = endClip.xy / endClip.w;

  let viewport = frame.viewport.xy;
  let startScreen = ndcToScreen(startNdc, viewport);
  let endScreen = ndcToScreen(endNdc, viewport);
  var dirScreen = endScreen - startScreen;
  let len = length(dirScreen);
  if (len < 1e-4) {
    dirScreen = vec2<f32>(1.0, 0.0);
  } else {
    dirScreen = dirScreen / len;
  }
  let perp = vec2<f32>(-dirScreen.y, dirScreen.x);
  let halfWidth = 3.0;
  let offsetScreen = perp * (halfWidth * input.side);
  let offsetNdc = vec2<f32>(
    offsetScreen.x * frame.viewport.z * 2.0,
    -offsetScreen.y * frame.viewport.w * 2.0
  );

  let baseClip = mix(startClip, endClip, input.along);
  let baseNdc = baseClip.xy / baseClip.w;
  let finalNdc = baseNdc + offsetNdc;

  var out: VertexOut;
  out.position = vec4<f32>(finalNdc * baseClip.w, baseClip.z, baseClip.w);
  return out;
}

@fragment
fn fsMain() -> @location(0) vec4<f32> {
  return object.color;
}
`,os=`struct FrameUniforms {
  viewProj: mat4x4<f32>,
  cameraPos: vec3<f32>,
  devicePixelRatio: f32,
  cameraDir: vec3<f32>,
  _pad0: f32,
  viewport: vec4<f32>,
};

struct ObjectUniforms {
  model: mat4x4<f32>,
  color: vec4<f32>,
  material: vec4<f32>,
  pick: vec4<f32>,
};

@group(0) @binding(0)
var<uniform> frame: FrameUniforms;

@group(1) @binding(0)
var<uniform> object: ObjectUniforms;

struct VertexIn {
  @location(0) position: vec3<f32>,
};

struct VertexOut {
  @builtin(position) position: vec4<f32>,
};

@vertex
fn vsMain(input: VertexIn) -> VertexOut {
  var out: VertexOut;
  let worldPos = object.model * vec4<f32>(input.position, 1.0);
  out.position = frame.viewProj * worldPos;
  return out;
}

@fragment
fn fsMain() -> @location(0) vec4<f32> {
  return object.color;
}

`,is=`struct FrameUniforms {
  viewProj: mat4x4<f32>,
  cameraPos: vec3<f32>,
  devicePixelRatio: f32,
  cameraDir: vec3<f32>,
  _pad0: f32,
  viewport: vec4<f32>,
};

struct ObjectUniforms {
  model: mat4x4<f32>,
  color: vec4<f32>,
  material: vec4<f32>,
  pick: vec4<f32>,
};

@group(0) @binding(0)
var<uniform> frame: FrameUniforms;

@group(1) @binding(0)
var<uniform> object: ObjectUniforms;

struct VertexIn {
  @location(0) aPos: vec3<f32>,
  @location(1) bPos: vec3<f32>,
  @location(2) n0: vec3<f32>,
  @location(3) n1: vec3<f32>,
  @location(4) side: f32,
  @location(5) along: f32,
};

struct VertexOut {
  @builtin(position) position: vec4<f32>,
  @location(0) @interpolate(flat) lineA: vec2<f32>,
  @location(1) @interpolate(flat) lineB: vec2<f32>,
  @location(2) @interpolate(flat) visibility: f32,
};

fn ndcToScreen(ndc: vec2<f32>) -> vec2<f32> {
  let uv = ndc * 0.5 + vec2<f32>(0.5, 0.5);
  return vec2<f32>(uv.x * frame.viewport.x, (1.0 - uv.y) * frame.viewport.y);
}

@vertex
fn vsMain(input: VertexIn) -> VertexOut {
  var out: VertexOut;

  let worldA = object.model * vec4<f32>(input.aPos, 1.0);
  let worldB = object.model * vec4<f32>(input.bPos, 1.0);
  let clipA = frame.viewProj * worldA;
  let clipB = frame.viewProj * worldB;

  let ndcA = clipA.xy / clipA.w;
  let ndcB = clipB.xy / clipB.w;
  let screenA = ndcToScreen(ndcA);
  let screenB = ndcToScreen(ndcB);
  out.lineA = screenA;
  out.lineB = screenB;

  let dir = screenB - screenA;
  let len = max(1e-4, length(dir));
  let tangent = dir / len;
  let normal = vec2<f32>(-tangent.y, tangent.x);

  // Thickness is in CSS pixels to keep edges stable across devicePixelRatio.
  let thickness = max(0.75, object.material.x);
  let halfWidth = 0.5 * thickness;
  let offsetPx = normal * (input.side * halfWidth);
  let offsetNdc = vec2<f32>(
    offsetPx.x * frame.viewport.z * 2.0,
    -offsetPx.y * frame.viewport.w * 2.0
  );

  let base = mix(clipA, clipB, input.along);
  let biasedZ = max(0.0, base.z);
  let shifted = vec4<f32>(
    base.xy + offsetNdc * base.w,
    biasedZ,
    base.w
  );
  out.position = shifted;

  out.visibility = 1.0;
  return out;
}

@fragment
fn fsMain(input: VertexOut) -> @location(0) vec4<f32> {
  if (input.visibility <= 0.0) {
    discard;
  }
  let a = input.lineA;
  let b = input.lineB;
  let ab = b - a;
  let len2 = max(1e-4, dot(ab, ab));

  let p = input.position.xy / frame.devicePixelRatio;
  let t = clamp(dot(p - a, ab) / len2, 0.0, 1.0);
  let proj = a + ab * t;
  let dist = length(p - proj);

  let halfWidth = 0.5 * max(0.75, object.material.x);
  let aa = max(0.5, fwidth(dist));
  let mask = 1.0 - smoothstep(halfWidth - aa, halfWidth + aa, dist);
  return vec4<f32>(object.color.rgb, object.color.a * mask);
}
`,ss=`struct FrameUniforms {
  viewProj: mat4x4<f32>,
  cameraPos: vec3<f32>,
  devicePixelRatio: f32,
  cameraDir: vec3<f32>,
  _pad0: f32,
  viewport: vec4<f32>,
};

struct ObjectUniforms {
  model: mat4x4<f32>,
  color: vec4<f32>,
  material: vec4<f32>,
  pick: vec4<f32>,
};

@group(0) @binding(0)
var<uniform> frame: FrameUniforms;

@group(1) @binding(0)
var<uniform> object: ObjectUniforms;

struct VertexIn {
  @location(0) position: vec3<f32>,
  @location(1) normal: vec3<f32>,
};

struct VertexOut {
  @builtin(position) position: vec4<f32>,
};

@vertex
fn vsMain(input: VertexIn) -> VertexOut {
  var out: VertexOut;
  let worldPos = object.model * vec4<f32>(input.position, 1.0);
  out.position = frame.viewProj * worldPos;
  return out;
}

fn encodeId(id: u32) -> vec4<f32> {
  let r = f32((id >> 0u) & 0xFFu) / 255.0;
  let g = f32((id >> 8u) & 0xFFu) / 255.0;
  let b = f32((id >> 16u) & 0xFFu) / 255.0;
  let a = f32((id >> 24u) & 0xFFu) / 255.0;
  return vec4<f32>(r, g, b, a);
}

@fragment
fn fsMain() -> @location(0) vec4<f32> {
  let id = u32(object.pick.x);
  return encodeId(id);
}
`;function as(e){const t=e.gpuCall("GPUDevice.createShaderModule(pick)",()=>e.device.createShaderModule({code:ss}));return e.gpuCall("GPUDevice.createRenderPipeline(pick)",()=>e.device.createRenderPipeline({layout:e.pipelineLayout,vertex:{module:t,entryPoint:"vsMain",buffers:[{arrayStride:6*4,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:3*4,format:"float32x3"}]}]},fragment:{module:t,entryPoint:"fsMain",targets:[{format:"rgba8unorm"}]},primitive:{topology:"triangle-list",cullMode:"back"},multisample:{count:1},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}))}async function rs(e){return e.gpuCallAsync("Renderer.pick",async()=>{const t=e.pickTexture,n=e.pickView,o=e.pickDepthView,i=e.pickBuffer;if(!t||!n||!o||!i)return null;const s=Math.floor(e.x*e.size.dpr),a=Math.floor(e.y*e.size.dpr);if(s<0||a<0||s>=e.size.width||a>=e.size.height)return null;const r=e.gpuCall("GPUDevice.createCommandEncoder(pick)",()=>e.device.createCommandEncoder()),l=e.gpuCall("GPUCommandEncoder.beginRenderPass(pick)",()=>r.beginRenderPass({colorAttachments:[{view:n,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}],depthStencilAttachment:{view:o,depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1}}));l.setPipeline(e.pipeline),l.setBindGroup(0,e.frameBindGroup);for(const m of e.objects)!m.visible||!m.pickId||(l.setBindGroup(1,m.bindGroup),l.setVertexBuffer(0,m.mesh.vertexBuffer),l.draw(m.mesh.vertexCount,1,0,0));l.end(),e.gpuCall("GPUCommandEncoder.copyTextureToBuffer(pick)",()=>r.copyTextureToBuffer({texture:t,origin:{x:s,y:a}},{buffer:i,bytesPerRow:256},{width:1,height:1,depthOrArrayLayers:1})),e.gpuCall("GPUQueue.submit(pick)",()=>e.device.queue.submit([r.finish()])),await e.gpuCallAsync("GPUBuffer.mapAsync(pickReadback)",()=>i.mapAsync(GPUMapMode.READ));const c=new Uint8Array(e.gpuCall("GPUBuffer.getMappedRange(pickReadback)",()=>i.getMappedRange())),u=c[0]|c[1]<<8|c[2]<<16|c[3]<<24;return e.gpuCall("GPUBuffer.unmap(pickReadback)",()=>i.unmap()),u===0?null:u})}const ls=`struct GBufferFrame {
  viewProj: mat4x4<f32>,
  cameraPos: vec3<f32>,
  _pad0: f32,
  cameraRight: vec3<f32>,
  _pad1: f32,
  cameraUp: vec3<f32>,
  _pad2: f32,
  cameraForward: vec3<f32>,
  _pad3: f32,
};

struct ObjectUniforms {
  model: mat4x4<f32>,
  color: vec4<f32>,
  material: vec4<f32>,
  pick: vec4<f32>,
};

@group(0) @binding(0)
var<uniform> frame: GBufferFrame;

@group(1) @binding(0)
var<uniform> object: ObjectUniforms;

struct VertexIn {
  @location(0) position: vec3<f32>,
  @location(1) normal: vec3<f32>,
};

struct VertexOut {
  @builtin(position) position: vec4<f32>,
  @location(0) worldNormal: vec3<f32>,
  @location(1) worldPos: vec3<f32>,
};

@vertex
fn vsMain(input: VertexIn) -> VertexOut {
  var out: VertexOut;
  let worldPos = object.model * vec4<f32>(input.position, 1.0);
  out.position = frame.viewProj * worldPos;
  out.worldNormal = normalize((object.model * vec4<f32>(input.normal, 0.0)).xyz);
  out.worldPos = worldPos.xyz;
  return out;
}

@fragment
fn fsMain(input: VertexOut, @builtin(front_facing) isFront: bool) -> @location(0) vec4<f32> {
  let normal = select(-input.worldNormal, input.worldNormal, isFront);
  let viewNormal = normalize(vec3<f32>(
    dot(normal, frame.cameraRight),
    dot(normal, frame.cameraUp),
    dot(normal, frame.cameraForward)
  ));
  // Project onto camera forward to get linear view depth (positive in front of the camera).
  let viewDepth = max(dot(input.worldPos - frame.cameraPos, frame.cameraForward), 0.0);
  let packedNormal = viewNormal * 0.5 + 0.5;
  return vec4<f32>(packedNormal, viewDepth);
}
`;function cs(e){const t=e.gpuCall("GPUDevice.createShaderModule(gbuffer)",()=>e.device.createShaderModule({code:ls}));return e.gpuCall("GPUDevice.createRenderPipeline(gbuffer)",()=>e.device.createRenderPipeline({layout:e.pipelineLayout,vertex:{module:t,entryPoint:"vsMain",buffers:[{arrayStride:6*4,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:3*4,format:"float32x3"}]}]},fragment:{module:t,entryPoint:"fsMain",targets:[{format:e.format}]},primitive:{topology:"triangle-list",cullMode:"none"},multisample:{count:1},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}))}function us(e){const t=e.gpuCall("GPUCommandEncoder.beginRenderPass(gbuffer)",()=>e.encoder.beginRenderPass({colorAttachments:[{view:e.gbufferView,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}],depthStencilAttachment:{view:e.gbufferDepthView,depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1}}));t.setBindGroup(0,e.frameBindGroup),t.setPipeline(e.pipeline);for(const n of e.objects)e.isGbufferObject(n)&&(t.setBindGroup(1,n.bindGroup),t.setVertexBuffer(0,n.mesh.vertexBuffer),t.draw(n.mesh.vertexCount,1,0,0));t.end()}const ds=`struct GtaoParams {
  viewport: vec2<f32>,
  invViewport: vec2<f32>,
  aoViewport: vec2<f32>,
  invAoViewport: vec2<f32>,
  projScale: f32,
  radius: f32,
  bias: f32,
  intensity: f32,
  power: f32,
  cornerBoost: f32,
  edgePreserve: f32,
  thickness: f32,
  sampleCount: f32,
  blurSigma: f32,
  blurDepthSigma: f32,
  isPerspective: f32,
  outputMode: f32,
  _pad0: f32,
  blurDir: vec2<f32>,
  nearFar: vec2<f32>,
};

@group(0) @binding(0)
var<uniform> params: GtaoParams;

@group(1) @binding(0)
var gbufferTex: texture_2d<f32>;

@group(1) @binding(1)
var depthTex: texture_depth_2d;

const PI: f32 = 3.14159265;
const PI_HALF: f32 = PI * 0.5;

fn decodeNormal(encoded: vec3<f32>) -> vec3<f32> {
  return normalize(encoded * 2.0 - 1.0);
}

fn hash12(p: vec2<f32>) -> f32 {
  let h = dot(p, vec2<f32>(127.1, 311.7));
  return fract(sin(h) * 43758.5453);
}

fn linearizeDepth(depth01: f32) -> f32 {
  let near = params.nearFar.x;
  let far = params.nearFar.y;
  // Convert WebGPU depth [0..1] back to positive view-space depth (-viewZ) for stable AO math.
  return select(
    near + clamp(depth01, 0.0, 1.0) * (far - near),
    (near * far) / max(far - clamp(depth01, 0.0, 1.0) * (far - near), 1e-6),
    params.isPerspective > 0.5
  );
}

fn reconstructViewPos(aoCoord: vec2<f32>, depth: f32) -> vec3<f32> {
  let centered = (aoCoord + vec2<f32>(0.5)) - 0.5 * params.aoViewport;
  let scale = select(1.0, depth, params.isPerspective > 0.5);
  // Reconstruct view-space position from pixel offset + depth for AO sampling.
  return vec3<f32>(
    centered.x * scale / params.projScale,
    -centered.y * scale / params.projScale,
    depth
  );
}

fn aoToFullCoord(aoCoord: vec2<i32>) -> vec2<i32> {
  let scale = params.viewport / params.aoViewport;
  let full = (vec2<f32>(aoCoord) + vec2<f32>(0.5)) * scale;
  return vec2<i32>(full);
}

fn inBounds(coord: vec2<i32>, size: vec2<i32>) -> bool {
  return coord.x >= 0 && coord.y >= 0 && coord.x < size.x && coord.y < size.y;
}

struct VertexOut {
  @builtin(position) position: vec4<f32>,
};

@vertex
fn vsMain(@builtin(vertex_index) vertexIndex: u32) -> VertexOut {
  var out: VertexOut;
  let pos = array<vec2<f32>, 3>(
    vec2<f32>(-1.0, -1.0),
    vec2<f32>(3.0, -1.0),
    vec2<f32>(-1.0, 3.0)
  );
  out.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
  return out;
}

fn sampleHorizonCos(
  sampleAoCoord: vec2<i32>,
  aoSize: vec2<i32>,
  fullSize: vec2<i32>,
  centerPos: vec3<f32>,
  centerDepth: f32,
  viewVec: vec3<f32>,
  lowHorizonCos: f32,
  falloffMul: f32,
  falloffAdd: f32
) -> f32 {
  if (!inBounds(sampleAoCoord, aoSize)) {
    return lowHorizonCos;
  }
  let sampleFullCoord = aoToFullCoord(sampleAoCoord);
  if (!inBounds(sampleFullCoord, fullSize)) {
    return lowHorizonCos;
  }

  let sampleDepth01 = textureLoad(depthTex, sampleFullCoord, 0);
  if (sampleDepth01 >= 1.0) {
    return lowHorizonCos;
  }
  let sampleDepth = linearizeDepth(sampleDepth01);
  let deltaDepth = centerDepth - sampleDepth;
  // Bias/thickness control how close-to-camera the occluder must be to affect the horizon.
  let heightWeight = clamp((deltaDepth - params.bias) / max(params.thickness, 1e-3), 0.0, 1.0);
  if (heightWeight <= 0.0) {
    return lowHorizonCos;
  }

  let samplePos = reconstructViewPos(vec2<f32>(sampleAoCoord), sampleDepth);
  let sampleDelta = samplePos - centerPos;
  let sampleDist = length(sampleDelta);
  if (sampleDist <= 1e-4) {
    return lowHorizonCos;
  }
  let sampleHorizonVec = sampleDelta / sampleDist;
  let distWeight = clamp(sampleDist * falloffMul + falloffAdd, 0.0, 1.0);
  let weight = distWeight * heightWeight;
  let shc = dot(sampleHorizonVec, viewVec);
  // Horizon-based GTAO: lerp in cosine-space to fade distant/weak samples toward the "no occluder" horizon.
  return mix(lowHorizonCos, shc, weight);
}

@fragment
fn fsMain(@builtin(position) position: vec4<f32>) -> @location(0) vec4<f32> {
  let aoCoord = vec2<i32>(position.xy);
  let aoSize = vec2<i32>(params.aoViewport);
  if (!inBounds(aoCoord, aoSize)) {
    return vec4<f32>(1.0);
  }

  let fullCoord = aoToFullCoord(aoCoord);
  let fullSize = vec2<i32>(params.viewport);
  if (!inBounds(fullCoord, fullSize)) {
    return vec4<f32>(1.0);
  }

  let depth01 = textureLoad(depthTex, fullCoord, 0);
  if (depth01 >= 1.0) {
    return vec4<f32>(1.0);
  }
  let depth = linearizeDepth(depth01);
  let center = textureLoad(gbufferTex, fullCoord, 0);
  let normal = decodeNormal(center.xyz);

  let viewPos = reconstructViewPos(vec2<f32>(aoCoord), depth);
  let viewVec = normalize(-viewPos);

  // Screen-space radius in AO pixels.
  let depthScale = select(1.0, depth, params.isPerspective > 0.5);
  let screenspaceRadius = params.radius * params.projScale / max(depthScale, 1e-3);
  let pixelTooCloseThreshold = 1.3;
  // Fade out very small radii: most rounded offsets collapse to (0,0), producing unstable noise/banding.
  let radiusFade = smoothstep(pixelTooCloseThreshold, pixelTooCloseThreshold + 1.0, screenspaceRadius);
  if (radiusFade <= 0.0) {
    return vec4<f32>(1.0);
  }

  let sliceCount = max(1, min(i32(params.sampleCount + 0.5), 24));
  // Keep the overall depth fetch budget roughly stable as the user changes sliceCount.
  // With sliceCount up to 24, allow 1-step slices to avoid forcing a cost increase.
  let stepsPerSlice = clamp(i32(24.0 / f32(sliceCount) + 0.5), 1, 8);
  // Larger \`cornerBoost\` concentrates samples closer to the center, improving contact shadows in small creases.
  let distributionPower = mix(1.0, 3.0, params.cornerBoost);

  // Simple falloff: samples near effectRadius contribute less, reducing large-scale "gray wash".
  let falloffRange = max(params.radius * 0.615, 1e-3);
  let falloffFrom = max(params.radius - falloffRange, 0.0);
  let falloffMul = -1.0 / falloffRange;
  let falloffAdd = falloffFrom / falloffRange + 1.0;

  let noiseSlice = hash12(vec2<f32>(aoCoord));
  let noiseSample = hash12(vec2<f32>(aoCoord) + vec2<f32>(19.0, 37.0));

  let minS = pixelTooCloseThreshold / screenspaceRadius;

  var visibility = 0.0;

  for (var slice = 0; slice < 24; slice += 1) {
    if (slice >= sliceCount) {
      break;
    }
    let sliceK = (f32(slice) + noiseSlice) / f32(sliceCount);
    let phi = sliceK * PI;
    let cosPhi = cos(phi);
    let sinPhi = sin(phi);
    // View-space slice direction (y-up) and matching screen-space step (y-down).
    let directionVec = vec3<f32>(cosPhi, sinPhi, 0.0);
    let omega = vec2<f32>(cosPhi, -sinPhi) * screenspaceRadius;

    let orthoDirectionVec = directionVec - dot(directionVec, viewVec) * viewVec;
    let axisLen = length(orthoDirectionVec);
    if (axisLen <= 1e-4) {
      continue;
    }
    let axisVec = normalize(cross(orthoDirectionVec, viewVec));
    let projectedNormalVec = normal - axisVec * dot(normal, axisVec);
    let projectedNormalLen = length(projectedNormalVec);
    if (projectedNormalLen <= 1e-4) {
      continue;
    }

    let signNorm = sign(dot(orthoDirectionVec, projectedNormalVec));
    let cosNorm = clamp(dot(projectedNormalVec, viewVec) / projectedNormalLen, 0.0, 1.0);
    let n = signNorm * acos(cosNorm);

    let lowHorizonCos0 = cos(n + PI_HALF);
    let lowHorizonCos1 = cos(n - PI_HALF);
    var horizonCos0 = lowHorizonCos0;
    var horizonCos1 = lowHorizonCos1;

    for (var step = 0; step < 8; step += 1) {
      if (step >= stepsPerSlice) {
        break;
      }
      // R1 sequence (golden ratio) provides a stable quasi-random jitter without extra textures.
      let stepBaseNoise = (f32(slice) + f32(step) * f32(stepsPerSlice)) * 0.61803398875;
      let stepNoise = fract(noiseSample + stepBaseNoise);
      var s = (f32(step) + stepNoise) / f32(stepsPerSlice);
      // Shape [0..1] -> [minS..1] to avoid unstable near-center offsets after rounding,
      // while never sampling beyond the requested screenspaceRadius.
      s = pow(s, distributionPower);
      s = minS + (1.0 - minS) * s;

      let offsetPixels = vec2<i32>(round(omega * s));
      if (offsetPixels.x == 0 && offsetPixels.y == 0) {
        continue;
      }

      horizonCos0 = max(
        horizonCos0,
        sampleHorizonCos(
          aoCoord + offsetPixels,
          aoSize,
          fullSize,
          viewPos,
          depth,
          viewVec,
          lowHorizonCos0,
          falloffMul,
          falloffAdd
        )
      );
      horizonCos1 = max(
        horizonCos1,
        sampleHorizonCos(
          aoCoord - offsetPixels,
          aoSize,
          fullSize,
          viewPos,
          depth,
          viewVec,
          lowHorizonCos1,
          falloffMul,
          falloffAdd
        )
      );
    }

    // Horizon-based slice integration (Jimenez 2016 / XeGTAO): converts the two horizon angles into
    // a cosine-weighted visibility contribution for this slice plane.
    let h0 = -acos(horizonCos1);
    let h1 = acos(horizonCos0);
    let iarc0 = (cosNorm + 2.0 * h0 * sin(n) - cos(2.0 * h0 - n)) * 0.25;
    let iarc1 = (cosNorm + 2.0 * h1 * sin(n) - cos(2.0 * h1 - n)) * 0.25;
    visibility += projectedNormalLen * (iarc0 + iarc1);
  }

  visibility = visibility / f32(sliceCount);
  visibility = clamp(visibility, 0.0, 1.0);
  var ao = 1.0 - (1.0 - visibility) * params.intensity;
  ao = pow(clamp(ao, 0.0, 1.0), params.power);
  ao = mix(1.0, ao, radiusFade);
  return vec4<f32>(ao, ao, ao, 1.0);
}
`,fs=`struct GtaoParams {
  viewport: vec2<f32>,
  invViewport: vec2<f32>,
  aoViewport: vec2<f32>,
  invAoViewport: vec2<f32>,
  projScale: f32,
  radius: f32,
  bias: f32,
  intensity: f32,
  power: f32,
  cornerBoost: f32,
  edgePreserve: f32,
  thickness: f32,
  sampleCount: f32,
  blurSigma: f32,
  blurDepthSigma: f32,
  isPerspective: f32,
  outputMode: f32,
  _pad0: f32,
  blurDir: vec2<f32>,
  nearFar: vec2<f32>,
};

@group(0) @binding(0)
var<uniform> params: GtaoParams;

@group(1) @binding(0)
var gbufferTex: texture_2d<f32>;

@group(1) @binding(1)
var depthTex: texture_depth_2d;

@group(1) @binding(2)
var aoTex: texture_2d<f32>;

fn decodeNormal(encoded: vec3<f32>) -> vec3<f32> {
  return normalize(encoded * 2.0 - 1.0);
}

fn linearizeDepth(depth01: f32) -> f32 {
  let near = params.nearFar.x;
  let far = params.nearFar.y;
  let d = clamp(depth01, 0.0, 1.0);
  // Blur uses view-space depth to keep depthSigma stable across near/far changes.
  return select(
    near + d * (far - near),
    (near * far) / max(far - d * (far - near), 1e-6),
    params.isPerspective > 0.5
  );
}

fn aoToFullCoord(aoCoord: vec2<i32>) -> vec2<i32> {
  let scale = params.viewport / params.aoViewport;
  let full = (vec2<f32>(aoCoord) + vec2<f32>(0.5)) * scale;
  return vec2<i32>(full);
}

fn inBounds(coord: vec2<i32>, size: vec2<i32>) -> bool {
  return coord.x >= 0 && coord.y >= 0 && coord.x < size.x && coord.y < size.y;
}

struct VertexOut {
  @builtin(position) position: vec4<f32>,
};

@vertex
fn vsMain(@builtin(vertex_index) vertexIndex: u32) -> VertexOut {
  var out: VertexOut;
  let pos = array<vec2<f32>, 3>(
    vec2<f32>(-1.0, -1.0),
    vec2<f32>(3.0, -1.0),
    vec2<f32>(-1.0, 3.0)
  );
  out.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
  return out;
}

@fragment
fn fsMain(@builtin(position) position: vec4<f32>) -> @location(0) vec4<f32> {
  let aoCoord = vec2<i32>(position.xy);
  let aoSize = vec2<i32>(params.aoViewport);
  if (!inBounds(aoCoord, aoSize)) {
    return vec4<f32>(1.0);
  }

  let fullCoord = aoToFullCoord(aoCoord);
  let fullSize = vec2<i32>(params.viewport);
  if (!inBounds(fullCoord, fullSize)) {
    return vec4<f32>(1.0);
  }

  let centerG = textureLoad(gbufferTex, fullCoord, 0);
  let centerDepth01 = textureLoad(depthTex, fullCoord, 0);
  if (centerDepth01 >= 1.0) {
    return vec4<f32>(1.0);
  }
  let centerDepth = linearizeDepth(centerDepth01);
  let centerNormal = decodeNormal(centerG.xyz);
  let depthSigmaBase = max(params.blurDepthSigma, 1e-3);
  let step = vec2<i32>(params.blurDir);
  let stepLen = max(abs(step.x), abs(step.y));
  // A-Trous wavelet (B-spline) smoothing: renderer repeats this pass with stepLen=1,2,4,8.
  let kernel = array<f32, 5>(1.0, 4.0, 6.0, 4.0, 1.0);
  let depthSigma = depthSigmaBase * sqrt(max(1.0, f32(stepLen)));

  var sum = 0.0;
  var weightSum = 0.0;

  for (var i = -2; i <= 2; i += 1) {
    let offsetCoord = aoCoord + step * i;
    if (!inBounds(offsetCoord, aoSize)) {
      continue;
    }
    let sampleAo = textureLoad(aoTex, offsetCoord, 0).r;
    let sampleFullCoord = aoToFullCoord(offsetCoord);
    if (!inBounds(sampleFullCoord, fullSize)) {
      continue;
    }
    let sampleG = textureLoad(gbufferTex, sampleFullCoord, 0);
    let sampleDepth01 = textureLoad(depthTex, sampleFullCoord, 0);
    if (sampleDepth01 >= 1.0) {
      continue;
    }
    let sampleDepth = linearizeDepth(sampleDepth01);
    let sampleNormal = decodeNormal(sampleG.xyz);
    // Use a non-linear normal similarity so \`edgePreserve\` has a noticeable effect even with smooth normals.
    let normalDot = max(dot(centerNormal, sampleNormal), 0.0);
    let edgePower = mix(1.0, 8.0, params.edgePreserve);
    let normalWeight = mix(1.0, pow(normalDot, edgePower), params.edgePreserve);
    let dd = (sampleDepth - centerDepth) / depthSigma;
    let depthWeight = exp(-0.5 * dd * dd);
    let kernelWeight = kernel[u32(i + 2)];
    let weight = kernelWeight * depthWeight * normalWeight;
    sum += sampleAo * weight;
    weightSum += weight;
  }

  if (weightSum <= 0.0) {
    return vec4<f32>(1.0);
  }
  let ao = sum / weightSum;
  return vec4<f32>(ao, ao, ao, 1.0);
}
`,hs=28,lt={modelMatrix:0,color:16,material:20,pick:24},kt={viewProj:0,cameraPos:16,cameraDir:20,viewport:24},Ft={viewProj:0,cameraPos:16,cameraRight:20,cameraUp:24,cameraDir:28},Mt={blurDir:22};function ms(e){const t=e.gpuCall("GPUDevice.createShaderModule(gtao)",()=>e.device.createShaderModule({code:ds}));return e.gpuCall("GPUDevice.createRenderPipeline(gtao)",()=>e.device.createRenderPipeline({layout:e.pipelineLayout,vertex:{module:t,entryPoint:"vsMain"},fragment:{module:t,entryPoint:"fsMain",targets:[{format:e.format}]},primitive:{topology:"triangle-list",cullMode:"none"},multisample:{count:1}}))}function ps(e){const t=e.gpuCall("GPUDevice.createShaderModule(gtaoBlur)",()=>e.device.createShaderModule({code:fs}));return e.gpuCall("GPUDevice.createRenderPipeline(gtaoBlur)",()=>e.device.createRenderPipeline({layout:e.pipelineLayout,vertex:{module:t,entryPoint:"vsMain"},fragment:{module:t,entryPoint:"fsMain",targets:[{format:e.format}]},primitive:{topology:"triangle-list",cullMode:"none"},multisample:{count:1}}))}function gs(e){e.gbufferFrameUniformData.set(e.viewProj,Ft.viewProj),e.gbufferFrameUniformData.set([e.cameraPos[0],e.cameraPos[1],e.cameraPos[2],0],Ft.cameraPos),e.gbufferFrameUniformData.set([e.cameraRight[0],e.cameraRight[1],e.cameraRight[2],0],Ft.cameraRight),e.gbufferFrameUniformData.set([e.cameraUp[0],e.cameraUp[1],e.cameraUp[2],0],Ft.cameraUp),e.gbufferFrameUniformData.set([e.cameraDir[0],e.cameraDir[1],e.cameraDir[2],0],Ft.cameraDir),e.gpuCall("GPUQueue.writeBuffer(gbufferFrameUniformBuffer)",()=>e.device.queue.writeBuffer(e.gbufferFrameUniformBuffer,0,e.gbufferFrameUniformData.buffer,e.gbufferFrameUniformData.byteOffset,e.gbufferFrameUniformData.byteLength));const t=e.size.width,n=e.size.height,o=e.gtaoTargetSize.width,i=e.gtaoTargetSize.height,s=e.gtaoAmbientTargetSize.width,a=e.gtaoAmbientTargetSize.height,r=e.isPerspective?n/(2*Math.tan(e.camera.fov*.5)):n/(2*e.camera.orthoScale),l=r*(i/Math.max(n,1));e.gtaoParamsData.set([t,n,t>0?1/t:0,n>0?1/n:0,o,i,o>0?1/o:0,i>0?1/i:0,l,e.gtaoSettings.radius,e.gtaoSettings.bias,e.gtaoSettings.intensity,e.gtaoSettings.power,e.gtaoSettings.cornerBoost,e.gtaoSettings.edgePreserve,e.gtaoSettings.thickness,e.gtaoSettings.sampleCount,e.gtaoSettings.blurSigma,e.gtaoSettings.blurDepthSigma,e.isPerspective?1:0,e.gtaoSettings.aoOnly?1:0,0,0,0,e.camera.near,e.camera.far,0,0],0),e.gpuCall("GPUQueue.writeBuffer(gtaoParamsBuffer)",()=>e.device.queue.writeBuffer(e.gtaoParamsBuffer,0,e.gtaoParamsData.buffer,e.gtaoParamsData.byteOffset,e.gtaoParamsData.byteLength));for(let d=0;d<e.atrousIterations;d+=1){const h=1<<d;e.gtaoParamsData[Mt.blurDir]=h,e.gtaoParamsData[Mt.blurDir+1]=0,e.gpuCall(`GPUQueue.writeBuffer(gtaoBlurParams[${d}]H)`,()=>e.device.queue.writeBuffer(e.gtaoBlurParamsBuffer,d*2*e.gtaoBlurParamsStride,e.gtaoParamsData.buffer,e.gtaoParamsData.byteOffset,e.gtaoParamsData.byteLength)),e.gtaoParamsData[Mt.blurDir]=0,e.gtaoParamsData[Mt.blurDir+1]=h,e.gpuCall(`GPUQueue.writeBuffer(gtaoBlurParams[${d}]V)`,()=>e.device.queue.writeBuffer(e.gtaoBlurParamsBuffer,(d*2+1)*e.gtaoBlurParamsStride,e.gtaoParamsData.buffer,e.gtaoParamsData.byteOffset,e.gtaoParamsData.byteLength))}if(e.gtaoParamsData[Mt.blurDir]=0,e.gtaoParamsData[Mt.blurDir+1]=0,!e.useMultiScale)return;const c=e.gtaoSettings.radius*e.gtaoSettings.ambientRadiusScale,u=e.gtaoSettings.cornerBoost*.5,m=e.gtaoSettings.thickness*e.gtaoSettings.ambientRadiusScale,b=r*(a/Math.max(n,1));e.gtaoParamsData.set([t,n,t>0?1/t:0,n>0?1/n:0,s,a,s>0?1/s:0,a>0?1/a:0,b,c,e.gtaoSettings.bias,e.gtaoSettings.intensity,e.gtaoSettings.power,u,e.gtaoSettings.edgePreserve,m,e.gtaoSettings.sampleCount,e.gtaoSettings.blurSigma,e.gtaoSettings.blurDepthSigma,e.isPerspective?1:0,e.gtaoSettings.aoOnly?1:0,0,0,0,e.camera.near,e.camera.far,0,0],0),e.gpuCall("GPUQueue.writeBuffer(gtaoParamsBufferAmbient)",()=>e.device.queue.writeBuffer(e.gtaoParamsBufferAmbient,0,e.gtaoParamsData.buffer,e.gtaoParamsData.byteOffset,e.gtaoParamsData.byteLength));for(let d=0;d<e.atrousIterations;d+=1){const h=1<<d;e.gtaoParamsData[22]=h,e.gtaoParamsData[23]=0,e.gpuCall(`GPUQueue.writeBuffer(gtaoAmbientBlurParams[${d}]H)`,()=>e.device.queue.writeBuffer(e.gtaoBlurParamsBufferAmbient,d*2*e.gtaoBlurParamsStride,e.gtaoParamsData.buffer,e.gtaoParamsData.byteOffset,e.gtaoParamsData.byteLength)),e.gtaoParamsData[22]=0,e.gtaoParamsData[23]=h,e.gpuCall(`GPUQueue.writeBuffer(gtaoAmbientBlurParams[${d}]V)`,()=>e.device.queue.writeBuffer(e.gtaoBlurParamsBufferAmbient,(d*2+1)*e.gtaoBlurParamsStride,e.gtaoParamsData.buffer,e.gtaoParamsData.byteOffset,e.gtaoParamsData.byteLength))}e.gtaoParamsData[22]=0,e.gtaoParamsData[23]=0,e.gtaoCompositeMultiParamsData.set([t,n,t>0?1/t:0,n>0?1/n:0,o,i,o>0?1/o:0,i>0?1/i:0,s,a,s>0?1/s:0,a>0?1/a:0,e.camera.near,e.camera.far,e.gtaoSettings.edgePreserve,e.gtaoSettings.blurDepthSigma,e.isPerspective?1:0,e.gtaoSettings.aoOnly?1:0,e.gtaoSettings.ambientWeight,0],0),e.gpuCall("GPUQueue.writeBuffer(gtaoCompositeMultiParamsBuffer)",()=>e.device.queue.writeBuffer(e.gtaoCompositeMultiParamsBuffer,0,e.gtaoCompositeMultiParamsData.buffer,e.gtaoCompositeMultiParamsData.byteOffset,e.gtaoCompositeMultiParamsData.byteLength))}function bs(e){const t=e.gpuCall("GPUCommandEncoder.beginRenderPass(gtao)",()=>e.encoder.beginRenderPass({colorAttachments:[{view:e.gtaoView,loadOp:"clear",storeOp:"store",clearValue:{r:1,g:1,b:1,a:1}}]}));t.setPipeline(e.gtaoPipeline),t.setBindGroup(0,e.gtaoParamsBindGroup),t.setBindGroup(1,e.gtaoBindGroup),t.draw(3,1,0,0),t.end();for(let o=0;o<e.atrousIterations;o+=1){const i=e.gpuCall(`GPUCommandEncoder.beginRenderPass(gtaoAtrousBlurH${o})`,()=>e.encoder.beginRenderPass({colorAttachments:[{view:e.gtaoBlurView,loadOp:"clear",storeOp:"store",clearValue:{r:1,g:1,b:1,a:1}}]}));i.setPipeline(e.gtaoBlurPipeline),i.setBindGroup(0,e.gtaoBlurParamsBindGroup,[o*2*e.gtaoBlurParamsStride]),i.setBindGroup(1,e.gtaoBlurBindGroupA),i.draw(3,1,0,0),i.end();const s=e.gpuCall(`GPUCommandEncoder.beginRenderPass(gtaoAtrousBlurV${o})`,()=>e.encoder.beginRenderPass({colorAttachments:[{view:e.gtaoView,loadOp:"clear",storeOp:"store",clearValue:{r:1,g:1,b:1,a:1}}]}));s.setPipeline(e.gtaoBlurPipeline),s.setBindGroup(0,e.gtaoBlurParamsBindGroup,[(o*2+1)*e.gtaoBlurParamsStride]),s.setBindGroup(1,e.gtaoBlurBindGroupB),s.draw(3,1,0,0),s.end()}if(e.useMultiScale){const o=e.gtaoAmbientView,i=e.gtaoAmbientBlurView,s=e.gtaoBlurBindGroupAmbientA,a=e.gtaoBlurBindGroupAmbientB;if(o&&i&&s&&a){const r=e.gpuCall("GPUCommandEncoder.beginRenderPass(gtaoAmbient)",()=>e.encoder.beginRenderPass({colorAttachments:[{view:o,loadOp:"clear",storeOp:"store",clearValue:{r:1,g:1,b:1,a:1}}]}));r.setPipeline(e.gtaoPipeline),r.setBindGroup(0,e.gtaoParamsBindGroupAmbient),r.setBindGroup(1,e.gtaoBindGroup),r.draw(3,1,0,0),r.end();for(let l=0;l<e.atrousIterations;l+=1){const c=e.gpuCall(`GPUCommandEncoder.beginRenderPass(gtaoAmbientAtrousBlurH${l})`,()=>e.encoder.beginRenderPass({colorAttachments:[{view:i,loadOp:"clear",storeOp:"store",clearValue:{r:1,g:1,b:1,a:1}}]}));c.setPipeline(e.gtaoBlurPipeline),c.setBindGroup(0,e.gtaoBlurParamsBindGroupAmbient,[l*2*e.gtaoBlurParamsStride]),c.setBindGroup(1,s),c.draw(3,1,0,0),c.end();const u=e.gpuCall(`GPUCommandEncoder.beginRenderPass(gtaoAmbientAtrousBlurV${l})`,()=>e.encoder.beginRenderPass({colorAttachments:[{view:o,loadOp:"clear",storeOp:"store",clearValue:{r:1,g:1,b:1,a:1}}]}));u.setPipeline(e.gtaoBlurPipeline),u.setBindGroup(0,e.gtaoBlurParamsBindGroupAmbient,[(l*2+1)*e.gtaoBlurParamsStride]),u.setBindGroup(1,a),u.draw(3,1,0,0),u.end()}}}if(e.splitEdgesFromAo&&e.useMsaa){const o=e.msaaColorView;if(!o)return;const i=e.gpuCall("GPUCommandEncoder.beginRenderPass(gtaoComposite)",()=>e.encoder.beginRenderPass({colorAttachments:[{view:o,resolveTarget:e.swapchainView,loadOp:"clear",storeOp:"store",clearValue:e.clearColor}],depthStencilAttachment:{view:e.depthView,depthLoadOp:"load",depthStoreOp:"store"}}));e.useMultiScale&&e.gtaoCompositeMultiBindGroup?(i.setPipeline(e.gtaoCompositeMultiMsaaPipeline),i.setBindGroup(0,e.gtaoCompositeMultiParamsBindGroup),i.setBindGroup(1,e.gtaoCompositeMultiBindGroup)):(i.setPipeline(e.gtaoCompositeMsaaPipeline),i.setBindGroup(0,e.gtaoParamsBindGroup),i.setBindGroup(1,e.gtaoCompositeBindGroup)),i.draw(3,1,0,0),e.drawPostAoObjects(i),i.end();return}const n=e.gpuCall("GPUCommandEncoder.beginRenderPass(gtaoComposite)",()=>e.encoder.beginRenderPass({colorAttachments:[{view:e.swapchainView,loadOp:"clear",storeOp:"store",clearValue:e.clearColor}]}));if(e.useMultiScale&&e.gtaoCompositeMultiBindGroup?(n.setPipeline(e.gtaoCompositeMultiPipeline),n.setBindGroup(0,e.gtaoCompositeMultiParamsBindGroup),n.setBindGroup(1,e.gtaoCompositeMultiBindGroup)):(n.setPipeline(e.gtaoCompositePipeline),n.setBindGroup(0,e.gtaoParamsBindGroup),n.setBindGroup(1,e.gtaoCompositeBindGroup)),n.draw(3,1,0,0),n.end(),e.splitEdgesFromAo){const o=e.gpuCall("GPUCommandEncoder.beginRenderPass(postAo)",()=>e.encoder.beginRenderPass({colorAttachments:[{view:e.swapchainView,loadOp:"load",storeOp:"store"}],depthStencilAttachment:{view:e.depthView,depthLoadOp:"load",depthStoreOp:"store"}}));e.drawPostAoObjects(o),o.end()}}const xs=`struct GtaoParams {
  viewport: vec2<f32>,
  invViewport: vec2<f32>,
  aoViewport: vec2<f32>,
  invAoViewport: vec2<f32>,
  projScale: f32,
  radius: f32,
  bias: f32,
  intensity: f32,
  power: f32,
  cornerBoost: f32,
  edgePreserve: f32,
  thickness: f32,
  sampleCount: f32,
  blurSigma: f32,
  blurDepthSigma: f32,
  isPerspective: f32,
  outputMode: f32,
  _pad0: f32,
  blurDir: vec2<f32>,
  nearFar: vec2<f32>,
};

@group(0) @binding(0)
var<uniform> params: GtaoParams;

@group(1) @binding(0)
var gbufferTex: texture_2d<f32>;

@group(1) @binding(1)
var depthTex: texture_depth_2d;

@group(1) @binding(2)
var aoTex: texture_2d<f32>;

@group(1) @binding(3)
var sceneColorTex: texture_2d<f32>;

fn decodeNormal(encoded: vec3<f32>) -> vec3<f32> {
  return normalize(encoded * 2.0 - 1.0);
}

fn linearizeDepth(depth01: f32) -> f32 {
  let near = params.nearFar.x;
  let far = params.nearFar.y;
  let d = clamp(depth01, 0.0, 1.0);
  // Composite compares depth in view space to avoid upsampling halos from non-linear depth.
  return select(
    near + d * (far - near),
    (near * far) / max(far - d * (far - near), 1e-6),
    params.isPerspective > 0.5
  );
}

fn aoToFullCoord(aoCoord: vec2<i32>) -> vec2<i32> {
  let scale = params.viewport / params.aoViewport;
  let full = (vec2<f32>(aoCoord) + vec2<f32>(0.5)) * scale;
  return vec2<i32>(full);
}

fn fullToAoCoord(fullCoord: vec2<i32>) -> vec2<f32> {
  let scale = params.aoViewport / params.viewport;
  return (vec2<f32>(fullCoord) + vec2<f32>(0.5)) * scale - vec2<f32>(0.5);
}

fn inBounds(coord: vec2<i32>, size: vec2<i32>) -> bool {
  return coord.x >= 0 && coord.y >= 0 && coord.x < size.x && coord.y < size.y;
}

struct VertexOut {
  @builtin(position) position: vec4<f32>,
};

@vertex
fn vsMain(@builtin(vertex_index) vertexIndex: u32) -> VertexOut {
  var out: VertexOut;
  let pos = array<vec2<f32>, 3>(
    vec2<f32>(-1.0, -1.0),
    vec2<f32>(3.0, -1.0),
    vec2<f32>(-1.0, 3.0)
  );
  out.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
  return out;
}

@fragment
fn fsMain(@builtin(position) position: vec4<f32>) -> @location(0) vec4<f32> {
  let fullCoord = vec2<i32>(position.xy);
  let fullSize = vec2<i32>(params.viewport);
  if (!inBounds(fullCoord, fullSize)) {
    return vec4<f32>(0.0, 0.0, 0.0, 1.0);
  }

  let depth01 = textureLoad(depthTex, fullCoord, 0);
  if (depth01 >= 1.0) {
    let base = textureLoad(sceneColorTex, fullCoord, 0);
    if (params.outputMode > 0.5) {
      return vec4<f32>(1.0, 1.0, 1.0, 1.0);
    }
    return base;
  }

  let depth = linearizeDepth(depth01);
  let g = textureLoad(gbufferTex, fullCoord, 0);
  let normal = decodeNormal(g.xyz);
  let aoSize = vec2<i32>(params.aoViewport);
  let aoPos = fullToAoCoord(fullCoord);
  let baseCoord = vec2<i32>(floor(aoPos));
  let frac = fract(aoPos);
  let depthSigma = max(params.blurDepthSigma, 1e-3);

  var sum = 0.0;
  var weightSum = 0.0;

  for (var y = 0; y <= 1; y += 1) {
    for (var x = 0; x <= 1; x += 1) {
      let aoCoord = baseCoord + vec2<i32>(x, y);
      if (!inBounds(aoCoord, aoSize)) {
        continue;
      }
      let aoValue = textureLoad(aoTex, aoCoord, 0).r;
      let sampleFullCoord = aoToFullCoord(aoCoord);
      if (!inBounds(sampleFullCoord, fullSize)) {
        continue;
      }
      let sampleG = textureLoad(gbufferTex, sampleFullCoord, 0);
      let sampleDepth01 = textureLoad(depthTex, sampleFullCoord, 0);
      if (sampleDepth01 >= 1.0) {
        continue;
      }
      let sampleDepth = linearizeDepth(sampleDepth01);
      let sampleNormal = decodeNormal(sampleG.xyz);
      let dd = (sampleDepth - depth) / depthSigma;
      let depthWeight = exp(-0.5 * dd * dd);
      // Edge-preserving upsample reduces AO bleeding across sharp normal discontinuities.
      let normalDot = max(dot(normal, sampleNormal), 0.0);
      let edgePower = mix(1.0, 8.0, params.edgePreserve);
      let normalWeight = mix(1.0, pow(normalDot, edgePower), params.edgePreserve);
      let wx = select(1.0 - frac.x, frac.x, x == 1);
      let wy = select(1.0 - frac.y, frac.y, y == 1);
      let weight = wx * wy * depthWeight * normalWeight;
      sum += aoValue * weight;
      weightSum += weight;
    }
  }

  let ao = select(1.0, sum / weightSum, weightSum > 0.0);
  if (params.outputMode > 0.5) {
    return vec4<f32>(ao, ao, ao, 1.0);
  }

  let base = textureLoad(sceneColorTex, fullCoord, 0);
  let color = base.rgb * ao;
  return vec4<f32>(color, base.a);
}
`,ys=`struct GtaoCompositeParams {
  viewport: vec2<f32>,
  invViewport: vec2<f32>,
  aoSmallViewport: vec2<f32>,
  invAoSmallViewport: vec2<f32>,
  aoLargeViewport: vec2<f32>,
  invAoLargeViewport: vec2<f32>,
  nearFar: vec2<f32>,
  edgePreserve: f32,
  blurDepthSigma: f32,
  isPerspective: f32,
  outputMode: f32,
  ambientWeight: f32,
  _pad0: f32,
};

@group(0) @binding(0)
var<uniform> params: GtaoCompositeParams;

@group(1) @binding(0)
var gbufferTex: texture_2d<f32>;

@group(1) @binding(1)
var depthTex: texture_depth_2d;

@group(1) @binding(2)
var aoSmallTex: texture_2d<f32>;

@group(1) @binding(3)
var aoLargeTex: texture_2d<f32>;

@group(1) @binding(4)
var sceneColorTex: texture_2d<f32>;

fn decodeNormal(encoded: vec3<f32>) -> vec3<f32> {
  return normalize(encoded * 2.0 - 1.0);
}

fn linearizeDepth(depth01: f32) -> f32 {
  let near = params.nearFar.x;
  let far = params.nearFar.y;
  let d = clamp(depth01, 0.0, 1.0);
  // Compare depth in view space to avoid upsampling halos from non-linear depth.
  return select(
    near + d * (far - near),
    (near * far) / max(far - d * (far - near), 1e-6),
    params.isPerspective > 0.5
  );
}

fn aoToFullCoord(aoCoord: vec2<i32>, aoViewport: vec2<f32>) -> vec2<i32> {
  let scale = params.viewport / aoViewport;
  let full = (vec2<f32>(aoCoord) + vec2<f32>(0.5)) * scale;
  return vec2<i32>(full);
}

fn fullToAoCoord(fullCoord: vec2<i32>, aoViewport: vec2<f32>) -> vec2<f32> {
  let scale = aoViewport / params.viewport;
  return (vec2<f32>(fullCoord) + vec2<f32>(0.5)) * scale - vec2<f32>(0.5);
}

fn inBounds(coord: vec2<i32>, size: vec2<i32>) -> bool {
  return coord.x >= 0 && coord.y >= 0 && coord.x < size.x && coord.y < size.y;
}

struct VertexOut {
  @builtin(position) position: vec4<f32>,
};

@vertex
fn vsMain(@builtin(vertex_index) vertexIndex: u32) -> VertexOut {
  var out: VertexOut;
  let pos = array<vec2<f32>, 3>(
    vec2<f32>(-1.0, -1.0),
    vec2<f32>(3.0, -1.0),
    vec2<f32>(-1.0, 3.0)
  );
  out.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
  return out;
}

fn upsampleAoSmall(fullCoord: vec2<i32>, fullSize: vec2<i32>, depth: f32, normal: vec3<f32>) -> f32 {
  let aoSize = vec2<i32>(params.aoSmallViewport);
  let aoPos = fullToAoCoord(fullCoord, params.aoSmallViewport);
  let baseCoord = vec2<i32>(floor(aoPos));
  let frac = fract(aoPos);
  let depthSigma = max(params.blurDepthSigma, 1e-3);

  var sum = 0.0;
  var weightSum = 0.0;

  for (var y = 0; y <= 1; y += 1) {
    for (var x = 0; x <= 1; x += 1) {
      let aoCoord = baseCoord + vec2<i32>(x, y);
      if (!inBounds(aoCoord, aoSize)) {
        continue;
      }
      let aoValue = textureLoad(aoSmallTex, aoCoord, 0).r;
      let sampleFullCoord = aoToFullCoord(aoCoord, params.aoSmallViewport);
      if (!inBounds(sampleFullCoord, fullSize)) {
        continue;
      }
      let sampleG = textureLoad(gbufferTex, sampleFullCoord, 0);
      let sampleDepth01 = textureLoad(depthTex, sampleFullCoord, 0);
      if (sampleDepth01 >= 1.0) {
        continue;
      }
      let sampleDepth = linearizeDepth(sampleDepth01);
      let sampleNormal = decodeNormal(sampleG.xyz);
      let dd = (sampleDepth - depth) / depthSigma;
      let depthWeight = exp(-0.5 * dd * dd);
      // Edge-preserving upsample reduces AO bleeding across sharp normal discontinuities.
      let normalDot = max(dot(normal, sampleNormal), 0.0);
      let edgePower = mix(1.0, 8.0, params.edgePreserve);
      let normalWeight = mix(1.0, pow(normalDot, edgePower), params.edgePreserve);
      let wx = select(1.0 - frac.x, frac.x, x == 1);
      let wy = select(1.0 - frac.y, frac.y, y == 1);
      let weight = wx * wy * depthWeight * normalWeight;
      sum += aoValue * weight;
      weightSum += weight;
    }
  }

  return select(1.0, sum / weightSum, weightSum > 0.0);
}

fn upsampleAoLarge(fullCoord: vec2<i32>, fullSize: vec2<i32>, depth: f32, normal: vec3<f32>) -> f32 {
  let aoSize = vec2<i32>(params.aoLargeViewport);
  let aoPos = fullToAoCoord(fullCoord, params.aoLargeViewport);
  let baseCoord = vec2<i32>(floor(aoPos));
  let frac = fract(aoPos);
  let depthSigma = max(params.blurDepthSigma, 1e-3);

  var sum = 0.0;
  var weightSum = 0.0;

  for (var y = 0; y <= 1; y += 1) {
    for (var x = 0; x <= 1; x += 1) {
      let aoCoord = baseCoord + vec2<i32>(x, y);
      if (!inBounds(aoCoord, aoSize)) {
        continue;
      }
      let aoValue = textureLoad(aoLargeTex, aoCoord, 0).r;
      let sampleFullCoord = aoToFullCoord(aoCoord, params.aoLargeViewport);
      if (!inBounds(sampleFullCoord, fullSize)) {
        continue;
      }
      let sampleG = textureLoad(gbufferTex, sampleFullCoord, 0);
      let sampleDepth01 = textureLoad(depthTex, sampleFullCoord, 0);
      if (sampleDepth01 >= 1.0) {
        continue;
      }
      let sampleDepth = linearizeDepth(sampleDepth01);
      let sampleNormal = decodeNormal(sampleG.xyz);
      let dd = (sampleDepth - depth) / depthSigma;
      let depthWeight = exp(-0.5 * dd * dd);
      // Edge-preserving upsample reduces AO bleeding across sharp normal discontinuities.
      let normalDot = max(dot(normal, sampleNormal), 0.0);
      let edgePower = mix(1.0, 8.0, params.edgePreserve);
      let normalWeight = mix(1.0, pow(normalDot, edgePower), params.edgePreserve);
      let wx = select(1.0 - frac.x, frac.x, x == 1);
      let wy = select(1.0 - frac.y, frac.y, y == 1);
      let weight = wx * wy * depthWeight * normalWeight;
      sum += aoValue * weight;
      weightSum += weight;
    }
  }

  return select(1.0, sum / weightSum, weightSum > 0.0);
}

@fragment
fn fsMain(@builtin(position) position: vec4<f32>) -> @location(0) vec4<f32> {
  let fullCoord = vec2<i32>(position.xy);
  let fullSize = vec2<i32>(params.viewport);
  if (!inBounds(fullCoord, fullSize)) {
    return vec4<f32>(0.0, 0.0, 0.0, 1.0);
  }

  let depth01 = textureLoad(depthTex, fullCoord, 0);
  if (depth01 >= 1.0) {
    let base = textureLoad(sceneColorTex, fullCoord, 0);
    if (params.outputMode > 0.5) {
      return vec4<f32>(1.0, 1.0, 1.0, 1.0);
    }
    return base;
  }

  let depth = linearizeDepth(depth01);
  let g = textureLoad(gbufferTex, fullCoord, 0);
  let normal = decodeNormal(g.xyz);

  let aoSmall = upsampleAoSmall(fullCoord, fullSize, depth, normal);
  let aoLarge = upsampleAoLarge(fullCoord, fullSize, depth, normal);

  // Combine cavity + ambient as additive occlusion; avoids over-darkening vs. \`aoSmall * aoLarge\`.
  let occlusion = clamp((1.0 - aoSmall) + (1.0 - aoLarge) * params.ambientWeight, 0.0, 1.0);
  let ao = 1.0 - occlusion;

  if (params.outputMode > 0.5) {
    return vec4<f32>(ao, ao, ao, 1.0);
  }

  let base = textureLoad(sceneColorTex, fullCoord, 0);
  let color = base.rgb * ao;
  return vec4<f32>(color, base.a);
}

`;function bo(e){const t=e.gpuCall("GPUDevice.createShaderModule(gtaoComposite)",()=>e.device.createShaderModule({code:xs}));return e.gpuCall("GPUDevice.createRenderPipeline(gtaoComposite)",()=>e.device.createRenderPipeline({layout:e.pipelineLayout,vertex:{module:t,entryPoint:"vsMain"},fragment:{module:t,entryPoint:"fsMain",targets:[{format:e.format}]},primitive:{topology:"triangle-list",cullMode:"none"},multisample:{count:Math.max(1,e.sampleCount)},depthStencil:e.withDepth?{format:"depth24plus",depthWriteEnabled:!1,depthCompare:"always"}:void 0}))}function xo(e){const t=e.gpuCall("GPUDevice.createShaderModule(gtaoCompositeMulti)",()=>e.device.createShaderModule({code:ys}));return e.gpuCall("GPUDevice.createRenderPipeline(gtaoCompositeMulti)",()=>e.device.createRenderPipeline({layout:e.pipelineLayout,vertex:{module:t,entryPoint:"vsMain"},fragment:{module:t,entryPoint:"fsMain",targets:[{format:e.format}]},primitive:{topology:"triangle-list",cullMode:"none"},multisample:{count:Math.max(1,e.sampleCount)},depthStencil:e.withDepth?{format:"depth24plus",depthWriteEnabled:!1,depthCompare:"always"}:void 0}))}var le=(e=>(e[e.Standard=0]="Standard",e[e.Terrain=1]="Terrain",e[e.Wireframe=2]="Wireframe",e[e.Glass=3]="Glass",e[e.Hidden=4]="Hidden",e))(le||{});function cn(e){return Math.round(e[1])}const vs={r:21/255,g:21/255,b:21/255,a:1},Ps=4,Ms=-1200,Ss=-1.2,ws=-3e3,Cs=-2,yo="rgba16float",St="rgba16float",Ts=24,Bs=2,Xo=4,Is=2,Es=Xo*Is,As=Ne(0,1,0);class Gs{constructor(t,n,o,i,s){N(this,"pipeline");N(this,"terrainPipeline");N(this,"terrainGridPipeline");N(this,"glassBackPipeline");N(this,"glassFrontPipeline");N(this,"curvePipeline");N(this,"wireframePipeline");N(this,"edgePipeline");N(this,"edgeOccludedPipeline");N(this,"sectionIntersectionPipeline");N(this,"pickPipeline");N(this,"gbufferPipeline");N(this,"gtaoPipeline");N(this,"gtaoBlurPipeline");N(this,"gtaoCompositePipeline");N(this,"gtaoCompositeMsaaPipeline");N(this,"gtaoCompositeMultiPipeline");N(this,"gtaoCompositeMultiMsaaPipeline");N(this,"frameBindGroupLayout");N(this,"objectBindGroupLayout");N(this,"gbufferFrameBindGroupLayout");N(this,"gtaoParamsBindGroupLayout");N(this,"gtaoBlurParamsBindGroupLayout");N(this,"gtaoBindGroupLayout");N(this,"gtaoBlurBindGroupLayout");N(this,"gtaoCompositeBindGroupLayout");N(this,"gtaoCompositeMultiBindGroupLayout");N(this,"pipelineLayout");N(this,"gbufferPipelineLayout");N(this,"gtaoPipelineLayout");N(this,"gtaoBlurPipelineLayout");N(this,"gtaoCompositePipelineLayout");N(this,"gtaoCompositeMultiPipelineLayout");N(this,"frameUniformBuffer");N(this,"frameUniformData");N(this,"frameBindGroup");N(this,"gbufferFrameUniformBuffer");N(this,"gbufferFrameUniformData");N(this,"gbufferFrameBindGroup");N(this,"gtaoParamsBuffer");N(this,"gtaoBlurParamsStride");N(this,"gtaoBlurParamsBuffer");N(this,"gtaoParamsBufferAmbient");N(this,"gtaoBlurParamsBufferAmbient");N(this,"gtaoCompositeMultiParamsBuffer");N(this,"gtaoParamsData");N(this,"gtaoCompositeMultiParamsData");N(this,"gtaoParamsBindGroup");N(this,"gtaoBlurParamsBindGroup");N(this,"gtaoParamsBindGroupAmbient");N(this,"gtaoBlurParamsBindGroupAmbient");N(this,"gtaoCompositeMultiParamsBindGroup");N(this,"depthTexture",null);N(this,"depthView",null);N(this,"msaaColorTexture",null);N(this,"msaaColorView",null);N(this,"msaaDepthTexture",null);N(this,"msaaDepthView",null);N(this,"sceneColorTexture",null);N(this,"sceneColorView",null);N(this,"gbufferTexture",null);N(this,"gbufferView",null);N(this,"gbufferDepthTexture",null);N(this,"gbufferDepthView",null);N(this,"gtaoTexture",null);N(this,"gtaoView",null);N(this,"gtaoBlurTexture",null);N(this,"gtaoBlurView",null);N(this,"gtaoAmbientTexture",null);N(this,"gtaoAmbientView",null);N(this,"gtaoAmbientBlurTexture",null);N(this,"gtaoAmbientBlurView",null);N(this,"gtaoBindGroup",null);N(this,"gtaoBlurBindGroupA",null);N(this,"gtaoBlurBindGroupB",null);N(this,"gtaoBlurBindGroupAmbientA",null);N(this,"gtaoBlurBindGroupAmbientB",null);N(this,"gtaoCompositeBindGroup",null);N(this,"gtaoCompositeMultiBindGroup",null);N(this,"pickTexture",null);N(this,"pickView",null);N(this,"pickDepthTexture",null);N(this,"pickDepthView",null);N(this,"pickBuffer",null);N(this,"objects",[]);N(this,"size",{width:0,height:0,dpr:1});N(this,"gtaoTargetSize",{width:0,height:0,scale:.5});N(this,"gtaoAmbientTargetSize",{width:0,height:0,scale:.5});N(this,"gtaoTargetsDirty",!0);N(this,"gtaoSettings",{enabled:!0,aoOnly:!0,multiScale:!0,radius:1.35,ambientRadiusScale:5.75,ambientWeight:.35,bias:.03,intensity:3.6,power:1.5,thickness:1,cornerBoost:0,edgePreserve:1,sampleCount:12,blurSigma:1.4,blurDepthSigma:.07,scale:1});N(this,"sampleCount",Ps);N(this,"cameraDir",me());N(this,"cameraRight",me());N(this,"cameraUp",me());N(this,"clearColor",{...vs});N(this,"overlayRenderer",null);N(this,"disposed",!1);this.canvas=t,this.device=n,this.context=o,this.format=i,this.gpuGuard=s,this.frameUniformData=new Float32Array(28),this.frameUniformBuffer=this.gpuCall("GPUDevice.createBuffer(frameUniformBuffer)",()=>this.device.createBuffer({size:this.frameUniformData.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),this.frameBindGroupLayout=this.gpuCall("GPUDevice.createBindGroupLayout(frame)",()=>this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]})),this.objectBindGroupLayout=this.gpuCall("GPUDevice.createBindGroupLayout(object)",()=>this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]})),this.pipelineLayout=this.gpuCall("GPUDevice.createPipelineLayout",()=>this.device.createPipelineLayout({bindGroupLayouts:[this.frameBindGroupLayout,this.objectBindGroupLayout]})),this.gbufferFrameUniformData=new Float32Array(32),this.gbufferFrameUniformBuffer=this.gpuCall("GPUDevice.createBuffer(gbufferFrameUniformBuffer)",()=>this.device.createBuffer({size:this.gbufferFrameUniformData.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),this.gtaoParamsData=new Float32Array(28),this.gtaoParamsBuffer=this.gpuCall("GPUDevice.createBuffer(gtaoParamsBuffer)",()=>this.device.createBuffer({size:this.gtaoParamsData.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}));const a=this.device.limits.minUniformBufferOffsetAlignment;this.gtaoBlurParamsStride=Math.ceil(this.gtaoParamsData.byteLength/a)*a;const r=this.gtaoBlurParamsStride*Es;this.gtaoBlurParamsBuffer=this.gpuCall("GPUDevice.createBuffer(gtaoBlurParamsBuffer)",()=>this.device.createBuffer({size:r,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),this.gtaoParamsBufferAmbient=this.gpuCall("GPUDevice.createBuffer(gtaoParamsBufferAmbient)",()=>this.device.createBuffer({size:this.gtaoParamsData.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),this.gtaoBlurParamsBufferAmbient=this.gpuCall("GPUDevice.createBuffer(gtaoBlurParamsBufferAmbient)",()=>this.device.createBuffer({size:r,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),this.gtaoCompositeMultiParamsData=new Float32Array(20),this.gtaoCompositeMultiParamsBuffer=this.gpuCall("GPUDevice.createBuffer(gtaoCompositeMultiParamsBuffer)",()=>this.device.createBuffer({size:this.gtaoCompositeMultiParamsData.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),this.gbufferFrameBindGroupLayout=this.gpuCall("GPUDevice.createBindGroupLayout(gbufferFrame)",()=>this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]})),this.gtaoParamsBindGroupLayout=this.gpuCall("GPUDevice.createBindGroupLayout(gtaoParams)",()=>this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]})),this.gtaoBlurParamsBindGroupLayout=this.gpuCall("GPUDevice.createBindGroupLayout(gtaoBlurParams)",()=>this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform",hasDynamicOffset:!0,minBindingSize:this.gtaoParamsData.byteLength}}]})),this.gtaoBindGroupLayout=this.gpuCall("GPUDevice.createBindGroupLayout(gtaoInput)",()=>this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"depth"}}]})),this.gtaoBlurBindGroupLayout=this.gpuCall("GPUDevice.createBindGroupLayout(gtaoBlurInput)",()=>this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"depth"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}}]})),this.gtaoCompositeBindGroupLayout=this.gpuCall("GPUDevice.createBindGroupLayout(gtaoCompositeInput)",()=>this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"depth"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}}]})),this.gtaoCompositeMultiBindGroupLayout=this.gpuCall("GPUDevice.createBindGroupLayout(gtaoCompositeMultiInput)",()=>this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"depth"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}}]})),this.gbufferPipelineLayout=this.gpuCall("GPUDevice.createPipelineLayout(gbuffer)",()=>this.device.createPipelineLayout({bindGroupLayouts:[this.gbufferFrameBindGroupLayout,this.objectBindGroupLayout]})),this.gtaoPipelineLayout=this.gpuCall("GPUDevice.createPipelineLayout(gtao)",()=>this.device.createPipelineLayout({bindGroupLayouts:[this.gtaoParamsBindGroupLayout,this.gtaoBindGroupLayout]})),this.gtaoBlurPipelineLayout=this.gpuCall("GPUDevice.createPipelineLayout(gtaoBlur)",()=>this.device.createPipelineLayout({bindGroupLayouts:[this.gtaoBlurParamsBindGroupLayout,this.gtaoBlurBindGroupLayout]})),this.gtaoCompositePipelineLayout=this.gpuCall("GPUDevice.createPipelineLayout(gtaoComposite)",()=>this.device.createPipelineLayout({bindGroupLayouts:[this.gtaoParamsBindGroupLayout,this.gtaoCompositeBindGroupLayout]})),this.gtaoCompositeMultiPipelineLayout=this.gpuCall("GPUDevice.createPipelineLayout(gtaoCompositeMulti)",()=>this.device.createPipelineLayout({bindGroupLayouts:[this.gtaoParamsBindGroupLayout,this.gtaoCompositeMultiBindGroupLayout]})),this.pipeline=this.createPipeline("back"),this.terrainPipeline=this.createPipeline("none",!0),this.terrainGridPipeline=this.createPipeline("none",!1,!0,"less",!0),this.glassBackPipeline=this.createPipeline("front",!0,!1,"less-equal"),this.glassFrontPipeline=this.createPipeline("back",!0,!1,"less-equal"),this.curvePipeline=this.createCurvePipeline(),this.wireframePipeline=this.createWireframePipeline(),this.edgePipeline=this.createEdgeHighlightPipeline("always"),this.edgeOccludedPipeline=this.createEdgeHighlightPipeline("less",Ms,Ss),this.sectionIntersectionPipeline=this.createEdgeHighlightPipeline("less",ws,Cs),this.pickPipeline=as({gpuCall:this.gpuCall.bind(this),device:this.device,pipelineLayout:this.pipelineLayout}),this.gbufferPipeline=cs({gpuCall:this.gpuCall.bind(this),device:this.device,pipelineLayout:this.gbufferPipelineLayout,format:yo}),this.gtaoPipeline=ms({gpuCall:this.gpuCall.bind(this),device:this.device,pipelineLayout:this.gtaoPipelineLayout,format:St}),this.gtaoBlurPipeline=ps({gpuCall:this.gpuCall.bind(this),device:this.device,pipelineLayout:this.gtaoBlurPipelineLayout,format:St}),this.gtaoCompositePipeline=bo({gpuCall:this.gpuCall.bind(this),device:this.device,pipelineLayout:this.gtaoCompositePipelineLayout,format:this.format,sampleCount:1,withDepth:!1}),this.gtaoCompositeMsaaPipeline=bo({gpuCall:this.gpuCall.bind(this),device:this.device,pipelineLayout:this.gtaoCompositePipelineLayout,format:this.format,sampleCount:this.sampleCount,withDepth:!0}),this.gtaoCompositeMultiPipeline=xo({gpuCall:this.gpuCall.bind(this),device:this.device,pipelineLayout:this.gtaoCompositeMultiPipelineLayout,format:this.format,sampleCount:1,withDepth:!1}),this.gtaoCompositeMultiMsaaPipeline=xo({gpuCall:this.gpuCall.bind(this),device:this.device,pipelineLayout:this.gtaoCompositeMultiPipelineLayout,format:this.format,sampleCount:this.sampleCount,withDepth:!0}),this.frameBindGroup=this.gpuCall("GPUDevice.createBindGroup(frame)",()=>this.device.createBindGroup({layout:this.frameBindGroupLayout,entries:[{binding:0,resource:{buffer:this.frameUniformBuffer}}]})),this.gbufferFrameBindGroup=this.gpuCall("GPUDevice.createBindGroup(gbufferFrame)",()=>this.device.createBindGroup({layout:this.gbufferFrameBindGroupLayout,entries:[{binding:0,resource:{buffer:this.gbufferFrameUniformBuffer}}]})),this.gtaoParamsBindGroup=this.gpuCall("GPUDevice.createBindGroup(gtaoParams)",()=>this.device.createBindGroup({layout:this.gtaoParamsBindGroupLayout,entries:[{binding:0,resource:{buffer:this.gtaoParamsBuffer}}]})),this.gtaoBlurParamsBindGroup=this.gpuCall("GPUDevice.createBindGroup(gtaoBlurParams)",()=>this.device.createBindGroup({layout:this.gtaoBlurParamsBindGroupLayout,entries:[{binding:0,resource:{buffer:this.gtaoBlurParamsBuffer,offset:0,size:this.gtaoParamsData.byteLength}}]})),this.gtaoParamsBindGroupAmbient=this.gpuCall("GPUDevice.createBindGroup(gtaoParamsAmbient)",()=>this.device.createBindGroup({layout:this.gtaoParamsBindGroupLayout,entries:[{binding:0,resource:{buffer:this.gtaoParamsBufferAmbient}}]})),this.gtaoBlurParamsBindGroupAmbient=this.gpuCall("GPUDevice.createBindGroup(gtaoBlurParamsAmbient)",()=>this.device.createBindGroup({layout:this.gtaoBlurParamsBindGroupLayout,entries:[{binding:0,resource:{buffer:this.gtaoBlurParamsBufferAmbient,offset:0,size:this.gtaoParamsData.byteLength}}]})),this.gtaoCompositeMultiParamsBindGroup=this.gpuCall("GPUDevice.createBindGroup(gtaoCompositeMultiParams)",()=>this.device.createBindGroup({layout:this.gtaoParamsBindGroupLayout,entries:[{binding:0,resource:{buffer:this.gtaoCompositeMultiParamsBuffer}}]}))}gpuCall(t,n){return this.gpuGuard?this.gpuGuard.call(t,n):n()}gpuCallAsync(t,n){return this.gpuGuard?this.gpuGuard.callAsync(t,n):n()}setObjects(t){this.objects=t}setClearColor(t){this.clearColor={...t}}setOverlayRenderer(t){this.overlayRenderer=t}dispose(){var n,o,i,s,a,r,l,c,u,m,b,d,h;if(this.disposed)return;this.disposed=!0;const t=new Set;for(const x of this.objects)t.add(x.uniformBuffer),t.add(x.mesh.vertexBuffer);for(const x of t)x.destroy();this.objects=[],this.overlayRenderer=null,this.frameUniformBuffer.destroy(),this.gbufferFrameUniformBuffer.destroy(),this.gtaoParamsBuffer.destroy(),this.gtaoBlurParamsBuffer.destroy(),this.gtaoParamsBufferAmbient.destroy(),this.gtaoBlurParamsBufferAmbient.destroy(),this.gtaoCompositeMultiParamsBuffer.destroy(),(n=this.pickBuffer)==null||n.destroy(),this.pickBuffer=null,(o=this.depthTexture)==null||o.destroy(),this.depthTexture=null,this.depthView=null,(i=this.msaaColorTexture)==null||i.destroy(),this.msaaColorTexture=null,this.msaaColorView=null,(s=this.msaaDepthTexture)==null||s.destroy(),this.msaaDepthTexture=null,this.msaaDepthView=null,(a=this.sceneColorTexture)==null||a.destroy(),this.sceneColorTexture=null,this.sceneColorView=null,(r=this.gbufferTexture)==null||r.destroy(),this.gbufferTexture=null,this.gbufferView=null,(l=this.gbufferDepthTexture)==null||l.destroy(),this.gbufferDepthTexture=null,this.gbufferDepthView=null,(c=this.gtaoTexture)==null||c.destroy(),this.gtaoTexture=null,this.gtaoView=null,(u=this.gtaoBlurTexture)==null||u.destroy(),this.gtaoBlurTexture=null,this.gtaoBlurView=null,(m=this.gtaoAmbientTexture)==null||m.destroy(),this.gtaoAmbientTexture=null,this.gtaoAmbientView=null,(b=this.gtaoAmbientBlurTexture)==null||b.destroy(),this.gtaoAmbientBlurTexture=null,this.gtaoAmbientBlurView=null,this.gtaoBindGroup=null,this.gtaoBlurBindGroupA=null,this.gtaoBlurBindGroupB=null,this.gtaoBlurBindGroupAmbientA=null,this.gtaoBlurBindGroupAmbientB=null,this.gtaoCompositeBindGroup=null,this.gtaoCompositeMultiBindGroup=null,(d=this.pickTexture)==null||d.destroy(),this.pickTexture=null,this.pickView=null,(h=this.pickDepthTexture)==null||h.destroy(),this.pickDepthTexture=null,this.pickDepthView=null}setGtaoSettings(t){const n=this.gtaoSettings.scale,o=this.gtaoSettings.multiScale,i=Math.min(1,Math.max(.4,t.scale)),s=Math.min(Ts,Math.max(1,Math.round(t.sampleCount))),a=Math.min(1,Math.max(0,t.cornerBoost)),r=Math.min(1,Math.max(0,t.edgePreserve)),l=!!t.multiScale,c=Math.min(8,Math.max(1,t.ambientRadiusScale)),u=Math.min(1,Math.max(0,t.ambientWeight));this.gtaoSettings={...t,cornerBoost:a,edgePreserve:r,multiScale:l,ambientRadiusScale:c,ambientWeight:u,scale:i,sampleCount:s},(Math.abs(i-n)>.001||l!==o)&&(this.gtaoTargetsDirty=!0)}createRenderObject(t,n,o,i,s,a){const r=fo(o),l=fo(r),c=[...i],u=[...s],m=[...s],b=new Float32Array(hs);b.set(r,lt.modelMatrix),b.set(i,lt.color),b.set(u,lt.material),b.set([0,0,0,0],lt.pick);const d=this.gpuCall("GPUDevice.createBuffer(objectUniform)",()=>this.device.createBuffer({size:b.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),h=this.gpuCall("GPUDevice.createBindGroup(object)",()=>this.device.createBindGroup({layout:this.objectBindGroupLayout,entries:[{binding:0,resource:{buffer:d}}]}));return this.gpuCall("GPUQueue.writeBuffer(objectUniform)",()=>this.device.queue.writeBuffer(d,0,b)),{id:t,mesh:n,modelMatrix:r,baseMatrix:l,color:i,baseColor:c,material:u,baseMaterial:m,objectType:a.objectType,layerIndex:a.layerIndex??0,visible:!0,soilId:a.soilId,sectionId:a.sectionId,profileId:a.profileId,pickId:0,edgeXray:!1,uniformBuffer:d,uniformData:b,bindGroup:h}}resize(){var B,y,C,g,P,v,T,p,E,w,f,S,L,F,z,M;if(this.disposed)return;const t=window.devicePixelRatio||1,n=Math.max(1,Math.floor(this.canvas.clientWidth*t)),o=Math.max(1,Math.floor(this.canvas.clientHeight*t)),i=this.gtaoSettings.scale,s=this.gtaoSettings.multiScale,a=s?Math.min(1,i+.25):i,r=Math.max(1,Math.round(n*a)),l=Math.max(1,Math.round(o*a)),c=i,u=Math.max(1,Math.round(n*c)),m=Math.max(1,Math.round(o*c)),b=n!==this.size.width||o!==this.size.height||t!==this.size.dpr,d=this.gtaoTargetsDirty||r!==this.gtaoTargetSize.width||l!==this.gtaoTargetSize.height||Math.abs(a-this.gtaoTargetSize.scale)>.001,h=s?this.gtaoTargetsDirty||u!==this.gtaoAmbientTargetSize.width||m!==this.gtaoAmbientTargetSize.height||Math.abs(c-this.gtaoAmbientTargetSize.scale)>.001:this.gtaoAmbientTexture!==null;if(!(!b&&!(d||h))){if(b){this.size={width:n,height:o,dpr:t},this.canvas.width=n,this.canvas.height=o,this.gpuCall("GPUCanvasContext.configure",()=>this.context.configure({device:this.device,format:this.format,alphaMode:"opaque"})),(B=this.depthTexture)==null||B.destroy();const I=this.gpuCall("GPUDevice.createTexture(depth)",()=>this.device.createTexture({size:{width:n,height:o},format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}));if(this.depthTexture=I,this.depthView=this.gpuCall("GPUTexture.createView(depth)",()=>I.createView()),this.sampleCount>1){(y=this.msaaColorTexture)==null||y.destroy();const V=this.gpuCall("GPUDevice.createTexture(msaaColor)",()=>this.device.createTexture({size:{width:n,height:o},sampleCount:this.sampleCount,format:this.format,usage:GPUTextureUsage.RENDER_ATTACHMENT}));this.msaaColorTexture=V,this.msaaColorView=this.gpuCall("GPUTexture.createView(msaaColor)",()=>V.createView()),(C=this.msaaDepthTexture)==null||C.destroy();const O=this.gpuCall("GPUDevice.createTexture(msaaDepth)",()=>this.device.createTexture({size:{width:n,height:o},sampleCount:this.sampleCount,format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}));this.msaaDepthTexture=O,this.msaaDepthView=this.gpuCall("GPUTexture.createView(msaaDepth)",()=>O.createView())}else(g=this.msaaColorTexture)==null||g.destroy(),(P=this.msaaDepthTexture)==null||P.destroy(),this.msaaColorTexture=null,this.msaaColorView=null,this.msaaDepthTexture=null,this.msaaDepthView=null;(v=this.pickTexture)==null||v.destroy();const A=this.gpuCall("GPUDevice.createTexture(pick)",()=>this.device.createTexture({size:{width:n,height:o},format:"rgba8unorm",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}));this.pickTexture=A,this.pickView=this.gpuCall("GPUTexture.createView(pick)",()=>A.createView()),(T=this.pickDepthTexture)==null||T.destroy();const G=this.gpuCall("GPUDevice.createTexture(pickDepth)",()=>this.device.createTexture({size:{width:n,height:o},format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}));this.pickDepthTexture=G,this.pickDepthView=this.gpuCall("GPUTexture.createView(pickDepth)",()=>G.createView())}if(this.pickBuffer||(this.pickBuffer=this.gpuCall("GPUDevice.createBuffer(pickReadback)",()=>this.device.createBuffer({size:256,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}))),b||!this.sceneColorTexture){(p=this.sceneColorTexture)==null||p.destroy();const I=this.gpuCall("GPUDevice.createTexture(sceneColor)",()=>this.device.createTexture({size:{width:n,height:o},format:this.format,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}));this.sceneColorTexture=I,this.sceneColorView=this.gpuCall("GPUTexture.createView(sceneColor)",()=>I.createView())}if(b||!this.gbufferTexture){(E=this.gbufferTexture)==null||E.destroy();const I=this.gpuCall("GPUDevice.createTexture(gbuffer)",()=>this.device.createTexture({size:{width:n,height:o},format:yo,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}));this.gbufferTexture=I,this.gbufferView=this.gpuCall("GPUTexture.createView(gbuffer)",()=>I.createView()),(w=this.gbufferDepthTexture)==null||w.destroy();const A=this.gpuCall("GPUDevice.createTexture(gbufferDepth)",()=>this.device.createTexture({size:{width:n,height:o},format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}));this.gbufferDepthTexture=A,this.gbufferDepthView=this.gpuCall("GPUTexture.createView(gbufferDepth)",()=>A.createView())}if(b||d||!this.gtaoTexture){(f=this.gtaoTexture)==null||f.destroy(),(S=this.gtaoBlurTexture)==null||S.destroy();const I=this.gpuCall("GPUDevice.createTexture(gtao)",()=>this.device.createTexture({size:{width:r,height:l},format:St,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}));this.gtaoTexture=I,this.gtaoView=this.gpuCall("GPUTexture.createView(gtao)",()=>I.createView());const A=this.gpuCall("GPUDevice.createTexture(gtaoBlur)",()=>this.device.createTexture({size:{width:r,height:l},format:St,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}));this.gtaoBlurTexture=A,this.gtaoBlurView=this.gpuCall("GPUTexture.createView(gtaoBlur)",()=>A.createView())}if(s){if(b||h||!this.gtaoAmbientTexture){(L=this.gtaoAmbientTexture)==null||L.destroy(),(F=this.gtaoAmbientBlurTexture)==null||F.destroy();const I=this.gpuCall("GPUDevice.createTexture(gtaoAmbient)",()=>this.device.createTexture({size:{width:u,height:m},format:St,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}));this.gtaoAmbientTexture=I,this.gtaoAmbientView=this.gpuCall("GPUTexture.createView(gtaoAmbient)",()=>I.createView());const A=this.gpuCall("GPUDevice.createTexture(gtaoAmbientBlur)",()=>this.device.createTexture({size:{width:u,height:m},format:St,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}));this.gtaoAmbientBlurTexture=A,this.gtaoAmbientBlurView=this.gpuCall("GPUTexture.createView(gtaoAmbientBlur)",()=>A.createView())}}else(z=this.gtaoAmbientTexture)==null||z.destroy(),(M=this.gtaoAmbientBlurTexture)==null||M.destroy(),this.gtaoAmbientTexture=null,this.gtaoAmbientView=null,this.gtaoAmbientBlurTexture=null,this.gtaoAmbientBlurView=null,this.gtaoBlurBindGroupAmbientA=null,this.gtaoBlurBindGroupAmbientB=null,this.gtaoCompositeMultiBindGroup=null;this.gbufferView&&this.gbufferDepthView&&this.gtaoView&&this.gtaoBlurView&&this.sceneColorView&&(this.gtaoBindGroup=this.gpuCall("GPUDevice.createBindGroup(gtaoInput)",()=>this.device.createBindGroup({layout:this.gtaoBindGroupLayout,entries:[{binding:0,resource:this.gbufferView},{binding:1,resource:this.gbufferDepthView}]})),this.gtaoBlurBindGroupA=this.gpuCall("GPUDevice.createBindGroup(gtaoBlurA)",()=>this.device.createBindGroup({layout:this.gtaoBlurBindGroupLayout,entries:[{binding:0,resource:this.gbufferView},{binding:1,resource:this.gbufferDepthView},{binding:2,resource:this.gtaoView}]})),this.gtaoBlurBindGroupB=this.gpuCall("GPUDevice.createBindGroup(gtaoBlurB)",()=>this.device.createBindGroup({layout:this.gtaoBlurBindGroupLayout,entries:[{binding:0,resource:this.gbufferView},{binding:1,resource:this.gbufferDepthView},{binding:2,resource:this.gtaoBlurView}]})),this.gtaoCompositeBindGroup=this.gpuCall("GPUDevice.createBindGroup(gtaoComposite)",()=>this.device.createBindGroup({layout:this.gtaoCompositeBindGroupLayout,entries:[{binding:0,resource:this.gbufferView},{binding:1,resource:this.gbufferDepthView},{binding:2,resource:this.gtaoView},{binding:3,resource:this.sceneColorView}]})),s&&this.gtaoAmbientView&&this.gtaoAmbientBlurView?(this.gtaoBlurBindGroupAmbientA=this.gpuCall("GPUDevice.createBindGroup(gtaoAmbientBlurA)",()=>this.device.createBindGroup({layout:this.gtaoBlurBindGroupLayout,entries:[{binding:0,resource:this.gbufferView},{binding:1,resource:this.gbufferDepthView},{binding:2,resource:this.gtaoAmbientView}]})),this.gtaoBlurBindGroupAmbientB=this.gpuCall("GPUDevice.createBindGroup(gtaoAmbientBlurB)",()=>this.device.createBindGroup({layout:this.gtaoBlurBindGroupLayout,entries:[{binding:0,resource:this.gbufferView},{binding:1,resource:this.gbufferDepthView},{binding:2,resource:this.gtaoAmbientBlurView}]})),this.gtaoCompositeMultiBindGroup=this.gpuCall("GPUDevice.createBindGroup(gtaoCompositeMulti)",()=>this.device.createBindGroup({layout:this.gtaoCompositeMultiBindGroupLayout,entries:[{binding:0,resource:this.gbufferView},{binding:1,resource:this.gbufferDepthView},{binding:2,resource:this.gtaoView},{binding:3,resource:this.gtaoAmbientView},{binding:4,resource:this.sceneColorView}]}))):(this.gtaoBlurBindGroupAmbientA=null,this.gtaoBlurBindGroupAmbientB=null,this.gtaoCompositeMultiBindGroup=null)),this.gtaoTargetSize={width:r,height:l,scale:a},this.gtaoAmbientTargetSize=s?{width:u,height:m,scale:c}:{width:0,height:0,scale:c},this.gtaoTargetsDirty=!1}}getSize(){return this.size}isGbufferObject(t){return!t.visible||cn(t.material)===le.Hidden?!1:t.objectType==="terrain"||t.objectType==="solid"||t.objectType==="section"||t.objectType==="sectionTopProfile"||t.objectType==="profile"||t.objectType==="profileMarker"||t.objectType==="profileLayer"}isPostAoObject(t){return t.objectType==="curve"||t.objectType==="solidWireframe"||t.objectType==="sectionWireframe"||t.objectType==="terrainWireframe"||t.objectType==="solidEdge"||t.objectType==="sectionEdge"||t.objectType==="profileEdge"||t.objectType==="profileMarkerEdge"||t.objectType==="profileLayerEdge"||t.objectType==="sectionTopProfileEdge"||t.objectType==="sectionIntersection"||t.objectType==="profileSectionIntersection"}render(t){this.disposed||this.objects.length!==0&&this.gpuCall("Renderer.render",()=>{this.resize();const n=t.getViewProjMatrix(),o=t.getPosition();Gn(this.cameraDir,t.target,o),Fe(this.cameraDir,this.cameraDir),Re(this.cameraRight,this.cameraDir,As),An(this.cameraRight)<1e-4&&Ie(this.cameraRight,1,0,0),Fe(this.cameraRight,this.cameraRight),Re(this.cameraUp,this.cameraRight,this.cameraDir),Fe(this.cameraUp,this.cameraUp);const i=this.size.width/this.size.dpr,s=this.size.height/this.size.dpr;this.frameUniformData.set(n,kt.viewProj),this.frameUniformData.set([o[0],o[1],o[2],this.size.dpr],kt.cameraPos),this.frameUniformData.set([this.cameraDir[0],this.cameraDir[1],this.cameraDir[2],0],kt.cameraDir),this.frameUniformData.set([i,s,i>0?1/i:0,s>0?1/s:0],kt.viewport),this.gpuCall("GPUQueue.writeBuffer(frameUniformBuffer)",()=>this.device.queue.writeBuffer(this.frameUniformBuffer,0,this.frameUniformData.buffer,this.frameUniformData.byteOffset,this.frameUniformData.byteLength));const a=t.mode==="perspective",r=a?s/(2*Math.tan(t.fov*.5)):s/(2*t.orthoScale),c=!!(this.gtaoSettings.multiScale&&this.gtaoAmbientView&&this.gtaoAmbientBlurView&&this.gtaoBlurBindGroupAmbientA&&this.gtaoBlurBindGroupAmbientB&&this.gtaoCompositeMultiBindGroup),u=!!(this.gtaoSettings.enabled&&this.gbufferView&&this.gtaoView&&this.gtaoBlurView&&this.sceneColorView&&this.gbufferDepthView&&this.gtaoBindGroup&&this.gtaoBlurBindGroupA&&this.gtaoBlurBindGroupB&&this.gtaoBlurParamsBindGroup&&(c?this.gtaoCompositeMultiBindGroup:this.gtaoCompositeBindGroup)),m=u&&c,b=Math.min(Xo,Math.max(Bs,Math.round(this.gtaoSettings.blurSigma+1.5)));u&&gs({gpuCall:this.gpuCall.bind(this),device:this.device,camera:t,viewProj:n,cameraPos:o,cameraRight:this.cameraRight,cameraUp:this.cameraUp,cameraDir:this.cameraDir,isPerspective:a,size:{width:this.size.width,height:this.size.height},gtaoTargetSize:this.gtaoTargetSize,gtaoAmbientTargetSize:this.gtaoAmbientTargetSize,gtaoSettings:this.gtaoSettings,gbufferFrameUniformData:this.gbufferFrameUniformData,gbufferFrameUniformBuffer:this.gbufferFrameUniformBuffer,gtaoParamsData:this.gtaoParamsData,gtaoParamsBuffer:this.gtaoParamsBuffer,gtaoBlurParamsStride:this.gtaoBlurParamsStride,gtaoBlurParamsBuffer:this.gtaoBlurParamsBuffer,gtaoParamsBufferAmbient:this.gtaoParamsBufferAmbient,gtaoBlurParamsBufferAmbient:this.gtaoBlurParamsBufferAmbient,gtaoCompositeMultiParamsData:this.gtaoCompositeMultiParamsData,gtaoCompositeMultiParamsBuffer:this.gtaoCompositeMultiParamsBuffer,atrousIterations:b,useMultiScale:m});for(const p of this.objects){if(!p.visible)continue;const E=cn(p.material);if((E===le.Standard||E===le.Glass)&&p.material[0]>0){const f=a?r/Math.max(t.distance,.01):r;p.material[3]=f}else E!==le.Terrain&&(p.material[3]=1);p.uniformData.set(p.modelMatrix,lt.modelMatrix),p.uniformData.set(p.color,lt.color),p.uniformData.set(p.material,lt.material);const w=p.pickData??[0,0,0];p.uniformData.set([p.pickId??0,w[0],w[1],w[2]],lt.pick),this.device.queue.writeBuffer(p.uniformBuffer,0,p.uniformData.buffer,p.uniformData.byteOffset,p.uniformData.byteLength)}const d=this.gpuCall("GPUCanvasContext.getCurrentTexture().createView",()=>this.context.getCurrentTexture().createView()),h=!!(this.sampleCount>1&&this.msaaColorView&&this.msaaDepthView),x=u,B=u?this.sceneColorView:d,y=h?this.msaaColorView:B,C=h?this.msaaDepthView:this.depthView,g={view:y,loadOp:"clear",storeOp:"store",clearValue:this.clearColor};h&&(g.resolveTarget=B);const P=this.gpuCall("GPUDevice.createCommandEncoder",()=>this.device.createCommandEncoder());u&&us({gpuCall:this.gpuCall.bind(this),encoder:P,gbufferView:this.gbufferView,gbufferDepthView:this.gbufferDepthView,frameBindGroup:this.gbufferFrameBindGroup,pipeline:this.gbufferPipeline,objects:this.objects,isGbufferObject:p=>this.isGbufferObject(p)});const v=(p,E)=>{p.setBindGroup(0,this.frameBindGroup);let w=null;for(const f of this.objects){if(!f.visible||x&&this.isPostAoObject(f)!==E)continue;if((f.objectType==="solid"||f.objectType==="section"||f.objectType==="terrain"||f.objectType==="profile"||f.objectType==="profileMarker"||f.objectType==="profileLayer"||f.objectType==="sectionTopProfile")&&cn(f.material)===le.Glass){w!==this.glassBackPipeline&&(p.setPipeline(this.glassBackPipeline),w=this.glassBackPipeline),p.setBindGroup(1,f.bindGroup),p.setVertexBuffer(0,f.mesh.vertexBuffer),p.draw(f.mesh.vertexCount,1,0,0),w!==this.glassFrontPipeline&&(p.setPipeline(this.glassFrontPipeline),w=this.glassFrontPipeline),p.setBindGroup(1,f.bindGroup),p.setVertexBuffer(0,f.mesh.vertexBuffer),p.draw(f.mesh.vertexCount,1,0,0);continue}const L=f.objectType==="curve"?this.curvePipeline:f.objectType==="solidWireframe"||f.objectType==="sectionWireframe"||f.objectType==="terrainWireframe"?this.wireframePipeline:f.objectType==="sectionIntersection"||f.objectType==="profileSectionIntersection"?this.sectionIntersectionPipeline:f.objectType==="solidEdge"||f.objectType==="sectionEdge"||f.objectType==="profileEdge"||f.objectType==="profileMarkerEdge"||f.objectType==="profileLayerEdge"||f.objectType==="sectionTopProfileEdge"?f.edgeXray?this.edgePipeline:this.edgeOccludedPipeline:f.objectType==="terrain"?f.material[3]>.5?this.terrainGridPipeline:this.terrainPipeline:f.objectType==="solid"?this.terrainPipeline:this.pipeline;w!==L&&(p.setPipeline(L),w=L),p.setBindGroup(1,f.bindGroup),p.setVertexBuffer(0,f.mesh.vertexBuffer),p.draw(f.mesh.vertexCount,1,0,0)}},T=this.gpuCall("GPUCommandEncoder.beginRenderPass(scene)",()=>P.beginRenderPass({colorAttachments:[g],depthStencilAttachment:{view:C,depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1}}));if(v(T,!1),T.end(),u&&bs({gpuCall:this.gpuCall.bind(this),encoder:P,atrousIterations:b,useMultiScale:m,useMsaa:h,splitEdgesFromAo:x,swapchainView:d,depthView:C,msaaColorView:this.msaaColorView,clearColor:this.clearColor,gtaoView:this.gtaoView,gtaoBlurView:this.gtaoBlurView,gtaoAmbientView:this.gtaoAmbientView,gtaoAmbientBlurView:this.gtaoAmbientBlurView,gtaoPipeline:this.gtaoPipeline,gtaoBlurPipeline:this.gtaoBlurPipeline,gtaoCompositePipeline:this.gtaoCompositePipeline,gtaoCompositeMsaaPipeline:this.gtaoCompositeMsaaPipeline,gtaoCompositeMultiPipeline:this.gtaoCompositeMultiPipeline,gtaoCompositeMultiMsaaPipeline:this.gtaoCompositeMultiMsaaPipeline,gtaoParamsBindGroup:this.gtaoParamsBindGroup,gtaoBlurParamsBindGroup:this.gtaoBlurParamsBindGroup,gtaoParamsBindGroupAmbient:this.gtaoParamsBindGroupAmbient,gtaoBlurParamsBindGroupAmbient:this.gtaoBlurParamsBindGroupAmbient,gtaoBindGroup:this.gtaoBindGroup,gtaoBlurBindGroupA:this.gtaoBlurBindGroupA,gtaoBlurBindGroupB:this.gtaoBlurBindGroupB,gtaoBlurBindGroupAmbientA:this.gtaoBlurBindGroupAmbientA,gtaoBlurBindGroupAmbientB:this.gtaoBlurBindGroupAmbientB,gtaoCompositeBindGroup:this.gtaoCompositeBindGroup,gtaoCompositeMultiBindGroup:this.gtaoCompositeMultiBindGroup,gtaoCompositeMultiParamsBindGroup:this.gtaoCompositeMultiParamsBindGroup,gtaoBlurParamsStride:this.gtaoBlurParamsStride,drawPostAoObjects:p=>v(p,!0)}),this.overlayRenderer){const p=u||h?d:y,E=this.gpuCall("GPUCommandEncoder.beginRenderPass(overlay)",()=>P.beginRenderPass({colorAttachments:[{view:p,loadOp:"load",storeOp:"store"}],depthStencilAttachment:{view:this.depthView,depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1}}));this.overlayRenderer(E,t),E.end()}this.gpuCall("GPUQueue.submit",()=>this.device.queue.submit([P.finish()]))})}async pick(t,n){return this.disposed?null:rs({gpuCall:this.gpuCall.bind(this),gpuCallAsync:this.gpuCallAsync.bind(this),device:this.device,pipeline:this.pickPipeline,frameBindGroup:this.frameBindGroup,objects:this.objects,pickTexture:this.pickTexture,pickView:this.pickView,pickDepthView:this.pickDepthView,pickBuffer:this.pickBuffer,size:this.size,x:t,y:n})}createPipeline(t,n=!1,o=!0,i="less",s=!1){const a=[{format:this.format}];n&&(a[0].blend={color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha"}});const r=this.gpuCall("GPUDevice.createShaderModule(mesh)",()=>this.device.createShaderModule({code:ts}));return this.gpuCall("GPUDevice.createRenderPipeline(mesh)",()=>this.device.createRenderPipeline({layout:this.pipelineLayout,vertex:{module:r,entryPoint:"vsMain",buffers:[{arrayStride:6*4,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:3*4,format:"float32x3"}]}]},fragment:{module:r,entryPoint:"fsMain",targets:a},primitive:{topology:"triangle-list",cullMode:t},multisample:{count:this.sampleCount,alphaToCoverageEnabled:s&&this.sampleCount>1},depthStencil:{format:"depth24plus",depthWriteEnabled:o,depthCompare:i}}))}createCurvePipeline(){const t=this.gpuCall("GPUDevice.createShaderModule(curve)",()=>this.device.createShaderModule({code:ns}));return this.gpuCall("GPUDevice.createRenderPipeline(curve)",()=>this.device.createRenderPipeline({layout:this.pipelineLayout,vertex:{module:t,entryPoint:"vsMain",buffers:[{arrayStride:32,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:12,format:"float32x3"},{shaderLocation:2,offset:24,format:"float32"},{shaderLocation:3,offset:28,format:"float32"}]}]},fragment:{module:t,entryPoint:"fsMain",targets:[{format:this.format,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list",cullMode:"none"},multisample:{count:this.sampleCount},depthStencil:{depthWriteEnabled:!1,depthCompare:"less-equal",format:"depth24plus"}}))}createWireframePipeline(t="less-equal"){const n=this.gpuCall("GPUDevice.createShaderModule(wireframe)",()=>this.device.createShaderModule({code:os}));return this.gpuCall("GPUDevice.createRenderPipeline(wireframe)",()=>this.device.createRenderPipeline({layout:this.pipelineLayout,vertex:{module:n,entryPoint:"vsMain",buffers:[{arrayStride:6*4,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:n,entryPoint:"fsMain",targets:[{format:this.format}]},primitive:{topology:"line-list",cullMode:"none"},multisample:{count:this.sampleCount},depthStencil:{format:"depth24plus",depthWriteEnabled:!1,depthCompare:t}}))}createEdgeHighlightPipeline(t,n=0,o=0){const i=this.gpuCall("GPUDevice.createShaderModule(edgeHighlight)",()=>this.device.createShaderModule({code:is}));return this.gpuCall("GPUDevice.createRenderPipeline(edgeHighlight)",()=>this.device.createRenderPipeline({layout:this.pipelineLayout,vertex:{module:i,entryPoint:"vsMain",buffers:[{arrayStride:14*4,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:3*4,format:"float32x3"},{shaderLocation:2,offset:6*4,format:"float32x3"},{shaderLocation:3,offset:9*4,format:"float32x3"},{shaderLocation:4,offset:12*4,format:"float32"},{shaderLocation:5,offset:13*4,format:"float32"}]}]},fragment:{module:i,entryPoint:"fsMain",targets:[{format:this.format,blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list",cullMode:"none"},multisample:{count:this.sampleCount},depthStencil:{format:"depth24plus",depthWriteEnabled:!1,depthCompare:t,depthBias:n,depthBiasSlopeScale:o}}))}}function Ds(e){const t=new Float32Array([.5,-.5,-.5,1,0,0,.5,.5,-.5,1,0,0,.5,.5,.5,1,0,0,.5,-.5,-.5,1,0,0,.5,.5,.5,1,0,0,.5,-.5,.5,1,0,0,-.5,-.5,.5,-1,0,0,-.5,.5,.5,-1,0,0,-.5,.5,-.5,-1,0,0,-.5,-.5,.5,-1,0,0,-.5,.5,-.5,-1,0,0,-.5,-.5,-.5,-1,0,0,-.5,.5,-.5,0,1,0,-.5,.5,.5,0,1,0,.5,.5,.5,0,1,0,-.5,.5,-.5,0,1,0,.5,.5,.5,0,1,0,.5,.5,-.5,0,1,0,-.5,-.5,.5,0,-1,0,-.5,-.5,-.5,0,-1,0,.5,-.5,-.5,0,-1,0,-.5,-.5,.5,0,-1,0,.5,-.5,-.5,0,-1,0,.5,-.5,.5,0,-1,0,-.5,-.5,.5,0,0,1,.5,-.5,.5,0,0,1,.5,.5,.5,0,0,1,-.5,-.5,.5,0,0,1,.5,.5,.5,0,0,1,-.5,.5,.5,0,0,1,.5,-.5,-.5,0,0,-1,-.5,-.5,-.5,0,0,-1,-.5,.5,-.5,0,0,-1,.5,-.5,-.5,0,0,-1,-.5,.5,-.5,0,0,-1,.5,.5,-.5,0,0,-1]),n=e.createBuffer({size:t.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});return e.queue.writeBuffer(n,0,t),{vertexBuffer:n,vertexCount:t.length/6}}const Dn=Math.cos(40*Math.PI/180);function Dt(e){return{vertexBuffer:e.createBuffer({size:4,usage:GPUBufferUsage.VERTEX}),vertexCount:0}}function Ln(e,t,n=GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST){const o=e.createBuffer({size:t.byteLength,usage:n});return e.queue.writeBuffer(o,0,t),o}function Ze(e,t,n=6){return t.length===0?Dt(e):{vertexBuffer:Ln(e,t),vertexCount:t.length/n}}const Ls=1e-6,ct=6,Ns=(e,t,n)=>Math.min(Math.max(e,t),n),Vs=(e,t,n)=>{const o=Math.hypot(e,t,n);return o<=Ls?null:[e/o,t/o,n/o]},un=1e-5,vo=(e,t,n)=>{const o=Math.round(e/un),i=Math.round(t/un),s=Math.round(n/un);return`${o},${i},${s}`};function zs(e,t=[0,1,0]){if(e.length===0)return new Float32Array;const n=[],o=(i,s,a,r)=>{n.push(i[0],i[1],i[2],s[0],s[1],s[2],t[0],t[1],t[2],t[0],t[1],t[2],a,r)};for(const[i,s]of e)o(i,s,-1,0),o(i,s,1,0),o(i,s,1,1),o(i,s,-1,0),o(i,s,1,1),o(i,s,-1,1);return new Float32Array(n)}function wt(e,t,n=[0,1,0]){const o=zs(t,n);return Ze(e,o,14)}function Nn(e,t){if(e.length===0)return e;const n=new Map,o=[],i=(r,l,c,u,m,b)=>{o.push(r[0],r[1],r[2],l[0],l[1],l[2],c[0],c[1],c[2],u[0],u[1],u[2],m,b)},s=(r,l,c,u)=>{i(r,l,c,u,-1,0),i(r,l,c,u,1,0),i(r,l,c,u,1,1),i(r,l,c,u,-1,0),i(r,l,c,u,1,1),i(r,l,c,u,-1,1)},a=(r,l,c)=>{const u=vo(r[0],r[1],r[2]),m=vo(l[0],l[1],l[2]),b=u<m?`${u}|${m}`:`${m}|${u}`,d=n.get(b);if(!d){n.set(b,{a:r,b:l,normals:[c]});return}d.normals.push(c)};for(let r=0;r+ct*3-1<e.length;r+=ct*3){const l=e[r],c=e[r+1],u=e[r+2],m=e[r+ct],b=e[r+ct+1],d=e[r+ct+2],h=e[r+ct*2],x=e[r+ct*2+1],B=e[r+ct*2+2],y=m-l,C=b-c,g=d-u,P=h-l,v=x-c,T=B-u,p=C*T-g*v,E=g*P-y*T,w=y*v-C*P,f=Vs(p,E,w);if(!f)continue;const S=[l,c,u],L=[m,b,d],F=[h,x,B];a(S,L,f),a(L,F,f),a(F,S,f)}for(const r of n.values()){const l=r.normals;if(l.length===1){s(r.a,r.b,l[0],l[0]);continue}let c=1,u=null,m=null;for(let b=0;b<l.length;b+=1){const d=l[b];for(let h=b+1;h<l.length;h+=1){const x=l[h],B=Ns(d[0]*x[0]+d[1]*x[1]+d[2]*x[2],-1,1);B<c&&(c=B,u=d,m=x)}}u&&m&&c<t&&s(r.a,r.b,u,m)}return o.length>0?new Float32Array(o):new Float32Array}function Po(e,t,n,o,i=.02){const s=[],a=[],r=[],l=(m,b,d,h,x,B)=>{s.push(m,b,d,h,x,B)},c=(m,b,d)=>{a.push(m,b,d,0,0,0)},u=(m,b,d,h,x)=>{r.push(m,b,d,h,0,x)};for(let m=0;m<t.length-1;m+=1){const[b,d]=t[m],[h,x]=t[m+1],B=h-b,y=x-d,C=Math.hypot(B,y);if(C<1e-4)continue;const g=y/C,P=-B/C,v=g*i,T=P*i,p=b+v,E=d+T,w=h+v,f=x+T,S=n,L=n,F=o,z=o;l(p,S,E,g,0,P),l(w,F,f,g,0,P),l(w,L,f,g,0,P),l(p,S,E,g,0,P),l(p,z,E,g,0,P),l(w,F,f,g,0,P),u(p,S,E,g,P),u(w,F,f,g,P),u(w,L,f,g,P),u(p,S,E,g,P),u(p,z,E,g,P),u(w,F,f,g,P),l(p,S,E,-g,0,-P),l(w,L,f,-g,0,-P),l(w,F,f,-g,0,-P),l(p,S,E,-g,0,-P),l(w,F,f,-g,0,-P),l(p,z,E,-g,0,-P),c(p,S,E),c(w,F,f),c(w,F,f),c(w,L,f),c(w,L,f),c(p,S,E),c(p,S,E),c(p,z,E),c(p,z,E),c(w,F,f),c(w,F,f),c(p,S,E)}return{solid:Ze(e,new Float32Array(s)),wireframe:Ze(e,new Float32Array(a)),edges:Ze(e,Nn(new Float32Array(r),Dn),14)}}const Fs=1e-6;function Os(e,t,n,o){const i=Math.floor(t.length/2),s=Math.floor(o.length/3);if(i<3||n.length!==i||s<1||o.length!==s*3)return Dt(e);const a=new Float32Array(i),r=new Float32Array(i),l=new Float32Array(i),c=y=>t[y*2],u=y=>t[y*2+1],m=y=>n[y];for(let y=0;y<o.length;y+=3){let C=o[y]|0,g=o[y+1]|0,P=o[y+2]|0;if(C<0||g<0||P<0||C>=i||g>=i||P>=i)continue;const v=c(C),T=u(C),p=c(g),E=u(g),w=c(P),f=u(P);if((p-v)*(f-T)-(E-T)*(w-v)<0){const k=g;g=P,P=k}const L=m(C),F=m(g),z=m(P),M=p-v,I=F-L,A=E-T,G=w-v,V=z-L,O=f-T,j=I*O-A*V,R=A*G-M*O,_=M*V-I*G;a[C]+=j,r[C]+=R,l[C]+=_,a[g]+=j,r[g]+=R,l[g]+=_,a[P]+=j,r[P]+=R,l[P]+=_}const b=new Float32Array(i*3);for(let y=0;y<i;y+=1){const C=a[y],g=r[y],P=l[y],v=Math.hypot(C,g,P);if(v<=Fs){b[y*3]=0,b[y*3+1]=1,b[y*3+2]=0;continue}b[y*3]=C/v,b[y*3+1]=g/v,b[y*3+2]=P/v}const d=[],h=y=>{d.push(c(y),m(y),u(y),b[y*3],b[y*3+1],b[y*3+2])};for(let y=0;y<o.length;y+=3){let C=o[y]|0,g=o[y+1]|0,P=o[y+2]|0;if(C<0||g<0||P<0||C>=i||g>=i||P>=i)continue;const v=c(C),T=u(C),p=c(g),E=u(g),w=c(P),f=u(P);if((p-v)*(f-T)-(E-T)*(w-v)<0){const L=g;g=P,P=L}h(C),h(g),h(P)}const x=new Float32Array(d);return x.length===0?Dt(e):{vertexBuffer:Ln(e,x),vertexCount:x.length/6}}function Rs(e,t,n,o){const i=Math.floor(t.length/2),s=Math.floor(o.length/3);if(i<3||n.length!==i||s<1||o.length!==s*3)return Dt(e);const a=[],r=u=>{a.push(t[u*2],n[u],t[u*2+1],0,0,0)};for(let u=0;u<o.length;u+=3){const m=o[u]|0,b=o[u+1]|0,d=o[u+2]|0;m<0||b<0||d<0||m>=i||b>=i||d>=i||(r(m),r(b),r(b),r(d),r(d),r(m))}const l=new Float32Array(a);return l.length===0?Dt(e):{vertexBuffer:Ln(e,l),vertexCount:l.length/6}}const Ke=1e-6;function Us(e){if(e.length===0)return e;const t=new Float32Array(e.length*2);let n=0;for(let o=0;o+17<e.length;o+=18){const i=o,s=o+6,a=o+12;for(let r=0;r<6;r+=1)t[n++]=e[i+r];for(let r=0;r<6;r+=1)t[n++]=e[s+r];for(let r=0;r<6;r+=1)t[n++]=e[s+r];for(let r=0;r<6;r+=1)t[n++]=e[a+r];for(let r=0;r<6;r+=1)t[n++]=e[a+r];for(let r=0;r<6;r+=1)t[n++]=e[i+r]}return t}function _s(e,t){const n=Math.floor(t.length/3),o=new Int32Array(n*3);for(let i=0;i<n;i+=1){const s=i*3,a=t[s]|0;let r=t[s+1]|0,l=t[s+2]|0;const c=e[a*2],u=e[a*2+1],m=e[r*2],b=e[r*2+1],d=e[l*2],h=e[l*2+1];if((m-c)*(h-u)-(b-u)*(d-c)<0){const B=r;r=l,l=B}o[s]=a,o[s+1]=r,o[s+2]=l}return o}function Mo(e,t,n,o){const i=Math.floor(e.length/2),s=new Float32Array(i*3);for(let a=0;a<n.length;a+=3){const r=n[a],l=n[a+1],c=n[a+2];if(r<0||l<0||c<0||r>=i||l>=i||c>=i)continue;const u=e[r*2],m=e[r*2+1],b=t[r],d=e[l*2],h=e[l*2+1],x=t[l],B=e[c*2],y=e[c*2+1],C=t[c],g=d-u,P=x-b,v=h-m,T=B-u,p=C-b,E=y-m;let w,f,S;o==="up"?(w=P*E-v*p,f=v*T-g*E,S=g*p-P*T):(w=p*v-E*P,f=E*g-T*v,S=T*P-p*g),s[r*3]+=w,s[r*3+1]+=f,s[r*3+2]+=S,s[l*3]+=w,s[l*3+1]+=f,s[l*3+2]+=S,s[c*3]+=w,s[c*3+1]+=f,s[c*3+2]+=S}for(let a=0;a<i;a+=1){const r=s[a*3],l=s[a*3+1],c=s[a*3+2],u=Math.hypot(r,l,c);if(u<=Ke){s[a*3]=0,s[a*3+1]=o==="up"?1:-1,s[a*3+2]=0;continue}s[a*3]=r/u,s[a*3+1]=l/u,s[a*3+2]=c/u}return s}function ks(e,t,n,o,i,s,a){const r=Math.floor(e.length/2),l=Math.floor(t.length/3);if(r<3||n.length!==r||o.length!==r||l<1||t.length!==l*3)return new Float32Array(0);const c=_s(e,t),u=i&&i.length===r*3?i:Mo(e,n,c,"up"),m=s&&s.length===r*3?s:Mo(e,o,c,"down"),b=[],d=(I,A)=>{b.push(I[0],I[1],I[2],A[0],A[1],A[2])},h=(I,A,G)=>{const V=I[0]+(A[0]-I[0])*G,O=I[1]+(A[1]-I[1])*G,j=I[2]+(A[2]-I[2])*G,R=Math.hypot(V,O,j);return R<=Ke?[0,1,0]:[V/R,O/R,j/R]},x=Ke,B=I=>{const A=[];for(let G=0;G<I.length;G+=1){const V=I[G],O=I[(G+1)%I.length],j=V.thickness>x,R=O.thickness>x;if(j&&R){A.push(O);continue}if(j===R)continue;const _=O.thickness-V.thickness;if(Math.abs(_)<=Ke){R&&A.push(O);continue}const k=(x-V.thickness)/_,D=V.x+(O.x-V.x)*k,Y=V.z+(O.z-V.z)*k,$=V.yTop+(O.yTop-V.yTop)*k,U=V.yBottom+(O.yBottom-V.yBottom)*k,q=.5*($+U);A.push({x:D,z:Y,yTop:q,yBottom:q,thickness:0,nTop:h(V.nTop,O.nTop,k),nBottom:h(V.nBottom,O.nBottom,k)}),R&&A.push(O)}return A},y=I=>{if(!(I.length<3)){for(let A=1;A+1<I.length;A+=1){const G=I[0],V=I[A],O=I[A+1];d([G.x,G.yTop,G.z],G.nTop),d([V.x,V.yTop,V.z],V.nTop),d([O.x,O.yTop,O.z],O.nTop)}for(let A=1;A+1<I.length;A+=1){const G=I[0],V=I[A],O=I[A+1];d([G.x,G.yBottom,G.z],G.nBottom),d([O.x,O.yBottom,O.z],O.nBottom),d([V.x,V.yBottom,V.z],V.nBottom)}}},C=(I,A,G)=>{I.thickness<=x&&A.thickness<=x&&G.thickness<=x||y(B([I,A,G]))},g=1e-5,P=new Int32Array(r),v=[],T=new Map;for(let I=0;I<r;I+=1){const A=e[I*2],G=e[I*2+1],V=Math.round(A/g),O=Math.round(G/g),j=`${V},${O}`;let R=T.get(j);R===void 0&&(R=v.length,T.set(j,R),v.push(I)),P[I]=R}const p=a&&a.length>=3?a:t,E=new Map,w=(I,A)=>{const G=I<A?I:A,V=I<A?A:I;return BigInt(G)<<32n|BigInt(V)},f=(I,A,G)=>{const V=w(I,A),O=E.get(V);if(!O){E.set(V,{a:I,b:A,c:G,count:1});return}O.count+=1};for(let I=0;I+2<p.length;I+=3){const A=p[I]|0,G=p[I+1]|0,V=p[I+2]|0;if(A<0||G<0||V<0||A>=r||G>=r||V>=r)continue;const O=P[A],j=P[G],R=P[V],_=[],k=(D,Y,$)=>{if(D===Y)return;const U=w(D,Y);for(const q of _)if(q===U)return;_.push(U),f(D,Y,$)};k(O,j,R),k(j,R,O),k(R,O,j)}for(let I=0;I<c.length;I+=3){const A=c[I],G=c[I+1],V=c[I+2];if(A<0||G<0||V<0||A>=r||G>=r||V>=r)continue;const O=e[A*2],j=e[A*2+1],R=e[G*2],_=e[G*2+1],k=e[V*2],D=e[V*2+1],Y={x:O,z:j,yTop:n[A],yBottom:o[A],thickness:n[A]-o[A],nTop:[u[A*3],u[A*3+1],u[A*3+2]],nBottom:[m[A*3],m[A*3+1],m[A*3+2]]},$={x:R,z:_,yTop:n[G],yBottom:o[G],thickness:n[G]-o[G],nTop:[u[G*3],u[G*3+1],u[G*3+2]],nBottom:[m[G*3],m[G*3+1],m[G*3+2]]},U={x:k,z:D,yTop:n[V],yBottom:o[V],thickness:n[V]-o[V],nTop:[u[V*3],u[V*3+1],u[V*3+2]],nBottom:[m[V*3],m[V*3+1],m[V*3+2]]};C(Y,$,U)}const S=(I,A)=>{const G=I.thickness>x,V=A.thickness>x;if(G&&V)return[I,A];if(!G&&!V)return[];const O=A.thickness-I.thickness;if(Math.abs(O)<=Ke)return G?[I]:[];const j=(x-I.thickness)/O,R=I.x+(A.x-I.x)*j,_=I.z+(A.z-I.z)*j,k=I.yTop+(A.yTop-I.yTop)*j,D=I.yBottom+(A.yBottom-I.yBottom)*j,Y={x:R,z:_,yTop:k,yBottom:D,thickness:x};return G?[I,Y]:[Y,A]},L=(I,A,G)=>{const V=[I.x,I.yTop,I.z],O=[A.x,A.yTop,A.z],j=[I.x,I.yBottom,I.z],R=[A.x,A.yBottom,A.z],_=O[0]-V[0],k=O[1]-V[1],D=O[2]-V[2],Y=R[0]-V[0],$=R[1]-V[1],U=R[2]-V[2],q=k*U-D*$,Q=D*Y-_*U,K=_*$-k*Y;if(q*G[0]+Q*G[1]+K*G[2]>=0){d(V,G),d(O,G),d(R,G),d(V,G),d(R,G),d(j,G);return}d(V,G),d(R,G),d(O,G),d(V,G),d(j,G),d(R,G)},F=.001,z=1e-4,M=(I,A)=>{for(let G=0;G<c.length;G+=3){const V=c[G],O=c[G+1],j=c[G+2];if(V<0||O<0||j<0||V>=r||O>=r||j>=r)continue;const R=e[V*2],_=e[V*2+1],k=e[O*2],D=e[O*2+1],Y=e[j*2],$=e[j*2+1],U=k-R,q=D-_,Q=Y-R,K=$-_,ee=I-R,oe=A-_,te=U*K-q*Q;if(Math.abs(te)<=Ke)continue;const X=(ee*K-oe*Q)/te,W=(U*oe-q*ee)/te,H=1-X-W;if(H>=-Ke&&X>=-Ke&&W>=-Ke){const ae=n[V]*H+n[O]*X+n[j]*W,ie=o[V]*H+o[O]*X+o[j]*W;return ae-ie}}return null};for(const I of E.values()){if(I.count!==1)continue;const A=v[I.a],G=v[I.b],V=v[I.c];if(A===void 0||G===void 0||V===void 0)continue;const O=e[A*2],j=e[A*2+1],R=e[G*2],_=e[G*2+1],k=.5*(O+R),D=.5*(j+_),Y=R-O;let U=_-j,q=-Y;const Q=Math.hypot(U,q);if(Q<=Ke)continue;const K=[U/Q,0,q/Q],ee=M(k+K[0]*F,D+K[2]*F),oe=M(k-K[0]*F,D-K[2]*F),te=ee!==null&&ee>z,X=oe!==null&&oe>z;if(te&&X)continue;const W=te?[-K[0],0,-K[2]]:K,H={x:O,z:j,yTop:n[A],yBottom:o[A],thickness:n[A]-o[A]},ae={x:R,z:_,yTop:n[G],yBottom:o[G],thickness:n[G]-o[G]},ie=S(H,ae);ie.length===2&&L(ie[0],ie[1],W)}return new Float32Array(b)}function Tn(e,t,n,o,i,s,a,r){const l=Math.floor(t.length/2),c=Math.floor(n.length/3);if(l<3||c<1||t.length!==l*2||n.length!==c*3||o.length!==l||i.length!==l){const h=Dt(e);return{solid:h,wireframe:h,edges:h}}const u=ks(t,n,o,i,s,a,r),m=Ze(e,u),b=Ze(e,Us(u)),d=Ze(e,Nn(u,Dn),14);return{solid:m,wireframe:b,edges:d}}const Qe=1e-6;function js(e){const t=e.worldPath,n=t[0],o=t[t.length-1],i=o[0]-n[0],s=o[1]-n[1],a=Math.hypot(i,s),r=a>Qe?i/a:1,l=a>Qe?s/a:0,c=Number.isFinite(e.sScale)&&e.sScale>0?e.sScale:e.LWorld&&e.sMaxCad?e.LWorld/e.sMaxCad:1,u=-l,m=r,b=Math.hypot(u,m),d=b>Qe?[u/b,0,m/b]:[0,0,1];return{origin:[n[0],n[1]],direction:[r,l],normal:d,sScale:c}}function Ho(e,t){const n=e[0]*t.sScale,o=t.origin[0]+t.direction[0]*n,i=t.origin[1]+t.direction[1]*n;return[o,e[1],i]}function Ys(e,t,n){const o=[],i=[],s=[],a=(m,b)=>{o.push(m[0],m[1],m[2],b[0],b[1],b[2])},r=m=>{i.push(m[0],m[1],m[2],0,0,0)},l=(m,b)=>{s.push(m[0],m[1],m[2],b[0],b[1],b[2])},c=t.normal,u=[-c[0],-c[1],-c[2]];for(const m of n){const b=$s(m);if(b.length<3)continue;const d=Xs(b);if(d.length===0)continue;const h=b.map(x=>Ho(x,t));for(let x=0;x<d.length;x+=3){const B=d[x],y=d[x+1],C=d[x+2],g=h[B],P=h[y],v=h[C];a(g,c),a(P,c),a(v,c),l(g,c),l(P,c),l(v,c),a(g,u),a(v,u),a(P,u),r(g),r(P),r(P),r(v),r(v),r(g)}}return{solid:Ze(e,new Float32Array(o)),wireframe:Ze(e,new Float32Array(i)),edges:Ze(e,Nn(new Float32Array(s),Dn),14)}}function $s(e){if(e.length<3)return[];const t=[];for(const s of e){const a=t[t.length-1];(!a||Math.hypot(s[0]-a[0],s[1]-a[1])>Qe)&&t.push([s[0],s[1]])}if(t.length<3)return[];const n=t[0],o=t[t.length-1];if(Math.hypot(n[0]-o[0],n[1]-o[1])<=Qe&&t.pop(),t.length<3)return[];const i=Ws(t);return i.length<3?[]:(Hs(i)<0&&i.reverse(),i)}function Ws(e){const t=[],n=e.length;for(let o=0;o<n;o+=1){const i=e[(o-1+n)%n],s=e[o],a=e[(o+1)%n],r=Ut(i,s,a),l=s[0]-i[0],c=s[1]-i[1],u=a[0]-s[0],m=a[1]-s[1],b=l*u+c*m;Math.abs(r)<Qe&&b>0||t.push(s)}return t}function Xs(e){const t=[],n=e.length;if(n<3)return t;const o=Array.from({length:n},(a,r)=>r);let i=0;const s=n*n;for(;o.length>=3&&i<s;){i+=1;let a=!1;for(let r=0;r<o.length;r+=1){const l=o[(r-1+o.length)%o.length],c=o[r],u=o[(r+1)%o.length],m=e[l],b=e[c],d=e[u];if(!qs(m,b,d))continue;let h=!1;for(let x=0;x<o.length;x+=1){const B=o[x];if(!(B===l||B===c||B===u)&&Ks(e[B],m,b,d)){h=!0;break}}if(!h){t.push(l,c,u),o.splice(r,1),a=!0;break}}if(!a){for(let r=1;r<o.length-1;r+=1)t.push(o[0],o[r],o[r+1]);break}}return t}function Ut(e,t,n){return(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0])}function Hs(e){let t=0;for(let n=0;n<e.length;n+=1){const o=e[n],i=e[(n+1)%e.length];t+=o[0]*i[1]-i[0]*o[1]}return t*.5}function qs(e,t,n){return Ut(e,t,n)>Qe}function Ks(e,t,n,o){const i=Ut(t,n,e),s=Ut(n,o,e),a=Ut(o,t,e);return i>=-Qe&&s>=-Qe&&a>=-Qe}function Zs(e){const t=new Float32Array([-.5,0,-.5,0,1,0,.5,0,.5,0,1,0,.5,0,-.5,0,1,0,-.5,0,-.5,0,1,0,-.5,0,.5,0,1,0,.5,0,.5,0,1,0]),n=e.createBuffer({size:t.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});return e.queue.writeBuffer(n,0,t),{vertexBuffer:n,vertexCount:t.length/6}}const dn=(e,t,n)=>{let o=n;return o<0?o+=1:o>1&&(o-=1),o<1/6?e+(t-e)*6*o:o<1/2?t:o<2/3?e+(t-e)*(2/3-o)*6:e},It=(e,t)=>{const n=e[0],o=e[1],i=e[2],s=Math.max(n,o,i),a=Math.min(n,o,i);let r=0,l=0,c=(s+a)*.5;if(s!==a){const b=s-a;l=c>.5?b/(2-s-a):b/(s+a),s===n?r=(o-i)/b+(o<i?6:0):s===o?r=(i-n)/b+2:r=(n-o)/b+4,r/=6}if(c=Math.min(1,Math.max(0,c+t)),l===0)return[c,c,c];const u=c<.5?c*(1+l):c+l-c*l,m=2*c-u;return[dn(m,u,r+1/3),dn(m,u,r),dn(m,u,r-1/3)]},So=(e,t,n)=>{const o=e[0],i=e[1],s=e[2],a=Math.max(o,i,s),r=Math.min(o,i,s),l=(a+r)*.5,c=Math.min(t,n-l);return c<=0?[...e]:It(e,c)},Qs=[[[-.5,.5,-.5],[.5,.5,-.5]],[[.5,.5,-.5],[.5,.5,.5]],[[.5,.5,.5],[-.5,.5,.5]],[[-.5,.5,.5],[-.5,.5,-.5]],[[-.5,-.5,-.5],[.5,-.5,-.5]],[[.5,-.5,-.5],[.5,-.5,.5]],[[.5,-.5,.5],[-.5,-.5,.5]],[[-.5,-.5,.5],[-.5,-.5,-.5]],[[-.5,-.5,-.5],[-.5,.5,-.5]],[[.5,-.5,-.5],[.5,.5,-.5]],[[.5,-.5,.5],[.5,.5,.5]],[[-.5,-.5,.5],[-.5,.5,.5]]],Js=[[[-.5,-.5,-.5],[-.5,.5,-.5]],[[.5,-.5,-.5],[.5,.5,-.5]],[[.5,-.5,.5],[.5,.5,.5]],[[-.5,-.5,.5],[-.5,.5,.5]]],ea=[[[-.5,-.5,-.5],[.5,-.5,-.5]],[[.5,-.5,-.5],[.5,-.5,.5]],[[.5,-.5,.5],[-.5,-.5,.5]],[[-.5,-.5,.5],[-.5,-.5,-.5]]],ta=[[[-.5,.5,-.5],[.5,.5,-.5]],[[.5,.5,-.5],[.5,.5,.5]],[[.5,.5,.5],[-.5,.5,.5]],[[-.5,.5,.5],[-.5,.5,-.5]]],na=[[[-.5,-.5,0],[.5,-.5,0]],[[.5,-.5,0],[.5,.5,0]],[[.5,.5,0],[-.5,.5,0]],[[-.5,.5,0],[-.5,-.5,0]]],jt=[.7,.7,.7],oa=[.6591376,.88,.213961],Yt=[.94902,.478431,.945098],$t={landfill:1,silt:2,clay:3},gt=.25,Ct=[.9,.9,.9];function ia(e,t,n){var B;const o=new Map,i=[],s=ke(),a=Gt(),r={min:[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY],max:[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY]},l=new Map(n.soils.map(y=>[y.id,y])),c=n.objects.find(y=>y.type==="terrain")??null;let u=!1;if(n.solidsModel){const y=n.solidsModel,{extent:C}=y,g=y.surfaces.terrain;if(g&&Array.isArray(g)){const P=y.mesh,v=Math.floor(P.verticesXZ.length/2);if(v>2&&g.length===v){const T=Os(e,P.verticesXZ,g,P.triangles),p=Rs(e,P.verticesXZ,g,P.triangles);if(T.vertexCount>0){const E=(c==null?void 0:c.color)??oa,w=(c==null?void 0:c.gridScale)??1,f=[C.xMin,le.Terrain,w,0],S=t.createRenderObject((c==null?void 0:c.id)??"terrain",T,s,[E[0],E[1],E[2],1],f,{objectType:"terrain"});if(S.pickData=[C.xMax,C.zMin,C.zMax],i.push(S),p.vertexCount>0){const L=t.createRenderObject(`${(c==null?void 0:c.id)??"terrain"}_wireframe`,p,s,[E[0],E[1],E[2],1],[0,le.Wireframe,0,0],{objectType:"terrainWireframe"});i.push(L)}u=!0}}}}for(const y of n.objects){if(y.type!=="terrain"&&y.type!=="marker"||y.type==="terrain"&&u)continue;const C=sa(e,y,o),g=aa(y),P=y.soilId?l.get(y.soilId):void 0,v=y.color??(P==null?void 0:P.color)??jt,T=y.type==="terrain"?le.Terrain:y.type==="marker"?le.Wireframe:le.Standard,p=y.patternId??(P==null?void 0:P.patternId)??(y.soilId?$t[y.soilId]:0)??0,E=T===le.Standard?p:0,w=y.gridScale??1,f=y.type==="terrain"?ra(y):null,S=[f?f.xMin:E,T,w,0],L=t.createRenderObject(y.id,C,g,[v[0],v[1],v[2],1],S,{objectType:y.type,soilId:y.soilId});f&&(L.pickData=[f.xMax,f.zMin,f.zMax]),i.push(L),la(r,y)}if(n.solidsModel){const y=n.solidsModel,{extent:C,surfaces:g,solids:P}=y,{verticesXZ:v,triangles:T}=y.mesh,p=Math.floor(v.length/2);let E=0;if(p>2)for(const S of P){const L=g[S.top],F=g[S.bottom];if(!L||!F||L.length!==p||F.length!==p){E+=1;continue}const{solid:z,wireframe:M,edges:I}=Tn(e,v,T,L,F);if(z.vertexCount===0){E+=1;continue}const A=l.get(S.soilId),G=(A==null?void 0:A.color)??jt,O=[(A==null?void 0:A.patternId)??$t[S.soilId]??0,le.Standard,0,0],j=t.createRenderObject(`solid_${S.id}`,z,s,[G[0],G[1],G[2],1],O,{objectType:"solid",soilId:S.soilId,layerIndex:E});if(i.push(j),M.vertexCount>0){const R=[0,le.Wireframe,0,0],_=t.createRenderObject(`solid_${S.id}_wireframe`,M,s,[G[0],G[1],G[2],1],R,{objectType:"solidWireframe",soilId:S.soilId,layerIndex:E});i.push(_)}if(I.vertexCount>0){const R=It(G,gt),_=[0,le.Wireframe,0,0],k=t.createRenderObject(`solid_${S.id}_edge`,I,s,[R[0],R[1],R[2],1],_,{objectType:"solidEdge",soilId:S.soilId,layerIndex:E});i.push(k)}E+=1}const w=g.terrain,f=w&&Array.isArray(w)&&w.length>0?ga(w,C.yBase):C.yBase;r.min[0]=Math.min(r.min[0],C.xMin),r.max[0]=Math.max(r.max[0],C.xMax),r.min[2]=Math.min(r.min[2],C.zMin),r.max[2]=Math.max(r.max[2],C.zMax),r.min[1]=Math.min(r.min[1],C.yBase),r.max[1]=Math.max(r.max[1],f)}const m=new Map;let b=1;const d=(y,C)=>{const g=C?`${y}|${C}`:`${y}|__fence`,P=m.get(g);if(P!==void 0)return P;const v=b;return b+=1,m.set(g,v),v},h=[];if(n.sections&&n.sections.length>0){const y=r.min[1],C=r.max[1];for(const g of n.sections){if(g.vector){const v=js(g.vector);let T=!1;for(const[p,E]of Object.entries(g.vector.patches)){if(!E.rings||E.rings.length===0)continue;const w=Ys(e,v,E.rings);if(w.solid.vertexCount===0)continue;const f=l.get(p),S=(f==null?void 0:f.color)??jt,L=(f==null?void 0:f.patternId)??$t[p]??0,F=d(g.id,p),z=[L,le.Standard,F,0],M=t.createRenderObject(`section_${g.id}_${p}`,w.solid,s,[S[0],S[1],S[2],1],z,{objectType:"section",sectionId:g.id,soilId:p});if(i.push(M),w.wireframe.vertexCount>0){const I=[0,le.Wireframe,0,0],A=t.createRenderObject(`section_${g.id}_${p}_wireframe`,w.wireframe,s,[S[0],S[1],S[2],1],I,{objectType:"sectionWireframe",sectionId:g.id,soilId:p});i.push(A)}if(w.edges.vertexCount>0){const I=It(S,gt),A=[0,le.Wireframe,0,0],G=t.createRenderObject(`section_${g.id}_${p}_edge`,w.edges,s,[I[0],I[1],I[2],1],A,{objectType:"sectionEdge",sectionId:g.id,soilId:p});i.push(G)}T=!0}if(T)ca(r,v,g.vector);else{const p=Po(e,g.path,y,C),E=[.788,.392,.788],w=d(g.id),f=[0,le.Wireframe,w,0],S=t.createRenderObject(`section_${g.id}`,p.solid,s,[E[0],E[1],E[2],1],f,{objectType:"section",sectionId:g.id});if(i.push(S),p.wireframe.vertexCount>0){const L=t.createRenderObject(`section_${g.id}_wireframe`,p.wireframe,s,[E[0],E[1],E[2],1],f,{objectType:"sectionWireframe",sectionId:g.id});i.push(L)}if(p.edges.vertexCount>0){const L=It(E,gt),F=t.createRenderObject(`section_${g.id}_edge`,p.edges,s,[L[0],L[1],L[2],1],f,{objectType:"sectionEdge",sectionId:g.id});i.push(F)}wo(r,g,y,C)}}else{const v=Po(e,g.path,y,C),T=[.788,.392,.788],p=d(g.id),E=[0,le.Wireframe,p,0],w=t.createRenderObject(`section_${g.id}`,v.solid,s,[T[0],T[1],T[2],1],E,{objectType:"section",sectionId:g.id});if(i.push(w),v.wireframe.vertexCount>0){const f=t.createRenderObject(`section_${g.id}_wireframe`,v.wireframe,s,[T[0],T[1],T[2],1],E,{objectType:"sectionWireframe",sectionId:g.id});i.push(f)}if(v.edges.vertexCount>0){const f=It(T,gt),S=t.createRenderObject(`section_${g.id}_edge`,v.edges,s,[f[0],f[1],f[2],1],E,{objectType:"sectionEdge",sectionId:g.id});i.push(S)}wo(r,g,y,C)}const P=ua(g,y,C);P&&h.push(P)}}const x=fa(h);if(x.length>0){const y=wt(e,x);if(y.vertexCount>0){const C=[0,le.Wireframe,0,0],g=t.createRenderObject("section_intersections",y,s,[Ct[0],Ct[1],Ct[2],1],C,{objectType:"sectionIntersection"});i.push(g)}}if((B=n.solidsModel)!=null&&B.sectionCurves){const y=Bn(e,o,"box"),C=wt(e,Js),g=wt(e,ea),P=wt(e,ta),v=So(Yt,gt,.86),T=[0,le.Wireframe,0,0];for(const p of n.solidsModel.sectionCurves){if(!p.points||p.points.length<2)continue;const E=0,w=p.points.length-1;for(let f=0;f<p.points.length;f+=1){const S=t.createRenderObject(`sectionTop_${p.id}_seg_${f}`,y,s,[Yt[0],Yt[1],Yt[2],1],T,{objectType:"sectionTopProfile",sectionId:p.id,layerIndex:f});if(i.push(S),C.vertexCount>0){const L=t.createRenderObject(`sectionTop_${p.id}_seg_${f}_edge`,C,s,[v[0],v[1],v[2],1],T,{objectType:"sectionTopProfileEdge",sectionId:p.id,layerIndex:f});i.push(L)}}if(g.vertexCount>0){const f=t.createRenderObject(`sectionTop_${p.id}_cap_start_edge`,g,s,[v[0],v[1],v[2],1],T,{objectType:"sectionTopProfileEdge",sectionId:p.id,layerIndex:E});i.push(f)}if(P.vertexCount>0){const f=t.createRenderObject(`sectionTop_${p.id}_cap_end_edge`,P,s,[v[0],v[1],v[2],1],T,{objectType:"sectionTopProfileEdge",sectionId:p.id,layerIndex:w});i.push(f)}}}if(n.profiles&&n.profiles.length>0){const y=Bn(e,o,"box"),C=.35,g=.08,P=[.43,.91,1],v=So(P,gt,.86),T=wt(e,Qs),p=n.sections&&n.sections.length>0?wt(e,na):null;for(const E of n.profiles){const{x:w,z:f,groundY:S}=Pt(E),L=Math.max(E.depth,.01),F=ke();Et(F,a,Ne(w,S,f),Ne(C,C,C));const z=t.createRenderObject(`profile_${E.id}_marker`,y,F,[P[0],P[1],P[2],1],[0,le.Wireframe,0,0],{objectType:"profileMarker",profileId:E.id}),M=t.createRenderObject(`profile_${E.id}_marker_edge`,T,F,[v[0],v[1],v[2],1],[0,le.Wireframe,0,0],{objectType:"profileMarkerEdge",profileId:E.id}),I=[...E.layers].sort((A,G)=>A.depthFrom-G.depthFrom);for(let A=0;A<I.length;A+=1){const G=I[A],V=Math.max(0,G.depthFrom),O=Math.min(L,Math.max(V,G.depthTo)),j=O-V;if(j<=1e-6)continue;const R=S-(V+O)*.5,_=ke();Et(_,a,Ne(w,R,f),Ne(g*2,j,g*2));const k=l.get(G.soilId),D=(k==null?void 0:k.color)??jt,Y=It(D,gt),U=[(k==null?void 0:k.patternId)??$t[G.soilId]??0,le.Standard,0,0],q=t.createRenderObject(`profile_${E.id}_layer_${A}`,y,_,[D[0],D[1],D[2],1],U,{objectType:"profileLayer",profileId:E.id,layerIndex:A,soilId:G.soilId}),Q=[0,le.Wireframe,0,0],K=t.createRenderObject(`profile_${E.id}_layer_${A}_edge`,T,_,[Y[0],Y[1],Y[2],1],Q,{objectType:"profileLayerEdge",profileId:E.id,layerIndex:A,soilId:G.soilId});i.push(q,K)}i.push(z,M),pa(r,E,C,g)}if(p&&n.sections&&n.sections.length>0&&n.profiles&&n.profiles.length>0){const E=[0,le.Wireframe,0,0];for(const w of n.sections)for(const f of n.profiles){const S=t.createRenderObject(`profile_${f.id}_section_${w.id}_intersection`,p,s,[Ct[0],Ct[1],Ct[2],1],E,{objectType:"profileSectionIntersection",profileId:f.id,sectionId:w.id});i.push(S)}}}return{objects:i,bounds:r,data:n}}function sa(e,t,n){const o=t.mesh.primitive;return Bn(e,n,o)}function Bn(e,t,n){const o=t.get(n);if(o)return o;let i;return n==="plane"?i=Zs(e):i=Ds(e),t.set(n,i),i}function aa(e){const t=e.position??[0,0,0],n=e.rotation??[0,0,0],o=e.scale??[1,1,1],i=e.mesh.size??[1,1,1],s=[o[0]*i[0],o[1]*i[1],o[2]*i[2]],a=Gt();Ci(a,n[0],n[1],n[2]);const r=ke();return Et(r,a,Ne(t[0],t[1],t[2]),Ne(s[0],s[1],s[2])),r}function ra(e){const t=e.position??[0,0,0],n=e.mesh.size??[1,1,1],o=e.scale??[1,1,1],i=n[0]*o[0]*.5,s=n[2]*o[2]*.5;return{xMin:t[0]-i,xMax:t[0]+i,zMin:t[2]-s,zMax:t[2]+s}}function la(e,t){const n=t.position??[0,0,0],o=t.mesh.size??[1,1,1],i=t.scale??[1,1,1],s=[o[0]*i[0]*.5,o[1]*i[1]*.5,o[2]*i[2]*.5],a=[n[0]-s[0],n[1]-s[1],n[2]-s[2]],r=[n[0]+s[0],n[1]+s[1],n[2]+s[2]];e.min[0]=Math.min(e.min[0],a[0]),e.min[1]=Math.min(e.min[1],a[1]),e.min[2]=Math.min(e.min[2],a[2]),e.max[0]=Math.max(e.max[0],r[0]),e.max[1]=Math.max(e.max[1],r[1]),e.max[2]=Math.max(e.max[2],r[2])}function wo(e,t,n,o){for(const[i,s]of t.path)e.min[0]=Math.min(e.min[0],i),e.min[2]=Math.min(e.min[2],s),e.max[0]=Math.max(e.max[0],i),e.max[2]=Math.max(e.max[2],s);e.min[1]=Math.min(e.min[1],n),e.max[1]=Math.max(e.max[1],o)}function ca(e,t,n){for(const o of Object.values(n.patches))for(const i of o.rings)for(const s of i){const a=Ho([s[0],s[1]],t);e.min[0]=Math.min(e.min[0],a[0]),e.min[1]=Math.min(e.min[1],a[1]),e.min[2]=Math.min(e.min[2],a[2]),e.max[0]=Math.max(e.max[0],a[0]),e.max[1]=Math.max(e.max[1],a[1]),e.max[2]=Math.max(e.max[2],a[2])}}function ua(e,t,n){var h;const o=((h=e.vector)==null?void 0:h.worldPath)??e.path;if(o.length<2)return null;const[i,s]=o[0],[a,r]=o[o.length-1],l=a-i,c=r-s,u=Math.hypot(l,c);if(u<1e-6)return null;const m=e.vector?da(e.vector):null,b=(m==null?void 0:m.minY)??t,d=(m==null?void 0:m.maxY)??n;return{id:e.id,origin:[i,s],direction:[l/u,c/u],length:u,minY:b,maxY:d}}function da(e){let t=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY,o=!1;for(const i of Object.values(e.patches))for(const s of i.rings)for(const a of s){const r=a[1];Number.isFinite(r)&&(o=!0,t=Math.min(t,r),n=Math.max(n,r))}return o?{minY:t,maxY:n}:null}function fa(e){const t=[];for(let n=0;n<e.length;n+=1){const o=e[n];for(let i=n+1;i<e.length;i+=1){const s=e[i],a=ha(o,s);if(!a)continue;const r=Math.max(o.minY,s.minY),l=Math.min(o.maxY,s.maxY);l<=r+1e-6||t.push([[a.x,r,a.z],[a.x,l,a.z]])}}return t}function ha(e,t){const n=ma(e.direction,t.direction);if(Math.abs(n)<1e-6)return null;const o=t.origin[0]-e.origin[0],i=t.origin[1]-e.origin[1],s=(o*t.direction[1]-i*t.direction[0])/n,a=(o*e.direction[1]-i*e.direction[0])/n,r=1e-4;return s<-r||s>e.length+r||a<-r||a>t.length+r?null:{x:e.origin[0]+e.direction[0]*s,z:e.origin[1]+e.direction[1]*s}}function ma(e,t){return e[0]*t[1]-e[1]*t[0]}function pa(e,t,n,o){const{x:i,z:s,groundY:a}=Pt(t),r=Math.max(t.depth,.01),l=n*.5,u=Math.max(l,o);e.min[0]=Math.min(e.min[0],i-u),e.max[0]=Math.max(e.max[0],i+u),e.min[2]=Math.min(e.min[2],s-u),e.max[2]=Math.max(e.max[2],s+u),e.max[1]=Math.max(e.max[1],a+l),e.min[1]=Math.min(e.min[1],a-r)}function ga(e,t){let n=Number.NEGATIVE_INFINITY;for(const o of e)Number.isFinite(o)&&(n=Math.max(n,o));return Number.isFinite(n)?n:t}const Co="webgpu-failure-banner",To=e=>{if(e instanceof Error){const t=e.message||e.name;return t?`${e.name}: ${t}`:e.name}try{return typeof e=="string"?e:JSON.stringify(e)}catch{return String(e)}};function ba(e){console.error("[webgpu] failure",e.operation,e.error);const t=document.getElementById(Co);if(t){const l=t.querySelector(".webgpu-banner__details");if(l){const c=["WebGPU call failed.",`Operation: ${e.operation}`,e.hint?`Hint: ${e.hint}`:null,`Error: ${To(e.error)}`].filter(Boolean);l.textContent=c.join(`
`)}t.classList.add("visible");return}const n=document.createElement("div");n.id=Co,n.className="webgpu-banner visible",n.setAttribute("role","alert");const o=document.createElement("div");o.className="webgpu-banner__body";const i=document.createElement("div");i.className="webgpu-banner__title",i.textContent="WebGPU call failed";const s=document.createElement("pre");s.className="webgpu-banner__details";const a=["WebGPU call failed.",`Operation: ${e.operation}`,e.hint?`Hint: ${e.hint}`:null,`Error: ${To(e.error)}`,"This device/browser may not fully support WebGPU."].filter(Boolean);s.textContent=a.join(`
`),o.append(i,s);const r=document.createElement("button");r.className="webgpu-banner__close",r.type="button",r.textContent="Dismiss",r.addEventListener("click",()=>{n.classList.remove("visible")}),n.append(o,r),document.body.appendChild(n)}const xa=`struct VertexIn {
  @location(0) position: vec2f,
  @location(1) color: vec4f,
  // Segment endpoints in device pixels (same coordinate system as fragment @builtin(position)).
  @location(2) segA0: vec2f,
  @location(3) segB0: vec2f,
  @location(4) segA1: vec2f,
  @location(5) segB1: vec2f,
  @location(6) halfWidthPx: f32,
};

struct VertexOut {
  @builtin(position) position: vec4f,
  @location(0) color: vec4f,
  @location(1) @interpolate(flat) segA0: vec2f,
  @location(2) @interpolate(flat) segB0: vec2f,
  @location(3) @interpolate(flat) segA1: vec2f,
  @location(4) @interpolate(flat) segB1: vec2f,
  @location(5) @interpolate(flat) halfWidthPx: f32,
};

@vertex
fn vsMain(input: VertexIn) -> VertexOut {
  var out: VertexOut;
  out.position = vec4f(input.position, 0.0, 1.0);
  out.color = input.color;
  out.segA0 = input.segA0;
  out.segB0 = input.segB0;
  out.segA1 = input.segA1;
  out.segB1 = input.segB1;
  out.halfWidthPx = input.halfWidthPx;
  return out;
}

fn sdSegment(p: vec2f, a: vec2f, b: vec2f) -> f32 {
  // Distance to a line segment (used as a capsule SDF for crisp, derivative-based AA).
  let pa = p - a;
  let ba = b - a;
  let denom = dot(ba, ba);
  if (denom < 1e-6) {
    return length(pa);
  }
  let h = clamp(dot(pa, ba) / denom, 0.0, 1.0);
  return length(pa - ba * h);
}

@fragment
fn fsMain(input: VertexOut) -> @location(0) vec4f {
  let p = input.position.xy;
  let dist0 = sdSegment(p, input.segA0, input.segB0);
  let dist1 = sdSegment(p, input.segA1, input.segB1);
  let dist = min(dist0, dist1) - input.halfWidthPx;
  let aa = max(0.5, fwidth(dist));
  let coverage = 1.0 - smoothstep(-aa, aa, dist);
  let outA = input.color.a * coverage;
  if (outA < 0.001) {
    discard;
  }
  return vec4f(input.color.rgb * coverage, outA);
}
`,Wt=15,nt=4;function ya(e,t){let n=Math.max(e,256);for(;n<t;)n=Math.floor(n*1.5);return n}class va{constructor(t,n,o){N(this,"pipeline");N(this,"vertexBuffer");N(this,"vertexCapacityFloats",0);N(this,"vertexCount",0);N(this,"disposed",!1);this.device=t;const i=t.createShaderModule({label:"Screen line shader",code:xa});this.pipeline=t.createRenderPipeline({label:"Screen line pipeline",layout:"auto",vertex:{module:i,entryPoint:"vsMain",buffers:[{arrayStride:Wt*nt,attributes:[{shaderLocation:0,offset:0,format:"float32x2"},{shaderLocation:1,offset:2*nt,format:"float32x4"},{shaderLocation:2,offset:6*nt,format:"float32x2"},{shaderLocation:3,offset:8*nt,format:"float32x2"},{shaderLocation:4,offset:10*nt,format:"float32x2"},{shaderLocation:5,offset:12*nt,format:"float32x2"},{shaderLocation:6,offset:14*nt,format:"float32"}]}]},fragment:{module:i,entryPoint:"fsMain",targets:[{format:n,blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-list"},depthStencil:{depthWriteEnabled:!1,depthCompare:"always",format:o}}),this.vertexBuffer=t.createBuffer({label:"Screen line vertex buffer (empty)",size:Wt*nt,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.vertexCapacityFloats=Wt}dispose(){this.disposed||(this.disposed=!0,this.vertexCount=0,this.vertexBuffer.destroy())}update(t){if(this.disposed)return;const n=t.length;if(this.vertexCount=n>0?Math.floor(n/Wt):0,this.vertexCount!==0){if(n>this.vertexCapacityFloats){const o=ya(this.vertexCapacityFloats,n);this.vertexBuffer.destroy(),this.vertexBuffer=this.device.createBuffer({label:"Screen line vertex buffer",size:o*nt,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.vertexCapacityFloats=o}this.device.queue.writeBuffer(this.vertexBuffer,0,t.buffer,t.byteOffset,t.byteLength)}}render(t){this.disposed||this.vertexCount!==0&&(t.setPipeline(this.pipeline),t.setVertexBuffer(0,this.vertexBuffer),t.draw(this.vertexCount,1,0,0))}}const Pa=1e-6;function We(e,t,n){return Math.max(t,Math.min(n,e))}function Ma(e,t){return!Number.isFinite(t)||t<=0?e:{minX:e.minX-t,minY:e.minY-t,maxX:e.maxX+t,maxY:e.maxY+t}}function Sa(e,t){return{minX:We(e.minX,0,t.width),minY:We(e.minY,0,t.height),maxX:We(e.maxX,0,t.width),maxY:We(e.maxY,0,t.height)}}function wa(e,t,n,o,i){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(o)||!Number.isFinite(i.minX)||!Number.isFinite(i.minY)||i.minX>i.maxX||i.minY>i.maxY)return!1;const s=(x,B)=>x>=i.minX&&x<=i.maxX&&B>=i.minY&&B<=i.maxY;if(s(e,t)||s(n,o))return!0;const a=Math.min(e,n),r=Math.max(e,n),l=Math.min(t,o),c=Math.max(t,o);if(r<i.minX||a>i.maxX||c<i.minY||l>i.maxY)return!1;let u=0,m=1;const b=n-e,d=o-t,h=(x,B)=>{if(Math.abs(x)<=Pa)return B>=0;const y=B/x;if(x<0){if(y>m)return!1;u=Math.max(u,y)}else{if(y<u)return!1;m=Math.min(m,y)}return u<=m};return h(-b,e-i.minX)&&h(b,i.maxX-e)&&h(-d,t-i.minY)&&h(d,i.maxY-t)}function Xt(e,t,n,o,i){const s=e,a=s[0]*t+s[4]*n+s[8]*o+s[12],r=s[1]*t+s[5]*n+s[9]*o+s[13],l=s[2]*t+s[6]*n+s[10]*o+s[14],c=s[3]*t+s[7]*n+s[11]*o+s[15];if(!Number.isFinite(c)||c<=0)return{x:0,y:0,depth:0,valid:!1};const u=a/c,m=r/c,b=l/c;if(!Number.isFinite(u)||!Number.isFinite(m))return{x:0,y:0,depth:0,valid:!1};const d=(u*.5+.5)*i.width,h=(1-(m*.5+.5))*i.height;return{x:d,y:h,depth:Number.isFinite(b)?b:0,valid:!0}}const Ca=1e-6;function Ta(e,t,n,o){if(n>o)return;let i=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;for(let l=n;l<=o;l+=1)Number.isFinite(e[l])?(i=e[l],s=t[l]):Number.isFinite(i)&&(e[l]=i,t[l]=s);let a=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;for(let l=o;l>=n;l-=1)Number.isFinite(e[l])?(a=e[l],r=t[l]):Number.isFinite(a)&&(e[l]=a,t[l]=r)}function Ba(e,t,n,o,i,s,a,r,l,c){if(a>r)return!1;const u=Math.max(1,l.height),m=i.length,b=Math.min(t,o),d=Math.max(t,o),h=P=>{const v=We(P,0,u),T=Math.floor(v/u*m);return Math.max(0,Math.min(m-1,T))};let x=h(b),B=h(d);if(x=Math.max(a,Math.min(r,x)),B=Math.max(a,Math.min(r,B)),x>B){const P=x;x=B,B=P}const y=n-e,C=o-t,g=u/m;if(Math.abs(C)<=Ca){const P=h(t),v=i[P],T=s[P];if(!Number.isFinite(v)||!Number.isFinite(T))return!1;const p=Math.min(e,n);return Math.max(e,n)>=v-c&&p<=T+c}for(let P=x;P<=B;P+=1){const v=(P+.5)*g,p=(We(v,b,d)-t)/C;if(p<0||p>1)continue;const E=e+y*p,w=i[P],f=s[P];if(!(!Number.isFinite(w)||!Number.isFinite(f))&&E>=w-c&&E<=f+c)return!0}return!1}const Ia=1e-6;function Bo(e,t,n,o,i,s,a,r){const l=r.halfWidthPx*a.dpr,u=(l+r.aaPadDevicePx)/Math.max(1e-6,a.dpr),m=o-t,b=i-n,d=Math.hypot(m,b);if(!Number.isFinite(d)||d<=Ia)return;const h=m/d,x=b/d,B=-x,y=h,C=t-h*u,g=n-x*u,P=o+h*u,v=i+x*u,T=B*u,p=y*u,E=C+T,w=g+p,f=C-T,S=g-p,L=P+T,F=v+p,z=P-T,M=v-p,I=Y=>Y/a.width*2-1,A=Y=>1-Y/a.height*2,[G,V,O,j]=s,R=t*a.dpr,_=n*a.dpr,k=o*a.dpr,D=i*a.dpr;e.push(I(E),A(w),G,V,O,j,R,_,k,D,R,_,k,D,l),e.push(I(f),A(S),G,V,O,j,R,_,k,D,R,_,k,D,l),e.push(I(L),A(F),G,V,O,j,R,_,k,D,R,_,k,D,l),e.push(I(L),A(F),G,V,O,j,R,_,k,D,R,_,k,D,l),e.push(I(f),A(S),G,V,O,j,R,_,k,D,R,_,k,D,l),e.push(I(z),A(M),G,V,O,j,R,_,k,D,R,_,k,D,l)}function Ea(e,t,n,o,i,s,a,r,l,c){const u=c.halfWidthPx*l.dpr,b=(u+c.aaPadDevicePx)/Math.max(1e-6,l.dpr);if(!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(o)||!Number.isFinite(i)||!Number.isFinite(s)||!Number.isFinite(a))return;const d=Math.min(t,o,s)-b,h=Math.max(t,o,s)+b,x=Math.min(n,i,a)-b,B=Math.max(n,i,a)+b,y=k=>k/l.width*2-1,C=k=>1-k/l.height*2,[g,P,v,T]=r,p=l.dpr,E=t*p,w=n*p,f=o*p,S=i*p,L=o*p,F=i*p,z=s*p,M=a*p,I=d,A=x,G=d,V=B,O=h,j=B,R=h,_=x;e.push(y(I),C(A),g,P,v,T,E,w,f,S,L,F,z,M,u),e.push(y(G),C(V),g,P,v,T,E,w,f,S,L,F,z,M,u),e.push(y(O),C(j),g,P,v,T,E,w,f,S,L,F,z,M,u),e.push(y(I),C(A),g,P,v,T,E,w,f,S,L,F,z,M,u),e.push(y(O),C(j),g,P,v,T,E,w,f,S,L,F,z,M,u),e.push(y(R),C(_),g,P,v,T,E,w,f,S,L,F,z,M,u)}const ut=1e-6,Aa=.01,Io=24,Eo=12,In=10,qo=12,Ko=12,Ga=8,Da=8,Ao=16,Go=12,Do=4,fn=.015,Lo=10,No=6,La=3,Na=1.875,Va=2,Zt=Va*.5,za=1,Fa=.9,hn={halfWidthPx:Zt,aaPadDevicePx:za},mn=1,pn=.5,Vo=.5,Oa=.5,Ot=128;function Ra(e,t,n,o){return[e*o,t*o,n*o,o]}function Ua(e){const t=e.getBoundsPx(),n=e.getBackgroundPaddingPx(),o=e.getPixelScale(),i=(t.minX-n)*o,s=(t.minY-n)*o,a=(t.maxX+n)*o,r=(t.maxY+n)*o;return{width:a-i,height:r-s,bgMinX:i,bgMinY:s}}function _a(e){return .2126*e[0]+.7152*e[1]+.0722*e[2]>.6?[0,0,0,1]:[1,1,1,1]}function gn(e,t){e.sort((s,a)=>s.y0-a.y0||s.entry.order-a.entry.order);const n=qo,o=Math.max(n,t.height-Ko);for(const s of e)s.top=We(s.top,n,Math.max(n,o-s.height));for(let s=1;s<e.length;s+=1){const a=e[s-1],r=e[s];r.top=Math.max(r.top,a.top+a.height+In)}const i=e[e.length-1];if(i&&i.top+i.height>o){i.top=Math.max(n,o-i.height);for(let s=e.length-2;s>=0;s-=1){const a=e[s+1],r=e[s];r.top=Math.min(r.top,a.top-r.height-In),r.top=We(r.top,n,Math.max(n,o-r.height))}}}class ka{constructor(t,n,o,i,s,a,r,l){N(this,"entries",[]);N(this,"ortho",ke());N(this,"identity",ke());N(this,"tmpMatrix",ke());N(this,"lineRenderer");N(this,"unifiedSide",null);N(this,"silhouetteMinXByBin",new Float32Array(Ot));N(this,"silhouetteMaxXByBin",new Float32Array(Ot));this.textRenderer=t,this.font=n,this.model=o,this.geometryBySoilId=a,this.lineRenderer=new va(this.textRenderer.device,r,l);const c=new Map;for(const d of i){if(d.objectType!=="solid"&&d.objectType!=="solidWireframe"&&d.objectType!=="solidEdge"||!d.soilId)continue;const h=c.get(d.soilId)??[];h.push(d),c.set(d.soilId,h)}const{verticesXZ:u}=o.mesh,m=Math.floor(u.length/2);let b=0;for(const d of o.solids){const h=c.get(d.soilId);if(!h||h.length===0){b+=1;continue}const x=o.surfaces[d.top],B=o.surfaces[d.bottom];if(!x||!B||x.length!==m||B.length!==m){b+=1;continue}const y=s.get(d.soilId),C=(y==null?void 0:y.color)??[0,0,0],g=_a(C),P=this.textRenderer.formatText(this.font,d.name,{centered:!1,pixelScale:.32,color:g,outlinePx:6,outlineColor:[0,0,0,.85],backgroundColor:[C[0],C[1],C[2],.85],backgroundPaddingPx:12,backgroundRadiusPx:10}),v=Ua(P);this.entries.push({solid:d,objects:h,text:P,textBox:v,leaderRgb:[C[0],C[1],C[2]],side:"left",order:b}),b+=1}}dispose(){for(const t of this.entries)t.text.dispose();this.entries.length=0,this.lineRenderer.dispose()}render(t,n,o,i){var k;if(this.entries.length===0)return;const s=n.getViewProjMatrix(),a=ut,r=Math.max(a,((k=this.model.solidOutlines)==null?void 0:k.threshold)??Aa);let l=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,u=Number.POSITIVE_INFINITY,m=Number.NEGATIVE_INFINITY;const b=this.silhouetteMinXByBin,d=this.silhouetteMaxXByBin;b.fill(Number.POSITIVE_INFINITY),d.fill(Number.NEGATIVE_INFINITY);let h=Ot,x=-1;const B=1/Math.max(1,o.height),y=D=>{const Y=We(D,0,o.height),$=Math.floor(Y*B*Ot);return Math.max(0,Math.min(Ot-1,$))},C=D=>{const Y=y(D.y),$=We(D.x,0,o.width);b[Y]=Math.min(b[Y],$),d[Y]=Math.max(d[Y],$),h=Math.min(h,Y),x=Math.max(x,Y)},g=[];for(const D of this.entries){if(!D.objects.some(ye=>ye.visible&&(ye.objectType==="solid"||ye.objectType==="solidWireframe")&&ye.mesh.vertexCount>0))continue;const $=this.geometryBySoilId.get(D.solid.soilId),U=($==null?void 0:$.verticesXZ)??this.model.mesh.verticesXZ,q=($==null?void 0:$.top)??this.model.surfaces[D.solid.top],Q=($==null?void 0:$.bottom)??this.model.surfaces[D.solid.bottom];if(!q||!Q)continue;const K=Math.floor(U.length/2);if(K<3||q.length!==K||Q.length!==K)continue;const ee=D.objects[0],oe=ee.modelMatrix[12],te=ee.modelMatrix[13],X=ee.modelMatrix[14];let W=Number.POSITIVE_INFINITY,H=0,ae=0,ie=Number.NEGATIVE_INFINITY,se=0,ce=0,pe=Number.POSITIVE_INFINITY,be=0,re=0,xe=Number.NEGATIVE_INFINITY,ne=0,ve=0;for(let ye=0;ye<K;ye+=1){const Te=q[ye],Ee=Q[ye];if(!Number.isFinite(Te)||!Number.isFinite(Ee))continue;const Be=Te-Ee;if(!Number.isFinite(Be)||Be<=a)continue;const je=U[ye*2],Ue=U[ye*2+1],De=je+oe,Le=Ue+X,Pe=Xt(s,De,Te+te,Le,o);Pe.valid&&(l=Math.min(l,Pe.x),c=Math.max(c,Pe.x),u=Math.min(u,Pe.y),m=Math.max(m,Pe.y),C(Pe));const we=Xt(s,De,Ee+te,Le,o);we.valid&&(l=Math.min(l,we.x),c=Math.max(c,we.x),u=Math.min(u,we.y),m=Math.max(m,we.y),C(we));const Ye=.5*(Te+Ee),ue=Xt(s,De,Ye+te,Le,o);ue.valid&&(ue.x<pe&&(pe=ue.x,be=ue.y,re=ue.depth),ue.x>xe&&(xe=ue.x,ne=ue.y,ve=ue.depth),!(Be<=r)&&(ue.x<W&&(W=ue.x,H=ue.y,ae=ue.depth),ue.x>ie&&(ie=ue.x,se=ue.y,ce=ue.depth)))}(!Number.isFinite(W)||!Number.isFinite(ie))&&(W=pe,H=be,ae=re,ie=xe,se=ne,ce=ve),!(!Number.isFinite(W)||!Number.isFinite(ie))&&g.push({entry:D,verticesXZ:U,top:q,bottom:Q,vertexCount2d:K,offsetX:oe,offsetY:te,offsetZ:X,minMidX:W,minMidY:H,minMidDepth:ae,maxMidX:ie,maxMidY:se,maxMidDepth:ce})}if(!Number.isFinite(l)||!Number.isFinite(u)||g.length===0)return;x>=0&&h<=x&&Ta(b,d,h,x);const P=Sa({minX:l,minY:u,maxX:c,maxY:m},o),v=We(l-Eo,0,o.width),T=We(c+Eo,0,o.width),p=v-Io,E=T+Io,w=(i==null?void 0:i.uiRightLimitPx)??o.width-Da,f=[],S=[],L=(D,Y)=>{const $=Y==="left"?D.minMidX:D.maxMidX,U=Y==="left"?$+Do:$-Do,q=Y==="left"?D.minMidY:D.maxMidY,Q=Y==="left"?D.minMidDepth:D.maxMidDepth;if(!Number.isFinite($)||!Number.isFinite(q))return{x:0,y:0,depth:0,valid:!1};let K=0,ee=0,oe=0,te=0;const X=W=>{for(let H=0;H<D.vertexCount2d;H+=1){const ae=D.top[H],ie=D.bottom[H];if(!Number.isFinite(ae)||!Number.isFinite(ie))continue;const se=ae-ie;if(!Number.isFinite(se)||se<=W)continue;const ce=D.verticesXZ[H*2],pe=D.verticesXZ[H*2+1],be=ce+D.offsetX,re=pe+D.offsetZ,xe=.5*(ae+ie),ne=Xt(s,be,xe+D.offsetY,re,o);ne.valid&&(Y==="left"?ne.x<=U:ne.x>=U)&&(K+=ne.x,ee+=ne.y,oe+=ne.depth,te+=1)}};return X(r),te===0&&r>a+ut&&X(a),te===0?{x:$,y:q,depth:Number.isFinite(Q)?Q:0,valid:!0}:{x:K/te,y:ee/te,depth:oe/te,valid:!0}},F=[];for(const D of g){const Y=D.entry,$=Y.textBox.width,U=Y.textBox.height,q=L(D,"left"),Q=L(D,"right"),K=D.maxMidX-D.minMidX,ee=q.valid?q.x-l:Number.POSITIVE_INFINITY,oe=Q.valid?c-Q.x:Number.POSITIVE_INFINITY,te=q.valid&&K>=Go&&ee<=Ao,X=Q.valid&&K>=Go&&oe<=Ao,W=p-$>=Ga,H=E+$<=w;!W&&!H||F.push({scratch:D,entry:Y,width:$,height:U,leftAnchor:q,rightAnchor:Q,leftValid:te,rightValid:X,leftFits:W,rightFits:H})}if(F.length===0)return;const z=Math.max(0,o.height-qo-Ko),I=F.reduce((D,Y)=>D+Y.height,0)+In*Math.max(0,F.length-1)<=z+ut,A=I&&F.every(D=>D.leftFits&&(D.leftValid||!D.rightValid)),G=I&&F.every(D=>D.rightFits&&(D.rightValid||!D.leftValid));let V=null;if(A||G)if(A&&G){const D=F.some(ee=>ee.entry.objects.some(oe=>oe.visible&&oe.objectType==="solidEdge")),Y=Zt+Oa+(D?mn+pn:0),$=Ma(P,Y),U=(ee,oe,te,X)=>wa(ee,oe,te,X,$)?Ba(ee,oe,te,X,b,d,h,x,o,Y):!1,q=ee=>{const oe=[];for(const X of F){const W=ee==="left"?X.leftAnchor:X.rightAnchor;if(!W.valid)continue;const H=ee==="left"?p-X.width:E;oe.push({entry:X.entry,side:ee,anchor:W,y0:W.y,width:X.width,height:X.height,top:W.y-X.height*.5,left:H})}if(oe.length===0)return 0;gn(oe,o);let te=0;for(const X of oe){const W=X.top+X.height*.5,H=X.side==="left"?1:-1,ie=(X.side==="left"?X.left+X.width:X.left)+H*No,se=ie+H*Lo,ce=X.anchor.x-se,pe=X.anchor.y-W,be=Math.hypot(ce,pe);if(!Number.isFinite(be)||be<=ut)continue;const re=ce/be,xe=pe/be,ne=X.entry.objects.some(Be=>Be.visible&&Be.objectType==="solidEdge"),ve=Zt+Vo+(ne?mn+pn:0),ye=Math.min(ve,be-ut),Te=X.anchor.x-re*ye,Ee=X.anchor.y-xe*ye;(U(ie,W,se,W)||U(se,W,Te,Ee))&&(te+=1)}return te},Q=q("left")>0,K=q("right")>0;if(Q!==K)V=Q?"right":"left";else{const ee=F.reduce((H,ae)=>H+ae.leftAnchor.depth,0)/F.length,oe=F.reduce((H,ae)=>H+ae.rightAnchor.depth,0)/F.length,te=ee<=oe?"left":"right",X=te==="left"?"right":"left",W=Math.abs(ee-oe);this.unifiedSide===X&&W<=fn?V=X:V=te}}else V=A?"left":"right";this.unifiedSide=V;const O=D=>{const Y=D.leftValid&&D.leftFits,$=D.rightValid&&D.rightFits;if(Y&&$){const U=D.leftAnchor.depth<=D.rightAnchor.depth?"left":"right";return Math.abs(D.leftAnchor.depth-D.rightAnchor.depth)>fn?U:D.entry.side}if(D.entry.side==="left"&&Y)return"left";if(D.entry.side==="right"&&$)return"right";if(Y)return"left";if($)return"right";if(D.entry.side==="left"&&D.leftFits)return"left";if(D.entry.side==="right"&&D.rightFits)return"right";if(D.leftFits&&D.rightFits){const U=D.leftAnchor.depth<=D.rightAnchor.depth?"left":"right";if(Math.abs(D.leftAnchor.depth-D.rightAnchor.depth)>fn)return U}return D.leftFits?"left":D.rightFits?"right":null};for(const D of F){const Y=V??O(D);if(!Y)continue;D.entry.side=Y;const $=Y==="left"?D.leftAnchor:D.rightAnchor;if(!$.valid)continue;const U=Y==="left"?p-D.width:E,q=$.y,Q=q-D.height*.5,K={entry:D.entry,side:Y,anchor:$,y0:q,width:D.width,height:D.height,top:Q,left:U};Y==="left"?f.push(K):S.push(K)}if(f.length===0&&S.length===0)return;gn(f,o),gn(S,o),Uo(this.ortho,0,o.width,0,o.height,0,1),this.textRenderer.updateCamera(this.ortho,this.identity);const j=[],R=[],_=D=>{const Y=D.left,$=D.top,U=o.height-($+D.height),q=Y-D.entry.textBox.bgMinX,Q=U-D.entry.textBox.bgMinY;Ro(this.tmpMatrix),this.tmpMatrix[12]=q,this.tmpMatrix[13]=Q,this.tmpMatrix[14]=0,D.entry.text.setTransform(this.tmpMatrix),R.push(D.entry.text);const K=$+D.height*.5,ee=D.side==="left"?1:-1,te=(D.side==="left"?Y+D.width:Y)+ee*No,X=te+ee*Lo,W=D.entry.leaderRgb,H=Ra(W[0],W[1],W[2],Fa),ae=D.anchor.x-X,ie=D.anchor.y-K,se=Math.hypot(ae,ie);if(!Number.isFinite(se)||se<=ut)return;const ce=ae/se,pe=ie/se,be=D.entry.objects.some(ue=>ue.visible&&ue.objectType==="solidEdge"),re=Zt+Vo+(be?mn+pn:0),xe=Math.min(re,se-ut),ne=D.anchor.x-ce*xe,ve=D.anchor.y-pe*xe;Ea(j,te,K,X,K,ne,ve,H,o,hn);const ye=se-xe,Te=Math.min(La,ye*.5);if(Te<=ut)return;const Ee=Math.min(Na,Te*.9),Be=ne-ce*Te,je=ve-pe*Te,Ue=-pe,De=ce,Le=Be+Ue*Ee,Pe=je+De*Ee,we=Be-Ue*Ee,Ye=je-De*Ee;Bo(j,ne,ve,Le,Pe,H,o,hn),Bo(j,ne,ve,we,Ye,H,o,hn)};for(const D of f)_(D);for(const D of S)_(D);this.lineRenderer.update(new Float32Array(j)),this.lineRenderer.render(t),R.length>0&&this.textRenderer.render(t,...R)}}function ja(){const e=document.querySelector("#panel");if(!e)return null;const t=document.querySelector("#panel-toggle"),n=document.querySelector("#panel-body"),o=Array.from(document.querySelectorAll("input[name='theme']")),i=document.querySelector("#toggle-terrain"),s=document.querySelector("#toggle-grid"),a=document.querySelector("#toggle-sections"),r=document.querySelector("#toggle-profiles"),l=document.querySelector("#toggle-solids"),c=Array.from(document.querySelectorAll("input[name='solids-visibility']")),u=Array.from(document.querySelectorAll("input[name='sections-visibility']")),m=document.querySelector("#toggle-sections-edges"),b=document.querySelector("#toggle-solids-edges"),d=document.querySelector("#toggle-solids-labels"),h=document.querySelector("#fit-view"),x=document.querySelector("#toggle-projection"),B=Array.from(document.querySelectorAll("input[name='mode']")),y=Array.from(document.querySelectorAll(".panel-views button")),C=document.querySelector("#section-list"),g=document.querySelector("#profile-list"),P=document.querySelector("#solid-list"),v=document.querySelector("#solids-spacing"),T=document.querySelector("#solids-spacing-value"),p=document.querySelector("#solids-clip-x"),E=document.querySelector("#solids-clip-x-value"),w=document.querySelector("#solids-clip-y"),f=document.querySelector("#solids-clip-y-value"),S=document.querySelector("#solids-clip-z"),L=document.querySelector("#solids-clip-z-value"),F=document.querySelector("#gtao-section"),z=document.querySelector("#toggle-gtao"),M=document.querySelector("#toggle-gtao-only"),I=document.querySelector("#toggle-gtao-multiscale"),A=document.querySelector("#gtao-ambient-weight"),G=document.querySelector("#gtao-ambient-weight-value"),V=document.querySelector("#gtao-ambient-radius-scale"),O=document.querySelector("#gtao-ambient-radius-scale-value"),j=document.querySelector("#gtao-strength"),R=document.querySelector("#gtao-strength-value"),_=document.querySelector("#gtao-radius"),k=document.querySelector("#gtao-radius-value"),D=document.querySelector("#gtao-bias"),Y=document.querySelector("#gtao-bias-value"),$=document.querySelector("#gtao-power"),U=document.querySelector("#gtao-power-value"),q=document.querySelector("#gtao-thickness"),Q=document.querySelector("#gtao-thickness-value"),K=document.querySelector("#gtao-corner"),ee=document.querySelector("#gtao-corner-value"),oe=document.querySelector("#gtao-edge"),te=document.querySelector("#gtao-edge-value"),X=document.querySelector("#gtao-samples"),W=document.querySelector("#gtao-samples-value"),H=document.querySelector("#gtao-blur"),ae=document.querySelector("#gtao-blur-value"),ie=document.querySelector("#gtao-blur-depth"),se=document.querySelector("#gtao-blur-depth-value"),ce=document.querySelector("#gtao-scale"),pe=document.querySelector("#gtao-scale-value"),be=document.querySelector("#sections-controls"),re=document.querySelector("#profiles-controls"),xe=document.querySelector("#solids-controls"),ne=document.querySelector("#gfx"),ve=i==null?void 0:i.closest("label"),ye=s==null?void 0:s.closest("label");return!i||!s||!a||!r||!l||c.length===0||u.length===0||!m||!b||!d||!h||!x||!t||!n||o.length===0||B.length===0||!C||!g||!P||!v||!T||!p||!E||!w||!f||!S||!L||!F||!z||!M||!I||!A||!G||!V||!O||!j||!R||!_||!k||!D||!Y||!$||!U||!q||!Q||!K||!ee||!oe||!te||!X||!W||!H||!ae||!ie||!se||!ce||!pe||!be||!re||!xe||!ve||!ye?null:{panel:e,panelToggle:t,panelBody:n,themeInputs:o,toggleTerrain:i,toggleGrid:s,toggleSections:a,toggleProfiles:r,toggleSolids:l,solidsVisibilityInputs:c,sectionsVisibilityInputs:u,toggleSectionsEdges:m,toggleSolidsEdges:b,toggleSolidsLabels:d,fitButton:h,projectionButton:x,modeInputs:B,viewPresetButtons:y,sectionList:C,profileList:g,solidList:P,solidsSpacing:v,solidsSpacingValue:T,solidsClipX:p,solidsClipXValue:E,solidsClipY:w,solidsClipYValue:f,solidsClipZ:S,solidsClipZValue:L,gtaoSection:F,toggleGtao:z,toggleGtaoOnly:M,toggleGtaoMultiScale:I,gtaoAmbientWeight:A,gtaoAmbientWeightValue:G,gtaoAmbientRadiusScale:V,gtaoAmbientRadiusScaleValue:O,gtaoStrength:j,gtaoStrengthValue:R,gtaoRadius:_,gtaoRadiusValue:k,gtaoBias:D,gtaoBiasValue:Y,gtaoPower:$,gtaoPowerValue:U,gtaoThickness:q,gtaoThicknessValue:Q,gtaoCorner:K,gtaoCornerValue:ee,gtaoEdge:oe,gtaoEdgeValue:te,gtaoSamples:X,gtaoSamplesValue:W,gtaoBlur:H,gtaoBlurValue:ae,gtaoBlurDepth:ie,gtaoBlurDepthValue:se,gtaoScale:ce,gtaoScaleValue:pe,sectionsControls:be,profilesControls:re,solidsControls:xe,canvas:ne,terrainLabel:ve,gridLabel:ye}}const Ya=(()=>{const e=me(),t=.05,n=1.15;return(o,i)=>{const s=o.getViewMatrix(),a=i.min[0],r=i.min[1],l=i.min[2],c=i.max[0],u=i.max[1],m=i.max[2];let b=Number.POSITIVE_INFINITY,d=0;for(let B=0;B<2;B+=1){const y=B===0?a:c;for(let C=0;C<2;C+=1){const g=C===0?r:u;for(let P=0;P<2;P+=1){Ie(e,y,g,P===0?l:m),Cn(e,e,s);const T=-e[2];T<=0||(b=Math.min(b,T),d=Math.max(d,T))}}}if(!Number.isFinite(b)||!Number.isFinite(d)||d<=0)return;const h=Math.max(t,b/n),x=Math.max(h+1,d*n);o.near=h,o.far=x}})();function $a(e){var w,f,S,L,F;const t=e.sceneData.profiles??[],n=new Map(t.map(z=>[z.id,z])),o=new Map(t.map(z=>[z.id,[...z.layers].sort((M,I)=>M.depthFrom-I.depthFrom)])),i=e.sceneData.sections??[],s=new Map(i.map(z=>[z.id,z])),a=new Map;for(const z of i){const M=((w=z.vector)==null?void 0:w.worldPath)??z.path;if(M.length<2)continue;const[I,A]=M[0],[G,V]=M[M.length-1],O=G-I,j=V-A,R=Math.hypot(O,j);if(R<=1e-6)continue;const _=O/R,k=j/R,D=-k,Y=_;a.set(z.id,{ox:I,oz:A,dx:_,dz:k,nx:D,nz:Y,length:R,yaw:Math.atan2(k,_)})}const r=((f=e.sceneData.solidsModel)==null?void 0:f.sectionCurves)??[],l=new Map(r.map(z=>[z.id,z])),c=new Map;for(const z of r){const M=a.get(z.id);if(!M)continue;const I=s.get(z.id),A=M.ox+M.dx*M.length,G=M.oz+M.dz*M.length;let V=null;const O=(S=z.points)==null?void 0:S[z.points.length-1];if(O&&Math.hypot(O[0]-A,O[2]-G)<=.001)V=O[1];else{const _=(F=(L=I==null?void 0:I.vector)==null?void 0:L.interfaces)==null?void 0:F[z.interface];if(_&&_.length>0){let k=-1/0;for(const[D,Y]of _)D>k&&(k=D,V=Y)}V==null&&(V=O?O[1]:0)}c.set(z.id,[A,V,G])}const u=28,m=16,b=10,d=me(),h=me(),x=me(),B=me(),y=Gt(),C=Gt(),g=me(),P=me(),v=me(),T=me(),p=me(),E=new Map;return()=>{var z;if(t.length>0||r.length>0){const{height:M,dpr:I}=e.renderer.getSize(),A=u*I,G=m*.5*I,V=e.camera.getViewMatrix(),O=e.camera.mode==="perspective",j=O?M/(2*Math.tan(e.camera.fov*.5)):M/(2*e.camera.orthoScale),R=e.state.mode==="sections",_=R&&e.state.visibility.sections,D=R&&e.state.visibility.profiles&&_&&e.state.sections.highlightEdges,Y=1e-9,$=b*I;for(const U of t){const{x:q,z:Q,groundY:K}=Pt(U);Ie(d,q,K,Q),Cn(h,d,V);const ee=Math.max(.01,-h[2]),oe=O?j/ee:j,te=1/Math.max(oe,1e-6),X=A*te,W=G*te,H=E.get(U.id);H?(H.markerWorld=X,H.halfWidthWorld=W):E.set(U.id,{markerWorld:X,halfWidthWorld:W})}for(const U of e.objects){if(U.objectType==="sectionTopProfile"||U.objectType==="sectionTopProfileEdge"){if(!U.sectionId)continue;const re=l.get(U.sectionId),xe=a.get(U.sectionId),ne=U.layerIndex,ve=((z=re==null?void 0:re.points)==null?void 0:z.length)??0;if(!re||!xe||ne==null||ve<2||ne<0||ne>=ve){e.suppressVisibilityOverrides||(U.visible=!1);continue}const ye=U.objectType==="sectionTopProfileEdge"&&U.id.endsWith("_cap_end_edge");let Te=ne;if(ye&&ne===ve-1){const de=c.get(U.sectionId),He=re.points[ve-1],Nt=((de==null?void 0:de[0])??He[0])-He[0],pt=((de==null?void 0:de[1])??He[1])-He[1],Vt=((de==null?void 0:de[2])??He[2])-He[2];Math.hypot(Nt,pt,Vt)<=1e-6&&(Te=Math.max(0,ve-2))}const Ee=re.points[Te],Be=Ee[0],je=Ee[1],Ue=Ee[2];let De,Le,Pe;if(Te===ve-1){const de=c.get(U.sectionId);if(!de){e.suppressVisibilityOverrides||(U.visible=!1);continue}De=de[0],Le=de[1],Pe=de[2];const He=De-Be,Nt=Le-je,pt=Pe-Ue;if(Math.hypot(He,Nt,pt)<=1e-6){e.suppressVisibilityOverrides||(U.visible=!1);continue}}else{const de=re.points[Te+1];De=de[0],Le=de[1],Pe=de[2]}const we=De-Be,Ye=Le-je,ue=Pe-Ue,qe=Math.hypot(we,Ye,ue);if(qe<=1e-6){e.suppressVisibilityOverrides||(U.visible=!1);continue}const dt=(Be+De)*.5,ft=(je+Le)*.5,ht=(Ue+Pe)*.5;Ie(g,dt,ft,ht),Cn(P,g,V);const Z=Math.max(.01,-P[2]),Lt=O?j/Z:j,mt=1/Math.max(Lt,1e-6),Ae=Math.max(.001,$*mt);Ie(v,we/qe,Ye/qe,ue/qe),Ie(T,-xe.nx,0,-xe.nz),Re(p,T,v),ho(p)<=1e-12&&(Ie(T,1,0,0),Re(p,T,v),ho(p)<=1e-12&&(Ie(T,0,0,1),Re(p,T,v))),Fe(p,p),Re(T,v,p),Fe(T,T);const he=U.modelMatrix;he[0]=T[0]*Ae,he[1]=T[1]*Ae,he[2]=T[2]*Ae,he[3]=0,he[4]=we,he[5]=Ye,he[6]=ue,he[7]=0,he[8]=p[0]*Ae,he[9]=p[1]*Ae,he[10]=p[2]*Ae,he[11]=0,he[12]=dt,he[13]=ft,he[14]=ht,he[15]=1;continue}if(U.objectType==="profileSectionIntersection"){if(!U.profileId||!U.sectionId)continue;const re=n.get(U.profileId),xe=E.get(U.profileId),ne=a.get(U.sectionId);if(!re||!xe||!ne){e.suppressVisibilityOverrides||(U.visible=!1);continue}const{x:ve,z:ye,groundY:Te}=Pt(re),Ee=Math.max(re.depth,.01),Be=Math.max(.001,xe.halfWidthWorld),je=ve-Be,Ue=ve+Be,De=ye-Be,Le=ye+Be;let Pe=-1/0,we=1/0;if(Math.abs(ne.dx)<Y){if(ne.ox<je||ne.ox>Ue){e.suppressVisibilityOverrides||(U.visible=!1);continue}}else{let Ae=(je-ne.ox)/ne.dx,he=(Ue-ne.ox)/ne.dx;if(Ae>he&&([Ae,he]=[he,Ae]),Pe=Math.max(Pe,Ae),we=Math.min(we,he),we<Pe){e.suppressVisibilityOverrides||(U.visible=!1);continue}}if(Math.abs(ne.dz)<Y){if(ne.oz<De||ne.oz>Le){e.suppressVisibilityOverrides||(U.visible=!1);continue}}else{let Ae=(De-ne.oz)/ne.dz,he=(Le-ne.oz)/ne.dz;if(Ae>he&&([Ae,he]=[he,Ae]),Pe=Math.max(Pe,Ae),we=Math.min(we,he),we<Pe){e.suppressVisibilityOverrides||(U.visible=!1);continue}}const Ye=Math.max(Pe,0),ue=Math.min(we,ne.length);if(ue<=Ye+1e-6){e.suppressVisibilityOverrides||(U.visible=!1);continue}const qe=ne.ox+ne.dx*Ye,dt=ne.oz+ne.dz*Ye,ft=ne.ox+ne.dx*ue,ht=ne.oz+ne.dz*ue,Z=Math.hypot(ft-qe,ht-dt);if(Z<=1e-6){e.suppressVisibilityOverrides||(U.visible=!1);continue}const Lt=Te-Ee*.5;Ie(x,(qe+ft)*.5,Lt,(dt+ht)*.5),Ie(B,Z,Ee,1);const mt=ne.yaw*.5;C[0]=0,C[1]=Math.sin(mt),C[2]=0,C[3]=Math.cos(mt),Et(U.modelMatrix,C,x,B),e.suppressVisibilityOverrides||(U.visible=D);continue}if(!(U.objectType==="profile"||U.objectType==="profileEdge"||U.objectType==="profileMarker"||U.objectType==="profileMarkerEdge"||U.objectType==="profileLayer"||U.objectType==="profileLayerEdge")||!U.profileId)continue;const Q=n.get(U.profileId),K=E.get(U.profileId);if(!Q||!K)continue;const{x:ee,z:oe,groundY:te}=Pt(Q);if(U.objectType==="profileMarker"||U.objectType==="profileMarkerEdge"||(U.objectType==="profile"||U.objectType==="profileEdge")&&!U.soilId){const re=Math.max(.001,K.markerWorld);Ie(x,ee,te,oe),Ie(B,re,re,re),Et(U.modelMatrix,y,x,B);continue}const W=o.get(U.profileId),H=W==null?void 0:W[U.layerIndex];if(!H)continue;const ae=Math.max(Q.depth,.01),ie=Math.max(0,H.depthFrom),se=Math.min(ae,Math.max(ie,H.depthTo)),ce=se-ie;if(ce<=1e-6)continue;const pe=te-(ie+se)*.5,be=Math.max(.001,K.halfWidthWorld);Ie(x,ee,pe,oe),Ie(B,be*2,ce,be*2),Et(U.modelMatrix,y,x,B)}}Ya(e.camera,e.getFitBounds())}}const it=(e,t=3)=>Number.isFinite(e)?e.toFixed(t).replace(/\\.?0+$/,""):"0",Wa=(e,t=3)=>{const n=[];for(let o=0;o<e.length;o+=1)n.push(it(e[o],t));return n.join(",")};function Xa(e){let t="",n=0;const o=150,i=()=>{const s=new URLSearchParams;s.set("theme",e.getActiveThemeName()),s.set("mode",e.state.mode),s.set("panelCollapsed",e.panel.classList.contains("panel--collapsed")?"1":"0"),s.set("camMode",e.camera.mode),s.set("camYawDeg",it(e.camera.yaw*180/Math.PI,3)),s.set("camPitchDeg",it(e.camera.pitch*180/Math.PI,3)),s.set("camDist",it(e.camera.distance,3)),s.set("camOrtho",it(e.camera.orthoScale,3)),s.set("camTarget",Wa(e.camera.target,3)),s.set("terrain",e.state.visibility.terrain?"1":"0"),s.set("grid",e.state.visibility.grid?"1":"0"),s.set("sections",e.state.visibility.sections?"1":"0"),s.set("profiles",e.state.visibility.profiles?"1":"0"),s.set("solids",e.state.visibility.solids?"1":"0"),s.set("sectionsVis",e.state.sections.displayMode),s.set("sectionsEdges",e.state.sections.highlightEdges?"1":"0"),s.set("solidsVis",e.state.solids.displayMode),s.set("solidsEdges",e.state.solids.highlightEdges?"1":"0"),s.set("solidsLabels",e.state.solids.showLabels?"1":"0"),s.set("solidsSpacing",it(e.state.solids.verticalSpacing,3)),s.set("cropX",it(e.state.solids.crop.xMin,3)),s.set("cropY",it(e.state.solids.crop.yMax,3)),s.set("cropZ",it(e.state.solids.crop.zMax,3));const a=e.solidsModel;if(a){const r=a.solids.map(c=>c.soilId),l=r.filter(c=>e.state.solids.enabled.has(c));l.length===r.length?s.set("solidsEnabled","*"):s.set("solidsEnabled",l.join(","))}return e.state.selectedSectionId&&s.set("section",e.state.selectedSectionId),e.state.selectedProfileId?s.set("profile",e.state.selectedProfileId):e.hasProfileNoneOption&&s.set("profile","none"),s.toString()};return()=>{const s=performance.now();if(s-n<o)return;n=s;const a=i();if(a===t)return;t=a;const r=a.length>0?`${window.location.pathname}?${a}${window.location.hash}`:`${window.location.pathname}${window.location.hash}`;window.history.replaceState(null,"",r)}}const bn=()=>({min:[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY],max:[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY]}),Tt=(e,t)=>{e.min[0]=Math.min(e.min[0],t.min[0]),e.min[1]=Math.min(e.min[1],t.min[1]),e.min[2]=Math.min(e.min[2],t.min[2]),e.max[0]=Math.max(e.max[0],t.max[0]),e.max[1]=Math.max(e.max[1],t.max[1]),e.max[2]=Math.max(e.max[2],t.max[2])},Ha=e=>Number.isFinite(e.min[0])&&Number.isFinite(e.min[1])&&Number.isFinite(e.min[2])&&Number.isFinite(e.max[0])&&Number.isFinite(e.max[1])&&Number.isFinite(e.max[2]),qa=e=>{if(e.length===0)return null;let t=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;for(const o of e)Number.isFinite(o)&&(t=Math.min(t,o),n=Math.max(n,o));return!Number.isFinite(t)||!Number.isFinite(n)?null:{min:t,max:n}};function Ka(e){const t=new Map;if(e.solidsModel)for(const[h,x]of Object.entries(e.solidsModel.surfaces)){const B=qa(x);B&&t.set(h,B)}const n=new Map;if(e.solidsModel){const{extent:h}=e.solidsModel;for(const x of e.solidsModel.solids){const B=t.get(x.top),y=t.get(x.bottom),C=(y==null?void 0:y.min)??h.yBase,g=(B==null?void 0:B.max)??e.bounds.max[1];n.set(x.soilId,{min:[h.xMin,C,h.zMin],max:[h.xMax,g,h.zMax]})}}const o=()=>{if(e.solidsModel){const P=t.get("terrain");if(P)return{min:[e.solidsModel.extent.xMin,P.min,e.solidsModel.extent.zMin],max:[e.solidsModel.extent.xMax,P.max,e.solidsModel.extent.zMax]}}const h=e.sceneData.objects.find(P=>P.type==="terrain");if(!h)return null;const x=h.position??[0,0,0],B=h.scale??[1,1,1],y=h.mesh.size??[1,1,1],C=[B[0]*y[0],B[1]*y[1],B[2]*y[2]],g=[Math.abs(C[0])*.5,Math.abs(C[1])*.5,Math.abs(C[2])*.5];return{min:[x[0]-g[0],x[1]-g[1],x[2]-g[2]],max:[x[0]+g[0],x[1]+g[1],x[2]+g[2]]}},i=()=>{const h=e.sceneData.sections??[];if(h.length===0)return null;let x=Number.POSITIVE_INFINITY,B=Number.NEGATIVE_INFINITY,y=Number.POSITIVE_INFINITY,C=Number.NEGATIVE_INFINITY,g=!1;for(const P of h)for(const v of P.path??[])x=Math.min(x,v[0]),B=Math.max(B,v[0]),y=Math.min(y,v[1]),C=Math.max(C,v[1]),g=!0;return g?{min:[x,e.bounds.min[1],y],max:[B,e.bounds.max[1],C]}:null},s=()=>{const h=e.sceneData.profiles??[];if(h.length===0)return null;const B=.35*.5,y=.08,C=bn();let g=!1;for(const P of h){const{x:v,z:T,groundY:p}=Pt(P),E=Math.max(P.depth,.01),w=Math.max(B,y),f={min:[v-w,p-E,T-w],max:[v+w,p+B,T+w]};Tt(C,f),g=!0}return g?C:null},a=o(),r=i(),l=s(),c=(h,x)=>{if(!Number.isFinite(x)||x===0)return 0;const B=e.maxSolidLayerIndex*.5;return-(h-B)*x},u=h=>{if(!e.solidsModel)return null;const x=bn();let B=!1;for(const y of e.solidsModel.solids){if(!e.state.solids.enabled.has(y.soilId))continue;const C=n.get(y.soilId);if(!C)continue;const g=e.solidLayerIndexBySoilId.get(y.soilId)??0,P=c(g,h),v=Math.max(C.min[0],e.state.solids.crop.xMin),T=C.min[1],p=C.min[2],E=C.max[0],w=Math.min(C.max[1],e.state.solids.crop.yMax),f=Math.min(C.max[2],e.state.solids.crop.zMax);E<v||w<T||f<p||(Tt(x,{min:[v,T+P,p],max:[E,w+P,f]}),B=!0)}return B?x:null},m=()=>{if(!e.canvas)return{fracX:1,fracY:1,centerNdcX:0,centerNdcY:0};const h=Math.max(1,e.canvas.clientWidth),x=Math.max(1,e.canvas.clientHeight),B=16;if(window.matchMedia("(max-width: 720px)").matches)return{fracX:1,fracY:1,centerNdcX:0,centerNdcY:0};const C=e.canvas.getBoundingClientRect(),g=e.panel.getBoundingClientRect(),P=g.left-C.left,v=g.right-C.left,T=g.top-C.top,p=g.bottom-C.top,E=g.width>0&&g.height>0&&v>=0&&P<=h&&p>=0&&T<=x,w=B,f=h-B,S=B,L=x-B;let F=f,z=S;E&&(F=Math.min(f,Math.max(w+1,P-B))),z>=L&&(z=S);const M=Math.max(1,F-w),I=Math.max(1,L-z),A=w+M*.5,G=z+I*.5;return{fracX:M/h,fracY:I/x,centerNdcX:2*A/h-1,centerNdcY:1-2*G/x}};return{getFitBounds:()=>{const h=bn();if(e.state.visibility.terrain&&a&&Tt(h,a),e.state.mode==="sections")e.state.visibility.sections&&r&&Tt(h,r),e.state.visibility.profiles&&l&&Tt(h,l);else if(e.state.visibility.solids){const x=u(e.state.solids.verticalSpacing);x&&Tt(h,x)}return Ha(h)?h:e.bounds},fitCameraToBounds:h=>{const x=m(),B=Math.max(.05,Math.min(1,x.fracX)),y=Math.max(.05,Math.min(1,x.fracY)),C=1.1,g=(h.min[0]+h.max[0])*.5,P=(h.min[1]+h.max[1])*.5,v=(h.min[2]+h.max[2])*.5,T=h.max[0]-h.min[0],p=h.max[1]-h.min[1],E=h.max[2]-h.min[2],w=.5*Math.hypot(T,p,E)*C;if(!Number.isFinite(w)||w<=0){Ie(e.camera.target,g,P,v);return}Ie(e.camera.target,g,P,v);const f=e.camera.fov*.5,S=Math.tan(f),L=Ne(-Math.cos(e.camera.pitch)*Math.cos(e.camera.yaw),-Math.sin(e.camera.pitch),-Math.cos(e.camera.pitch)*Math.sin(e.camera.yaw));Fe(L,L);const F=me();Re(F,L,Ne(0,1,0)),An(F)<1e-6?Ie(F,1,0,0):Fe(F,F);const z=me();Re(z,F,L),Fe(z,z);const M=[[h.min[0],h.min[1],h.min[2]],[h.min[0],h.min[1],h.max[2]],[h.min[0],h.max[1],h.min[2]],[h.min[0],h.max[1],h.max[2]],[h.max[0],h.min[1],h.min[2]],[h.max[0],h.min[1],h.max[2]],[h.max[0],h.max[1],h.min[2]],[h.max[0],h.max[1],h.max[2]]];if(e.camera.mode==="perspective"){const W=Math.max(1e-4,S*e.camera.aspect*B),H=Math.max(1e-4,S*y);let ae=.2;const ie=me();for(const se of M){Ie(ie,se[0]-g,se[1]-P,se[2]-v);const ce=ot(ie,F),pe=ot(ie,z),be=ot(ie,L),re=Math.abs(ce)*C/W-be,xe=Math.abs(pe)*C/H-be;ae=Math.max(ae,re,xe)}e.camera.distance=Math.min(200,Math.max(.2,ae))}else{let W=.2;const H=me(),ae=Math.max(1e-4,B*e.camera.aspect),ie=Math.max(1e-4,y);for(const se of M){Ie(H,se[0]-g,se[1]-P,se[2]-v);const ce=ot(H,F),pe=ot(H,z),be=Math.abs(ce)*C/ae,re=Math.abs(pe)*C/ie;W=Math.max(W,be,re)}e.camera.orthoScale=Math.min(200,Math.max(.2,W)),e.camera.distance=e.camera.orthoScale/Math.max(1e-4,S)}let I=Number.POSITIVE_INFINITY,A=Number.NEGATIVE_INFINITY,G=Number.POSITIVE_INFINITY,V=Number.NEGATIVE_INFINITY,O=0,j=0,R=0,_=0;const k=me();Rt(k,e.camera.target,L,-e.camera.distance);for(const W of M){const H=Ne(W[0]-k[0],W[1]-k[1],W[2]-k[2]),ae=ot(H,F),ie=ot(H,z),se=Math.max(1e-4,ot(H,L)),ce=e.camera.mode==="perspective"?ae/(se*S*e.camera.aspect):ae/(e.camera.orthoScale*e.camera.aspect),pe=e.camera.mode==="perspective"?ie/(se*S):ie/e.camera.orthoScale;ce<I&&(I=ce,O=se),ce>A&&(A=ce,j=se),pe<G&&(G=pe,R=se),pe>V&&(V=pe,_=se)}const D=(I+A)*.5,Y=(G+V)*.5,$=x.centerNdcX-D,U=x.centerNdcY-Y;let q=0,Q=0;if(e.camera.mode==="perspective"){const W=1/Math.max(1e-4,O)+1/Math.max(1e-4,j),H=1/Math.max(1e-4,R)+1/Math.max(1e-4,_),ae=W>1e-6?2/W:e.camera.distance,ie=H>1e-6?2/H:e.camera.distance;q=-$*(S*e.camera.aspect)*ae,Q=-U*S*ie}else{const W=e.camera.orthoScale,H=W*e.camera.aspect;q=-$*H,Q=-U*W}if(Math.abs(q)<1e-4&&Math.abs(Q)<1e-4)return;const K=e.camera.getPosition(),ee=me();Gn(ee,e.camera.target,K),Fe(ee,ee);const oe=Ne(0,1,0),te=me();Re(te,ee,oe),Fe(te,te);const X=me();Re(X,te,ee),Fe(X,X),Rt(e.camera.target,e.camera.target,te,q),Rt(e.camera.target,e.camera.target,X,Q)},getSolidsSpacingOffset:c}}function Za(e){const t=e.signal?{signal:e.signal}:void 0,n=P=>`${P.toFixed(2)} m`,o=P=>P.toFixed(2),i=P=>`${P.toFixed(2)}x`,s=(P,v)=>{const T=Number.parseFloat(P.value);return Number.isFinite(T)?T:v},a=()=>s(e.elements.gtaoStrength,3.6),r=()=>s(e.elements.gtaoRadius,1.35),l=()=>s(e.elements.gtaoBias,.03),c=()=>s(e.elements.gtaoPower,1.5),u=()=>s(e.elements.gtaoThickness,1),m=()=>s(e.elements.gtaoCorner,0),b=()=>s(e.elements.gtaoEdge,1),d=()=>Math.round(s(e.elements.gtaoSamples,12)),h=()=>s(e.elements.gtaoBlur,1.4),x=()=>s(e.elements.gtaoBlurDepth,.07),B=()=>s(e.elements.gtaoScale,1),y=()=>s(e.elements.gtaoAmbientWeight,.35),C=()=>s(e.elements.gtaoAmbientRadiusScale,5.75),g=()=>{e.elements.gtaoAmbientWeightValue.textContent=o(e.state.gtao.ambientWeight),e.elements.gtaoAmbientRadiusScaleValue.textContent=i(e.state.gtao.ambientRadiusScale),e.elements.gtaoStrengthValue.textContent=o(e.state.gtao.intensity),e.elements.gtaoRadiusValue.textContent=n(e.state.gtao.radius),e.elements.gtaoBiasValue.textContent=o(e.state.gtao.bias),e.elements.gtaoPowerValue.textContent=o(e.state.gtao.power),e.elements.gtaoThicknessValue.textContent=n(e.state.gtao.thickness),e.elements.gtaoCornerValue.textContent=o(e.state.gtao.cornerBoost),e.elements.gtaoEdgeValue.textContent=o(e.state.gtao.edgePreserve),e.elements.gtaoSamplesValue.textContent=Math.round(e.state.gtao.sampleCount).toString(),e.elements.gtaoBlurValue.textContent=o(e.state.gtao.blurSigma),e.elements.gtaoBlurDepthValue.textContent=o(e.state.gtao.blurDepthSigma),e.elements.gtaoScaleValue.textContent=i(e.state.gtao.scale)};return e.elements.toggleGtao.addEventListener("change",()=>{e.state.gtao.enabled=e.elements.toggleGtao.checked,e.elements.toggleGtao.checked||(e.elements.toggleGtaoOnly.checked=!1,e.state.gtao.aoOnly=!1),e.reapplyTheme(),e.applySceneState()},t),e.elements.toggleGtaoOnly.addEventListener("change",()=>{e.state.gtao.aoOnly=e.elements.toggleGtaoOnly.checked,e.reapplyTheme(),e.applySceneState()},t),e.elements.toggleGtaoMultiScale.addEventListener("change",()=>{e.state.gtao.multiScale=e.elements.toggleGtaoMultiScale.checked,e.applySceneState()},t),e.elements.gtaoAmbientWeight.addEventListener("input",()=>{e.state.gtao.ambientWeight=y(),g(),e.applySceneState()},t),e.elements.gtaoAmbientRadiusScale.addEventListener("input",()=>{e.state.gtao.ambientRadiusScale=C(),g(),e.applySceneState()},t),e.elements.gtaoStrength.addEventListener("input",()=>{e.state.gtao.intensity=a(),g(),e.applySceneState()},t),e.elements.gtaoRadius.addEventListener("input",()=>{e.state.gtao.radius=r(),g(),e.applySceneState()},t),e.elements.gtaoBias.addEventListener("input",()=>{e.state.gtao.bias=l(),g(),e.applySceneState()},t),e.elements.gtaoPower.addEventListener("input",()=>{e.state.gtao.power=c(),g(),e.applySceneState()},t),e.elements.gtaoThickness.addEventListener("input",()=>{e.state.gtao.thickness=u(),g(),e.applySceneState()},t),e.elements.gtaoCorner.addEventListener("input",()=>{e.state.gtao.cornerBoost=m(),g(),e.applySceneState()},t),e.elements.gtaoEdge.addEventListener("input",()=>{e.state.gtao.edgePreserve=b(),g(),e.applySceneState()},t),e.elements.gtaoSamples.addEventListener("input",()=>{e.state.gtao.sampleCount=d(),g(),e.applySceneState()},t),e.elements.gtaoBlur.addEventListener("input",()=>{e.state.gtao.blurSigma=h(),g(),e.applySceneState()},t),e.elements.gtaoBlurDepth.addEventListener("input",()=>{e.state.gtao.blurDepthSigma=x(),g(),e.applySceneState()},t),e.elements.gtaoScale.addEventListener("input",()=>{e.state.gtao.scale=B(),g(),e.applySceneState()},t),{updateLabels:g}}function Qa(e,t,n){const o=n?{signal:n}:void 0,i=a=>{e.classList.toggle("panel--collapsed",a),t.setAttribute("aria-expanded",a?"false":"true")},s=()=>{window.matchMedia("(max-width: 720px)").matches||i(!1)};return t.addEventListener("click",()=>{i(!e.classList.contains("panel--collapsed"))},o),window.addEventListener("resize",s,o),s(),document.addEventListener("pointerdown",a=>{if(!window.matchMedia("(max-width: 720px)").matches||e.classList.contains("panel--collapsed"))return;const r=a.target;r instanceof Node&&e.contains(r)||i(!0)},o),{setCollapsed:i}}const vt=(e,t,n)=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n,e[3]+(t[3]-e[3])*n],xn=e=>Math.min(1,Math.max(0,e)),zo=()=>{const e=new Map;return t=>{const n=e.get(t);if(n!==void 0)return n;let o=2166136261;for(let a=0;a<t.length;a+=1)o^=t.charCodeAt(a),o=Math.imul(o,16777619);o^=o>>>16,o=Math.imul(o,2146121005),o^=o>>>15,o=Math.imul(o,2221713035),o^=o>>>16;const s=1+((o>>>0)/4294967295*2-1)*.072;return e.set(t,s),s}},bt=(e,t)=>[xn(e[0]*t),xn(e[1]*t),xn(e[2]*t),e[3]],Ja=.35,er=.4,tn=.6,Zo=.35,Qo=.2,Vn=1.2,zn=2,Jo=1.4,tr=Vn,nr=zn,or=Vn,ir=zn,sr=Jo,ar=1.1,Fn=e=>{const t=vt(e,[1,1,1,e[3]],Ja);return[t[0],t[1],t[2],er]},yn=(e,t,n)=>{if(n==="wireframe"){e.color=t,e.material=[e.baseMaterial[0],le.Hidden,e.baseMaterial[2],e.baseMaterial[3]];return}n==="transparent"?(e.color=Fn(t),e.material=[e.baseMaterial[0],le.Glass,e.baseMaterial[2],e.baseMaterial[3]]):(e.color=t,e.material=[...e.baseMaterial])},vn=(e,t,n)=>{if(t==="transparent"){const o=n==="light"?[0,0,0,e.baseColor[3]]:[1,1,1,e.baseColor[3]],i=n==="light"?Zo:Qo,s=vt(e.baseColor,o,i);e.color=[s[0],s[1],s[2],tn]}else e.color=e.baseColor},rr=(e,t)=>{t==="transparent"?(e.color=Fn(e.baseColor),e.material=[0,le.Glass,e.baseMaterial[2],e.baseMaterial[3]]):(e.color=[...e.baseColor],e.material=[...e.baseMaterial])},lr=(e,t,n)=>{if(t==="transparent"){const o=n==="light"?[0,0,0,e.baseColor[3]]:[1,1,1,e.baseColor[3]],i=n==="light"?Zo:Qo,s=vt(e.baseColor,o,i);e.color=[s[0],s[1],s[2],tn]}else e.color=e.baseColor};function cr(e){const t=zo(),n=zo(),o={terrain:e.elements.toggleTerrain.checked,grid:e.elements.toggleGrid.checked,sections:e.elements.toggleSections.checked};return{applySceneState:()=>{const a=e.getRenderThemeName(),r=e.state.mode==="sections",l=e.state.mode==="solids",c=r&&e.state.visibility.sections,u=e.state.visibility.sections,m=r&&e.state.visibility.profiles,b=l&&e.state.visibility.solids,d=e.state.sections.displayMode,h=e.state.solids.displayMode,x=c&&d==="wireframe",B=b&&h==="wireframe",y=c&&e.state.sections.highlightEdges,C=b&&e.state.solids.highlightEdges,g=b&&e.state.solids.showLabels,P=l?e.state.solids.verticalSpacing:0,v=r&&d==="classic",T=e.state.visibility.terrain,p=e.state.visibility.grid,E=T||p,w=e.objects.some(M=>M.objectType==="terrainWireframe"),f=r&&T&&d==="wireframe"&&w;e.elements.terrainLabel.style.display=l?"none":"",e.elements.gridLabel.style.display=l?"none":"",e.elements.sectionsControls.style.display=l?"none":"",e.elements.profilesControls.style.display=r?"":"none",e.elements.solidsControls.style.display=l?"":"none",e.elements.gtaoSection.style.opacity=v?"1":"0.5",e.elements.gtaoInputs.forEach(M=>{M.disabled=!v}),v&&(e.elements.toggleGtaoOnly.disabled=!e.state.gtao.enabled,e.elements.toggleGtaoMultiScale.disabled=!e.state.gtao.enabled,e.elements.gtaoAmbientWeight.disabled=!e.state.gtao.enabled||!e.state.gtao.multiScale,e.elements.gtaoAmbientRadiusScale.disabled=!e.state.gtao.enabled||!e.state.gtao.multiScale);const S=r?c:!!e.solidsModel;e.elements.sectionList.style.opacity=S?"1":"0.6",e.elements.sectionList.querySelectorAll("input[type='radio']").forEach(M=>{M.disabled=!S}),e.elements.profileList.style.opacity=m?"1":"0.6",e.elements.profileList.querySelectorAll("input[type='radio']").forEach(M=>{M.disabled=!m}),e.elements.solidList.style.opacity=b?"1":"0.6",e.elements.solidList.querySelectorAll("input[type='checkbox']").forEach(M=>{M.disabled=!b});const L=[.678,1,.184,1],F=[.678,1,.184,1];for(const M of e.objects)if(M.objectType==="terrain"){const I=E&&!f;M.visible=I,r&&d==="transparent"&&T?(M.color=Fn(M.baseColor),M.material=[M.baseMaterial[0],le.Glass,M.baseMaterial[2],0]):(M.color=[...M.baseColor],M.material=[...M.baseMaterial],M.material[2]=p?M.baseMaterial[2]:0,M.material[3]=T?0:p?1:0)}else if(M.objectType==="terrainWireframe")M.visible=f;else if(M.objectType==="curve")M.visible=u;else if(M.objectType==="sectionTopProfile"){const A=e.state.selectedSectionId&&M.sectionId===e.state.selectedSectionId?vt(M.baseColor,L,.45):M.baseColor,G=M.sectionId?bt(A,t(M.sectionId)):A;M.visible=c&&d!=="wireframe",yn(M,G,d)}else if(M.objectType==="sectionTopProfileEdge"){M.visible=c&&(e.state.sections.highlightEdges||d==="wireframe");const I=e.state.selectedSectionId&&M.sectionId===e.state.selectedSectionId;M.material[0]=I?nr:tr,vn(M,d,a),M.sectionId&&(M.color=bt(M.color,t(M.sectionId))),M.edgeXray=!1}else if(M.objectType==="section"){M.visible=c;const A=e.state.selectedSectionId&&M.sectionId===e.state.selectedSectionId?vt(M.baseColor,L,.45):M.baseColor,G=M.sectionId?bt(A,t(M.sectionId)):A;yn(M,G,d)}else if(M.objectType==="sectionWireframe"){M.visible=x;const A=e.state.selectedSectionId&&M.sectionId===e.state.selectedSectionId?vt(M.baseColor,L,.45):M.baseColor;M.color=M.sectionId?bt(A,t(M.sectionId)):A}else if(M.objectType==="sectionEdge"){M.visible=y;const I=e.state.selectedSectionId&&M.sectionId===e.state.selectedSectionId;M.material[0]=I?zn:Vn,vn(M,d,a),M.sectionId&&(M.color=bt(M.color,t(M.sectionId))),M.edgeXray=!1}else if(M.objectType==="sectionIntersection"){M.visible=y,M.material[0]=Jo;const A=(d==="transparent"?tn:M.baseColor[3])*.5;M.color=[M.baseColor[0],M.baseColor[1],M.baseColor[2],A],M.edgeXray=!1}else if(M.objectType==="profile"||M.objectType==="profileMarker"||M.objectType==="profileLayer"){M.visible=m;const A=e.state.selectedProfileId&&M.profileId===e.state.selectedProfileId?vt(M.baseColor,F,.45):M.baseColor,G=M.profileId?bt(A,n(M.profileId)):A;yn(M,G,d)}else if(M.objectType==="profileEdge"||M.objectType==="profileMarkerEdge"||M.objectType==="profileLayerEdge"){M.visible=m&&(e.state.sections.highlightEdges||d==="wireframe");const I=e.state.selectedProfileId&&M.profileId===e.state.selectedProfileId;M.material[0]=I?ir:or,vn(M,d,a),M.profileId&&(M.color=bt(M.color,n(M.profileId))),M.edgeXray=!1}else if(M.objectType==="profileSectionIntersection"){M.visible=m&&y,M.material[0]=sr;const A=(d==="transparent"?tn:M.baseColor[3])*.5,G=a==="light"?[.1,.1,.1]:[M.baseColor[0],M.baseColor[1],M.baseColor[2]];M.color=[G[0],G[1],G[2],A],M.edgeXray=!1}else if(M.objectType==="solid"||M.objectType==="solidWireframe"||M.objectType==="solidEdge"){const I=M.soilId?e.state.solids.enabled.has(M.soilId):!0;M.objectType==="solid"?rr(M,h):M.objectType==="solidEdge"&&(lr(M,h,a),M.material[0]=ar,M.edgeXray=!1);const A=b&&h!=="wireframe";M.visible=(M.objectType==="solidWireframe"?B:M.objectType==="solidEdge"?C:A)&&I,M.objectType==="solidEdge"&&(M.edgeXray=B),wn(M.modelMatrix,M.baseMatrix),M.modelMatrix[13]+=e.getSolidsSpacingOffset(M.layerIndex,P)}else M.visible=!0;const z=e.debugLabelOverlayRenderer?e.debugLabelOverlayRenderer:g?e.solidsLabelsOverlayRenderer:null;if(e.renderer.setOverlayRenderer(z),e.renderer.setGtaoSettings({enabled:v&&e.state.gtao.enabled,aoOnly:e.state.gtao.aoOnly,multiScale:v&&e.state.gtao.enabled&&e.state.gtao.multiScale,radius:e.state.gtao.radius,ambientRadiusScale:e.state.gtao.ambientRadiusScale,ambientWeight:e.state.gtao.ambientWeight,bias:e.state.gtao.bias,intensity:e.state.gtao.intensity,power:e.state.gtao.power,thickness:e.state.gtao.thickness,cornerBoost:e.state.gtao.cornerBoost,edgePreserve:e.state.gtao.edgePreserve,sampleCount:e.state.gtao.sampleCount,blurSigma:e.state.gtao.blurSigma,blurDepthSigma:e.state.gtao.blurDepthSigma,scale:e.state.gtao.scale}),e.debugLabelOverlayRenderer&&e.debugLabelOnly)for(const M of e.objects)M.visible=!1},applySolidsVisibilityLock:a=>{const{toggleTerrain:r,toggleGrid:l,toggleSections:c}=e.elements;a?(o.terrain=r.checked,o.grid=l.checked,o.sections=c.checked,r.checked=!1,l.checked=!1,c.checked=!1,e.state.visibility.terrain=!1,e.state.visibility.grid=!1,e.state.visibility.sections=!1,r.disabled=!0,l.disabled=!0,c.disabled=!0):(r.disabled=!1,l.disabled=!1,c.disabled=!1,r.checked=o.terrain,l.checked=o.grid,c.checked=o.sections,e.state.visibility.terrain=r.checked,e.state.visibility.grid=l.checked,e.state.visibility.sections=c.checked)}}}function ur(e){var m,b;const t=e.signal?{signal:e.signal}:void 0,n=new Map,o=new Map,i=new Map;let s=1;const a=(d,h)=>{const x=d==="section"?o:i,B=x.get(h);if(B)return B;const y=s++;return x.set(h,y),n.set(y,{type:d,id:h}),y};for(const d of e.objects)d.objectType==="section"&&d.sectionId?d.pickId=a("section",d.sectionId):(d.objectType==="profile"||d.objectType==="profileMarker"||d.objectType==="profileLayer")&&d.profileId?d.pickId=a("profile",d.profileId):d.pickId=0;e.elements.sectionList.innerHTML="";const r=new Map;if(e.sceneData.sections&&e.sceneData.sections.length>0)for(const d of e.sceneData.sections){const h=document.createElement("label");h.className="panel-option";const x=document.createElement("input");x.type="radio",x.name="section-select",r.set(d.id,x),x.addEventListener("change",()=>{x.checked&&(e.state.selectedSectionId=d.id,e.applySceneState())},t),h.appendChild(x),h.appendChild(document.createTextNode(d.name)),e.elements.sectionList.appendChild(h)}else{const d=document.createElement("div");d.className="panel-option",d.textContent="No sections loaded",e.elements.sectionList.appendChild(d)}e.elements.profileList.innerHTML="";const l=new Map;let c=null;if(e.sceneData.profiles&&e.sceneData.profiles.length>0){const d=document.createElement("label");d.className="panel-option";const h=document.createElement("input");h.type="radio",h.name="profile-select",h.checked=!0,h.addEventListener("change",()=>{h.checked&&(e.state.selectedProfileId=null,e.applySceneState())},t),d.appendChild(h),d.appendChild(document.createTextNode("None")),e.elements.profileList.appendChild(d),c=h;for(const x of e.sceneData.profiles){const B=document.createElement("label");B.className="panel-option";const y=document.createElement("input");y.type="radio",y.name="profile-select",l.set(x.id,y),y.addEventListener("change",()=>{y.checked&&(e.state.selectedProfileId=x.id,e.applySceneState())},t),B.appendChild(y),B.appendChild(document.createTextNode(x.name)),e.elements.profileList.appendChild(B)}}else{const d=document.createElement("div");d.className="panel-option",d.textContent="No profiles loaded",e.elements.profileList.appendChild(d)}if(((m=e.urlConfig.selection)==null?void 0:m.sectionId)!==void 0){const d=e.urlConfig.selection.sectionId,h=r.get(d);h&&(h.checked=!0,e.state.selectedSectionId=d)}if(((b=e.urlConfig.selection)==null?void 0:b.profileId)!==void 0){const d=e.urlConfig.selection.profileId;if(d===""||d==="none")c&&(c.checked=!0),e.state.selectedProfileId=null;else{const h=l.get(d);h&&(h.checked=!0,e.state.selectedProfileId=d)}}const u=e.canvas;return u&&u.addEventListener("click",async d=>{var g,P,v;if(d.button!==0||(g=e.signal)!=null&&g.aborted||(P=e.gpuGuard)!=null&&P.hasFailed()||e.state.mode==="solids")return;const h=u.getBoundingClientRect(),x=d.clientX-h.left,B=d.clientY-h.top;let y=null;try{y=e.gpuGuard?await e.gpuGuard.callAsync("Renderer.pick",()=>e.renderer.pick(x,B)):await e.renderer.pick(x,B)}catch{return}if((v=e.signal)!=null&&v.aborted)return;if(!y||!n.has(y)){c&&(c.checked=!0),e.state.selectedSectionId=null,e.state.selectedProfileId=null,e.applySceneState();return}const C=n.get(y);if(C){if(C.type==="section"){e.state.selectedSectionId=C.id,e.state.selectedProfileId=null;const T=r.get(C.id);T&&(T.checked=!0),c&&(c.checked=!0),e.elements.toggleSections.checked||(e.elements.toggleSections.checked=!0,e.state.visibility.sections=!0)}else if(C.type==="profile"){e.state.selectedProfileId=C.id,e.state.selectedSectionId=null;const T=l.get(C.id);T&&(T.checked=!0),e.elements.toggleProfiles.checked||(e.elements.toggleProfiles.checked=!0,e.state.visibility.profiles=!0)}e.applySceneState()}},t),{hasProfileNoneOption:c!==null}}const Oe=1e-6,En=.001,dr=En+1e-4,Pn=.001;function ei(e,t,n){return Math.min(Math.max(e,t),n)}function At(e,t,n,o,i,s){return(n-e)*(s-t)-(o-t)*(i-e)}function fr(e,t){const n=Math.floor(t.length/3),o=new Int32Array(n*3);for(let i=0;i<n;i+=1){const s=i*3,a=t[s]|0;let r=t[s+1]|0,l=t[s+2]|0;const c=e[a*2],u=e[a*2+1],m=e[r*2],b=e[r*2+1],d=e[l*2],h=e[l*2+1];if(At(c,u,m,b,d,h)<0){const B=r;r=l,l=B}o[s]=a,o[s+1]=r,o[s+2]=l}return o}function Fo(e,t,n,o){const i=Math.floor(e.length/2),s=new Float32Array(i*3);for(let a=0;a<n.length;a+=3){const r=n[a],l=n[a+1],c=n[a+2];if(r<0||l<0||c<0||r>=i||l>=i||c>=i)continue;const u=e[r*2],m=e[r*2+1],b=t[r],d=e[l*2],h=e[l*2+1],x=t[l],B=e[c*2],y=e[c*2+1],C=t[c],g=d-u,P=x-b,v=h-m,T=B-u,p=C-b,E=y-m;let w,f,S;o==="up"?(w=P*E-v*p,f=v*T-g*E,S=g*p-P*T):(w=p*v-E*P,f=E*g-T*v,S=T*P-p*g),s[r*3]+=w,s[r*3+1]+=f,s[r*3+2]+=S,s[l*3]+=w,s[l*3+1]+=f,s[l*3+2]+=S,s[c*3]+=w,s[c*3+1]+=f,s[c*3+2]+=S}for(let a=0;a<i;a+=1){const r=s[a*3],l=s[a*3+1],c=s[a*3+2],u=Math.hypot(r,l,c);if(u<=Oe){s[a*3]=0,s[a*3+1]=o==="up"?1:-1,s[a*3+2]=0;continue}s[a*3]=r/u,s[a*3+1]=l/u,s[a*3+2]=c/u}return s}const hr=e=>{const t=Math.hypot(e[0],e[1],e[2]);return t<=Oe?[0,1,0]:[e[0]/t,e[1]/t,e[2]/t]},Oo=(e,t,n)=>hr([e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n]);function mr(e,t,n,o,i,s){const a=n.length;if(a===0)return{verticesXZ:[],triangles:[],top:[],bottom:[]};const r=new Int32Array(a),l=[],c=[],u=[],m=[],b=[],d=new Map,h=(v,T)=>i==="x"?Math.abs(v-s)<=En:Math.abs(T-s)<=En,x=(v,T)=>`${v},${T}`,B=v=>Math.floor(v/Pn);for(let v=0;v<a;v+=1){const T=e[v*2],p=e[v*2+1];if(!h(T,p)){const L=u.length;l.push(T),c.push(p),u.push(n[v]),m.push(o[v]),b.push(1),r[v]=L;continue}const E=B(T),w=B(p);let f=-1;const S=Pn*Pn;for(let L=-1;L<=1&&f===-1;L+=1)for(let F=-1;F<=1&&f===-1;F+=1){const z=d.get(x(E+L,w+F));if(z)for(const M of z){const I=l[M]/b[M],A=c[M]/b[M];if((T-I)*(T-I)+(p-A)*(p-A)<=S){f=M;break}}}if(f===-1){f=u.length,l.push(T),c.push(p),u.push(n[v]),m.push(o[v]),b.push(1);const L=x(E,w),F=d.get(L);F?F.push(f):d.set(L,[f])}else l[f]+=T,c[f]+=p,u[f]+=n[v],m[f]+=o[v],b[f]+=1;r[v]=f}const y=new Array(l.length*2),C=new Array(u.length),g=new Array(m.length);for(let v=0;v<u.length;v+=1){const T=1/b[v];y[v*2]=l[v]*T,y[v*2+1]=c[v]*T,C[v]=u[v]*T,g[v]=m[v]*T}const P=[];for(let v=0;v+2<t.length;v+=3){const T=r[t[v]],p=r[t[v+1]],E=r[t[v+2]];if(T===p||p===E||E===T)continue;const w=y[T*2],f=y[T*2+1],S=y[p*2],L=y[p*2+1],F=y[E*2],z=y[E*2+1],M=At(w,f,S,L,F,z);Math.abs(M)<=Oe||P.push(T,p,E)}return{verticesXZ:y,triangles:P,top:C,bottom:g}}function nn(e,t,n,o,i,s,a){const r=Math.floor(e.length/2),l=Math.floor(t.length/3);if(r<3||l<1||e.length!==r*2||t.length!==l*3||n.length!==r||o.length!==r)return{verticesXZ:[],triangles:[],top:[],bottom:[]};const c=[],u=[],m=[],b=[],d=new Int32Array(r);d.fill(-1);const h=new Map,x=p=>Math.abs(p-s)<=dr?s:p,B=p=>x(i==="x"?e[p*2]:e[p*2+1]),y=p=>{const E=B(p);return a==="max"?E<=s+Oe:E>=s-Oe},C=(p,E)=>{const w=p<E?p:E,f=p<E?E:p;return BigInt(w)<<32n|BigInt(f)},g=p=>{const E=d[p];if(E!==-1)return E;const w=u.length;d[p]=w;let f=e[p*2],S=e[p*2+1];return i==="x"?f=x(f):S=x(S),c.push(f,S),u.push(n[p]),m.push(o[p]),w},P=(p,E)=>{const w=B(p),f=B(E);if(Math.abs(w-s)<=Oe)return g(p);if(Math.abs(f-s)<=Oe)return g(E);const S=C(p,E),L=h.get(S);if(L!==void 0)return L;const F=e[p*2],z=e[p*2+1],M=e[E*2],I=e[E*2+1],A=n[p],G=o[p],V=n[E],O=o[E],j=f-w,R=Math.abs(j)<=Oe?0:ei((s-w)/j,0,1);let _=F+(M-F)*R,k=z+(I-z)*R;i==="x"?_=s:k=s;const D=A+(V-A)*R,Y=G+(O-G)*R,$=u.length;return h.set(S,$),c.push(_,k),u.push(D),m.push(Y),$},v=(p,E,w)=>{if(p===E||E===w||w===p)return;const f=c[p*2],S=c[p*2+1],L=c[E*2],F=c[E*2+1],z=c[w*2],M=c[w*2+1],I=At(f,S,L,F,z,M);Math.abs(I)<=Oe||b.push(p,E,w)},T=(p,E,w)=>{const f=[y(p),y(E),y(w)];if(!f[0]&&!f[1]&&!f[2])return;if(f[0]&&f[1]&&f[2]){v(g(p),g(E),g(w));return}const S=[],L=M=>{(S.length===0||S[S.length-1]!==M)&&S.push(M)},F=[p,E,w];for(let M=0;M<3;M+=1){const I=F[M],A=F[(M+1)%3],G=f[M],V=f[(M+1)%3];G&&V?L(g(A)):G&&!V?L(P(I,A)):!G&&V&&(L(P(I,A)),L(g(A)))}if(S.length>1&&S[0]===S[S.length-1]&&S.pop(),S.length<3)return;const z=S[0];for(let M=1;M+1<S.length;M+=1)v(z,S[M],S[M+1])};for(let p=0;p<l;p+=1){const E=p*3,w=t[E]|0,f=t[E+1]|0,S=t[E+2]|0;w<0||f<0||S<0||w>=r||f>=r||S>=r||T(w,f,S)}return mr(c,b,u,m,i,s)}function pr(e,t,n,o,i,s){const a=Math.floor(e.length/2),r=Math.floor(t.length/3);if(a<3||r<1||e.length!==a*2||t.length!==r*3||n.length!==a||o.length!==a)return{verticesXZ:[],triangles:[],top:[],bottom:[]};let l={verticesXZ:e,triangles:t,top:n,bottom:o};return i<Number.POSITIVE_INFINITY&&(l=nn(l.verticesXZ,l.triangles,l.top,l.bottom,"x",i,"max")),s<Number.POSITIVE_INFINITY&&(l=nn(l.verticesXZ,l.triangles,l.top,l.bottom,"z",s,"max")),l}function gr(e,t,n,o,i,s=Number.NEGATIVE_INFINITY){const a=Math.floor(e.length/2),r=Math.floor(t.length/3);if(a<3||r<1||e.length!==a*2||t.length!==r*3||n.length!==a||o.length!==a)return{verticesXZ:[],triangles:[],top:[],bottom:[]};let l={verticesXZ:e,triangles:t,top:n,bottom:o};return i>Number.NEGATIVE_INFINITY&&(l=nn(l.verticesXZ,l.triangles,l.top,l.bottom,"x",i,"min")),s>Number.NEGATIVE_INFINITY&&(l=nn(l.verticesXZ,l.triangles,l.top,l.bottom,"z",s,"min")),l}function br(e,t,n,o,i){const s=Math.floor(e.length/2),a=Math.floor(t.length/3);if(s<3||a<1||e.length!==s*2||t.length!==a*3||n.length!==s||o.length!==s)return{verticesXZ:[],triangles:[],boundaryTriangles:[],top:[],bottom:[],topNormals:[],bottomNormals:[]};const r=fr(e,t),l=Fo(e,n,r,"up"),c=Fo(e,o,r,"down"),u=1e-5,m=1e-4,b=(w,f)=>{const S=Math.round(w.x/u),L=Math.round(w.z/u),F=Math.round(w.top/u),z=Math.round(w.bottom/u),M=Math.round(w.nTop[0]/m),I=Math.round(w.nTop[1]/m),A=Math.round(w.nTop[2]/m),G=Math.round(w.nBottom[0]/m),V=Math.round(w.nBottom[1]/m),O=Math.round(w.nBottom[2]/m);return`${S},${L},${F},${z},${M},${I},${A},${G},${V},${O}${f?"|cap":""}`},d=[],h=[],x=[],B=[],y=[],C=[],g=[],P=new Map,v=(w,f)=>{const S=b(w,f),L=P.get(S);if(L!==void 0)return L;const F=h.length;return P.set(S,F),d.push(w.x,w.z),h.push(w.top),x.push(w.bottom),B.push(w.nTop[0],w.nTop[1],w.nTop[2]),y.push(w.nBottom[0],w.nBottom[1],w.nBottom[2]),F},T=(w,f,S,L,F)=>{if(L){let G=At(w.x,w.z,f.x,f.z,S.x,S.z);if(G<0){const _=f;f=S,S=_,G=-G}const V=[0,-1,0];w={...w,nTop:V},f={...f,nTop:V},S={...S,nTop:V};const O=v(w,L),j=v(f,L),R=v(S,L);if(g.push(O,j,R),O===j||j===R||R===O||Math.abs(G)<=Oe)return;C.push(O,j,R);return}let z=At(w.x,w.z,f.x,f.z,S.x,S.z);if(F!==0&&z*F<0){const G=f;f=S,S=G,z=-z}const M=v(w,L),I=v(f,L),A=v(S,L);g.push(M,I,A),!(M===I||I===A||A===M)&&(Math.abs(z)<=Oe||C.push(M,I,A))},p=w=>w.top>i?{...w,top:i}:w,E=(w,f)=>{const S=f.top-w.top;if(Math.abs(S)<=Oe)return{...w,top:i};const L=ei((i-w.top)/S,0,1);return{x:w.x+(f.x-w.x)*L,z:w.z+(f.z-w.z)*L,top:i,bottom:w.bottom+(f.bottom-w.bottom)*L,nTop:Oo(w.nTop,f.nTop,L),nBottom:Oo(w.nBottom,f.nBottom,L)}};for(let w=0;w<a;w+=1){const f=w*3,S=t[f]|0,L=t[f+1]|0,F=t[f+2]|0;if(S<0||L<0||F<0||S>=s||L>=s||F>=s)continue;const z={x:e[S*2],z:e[S*2+1],top:n[S],bottom:o[S],nTop:[l[S*3],l[S*3+1],l[S*3+2]],nBottom:[c[S*3],c[S*3+1],c[S*3+2]]},M={x:e[L*2],z:e[L*2+1],top:n[L],bottom:o[L],nTop:[l[L*3],l[L*3+1],l[L*3+2]],nBottom:[c[L*3],c[L*3+1],c[L*3+2]]},I={x:e[F*2],z:e[F*2+1],top:n[F],bottom:o[F],nTop:[l[F*3],l[F*3+1],l[F*3+2]],nBottom:[c[F*3],c[F*3+1],c[F*3+2]]},A=At(z.x,z.z,M.x,M.z,I.x,I.z),G=A===0?0:Math.sign(A),V=z.top>i+Oe,O=M.top>i+Oe,j=I.top>i+Oe,R=(V?1:0)+(O?1:0)+(j?1:0);if(R===0){T(z,M,I,!1,G);continue}if(R===3){T(p(z),p(M),p(I),!0,G);continue}if(R===1){let Q=z,K=M,ee=I;O?(Q=M,K=I,ee=z):j&&(Q=I,K=z,ee=M);const oe=E(Q,K),te=E(Q,ee),X=p(Q);T(K,ee,oe,!1,G),T(ee,te,oe,!1,G),T(X,oe,te,!0,G);continue}let _=z,k=M,D=I;O?j||(_=I,k=z,D=M):(_=M,k=I,D=z);const Y=E(k,_),$=E(D,_),U=p(k),q=p(D);T(_,Y,$,!1,G),T(U,q,$,!0,G),T(U,$,Y,!0,G)}return{verticesXZ:d,triangles:C,boundaryTriangles:g,top:h,bottom:x,topNormals:B,bottomNormals:y}}class xr{constructor(t,n,o,i,s,a){N(this,"baseMeshByObjectId",new Map);N(this,"objectsBySoilId",new Map);N(this,"lastCropKey","");this.device=t,this.solidsModel=n,this.labelGeometryBySoilId=i,this.defaults=s,this.gpuGuard=a;for(const r of o){if(r.objectType!=="solid"&&r.objectType!=="solidWireframe"&&r.objectType!=="solidEdge"||(this.baseMeshByObjectId.set(r.id,r.mesh),!r.soilId))continue;const l=this.objectsBySoilId.get(r.soilId)??{};r.objectType==="solid"?l.solid=r:r.objectType==="solidEdge"?l.edges=r:l.wireframe=r,this.objectsBySoilId.set(r.soilId,l)}}setObjectMesh(t,n){const o=this.baseMeshByObjectId.get(t.id);o&&t.mesh!==o&&t.mesh.vertexBuffer.destroy(),t.mesh=n}restoreBaseMeshes(){for(const t of this.objectsBySoilId.values()){if(t.solid){const n=this.baseMeshByObjectId.get(t.solid.id);n&&this.setObjectMesh(t.solid,n)}if(t.wireframe){const n=this.baseMeshByObjectId.get(t.wireframe.id);n&&this.setObjectMesh(t.wireframe,n)}if(t.edges){const n=this.baseMeshByObjectId.get(t.edges.id);n&&this.setObjectMesh(t.edges,n)}}}rebuild(t){var n;if(!((n=this.gpuGuard)!=null&&n.hasFailed()))try{const o=`${t.xMin.toFixed(5)}|${t.yMax.toFixed(5)}|${t.zMax.toFixed(5)}`;if(o===this.lastCropKey)return;this.lastCropKey=o;const i=t.xMin>this.defaults.xMin+1e-4,s=t.zMax<this.defaults.zMax-1e-4,a=i||s,r=t.yMax<this.defaults.yMax-1e-4;if(this.labelGeometryBySoilId.clear(),!a&&!r){const{verticesXZ:m}=this.solidsModel.mesh,b=Math.floor(m.length/2);for(const d of this.solidsModel.solids){const h=this.solidsModel.surfaces[d.top],x=this.solidsModel.surfaces[d.bottom];!h||!x||h.length!==b||x.length!==b||this.labelGeometryBySoilId.set(d.soilId,{verticesXZ:m,top:h,bottom:x})}this.restoreBaseMeshes();return}const{verticesXZ:l,triangles:c}=this.solidsModel.mesh,u=Math.floor(l.length/2);for(const m of this.solidsModel.solids){const b=this.objectsBySoilId.get(m.soilId);if(!(b!=null&&b.solid)&&!(b!=null&&b.wireframe)&&!(b!=null&&b.edges))continue;const d=this.solidsModel.surfaces[m.top],h=this.solidsModel.surfaces[m.bottom];if(!d||!h||d.length!==u||h.length!==u)continue;let x=l,B=c,y=d,C=h,g,P,v;if(a){if(i){const p=gr(x,B,y,C,t.xMin);x=p.verticesXZ,B=p.triangles,y=p.top,C=p.bottom}if(s){const p=pr(x,B,y,C,Number.POSITIVE_INFINITY,t.zMax);x=p.verticesXZ,B=p.triangles,y=p.top,C=p.bottom}}if(r){const p=br(x,B,y,C,t.yMax);x=p.verticesXZ,B=p.triangles,v=p.boundaryTriangles,y=p.top,C=p.bottom,g=p.topNormals,P=p.bottomNormals}const T=this.gpuGuard?this.gpuGuard.call("createTinVolumeMeshes",()=>Tn(this.device,x,B,y,C,g,P,v)):Tn(this.device,x,B,y,C,g,P,v);b.solid&&this.setObjectMesh(b.solid,T.solid),b.wireframe&&this.setObjectMesh(b.wireframe,T.wireframe),b.edges&&this.setObjectMesh(b.edges,T.edges),this.labelGeometryBySoilId.set(m.soilId,{verticesXZ:x,top:y,bottom:C})}}catch(o){this.gpuGuard&&!this.gpuGuard.hasFailed()&&this.gpuGuard.fail("SolidsMeshCropper.rebuild",o)}}}const Ht=e=>`${e.toFixed(2)} m`,yr=(e,t)=>{const n=Math.abs(t-e),o=.01;return!Number.isFinite(n)||n<=0?o:Math.max(o,n/400)};function vr(e){var v,T,p,E,w;const t=e.signal?{signal:e.signal}:void 0,n=e.sceneData.solidsModel??null,o=f=>{const S=Number.parseFloat(e.elements.solidsSpacing.max);return Number.isFinite(S)?Math.min(Math.max(0,f),S):Math.max(0,f)},i=()=>{const f=Number.parseFloat(e.elements.solidsSpacing.value);return Number.isFinite(f)?o(f):0},s=f=>{const S=o(f);e.elements.solidsSpacing.value=S.toString(),e.state.solids.verticalSpacing=S,x()},a=n?{xMin:n.extent.xMin,xMax:n.extent.xMax,yMin:n.extent.yBase,yMax:e.bounds.max[1],zMin:n.extent.zMin,zMax:n.extent.zMax}:{xMin:e.bounds.min[0],xMax:e.bounds.max[0],yMin:e.bounds.min[1],yMax:e.bounds.max[1],zMin:e.bounds.min[2],zMax:e.bounds.max[2]},r={xMin:a.xMin,yMax:a.yMax,zMax:a.zMax};((v=e.urlConfig.solids)==null?void 0:v.verticalSpacing)!==void 0&&(e.elements.solidsSpacing.value=o(e.urlConfig.solids.verticalSpacing).toString()),e.state.solids.verticalSpacing=i(),e.state.solids.crop={xMin:((T=e.urlConfig.solids)==null?void 0:T.cropX)!==void 0?Math.min(Math.max(a.xMin,e.urlConfig.solids.cropX),a.xMax):r.xMin,yMax:((p=e.urlConfig.solids)==null?void 0:p.cropY)!==void 0?Math.min(Math.max(a.yMin,e.urlConfig.solids.cropY),a.yMax):r.yMax,zMax:((E=e.urlConfig.solids)==null?void 0:E.cropZ)!==void 0?Math.min(Math.max(a.zMin,e.urlConfig.solids.cropZ),a.zMax):r.zMax};const l=(f,S,L,F,z)=>{f.min=L.toString(),f.max=F.toString(),f.step=yr(L,F).toString(),f.value=z.toString(),S.textContent=Ht(z)};l(e.elements.solidsClipX,e.elements.solidsClipXValue,a.xMin,a.xMax,e.state.solids.crop.xMin),l(e.elements.solidsClipY,e.elements.solidsClipYValue,a.yMin,a.yMax,e.state.solids.crop.yMax),l(e.elements.solidsClipZ,e.elements.solidsClipZValue,a.zMin,a.zMax,e.state.solids.crop.zMax);const c=f=>Math.min(Math.max(a.xMin,f),a.xMax),u=f=>Math.min(Math.max(a.yMin,f),a.yMax),m=f=>Math.min(Math.max(a.zMin,f),a.zMax),b=()=>{const f=Number.parseFloat(e.elements.solidsClipX.value);return Number.isFinite(f)?c(f):r.xMin},d=()=>{const f=Number.parseFloat(e.elements.solidsClipY.value);return Number.isFinite(f)?u(f):r.yMax},h=()=>{const f=Number.parseFloat(e.elements.solidsClipZ.value);return Number.isFinite(f)?m(f):r.zMax},x=()=>{e.elements.solidsSpacingValue.textContent=`${e.state.solids.verticalSpacing.toFixed(2)} m`},B=()=>{e.elements.solidsClipXValue.textContent=Ht(e.state.solids.crop.xMin),e.elements.solidsClipYValue.textContent=Ht(e.state.solids.crop.yMax),e.elements.solidsClipZValue.textContent=Ht(e.state.solids.crop.zMax)},y=n?new xr(e.device,n,e.objects,e.solidsLabelGeometryBySoilId,r,e.gpuGuard):null,C=()=>{y&&y.rebuild(e.state.solids.crop)};e.elements.solidsSpacing.addEventListener("input",()=>{s(i()),e.applySceneState()},t),e.elements.solidsClipX.addEventListener("input",()=>{e.state.solids.crop.xMin=c(b()),B(),C(),e.applySceneState()},t),e.elements.solidsClipY.addEventListener("input",()=>{e.state.solids.crop.yMax=u(d()),B(),C(),e.applySceneState()},t),e.elements.solidsClipZ.addEventListener("input",()=>{e.state.solids.crop.zMax=m(h()),B(),C(),e.applySceneState()},t);const g=new Map;if(e.elements.solidList.querySelectorAll("input[type='checkbox'][data-soil-id]").forEach(f=>{const S=f.dataset.soilId;S&&g.set(S,f)}),e.elements.solidList.style.visibility="hidden",n&&n.solids.length>0){e.state.solids.enabled.clear();for(const f of n.solids){let S=g.get(f.soilId);if(!S){const L=document.createElement("label");L.className="panel-option",S=document.createElement("input"),S.type="checkbox",S.checked=!0,S.dataset.soilId=f.soilId,g.set(f.soilId,S),L.appendChild(S),L.appendChild(document.createTextNode(f.name)),e.elements.solidList.appendChild(L)}S.checked&&e.state.solids.enabled.add(f.soilId),S.addEventListener("change",()=>{S.checked?e.state.solids.enabled.add(f.soilId):e.state.solids.enabled.delete(f.soilId),e.applySceneState()},t)}if(((w=e.urlConfig.solids)==null?void 0:w.enabled)!==void 0){const f=new Set(e.urlConfig.solids.enabled),S=f.has("*")||f.has("all");e.state.solids.enabled.clear();for(const L of n.solids){const F=g.get(L.soilId);if(!F)continue;const z=S||f.has(L.soilId);F.checked=z,z&&e.state.solids.enabled.add(L.soilId)}}e.elements.solidList.style.visibility="",e.elements.toggleSolids.disabled=!1,e.elements.solidsVisibilityInputs.forEach(f=>{f.disabled=!1}),e.elements.toggleSolidsEdges.disabled=!1,e.elements.toggleSolidsLabels.disabled=!e.hasSolidsLayerLabels,e.hasSolidsLayerLabels||(e.elements.toggleSolidsLabels.checked=!1,e.state.solids.showLabels=!1),e.elements.solidsSpacing.disabled=!1,e.elements.solidsClipX.disabled=!1,e.elements.solidsClipY.disabled=!1,e.elements.solidsClipZ.disabled=!1}else{const f=document.createElement("div");f.className="panel-option",f.textContent="No solids model loaded",e.elements.solidList.appendChild(f),e.elements.solidList.querySelectorAll("input[type='checkbox']").forEach(S=>{S.disabled=!0}),e.elements.solidList.style.visibility="",e.elements.toggleSolids.checked=!1,e.elements.toggleSolids.disabled=!0,e.elements.solidsVisibilityInputs.forEach(S=>{S.disabled=!0,S.value==="classic"&&(S.checked=!0)}),e.elements.toggleSolidsEdges.checked=!1,e.elements.toggleSolidsEdges.disabled=!0,e.elements.toggleSolidsLabels.checked=!1,e.elements.toggleSolidsLabels.disabled=!0,e.state.solids.showLabels=!1,e.elements.solidsSpacing.disabled=!0,e.elements.solidsClipX.disabled=!0,e.elements.solidsClipY.disabled=!0,e.elements.solidsClipZ.disabled=!0,e.state.visibility.solids=!1}return{rebuildMeshes:C,updateLabels:()=>{x(),B()}}}function Pr(e){const t={dark:{clearColor:{r:.08235294117647059,g:.08235294117647059,b:.08235294117647059,a:1}},light:{clearColor:{r:1,g:1,b:1,a:1}}};let n="dark",o="dark";return{applyTheme:r=>{n=r,o=e.toggleGtaoOnly.checked?"light":r,document.documentElement.dataset.theme=o,e.renderer.setClearColor(t[o].clearColor)},getActiveThemeName:()=>n,getRenderThemeName:()=>o,getPreferredTheme:()=>{if(typeof window>"u"||typeof window.matchMedia!="function")return"dark";try{return window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}catch{return"dark"}},readThemeValue:()=>{var l;return((l=e.themeInputs.find(c=>c.checked))==null?void 0:l.value)==="light"?"light":"dark"}}}function Mr(e){const t=new URLSearchParams(e),n={},o=_=>{const k=t.get(_);return k===null?void 0:k},i=_=>{const k=t.get(_);if(k===null)return;const D=Number.parseFloat(k);return Number.isFinite(D)?D:void 0},s=_=>{const k=t.get(_);if(k===null)return;const D=k.trim().toLowerCase();if(D==="1"||D==="true"||D==="yes"||D==="on")return!0;if(D==="0"||D==="false"||D==="no"||D==="off")return!1},a=_=>{const k=o(_);if(k===void 0)return;const D=k.split(",").map(Y=>Y.trim()).filter(Y=>Y.length>0);return D.length>0?D:[]},r=o("theme");(r==="light"||r==="dark")&&(n.theme=r);const l=o("mode");(l==="sections"||l==="solids")&&(n.mode=l);const c=s("panelCollapsed");c!==void 0&&(n.panelCollapsed=c);const u={};for(const[_,k]of[["terrain","terrain"],["grid","grid"],["sections","sections"],["profiles","profiles"],["solids","solids"]]){const D=s(_);D!==void 0&&(u[k]=D)}Object.keys(u).length>0&&(n.visibility=u);const m={},b=a("solidsEnabled");b!==void 0&&(m.enabled=b);const d=i("solidsSpacing");d!==void 0&&(m.verticalSpacing=d);const h=o("solidsVis");(h==="classic"||h==="wireframe"||h==="transparent")&&(m.displayMode=h);const x=s("solidsEdges");x!==void 0&&(m.highlightEdges=x);const B=s("solidsLabels");B!==void 0&&(m.showLabels=B);const y=i("cropX");y!==void 0&&(m.cropX=y);const C=i("cropY");C!==void 0&&(m.cropY=C);const g=i("cropZ");g!==void 0&&(m.cropZ=g),Object.keys(m).length>0&&(n.solids=m);const P={},v=o("sectionsVis");(v==="classic"||v==="transparent"||v==="wireframe")&&(P.displayMode=v);const T=s("sectionsEdges");T!==void 0&&(P.highlightEdges=T),Object.keys(P).length>0&&(n.sections=P);const p={},E=o("section");E!==void 0&&(p.sectionId=E);const w=o("profile");w!==void 0&&(p.profileId=w),Object.keys(p).length>0&&(n.selection=p);const f={},S=o("camMode");S==="perspective"?f.mode="perspective":(S==="orthographic"||S==="ortho"||S==="axonometric")&&(f.mode="axonometric");const L=i("camYawDeg"),F=i("camYaw");L!==void 0?f.yaw=L*Math.PI/180:F!==void 0&&(f.yaw=F);const z=i("camPitchDeg"),M=i("camPitch");z!==void 0?f.pitch=z*Math.PI/180:M!==void 0&&(f.pitch=M);const I=i("camDist");I!==void 0&&(f.distance=I);const A=i("camOrtho");A!==void 0&&(f.orthoScale=A);const G=o("camTarget");if(G!==void 0){const _=G.split(",").map(k=>Number.parseFloat(k.trim()));_.length>=3&&_.every(k=>Number.isFinite(k))&&(f.target=[_[0],_[1],_[2]])}Object.keys(f).length>0&&(n.camera=f);const V={},O=o("debugLabel");if(O!==void 0){const _=O.trim();V.label=_.length>0&&_!=="1"&&_.toLowerCase()!=="true"?_:"Label"}const j=s("debugLabelOnly");j!==void 0&&(V.labelOnly=j);const R=s("debugLabelNoBg");return R!==void 0&&(V.labelNoBg=R),Object.keys(V).length>0&&(n.debug=V),n}const $e=(e,t)=>{const n=Number.parseFloat(e.value);return Number.isFinite(n)?n:t};function Sr(e){var Yn,$n,Wn,Xn,Hn,qn,Kn,Zn,Qn,Jn,eo,to,no,oo,io,so,ao,ro,lo,co;const{device:t,colorFormat:n,sceneData:o,objects:i,renderer:s,camera:a,bounds:r,gpuGuard:l,textRenderer:c,textFont:u}=e,m=ja();if(!m)return null;const b=new AbortController,{signal:d}=b,h={signal:d},{panel:x,panelToggle:B,themeInputs:y,toggleTerrain:C,toggleGrid:g,toggleSections:P,toggleProfiles:v,toggleSolids:T,solidsVisibilityInputs:p,sectionsVisibilityInputs:E,toggleSectionsEdges:w,toggleSolidsEdges:f,toggleSolidsLabels:S,fitButton:L,projectionButton:F,modeInputs:z,viewPresetButtons:M,sectionList:I,profileList:A,solidList:G,solidsSpacing:V,solidsSpacingValue:O,solidsClipX:j,solidsClipXValue:R,solidsClipY:_,solidsClipYValue:k,solidsClipZ:D,solidsClipZValue:Y,gtaoSection:$,toggleGtao:U,toggleGtaoOnly:q,toggleGtaoMultiScale:Q,gtaoAmbientWeight:K,gtaoAmbientWeightValue:ee,gtaoAmbientRadiusScale:oe,gtaoAmbientRadiusScaleValue:te,gtaoStrength:X,gtaoStrengthValue:W,gtaoRadius:H,gtaoRadiusValue:ae,gtaoBias:ie,gtaoBiasValue:se,gtaoPower:ce,gtaoPowerValue:pe,gtaoThickness:be,gtaoThicknessValue:re,gtaoCorner:xe,gtaoCornerValue:ne,gtaoEdge:ve,gtaoEdgeValue:ye,gtaoSamples:Te,gtaoSamplesValue:Ee,gtaoBlur:Be,gtaoBlurValue:je,gtaoBlurDepth:Ue,gtaoBlurDepthValue:De,gtaoScale:Le,gtaoScaleValue:Pe,sectionsControls:we,profilesControls:Ye,solidsControls:ue,canvas:qe,terrainLabel:dt,gridLabel:ft}=m,ht=Array.from($.querySelectorAll("input")),Z=Mr(typeof window>"u"?"":window.location.search),Lt=Qa(x,B,d);Z.panelCollapsed!==void 0&&Lt.setCollapsed(Z.panelCollapsed),Z.mode&&z.forEach(J=>{J.checked=J.value===Z.mode}),Z.visibility&&(Z.visibility.terrain!==void 0&&(C.checked=Z.visibility.terrain),Z.visibility.grid!==void 0&&(g.checked=Z.visibility.grid),Z.visibility.sections!==void 0&&(P.checked=Z.visibility.sections),Z.visibility.profiles!==void 0&&(v.checked=Z.visibility.profiles),Z.visibility.solids!==void 0&&(T.checked=Z.visibility.solids)),(Yn=Z.solids)!=null&&Yn.displayMode&&p.forEach(J=>{var ge;J.checked=J.value===((ge=Z.solids)==null?void 0:ge.displayMode)}),($n=Z.sections)!=null&&$n.displayMode&&E.forEach(J=>{var ge;J.checked=J.value===((ge=Z.sections)==null?void 0:ge.displayMode)}),((Wn=Z.sections)==null?void 0:Wn.highlightEdges)!==void 0&&(w.checked=Z.sections.highlightEdges),((Xn=Z.solids)==null?void 0:Xn.highlightEdges)!==void 0&&(f.checked=Z.solids.highlightEdges),((Hn=Z.solids)==null?void 0:Hn.showLabels)!==void 0&&(S.checked=Z.solids.showLabels);const mt=()=>{var ge;return((ge=z.find(ze=>ze.checked))==null?void 0:ge.value)==="solids"?"solids":"sections"},Ae=()=>{var ge;const J=(ge=p.find(ze=>ze.checked))==null?void 0:ge.value;return J==="wireframe"||J==="transparent"||J==="classic"?J:"classic"},he=()=>{var ge;const J=(ge=E.find(ze=>ze.checked))==null?void 0:ge.value;return J==="transparent"||J==="classic"||J==="wireframe"?J:"classic"},de=o.solidsModel??null,He=new Map,Nt=new Map(o.soils.map(J=>[J.id,J])),pt=new Map;for(const J of i)J.objectType!=="solid"||!J.soilId||pt.set(J.soilId,J.layerIndex);let Vt=0;for(const J of pt.values())Vt=Math.max(Vt,J);const at=de&&c&&u?new ka(c,u,de,i,Nt,He,n,"depth24plus"):null,ti=at?(J,ge)=>{const{width:ze,height:et,dpr:tt}=s.getSize(),an={width:ze/tt,height:et/tt,dpr:tt},rn=x.getBoundingClientRect().left-12;at.render(J,ge,an,{uiRightLimitPx:rn})}:null,On=((qn=Z.debug)==null?void 0:qn.label)??((Kn=Z.debug)!=null&&Kn.labelOnly||(Zn=Z.debug)!=null&&Zn.labelNoBg?((Qn=de==null?void 0:de.solids[0])==null?void 0:Qn.name)??"Label":null),Rn=((Jn=Z.debug)==null?void 0:Jn.labelOnly)??!1,on=((eo=Z.debug)==null?void 0:eo.labelNoBg)??!1,zt=On&&c&&u?(()=>{const J=ke(),ge=ke(),ze=me(),et=ke(),tt=c.formatText(u,On,{centered:!0,pixelScale:1/64,color:[1,1,1,1],outlinePx:2,outlineColor:[0,0,0,.85],backgroundColor:on?[0,0,0,0]:[0,0,0,.35],backgroundPaddingPx:on?0:6,backgroundRadiusPx:on?0:6});return{render(an,_t){const rn=_t.getProjectionMatrix(),uo=_t.getViewMatrix();c.updateCamera(rn,uo),hi(J,uo)&&(wn(ge,J),ge[12]=0,ge[13]=0,ge[14]=0,ge[15]=1,_o(ze,_t.target),wn(et,ge),et[12]=ze[0],et[13]=ze[1],et[14]=ze[2],tt.setTransform(et),c.render(an,tt))},dispose(){tt.dispose()}}})():null,Un=zt?(J,ge)=>zt.render(J,ge):null,Je=Pr({themeInputs:y,toggleGtaoOnly:q,renderer:s}),ni=Je.getPreferredTheme(),oi=Z.theme??ni,_n=y.find(J=>J.value===oi);_n&&(_n.checked=!0),Je.applyTheme(Je.readThemeValue());const Me={mode:mt(),visibility:{terrain:C.checked,grid:g.checked,sections:P.checked,profiles:v.checked,solids:T.checked},sections:{displayMode:he(),highlightEdges:w.checked},solids:{enabled:new Set(((de==null?void 0:de.solids)??[]).map(J=>J.soilId)),verticalSpacing:0,displayMode:Ae(),highlightEdges:f.checked,showLabels:at!==null&&S.checked,crop:{xMin:r.min[0],yMax:r.max[1],zMax:r.max[2]}},gtao:{enabled:U.checked,aoOnly:q.checked,multiScale:Q.checked,intensity:$e(X,3.6),radius:$e(H,1.35),ambientRadiusScale:$e(oe,5.75),ambientWeight:$e(K,.35),bias:$e(ie,.03),power:$e(ce,1.5),thickness:$e(be,1),cornerBoost:$e(xe,0),edgePreserve:$e(ve,1),sampleCount:Math.round($e(Te,12)),blurSigma:$e(Be,1.4),blurDepthSigma:$e(Ue,.07),scale:$e(Le,1)},selectedSectionId:null,selectedProfileId:null};document.body.dataset.mode=Me.mode;const rt=Ka({canvas:qe,panel:x,camera:a,bounds:r,sceneData:o,solidsModel:de,solidLayerIndexBySoilId:pt,maxSolidLayerIndex:Vt,state:Me}),Ge=cr({objects:i,renderer:s,solidsModel:de,state:Me,getRenderThemeName:Je.getRenderThemeName,getSolidsSpacingOffset:rt.getSolidsSpacingOffset,debugLabelOverlayRenderer:Un,solidsLabelsOverlayRenderer:ti,debugLabelOnly:Rn,elements:{terrainLabel:dt,gridLabel:ft,sectionsControls:we,profilesControls:Ye,solidsControls:ue,gtaoSection:$,gtaoInputs:ht,toggleGtaoOnly:q,toggleGtaoMultiScale:Q,gtaoAmbientWeight:K,gtaoAmbientRadiusScale:oe,sectionList:I,profileList:A,solidList:G,toggleTerrain:C,toggleGrid:g,toggleSections:P}}),{hasProfileNoneOption:ii}=ur({sceneData:o,objects:i,renderer:s,canvas:qe,gpuGuard:l,state:Me,urlConfig:Z,applySceneState:Ge.applySceneState,signal:d,elements:{sectionList:I,profileList:A,toggleSections:P,toggleProfiles:v}}),sn=vr({device:t,bounds:r,sceneData:o,objects:i,gpuGuard:l,state:Me,urlConfig:Z,solidsLabelGeometryBySoilId:He,hasSolidsLayerLabels:at!==null,applySceneState:Ge.applySceneState,signal:d,elements:{solidList:G,toggleSolids:T,solidsVisibilityInputs:p,toggleSolidsEdges:f,toggleSolidsLabels:S,solidsSpacing:V,solidsSpacingValue:O,solidsClipX:j,solidsClipXValue:R,solidsClipY:_,solidsClipYValue:k,solidsClipZ:D,solidsClipZValue:Y}}),si=Za({state:Me,applySceneState:Ge.applySceneState,reapplyTheme:()=>Je.applyTheme(Je.getActiveThemeName()),signal:d,elements:{toggleGtao:U,toggleGtaoOnly:q,toggleGtaoMultiScale:Q,gtaoAmbientWeight:K,gtaoAmbientWeightValue:ee,gtaoAmbientRadiusScale:oe,gtaoAmbientRadiusScaleValue:te,gtaoStrength:X,gtaoStrengthValue:W,gtaoRadius:H,gtaoRadiusValue:ae,gtaoBias:ie,gtaoBiasValue:se,gtaoPower:ce,gtaoPowerValue:pe,gtaoThickness:be,gtaoThicknessValue:re,gtaoCorner:xe,gtaoCornerValue:ne,gtaoEdge:ve,gtaoEdgeValue:ye,gtaoSamples:Te,gtaoSamplesValue:Ee,gtaoBlur:Be,gtaoBlurValue:je,gtaoBlurDepth:Ue,gtaoBlurDepthValue:De,gtaoScale:Le,gtaoScaleValue:Pe}});(to=Z.camera)!=null&&to.mode&&(a.mode=Z.camera.mode),(((no=Z.camera)==null?void 0:no.yaw)!==void 0||((oo=Z.camera)==null?void 0:oo.pitch)!==void 0)&&a.setAngles(Z.camera.yaw??a.yaw,Z.camera.pitch??a.pitch);const kn=()=>{F.textContent=a.mode==="perspective"?"Perspective":"Orthographic"};kn(),y.forEach(J=>{J.addEventListener("change",()=>{J.checked&&(Je.applyTheme(Je.readThemeValue()),Ge.applySceneState())},h)});const ai={front:()=>({yaw:Math.PI/2,pitch:0}),back:()=>({yaw:-Math.PI/2,pitch:0}),left:()=>({yaw:Math.PI,pitch:0}),right:()=>({yaw:0,pitch:0}),top:()=>({yaw:a.yaw,pitch:Math.PI/2}),bottom:()=>({yaw:a.yaw,pitch:-Math.PI/2})};for(const J of M)J.addEventListener("click",()=>{const ge=J.dataset.view??"",ze=ai[ge];if(!ze)return;const{yaw:et,pitch:tt}=ze();a.setAngles(et,tt),rt.fitCameraToBounds(rt.getFitBounds())},h);const ri=()=>{Me.mode=mt(),document.body.dataset.mode=Me.mode,Ge.applySolidsVisibilityLock(Me.mode==="solids"),Me.mode==="sections"&&(V.value="0",Me.solids.verticalSpacing=0,sn.updateLabels()),Ge.applySceneState()};z.forEach(J=>J.addEventListener("change",ri,h)),C.addEventListener("change",()=>{Me.visibility.terrain=C.checked,Ge.applySceneState()},h),g.addEventListener("change",()=>{Me.visibility.grid=g.checked,Ge.applySceneState()},h),P.addEventListener("change",()=>{Me.visibility.sections=P.checked,Ge.applySceneState()},h),v.addEventListener("change",()=>{Me.visibility.profiles=v.checked,Ge.applySceneState()},h),T.addEventListener("change",()=>{Me.visibility.solids=T.checked,Ge.applySceneState()},h),p.forEach(J=>{J.addEventListener("change",()=>{J.checked&&(Me.solids.displayMode=Ae(),Ge.applySceneState())},h)}),E.forEach(J=>{J.addEventListener("change",()=>{J.checked&&(Me.sections.displayMode=he(),Ge.applySceneState())},h)}),w.addEventListener("change",()=>{Me.sections.highlightEdges=w.checked,Ge.applySceneState()},h),f.addEventListener("change",()=>{Me.solids.highlightEdges=f.checked,Ge.applySceneState()},h),S.addEventListener("change",()=>{Me.solids.showLabels=at!==null&&S.checked,Ge.applySceneState()},h),L.addEventListener("click",()=>{rt.fitCameraToBounds(rt.getFitBounds())},h),F.addEventListener("click",()=>{a.toggleProjection(),kn()},h);const li=((io=Z.camera)==null?void 0:io.target)!==void 0||((so=Z.camera)==null?void 0:so.distance)!==void 0||((ao=Z.camera)==null?void 0:ao.orthoScale)!==void 0;Ge.applySolidsVisibilityLock(Me.mode==="solids"),sn.rebuildMeshes(),sn.updateLabels(),si.updateLabels(),Ge.applySceneState();const jn=Xa({getActiveThemeName:Je.getActiveThemeName,panel:x,camera:a,state:Me,solidsModel:de,hasProfileNoneOption:ii});return jn(),li||rt.fitCameraToBounds(rt.getFitBounds()),(ro=Z.camera)!=null&&ro.target&&Ie(a.target,Z.camera.target[0],Z.camera.target[1],Z.camera.target[2]),((lo=Z.camera)==null?void 0:lo.distance)!==void 0&&(a.distance=Z.camera.distance),((co=Z.camera)==null?void 0:co.orthoScale)!==void 0&&(a.orthoScale=Z.camera.orthoScale),{hooks:{beforeRender:$a({sceneData:o,objects:i,renderer:s,camera:a,state:Me,getFitBounds:rt.getFitBounds,suppressVisibilityOverrides:!!(Un&&Rn)}),afterRender:jn},dispose:()=>{b.abort(),s.setOverlayRenderer(null),at==null||at.dispose(),zt==null||zt.dispose()}}}const wr=`// MSDF-based text rendering adapted from the WebGPU samples (textRenderingMsdf).
// Extended with optional outline + background rendering for better readability.

// Glyph quad positions (x in [0..1], y in [-1..0]) so that BMFont y-offset math maps naturally.
const glyphPos = array(vec2f(0.0, -1.0), vec2f(1.0, -1.0), vec2f(0.0, 0.0), vec2f(1.0, 0.0));

struct VertexInput {
  @builtin(vertex_index) vertex : u32,
  @builtin(instance_index) instance : u32,
};

struct VertexOutput {
  @builtin(position) position : vec4f,
  @location(0) texcoord : vec2f,
  @location(1) localPos : vec2f,
  @location(2) mode : f32,
};

struct Char {
  texOffset: vec2f,
  texExtent: vec2f,
  size: vec2f,
  offset: vec2f,
};

struct FormattedText {
  transform: mat4x4f,
  color: vec4f,
  outlineColor: vec4f,
  bgColor: vec4f,
  // params = (scale, outlinePx, bgPaddingPx, bgRadiusPx)
  params: vec4f,
  // sdfParams = (paddingRatio, distanceRange, _, _)
  sdfParams: vec4f,
  // bounds = (minX, minY, maxX, maxY) in text-space pixels (before scale)
  bounds: vec4f,
  chars: array<vec3f>,
};

struct Camera {
  projection: mat4x4f,
  view: mat4x4f,
};

// Font bindings
@group(0) @binding(0) var fontTexture: texture_2d<f32>;
@group(0) @binding(1) var fontSampler: sampler;
@group(0) @binding(2) var<storage> chars: array<Char>;

// Text bindings
@group(1) @binding(0) var<uniform> camera: Camera;
@group(1) @binding(1) var<storage> text: FormattedText;

fn sampleMsdf(texcoord: vec2f) -> f32 {
  let c = textureSample(fontTexture, fontSampler, texcoord);
  // Median of RGB distances for multi-channel SDF.
  return max(min(c.r, c.g), min(max(c.r, c.g), c.b));
}

// Signed distance to a rounded rectangle centered at the origin.
fn sdRoundRect(p: vec2f, halfSize: vec2f, radius: f32) -> f32 {
  // IQ's SDF: https://iquilezles.org/articles/distfunctions2d/
  let q = abs(p) - (halfSize - vec2f(radius));
  return length(max(q, vec2f(0.0))) + min(max(q.x, q.y), 0.0) - radius;
}

@vertex
fn vertexMain(input : VertexInput) -> VertexOutput {
  let entry = text.chars[input.instance];
  let isBackground = entry.z < 0.0;
  let scale = text.params.x;

  var output : VertexOutput;
  output.mode = select(0.0, 1.0, isBackground);

  if (isBackground) {
    let pad = text.params.z;
    let bounds = vec4f(text.bounds.xy - vec2f(pad), text.bounds.zw + vec2f(pad));

    // Map glyphPos from y in [-1..0] into uv in [0..1] for bounds interpolation.
    let uv = glyphPos[input.vertex] + vec2f(0.0, 1.0);
    let local = vec2f(mix(bounds.x, bounds.z, uv.x), mix(bounds.y, bounds.w, uv.y));

    output.localPos = local;
    output.texcoord = uv;
    output.position = camera.projection * camera.view * text.transform * vec4f(local * scale, 0.0, 1.0);
    return output;
  }

  let ch = chars[u32(entry.z)];
  let charPos = (glyphPos[input.vertex] * ch.size + entry.xy + ch.offset) * scale;

  output.position = camera.projection * camera.view * text.transform * vec4f(charPos, 0.0, 1.0);
  output.localPos = charPos;

  output.texcoord = glyphPos[input.vertex] * vec2f(1.0, -1.0);
  output.texcoord *= ch.texExtent;
  output.texcoord += ch.texOffset;
  return output;
}

@fragment
fn fragmentMain(input : VertexOutput) -> @location(0) vec4f {
  // WebGPU requires derivatives (\`dpdx\`, \`dpdy\`, \`fwidth\`) to be called in uniform control flow.
  // We draw background + glyphs in a single instanced draw, so we compute both paths
  // unconditionally and select the result by \`input.mode\` (per-instance constant).
  let bgMask = select(0.0, 1.0, input.mode > 0.5);

  // Background (optional).
  let pad = text.params.z;
  let bounds = vec4f(text.bounds.xy - vec2f(pad), text.bounds.zw + vec2f(pad));
  let center = (bounds.xy + bounds.zw) * 0.5;
  let halfSize = (bounds.zw - bounds.xy) * 0.5;
  let radius = max(0.0, min(text.params.w, min(halfSize.x, halfSize.y)));

  let dist = sdRoundRect(input.localPos - center, halfSize, radius);
  let aa = max(1e-6, fwidth(dist));
  let bgAlpha = smoothstep(aa, 0.0, dist);
  let bgA = text.bgColor.a * bgAlpha;
  let bgPremul = text.bgColor.rgb * bgA;

  // Glyph.
  // AA technique from Paul Houx: https://github.com/Chlumsky/msdfgen/issues/22#issuecomment-234958005
  let pxRange = max(text.sdfParams.y, 1e-6);
  let paddingRatio = clamp(text.sdfParams.x, 0.0, 1.0);
  let sz = vec2f(textureDimensions(fontTexture, 0));
  let dx = sz.x * length(vec2f(dpdxFine(input.texcoord.x), dpdyFine(input.texcoord.x)));
  let dy = sz.y * length(vec2f(dpdxFine(input.texcoord.y), dpdyFine(input.texcoord.y)));
  // Clamp the screen-space range so that very small glyphs don't turn into semi-transparent quads
  // (minification can make \`toPixels < 1\`, which prevents \`pxDist\` from reaching the full [-0.5..0.5] range).
  let toPixels = max(pxRange * inverseSqrt(dx * dx + dy * dy), 1.0);
  let sigDist = sampleMsdf(input.texcoord) - 0.5;
  let pxDist = sigDist * toPixels;

  let edgeWidth = 0.5;
  let fillAlpha = smoothstep(-edgeWidth, edgeWidth, pxDist);

  // Clamp outline thickness to the available padding so small glyphs don't fill the quad.
  let maxOutlinePx = max(0.0, toPixels * paddingRatio - edgeWidth);
  let outlinePx = min(max(0.0, text.params.y), maxOutlinePx);
  var outlineAlpha = 0.0;
  if (outlinePx > 0.0) {
    // Outside-only stroke: smooth outer edge at (-outlinePx), then fade into the fill edge at 0.
    let outer = smoothstep(-outlinePx - edgeWidth, -outlinePx + edgeWidth, pxDist);
    outlineAlpha = max(0.0, outer - fillAlpha);
  }

  let fillA = text.color.a * fillAlpha;
  let outlineA = text.outlineColor.a * outlineAlpha;
  let outA = fillA + outlineA * (1.0 - fillA);
  let glyphPremul = text.color.rgb * fillA + text.outlineColor.rgb * outlineA * (1.0 - fillA);

  let finalA = bgA * bgMask + outA * (1.0 - bgMask);
  if (finalA < 0.001) {
    discard;
  }
  let finalPremul = bgPremul * bgMask + glyphPremul * (1.0 - bgMask);
  return vec4f(finalPremul, finalA);
}
`,Qt=40,Mn=4;class Cr{constructor(t,n,o,i,s,a,r,l,c,u){N(this,"charCount");N(this,"defaultChar");N(this,"paddingRatio");N(this,"distanceRange");N(this,"disposed",!1);this.pipeline=t,this.bindGroup=n,this.lineHeight=o,this.chars=i,this.kernings=s,this.pageTextures=l,this.charsBuffer=c,this.onDispose=u;const m=Object.values(i);this.charCount=m.length,this.defaultChar=m[0],this.distanceRange=a,this.paddingRatio=r}dispose(){var t;if(!this.disposed){this.disposed=!0,(t=this.onDispose)==null||t.call(this),this.charsBuffer.destroy();for(const n of this.pageTextures)n.destroy();this.pageTextures=[]}}getChar(t){return this.chars[t]??this.defaultChar}getXAdvance(t,n=-1){const o=this.getChar(t);if(n>=0){const i=this.kernings.get(t);if(i)return o.xadvance+(i.get(n)??0)}return o.xadvance}}class Tr{constructor(t,n,o,i,s,a,r){N(this,"headerArray",new Float32Array(Qt));N(this,"headerDirty",!0);N(this,"disposed",!1);this.device=t,this.renderBundle=n,this.measurements=o,this.font=i,this.textBuffer=s,this.onDispose=r,this.headerArray.set(a),this.headerDirty=!1}dispose(){var t;this.disposed||(this.disposed=!0,(t=this.onDispose)==null||t.call(this),this.textBuffer.destroy())}getRenderBundle(){return this.disposed?this.renderBundle:(this.headerDirty&&(this.headerDirty=!1,this.device.queue.writeBuffer(this.textBuffer,0,this.headerArray.buffer,this.headerArray.byteOffset,this.headerArray.byteLength)),this.renderBundle)}setTransform(t){this.headerArray.set(t,0),this.headerDirty=!0}setColor(t,n,o,i=1){this.headerArray[16]=t,this.headerArray[17]=n,this.headerArray[18]=o,this.headerArray[19]=i,this.headerDirty=!0}setOutline(t,n,o,i,s=1){this.headerArray[20]=n,this.headerArray[21]=o,this.headerArray[22]=i,this.headerArray[23]=s,this.headerArray[29]=t,this.headerDirty=!0}setBackground(t,n,o,i,s,a=0){this.headerArray[24]=o,this.headerArray[25]=i,this.headerArray[26]=s,this.headerArray[27]=a,this.headerArray[30]=t,this.headerArray[31]=n,this.headerDirty=!0}setPixelScale(t){this.headerArray[28]=t,this.headerDirty=!0}getPixelScale(){return this.headerArray[28]}getBackgroundPaddingPx(){return this.headerArray[30]}getBoundsPx(){return{minX:this.headerArray[36],minY:this.headerArray[37],maxX:this.headerArray[38],maxY:this.headerArray[39]}}}class Br{constructor(t,n,o){N(this,"fontBindGroupLayout");N(this,"textBindGroupLayout");N(this,"pipelinePromise");N(this,"sampler");N(this,"cameraUniformBuffer");N(this,"renderBundleDescriptor");N(this,"cameraArray",new Float32Array(16*2));N(this,"fonts",new Set);N(this,"texts",new Set);N(this,"disposed",!1);this.device=t,this.renderBundleDescriptor={colorFormats:[n],depthStencilFormat:o},this.sampler=t.createSampler({label:"MSDF text sampler",minFilter:"linear",magFilter:"linear",mipmapFilter:"linear",maxAnisotropy:16}),this.cameraUniformBuffer=t.createBuffer({label:"MSDF camera uniform buffer",size:this.cameraArray.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM}),this.fontBindGroupLayout=t.createBindGroupLayout({label:"MSDF font bind group layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:2,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}}]}),this.textBindGroupLayout=t.createBindGroupLayout({label:"MSDF text bind group layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{}},{binding:1,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]});const i=t.createShaderModule({label:"MSDF text shader",code:wr});this.pipelinePromise=t.createRenderPipelineAsync({label:"msdf text pipeline",layout:t.createPipelineLayout({bindGroupLayouts:[this.fontBindGroupLayout,this.textBindGroupLayout]}),vertex:{module:i,entryPoint:"vertexMain"},fragment:{module:i,entryPoint:"fragmentMain",targets:[{format:n,blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",stripIndexFormat:"uint32"},depthStencil:{depthWriteEnabled:!1,depthCompare:"less-equal",format:o}})}async loadTexture(t){if(this.disposed)throw new Error("MsdfTextRenderer has been disposed");const n=await fetch(t),o=await createImageBitmap(await n.blob()),i=this.device.createTexture({label:`MSDF font texture ${t}`,size:[o.width,o.height,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return this.device.queue.copyExternalImageToTexture({source:o},{texture:i},[o.width,o.height]),i}async createFont(t){var T,p,E,w;if(this.disposed)throw new Error("MsdfTextRenderer has been disposed");const n=new URL(t,document.baseURI).toString(),i=await(await fetch(n)).json(),s=new URL(".",n).toString(),a=i.pages.map(f=>this.loadTexture(new URL(f,s).toString())),r=i.chars.length,l=Number.isFinite((T=i.distanceField)==null?void 0:T.distanceRange)?(p=i.distanceField)==null?void 0:p.distanceRange:4,c=Array.isArray((E=i.info)==null?void 0:E.padding)?((w=i.info)==null?void 0:w.padding)??[]:[];let u=Number.POSITIVE_INFINITY;for(const f of c)Number.isFinite(f)&&(u=Math.min(u,f));Number.isFinite(u)||(u=l);const m=l>0?Math.min(Math.max(u/l,0),1):1,b=this.device.createBuffer({label:"MSDF character layout buffer",size:r*Float32Array.BYTES_PER_ELEMENT*8,usage:GPUBufferUsage.STORAGE,mappedAtCreation:!0}),d=new Float32Array(b.getMappedRange()),h=1/i.common.scaleW,x=1/i.common.scaleH,B={};let y=0;for(const[f,S]of i.chars.entries()){const L={...S,charIndex:f};B[L.id]=L,d[y]=L.x*h,d[y+1]=L.y*x,d[y+2]=L.width*h,d[y+3]=L.height*x,d[y+4]=L.width,d[y+5]=L.height,d[y+6]=L.xoffset,d[y+7]=-L.yoffset,y+=8}b.unmap();const C=await Promise.all(a),g=this.device.createBindGroup({label:"msdf font bind group",layout:this.fontBindGroupLayout,entries:[{binding:0,resource:C[0].createView()},{binding:1,resource:this.sampler},{binding:2,resource:{buffer:b}}]}),P=new Map;if(i.kernings)for(const f of i.kernings){let S=P.get(f.first);S||(S=new Map,P.set(f.first,S)),S.set(f.second,f.amount)}let v;return v=new Cr(await this.pipelinePromise,g,i.common.lineHeight,B,P,l,m,C,b,()=>this.fonts.delete(v)),this.fonts.add(v),v}formatText(t,n,o={}){if(this.disposed)throw new Error("MsdfTextRenderer has been disposed");const i=this.measureText(t,n),s=i.printedCharCount+1,a=new Float32Array(Qt);a.set(ke(),0);const r=o.color??[1,1,1,1];a[16]=r[0],a[17]=r[1],a[18]=r[2],a[19]=r[3];const l=o.outlineColor??[0,0,0,1];a[20]=l[0],a[21]=l[1],a[22]=l[2],a[23]=l[3];const c=o.backgroundColor??[0,0,0,0];a[24]=c[0],a[25]=c[1],a[26]=c[2],a[27]=c[3],a[28]=o.pixelScale??1/512,a[29]=o.outlinePx??0,a[30]=o.backgroundPaddingPx??0,a[31]=o.backgroundRadiusPx??0,a[32]=t.paddingRatio,a[33]=t.distanceRange,a[34]=0,a[35]=0;const u=this.device.createBuffer({label:"msdf text buffer",size:(Qt+s*Mn)*Float32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,mappedAtCreation:!0}),m=new Float32Array(u.getMappedRange());m.set(a,0);let b=Qt;m[b]=0,m[b+1]=0,m[b+2]=-1,b+=Mn;let d=Number.POSITIVE_INFINITY,h=Number.POSITIVE_INFINITY,x=Number.NEGATIVE_INFINITY,B=Number.NEGATIVE_INFINITY;const y=(T,p,E,w)=>{const f=!!o.centered,S=f?-.5*i.lineWidths[E]:0,L=f?i.height*.5:0,F=T+S,z=p+L;m[b]=F,m[b+1]=z,m[b+2]=w.charIndex,b+=Mn;const M=F+w.xoffset,I=M+w.width,A=z-w.yoffset,G=A-w.height;d=Math.min(d,M),x=Math.max(x,I),h=Math.min(h,G),B=Math.max(B,A)};this.measureText(t,n,y),Number.isFinite(d)||(d=0,h=0,x=0,B=0),m[36]=d,m[37]=h,m[38]=x,m[39]=B,a[36]=d,a[37]=h,a[38]=x,a[39]=B,u.unmap();const C=this.device.createBindGroup({label:"msdf text bind group",layout:this.textBindGroupLayout,entries:[{binding:0,resource:{buffer:this.cameraUniformBuffer}},{binding:1,resource:{buffer:u}}]}),g=this.device.createRenderBundleEncoder(this.renderBundleDescriptor);g.setPipeline(t.pipeline),g.setBindGroup(0,t.bindGroup),g.setBindGroup(1,C),g.draw(4,s);const P=g.finish();let v;return v=new Tr(this.device,P,i,t,u,a,()=>this.texts.delete(v)),this.texts.add(v),v}measureText(t,n,o){let i=0;const s=[];let a=0,r=0,l=0,c=0,u=n.charCodeAt(0);for(let m=0;m<n.length;m+=1){const b=u;switch(u=m<n.length-1?n.charCodeAt(m+1):-1,b){case 10:s.push(a),l+=1,i=Math.max(i,a),a=0,r-=t.lineHeight;break;case 13:break;case 32:a+=t.getXAdvance(b,u);break;default:{const d=t.getChar(b);o==null||o(a,r,l,d),a+=t.getXAdvance(b,u),c+=1}}}return s.push(a),i=Math.max(i,a),{width:i,height:s.length*t.lineHeight,lineWidths:s,printedCharCount:c}}updateCamera(t,n){this.disposed||(this.cameraArray.set(t,0),this.cameraArray.set(n,16),this.device.queue.writeBuffer(this.cameraUniformBuffer,0,this.cameraArray.buffer,this.cameraArray.byteOffset,this.cameraArray.byteLength))}render(t,...n){if(this.disposed)return;const o=n.map(i=>i.getRenderBundle());t.executeBundles(o)}dispose(){if(!this.disposed){this.disposed=!0;for(const t of Array.from(this.texts))t.dispose();for(const t of Array.from(this.fonts))t.dispose();this.texts.clear(),this.fonts.clear(),this.cameraUniformBuffer.destroy()}}}const qt=document.querySelector("#gfx"),Sn=document.querySelector("#message"),_e=new Zi(ba),Bt={target:[12.308137893676758,-2.078213691711426,-.03483019769191742],yaw:2.59007353266014,pitch:.3322148625050682,distance:34.27910453694887,orthoScale:14.198870005209317,mode:"perspective"};function Ir(e){Sn&&(Sn.textContent=e,Sn.classList.add("visible"))}function Er(e){e.mode=Bt.mode,e.orthoScale=Bt.orthoScale,e.distance=Bt.distance,e.setAngles(Bt.yaw,Bt.pitch),Ie(e.target,...Bt.target)}async function Ar(){if(!qt)throw new Error("Canvas element not found.");document.body.classList.add("ready");let e,t,n;try{({device:e,context:t,format:n}=await Ki(qt,_e))}catch(d){_e.hasFailed()||_e.fail("initWebGPU",d);return}let o;try{o=_e.call("Renderer.constructor",()=>new Gs(qt,e,t,n,_e))}catch{return}let i=null,s=null;try{const d="depth24plus";i=new Br(e,n,d),s=await i.createFont("./assets/font/ya-hei-ascii-msdf.json")}catch(d){console.warn("MSDF font init failed:",d),i=null,s=null}const a=new Qi;new es(qt,a);const l=await qi("./data/");let c;try{c=_e.call("buildScene",()=>ia(e,o,l))}catch{return}o.setObjects(c.objects);const u=()=>{if(_e.hasFailed())return;try{o.resize()}catch(x){_e.hasFailed()||_e.fail("Renderer.resize",x);return}const{width:d,height:h}=o.getSize();a.setAspect(d/h)};u(),Er(a);const m=Sr({device:e,colorFormat:n,sceneData:l,objects:c.objects,renderer:o,camera:a,bounds:c.bounds,gpuGuard:_e,textRenderer:i,textFont:s});window.addEventListener("resize",u);const b=()=>{var d,h,x,B;if(!_e.hasFailed()){try{(h=m==null?void 0:(d=m.hooks).beforeRender)==null||h.call(d),o.render(a)}catch(y){_e.hasFailed()||_e.fail("Renderer.render",y);return}(B=m==null?void 0:(x=m.hooks).afterRender)==null||B.call(x),requestAnimationFrame(b)}};requestAnimationFrame(b)}Ar().catch(e=>{console.error(e),_e.hasFailed()||Ir(e instanceof Error?e.message:String(e))});
