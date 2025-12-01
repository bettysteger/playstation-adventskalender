# PlayStation Adventskalender

## Bookmarklet

1. Create Bookmark with the name 'PS Codes'
2. Add this as URL

```
javascript:(function(){async function redeemCodes(){let e=window.prompt("Paste the codes here");if(!e||!e.length)return;const t=/^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$/;if(e=e.split(/\s+/).filter((e=>t.test(e))),!e.length)return;const o=document.querySelector('input[name="code"]'),n=o.form.querySelector("button");for(const t of e)o.select(),document.execCommand("insertText",!1,t),n.click(),await new Promise((e=>setTimeout(e,1e3)))}redeemCodes();}());
```

Or move the "PS Codes" Button into your bookmark bar on [PlayStation Adventskalender](https://www.adventskalender-gewinnspiele.at/playstation)
