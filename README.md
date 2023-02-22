# Mjml-react & Storybook example

In this project we attempt to get [mjml-react](https://github.com/Faire/mjml-react) and [Storybook](https://storybook.js.org) to work together nicely. We are also using typescript, because we can.

## How to Use

* You can run `yarn worker` to see that the basic React to HTML is working in a node environment.
* You can run `yarn storybook` to see the html emails in a storybook environment

## How does it work

In `.storybook/decorators/emailPreview.tsx` we find the "magic". The `renderToMjml` function of `mjml-react` is combined with the `mjml2html` method from [mjml-browser](https://www.npmjs.com/package/mjml-browser).

This solution being based on `mjml-browser` does carry the same limitations.

* `MjmlInclude` tags are unavailable and will be ignored.
* Features involving the .mjmlconfig file are unavailable, which means no custom Mjml components.
