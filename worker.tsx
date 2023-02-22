import React from 'react';
import { Email as DailySummaryEmail } from "./src/emails/DailySummary/email"
import { Email as WelcomeEmail } from "./src/emails/Welcome/email"
import { render } from "@faire/mjml-react/utils/render"

console.log("This output displays how the built-in mjml-react render method is still working as expected")
console.log()
console.log("DailySummaryEmail")
console.log(render(<DailySummaryEmail />).html)
console.log()
console.log("WelcomeEmail")
console.log(render(<WelcomeEmail companyName="ACME inc" firstName="Sylvester" username="iLikeTweety" />).html)
