/** Returns the path to the user's home directory.
 *
 * The returned value depends on the operating system and is either a string,
 * containing a value from the following table, or `null`.
 *
 * |Platform | Value                                    | Example                |
 * | ------- | -----------------------------------------| -----------------------|
 * | Linux   | `$HOME`                                  | /home/justjavac        |
 * | macOS   | `$HOME`                                  | /Users/justjavac       |
 * | Windows | `$USERPROFILE`                          | C:\Users\justjavac     |
 */
export default function home_dir(): string | null {
  switch (Deno.build.os) {
    case "linux":
    case "darwin":
      return Deno.env.get("HOME") ?? null;
    case "windows":
      return Deno.env.get("USERPROFILE") ?? null;
  }
}
