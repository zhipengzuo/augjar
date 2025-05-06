import{p as B}from"./chunk-TMUBEWPD-DMVI_WAY.js";import{D as F,s as P,g as W,q as S,r as z,b as T,c as D,_ as n,l as x,E as $,F as v,x as E,I as A,k as R}from"./AugmentMessage-x438MRdb.js";import{p as Y}from"./gitGraph-YCYPL57B-Cud_6B8A.js";import"./index-p4Dt6o3z.js";import"./github-hmyLGe0b.js";import"./augment-logo-C66YBCMf.js";import"./TextTooltipAugment-C0ygVke5.js";import"./IconButtonAugment-B0XoCIXT.js";import"./ButtonAugment-DueOA3_V.js";import"./Content-7zb4jZEH.js";import"./globals-D0QH3NT1.js";import"./chat-context-Dq8CyOam.js";import"./pen-to-square-DUXCbbi7.js";import"./file-paths-BEF4tZXQ.js";import"./CollapseButtonAugment-C3mt1EeR.js";import"./toggleHighContrast-CKn954qg.js";import"./preload-helper-Dv6uf1Os.js";import"./keypress-DD1aQVr0.js";import"./await_block-CgSfNRTu.js";import"./circle-backslash-B3nG_JMr.js";import"./expand-Ccnb8uFO.js";import"./index-CkBhOCxh.js";import"./ellipsis-Bz-dObmZ.js";import"./IconFilePath-DrTaSdRG.js";import"./LanguageIcon-e6aGriGL.js";import"./next-edit-types-904A5ehg.js";import"./MaterialIcon-9THX1buP.js";import"./mcp-logo-CiDifGtg.js";import"./play-DmB9WugJ.js";import"./_baseUniq-BUzPNbzO.js";import"./_basePickBy-BpDJR12m.js";import"./clone-Dt0APifM.js";var w={packet:[]},u=structuredClone(w),H=F.packet,I=n(()=>{const t=$({...H,...v().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),L=n(()=>u.packet,"getPacket"),f={pushWord:n(t=>{t.length>0&&u.packet.push(t)},"pushWord"),getPacket:L,getConfig:I,clear:n(()=>{E(),u=structuredClone(w)},"clear"),setAccTitle:P,getAccTitle:W,setDiagramTitle:S,getDiagramTitle:z,getAccDescription:T,setAccDescription:D},j=n(t=>{B(t,f);let e=-1,o=[],l=1;const{bitsPerRow:s}=f.getConfig();for(let{start:r,end:a,label:d}of t.blocks){if(a&&a<r)throw new Error(`Packet block ${r} - ${a} is invalid. End must be greater than start.`);if(r!==e+1)throw new Error(`Packet block ${r} - ${a??r} is not contiguous. It should start from ${e+1}.`);for(e=a??r,x.debug(`Packet block ${r} - ${e} with label ${d}`);o.length<=s+1&&f.getPacket().length<1e4;){const[g,p]=q({start:r,end:a,label:d},l,s);if(o.push(g),g.end+1===l*s&&(f.pushWord(o),o=[],l++),!p)break;({start:r,end:a,label:d}=p)}}f.pushWord(o)},"populate"),q=n((t,e,o)=>{if(t.end===void 0&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*o?[t,void 0]:[{start:t.start,end:e*o-1,label:t.label},{start:e*o,end:t.end,label:t.label}]},"getNextFittingBlock"),M={parse:n(async t=>{const e=await Y("packet",t);x.debug(e),j(e)},"parse")},N=n((t,e,o,l)=>{const s=l.db,r=s.getConfig(),{rowHeight:a,paddingY:d,bitWidth:g,bitsPerRow:p}=r,h=s.getPacket(),i=s.getDiagramTitle(),k=a+d,c=k*(h.length+1)-(i?0:a),m=g*p+2,b=A(e);b.attr("viewbox",`0 0 ${m} ${c}`),R(b,c,m,r.useMaxWidth);for(const[y,C]of h.entries())X(b,C,y,r);b.append("text").text(i).attr("x",m/2).attr("y",c-k/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),X=n((t,e,o,{rowHeight:l,paddingX:s,paddingY:r,bitWidth:a,bitsPerRow:d,showBits:g})=>{const p=t.append("g"),h=o*(l+r)+r;for(const i of e){const k=i.start%d*a+1,c=(i.end-i.start+1)*a-s;if(p.append("rect").attr("x",k).attr("y",h).attr("width",c).attr("height",l).attr("class","packetBlock"),p.append("text").attr("x",k+c/2).attr("y",h+l/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(i.label),!g)continue;const m=i.end===i.start,b=h-2;p.append("text").attr("x",k+(m?c/2:0)).attr("y",b).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",m?"middle":"start").text(i.start),m||p.append("text").attr("x",k+c).attr("y",b).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(i.end)}},"drawWord"),_={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},Bt={parser:M,db:f,renderer:{draw:N},styles:n(({packet:t}={})=>{const e=$(_,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles")};export{Bt as diagram};
