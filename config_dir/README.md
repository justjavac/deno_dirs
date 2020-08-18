# config_dir

Returns the path to the user's config directory.

The returned value depends on the operating system and is either a string,
containing a value from the following table, or `null`.

|Platform | Value                                 | Example                              |
| ------- | ------------------------------------- | ------------------------------------ |
| Linux   | `$XDG_CONFIG_HOME` or `$HOME`/.config | /home/justjavac/.config              |
| macOS   | `$HOME`/Library/Preferences           | /Users/justjavac/Library/Preferences |
| Windows | `{FOLDERID_RoamingAppData}`           | C:\Users\justjavac\AppData\Roaming   |

## Usage

Requires `allow-env` permission.

Returns `null` if there is no applicable directory or if any other error occurs.

```ts
import config_dir from "https://deno.land/x/config_dir/mod.ts";

config_dir();
// Lin: "/home/justjavac/.config"
// Mac: "/Users/justjavac/Library/Preferences"
// Win: "C:\Users\justjavac\AppData\Roaming"
```
