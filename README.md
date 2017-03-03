# UI Grid - Custom CSS

Some improvements over UI Grid. Just load the CSS after theirs to override the styles.

```html
<link rel="stylesheet" href="http://ui-grid.info/release/ui-grid.css" type="text/css">
<link rel="stylesheet" href="/path/to/ui-grid-custom.css" type="text/css">
```

## [Demo](https://urbanoalvarez.es/ui-grid-css/)
*Note: The demo reports being insecure because ui-grid.info has a broken certificate (last time I checked)*

![Normal UI Grid](https://github.com/aurbano/ui-grid-css/raw/master/demo/normal.png "A normal UI Grid")
> A normal UI Grid with the custom CSS applied

![Clickable rows UI Grid](https://github.com/aurbano/ui-grid-css/raw/master/demo/clickable.png "Clickable rows UI Grid")
> UI Grid with clickable rows enabled

## NPM

You can install this via NPM:

```bash
$ npm install --save ui-grid-css
```

Then import the CSS file directly:
```html
<link rel="stylesheet" href="/node_modules/ui-grid-css/dist/ui-grid-custom.css" type="text/css">
```

Or the minified version:
```html
<link rel="stylesheet" href="/node_modules/ui-grid-css/dist/ui-grid-custom.min.css" type="text/css">
```
## Building

The source is provided in Sass, so it can be easily changed (to match your color scheme for example)

There are two files in the src directory:

```
/src
  _variables.scss
  ui-grid-custom.scss
```

In the variables file you can change the main colors used as you can imagine.

Once done, build with gulp: (If you don't have it installed, run `npm install -g gulp` first)

```bash
$ gulp build
```

And this will update both `css` files in the `dist` folder.
