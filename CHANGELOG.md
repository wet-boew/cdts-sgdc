# CDTS Change Log

## v4.0.45

- **IMPORTANT** Font Awesome has been removed from CDTS. If required, please add it directly in the &lt;head> of your html.
- Updated [WET](https://github.com/wet-boew/wet-boew/releases/) to v4.0.47.1
- Added an *acronym* parameter to the custom menu allowing users to provide a description for an abbreviation.  Please visit the sample pages for all the details.
- Updated search by adding an accept-charset attribute
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