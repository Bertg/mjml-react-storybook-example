import { DecoratorFn } from "@storybook/react";
import React, { FC, PropsWithChildren } from "react";
import { render } from "@faire/mjml-react/utils/render"
import { MJMLParsingOptions } from "mjml-core";

// This code is heavily adapted from the example provided in
//   https://github.com/Faire/mjml-react/discussions/12#discussioncomment-4080065

/**
 * Decorator to render emails from mjml-react to html
 * By using a Decorator our code snippets are cleaner and we ensure all stories render the same way.
 *
 * globals.generatedHtml - provides the html generated from mjml as a global so other tools can use it
 */
export const renderEmailDecorator: DecoratorFn = (storyFn, context) => {
  const params = context.parameters;
  const renderingOptions = params.component?.renderingOptions ?? {};
  // const [globalState, updateGlobals] = useGlobals();

  let html: string | undefined;
  // let mjml: string | undefined;
  // let error: MJMLParseError[] | undefined;
  try {
    html = renderEmailToHTML(storyFn(context), renderingOptions);
    // html = result.html;
    // mjml = result.mjml;
  } catch (e) {
    // error = e;
    // mjml = error?.mjml;
    // html = error?.mjmlHtml;
  }

  // React.useEffect(() => {
  //   const typedGlobalState = globalState as RenderGlobals;
  //   if (
  //     context.viewMode === "story" &&
  //     (typedGlobalState.generatedHtml?.[context.id] !== html ||
  //       typedGlobalState.generatedMjml?.[context.id] !== mjml ||
  //       (!!error && !isEqual(typedGlobalState.mjmlErrors?.[context.id], error)))
  //   ) {
  //     const globals: RenderGlobals = {
  //       generatedHtml: { [context.id]: html },
  //       generatedMjml: { [context.id]: mjml },
  //       mjmlErrors: { [context.id]: error },
  //     };
  //     // This causes a re-render which is why this check is here
  //     // Currently this is overriding the state with a new object with a single story html. This is intentional since
  //     // there should never be more than one at a time since it's only being used in story view.
  //     updateGlobals(globals);
  //   }
  // }, [globalState]);



  // if (error) {
  //   return (
  //     <>
  //       <ErrorBox>
  //         An error occurred. See the Debug panels for more info.
  //         {/* <pre>{error.message}</pre>
  //         <details>
  //           <code>{error.stack}</code>
  //         </details> */}
  //       </ErrorBox>
  //       <hr />
  //       {html ? (
  //         <>
  //           <p>
  //             Rendering of Broken HTML
  //           </p>
  //           <hr />
  //           <div dangerouslySetInnerHTML={{ __html: html }} />
  //         </>
  //       ) : null}
  //     </>
  //   );
  // }

  return html ? (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  ) : (
    <p>No Available HTML</p>
  );
};


const ErrorBox: FC<PropsWithChildren> = ({children}) => <>{children}</>

const renderEmailToHTML = (email: React.ReactElement, options?: MJMLParsingOptions) => render(email, options).html
