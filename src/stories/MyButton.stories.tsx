import type { Meta, StoryObj } from '@storybook/react';

import MyButton from '../MyButton/MyButton';

const meta = {
    title: 'ui/MyButton',
    component: MyButton,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RedBtn: Story = {
    args: {
        children: 'Example',
        bgcolor: 'red'
    },
};

export const BlueButton: Story = {
    args: {
        children: 'Example',
        bgcolor: 'blue'
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        children: 'Example',
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        children: 'Example',
    },
};