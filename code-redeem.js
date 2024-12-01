async function redeemCodes() {
  let codes = window.prompt('Paste the codes here');
  if (!codes || !codes.length) { return; }

  const re = /^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$/; // XXX-XXX-XXX
  codes = codes.split(/\s+/).filter(code => re.test(code));
  if (!codes.length) { return; }

  for (const code of codes) {
    let menuBtn = document.querySelector('button[aria-label="Code einlösen"]');
    if (!menuBtn) { // mobile
      document.querySelector('a[data-href="redeem-code"]').click();
    } else if (!menuBtn.attributes['aria-describedby']) {
      menuBtn.click();
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    const codeInput = document.getElementById('form-code-input') || document.getElementById('redeem-code-input');
    codeInput.value = code;
    document.querySelector('button[type="submit"][data-mn="redeem code"]').click();
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}
redeemCodes();
