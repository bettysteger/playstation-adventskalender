async function redeemCodes() {
  let codes = window.prompt('Paste the codes here');
  if (!codes || !codes.length) { return; }

  const re = /^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$/; // XXX-XXX-XXX
  codes = codes.split(/\s+/).filter(code => re.test(code));
  if (!codes.length) { return; }

  for (const code of codes) {
    const codeInput = document.querySelector('input[name="code"]');
    codeInput.value = code;
    codeInput.dispatchEvent(new Event('change'));
    const btn = codeInput.form.querySelector('button');
    btn.disabled = false;
    btn.click();
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}
redeemCodes();
