# Wellington AI — RAC State Finance Simulator Integration Package

## Purpose
Adds **State Finance Simulator** as the seventh subtask under **Govt Revenue Enhancement Projects**. Includes a ten-year government revenue / fiscal-deficit offset chart, scenario controls, annual reconciliation and CSV export. Does **not** overwrite or modify the six existing projects.

## Deploy into the EXISTING wellington-ai.vercel.app project
The production Vercel project is GitHub-backed (`wellingtonmarketers2017-png/wellingtonai`, branch `main` as inspected on 23 November 2026). Uploading this ZIP as an independent Vercel project **will not update the existing website**. Merge the component into the existing GitHub source and let the linked Vercel project build it.

1. Download and unzip this package.
2. Copy `components/StateFinanceSimulator.jsx` into your application's source (adjust path for its structure).
3. In the existing `Govt Revenue Enhancement Projects` navigation, append a **State Finance Simulator** tab after the six existing projects. Keep all six existing tabs and their IDs unchanged.
4. Import and render the component in that new tab. Example for a React/Next.js app:

   ```jsx
   import StateFinanceSimulator from './components/StateFinanceSimulator';
   // Inside the existing tab-content switch:
   {activeTab === 'state-finance' && <StateFinanceSimulator />}
   ```

5. Ensure the existing application supports JSX/React and client components. No third-party chart package is required; the chart uses SVG.
6. Test on a preview branch / Vercel preview deployment. Check navigation, responsiveness, CSV export, and that the original six modules still work.
7. Merge the reviewed change to the production branch (`main`) to update `wellington-ai.vercel.app` through its existing Vercel Git integration.

## Alternative standalone preview
`public/state-finance-standalone.html` is a standalone HTML version for reference/testing. It is **not** the integration entry point and should not replace the site's `index.html`.

## Model assumptions
All figures are illustrative. The ₹78,324 crore reference deficit is based on prior discussion and must be independently validated against an official source. Net fiscal offset = incremental government receipts + validated net expenditure savings − implementation costs. Do not count commercial turnover or GVA as direct state receipts. Do not double-count GST or TN IGS savings across projects. Annual underlying deficit growth is an editable scenario assumption.

## RAC readiness checklist
- Validate official 2021 and 2026 baseline figures and their reporting years.
- Reconcile revenue versus fiscal deficit; this version models **revenue deficit** only.
- Replace hypothetical revenue capture and savings with approved project-level estimates.
- Add auditable citations, approvals, methodology and change log before formal submission.
- Review role-based access and confidentiality before exposing sensitive data publicly.

## Package status
Integration source and standalone demo provided; production website has **not** been changed by this ZIP.

## Fiscal deficit extension (23 November 2026)
The simulator now includes a separate editable fiscal deficit reference (₹1,33,000 crore), a fiscal deficit Year 1–10 chart, incremental public capital outlays and a fiscal reconciliation table. Fiscal deficit offset = incremental receipts + savings − operating implementation costs − additional capital expenditure. This is an illustrative model, not audited state data.
