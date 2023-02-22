import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlButton,
  MjmlText
} from "@faire/mjml-react";
import React from 'react';

export const Email = ({firstName, companyName, username}: {firstName: string, companyName: string, username: string}) => (
  <Mjml>
    <MjmlHead>
      <MjmlTitle>Welcome aboard</MjmlTitle>
      <MjmlPreview>Welcome to {companyName}</MjmlPreview>
    </MjmlHead>
    <MjmlBody>
      <MjmlSection backgroundColor="#009FE3" paddingBottom="0px" paddingTop="0">
        <MjmlColumn verticalAlign="top" width="100%">
          <MjmlText align="left" color="#ffffff" fontSize="45px" fontWeight="bold" fontFamily="open Sans Helvetica, Arial, sansSerif" paddingLeft="25px" paddingRight="25px" paddingBottom="30px" paddingTop="50px">
            Welcome aboard
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection backgroundColor="#009fe3" paddingBottom="20px" paddingTop="20px">
        <MjmlColumn verticalAlign="middle" width="100%">
          <MjmlText align="left" color="#ffffff" fontSize="22px" fontFamily="open Sans Helvetica, Arial, sansSerif" paddingLeft="25px" paddingRight="25px">
            <span style={{color:"#FEEB35"}}>Dear {firstName}</span><br /><br />
            Welcome to {companyName}.</MjmlText>
          <MjmlText align="left" color="#ffffff" fontSize="15px" fontFamily="open Sans Helvetica, Arial, sansSerif" paddingLeft="25px" paddingRight="25px">
            We're really excited you've decided to give us a try. In case you have any questions. You can login to your account with your username {username}
          </MjmlText>
          <MjmlButton align="left" fontSize="22px" fontWeight="bold" backgroundColor="#ffffff" borderRadius="10px" color="#1AA0E1" fontFamily="open Sans Helvetica, Arial, sansSerif">Login</MjmlButton>
          <MjmlText align="left" color="#ffffff" fontSize="15px" fontFamily="open Sans Helvetica, Arial, sansSerif" paddingLeft="25px" paddingRight="25px">
            Thanks,
            <br />
            The {companyName} Team
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
)
