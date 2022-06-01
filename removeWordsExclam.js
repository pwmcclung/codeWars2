function remove (string) {
    return string.split(" ").map(v => v.replace(/(^\w+!$|^!\w+$)/, "")).join(" ").trim().replace(/\s+/g, " ");
    }