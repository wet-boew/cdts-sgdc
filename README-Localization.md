# Internationalization (i18n) and Localization

In the past, the English and French versions of template files were maintained separately. The code logic was duplicated in english and french files, which was hard to maintain and very error-prone. This process has now been changed in favor of keeping the logic in a single ejs file (in the default language, English) with a translation file to specify the French text.

The goal of this readme is to outline the process for making changes to the EJS/translation files.

## Project Structure

The relevant files for i18n/localization are:
- **Gruntfile.js**: Defines the tasks to extract localization messages from the EJS file, merge/compile translation files and verify that no message goes untranslated.  To launch the localization tasks specifically, run `npm run translate` (which will run `npx grunt --stack i18n-ejs`). Note that doing a build will also triggers the translation tasks.
- **EJSModuleGenerator.js**: Contains the function to actually perform the translation, extraction of messages and merge of message files.
- **src/gcweb/*.ejs** and **src/gcintranet/*.ejs**: files containing main logic with English text.
- **src/gcweb/wet-messages.en.json** and **src/gcintranet/wet-messages.en.json**: English "master" translation files. This files is generated automatically and does not need to be touched.  _Maintaining the English text is done directly in the EJS files._
- **src/gcweb/wet-messages.fr.json** and **src/gcintranet/wet-messages.fr.json**: French translation file. This file is automatically merged with new/changed English text.  _New messages must be translated to French for the build to succeed._

## Basic Workflow 

Making a change to the CDTS now typically consists of:

### 1. Modify the EJS file(s)

When maintaining the EJS files, text meant to be translated must be put within a `<^- msg('...') ^>` instruction. Example:

```html
<div><^- msg('This is some English text') ^></div>
```

**Notes:**
- Text that should appear the same in all languages (for example bilingual "Government of Canada/Gouvernement du Canada") does not need to be surrounded by a `msg` instruction.
- `msg` instructions can contain simple HTML elements. Example: `<^- msg('<span class="someclass">Text that will</span> be translated') ^>`. Care must be taken to make proper use/escape of single-quotes and double-quotes. Remember the `msg` instruction is bascially a javascript function.


### 2. Running the translation tasks

If the text of existing messages in the EJS files is changed, or new messages are added, new message entries will be automatically added to the French translation file by the build.  Because these message will not have translation values, the build will detect the new message(s) and fail from lack of translation.

After changing/adding text, you can run `npm run translate` instead of a full build to refresh the French translation file without having to wait for a full build cycle.

### 3. Updating French Translation Files

When running `npm run translate`, the French translation files (`src/gcweb/wet-messages.fr.json` and `src/gcintranet/wet-messages.fr.json`) will be updated with new entries. Each entry will look as follow:

```json
...
  "db2c0f3302d1fdb35304ee3a70891a7649f944cc": {
      "source": "Some English Text",
      "target": null
  },
...
```

For each entry to be translated, the following must be done:
- Update/translate the text by specifying a proper string for the `target` element.

(all other elements should remain untouched)

**Notes:**
- In the EJS files, if multiple messages have the exact same English text, this will result in only a single entry in the translation file which will apply to all. (In other words the English text is used to derive the key/id).
- Since the English text is used as the key/id, changing existing English text in the EJS files will result in a new entry in the translation file, with the old text/entry preserved for reference.
- These preserved obsolete entries (from changed English text) will be detected by the build and warnings will be issued for them.  **These entries should be removed when no longer needed.**

### 4. Build

Once all entries in the French translation have been translated, builds can be done normally (ie `npm run build` or `npm run build-prod`)

## Running CDTS Development/Watch Server

When running the development server (`npm run serve` or `npm run serve-nobuild`), the message extraction and translation file merge scripts will run automatically when the EJS files are modified (and the Javascript files rebuilt if the translation files are modified).  Note there is no special exception made for "watch", meaning it will fail for untranslated messages.

## 2-files Method vs 3-files Method

### 2-files Method

The process described above uses 2 translation files: `wet-messages.en.json` and `wet-messages.fr.json`.  The `wet-messages.en.json` file acts as the "master" file and should not be updated manually.  The `wet-messages.fr.json` file contains the French translations and the only file that needs to be updated when translating.

We chose to do it this way because it has the advantage of allowing us to worry only about the EJS file and the French translation file.  Because the English text is used as the key/id, we can work on the EJS files directly and worry about translation files only for French, which makes it easier to maintain.

This does however have a drawback: Because the English text is used as the key, it makes impossible to translate 2 English messages with exactly the same text into 2 different French texts (if somehow an English phrase could lead to 2 different French phrases depending on some context).

### 3-files Method

If the need ever arises to translate the same English text into 2 or more different French texts, we can relatively easily switch to using 3 translation files.

The 3 translation files would be: `wet-message.src.json` - the "master" file which should not be updated manually, `wet-messages.en.json` - the translation file that must be updated with English text and `wet-messages.fr.json` - the translation file that must be updated with French text.

Under this scenario, the EJS files' text act as keys, with the English text maintained explicitly in `wet-messages.en.json`. (That being said if the `target` elements in the translation file are empty, the compiler will use the text from the EJS file).  It is then possible to have the English text be the same in English but not in French by specifying 2 different keys in the EJS files.

To switch to using 3 files:
- Modify `Grunfile.js` `i18n-ejs` tasks to extract to `wet-messages.src.json` instead of `wet-messages.en.json`  (In other words, call `extractEJSModuleMessages(`./src/${themeName}`, 'src);`)
- Modify `Grunfile.js` `i18n-ejs` tasks to merge to both "en" and "fr" languages. (In other words, call `mergeLanguageFiles(`./src/${themeName}`, 'src', ['en', 'fr'], false, true);`)

## References

- EJSModuleGenerator.js
- Gruntfile.js#i18n-ejs
