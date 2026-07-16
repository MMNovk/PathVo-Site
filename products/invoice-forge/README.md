# Invoice Forge — Quick Start (v1.1)

Thanks for buying Invoice Forge! You now own a complete invoicing app in a single file. No account, no subscription, no internet required.

## Getting started (30 seconds)

1. Save `invoice-forge.html` anywhere on your computer (Documents is a good spot).
2. Double-click it — it opens in your browser.
3. Click **+ New invoice**, fill in your business details once, add your client and line items, and watch the invoice build itself in the live preview.

Your business info, currency, and payment terms are remembered automatically, so your second invoice takes about a minute.

## Sending an invoice as a PDF

Open the invoice and click **Print / Save PDF**. In your browser's print dialog, choose **Save as PDF** as the destination. Only the invoice itself prints — clean and ready for A4 or Letter — and you can email the PDF to your client.

## Your client address book

Once you've filled in a client's details on an invoice, press **Save client** (in the Bill to section) to add them to your address book. On the next invoice, just pick them from the **Saved clients** dropdown and their name, email, and address fill in instantly.

- Saving a client again under the same name updates their details.
- Click **Manage** to rename or remove saved clients — existing invoices keep whatever was on them.
- Saved clients are included in your JSON backups, so they travel with your data.

## Exporting a spreadsheet (CSV)

On the invoice list, click **Export CSV** to download every invoice as a spreadsheet-ready file: invoice number, client, dates, status, currency, subtotal, tax, and total. It opens directly in Excel, Numbers, or Google Sheets — handy for bookkeeping, tax time, or handing to your accountant.

## Tracking payments

- Each invoice has a status: **Draft → Sent → Paid**. Set it with the toggle at the top of the editor, or use the checkmark button in the invoice list to mark it paid.
- A sent invoice past its due date automatically shows as **Overdue**.
- The dashboard at the top shows your outstanding total, what you've been paid this month, and how many invoices are overdue.

## How your data is stored

Everything is saved instantly and privately in your browser's local storage, on your computer. Nothing is ever uploaded anywhere — Invoice Forge makes zero network requests.

Two things to know:

- Data is tied to **this browser on this computer** and to the file's location. If you open the file in a different browser (or move the file to a different folder in some browsers), you'll see a fresh, empty app — your data isn't gone, it's just in the other browser.
- Clearing your browser's site data/history can erase local storage. That's what backups are for.

## Backing up (do this!)

Click **Export backup** in the top bar. You'll get a JSON file with every invoice, your business profile, and your saved clients. Keep it with your other documents or in your cloud drive.

To restore — or to move to a new computer or browser — open Invoice Forge there and click **Import**, then pick your backup file. A good habit: export a backup after each invoicing session.

## Tips

- **Duplicate** is the fastest way to bill a repeat client — it copies everything and issues a fresh invoice number.
- Invoice numbers auto-increment and follow your format: change one to `JRD-2026-041` and the next will be `JRD-2026-042`.
- Discounts can be a percentage or a fixed amount; tax is applied after the discount.
- Currencies supported: USD, EUR, GBP, CAD, AUD — per invoice, so you can bill international clients side by side.

Happy invoicing!
