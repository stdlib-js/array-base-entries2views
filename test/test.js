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

// MODULES //

var tape = require( 'tape' );
var isPlainObject = require( '@stdlib/assert-is-plain-object' );
var toAccessorArray = require( '@stdlib/array-base-to-accessor-array' );
var entries2views = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof entries2views, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an empty array if provided an empty input array', function test( t ) {
	var expected;
	var actual;
	var fields;

	fields = [ 'x', 'y' ];

	actual = entries2views( [], fields );
	expected = [];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts array entries to objects (indexed)', function test( t ) {
	var expected;
	var actual;
	var fields;
	var x;
	var i;

	fields = [ 'x', 'y' ];

	x = [ 1, 2 ];

	actual = entries2views( x, fields );
	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( isPlainObject( actual[ i ] ), false, 'returns expected value' );
		actual[ i ] = actual[ i ].toJSON();
	}
	expected = [
		{
			'x': 0,
			'y': 1
		},
		{
			'x': 1,
			'y': 2
		}
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts array entries to objects (accessors)', function test( t ) {
	var expected;
	var actual;
	var fields;
	var x;
	var i;

	fields = [ 'x', 'y' ];

	x = [ 1, 2 ];

	actual = entries2views( toAccessorArray( x ), toAccessorArray( fields ) );
	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( isPlainObject( actual[ i ] ), false, 'returns expected value' );
		actual[ i ] = actual[ i ].toJSON();
	}
	expected = [
		{
			'x': 0,
			'y': 1
		},
		{
			'x': 1,
			'y': 2
		}
	];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns views on the input arrays (indexed)', function test( t ) {
	var expected;
	var actual;
	var fields;
	var x;

	fields = [ 'x', 'y' ];

	x = [ 1, 2 ];

	actual = entries2views( x, fields );

	t.strictEqual( actual[ 0 ].x, 0, 'returns expected value' );
	t.strictEqual( actual[ 0 ].y, 1, 'returns expected value' );

	t.strictEqual( actual[ 1 ].x, 1, 'returns expected value' );
	t.strictEqual( actual[ 1 ].y, 2, 'returns expected value' );

	actual[ 0 ].y = -99;
	actual[ 1 ].y = 99;

	t.strictEqual( actual[ 0 ].x, 0, 'returns expected value' );
	t.strictEqual( actual[ 0 ].y, -99, 'returns expected value' );

	t.strictEqual( actual[ 1 ].x, 1, 'returns expected value' );
	t.strictEqual( actual[ 1 ].y, 99, 'returns expected value' );

	expected = [ -99, 99 ];
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns views on the input arrays (accessors)', function test( t ) {
	var expected;
	var actual;
	var fields;
	var x;

	fields = [ 'x', 'y' ];

	x = [ 1, 2 ];

	actual = entries2views( toAccessorArray( x ), toAccessorArray( fields ) );

	t.strictEqual( actual[ 0 ].x, 0, 'returns expected value' );
	t.strictEqual( actual[ 0 ].y, 1, 'returns expected value' );

	t.strictEqual( actual[ 1 ].x, 1, 'returns expected value' );
	t.strictEqual( actual[ 1 ].y, 2, 'returns expected value' );

	actual[ 0 ].y = -99;
	actual[ 1 ].y = 99;

	t.strictEqual( actual[ 0 ].x, 0, 'returns expected value' );
	t.strictEqual( actual[ 0 ].y, -99, 'returns expected value' );

	t.strictEqual( actual[ 1 ].x, 1, 'returns expected value' );
	t.strictEqual( actual[ 1 ].y, 99, 'returns expected value' );

	expected = [ -99, 99 ];
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns views which throw an error when attempting to mutate the field corresponding to the element index (indexed)', function test( t ) {
	var fields;
	var out;
	var x;

	fields = [ 'x', 'y' ];
	x = [ 1, 2 ];

	out = entries2views( x, fields );
	t.throws( badOperation, Error, 'throws an error' );

	t.end();

	function badOperation() {
		out[ 0 ].x = 10;
	}
});

tape( 'the function returns views which throw an error when attempting to mutate the field corresponding to the element index (accessors)', function test( t ) {
	var fields;
	var out;
	var x;

	fields = [ 'x', 'y' ];
	x = [ 1, 2 ];

	out = entries2views( toAccessorArray( x ), toAccessorArray( fields ) );
	t.throws( badOperation, Error, 'throws an error' );

	t.end();

	function badOperation() {
		out[ 0 ].x = 10;
	}
});
