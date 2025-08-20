import type {Meta, StoryObj} from "@storybook/react-vite";
import Input from "./Input.tsx";
import {expect, userEvent, within} from "storybook/test";

const meta: Meta<typeof Input> = {
    title: "UI/Input/Input",
    component: Input,
    tags: ["autodocs"],
}


export default meta;
type Story = StoryObj<typeof Input>;

export const Small: Story = {
    args: {
        placeholder: "Имя",
        "size": "sm",
    }
}

export const SmallFilled: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByPlaceholderText("Имя");
        await userEvent.type(input, "Михаил", { delay: 100 });
        await expect(input).toHaveValue("Михаил");
        await expect(input).toHaveClass("text-sm");
    },
    args: {
        placeholder: "Имя",
        "size": "sm",
    }
}

