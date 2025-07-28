"use strict";var _=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var g=_(function(S,q){
var f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=require('@stdlib/utils-define-read-only-accessor/dist'),x=require('@stdlib/utils-define-read-write-accessor/dist'),R=require('@stdlib/array-base-resolve-getter/dist'),d=require('@stdlib/array-base-accessors/dist');function w(t,e){var o,h,p,a,v,c,s,i,n;if(c=t.length,c<1)return[];a=d(t).accessors,h=a[0],p=a[1],o=R(e),s=o(e,0),i=o(e,1);function u(r){return f(this,"_i",r),this}for(m(u.prototype,s,l),x(u.prototype,i,y,N),f(u.prototype,"toJSON",O),v=[],n=0;n<c;n++)v.push(new u(n));return v;function l(){return this._i}function y(){return h(t,this._i)}function N(r){p(t,this._i,r)}function O(){var r;return r={},r[s]=this[s],r[i]=this[i],r}}q.exports=w
});var A=g();module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
