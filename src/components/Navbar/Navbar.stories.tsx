import React from 'react';
import Navbar from './index';

const template = {
  title: 'Components/Navbar',
  component: Navbar,
};

export default template;

const Story = (args: any) => <Navbar {...args} />;

export const Default: any = Story.bind({});

const Props = {};

Default.args = Props;
