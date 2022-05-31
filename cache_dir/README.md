# cache_dir

Returns the path to the user's cache directory.

The returned value depends on the operating system and is either a string,
containing a value from the following table, or `null`.

| Platform | Value                               | Example                          |
| -------- | ----------------------------------- | -------------------------------- |
| Linux    | `$XDG_CACHE_HOME` or `$HOME`/.cache | /home/justjavac/.cache           |
| macOS    | `$HOME`/Library/Caches              | /Users/justjavac/Library/Caches  |
| Windows  | `$LOCALAPPDATA`                     | C:\Users\justjavac\AppData\Local |

## Usage

Requires `allow-env` permission.

Returns `null` if there is no applicable directory or if any other error occurs.

```ts
import cache_dir from "https://deno.land/x/cache_dir/mod.ts";

cache_dir();
// Lin: "/home/justjavac/.cache"
// Mac: "/Users/justjavac/Library/Caches"
// Win: "C:\Users\justjavac\AppData\Local"
```
