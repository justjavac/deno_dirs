# deno_dirs

[![tag](https://img.shields.io/github/release/justjavac/deno_dirs)](https://github.com/justjavac/deno_dirs/releases)
[![Build Status](https://github.com/justjavac/deno_dirs/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_dirs/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_dirs)](https://github.com/justjavac/deno_dirs/blob/master/LICENSE)
[![](https://img.shields.io/badge/deno-v1.3-green.svg)](https://github.com/denoland/deno)

Returns the user and platform specific directories.

In v1.1.2(2020.06.26), Deno [Remove `Deno.dir` and dirs dependency #6385](https://github.com/denoland/deno/pull/6385)

## Usage

Requires `allow-env` permission.

Returns `null` if there is no applicable directory or if any other error occurs.

```ts
import * as dirs from "https://deno.land/x/dirs/mod.ts";
// or import { home_dir } from "https://deno.land/x/dirs/mod.ts";

dirs.home_dir();
// Lin: "/home/justjavac"
// Win: "C:\Users\justjavac"
// Mac: "/Users/justjavac"

dirs.audio_dir();
// Lin: "/home/justjavac/Music"
// Win: "C:\Users\justjavac\Music"
// Mac: "/Users/justjavac/Music"

dirs.config_dir();
// Lin: "/home/justjavac/.config"
// Win: "C:\Users\justjavac\AppData\Roaming"
// Mac: "/Users/justjavac/Library/Application Support"

dirs.executable_dir();
// Lin: "/home/justjavac/.local/bin"
// Win: null
// Mac: null
```

### License

[deno_dirs](https://github.com/justjavac/deno_dirs) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
