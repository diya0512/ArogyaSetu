"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[110],{66115:function(e,t,n){n.d(t,{$:function(){return id},A:function(){return iA},B:function(){return r3},C:function(){return e7},D:function(){return rX},F:function(){return r6},H:function(){return iC},N:function(){return L},Q:function(){return rY},R:function(){return q},U:function(){return T},W:function(){return ic},X:function(){return tX},Y:function(){return r8},Z:function(){return im},_:function(){return m},a:function(){return k},a6:function(){return r0},aO:function(){return rZ},aX:function(){return r9},ac:function(){return rz},an:function(){return e5},b:function(){return O},c:function(){return eL},d:function(){return A},e:function(){return S},f:function(){return tw},g:function(){return iu},h:function(){return ip},i:function(){return e8},j:function(){return iE},k:function(){return tE},l:function(){return tT},n:function(){return t_},o:function(){return tI},p:function(){return J},q:function(){return ty},r:function(){return eH},s:function(){return eD},t:function(){return e4},u:function(){return tg},v:function(){return j},w:function(){return Y},y:function(){return X},z:function(){return r5}});var r,i,s,a,o=n(69554),l=n(391),u=n(15504),c=n(13765),h=n(68701);n(57708),n(15056).Buffer;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}d.UNAUTHENTICATED=new d(null),d.GOOGLE_CREDENTIALS=new d("google-credentials-uid"),d.FIRST_PARTY=new d("first-party-uid"),d.MOCK_USER=new d("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f="12.11.0";function m(e){f=e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let p=new c.Yd("@firebase/firestore");function g(){return p.logLevel}function y(e,...t){if(p.logLevel<=c.in.DEBUG){let n=t.map(E);p.debug(`Firestore (${f}): ${e}`,...n)}}function v(e,...t){if(p.logLevel<=c.in.ERROR){let n=t.map(E);p.error(`Firestore (${f}): ${e}`,...n)}}function w(e,...t){if(p.logLevel<=c.in.WARN){let n=t.map(E);p.warn(`Firestore (${f}): ${e}`,...n)}}function E(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e,t,n){let r="Unexpected state";"string"==typeof t?r=t:n=t,_(e,r,n)}function _(e,t,n){let r=`FIRESTORE (${f}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(e){r+=" CONTEXT: "+n}throw v(r),Error(r)}function I(e,t,n,r){let i="Unexpected state";"string"==typeof n?i=n:r=n,e||_(t,i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends l.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class b{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(d.UNAUTHENTICATED))}shutdown(){}}class D{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class k{constructor(e){this.t=e,this.currentUser=d.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){I(void 0===this.o,42304);let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new C;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new C,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new C)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(I("string"==typeof t.accessToken,31837,{l:t}),new N(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return I(null===e||"string"==typeof e,2055,{h:e}),new d(e)}}class V{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=d.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);let e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class x{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new V(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(d.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class R{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class O{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,(0,o.rh)(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){I(void 0===this.o,3512);let n=e=>{null!=e.error&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.m;return this.m=e.token,y("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.V.getImmediate({optional:!0});e?r(e):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new R(this.p));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(I("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new R(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static newId(){let e=62*Math.floor(256/62),t="";for(;t.length<20;){let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let e=0;e<40;e++)n[e]=Math.floor(256*Math.random());return n}(0);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function M(e,t){return e<t?-1:e>t?1:0}function P(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.charAt(r),i=t.charAt(r);if(n!==i)return F(n)===F(i)?M(n,i):F(n)?1:-1}return M(e.length,t.length)}function F(e){let t=e.charCodeAt(0);return t>=55296&&t<=57343}function U(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $="__name__";class B{constructor(e,t,n){void 0===t?t=0:t>e.length&&T(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&T(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===B.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof B?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=B.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return M(e.length,t.length)}static compareSegments(e,t){let n=B.isNumericId(e),r=B.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?B.extractNumericId(e).compare(B.extractNumericId(t)):P(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return u.z8.fromString(e.substring(4,e.length-2))}}class q extends B{construct(e,t,n){return new q(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new A(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new q(t)}static emptyPath(){return new q([])}}let G=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class z extends B{construct(e,t,n){return new z(e,t,n)}static isValidIdentifier(e){return G.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),z.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===$}static keyField(){return new z([$])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new A(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new A(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new A(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new A(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new z(t)}static emptyPath(){return new z([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(q.fromString(e))}static fromName(e){return new j(q.fromString(e).popFirst(5))}static empty(){return new j(q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===q.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return q.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new q(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e,t,n){if(!n)throw new A(S.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Q(e){if(!j.isDocumentKey(e))throw new A(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function H(e){if(j.isDocumentKey(e))throw new A(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function W(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function Y(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":T(12329,{type:typeof e})}function X(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new A(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=Y(e);throw new A(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e,t){let n={typeString:e};return t&&(n.value=t),n}function Z(e,t){let n;if(!W(e))throw new A(S.INVALID_ARGUMENT,"JSON must be an object");for(let r in t)if(t[r]){let i=t[r].typeString,s="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}let a=e[r];if(i&&typeof a!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(void 0!==s&&a!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new A(S.INVALID_ARGUMENT,n);return!0}class ee{static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new ee(t,Math.floor((e-1e3*t)*1e6))}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new A(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new A(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?M(this.nanoseconds,e.nanoseconds):M(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Z(e,ee._jsonSchema))return new ee(e.seconds,e.nanoseconds)}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ee._jsonSchemaVersion="firestore/timestamp/1.0",ee._jsonSchema={type:J("string",ee._jsonSchemaVersion),seconds:J("number"),nanoseconds:J("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{static fromTimestamp(e){return new et(e)}static min(){return new et(new ee(0,0))}static max(){return new et(new ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}class en{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}en.UNKNOWN_ID=-1;class er{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new er(et.min(),j.empty(),-1)}static max(){return new er(et.max(),j.empty(),-1)}}class ei{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(e){if(e.code!==S.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&T(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ea((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof ea?t:ea.resolve(t)}catch(e){return ea.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ea.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ea.reject(t)}static resolve(e){return new ea((t,n)=>{t(e)})}static reject(e){return new ea((t,n)=>{n(e)})}static waitFor(e){return new ea((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=ea.resolve(!1);for(let n of e)t=t.next(e=>e?ea.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new ea((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new ea((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function eo(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ae(e),this.ue=e=>t.writeSequenceNumber(e))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ue&&this.ue(e),e}}function eu(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function eh(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ed(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}el.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,t){this.comparator=e,this.root=t||ep.EMPTY}insert(e,t){return new ef(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ep.BLACK,null,null))}remove(e){return new ef(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ep.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new em(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new em(this.root,e,this.comparator,!1)}getReverseIterator(){return new em(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new em(this.root,e,this.comparator,!0)}}class em{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ep{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:ep.RED,this.left=null!=r?r:ep.EMPTY,this.right=null!=i?i:ep.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new ep(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return ep.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return ep.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,ep.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,ep.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw T(43730,{key:this.key,value:this.value});if(this.right.isRed())throw T(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw T(27949);return e+(this.isRed()?0:1)}}ep.EMPTY=null,ep.RED=!0,ep.BLACK=!1,ep.EMPTY=new class{constructor(){this.size=0}get key(){throw T(57766)}get value(){throw T(16141)}get color(){throw T(16727)}get left(){throw T(29726)}get right(){throw T(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new ep(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e){this.comparator=e,this.data=new ef(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ey(this.data.getIterator())}getIteratorFrom(e){return new ey(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof eg)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new eg(this.comparator);return t.data=e,t}}class ey{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e){this.fields=e,e.sort(z.comparator)}static empty(){return new ev([])}unionWith(e){let t=new eg(z.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new ev(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return U(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e){this.binaryString=e}static fromBase64String(e){return new eE(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new ew("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new eE(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return M(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}eE.EMPTY_BYTE_STRING=new eE("");let eT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function e_(e){if(I(!!e,39018),"string"==typeof e){let t=0,n=eT.exec(e);if(I(!!n,46558,{timestamp:e}),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:eI(e.seconds),nanos:eI(e.nanos)}}function eI(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function eS(e){return"string"==typeof e?eE.fromBase64String(e):eE.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eA="server_timestamp",eC="__type__",eN="__previous_value__",eb="__local_write_time__";function eD(e){return(e?.mapValue?.fields||{})[eC]?.stringValue===eA}function ek(e){let t=e.mapValue.fields[eN];return eD(t)?ek(t):t}function eV(e){let t=e_(e.mapValue.fields[eb].timestampValue);return new ee(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e,t,n,r,i,s,a,o,l,u,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l,this.isUsingEmulator=u,this.apiKey=c}}let eR="(default)";class eO{constructor(e,t){this.projectId=e,this.database=t||eR}static empty(){return new eO("","")}get isDefaultDatabase(){return this.database===eR}isEqual(e){return e instanceof eO&&e.projectId===this.projectId&&e.database===this.database}}function eL(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new A(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new eO(e.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eM="__type__",eP="__max__",eF={mapValue:{fields:{__type__:{stringValue:eP}}}},eU="__vector__",e$="value";function eB(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?eD(e)?4:e0(e)?9007199254740991:eJ(e)?10:11:T(28295,{value:e})}function eq(e,t){if(e===t)return!0;let n=eB(e);if(n!==eB(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return eV(e).isEqual(eV(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=e_(e.timestampValue),r=e_(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return eS(e.bytesValue).isEqual(eS(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return eI(e.geoPointValue.latitude)===eI(t.geoPointValue.latitude)&&eI(e.geoPointValue.longitude)===eI(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return eI(e.integerValue)===eI(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=eI(e.doubleValue),r=eI(t.doubleValue);return n===r?eu(n)===eu(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return U(e.arrayValue.values||[],t.arrayValue.values||[],eq);case 10:case 11:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ec(n)!==ec(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!eq(n[e],r[e])))return!1;return!0}(e,t);default:return T(52216,{left:e})}}function eG(e,t){return void 0!==(e.values||[]).find(e=>eq(e,t))}function ez(e,t){if(e===t)return 0;let n=eB(e),r=eB(t);if(n!==r)return M(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return M(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=eI(e.integerValue||e.doubleValue),r=eI(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ej(e.timestampValue,t.timestampValue);case 4:return ej(eV(e),eV(t));case 5:return P(e.stringValue,t.stringValue);case 6:return function(e,t){let n=eS(e),r=eS(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=M(n[e],r[e]);if(0!==t)return t}return M(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=M(eI(e.latitude),eI(t.latitude));return 0!==n?n:M(eI(e.longitude),eI(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return eK(e.arrayValue,t.arrayValue);case 10:return function(e,t){let n=e.fields||{},r=t.fields||{},i=n[e$]?.arrayValue,s=r[e$]?.arrayValue,a=M(i?.values?.length||0,s?.values?.length||0);return 0!==a?a:eK(i,s)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===eF.mapValue&&t===eF.mapValue)return 0;if(e===eF.mapValue)return 1;if(t===eF.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=P(r[e],s[e]);if(0!==t)return t;let a=ez(n[r[e]],i[s[e]]);if(0!==a)return a}return M(r.length,s.length)}(e.mapValue,t.mapValue);default:throw T(23264,{he:n})}}function ej(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return M(e,t);let n=e_(e),r=e_(t),i=M(n.seconds,r.seconds);return 0!==i?i:M(n.nanos,r.nanos)}function eK(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=ez(n[e],r[e]);if(t)return t}return M(n.length,r.length)}function eQ(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=e_(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?eS(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,j.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=eQ(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${eQ(e.fields[i])}`;return n+"}"}(e.mapValue):T(61005,{value:e})}function eH(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function eW(e){return!!e&&"integerValue"in e}function eY(e){return!!e&&"arrayValue"in e}function eX(e){return!!e&&"mapValue"in e}function eJ(e){return(e?.mapValue?.fields||{})[eM]?.stringValue===eU}function eZ(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:{...e.timestampValue}};if(e.mapValue){let t={mapValue:{fields:{}}};return eh(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=eZ(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=eZ(e.arrayValue.values[n]);return t}return{...e}}function e0(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===eP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e){this.value=e}static empty(){return new e1({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!eX(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eZ(t)}setAll(e){let t=z.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=eZ(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());eX(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return eq(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];eX(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(eh(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new e1(eZ(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new e2(e,0,et.min(),et.min(),et.min(),e1.empty(),0)}static newFoundDocument(e,t,n,r){return new e2(e,1,t,et.min(),n,r,0)}static newNoDocument(e,t){return new e2(e,2,t,et.min(),et.min(),e1.empty(),0)}static newUnknownDocument(e,t){return new e2(e,3,t,et.min(),et.min(),e1.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(et.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=e1.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=e1.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=et.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof e2&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new e2(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e4{constructor(e,t){this.position=e,this.inclusive=t}}function e6(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?j.comparator(j.fromName(a.referenceValue),n.key):ez(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function e9(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!eq(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e3{}class e8 extends e3{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new tn(e,t,n):"array-contains"===t?new ta(e,n):"in"===t?new to(e,n):"not-in"===t?new tl(e,n):"array-contains-any"===t?new tu(e,n):new e8(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new tr(e,n):new ti(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(ez(t,this.value)):null!==t&&eB(this.value)===eB(t)&&this.matchesComparison(ez(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return T(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class e7 extends e3{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new e7(e,t)}matches(e){return te(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function te(e){return"and"===e.op}function tt(e){for(let t of e.filters)if(t instanceof e7)return!1;return!0}class tn extends e8{constructor(e,t,n){super(e,t,n),this.key=j.fromName(n.referenceValue)}matches(e){let t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class tr extends e8{constructor(e,t){super(e,"in",t),this.keys=ts("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ti extends e8{constructor(e,t){super(e,"not-in",t),this.keys=ts("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ts(e,t){return(t.arrayValue?.values||[]).map(e=>j.fromName(e.referenceValue))}class ta extends e8{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return eY(t)&&eG(t.arrayValue,this.value)}}class to extends e8{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&eG(this.value.arrayValue,t)}}class tl extends e8{constructor(e,t){super(e,"not-in",t)}matches(e){if(eG(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!eG(this.value.arrayValue,t)}}class tu extends e8{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!eY(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>eG(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.Te=null}}function th(e,t=null,n=[],r=[],i=null,s=null,a=null){return new tc(e,t,n,r,i,s,a)}function td(e){if(null===e.Te){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof e8)return t.field.canonicalString()+t.op.toString()+eQ(t.value);if(tt(t)&&te(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>eQ(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>eQ(e)).join(",")),e.Te=t}return e.Te}function tf(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof e8?n instanceof e8&&t.op===n.op&&t.field.isEqual(n.field)&&eq(t.value,n.value):t instanceof e7?n instanceof e7&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void T(19439)}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!e9(e.startAt,t.startAt)&&e9(e.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function tp(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function tg(e){return null!==e.collectionGroup}function ty(e){if(null===e.Ee){let t;e.Ee=[];let n=new Set;for(let t of e.explicitOrderBy)e.Ee.push(t),n.add(t.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new eg(z.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.Ee.push(new e5(t,r))}),n.has(z.keyField().canonicalString())||e.Ee.push(new e5(z.keyField(),r))}return e.Ee}function tv(e){return e.Ie||(e.Ie=function(e,t){if("F"===e.limitType)return th(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new e5(e.field,t)});let n=e.endAt?new e4(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new e4(e.startAt.position,e.startAt.inclusive):null;return th(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,ty(e))),e.Ie}function tw(e,t){let n=e.filters.concat([t]);return new tm(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function tE(e,t){let n=e.explicitOrderBy.concat([t]);return new tm(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}function tT(e,t,n){return new tm(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function t_(e,t){return new tm(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}function tI(e,t){return new tm(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}function tS(e,t){return tf(tv(e),tv(t))&&e.limitType===t.limitType}function tA(e){return`${td(tv(e))}|lt:${e.limitType}`}function tC(e){var t;let n;return`Query(target=${n=(t=tv(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof e8?`${t.field.canonicalString()} ${t.op} ${eQ(t.value)}`:t instanceof e7?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>eQ(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>eQ(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function tN(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):j.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of ty(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=e6(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,ty(e),t))&&(!e.endAt||!!function(e,t,n){let r=e6(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,ty(e),t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){eh(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return ed(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tD=new ef(j.comparator),tk=new ef(j.comparator);function tV(...e){let t=tk;for(let n of e)t=t.insert(n.key,n);return t}function tx(e){let t=tk;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function tR(){return new tb(e=>e.toString(),(e,t)=>e.isEqual(t))}let tO=new ef(j.comparator),tL=new eg(j.comparator);function tM(...e){let t=tL;for(let n of e)t=t.add(n);return t}let tP=new eg(M);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tF(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eu(t)?"-0":t}}function tU(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t${constructor(){this._=void 0}}function tB(e,t){return e instanceof tQ?eW(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class tq extends t${}class tG extends t${constructor(e){super(),this.elements=e}}function tz(e,t){let n=tW(t);for(let t of e.elements)n.some(e=>eq(e,t))||n.push(t);return{arrayValue:{values:n}}}class tj extends t${constructor(e){super(),this.elements=e}}function tK(e,t){let n=tW(t);for(let t of e.elements)n=n.filter(e=>!eq(e,t));return{arrayValue:{values:n}}}class tQ extends t${constructor(e,t){super(),this.serializer=e,this.Ae=t}}function tH(e){return eI(e.integerValue||e.doubleValue)}function tW(e){return eY(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class tY{constructor(e,t){this.version=e,this.transformResults=t}}class tX{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tX}static exists(e){return new tX(void 0,e)}static updateTime(e){return new tX(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tJ(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class tZ{}function t0(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new t8(e.key,tX.none()):new t4(e.key,e.data,tX.none());{let n=e.data,r=e1.empty(),i=new eg(z.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new t6(e.key,r,new ev(i.toArray()),tX.none())}}function t1(e,t,n,r){return e instanceof t4?function(e,t,n,r){if(!tJ(e.precondition,t))return n;let i=e.value.clone(),s=t3(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof t6?function(e,t,n,r){if(!tJ(e.precondition,t))return n;let i=t3(e.fieldTransforms,r,t),s=t.data;return(s.setAll(t9(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):tJ(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function t2(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&U(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof tG&&r instanceof tG||n instanceof tj&&r instanceof tj?U(n.elements,r.elements,eq):n instanceof tQ&&r instanceof tQ?eq(n.Ae,r.Ae):n instanceof tq&&r instanceof tq)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class t4 extends tZ{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class t6 extends tZ{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function t9(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function t5(e,t,n){let r=new Map;I(e.length===n.length,32656,{Ve:n.length,de:e.length});for(let s=0;s<n.length;s++){var i;let a=e[s],o=a.transform,l=t.data.field(a.field);r.set(a.field,(i=n[s],o instanceof tG?tz(o,l):o instanceof tj?tK(o,l):i))}return r}function t3(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof tq?function(e,t){let n={fields:{[eC]:{stringValue:eA},[eb]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&eD(t)&&(t=ek(t)),t&&(n.fields[eN]=t),{mapValue:n}}(t,s):e instanceof tG?tz(e,s):e instanceof tj?tK(e,s):function(e,t){let n=tB(e,t),r=tH(n)+tH(e.Ae);return eW(n)&&eW(e.Ae)?tU(r):tF(e.serializer,r)}(e,s))}return r}class t8 extends tZ{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class t7 extends tZ{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof t4?function(e,t,n){let r=e.value.clone(),i=t5(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof t6?function(e,t,n){if(!tJ(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=t5(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(t9(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=t1(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=t1(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=tR();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields),o=t0(s,a=t.has(r.key)?null:a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(et.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tM())}isEqual(e){return this.batchId===e.batchId&&U(this.mutations,e.mutations,(e,t)=>t2(e,t))&&U(this.baseMutations,e.baseMutations,(e,t)=>t2(e,t))}}class nt{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){I(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let r=tO,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new nt(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}(i=r||(r={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS",new u.z8([4294967295,4294967295],0);class nr{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ni(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ns(e){return I(!!e,49232),et.fromTimestamp(function(e){let t=e_(e);return new ee(t.seconds,t.nanos)}(e))}function na(e,t){return no(e,t).canonicalString()}function no(e,t){let n=new q(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t)}function nl(e,t){return na(e.databaseId,t.path)}function nu(e,t,n){return{name:nl(e,t),fields:n.value.mapValue.fields}}function nc(e){return z.fromServerFormat(e.fieldPath)}function nh(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}function nd(e){return!!e&&"function"==typeof e._toProto&&"ProtoValue"===e._protoValueType}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e){this.yt=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(eI(e.integerValue));else if("doubleValue"in e){let n=eI(e.doubleValue);isNaN(n)?this.Ft(t,13):(this.Ft(t,15),eu(n)?t.Mt(0):t.Mt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ft(t,20),"string"==typeof n&&(n=e_(n)),t.xt(`${n.seconds||""}`),t.Mt(n.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(eS(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.Ft(t,45),t.Mt(n.latitude||0),t.Mt(n.longitude||0)}else"mapValue"in e?e0(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):eJ(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Kt(e.arrayValue,t),this.Nt(t)):T(19022,{Ut:e})}Ot(e,t){this.Ft(t,25),this.$t(e,t)}$t(e,t){t.xt(e)}qt(e,t){let n=e.fields||{};for(let e of(this.Ft(t,55),Object.keys(n)))this.Ot(e,t),this.Ct(n[e],t)}kt(e,t){let n=e.fields||{};this.Ft(t,53);let r=n[e$].arrayValue?.values?.length||0;this.Ft(t,15),t.Mt(eI(r)),this.Ot(e$,t),this.Ct(n[e$],t)}Kt(e,t){let n=e.values||[];for(let e of(this.Ft(t,50),n))this.Ct(e,t)}Lt(e,t){this.Ft(t,37),j.fromName(e).path.forEach(e=>{this.Ft(t,60),this.$t(e,t)})}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}nm.Wt=new nm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(){this.bn=new ng}addToCollectionParentIndex(e,t){return this.bn.add(t),ea.resolve()}getCollectionParents(e,t){return ea.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return ea.resolve()}deleteFieldIndex(e,t){return ea.resolve()}deleteAllFieldIndexes(e){return ea.resolve()}createTargetIndexes(e,t){return ea.resolve()}getDocumentsMatchingTarget(e,t){return ea.resolve(null)}getIndexType(e,t){return ea.resolve(0)}getFieldIndexes(e,t){return ea.resolve([])}getNextCollectionGroupToUpdate(e){return ea.resolve(null)}getMinOffset(e,t){return ea.resolve(er.min())}getMinOffsetFromCollectionGroup(e,t){return ea.resolve(er.min())}updateCollectionGroup(e,t,n){return ea.resolve()}updateIndexEntries(e,t){return ea.resolve()}}class ng{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new eg(q.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new eg(q.comparator)).toArray()}}new Uint8Array(0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ny={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class nv{static withCacheSize(e){return new nv(e,nv.DEFAULT_COLLECTION_PERCENTILE,nv.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nv.DEFAULT_COLLECTION_PERCENTILE=10,nv.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nv.DEFAULT=new nv(41943040,nv.DEFAULT_COLLECTION_PERCENTILE,nv.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nv.DISABLED=new nv(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new nw(0)}static ar(){return new nw(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nE="LruGarbageCollector";function nT([e,t],[n,r]){let i=M(e,n);return 0===i?M(t,r):i}class n_{constructor(e){this.Pr=e,this.buffer=new eg(nT),this.Tr=0}Er(){return++this.Tr}Ir(e){let t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>nT(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class nI{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Ar(e){y(nE,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){eo(e)?y(nE,"Ignoring IndexedDB error during garbage collection: ",e):await es(e)}await this.Ar(3e5)})}}class nS{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return ea.resolve(el.ce);let n=new n_(t);return this.Vr.forEachTarget(e,e=>n.Ir(e.sequenceNumber)).next(()=>this.Vr.mr(e,e=>n.Ir(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(y("LruGarbageCollector","Garbage collection skipped; disabled"),ea.resolve(ny)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(y("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ny):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let n,r,i,s,a,o,l;let u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,o=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),g()<=c.in.DEBUG&&y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-u}ms
	Determined least recently used ${r} in `+(a-s)+"ms\n"+`	Removed ${i} targets in `+(o-a)+"ms\n"+`	Removed ${e} documents in `+(l-o)+"ms\n"+`Total Duration: ${l-u}ms`),ea.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(){this.changes=new tb(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,e2.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?ea.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&t1(n.mutation,e,ev.empty(),ee.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tM()).next(()=>t))}getLocalViewOfDocuments(e,t,n=tM()){let r=tR();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=tV();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=tR();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,tM()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=tD,s=tR(),a=tR();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof t6)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),t1(a.mutation,t,a.mutation.getFieldMask(),ee.now())):s.set(t.key,ev.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>a.set(e,new nC(t,s.get(e)??null))),a))}recalculateAndSaveOverlays(e,t){let n=tR(),r=new ef((e,t)=>e-t),i=tM();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||ev.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||tM()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=tR();l.forEach(e=>{if(!i.has(e)){let r=t0(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return ea.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return j.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):tg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):ea.resolve(tR()),a=-1,o=i;return s.next(t=>ea.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?ea.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,tM())).next(e=>({batchId:a,changes:tx(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next(e=>{let t=tV();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=tV();return this.indexManager.getCollectionParents(e,i).next(a=>ea.forEach(a,a=>{let o=new tm(a.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,e2.newInvalidDocument(r)))});let n=tV();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&t1(s.mutation,r,ev.empty(),ee.now()),tN(t,r)&&(n=n.insert(e,r))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return ea.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,{id:t.id,version:t.version,createTime:ns(t.createTime)}),ea.resolve()}getNamedQuery(e,t){return ea.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let n,r=function(e){let t=function(e){let t=q.fromString(e);return I(nh(t),10190,{key:t.toString()}),t}(e);return 4===t.length?q.emptyPath():(I(t.length>4&&"documents"===t.get(4),29091,{key:t.toString()}),t.popFirst(5))}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){I(1===s,65062);let e=i.from[0];e.allDescendants?a=e.collectionId:r=r.child(e.collectionId)}let o=[];i.where&&(o=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=nc(e.unaryFilter.field);return e8.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=nc(e.unaryFilter.field);return e8.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=nc(e.unaryFilter.field);return e8.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=nc(e.unaryFilter.field);return e8.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return T(61313);default:return T(60726)}}(t):void 0!==t.fieldFilter?e8.create(nc(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return T(58110);default:return T(50506)}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?e7.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return T(1026)}}(t.compositeFilter.op)):T(30097,{filter:t})}(e);return n instanceof e7&&tt(t=n)&&te(t)?n.getFilters():[n]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new e5(nc(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=null==(n="object"==typeof(t=i.limit)?t.value:t)?null:n);let c=null;i.startAt&&(c=function(e){let t=!!e.before;return new e4(e.values||[],t)}(i.startAt));let h=null;return i.endAt&&(h=function(e){let t=!e.before;return new e4(e.values||[],t)}(i.endAt)),new tm(r,a,l,o,u,"F",c,h)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?tT(t,t.limit,"L"):t}(t.bundledQuery),readTime:ns(t.readTime)}),ea.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(){this.overlays=new ef(j.comparator),this.Lr=new Map}getOverlay(e,t){return ea.resolve(this.overlays.get(t))}getOverlays(e,t){let n=tR();return ea.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.St(e,t,r)}),ea.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.Lr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Lr.delete(n)),ea.resolve()}getOverlaysForCollection(e,t,n){let r=tR(),i=t.length+1,s=new j(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return ea.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new ef((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=tR(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=tR(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return ea.resolve(a)}St(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.Lr.get(r.largestBatchId).delete(n.key);this.Lr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new nn(t,n));let i=this.Lr.get(t);void 0===i&&(i=tM(),this.Lr.set(t,i)),this.Lr.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(){this.sessionToken=eE.EMPTY_BYTE_STRING}getSessionToken(e){return ea.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ea.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(){this.kr=new eg(nx.qr),this.Kr=new eg(nx.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){let n=new nx(e,t);this.kr=this.kr.add(n),this.Kr=this.Kr.add(n)}$r(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Wr(new nx(e,t))}Qr(e,t){e.forEach(e=>this.removeReference(e,t))}Gr(e){let t=new j(new q([])),n=new nx(t,e),r=new nx(t,e+1),i=[];return this.Kr.forEachInRange([n,r],e=>{this.Wr(e),i.push(e.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){let t=new j(new q([])),n=new nx(t,e),r=new nx(t,e+1),i=tM();return this.Kr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new nx(e,0),n=this.kr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class nx{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return j.comparator(e.key,t.key)||M(e.Jr,t.Jr)}static Ur(e,t){return M(e.Jr,t.Jr)||j.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new eg(nx.qr)}checkEmpty(e){return ea.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new ne(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.Hr=this.Hr.add(new nx(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return ea.resolve(s)}lookupMutationBatch(e,t){return ea.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Xr(t+1),r=n<0?0:n;return ea.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return ea.resolve(0===this.mutationQueue.length?-1:this.Yn-1)}getAllMutationBatches(e){return ea.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new nx(t,0),r=new nx(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([n,r],e=>{let t=this.Zr(e.Jr);i.push(t)}),ea.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new eg(M);return t.forEach(e=>{let t=new nx(e,0),r=new nx(e,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([t,r],e=>{n=n.add(e.Jr)})}),ea.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;j.isDocumentKey(i)||(i=i.child(""));let s=new nx(new j(i),0),a=new eg(M);return this.Hr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.Jr)),!0)},s),ea.resolve(this.Yr(a))}Yr(e){let t=[];return e.forEach(e=>{let n=this.Zr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){I(0===this.ei(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Hr;return ea.forEach(t.mutations,r=>{let i=new nx(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Hr=n})}nr(e){}containsKey(e,t){let n=new nx(t,0),r=this.Hr.firstAfterOrEqual(n);return ea.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,ea.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Zr(e){let t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e){this.ti=e,this.docs=new ef(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.ti(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return ea.resolve(n?n.document.mutableCopy():e2.newInvalidDocument(t))}getEntries(e,t){let n=tD;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():e2.newInvalidDocument(e))}),ea.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=tD,s=t.path,a=new j(s.child("__id-9223372036854775808__")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=j.comparator(e.documentKey,t.documentKey))?n:M(e.largestBatchId,t.largestBatchId)}(new er(a.readTime,a.key,-1),n)||(r.has(a.key)||tN(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return ea.resolve(i)}getAllFromCollectionGroup(e,t,n,r){T(9500)}ni(e,t){return ea.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new nL(this)}getSize(e){return ea.resolve(this.size)}}class nL extends nA{constructor(e){super(),this.Mr=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(n)}),ea.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e){this.persistence=e,this.ri=new tb(e=>td(e),tf),this.lastRemoteSnapshotVersion=et.min(),this.highestTargetId=0,this.ii=0,this.si=new nV,this.targetCount=0,this.oi=nw._r()}forEachTarget(e,t){return this.ri.forEach((e,n)=>t(n)),ea.resolve()}getLastRemoteSnapshotVersion(e){return ea.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ea.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),ea.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ii&&(this.ii=t),ea.resolve()}lr(e){this.ri.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.oi=new nw(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,ea.resolve()}updateTargetData(e,t){return this.lr(t),ea.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,ea.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.ri.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.ri.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),ea.waitFor(i).next(()=>r)}getTargetCount(e){return ea.resolve(this.targetCount)}getTargetData(e,t){let n=this.ri.get(t)||null;return ea.resolve(n)}addMatchingKeys(e,t,n){return this.si.$r(t,n),ea.resolve()}removeMatchingKeys(e,t,n){this.si.Qr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),ea.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),ea.resolve()}getMatchingKeysForTargetId(e,t){let n=this.si.jr(t);return ea.resolve(n)}containsKey(e,t){return ea.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,t){this._i={},this.overlays={},this.ai=new el(0),this.ui=!1,this.ui=!0,this.ci=new nk,this.referenceDelegate=e(this),this.li=new nM(this),this.indexManager=new np,this.remoteDocumentCache=new nO(e=>this.referenceDelegate.hi(e)),this.serializer=new nf(t),this.Pi=new nb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nD,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this._i[e.toKey()];return n||(n=new nR(t,this.referenceDelegate),this._i[e.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,n){y("MemoryPersistence","Starting transaction:",e);let r=new nF(this.ai.next());return this.referenceDelegate.Ti(),n(r).next(e=>this.referenceDelegate.Ei(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ii(e,t){return ea.or(Object.values(this._i).map(n=>()=>n.containsKey(e,t)))}}class nF extends ei{constructor(e){super(),this.currentSequenceNumber=e}}class nU{constructor(e){this.persistence=e,this.Ri=new nV,this.Ai=null}static Vi(e){return new nU(e)}get di(){if(this.Ai)return this.Ai;throw T(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.di.delete(n.toString()),ea.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.di.add(n.toString()),ea.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),ea.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(e=>this.di.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.di.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ei(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ea.forEach(this.di,n=>{let r=j.fromPath(n);return this.mi(e,r).next(e=>{e||t.removeEntry(r,et.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(e=>{e?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return ea.or([()=>ea.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class n${constructor(e,t){this.persistence=e,this.fi=new tb(e=>(function(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let n=t,r=e.length;for(let t=0;t<r;t++){let r=e.charAt(t);switch(r){case"\0":n+="\x01\x10";break;case"\x01":n+="\x01\x11";break;default:n+=r}}return n}(e.get(n),t);return t+"\x01\x01"})(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new nS(this,t)}static Vi(e,t){return new n$(e,t)}Ti(){}Ei(e){return ea.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){let t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}pr(e){let t=0;return this.mr(e,e=>{t++}).next(()=>t)}mr(e,t){return ea.forEach(this.fi,(n,r)=>this.wr(e,n,r).next(e=>e?ea.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0,r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ni(e,r=>this.wr(e,r,t).next(e=>{e||(n++,i.removeEntry(r,et.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),ea.resolve()}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),ea.resolve()}removeReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),ea.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),ea.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(eB(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let n=ek(t);return n?16+e(n):16;case 5:return 2*t.stringValue.length;case 6:return eS(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,n)=>t+e(n),0);case 10:case 11:var r;let i;return r=t.mapValue,i=0,eh(r.fields,(t,n)=>{i+=t.length+e(n)}),i;default:throw T(13486,{value:t})}}(e.data.value)),t}wr(e,t,n){return ea.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.fi.get(t);return ea.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nB{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Ts=n,this.Es=r}static Is(e,t){let n=tM(),r=tM();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new nB(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nq{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nG{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(0,l.G6)()?8:function(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}((0,l.z$)())>0?6:4}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.gs(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ps(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new nq;return this.ys(e,t,n).next(r=>{if(i.result=r,this.As)return this.ws(e,t,n,r.size)})}).next(()=>i.result)}ws(e,t,n,r){return n.documentReadCount<this.Vs?(g()<=c.in.DEBUG&&y("QueryEngine","SDK will not create cache indexes for query:",tC(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),ea.resolve()):(g()<=c.in.DEBUG&&y("QueryEngine","Query:",tC(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ds*r?(g()<=c.in.DEBUG&&y("QueryEngine","The SDK decides to create cache indexes for query:",tC(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tv(t))):ea.resolve())}gs(e,t){if(tp(t))return ea.resolve(null);let n=tv(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=tv(t=tT(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=tM(...r);return this.fs.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Ss(t,r);return this.bs(t,s,i,n.readTime)?this.gs(e,tT(t,null,"F")):this.Ds(e,s,t,n)}))})))}ps(e,t,n,r){return tp(t)||r.isEqual(et.min())?ea.resolve(null):this.fs.getDocuments(e,n).next(i=>{let s=this.Ss(t,i);return this.bs(t,s,n,r)?ea.resolve(null):(g()<=c.in.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),tC(t)),this.Ds(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new er(et.fromTimestamp(1e9===r?new ee(n+1,0):new ee(n,r)),j.empty(),-1)}(r,0)).next(e=>e))})}Ss(e,t){let n=new eg((t,n)=>{let r=!1;for(let i of ty(e)){let e=function(e,t,n){let r=e.field.isKeyField()?j.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ez(r,i):T(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return T(19790,{direction:e.dir})}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0});return t.forEach((t,r)=>{tN(e,r)&&(n=n.add(r))}),n}bs(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ys(e,t,n){return g()<=c.in.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",tC(t)),this.fs.getDocumentsMatchingQuery(e,t,er.min(),n)}Ds(e,t,n,r){return this.fs.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}class nz{constructor(e,t,n,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new ef(M),this.Fs=new tb(e=>td(e),tf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(n)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nN(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}async function nj(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.Os(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=tM();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({Ns:e,removedBatchIds:i,addedBatchIds:s}))})})}class nK{constructor(){this.activeTargetIds=tP}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class nQ{constructor(){this.vo=new nK,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,n){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new nK,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nH{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nW="ConnectivityMonitor";class nY{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){for(let e of(y(nW,"Network connectivity changed: AVAILABLE"),this.Lo))e(0)}Bo(){for(let e of(y(nW,"Network connectivity changed: UNAVAILABLE"),this.Lo))e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nX=null;function nJ(){return null===nX?nX=268435456+Math.round(2147483648*Math.random()):nX++,"0x"+nX.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nZ="RestConnection",n0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class n1{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${n}/databases/${r}`,this.$o=this.databaseId.database===eR?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Wo(e,t,n,r,i){let s=nJ(),a=this.Qo(e,t.toUriEncodedString());y(nZ,`Sending RPC '${e}' ${s}:`,a,n);let o={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(o,r,i);let{host:u}=new URL(a),c=(0,l.Xx)(u);return this.zo(e,a,o,n,c).then(t=>(y(nZ,`Received RPC '${e}' ${s}: `,t),t),t=>{throw w(nZ,`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}jo(e,t,n,r,i,s){return this.Wo(e,t,n,r,i)}Go(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+f,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Qo(e,t){let n=n0[e],r=`${this.Ko}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n4="WebChannelConnection",n6=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};class n9 extends n1{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){n9.c_||(n6((0,h.FJ)(),h.ju.STAT_EVENT,e=>{e.stat===h.kN.PROXY?y(n4,"STAT_EVENT: detected buffering proxy"):e.stat===h.kN.NOPROXY&&y(n4,"STAT_EVENT: detected no buffering proxy")}),n9.c_=!0)}zo(e,t,n,r,i){let s=nJ();return new Promise((i,a)=>{let o=new h.JJ;o.setWithCredentials(!0),o.listenOnce(h.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case h.jK.NO_ERROR:let t=o.getResponseJson();y(n4,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),i(t);break;case h.jK.TIMEOUT:y(n4,`RPC '${e}' ${s} timed out`),a(new A(S.DEADLINE_EXCEEDED,"Request time out"));break;case h.jK.HTTP_ERROR:let n=o.getStatus();if(y(n4,`RPC '${e}' ${s} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=e?.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(t)>=0?t:S.UNKNOWN}(t.status);a(new A(e,t.message))}else a(new A(S.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new A(S.UNAVAILABLE,"Connection failed."));break;default:T(9055,{l_:e,streamId:s,h_:o.getLastErrorCode(),P_:o.getLastError()})}}finally{y(n4,`RPC '${e}' ${s} completed.`)}});let l=JSON.stringify(r);y(n4,`RPC '${e}' ${s} sending request:`,r),o.send(t,"POST",l,n,15)})}T_(e,t,n){let i=nJ(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(o.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Go(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;let u=s.join("");y(n4,`Creating RPC '${e}' stream ${i}: ${u}`,o);let c=a.createWebChannel(u,o);this.E_(c);let d=!1,f=!1,m=new n2({Jo:t=>{f?y(n4,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(d||(y(n4,`Opening RPC '${e}' stream ${i} transport.`),c.open(),d=!0),y(n4,`RPC '${e}' stream ${i} sending:`,t),c.send(t))},Ho:()=>c.close()});return n6(c,h.ii.EventType.OPEN,()=>{f||(y(n4,`RPC '${e}' stream ${i} transport opened.`),m.i_())}),n6(c,h.ii.EventType.CLOSE,()=>{f||(f=!0,y(n4,`RPC '${e}' stream ${i} transport closed`),m.o_(),this.I_(c))}),n6(c,h.ii.EventType.ERROR,t=>{f||(f=!0,w(n4,`RPC '${e}' stream ${i} transport errored. Name:`,t.name,"Message:",t.message),m.o_(new A(S.UNAVAILABLE,"The operation could not be completed")))}),n6(c,h.ii.EventType.MESSAGE,t=>{if(!f){let n=t.data[0];I(!!n,16349);let s=n?.error||n[0]?.error;if(s){y(n4,`RPC '${e}' stream ${i} received error:`,s);let t=s.status,n=function(e){let t=r[e];if(void 0!==t)return function(e){if(void 0===e)return v("GRPC error has no .code"),S.UNKNOWN;switch(e){case r.OK:return S.OK;case r.CANCELLED:return S.CANCELLED;case r.UNKNOWN:return S.UNKNOWN;case r.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case r.INTERNAL:return S.INTERNAL;case r.UNAVAILABLE:return S.UNAVAILABLE;case r.UNAUTHENTICATED:return S.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case r.NOT_FOUND:return S.NOT_FOUND;case r.ALREADY_EXISTS:return S.ALREADY_EXISTS;case r.PERMISSION_DENIED:return S.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case r.ABORTED:return S.ABORTED;case r.OUT_OF_RANGE:return S.OUT_OF_RANGE;case r.UNIMPLEMENTED:return S.UNIMPLEMENTED;case r.DATA_LOSS:return S.DATA_LOSS;default:return T(39323,{code:e})}}(t)}(t),a=s.message;"NOT_FOUND"===t&&a.includes("database")&&a.includes("does not exist")&&a.includes(this.databaseId.database)&&w(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),void 0===n&&(n=S.INTERNAL,a="Unknown error status: "+t+" with message "+s.message),f=!0,m.o_(new A(n,a)),c.close()}else y(n4,`RPC '${e}' stream ${i} received:`,n),m.__(n)}}),n9.u_(),setTimeout(()=>{m.s_()},0),m}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,n){super.Go(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return(0,h.UE)()}}function n5(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n3(e){return new nr(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */n9.c_=!1;class n8{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=n,this.A_=r,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();let t=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-n);r>0&&y("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n7="PersistentStream";class re{constructor(e,t,n,r,i,s,a,o){this.Ci=e,this.S_=n,this.b_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new n8(e,t)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,4!==e?this.M_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(v(t.toString()),v("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===S.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;let e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.D_===t&&this.G_(e,n)},t=>{e(()=>{let e=new A(S.UNKNOWN,"Fetching auth token failed: "+t.message);return this.z_(e)})})}G_(e,t){let n=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.Yo(()=>{n(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(e=>{n(()=>this.z_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.F_?this.J_(e):this.onNext(e))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return y(n7,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(y(n7,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rt extends re{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return I(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,I(!e.writeResults||0===e.writeResults.length,55816),this.listener.ta()}onNext(e){var t,n;I(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(I(void 0!==n,14353),t.map(e=>{let t;return(t=e.updateTime?ns(e.updateTime):ns(n)).isEqual(et.min())&&(t=ns(n)),new tY(t,e.transformResults||[])})):[]),i=ns(e.commitTime);return this.listener.na(i,r)}ra(){var e;let t={};t.database=new q(["projects",(e=this.serializer).databaseId.projectId,"databases",e.databaseId.database]).canonicalString(),this.q_(t)}ea(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof t4)r={update:nu(e,t.key,t.value)};else if(t instanceof t8)r={delete:nl(e,t.key)};else if(t instanceof t6)r={update:nu(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof t7))return T(16599,{dt:t.type});r={verify:nl(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof tq)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof tG)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof tj)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof tQ)return{fieldPath:t.field.canonicalString(),increment:n.Ae};throw T(20930,{transform:t.transform})})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:ni(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:T(27497)),r})(this.serializer,e))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{}class rr extends rn{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new A(S.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Wo(e,no(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new A(S.UNKNOWN,e.toString())})}jo(e,t,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.jo(e,no(t,n),r,s,a,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new A(S.UNKNOWN,e.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class ri{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,"Online"===e&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(v(t),this.aa=!1):y("OnlineStateTracker",t)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs="RemoteStore";class ra{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(e=>{n.enqueueAndForget(async()=>{ru(this)&&(y(rs,"Restarting streams for network reachability change."),await async function(e){e.Ia.add(4),await rl(e),e.Va.set("Unknown"),e.Ia.delete(4),await ro(e)}(this))})}),this.Va=new ri(n,r)}}async function ro(e){if(ru(e))for(let t of e.Ra)await t(!0)}async function rl(e){for(let t of e.Ra)await t(!1)}function ru(e){return 0===e.Ia.size}async function rc(e,t,n){if(!eo(t))throw t;e.Ia.add(1),await rl(e),e.Va.set("Offline"),n||(n=()=>{var t;return(t=e.localStore).persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}),e.asyncQueue.enqueueRetryable(async()=>{y(rs,"Retrying IndexedDB access"),await n(),e.Ia.delete(1),await ro(e)})}function rh(e,t){return t().catch(n=>rc(e,n,t))}async function rd(e){let t=rT(e),n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:-1;for(;ru(e)&&e.Ta.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.Ta.length&&t.L_();break}n=r.batchId,function(e,t){e.Ta.push(t);let n=rT(e);n.O_()&&n.Y_&&n.ea(t.mutations)}(e,r)}catch(t){await rc(e,t)}rf(e)&&rm(e)}function rf(e){return ru(e)&&!rT(e).x_()&&e.Ta.length>0}function rm(e){rT(e).start()}async function rp(e){rT(e).ra()}async function rg(e){let t=rT(e);for(let n of e.Ta)t.ea(n.mutations)}async function ry(e,t,n){let r=e.Ta.shift(),i=nt.from(r,t,n);await rh(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await rd(e)}async function rv(e,t){t&&rT(e).Y_&&await async function(e,t){var n;if(function(e){switch(e){case S.OK:return T(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return T(15467,{code:e})}}(n=t.code)&&n!==S.ABORTED){let n=e.Ta.shift();rT(e).B_(),await rh(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await rd(e)}}(e,t),rf(e)&&rm(e)}async function rw(e,t){e.asyncQueue.verifyOperationInProgress(),y(rs,"RemoteStore received new credentials");let n=ru(e);e.Ia.add(3),await rl(e),n&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await ro(e)}async function rE(e,t){t?(e.Ia.delete(2),await ro(e)):t||(e.Ia.add(2),await rl(e),e.Va.set("Unknown"))}function rT(e){var t,n,r;return e.fa||(e.fa=(t=e.datastore,n=e.asyncQueue,r={Zo:()=>Promise.resolve(),Yo:rp.bind(null,e),t_:rv.bind(null,e),ta:rg.bind(null,e),na:ry.bind(null,e)},t.sa(),new rt(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.Ra.push(async t=>{t?(e.fa.B_(),await rd(e)):(await e.fa.stop(),e.Ta.length>0&&(y(rs,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new C,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){let s=new r_(e,t,Date.now()+n,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new A(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rI(e,t){if(v("AsyncQueue",`${t}: ${e}`),eo(e))return new A(S.UNAVAILABLE,`${t}: ${e}`);throw e}class rS{constructor(){this.queries=rA(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(e,t){let n=e.queries;e.queries=rA(),n.forEach((e,n)=>{for(let e of n.Sa)e.onError(t)})}(this,new A(S.ABORTED,"Firestore shutting down"))}}function rA(){return new tb(e=>tA(e),tS)}(a=s||(s={})).Ma="default",a.Cache="cache";class rC{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Pu={},this.Tu=new tb(e=>tA(e),tS),this.Eu=new Map,this.Iu=new Set,this.Ru=new ef(j.comparator),this.Au=new Map,this.Vu=new nV,this.du={},this.mu=new Map,this.fu=nw.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return!0===this.gu}}async function rN(e,t,n){var r;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=rD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rk.bind(null,e),e);try{let e;let s=await function(e,t){let n,r;let i=ee.now(),s=t.reduce((e,t)=>e.add(t.key),tM());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=tD,l=tM();return e.xs.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=tB(r.transform,e||null);null!=i&&(null===n&&(n=e1.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new t6(e.key,t,function e(t){let n=[];return eh(t.fields,(t,r)=>{let i=new z([t]);if(eX(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new ev(n)}(t.value.mapValue),tX.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:tx(n)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),r=s.batchId,(e=i.du[i.currentUser.toKey()])||(e=new ef(M)),e=e.insert(r,n),i.du[i.currentUser.toKey()]=e,await rR(i,s.changes),await rd(i.remoteStore)}catch(t){let e=rI(t,"Failed to persist write");n.reject(e)}}function rb(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.Tu.forEach((e,n)=>{let r=n.view.va(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.Sa)e.va(t)&&(n=!0)}),n&&function(e){e.Ca.forEach(e=>{e.next()})}(r),i.length&&e.Pu.H_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function rD(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=ea.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);I(null!==s,48541),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=tM();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});rx(e,r,null),rV(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await rR(e,i)}catch(e){await es(e)}}async function rk(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(I(null!==t,37113),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});rx(e,t,n),rV(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await rR(e,i)}catch(e){await es(e)}}function rV(e,t){(e.mu.get(t)||[]).forEach(e=>{e.resolve()}),e.mu.delete(t)}function rx(e,t,n){let r=e.du[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.du[e.currentUser.toKey()]=r}}async function rR(e,t,n){let r=[],i=[],s=[];e.Tu.isEmpty()||(e.Tu.forEach((a,o)=>{s.push(e.pu(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient){let r=t?!t.fromCache:n?.targetChanges.get(o.targetId)?.current;e.sharedClientState.updateQueryState(o.targetId,r?"current":"not-current")}if(t){r.push(t);let e=nB.Is(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.Pu.H_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>ea.forEach(t,t=>ea.forEach(t.Ts,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>ea.forEach(t.Es,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!eo(e))throw e;y("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.vs.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.vs=e.vs.insert(t,i)}}}(e.localStore,i))}async function rO(e,t){var n;if(!e.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());let r=await nj(e.localStore,t);e.currentUser=t,n="'waitForPendingWrites' promise is rejected due to a user change.",e.mu.forEach(e=>{e.forEach(e=>{e.reject(new A(S.CANCELLED,n))})}),e.mu.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await rR(e,r.Ns)}}class rL{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=n3(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){var t;return t=this.persistence,new nz(t,new nG,e.initialUser,this.serializer)}Cu(e){return new nP(nU.Vi,this.serializer)}Du(e){return new nQ}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}rL.provider={build:()=>new rL};class rM extends rL{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){return I(this.persistence.referenceDelegate instanceof n$,46915),new nI(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}Cu(e){let t=void 0!==this.cacheSizeBytes?nv.withCacheSize(this.cacheSizeBytes):nv.DEFAULT;return new nP(e=>n$.Vi(e,t),this.serializer)}}class rP{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>rb(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=rO.bind(null,this.syncEngine),await rE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rS}createDatastore(e){let t=n3(e.databaseInfo.databaseId),n=new n9(e.databaseInfo);return new rr(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new ra(t,this.datastore,e.asyncQueue,e=>rb(this.syncEngine,e,0),nY.v()?new nY:new nH)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new rC(e,t,n,r,i,s);return a&&(o.gu=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(e){y(rs,"RemoteStore shutting down."),e.Ia.add(5),await rl(e),e.Aa.shutdown(),e.Va.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}rP.provider={build:()=>new rP};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rF="FirestoreClient";class rU{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=r,this.user=d.UNAUTHENTICATED,this.clientId=L.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async e=>{y(rF,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(y(rF,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new C;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=rI(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function r$(e,t){e.asyncQueue.verifyOperationInProgress(),y(rF,"Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await nj(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function rB(e,t){e.asyncQueue.verifyOperationInProgress();let n=await rq(e);y(rF,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>rw(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>rw(t.remoteStore,n)),e._onlineComponents=t}async function rq(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){y(rF,"Using user provided OfflineComponentProvider");try{await r$(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;w("Error using user provided cache. Falling back to memory cache: "+t),await r$(e,new rL)}}else y(rF,"Using default OfflineComponentProvider"),await r$(e,new rM(void 0))}return e._offlineComponents}async function rG(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(y(rF,"Using user provided OnlineComponentProvider"),await rB(e,e._uninitializedComponentsProvider._online)):(y(rF,"Using default OnlineComponentProvider"),await rB(e,new rP))),e._onlineComponents}function rz(e,t){let n=new C;return e.asyncQueue.enqueueAndForget(async()=>rN(await rG(e).then(e=>e.syncEngine),t,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rj(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rK=new Map,rQ="firestore.googleapis.com";class rH{constructor(e){if(void 0===e.host){if(void 0!==e.ssl)throw new A(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=rQ,this.ssl=!0}else this.host=e.host,this.ssl=e.ssl??!0;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new A(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new A(S.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rj(e.experimentalLongPollingOptions??{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new A(S.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new A(S.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new A(S.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rW{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rH({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new A(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new A(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rH(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new b;switch(e.type){case"firstParty":return new x(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new A(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=rK.get(e);t&&(y("ComponentProvider","Removing Datastore"),rK.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rY{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new rY(this.firestore,e,this._query)}}class rX{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rJ(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rX(this.firestore,e,this._key)}toJSON(){return{type:rX._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Z(t,rX._jsonSchema))return new rX(e,n||null,new j(q.fromString(t.referencePath)))}}rX._jsonSchemaVersion="firestore/documentReference/1.0",rX._jsonSchema={type:J("string",rX._jsonSchemaVersion),referencePath:J("string")};class rJ extends rY{constructor(e,t,n){super(e,t,new tm(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new rX(this.firestore,null,new j(e))}withConverter(e){return new rJ(this.firestore,e,this._path)}}function rZ(e,t,...n){if(e=(0,l.m9)(e),K("collection","path",t),e instanceof rW){let r=q.fromString(t,...n);return H(r),new rJ(e,null,r)}{if(!(e instanceof rX||e instanceof rJ))throw new A(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(q.fromString(t,...n));return H(r),new rJ(e.firestore,null,r)}}function r0(e,t,...n){if(e=(0,l.m9)(e),1==arguments.length&&(t=L.newId()),K("doc","path",t),e instanceof rW){let r=q.fromString(t,...n);return Q(r),new rX(e,null,new j(r))}{if(!(e instanceof rX||e instanceof rJ))throw new A(S.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(q.fromString(t,...n));return Q(r),new rX(e.firestore,e instanceof rJ?e.converter:null,new j(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r1="AsyncQueue";class r2{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new n8(this,"async_queue_retry"),this._c=()=>{let e=n5();e&&y(r1,"Visibility state changed to "+e.visibilityState),this.M_.w_()},this.ac=e;let t=n5();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;let t=n5();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});let t=new C;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(0!==this.Yu.length){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!eo(e))throw e;y(r1,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){let t=this.ac.then(()=>(this.rc=!0,e().catch(e=>{throw this.nc=e,this.rc=!1,v("INTERNAL UNHANDLED ERROR: ",r4(e)),e}).then(e=>(this.rc=!1,e))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);let r=r_.createAndSchedule(this,e,t,n,e=>this.hc(e));return this.tc.push(r),r}uc(){this.nc&&T(47125,{Pc:r4(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(let t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{for(let t of(this.tc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.tc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){let t=this.tc.indexOf(e);this.tc.splice(t,1)}}function r4(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}class r6 extends rW{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new r2,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new r2(e),this._firestoreClient=void 0,await e}}}function r9(e,t){let n="object"==typeof e?e:(0,o.Mq)(),r=(0,o.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||eR});if(!r._initialized){let e=(0,l.P0)("firestore");e&&function(e,t,n,r={}){e=X(e,rW);let i=(0,l.Xx)(t),s=e._getSettings(),a={...s,emulatorOptions:e._getEmulatorOptions()},o=`${t}:${n}`;i&&(0,l.Uo)(`https://${o}`),s.host!==rQ&&s.host!==o&&w("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let u={...s,host:o,ssl:i,emulatorOptions:r};if(!(0,l.vZ)(u,a)&&(e._setSettings(u),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=d.MOCK_USER;else{t=(0,l.Sg)(r.mockUserToken,e._app?.options.projectId);let i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new A(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new d(i)}e._authCredentials=new D(new N(t,n))}}(r,...e)}return r}function r5(e){if(e._terminated)throw new A(S.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,r,i;let s=e._freezeSettings(),a=(t=e._databaseId,n=e._app?.options.appId||"",r=e._persistenceKey,i=e._app?.options.apiKey,new ex(t,n,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,rj(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i));e._componentsProvider||s.localCache?._offlineComponentProvider&&s.localCache?._onlineComponentProvider&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new rU(e._authCredentials,e._appCheckCredentials,e._queue,a,e._componentsProvider&&function(e){let t=e?._online.build();return{_offline:e?._offline.build(t),_online:t}}(e._componentsProvider))}(e),e._firestoreClient}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3{constructor(e){this._byteString=e}static fromBase64String(e){try{return new r3(eE.fromBase64String(e))}catch(e){throw new A(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new r3(eE.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:r3._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Z(e,r3._jsonSchema))return r3.fromBase64String(e.bytes)}}r3._jsonSchemaVersion="firestore/bytes/1.0",r3._jsonSchema={type:J("string",r3._jsonSchemaVersion),bytes:J("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r8{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new A(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new z(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r7{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new A(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new A(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return M(this._lat,e._lat)||M(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ie._jsonSchemaVersion}}static fromJSON(e){if(Z(e,ie._jsonSchema))return new ie(e.latitude,e.longitude)}}ie._jsonSchemaVersion="firestore/geoPoint/1.0",ie._jsonSchema={type:J("string",ie._jsonSchemaVersion),latitude:J("number"),longitude:J("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}toJSON(){return{type:it._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Z(e,it._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new it(e.vectorValues);throw new A(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}it._jsonSchemaVersion="firestore/vectorValue/1.0",it._jsonSchema={type:J("string",it._jsonSchemaVersion),vectorValues:J("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ir=/^__.*__$/;class ii{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new t6(e,this.data,this.fieldMask,t,this.fieldTransforms):new t4(e,this.data,t,this.fieldTransforms)}}class is{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new t6(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ia(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T(40011,{dataSource:e})}}class io{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new io({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){let t=this.path?.child(e),n=this.i({path:t,arrayElement:!1});return n.mc(e),n}fc(e){let t=this.path?.child(e),n=this.i({path:t,arrayElement:!1});return n.Ac(),n}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return iI(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(0===e.length)throw this.yc("Document fields must not be empty");if(ia(this.dataSource)&&ir.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class il{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||n3(e)}A(e,t,n,r=!1){return new io({dataSource:e,methodName:t,targetDoc:n,path:z.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function iu(e){let t=e._freezeSettings(),n=n3(e._databaseId);return new il(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ic(e,t,n,r,i,s={}){let a,o;let l=e.A(s.merge||s.mergeFields?2:0,t,n,i);iw("Data must be an object, but it was:",l,r);let u=iy(r,l);if(s.merge)a=new ev(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=iE(t,r,n);if(!l.contains(i))throw new A(S.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);iS(e,i)||e.push(i)}a=new ev(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new ii(new e1(u),a,o)}class ih extends r7{_toFieldTransform(e){if(2!==e.dataSource)throw 1===e.dataSource?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ih}}function id(e,t,n,r){let i=e.A(1,t,n);iw("Data must be an object, but it was:",i,r);let s=[],a=e1.empty();return eh(r,(e,r)=>{let o=i_(t,e,n);r=(0,l.m9)(r);let u=i.fc(o);if(r instanceof ih)s.push(o);else{let e=ig(r,u);null!=e&&(s.push(o),a.set(o,e))}}),new is(a,new ev(s),i.fieldTransforms)}function im(e,t,n,r,i,s){let a=e.A(1,t,n),o=[iE(t,r,n)],u=[i];if(s.length%2!=0)throw new A(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(iE(t,s[e])),u.push(s[e+1]);let c=[],h=e1.empty();for(let e=o.length-1;e>=0;--e)if(!iS(c,o[e])){let t=o[e],n=u[e];n=(0,l.m9)(n);let r=a.fc(t);if(n instanceof ih)c.push(t);else{let e=ig(n,r);null!=e&&(c.push(t),h.set(t,e))}}return new is(h,new ev(c),a.fieldTransforms)}function ip(e,t,n,r=!1){return ig(n,e.A(r?4:3,t))}function ig(e,t){if(iv(e=(0,l.m9)(e)))return iw("Unsupported field value:",t,e),iy(e,t);if(e instanceof r7)return function(e,t){if(!ia(t.dataSource))throw t.yc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.yc(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&4!==t.dataSource)throw t.yc("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=ig(i,t.gc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){var n,r,i,s,a,o;if(null===(e=(0,l.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!eu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?tU(r):tF(n,r);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=ee.fromDate(e);return{timestampValue:ni(t.serializer,n)}}if(e instanceof ee){let n=new ee(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:ni(t.serializer,n)}}if(e instanceof ie)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof r3)return{bytesValue:(s=t.serializer,a=e._byteString,s.useProto3Json?a.toBase64():a.toUint8Array())};if(e instanceof rX){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.yc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:na(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof it)return{mapValue:{fields:{[eM]:{stringValue:eU},[e$]:{arrayValue:{values:((o=e)instanceof it?o.toArray():o).map(e=>{if("number"!=typeof e)throw t.yc("VectorValues must only contain numeric values.");return tF(t.serializer,e)})}}}}};if(nd(e))return e._toProto(t.serializer);throw t.yc(`Unsupported field value: ${Y(e)}`)}(e,t)}function iy(e,t){let n={};return ed(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):eh(e,(e,r)=>{let i=ig(r,t.dc(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function iv(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ee||e instanceof ie||e instanceof r3||e instanceof rX||e instanceof r7||e instanceof it||nd(e))}function iw(e,t,n){if(!iv(n)||!W(n)){let r=Y(n);throw"an object"===r?t.yc(e+" a custom object"):t.yc(e+" "+r)}}function iE(e,t,n){if((t=(0,l.m9)(t))instanceof r8)return t._internalPath;if("string"==typeof t)return i_(e,t);throw iI("Field path arguments must be of type string or ",e,!1,void 0,n)}let iT=RegExp("[~\\*/\\[\\]]");function i_(e,t,n){if(t.search(iT)>=0)throw iI(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new r8(...t.split("."))._internalPath}catch(r){throw iI(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function iI(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new A(S.INVALID_ARGUMENT,o+e+l)}function iS(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{convertValue(e,t="none"){switch(eB(e)){case 0:return null;case 1:return e.booleanValue;case 2:return eI(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(eS(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw T(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return eh(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){return new it(e.fields?.[e$].arrayValue?.values?.map(e=>eI(e.doubleValue)))}convertGeoPoint(e){return new ie(eI(e.latitude),eI(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=ek(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(eV(e));default:return null}}convertTimestamp(e){let t=e_(e);return new ee(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=q.fromString(e);I(nh(n),9688,{name:e});let r=new eO(n.get(1),n.get(3)),i=new j(n.popFirst(5));return r.isEqual(t)||v(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC extends iA{constructor(e){super(),this.firestore=e}convertBytes(e){return new r3(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new rX(this.firestore,null,t)}}}}]);