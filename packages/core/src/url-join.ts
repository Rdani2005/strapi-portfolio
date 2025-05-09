export function join(...parts: Array<string>): string {
  let url = "";
  for (const part of parts) {
    const value = (part ?? "").trim();
    if (!value) continue;

    url =
      url === ""
        ? value
        : `${url.replace(/\/+$/, "")}/${value.replace(/^\/+/, "")}`;
  }
  return url;
}
