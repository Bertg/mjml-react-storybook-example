# Mjml-react & Storybook example

In this project we attempt to get [mjml-react](https://github.com/Faire/mjml-react) and [Storybook](https://storybook.js.org) to work together nicely. We are also using typescript, because we can.

This project is early stages and has no working solution as of today.

## POC Email generation

You can run `yarn email-poc` to see that the basic React to HTML is working in a node environment.

## Storybook poc

You can run `yarn storybook-plain` (loading *.stories-plain.tsx) and see that we can render the Email react to a story. However, this is not parsed by MJML.

The story output is HTML nodes named `<mjml-head>` etc, as one would expect from a default React setup.

## Storybook mjml

You can run `yarn storybook-mjml` (loading *.stories-mjml.tsx) and... see th eprocess crash. The stories try to use the `mjml-react` code to render the story. This is currently erroring with `Module not found: Error: Can't resolve 'fs' in ... `
