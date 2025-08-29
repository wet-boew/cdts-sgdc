# CDTS Change Log

## v5.0.5

- **IMPORTANT** The new version of WET includes changes to font size. Please verify your application remains visually consistent and renders correctly.
- Updated [WET](https://github.com/wet-boew/wet-boew/releases/) to v4.0.89.
- The "Share This Page" button is being decommmisioned. It will no longer show by default. Please visit the sample pages for all the details.
- Updated page footer with a new link
- Added a Contributors pattern allowing users to highlight departments that have contributed to the content of the page. Please visit the sample pages for all the details.
- Added an optional parameter *languagePrecedence* to the splash page allowing users to decide the order of official languages
- Internal changes and optimizations
- Bug fixes

## v5.0.4.1

- Changes to GCIntranet template for accessibility.

## v5.0.4

- Updated [WET](https://github.com/wet-boew/wet-boew/releases/) to v4.0.85.
- Internal changes and optimizations
- Bug fixes

## v5.0.3

- Accessibility and responsive design fixes for GCIntranet
- Internal changes and optimizations
- Bug fixes

## v5.0.2

- Updated [WET](https://github.com/wet-boew/wet-boew/releases/) to v4.0.81.

## v5.0.1

- Updated [WET](https://github.com/wet-boew/wet-boew/releases/) to v4.0.79.
- Internal changes and optimizations
- Bug fixes

## v5.0.0
- **IMPORTANT** **BREAKING CHANGE** Exitscript no longer uses targetUrl as part of the query string to pass the destination link. Please visit the [sample page](https://cdts.service.canada.ca/app/cls/WET/gcweb/v5_0_0/cdts/samples/exitscript-en.html) for all the details.
- Replacing the 'Report a problem button' with the new Page Feedback tool. The Page Feedback tool is optional and will be hidden unless explicitly enabled and other conditions are met. Please visit the [sample page](https://cdts.service.canada.ca/app/cls/WET/gcweb/v5_0_0/cdts/samples/feedback-and-share-en.html) for more information.
- Updated [WET](https://github.com/wet-boew/wet-boew/releases/) to v4.0.70.1.
- Internal changes and optimizations
- Bug fixes

## v4.1.0

- Introducing a new **OPTIONAL** way for clients to reference CDTS that avoids the need for `document.write`, having to call multiple CDTS functions and optionally the need for inline scripts altogether. **Backwards compatibility to seperate CDTS functions was preserved.** For details, refer to documentation for [GCWeb](https://cenw-wscoe.github.io/sgdc-cdts/docs/internet-en.html) and [GCIntranet](https://cenw-wscoe.github.io/sgdc-cdts/docs/intranet-en.html) and [corresponding sample pages](https://github.com/wet-boew/cdts-sgdc/blob/master/public/gcweb/samples/nodoc-write-en.html) (other sample pages are still using document.write and will be updated later).
- Added support for Sub Resource Integrity (SRI)
  - CDTS can now include SRI hash values when including libraries and internal files on the page.  This is controlled by the `sriEnabled` boolean parameter in calling refTop, refFooter or the new setup function.
  - For clients to make use of SRI when referencing CDTS, hash values to public files are available for [GCWeb](https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_1_0/cdts/SRI-INFO.md) and [GCIntranet](https://cdts.service.canada.ca/app/cls/WET/gcintranet/v4_1_0/cdts/SRI-INFO.md)
- Updated [WET](https://github.com/wet-boew/wet-boew/releases/) to v4.0.63.
- Internal changes and optimizations
- Bug fixes

## v4.0.47

- **IMPORTANT** The GCWeb site footer has been updated to reflect the changes introduced in WET footer version 4. These changes will be applied automatically. For more information, please visit the WET documentation: https://wet-boew.github.io/GCWeb/sites/footers/footers-en.html
- Updated [WET](https://github.com/wet-boew/wet-boew/releases/) to v4.0.56.5.
- Internal changes and optimizations
- Bug fixes

## v4.0.46

- Updated [WET](https://github.com/wet-boew/wet-boew/releases/) to v4.0.55
- Added an optional parameter *hidePlaceholderMenu* to the GCIntranet theme, ESDC sub-theme. When set to true, this parameter is used to hide the placeholder menu while a custom menu is being loaded.
- Internal changes and optimizations
- Bug fixes

## v4.0.45

- **IMPORTANT** GCIntranet URLs https://ssl-templates.services.gc.ca and https://templates.services.gc.ca have been replaced by https://cdts.service.canada.ca hosted in the cloud. The old URLs still work but they now redirect to the new URL. GCIntranet URLs https://ssl-templates.service.gc.ca and https://templates.service.gc.ca are still being hosted on premise in ESDC.
- **IMPORTANT** Font Awesome has been removed from CDTS. If required, please add it directly in the &lt;head> of your html.
- Updated [WET](https://github.com/wet-boew/wet-boew/releases/) to v4.0.50.1
- Added an *acronym* parameter to the custom menu allowing users to provide a description for an abbreviation.  Please visit the sample pages for all the details.
- Updated search by adding an accept-charset attribute
- Updated ESDC, ECCC and Labour sub-themes to have a pre-configured layout
- Internal changes and optimizations
- Bug fixes

## v4.0.44

- Updated [WET](https://github.com/wet-boew/wet-boew/releases/) to v4.0.44.5
- Updated ExitScript which now uses an *exitSecureSite* object for its implementation. It is currently backwards compatible. Please visit the sample pages for all the details.
- Updated the url for Canada.ca search and removed hidden inputs
- Updated sample pages to include full path of js files
- Updated links to https
- Removed unused function loadDoc()
- Removed abbreviation element from breadcrumbs
- Removed link from error page
- Improved accessibility
- Internal changes and optimizations
- Bug fixes

## v4.0.43

- Updated [WET](https://github.com/wet-boew/wet-boew/releases/) to v4.0.43
- Updated static fallback files
- Fixed issue of menu links not displaying *leaving secure site* warning
- Added a *targetWarning* parameter for the exitScript allowing users to be warned that link will open in a new window
- Added a *displayModalForNewWindow* parameter for the exitScript allowing users to not show a modal if link opens in a new window
- Added a *footerPath* parameter allowing users to provide a custom footer link for the GCIntranet template
- Updated the mobile design for the Canada.ca template
- Implemented custom search for the Canada.ca template
- Added Aria tags for accessibility
- Created a brand new set of sample pages explaining the various features of CDTS
- Added ids for the sign in/sign out buttons for the GCIntranet application template
- Bug fixes
