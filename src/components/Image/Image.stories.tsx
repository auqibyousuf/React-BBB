import React from 'react';
import {ComponentStory, ComponentMeta } from '@storybook/react';
import Image from './Image';

export default {
  title: 'BBB/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  imgUrl:'https://via.placeholder.com/600/24f355',
  altText:'', 
  extraClasses:''
};