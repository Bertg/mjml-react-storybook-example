import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Email } from './email';


export default {
  title: 'DailySummary',
  component: Email,
} as ComponentMeta<typeof Email>;

export const DailySummary: ComponentStory<typeof Email> = () => <Email />;
