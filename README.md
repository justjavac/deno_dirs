# deno_dirs

[![tag](https://img.shields.io/github/release/justjavac/deno_dirs)](https://github.com/justjavac/deno_dirs/releases)
[![Build Status](https://github.com/justjavac/deno_dirs/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_dirs/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_dirs)](https://github.com/justjavac/deno_dirs/blob/master/LICENSE)
[![](https://img.shields.io/badge/deno-v1.3-green.svg)](https://github.com/denoland/deno)

Returns the user and platform specific directories.

> _In v1.1.2(2020.06.26), Deno [Remove `Deno.dir` and dirs dependency #6385](https://github.com/denoland/deno/pull/6385)_

## Usage

```ts
import dir from "https://deno.land/x/dir/mod.ts";
const homeDirectory = dir("home");

// or
import home_dir from "https://deno.land/x/home_dir/mod.ts";
const homeDirectory = home_dir();
```

Requires `allow-env` permission.

Returns `null` if there is no applicable directory or if any other error
occurs.

Argument values: `"home"`, `"cache"`, `"config"`, `"executable"`, `"data"`,
`"data_local"`, `"audio"`, `"desktop"`, `"document"`, `"download"`,
`"font"`, `"picture"`, `"public"`, `"template"`, `"tmp"`, `"video"`

`"home"`

|Platform | Value                                    | Example                |
| ------- | -----------------------------------------| -----------------------|
| Linux   | `$HOME`                                  | /home/justjavac        |
| macOS   | `$HOME`                                  | /Users/justjavac       |
| Windows | `{FOLDERID_Profile}`                     | C:\Users\justjavac     |

`"cache"`

|Platform | Value                               | Example                          |
| ------- | ----------------------------------- | -------------------------------- |
| Linux   | `$XDG_CACHE_HOME` or `$HOME`/.cache | /home/justjavac/.cache           |
| macOS   | `$HOME`/Library/Caches              | /Users/justjavac/Library/Caches  |
| Windows | `{FOLDERID_LocalAppData}`           | C:\Users\justjavac\AppData\Local |

`"config"`

|Platform | Value                                 | Example                              |
| ------- | ------------------------------------- | ------------------------------------ |
| Linux   | `$XDG_CONFIG_HOME` or `$HOME`/.config | /home/justjavac/.config              |
| macOS   | `$HOME`/Library/Preferences           | /Users/justjavac/Library/Preferences |
| Windows | `{FOLDERID_RoamingAppData}`           | C:\Users\justjavac\AppData\Roaming   |

`"executable"`

|Platform | Value                                                           | Example                    |
| ------- | --------------------------------------------------------------- | ---------------------------|
| Linux   | `XDG_BIN_HOME` or `$XDG_DATA_HOME`/../bin or `$HOME`/.local/bin | /home/justjavac/.local/bin |
| macOS   | -                                                               | -                          |
| Windows | -                                                               | -                          |

`"data"`

|Platform | Value                                    | Example                                      |
| ------- | ---------------------------------------- | -------------------------------------------- |
| Linux   | `$XDG_DATA_HOME` or `$HOME`/.local/share | /home/justjavac/.local/share                 |
| macOS   | `$HOME`/Library/Application Support      | /Users/justjavac/Library/Application Support |
| Windows | `{FOLDERID_RoamingAppData}`              | C:\Users\justjavac\AppData\Roaming           |

`"data_local"`

|Platform | Value                                    | Example                                      |
| ------- | ---------------------------------------- | -------------------------------------------- |
| Linux   | `$XDG_DATA_HOME` or `$HOME`/.local/share | /home/justjavac/.local/share                 |
| macOS   | `$HOME`/Library/Application Support      | /Users/justjavac/Library/Application Support |
| Windows | `{FOLDERID_LocalAppData}`                | C:\Users\justjavac\AppData\Local             |

`"audio"`

|Platform | Value              | Example                  |
| ------- | ------------------ | ------------------------ |
| Linux   | `XDG_MUSIC_DIR`    | /home/justjavac/Music    |
| macOS   | `$HOME`/Music      | /Users/justjavac/Music   |
| Windows | `{FOLDERID_Music}` | C:\Users\justjavac\Music |

`"desktop"`

|Platform | Value                | Example                    |
| ------- | -------------------- | -------------------------- |
| Linux   | `XDG_DESKTOP_DIR`    | /home/justjavac/Desktop    |
| macOS   | `$HOME`/Desktop      | /Users/justjavac/Desktop   |
| Windows | `{FOLDERID_Desktop}` | C:\Users\justjavac\Desktop |

`"document"`

|Platform | Value                  | Example                      |
| ------- | ---------------------- | ---------------------------- |
| Linux   | `XDG_DOCUMENTS_DIR`    | /home/justjavac/Documents    |
| macOS   | `$HOME`/Documents      | /Users/justjavac/Documents   |
| Windows | `{FOLDERID_Documents}` | C:\Users\justjavac\Documents |

`"download"`

|Platform | Value                  | Example                      |
| ------- | ---------------------- | ---------------------------- |
| Linux   | `XDG_DOWNLOAD_DIR`     | /home/justjavac/Downloads    |
| macOS   | `$HOME`/Downloads      | /Users/justjavac/Downloads   |
| Windows | `{FOLDERID_Downloads}` | C:\Users\justjavac\Downloads |

`"font"`

|Platform | Value                                                | Example                            |
| ------- | ---------------------------------------------------- | ---------------------------------- |
| Linux   | `$XDG_DATA_HOME`/fonts or `$HOME`/.local/share/fonts | /home/justjavac/.local/share/fonts |
| macOS   | `$HOME/Library/Fonts`                                | /Users/justjavac/Library/Fonts     |
| Windows | –                                                    | –                                  |

`"picture"`

|Platform | Value                 | Example                     |
| ------- | --------------------- | --------------------------- |
| Linux   | `XDG_PICTURES_DIR`    | /home/justjavac/Pictures    |
| macOS   | `$HOME`/Pictures      | /Users/justjavac/Pictures   |
| Windows | `{FOLDERID_Pictures}` | C:\Users\justjavac\Pictures |

`"public"`

|Platform | Value                 | Example                 |
| ------- | --------------------- | ----------------------- |
| Linux   | `XDG_PUBLICSHARE_DIR` | /home/justjavac/Public  |
| macOS   | `$HOME`/Public        | /Users/justjavac/Public |
| Windows | `{FOLDERID_Public}`   | C:\Users\Public         |

`"template"`

|Platform | Value                  | Example                                                        |
| ------- | ---------------------- | -------------------------------------------------------------- |
| Linux   | `XDG_TEMPLATES_DIR`    | /home/justjavac/Templates                                      |
| macOS   | –                      | –                                                              |
| Windows | `{FOLDERID_Templates}` | C:\Users\justjavac\AppData\Roaming\Microsoft\Windows\Templates |

`"tmp"`

|Platform | Value                  | Example                                                    |
| ------- | ---------------------- | ---------------------------------------------------------- |
| Linux   | `TMPDIR`               | /tmp                                                       |
| macOS   | `TMPDIR`               | /tmp                                                       |
| Windows | `{TMP}`                | C:\Users\justjavac\AppData\Local\Temp                      |

`"video"`

|Platform | Value               | Example                  |
| ------- | ------------------- | ------------------------- |
| Linux   | `XDG_VIDEOS_DIR`    | /home/justjavac/Videos    |
| macOS   | `$HOME`/Movies      | /Users/justjavac/Movies   |
| Windows | `{FOLDERID_Videos}` | C:\Users\justjavac\Videos |

### License

[deno_dirs](https://github.com/justjavac/deno_dirs) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
