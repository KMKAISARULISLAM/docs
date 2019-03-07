(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{390:function(t,a,e){"use strict";e.r(a);var s=e(9),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"metaboxes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metaboxes","aria-hidden":"true"}},[t._v("#")]),t._v(" Metaboxes")]),t._v(" "),e("p",[t._v("If you are used the ReduxFramework declaration arrays, you know Redux Metaboxes. They're one and the same! The only difference is a parent array. We'll go through a few examples to get you up and running. Please know, you MUST have an options page for metaboxes to work. They're inter-connected. You can, however, make a fake options panel, and hide it from the admin menu. But the metaboxes extensions works best when united with a panel.")]),t._v(" "),e("h2",{attrs:{id:"getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),e("p",[t._v("To understand how to use extensions, you should read this article on "),e("a",{attrs:{href:"/redux-framework/advanced/loading-extensions/"}},[t._v("Loading Extensions")]),t._v(". To shortcut the process, you should use the "),e("a",{attrs:{href:"http://generate.reduxframework.com/",target:"_blank"}},[t._v("Redux Generator")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"arguments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),e("table",{attrs:{border:"0"}},[e("tbody",[e("tr",[e("td",[t._v("Name")]),e("td",[t._v("Type")]),e("td",[t._v("Description")])]),e("tr",[e("td",[t._v("id")]),e("td",[t._v("string")]),e("td",[t._v("You must provide an ID of some kind. This can be shared with your keys from your panel, and if so the values will be overridden for that given page in your global variable.")])]),e("tr",[e("td",[t._v("title")]),e("td",[t._v("string")]),e("td",[t._v("This is the title that appears on the box")])]),e("tr",[e("td",[t._v("post_types")]),e("td",[t._v("array")]),e("td",[t._v("Provide any number of post_types for a given metabox to appear.")])]),e("tr",[e("td",[t._v("page_template")]),e("td",[t._v("array")]),e("td",[t._v("Bind visibility of a metabox to any number of page templates. The value will be equal to the filename of the custom page template.")])]),e("tr",[e("td",[t._v("post_format")]),e("td",[t._v("array")]),e("td",[t._v("Bind the visibility of a metabox to a given post format. "),e("a",{attrs:{href:"http://codex.wordpress.org/Post_Formats",target:"_blank"}},[t._v("List of post formats")]),t._v(".")])]),e("tr",[e("td",[t._v("position")]),e("td",[t._v("normal / advanced / side")]),e("td",[t._v("Where you want to place your metabox. Normal and advanced are the to left and side is, well, to the side.")])]),e("tr",[e("td",[t._v("priority")]),e("td",[t._v("high / core / default / low")]),e("td",[t._v("Where you want to place your metabox. Normal and advanced are the to left and side is, well, to the side.")])]),e("tr",[e("td",[t._v("sections")]),e("td",[t._v("array")]),e("td",[t._v("Your sections array, the same style as ReduxFramework.")])])])]),t._v(" "),e("h2",{attrs:{id:"example-declaration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-declaration","aria-hidden":"true"}},[t._v("#")]),t._v(" Example Declaration")]),t._v(" "),e("p",[t._v("Since we've kept the structure exactly the same, start by constructing a section array like you normally would. In the included config file for metaboxes, we save these to an array. We've named that array $boxSections for the below examples.")]),t._v(" "),e("p",[t._v("Now once we have that array, we need only add it to a parent array, named below as $metaboxes. Here's an example of how we would add a sidebar metabox to a page.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// BE SURE TO RENAME THE FUNCTION NAMES TO YOUR OWN NAME OR PREFIX")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("function_exists")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"redux_add_metaboxes"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("redux_add_metaboxes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$metaboxes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Declare your sections")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$boxSections")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$boxSections")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'title'         => __('General Settings', 'redux-framework-demo'),")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'icon'          => 'el-icon-home', // Only used with metabox position normal or advanced")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'fields'")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'sidebar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'title' => __( 'Sidebar', 'redux-framework-demo' ),")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'desc'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Please select the sidebar you would like to display on this page. Note: You must first create the sidebar under Appearance > Widgets.'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'select'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'data'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'sidebars'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Declare your metaboxes")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$metaboxes")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$metaboxes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v("            "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'sidebar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v("         "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Sidebar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'fusion-framework'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'post_types'")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'page'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'post'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'acme_product'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'page_template' => array('page-test.php'), // Visibility of box based on page template selector")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'post_format' => array('image'), // Visibility of box based on post format")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'position'")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'side'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// normal, advanced, side")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'priority'")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'high'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// high, core, default, low - Priorities of placement")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'sections'")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$boxSections")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$metaboxes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Change {$redux_opt_name} to your opt_name")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_action")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"redux/metaboxes/'),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_opt_name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v('/boxes"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"redux_add_metaboxes"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endif")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"example-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),e("p",[t._v("This is one of the things that makes the metaboxes ultra slick. ReduxFramework creates a global variable for you to access all your panel options with. Say your opt_name is "),e("code",[t._v("redux_demo")]),t._v(", then you can use the global variable "),e("code",[t._v("$redux_demo")]),t._v(" to access your values. Now what's cool is the metaboxes code overrides those values! That means you only have to code your functions ONCE. So say you have a layout field in your panel and on your pages. If you change a single post, and have the layout be say 3, while the panel says 2, the code exposed to your data will be 3. Redux metaboxes does it all for you.")]),t._v(" "),e("h3",{attrs:{id:"accessing-data-within-loops"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#accessing-data-within-loops","aria-hidden":"true"}},[t._v("#")]),t._v(" Accessing Data Within Loops")]),t._v(" "),e("p",[t._v("Within loops, Redux will automatically update your Redux global variable with the appropriate values. If you're trying to do it another way, you will need to use the following function:")]),t._v(" "),e("p",[e("code",[t._v('php<br />$value = redux_post_meta( "OPT_NAME", "THE_POST", "META_KEY" )<br />')])]),t._v(" "),e("p",[t._v("You can use this anywhere to grab a specific value or all values. The "),e("code",[t._v("OPT_NAME")]),t._v(" and "),e("code",[t._v("THE_POST")]),t._v(" are the required attributes. "),e("code",[t._v("OPT_NAME")]),t._v(" is your Redux opt_name. "),e("code",[t._v("THE_POST")]),t._v(" can be a post object or just a post ID. If no "),e("code",[t._v("META_KEY")]),t._v(" is specified, an array of all meta will be returned. If you specify the "),e("code",[t._v("META_KEY")]),t._v(" only that value will be returned to you.")]),t._v(" "),e("h4",{attrs:{id:"help-the-defaults-are-not-in-the-array"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#help-the-defaults-are-not-in-the-array","aria-hidden":"true"}},[t._v("#")]),t._v(" Help! The defaults are not in the array!")]),t._v(" "),e("p",[e("span",{staticStyle:{"text-decoration":"line-through"}},[t._v('You are correct. Redux Metaboxes will not ever store a "default" value. Know that when you query for values')]),t._v(". As of Metaboxes 1.4.4 you can set the global argument of "),e("code",[t._v("metaboxes_save_defaults")]),t._v(" to enable default values being saved to the database.")]),t._v(" "),e("h3",{attrs:{id:"missing-sidebar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#missing-sidebar","aria-hidden":"true"}},[t._v("#")]),t._v(" Missing Sidebar?!")]),t._v(" "),e("p",[t._v("For boxes in the "),e("code",[t._v("standard")]),t._v(" position and with only one section, the sidebar is omitted when the HTML is output. If you want a side bar, use at least two sections within any given standard position metabox.")]),t._v(" "),e("h3",{attrs:{id:"binding-metabox-visibility-to-page-template-post-formats"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-metabox-visibility-to-page-template-post-formats","aria-hidden":"true"}},[t._v("#")]),t._v(" Binding Metabox Visibility to Page Template & Post Formats")]),t._v(" "),e("p",[t._v("Yes, metaboxes does that for you too. As denoted above, you need only declare "),e("code",[t._v("page_template")]),t._v(" or "),e("code",[t._v("post_format")]),t._v(" on the box array for a given metabox. The visibility will be affected accordingly. You can provide an array for each. Obviously, page_templates won't affect a box that only appears on the post type. 😉")]),t._v(" "),e("p",[t._v("For a full list of post formats see "),e("a",{attrs:{target:"_blank"}},[t._v("http://codex.wordpress.org/Post_Formats")]),t._v(".")]),t._v(" "),e("p",[t._v("The value of your page_template will be the actual filename of your given template.")]),t._v(" "),e("h3",{attrs:{id:"how-are-the-redux-metabox-values-stored"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-are-the-redux-metabox-values-stored","aria-hidden":"true"}},[t._v("#")]),t._v(" How are the Redux Metabox Values Stored?")]),t._v(" "),e("p",[t._v("Redux Metaboxes (as of "),e("em",[t._v("1.2.3")]),t._v(") stores each value as it's own key in the meta. In this way, you can query against specific meta values. If a value is default, it deletes that value to free up the database.")]),t._v(" "),e("h5",{attrs:{id:"wait-wasn-t-the-meta-all-stored-in-one-key-value"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wait-wasn-t-the-meta-all-stored-in-one-key-value","aria-hidden":"true"}},[t._v("#")]),t._v(" Wait, wasn't the meta all stored in one key value?")]),t._v(" "),e("p",[t._v("Yes, until recently. Don't worry, if such a key still exists your data will be automatically migrated the moment that post's meta is accessed.")])])},[],!1,null,null,null);a.default=n.exports}}]);