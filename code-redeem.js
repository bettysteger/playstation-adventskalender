async function redeemCodes() {
  let codes = window.prompt('Paste the codes here');
  if (!codes || !codes.length) { return; }

  codes = codes.split(/\s+/);
  if (!codes.length) { return; }

  for (const code of codes) {
    const menuBtn = document.querySelector('button[aria-label="Code einlösen"]');
    if (!menuBtn.attributes['aria-describedby']) {
      menuBtn.click();
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    document.getElementById('form-code-input').value = code;
    document.querySelector('button[type="submit"][data-mn="redeem code"]').click();
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}
redeemCodes();
