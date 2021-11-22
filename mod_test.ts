import { assert } from "https://deno.land/std@0.97.0/testing/asserts.ts";

import dir from "./mod.ts";

Deno.test("test that dir return value is not null and length is more than 0", (): void => {
  const home = dir("home");
  assert(home?.length && home.length > 0);

  const cache = dir("cache");
  assert(cache?.length && cache.length > 0);

  const config = dir("config");
  assert(config?.length && config.length > 0);

  const download = dir("download");
  assert(download?.length && download.length > 0);
});
