# home_dir

Returns the path to the user's home directory.

The returned value depends on the operating system and is either a string,
containing a value from the following table, or `null`.

| Platform | Value          | Example            |
| -------- | -------------- | ------------------ |
| Linux    | `$HOME`        | /home/justjavac    |
| macOS    | `$HOME`        | /Users/justjavac   |
| Windows  | `$USERPROFILE` | C:\Users\justjavac |

## Usage

Requires `allow-env` permission.

Returns `null` if there is no applicable directory or if any other error occurs.

```ts
import home_dir from "https://deno.land/x/home_dir/mod.ts";

home_dir();
// Lin: "/home/justjavac"
// Win: "C:\Users\justjavac"
// Mac: "/Users/justjavac"
```
