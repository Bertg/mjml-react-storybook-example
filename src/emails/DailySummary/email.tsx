import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlButton,
  MjmlAll,
  MjmlAttributes,
  MjmlSpacer,
  MjmlText,
} from "@faire/mjml-react";
import React from 'react';

export const Email = () => (
  <Mjml>
    <MjmlHead>
      <MjmlAttributes>
        <MjmlText color="#011F3C"></MjmlText>
        <MjmlAll fontFamily="'Kanit', 'Helvetica', 'Arial', sans-serif"></MjmlAll>
        <MjmlButton backgroundColor="#2191FB"></MjmlButton>
      </MjmlAttributes>
      <MjmlTitle>Please join our webinar</MjmlTitle>
      <MjmlPreview>Place are limited, act now</MjmlPreview>
    </MjmlHead>
    <MjmlBody backgroundColor="#f6f6f6">
      <MjmlSection backgroundColor="#ffffff" borderBottom="none" borderLeft="none" borderRight="none" borderTop="8px solid #2191FB" paddingBottom="60px" paddingLeft="60px" paddingRight="60px" paddingTop="0px" padding="0px">
        <MjmlColumn padding="0">
          <MjmlSpacer height="40px"></MjmlSpacer>
          <MjmlText align="center" color="#808F9D" fontSize="14px" padding="10px">
            SPECIAL WEBINAR
          </MjmlText>
          <MjmlText align="center" fontSize="54px" lineHeight="1.25" padding="0px">
            <strong>Join us for a special event</strong><br /><strong></strong>
          </MjmlText>
          <MjmlText align="center" fontSize="20px" lineHeight="1.5" padding="10px">
            March 28th  30th<br />Live in APAC and EMEA timezones<br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </MjmlText>
          <MjmlSpacer height="24px"></MjmlSpacer>
          <MjmlButton borderRadius="30px" fontSize="20px" lineHeight="1.5" padding="0px">
            <strong>RSVP now</strong>
          </MjmlButton>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection paddingBottom="40px" paddingLeft="60px" paddingRight="60px" paddingTop="40px" padding="60px">
        <MjmlColumn padding="0">
          <MjmlText align="center" fontSize="14px" lineHeight="1.5" padding="0px">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />Unsubscribe
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
)
