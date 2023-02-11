import React from 'react';
import {ComponentStory, ComponentMeta } from '@storybook/react';
import Link from './Link';

export default {
  title: 'BBB/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  linkText : 'Link',
  linkUrl: 'https:www.google.com',
  extraClasses: 'class'
};