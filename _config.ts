import lume from "lume/mod.ts";
import vento from "lume/plugins/vento.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import favicon from "lume/plugins/favicon.ts";
import svgo from "lume/plugins/svgo.ts";
import inline from "lume/plugins/inline.ts";
import metas from "lume/plugins/metas.ts";

const site = lume()
  .use(vento())
  .use(lightningcss())
  .use(svgo())
  .use(inline())
  .use(metas())
  .use(favicon({
    input: "index.gal.svg",
  }))
  .copy("index.gal.svg");

export default site;
