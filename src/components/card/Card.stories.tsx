import { Meta, Story } from '@storybook/react'
import { Card, CardProps } from './Card'

export default {
  title: 'Layout/Box',
  component: Card,
} as Meta

//@ts-ignore
const Template: Story<CardProps> = (args) => <Card {...args}>Box</Card>

export const BasicBox = Template.bind({})
BasicBox.args = {}
