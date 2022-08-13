function chuckPushUps(string) {
    if (typeof string !== "string" || string.length === 0) return "FAIL!!";
    if (/[01]/.test(string))
      return Math.max(
        ...string.split` `
          .map(v => v.replace(/[^01]/g, ""))
          .map(v => parseInt(v, 2))
          .filter(v => !isNaN(v))
      );
    return "CHUCK SMASH!!";
  }