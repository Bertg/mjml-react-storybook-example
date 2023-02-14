import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Email } from './email';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Email,
} as ComponentMeta<typeof Email>;

export const Primary: ComponentStory<typeof Email> = () => <Email />;
