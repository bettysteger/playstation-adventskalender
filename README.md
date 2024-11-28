# PlayStation Adventskalender

## Bookmarklet

1. Create Bookmark with the name 'PS Codes'
2. Add this as URL

```
javascript:(function()%7Basync function redeemCodes()%7Blet e=window.prompt("Paste the codes here");if(e&&e.length&&(e=e.split(/%5Cs+/),e.length))for(const t of e)%7Bconst e=document.querySelector('button%5Baria-label="Code einlösen"%5D');e.attributes%5B"aria-describedby"%5D%7C%7C(e.click(),await new Promise((e=>setTimeout(e,100)))),document.getElementById("form-code-input").value=t,document.querySelector('button%5Btype="submit"%5D%5Bdata-mn="redeem code"%5D').click(),await new Promise((e=>setTimeout(e,1e3)))%7D%7DredeemCodes();%7D());
```

3. Click the bookmark on the [PlayStation Adventskalender](https://www.adventskalender-gewinnspiele.at/playstation)
