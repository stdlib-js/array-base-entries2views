<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# entries2views

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert array entries to an array of composite views.

<section class="installation">

## Installation

```bash
npm install @stdlib/array-base-entries2views
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var entries2views = require( '@stdlib/array-base-entries2views' );
```

#### entries2views( arr, fields )

Converts array entries to an array of composite views.

```javascript
var x = [ 1, 2, 3 ];
var fields = [ 'x', 'y' ];

var out = entries2views( x, fields );
// returns [ <Object>, <Object>, <Object> ]

var v0 = out[ 0 ].toJSON();
// returns { 'x': 0, 'y': 1 }

var v1 = out[ 1 ].toJSON();
// returns { 'x': 1, 'y': 2 }

var v2 = out[ 2 ].toJSON();
// returns { 'x': 2, 'y': 3 }

// Mutate the input array:
x[ 0 ] = 5;

v0 = out[ 0 ].toJSON();
// returns { 'x': 0, 'y': 5 }

// Set a view property:
out[ 1 ].y = 'beep';

v1 = out[ 1 ].toJSON();
// returns { 'x': 1, 'y': 'beep' }

var y = x.slice();
// returns [ 5, 'beep', 3 ]
```

The function supports the following parameters:

-   **arr**: input array.
-   **fields**: list of field names.

Each element in the returned array is a class instance having prototype properties corresponding to the list of field names. As demonstrated in the example above, to convert an element to a regular object, invoke an element's `toJSON` method. Note, however, that the object returned by an element's `toJSON` method no longer shares the same memory as the provided input array.

</section>

<!-- /.usage -->

<section class="notes">

-   The list of field names should be a two-element array where the first element corresponds to the field name of input array element index and the second element corresponds to the field name of the input array element value.
-   For each element of the returned array, the index view field is read-only and cannot be mutated.
-   Each view in the returned array shares the same memory as the corresponding element in the input array. Accordingly, mutation of either the input array or a view will mutate the other.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var entries2views = require( '@stdlib/array-base-entries2views' );

var x = discreteUniform( 10, -100, 100 );
var fields = [ 'x', 'y' ];

var out = entries2views( x, fields );
// returns [...]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-entries2views.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-entries2views

[test-image]: https://github.com/stdlib-js/array-base-entries2views/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-base-entries2views/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-entries2views/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-entries2views?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-entries2views.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-entries2views/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-entries2views/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-base-entries2views/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-base-entries2views/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-base-entries2views/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-base-entries2views/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-base-entries2views/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-base-entries2views/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-entries2views/main/LICENSE

</section>

<!-- /.links -->
