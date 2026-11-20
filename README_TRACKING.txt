TN-IGS sharing tracker

Default link after deployment:
https://<your-project>.vercel.app

Campaign/source example:
https://<your-project>.vercel.app/?src=email&campaign=investor-outreach

Recipient-token example (do not put the person's email address in the URL):
https://<your-project>.vercel.app/?src=email&campaign=investor-outreach&rid=R001

Tracked fields:
- anonymous browser visitor ID
- page-view / tab-view event
- timestamp
- referrer domain
- source/campaign
- optional recipient token (rid)

No email address is collected by default. To map R001 to a person, keep the mapping privately in your own CRM/spreadsheet.

Vercel backend logs contain entries beginning with TNIGS_VIEW and can be reviewed through Vercel runtime logs.
