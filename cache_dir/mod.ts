/** Returns the path to the user's cache directory.
 *
 * The returned value depends on the operating system and is either a string,
 * containing a value from the following table, or `null`.
 * 
 * |Platform | Value                               | Example                          |
 * | ------- | ----------------------------------- | -------------------------------- |
 * | Linux   | `$XDG_CACHE_HOME` or `$HOME`/.cache | /home/justjavac/.cache           |
 * | macOS   | `$HOME`/Library/Caches              | /Users/justjavac/Library/Caches  |
 * | Windows | `{FOLDERID_LocalAppData}`           | C:\Users\justjavac\AppData\Local |
 */
export default function cache_dir(): string | null {
  switch (Deno.build.os) {
    case "linux": {
      const cache_home = Deno.env.get("XDG_CACHE_HOME");
      if (cache_home) return cache_home;

      const home = Deno.env.get("HOME");
      if (home) return `${home}/.cache`;
      break;
    }

    case "darwin": {
      const home = Deno.env.get("HOME");
      if (home) return `${home}/Library/Caches`;
      break;
    }

    case "windows":
      return Deno.env.get("FOLDERID_LocalAppData") ?? null;
  }

  return null;
}
