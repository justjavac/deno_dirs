# tmp_dir

Returns the path to the tmp directory.

The returned value depends on the operating system and is either a string,
containing a value from the following table, or `null`.

| Platform | Value    | Example                               |
| -------- | -------- | ------------------------------------- |
| Linux    | `TMPDIR` | /tmp                                  |
| macOS    | `TMPDIR` | /var/folders/xx/xxxxxx/T/             |
| Windows  | `{TMP}`  | C:\Users\justjavac\AppData\Local\Temp |

## Usage

Requires `allow-env` permission.

Returns `null` if there is no applicable directory or if any other error occurs.

```ts
import tmp_dir from "https://deno.land/x/dir/tmp_dir/mod.ts";

tmp_dir();
// Lin: "/tmp"
// Win: "C:\Users\justjavac\AppData\Local\Temp"
// Mac: "/var/folders/xx/xxxxxx/T/"
```
