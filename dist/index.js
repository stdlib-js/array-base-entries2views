"use strict";var _=function(t,e){return function(){try{return e||t((e={exports:{}}).exports,e),e.exports}catch(s){throw (e=0, s)}};};var g=_(function(S,q){
var f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=require('@stdlib/utils-define-read-only-accessor/dist'),x=require('@stdlib/utils-define-read-write-accessor/dist'),R=require('@stdlib/array-base-resolve-getter/dist'),d=require('@stdlib/array-base-accessors/dist');function w(t,e){var s,h,p,a,v,c,i,n,u;if(c=t.length,c<1)return[];a=d(t).accessors,h=a[0],p=a[1],s=R(e),i=s(e,0),n=s(e,1);function o(r){return f(this,"_i",r),this}for(m(o.prototype,i,l),x(o.prototype,n,y,N),f(o.prototype,"toJSON",O),v=[],u=0;u<c;u++)v.push(new o(u));return v;function l(){return this._i}function y(){return h(t,this._i)}function N(r){p(t,this._i,r)}function O(){var r;return r={},r[i]=this[i],r[n]=this[n],r}}q.exports=w
});var A=g();module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
