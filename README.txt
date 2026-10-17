Elevor360D Iona Cruise Companion V4.2 TEST — LINK REMOVAL FIX

This package removes external P&O and deck-plan links. The Deck Guide and My Cabin pages now contain an INTERNAL schematic only. It is not a precise numbered cabin floor plan.

IMPORTANT: Upload ALL extracted files to the ROOT of the SAME GitHub Pages repository, replacing index.html, app.js, sw.js, style.css and all others. Do not upload the ZIP as a single file. Wait for GitHub Pages to deploy.

Open the app online and confirm VERSION 4.2 · TEST at the top. If it still says V4 or V4.1, the old app is being served: close the installed app, open the website in a browser, refresh twice. If needed, clear ONLY this site's cached files/service worker (not its site data), then reopen. Do not clear site storage without exporting your backup first.

This release uses a new service-worker cache name and versioned JavaScript/CSS URLs to help replace older cached versions. Existing V1–V4.1 data migrates in the same browser/site; export a backup before updating.

No external P&O navigation links are included in the passenger app. Advertising URLs can still be entered by the site owner in advert-settings.json; these are separate from ship-guide links.

V4.3: Removed duplicate home-screen shortcut buttons. Top navigation remains. V4.2 local data migrates automatically.

VERSION 5: New cabin finder tab with locally saved cabin-number records, search, CSV import/export and offline use. No exact cabin coordinates are preloaded because they have not been verified. Existing V4.3 browser records migrate automatically. Make a backup before upgrading.

VERSION 6: Interactive deck orientation diagram (schematic only), deck selection, cabin markers from saved/imported records, persistent notes. Verified exact cabin locations and lift/stair geometry are NOT included. V5 data migrates in the same browser and origin. The diagram does not reproduce P&O copyrighted floor plans. Back up before upgrading.
