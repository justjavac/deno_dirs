import { join } from "https://deno.land/std@0.115.1/path/mod.ts";
import home_dir from "../home_dir/mod.ts";

/** Returns the path to the user's download directory.
 *
 * The returned value depends on the operating system and is either a string,
 * containing a value from the following table, or `null`.
 *
 * |Platform | Value                  | Example                      |
 * | ------- | ---------------------- | ---------------------------- |
 * | Linux   | `XDG_DOWNLOAD_DIR`     | /home/justjavac/Downloads    |
 * | macOS   | `$HOME`/Downloads      | /Users/justjavac/Downloads   |
 * | Windows | `$USERPROFILE\Downloads` | C:\Users\justjavac\Downloads |
 */
export default function download_dir(): string | null {
  const homeDir = home_dir();

  if (!homeDir) {
    return null;
  } else {
    return join(homeDir, "Downloads");
  }
}
