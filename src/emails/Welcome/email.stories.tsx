import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Email } from './email';

export default {
  title: 'Welcome',
  component: Email,
  args: {
    companyName: 'ACME Inc',
    firstName: 'Sylvester',
    username: 'ILikeTweety',
  }
} as ComponentMeta<typeof Email>;

export const Welcome: ComponentStory<typeof Email> = (args) => <Email {...args} />;
