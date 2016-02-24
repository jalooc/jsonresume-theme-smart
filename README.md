# SMART JSON Resume theme

> Print-friendly & UX-friendly, customizable [JSON Resume](http://jsonresume.org/) theme.

The **theme** generates html resume with the most important data visible as default, but allowing the viewer to peep at the details. This provides both: clean, one-page print and a thorough profile information at once. Plus, it's smart.

## Motivation

Printed CVs are often advised to **fit in one A4 page**. On the other hand, this requirement hardly ever permits exhausting all the profile information we'd like to share. By implementing **simple CSS techniques**, this **theme** reconciles  those two demands by providing the viewer with ability to choose what to see.

## Installation and running

1. Run `npm install --production`.
2. Since this is a [JSON Resume](http://jsonresume.org/) theme, proceed according to their's instructions:
    1. In the main directory, create a JSON file with you resume data in accordance with the [_resume schema_](https://github.com/jsonresume/resume-schema/blob/master/schema.json). You can also add a `photo.jpg`.
    2. Install the _JSON Resume_ tool by running `npm install -g resume-cli`.
    3. Run `resume serve` to see the output in a browser or `resume export resume.html` / `resume export resume.pdf` to generate the resume document. You can also publish your resume by following the instructions on the [official website](http://jsonresume.org/getting-started/).

## Development

This repository comes with some handy tools for the **theme**'s development:
* Gulp,
* BrowserSync,
* SASS,
* Nunjucks,
* JSON Resume Schema validator.

To start developing, follow the instructions:

1. Run `npm install`.
2. Run `npm start`.
3. Do whatever you want to do with the _scss_ source files, the template or the _resume_ itself - the files will be processed and the browser will reload automatically.

## Additional features

The **theme** provides some nifty, additional features, some of them going beyond the _JSON Resume Schema_:
  * Ability to define maximum visible elements (revealed after mouse hover) using the [resumeLimit.js](./resumeLimits.js) config file. The limits are applied only to the _root_, _array_ properties of the _resume_ JSON;
  * Ability to define the legal note at the bottom of the CV (often required by recruiters) inside the [legalNote.js](./legalNote.js) file;
  * Handling of the (excessive to the _JSON Resume Schema_) _certifications_ field.

## TODOs

  * [ ] Support for all the rest of the _Resume Schema_'s properties
  * [ ] Switching to RWD
  * [ ] Hide properties limited to 0 elements
  * [ ] Show all items with limit set to 0
  * [ ] Handle edge cases for undefined properties

## License

MIT Licence