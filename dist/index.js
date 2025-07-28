"use strict";var m=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var l=m(function(V,g){
var q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=require('@stdlib/utils-define-read-only-accessor/dist'),R=require('@stdlib/utils-define-read-write-accessor/dist'),d=require('@stdlib/array-base-resolve-getter/dist'),w=require('@stdlib/array-base-accessors/dist');function A(t,e){var a,p,f,v,c,i,s,n,u;if(i=t.length,i<1)return[];v=w(t).accessors,p=v[0],f=v[1],a=d(e),s=a(e,0),n=a(e,1);function o(r){return q(this,"_i",r),this}for(x(o.prototype,s,y),R(o.prototype,n,N,O),q(o.prototype,"toJSON",_),c=[],u=0;u<i;u++)c.push(new o(u));return c;function y(){return this._i}function N(){return p(t,this._i)}function O(r){f(t,this._i,r)}function _(){var r,h;for(r={},h=0;h<i;h++)r[s]=this[s],r[n]=this[n];return r}}g.exports=A
});var J=l();module.exports=J;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
