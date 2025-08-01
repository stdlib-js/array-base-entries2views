/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Convert array entries to an array of composite views.
*
* @module @stdlib/array-base-entries2views
*
* @example
* var entries2views = require( '@stdlib/array-base-entries2views' );
*
* var x = [ 1, 2, 3 ];
* var fields = [ 'x', 'y' ];
*
* var out = entries2views( x, fields );
* // returns [ <Object>, <Object>, <Object> ]
*
* var v0 = out[ 0 ].toJSON();
* // returns { 'x': 0, 'y': 1 }
*
* var v1 = out[ 1 ].toJSON();
* // returns { 'x': 1, 'y': 2 }
*
* var v2 = out[ 2 ].toJSON();
* // returns { 'x': 2, 'y': 3 }
*
* // Mutate the input array:
* x[ 0 ] = 5;
*
* v0 = out[ 0 ].toJSON();
* // returns { 'x': 0, 'y': 5 }
*
* // Set a view property:
* out[ 1 ].y = 'beep';
*
* v1 = out[ 1 ].toJSON();
* // returns { 'x': 1, 'y': 'beep' }
*
* var y = x.slice();
* // returns [ 5, 'beep', 3 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
