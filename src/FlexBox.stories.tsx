import { Meta, Story } from '@storybook/react'
import { FlexBox, FlexboxProps } from './FlexBox'

export default {
  title: 'Layout/FlexBox',
  component: FlexBox,
  parameters: {
    controls: {
      include: /flex|align|justify/i,
    },
    docs: {
      description: {
        component: 'Component for Flexbox Layouts. See Box for more options',
      },
    },
  },
} as Meta

// We need one Story following the template format to get param filtering to work.
const Template: Story<FlexboxProps> = (args) => (
  <FlexBox {...args}>FlexBox</FlexBox>
)

export const BasicFlexBox = Template.bind({})
BasicFlexBox.args = {}

export const CenteringFlexbox = () => (
  <FlexBox justifyContent="center" alignItems="center" height="8rem">
    FlexBox
  </FlexBox>
)
