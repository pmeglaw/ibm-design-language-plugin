# Dynamic icon and pictogram galleries

Use with [icons and pictograms](icons-and-pictograms.md) when selecting an asset, interpreting the public library pages or building a searchable symbol catalog. Source scope: website commit d8783ad2ae3b5e59c58f58311491f8a2c4e62631, the two library-page wrappers and 17 SVG-library support files. Website yarn.lock resolves @carbon/icons 11.89.0 and @carbon/pictograms 12.85.0. Category names were reviewed and all 4,351 metadata records structurally scanned; individual glyph geometry, aliases and rendered assets were not exhaustively reviewed.

## Resolve the actual asset

The [icon library](https://carbondesignsystem.com/elements/icons/library/) and [pictogram library](https://carbondesignsystem.com/elements/pictograms/library/) inject external package metadata and dynamic React assets. Gallery visibility is not an installed export inventory: deprecated or specially excluded entries can be hidden while still packaged. Verify the target package version, actual export, chosen size and semantic meaning. Brand/third-party-logo categories are not permission to use a trademark or override product color authority.

Icon metadata groups 2,775 records into seven categories and 27 subcategories: Actions (Controls, Formatting, Navigation, Operations, Toggle), Brand (Third-party logos, IBM, Social), Enterprise (AI, App catalogue, Commerce, Health, Research), Organization (Alphanumeric, Data, File, Status, Systems), Person (Senses, User), Planning (Time, Travel, Weather), Tools (Technology, Instruments). Pictogram metadata groups 1,576 records into 44 flat categories. These taxonomy snapshots help locate symbols; they are not a stable application-domain taxonomy or instructions to expose every category in a product.

The inspected SvgCard chooses a numeric 32px asset when multiple assets exist and falls back between moduleInfo and output metadata. Validate chosen source/export before dereferencing it; do not assume every future metadata record has the same structure. This snapshot's automated scan found no missing friendly names/categories, empty assets, null aliases, missing first asset sources or missing 32px variants in multi-asset records. That scan is structural evidence, not visual quality, accessible naming or future-version proof.

## Search and selection

Match relevant friendly name, asset name, aliases, category and icon subcategory. Distinguish zero results in the selected category from matches elsewhere; preserve the query when offering All categories. Keep the search and category control programmatically named, preserve selection and keyboard recovery, and state the effective result scope/count. Confirm exact installed Search placeholder prop casing; the website's placeHolderText spelling is not API authority.

Use a stable debounced callback with cleanup and a response-order policy if search is asynchronous. The inspected website recreates its debounced setter without cancellation. Use a signed comparison or localeCompare for alphabetical order: a boolean comparator does not establish correct ordering. Pictogram source used a boolean comparison; this is a source defect to avoid, not approved ordering behavior.

## Virtualization, focus and actions

The inspected intersection observer mounts/unmounts card actions as visibility changes. Verify keyboard traversal, focused-card scrolling, focus retention/recovery, accessible exposure and unsupported-observer/loading/error cases. aria-hidden plus opacity 0 does not remove descendants from tab order. In this source, onFocus reveals an action bar; test the settled exposure/name/focus contrast instead of assuming either complete hiding or complete accessibility.

Copy feedback must follow the actual clipboard result. The inspected ActionBar sets Copied before checking the library outcome and leaves a reset timeout without cleanup. Report failure honestly and clean up pending callbacks. Revoke task-owned object URLs after downloads when safe, preserve the intended filename/content and verify the actual result; a click or copied label alone is not success evidence.

Use valid list structure: ul/ol children should be li rather than a directly nested ul. Match JS column calculations to the actual CSS media queries at exact boundaries; inspected max-lg/min-lg logic can select four columns while CSS selects six. This is a source-level boundary concern, not a measured live website failure. Avoid importing website-specific hardcoded colors/shadows/z-index/motion into a governed product.

Internal contribution request destinations and master SVG links were not accessed. No browser/assistive-technology, clipboard/download, every-glyph palette/shape or full catalog visual pass is claimed. Use this source review to identify checks; run the applicable checks for the target implementation.
