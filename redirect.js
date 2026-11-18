/* The site moved from /cs379-quest/ to /study-quest/. Send old links to the right new page,
   keeping ?query (approval email links) and #hash (score links). */
(function () {
  "use strict";
  var OLD = "/cs379-quest", NEW = "/study-quest";
  var p = location.pathname;
  var rest = p.indexOf(OLD) === 0 ? p.slice(OLD.length) : "/";
  var to;
  if (rest === "" || rest === "/" || rest === "/index.html") to = NEW + "/cs379-quest/";   // the old link was the CS 379 guide
  else if (rest.indexOf("/cs379/") === 0 || rest === "/cs379") to = NEW + "/cs379-quest/" + rest.replace(/^\/cs379\/?/, "");
  else if (/^\/[A-Za-z0-9._\/-]*$/.test(rest) && rest.indexOf("..") < 0) to = NEW + rest;
  else to = NEW + "/";
  location.replace(to + location.search + location.hash);
})();
