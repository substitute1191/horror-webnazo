import type { Meta, StoryObj } from "@storybook/react"
import NoiseOverlay from "./NoiseOverlay"

export default {
  title: "Components/NoiseOverlay",
  component: NoiseOverlay,
  argTypes: {
    opacity: { control: { type: "range", min: 0, max: 1, step: 0.1 } },
    scale: { control: { type: "range", min: 1, max: 2, step: 0.1 } },
    baseFrequency: { control: { type: "range", min: 0.5, max: 1, step: 0.1 } },
  },
} satisfies Meta<typeof NoiseOverlay>

type Story = StoryObj<typeof NoiseOverlay>

export const Default: Story = {
  render: (args) => (
    <div className="relative overflow-hidden">
      <NoiseOverlay {...args} />
      <img
        src="https://picsum.photos/256"
        alt="Random"
        className="w-full h-full object-cover"
      />
    </div>
  ),
}
