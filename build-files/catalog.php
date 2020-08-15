<?php /* Template Name: Catalog */ ?>

<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package GeneratePress
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

get_header(); ?>

<link href="./static/css/main.3ca61d7d.chunk.css" rel="stylesheet">
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script>!function (e) { function t(t) { for (var n, a, l = t[0], c = t[1], f = t[2], p = 0, s = []; p < l.length; p++)a = l[p], Object.prototype.hasOwnProperty.call(o, a) && o[a] && s.push(o[a][0]), o[a] = 0; for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]); for (i && i(t); s.length;)s.shift()(); return u.push.apply(u, f || []), r() } function r() { for (var e, t = 0; t < u.length; t++) { for (var r = u[t], n = !0, l = 1; l < r.length; l++) { var c = r[l]; 0 !== o[c] && (n = !1) } n && (u.splice(t--, 1), e = a(a.s = r[0])) } return e } var n = {}, o = { 1: 0 }, u = []; function a(t) { if (n[t]) return n[t].exports; var r = n[t] = { i: t, l: !1, exports: {} }; return e[t].call(r.exports, r, r.exports, a), r.l = !0, r.exports } a.m = e, a.c = n, a.d = function (e, t, r) { a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, a.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, a.t = function (e, t) { if (1 & t && (e = a(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var r = Object.create(null); if (a.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var n in e) a.d(r, n, function (t) { return e[t] }.bind(null, n)); return r }, a.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return a.d(t, "a", t), t }, a.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, a.p = "/catalog/"; var l = this.webpackJsonpcatalog = this.webpackJsonpcatalog || [], c = l.push.bind(l); l.push = t, l = l.slice(); for (var f = 0; f < l.length; f++)t(l[f]); var i = c; r() }([])</script>
    <script src="./static/js/2.bab07169.chunk.js"></script>
    <script src="./static/js/main.cc5e7ab2.chunk.js"></script>


	<?php
	/**
	 * generate_after_primary_content_area hook.
	 *
	 * @since 2.0
	 */
	do_action( 'generate_after_primary_content_area' );

	generate_construct_sidebars();

get_footer();
