# OASIS URGENCH website

Static one-page site for the OASIS URGENCH, OK guest house, in English, Russian and Uzbek, plus a privacy policy page. It has no build step.

## Edit contact details

Open `assets/config.js` and edit the address, phone, email, Telegram, WhatsApp and the Booking.com link. Empty fields stay hidden on the page.
Keep `legalName` and the address identical to the D-U-N-S record.

## Deploy on Netlify (free)

- **Drag and drop:** go to https://app.netlify.com/drop and drop this folder.
- **From GitHub:** Netlify → Add new site → Import from Git → pick this repo. Leave the build command empty; the publish directory is `.` (already set in `netlify.toml`). Every push then redeploys automatically.

Rename the site under Site configuration → Change site name, for example `oasis-urgench`, which gives `https://oasis-urgench.netlify.app`.

## Verify for Google Play Console

1. In Play Console → Account details → Website, enter the Netlify URL.
2. Google Search Console asks for proof of ownership. Use the **HTML tag** method: copy the `<meta name="google-site-verification" ...>` tag into `index.html` where the comment marks the spot, push or redeploy, then click Verify.
3. Use `https://<your-site>.netlify.app/privacy.html` as the app's privacy policy URL.
