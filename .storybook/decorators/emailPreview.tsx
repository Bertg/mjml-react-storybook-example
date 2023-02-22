import { DecoratorFn } from "@storybook/react";
import React, { FC, PropsWithChildren } from "react";
import { renderToMjml } from "@faire/mjml-react/utils/renderToMjml"
import mjml2html from "mjml-browser";

// This code is heavily adapted from the example provided in
// https://github.com/Faire/mjml-react/discussions/12#discussioncomment-4080065
export const emailPreview: DecoratorFn = (storyFn, context) => {
  let html: string | undefined;
  let json: any;
  let error: any | undefined;

  try {
    const result = mjml2html(renderToMjml(storyFn(context)));
    html = result.html;
    json = result.json;
  } catch (e) {
    console.error(e);
    error = e;
  }

  const mjmlHead = json.children.find(s => s.tagName === 'mj-head') || { children: [] };
  const title = mjmlHead.children.find(s => s.tagName === 'mj-title')?.content;
  const preview = mjmlHead.children.find(s => s.tagName === 'mj-preview')?.content;

  if (error || !html) {
    return (
      <ErrorBox>
        An error occurred. See the Debug panels for more info.
        <pre>{error.message}</pre>
      </ErrorBox>
    );
  }

  return (
    <div>
      <div>
        <h1>Email head:</h1>
        <div>
          <strong>Title: </strong>
          { title || <i>Undefined</i> }
        </div>
        <div>
          <strong>Preview: </strong>
          { preview || <i>Undefined</i> }
        </div>
      </div>
      <h1>Email</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};


const ErrorBox: FC<PropsWithChildren> = ({ children }) => <>{children}</>
