import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from ".";

const meta: Meta<typeof Switch> = {
  component: Switch,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    size: "default",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Label",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
