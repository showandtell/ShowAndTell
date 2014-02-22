/*! Sortable 0.1.6 - MIT | git://github.com/rubaxa/Sortable.git */
!function(a){"use strict";"function"==typeof define&&define.amd?define(a):"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=a():window.Sortable=a()}(function(){"use strict";function a(a,c){this.el=a,this.options=c=c||{},c.group=c.group||Math.random(),c.handle=c.handle||null,c.draggable=c.draggable||a.children[0]&&a.children[0].nodeName||"li",c.ghostClass=c.ghostClass||"sortable-ghost",c.onAdd=b(this,c.onAdd||A),c.onUpdate=b(this,c.onUpdate||A),c.onRemove=b(this,c.onRemove||A),a[u]=c.group;for(var d in this)"_"===d.charAt(0)&&(this[d]=b(this,this[d]));e(a,"add",c.onAdd),e(a,"update",c.onUpdate),e(a,"remove",c.onRemove),e(a,"mousedown",this._onTapStart),e(a,"touchstart",this._onTapStart),e(a,"selectstart",this._onTapStart),e(a,"dragover",this._onDragOver),e(a,"dragenter",this._onDragOver),C.push(this._onDragOver)}function b(a,b){var c=B.call(arguments,2);return b.bind?b.bind.apply(b,[a].concat(c)):function(){return b.apply(a,c.concat(B.call(arguments)))}}function c(a,b,c){if(a){c=c||w,b=b.split(".");var d=b.shift().toUpperCase(),e=new RegExp("\\s("+b.join("|")+")\\s","g");do if(!(""!==d&&a.nodeName!=d||b.length&&((" "+a.className+" ").match(e)||[]).length!=b.length))return a;while(a!==c&&(a=a.parentNode))}return null}function d(a){a.dataTransfer.dropEffect="move",a.preventDefault()}function e(a,b,c){a.addEventListener(b,c,!1)}function f(a,b,c){a.removeEventListener(b,c,!1)}function g(a,b,c){if(a)if(a.classList)a.classList[c?"add":"remove"](b);else{var d=(" "+a.className+" ").replace(/\s+/g," ").replace(" "+b+" ","");a.className=d+(c?" "+b:"")}}function h(a,b,c){if(a&&a.style){if(void 0===c)return w.defaultView&&w.defaultView.getComputedStyle?c=w.defaultView.getComputedStyle(a,""):a.currentStyle&&(c=a.currentStyle),void 0===b?c:c[b];a.style[b]=c+("string"==typeof c?"":"px")}}function i(a,b,c){if(a){var d=a.getElementsByTagName(b),e=0,f=d.length;if(c)for(;f>e;e++)c(d[e],e);return d}return[]}function j(a){return a.draggable=!1}function k(){y=!1}var l,m,n,o,p,q,r,s,t,u="Sortable"+(new Date).getTime(),v=window,w=v.document,x=v.parseInt,y=!1,z=function(a,b){var c=w.createEvent("Event");return c.initEvent(a,!0,!0),c.item=b,c},A=function(){},B=[].slice,C=[];return a.prototype={constructor:a,_applyEffects:function(){g(l,this.options.ghostClass,!0)},_onTapStart:function(a){var b=a.touches&&a.touches[0],f=(b||a).target,g=this.options,h=this.el;if(g.handle&&(f=c(f,g.handle,h)),f=c(f,g.draggable,h),f&&"selectstart"==a.type&&"A"!=f.tagName&&"IMG"!=f.tagName&&f.dragDrop(),f&&!l&&f.parentNode===h){s=a,f.draggable=!0,i(f,"a",j),i(f,"img",j),b&&(s={target:f,clientX:b.clientX,clientY:b.clientY},this._onDragStart(s,!0),a.preventDefault()),e(this.el,"dragstart",this._onDragStart),e(this.el,"dragend",this._onDrop),e(w,"dragover",d);try{w.selection?w.selection.empty():window.getSelection().removeAllRanges()}catch(k){}}},_emulateDragOver:function(){if(t){h(m,"display","none");var a=w.elementFromPoint(t.clientX,t.clientY),b=a,c=this.options.group,d=C.length;do{if(b[u]===c){for(;d--;)C[d]({clientX:t.clientX,clientY:t.clientY,target:a,rootEl:b});break}a=b}while(b=b.parentNode);h(m,"display","")}},_onTouchMove:function(a){if(s){var b=a.touches[0],c=b.clientX-s.clientX,d=b.clientY-s.clientY;t=b,h(m,"webkitTransform","translate3d("+c+"px,"+d+"px,0)")}},_onDragStart:function(a,b){var c=a.target,d=a.dataTransfer;if(n=this.el,l=c,o=c.nextSibling,r=this.options.group,b){var f,g=c.getBoundingClientRect(),i=h(c);m=c.cloneNode(!0),h(m,"top",g.top-x(i.marginTop,10)),h(m,"left",g.left-x(i.marginLeft,10)),h(m,"width",g.width),h(m,"height",g.height),h(m,"opacity","0.8"),h(m,"position","fixed"),h(m,"zIndex","100000"),n.appendChild(m),f=m.getBoundingClientRect(),h(m,"width",2*g.width-f.width),h(m,"height",2*g.height-f.height),e(w,"touchmove",this._onTouchMove),e(w,"touchend",this._onDrop),this._loopId=setInterval(this._emulateDragOver,150)}else d.effectAllowed="move",d.setData("Text",c.textContent),e(w,"drop",this._onDrop);setTimeout(this._applyEffects)},_onDragOver:function(a){if(!y&&r===this.options.group&&(void 0===a.rootEl||a.rootEl===this.el)){var b=this.el,d=c(a.target,this.options.draggable,b);if(0===b.children.length||b.children[0]===m)b.appendChild(l);else if(d&&d!==l&&void 0!==d.parentNode[u]){p!==d&&(p=d,q=h(d));var e,f=d.getBoundingClientRect(),g=f.right-f.left,i=f.bottom-f.top,j=/left|right|inline/.test(q.cssFloat+q.display),n=(j?(a.clientX-f.left)/g:(a.clientY-f.top)/i)>.5,o=d.offsetWidth>l.offsetWidth,s=d.offsetHeight>l.offsetHeight,t=d.nextSibling;y=!0,setTimeout(k,30),e=j?d.previousElementSibling===l&&!o||n>.5&&o:d.nextElementSibling!==l&&!s||n>.5&&s,e&&!t?b.appendChild(l):d.parentNode.insertBefore(l,e?t:d)}}},_onDrop:function(a){clearInterval(this._loopId),f(w,"drop",this._onDrop),f(w,"dragover",d),f(this.el,"dragend",this._onDrop),f(this.el,"dragstart",this._onDragStart),f(this.el,"selectstart",this._onTapStart),f(w,"touchmove",this._onTouchMove),f(w,"touchend",this._onDrop),a&&(a.preventDefault(),a.stopPropagation(),m&&m.parentNode.removeChild(m),l&&(g(l,this.options.ghostClass,!1),n.contains(l)?l.nextSibling!==o&&l.dispatchEvent(z("update",l)):(n.dispatchEvent(z("remove",l)),l.dispatchEvent(z("add",l)))),n=l=m=o=s=t=p=q=r=null)},destroy:function(){var a=this.el,b=this.options;f(a,"add",b.onAdd),f(a,"update",b.onUpdate),f(a,"remove",b.onRemove),f(a,"mousedown",this._onTapStart),f(a,"touchstart",this._onTapStart),f(a,"selectstart",this._onTapStart),f(a,"dragover",this._onDragOver),f(a,"dragenter",this._onDragOver),Array.prototype.forEach.call(a.querySelectorAll("[draggable]"),function(a){a.removeAttribute("draggable")}),C.splice(C.indexOf(this._onDragOver),1),this._onDrop(),this.el=null}},a.utils={on:e,off:f,css:h,find:i,bind:b,closest:c,toggleClass:g},a.version="0.1.6",a});