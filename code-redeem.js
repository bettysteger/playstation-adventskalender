async function redeemCodes() {
  let codes = window.prompt('Paste the codes here');
  if (!codes || !codes.length) { return; }

  const re = /^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$/; // XXX-XXX-XXX
  codes = codes.split(/\s+/).filter(code => re.test(code));
  if (!codes.length) { return; }

  const codeInput = document.querySelector('input[name="code"]');
  const btn = codeInput.form.querySelector('button');
  
  for (const code of codes) {
    codeInput.select();
    document.execCommand('insertText', false, code);
    btn.click();
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}
redeemCodes();
