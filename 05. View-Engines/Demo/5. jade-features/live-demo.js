function template(locals) {
var jade_debug = [{ lineno: 1, filename: "live-demo.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "live-demo.jade" });
jade_debug.unshift({ lineno: 1, filename: "live-demo.jade" });
buf.push("<!DOCTYPE html>");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "live-demo.jade" });
buf.push("\n<html lang=\"en\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "live-demo.jade" });
buf.push("\n  <head>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "live-demo.jade" });
buf.push("\n    <title>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "live-demo.jade" });
buf.push("This is the title in the tab of the browser");
jade_debug.shift();
jade_debug.shift();
buf.push("</title>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </head>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</html>");
jade_debug.shift();
jade_debug.shift();}("undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "doctype html\nhtml(lang='en')\n  head\n    title\n      | This is the title in the tab of the browser");
}
}