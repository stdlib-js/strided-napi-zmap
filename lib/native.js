/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var reinterpretComplex128 = require( '@stdlib/strided-base-reinterpret-complex128' );
var isComplex128Array = require( '@stdlib/assert-is-complex128array' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Wrapper function exposing the C API to JavaScript.
*
* @private
* @param {integer} N - number of indexed elements
* @param {Complex128Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {Complex128Array} y - destination array
* @param {integer} strideY - `y` stride length
* @returns {Complex128Array} `y`
*
* @example
* var Complex128Array = require( '@stdlib/array-complex128' );
*
* var x = new Complex128Array( 10 );
* var y = new Complex128Array( x.length );
*
* wrapper( x.length, x, 1, y, 1 );
*/
function wrapper( N, x, strideX, y, strideY ) {
	var viewX;
	var viewY;

	if ( isComplex128Array( x ) ) {
		viewX = reinterpretComplex128( x, 0 );
	} else {
		viewX = x;
	}
	if ( isComplex128Array( y ) ) {
		viewY = reinterpretComplex128( y, 0 );
	} else {
		viewY = y;
	}
	addon( N, viewX, strideX, viewY, strideY );
	return y;
}


// EXPORTS //

module.exports = wrapper;
