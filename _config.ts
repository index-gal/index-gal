import lume from "lume/mod.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import favicon from "lume/plugins/favicon.ts";
import svgo from "lume/plugins/svgo.ts";
import inline from "lume/plugins/inline.ts";
import metas from "lume/plugins/metas.ts";
import basepath from "lume/plugins/base_path.ts";
import date from "lume/plugins/date.ts";
import { google } from "npm:calendar-link@2.6.0";
import gl from "npm:date-fns@2.30.0/locale/gl/index.js";

const site = lume({
  location: new URL("https://index.gal"),
})
  .use(lightningcss())
  .use(svgo())
  .use(inline())
  .use(metas())
  .use(basepath())
  .use(date({
    locales: { gl },
  }))
  .use(favicon({
    input: "index.gal.svg",
  }))
  .copy("index.gal.svg")
  .copy("CNAME")
  .copy([".js"])
  .filter("google_calendar", google)
  .remoteFile(
    "lite-yt-embed.js",
    "https://cdn.jsdelivr.net/npm/lite-youtube-embed@0.3.1/src/lite-yt-embed.js",
  )
  .remoteFile(
    "lite-yt-embed.css",
    "https://cdn.jsdelivr.net/npm/lite-youtube-embed@0.3.1/src/lite-yt-embed.css",
  );

export default site;
