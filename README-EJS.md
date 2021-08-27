# About the CDTS EJS Templates

This module contains functions to process a group of "ejs" template files into a single js file that can be used in the browser.
(bascially creating an output similar to what the old SOY closure compiler used to produce).
  
 Each ejs file will be processed twice by EJS. Each pass will be configured to recognize different delimiters.
- The first pass will take the input file and use EJS to apply localization, resulting in a language-specific EJS template
- Delimiter: <^ ^>
- The second pass will take this language-specific template and use EJS to compile into a function usable at runtime in the browser.
- Delimiter: <% %>   (The EJS default)
  
In other words:   `<input file>`+`<language file>`  =>  EJS compile & render  =>  `<localized templates>`  =>  EJS compile  =>  `<output file>`
  
Also in this modules are the functions to extract localization messages and merge message files (see Gruntfile.js#i18n-ejs and README-localization for details)
  
Refs:
- https://ejs.co/
- https://github.com/mde/ejs
- https://github.com/mde/ejs/blob/main/lib/ejs.js


# SOY to EJS Cheat Sheet

CDTS has officially migrated from SOY to EJS. This cheat sheet will help with understanding how EJS is used in creating the CDTS output files.  

The following tables contain the basic EJS tags and statements compared with SOY. 

Note: 'pr' is referring to the parameter that has been defined. 

## Tags

| SOY                             | EJS                                  | Notes                                  |
|---------------------------------|--------------------------------------|----------------------------------------|
| "{msg desc=""}Skip Links{/msg}" | "<^- msg('Skip Links') ^>"           |                                        |
| {if $topSecMenu == true}        | <%_ if (pr.topSecMenu == true) { -%> | Remove whitespace before, trim newline |
| {$link.href}                    | <%- link.href %>                     | HTML unescaped                         |
| {$link.text}                    | <%= link.text %>                     | HTML escaped                           |
| /* Comment */                   | <%# Comment %>                       | Comment                                |

## If Statement

| SOY                       | EJS                                |
|---------------------------|------------------------------------|
| {if isNonnull($lngLinks)} | <%_ if (pr.lngLinks != null) { -%> |
| {/if}                     | <%_ } -%>                          |

## Loop

| SOY                             | EJS                                                                 |
|---------------------------------|---------------------------------------------------------------------|
| {foreach $link in $lngLinks}    | <%_ for (var linkIndex=0; linkIndex<pr.lngLinks.length; linkIndex++)|
|                                 | const link=pr.lngLinks[linkIndex];-%>                               |
| ...                             | ...                                                                 |
| {/foreach}                      | <%_ } -%>                                                           |

## First item

| SOY                              | EJS                                                                 |
|----------------------------------|---------------------------------------------------------------------|
| {foreach $link in $contactLinks} | <%_ if (pr.contactLinks != null && pr.contactLinks.length > 0) {    |
| {if isFirst($link)}              | const link=pr.contactLinks[0]; -%>                                  |
| ...                              | ...                                                                 |
| {/if}                            |                                                                     |
| {/foreach}                       | <%_ } -%>                                                           |