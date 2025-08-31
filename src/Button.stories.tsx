import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ButtonComponent } from "./Button";

const meta: Meta<typeof ButtonComponent> = {
  title: "Button",
  component: ButtonComponent,
};
export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const Primary: Story = {
  args: { label: "Primary Button", primary: true },
};
