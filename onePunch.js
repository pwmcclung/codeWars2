const onePunch = items =>
  typeof items === "string" && items.length > 0
    ? items.split(` `).sort((a, b) => a.localeCompare(b)).join` `.replace(/[eaEA]/g,''): "Broken!";