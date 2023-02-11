import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Image from './Image';

export default {
  title: 'BBB/Image',
  component: Image,
} as Meta<typeof Image>;

const Template: StoryFn<typeof Image> = (args) => <Image {...args} imgUrl ='https://via.placeholder.com/600/24f355'  altText='' extraClasses='' />;

export const Default = Template.bind({});
Default.args = {
  imgUrl:'https://via.placeholder.com/600/24f355',
  altText:'', 
  extraClasses:''
};