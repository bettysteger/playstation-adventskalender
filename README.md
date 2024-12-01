# PlayStation Adventskalender

## Bookmarklet

1. Create Bookmark with the name 'PS Codes'
2. Add this as URL

```
javascript:(function(){async function redeemCodes(){let e=window.prompt("Paste the codes here");if(!e||!e.length)return;const t=/^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$/;if(e=e.split(/\s+/).filter((e=>t.test(e))),e.length)for(const t of e){let e=document.querySelector('button[aria-label="Code einlösen"]');e?e.attributes["aria-describedby"]||(e.click(),await new Promise((e=>setTimeout(e,100)))):document.querySelector('a[data-href="redeem-code"]').click();(document.getElementById("form-code-input")||document.getElementById("redeem-code-input")).value=t,document.querySelector('button[type="submit"][data-mn="redeem code"]').click(),await new Promise((e=>setTimeout(e,1e3)))}}redeemCodes();}());
```

3. Click the bookmark on the [PlayStation Adventskalender](https://www.adventskalender-gewinnspiele.at/playstation)
