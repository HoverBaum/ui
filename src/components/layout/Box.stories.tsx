import { Meta, Story } from '@storybook/react'
import { Box, BoxProps } from './Box'

export default {
  title: 'Layout/Box',
  component: Box,
} as Meta

//@ts-ignore
const Template: Story<BoxProps> = (args) => <Box {...args}>Box</Box>

export const BasicBox = Template.bind({})
BasicBox.args = {}
BasicBox.parameters = {
  controls: {
    include: /margin|padding|color|border|width|height|overflow/i,
  },
}
