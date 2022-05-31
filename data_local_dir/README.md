# data_local_dir

Returns the path to the user's local data directory.

The returned value depends on the operating system and is either a string,
containing a value from the following table, or `null`.

| Platform | Value                                    | Example                                      |
| -------- | ---------------------------------------- | -------------------------------------------- |
| Linux    | `$XDG_DATA_HOME` or `$HOME`/.local/share | /home/justjavac/.local/share                 |
| macOS    | `$HOME`/Library/Application Support      | /Users/justjavac/Library/Application Support |
| Windows  | `$LOCALAPPDATA`                          | C:\Users\justjavac\AppData\Local             |

## Usage

Requires `allow-env` permission.

Returns `null` if there is no applicable directory or if any other error occurs.

```ts
import data_local_dir from "https://deno.land/x/dir/data_local/mod.ts";

data_local_dir();
// Lin: "/home/justjavac/.local/share"
// Mac: "/Users/justjavac/Library/Application Support"
// Win: "C:\Users\justjavac\AppData\Local"
```
