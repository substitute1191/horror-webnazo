import type { Meta, StoryObj } from "@storybook/react"
import FoggyImage from "./FoggyImage"

export default {
  title: "Components/FoggyImage",
  component: FoggyImage,
} satisfies Meta<typeof FoggyImage>

type Story = StoryObj<typeof FoggyImage>

export const Default: Story = {
  args: {
    src: "https://picsum.photos/256",
  },
}
