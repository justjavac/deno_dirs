# download_dir

Returns the path to the user's download directory.

The returned value depends on the operating system and is either a string, containing a value from the following table, or `null`.

|Platform | Value                    | Example                      |
| ------- | ----------------------   | ---------------------------- |
| Linux   | `XDG_DOWNLOAD_DIR`       | /home/justjavac/Downloads    |
| macOS   | `$HOME`/Downloads        | /Users/justjavac/Downloads   |
| Windows | `$USERPROFILE`\Downloads | C:\Users\justjavac\Downloads |

## Usage

Requires `allow-env` permission.

Returns `null` if there is no applicable directory or if any other error occurs.

```ts
import downloads_dir from "https://deno.land/x/download_dir/mod.ts";

download_dir();
// Lin: "/home/justjavac/Downloads"
// Win: "C:\Users\justjavac\Downloads"
// Mac: "/Users/justjavac/Downloads"
```
