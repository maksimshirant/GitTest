import type {Meta, StoryObj} from "@storybook/react-vite";
import Button from "./Button.tsx";

const meta: Meta<typeof Button> = {
    title: "UI/Button/Button",
    component: Button,
    tags: ["autodocs"],
}


 export default meta;
type Story = StoryObj<typeof Button>;

// Цвет

export const Primary: Story = {
    args: {
        children: "Добавить пользователя",
        appearance: "primary",
    }
}
export const Secondary: Story = {
    args: {
        children: "Добавить пользователя",
        appearance: "secondary",
    },
    parameters: {
        docs: {
            description: {
                story: 'Кнопка disabled',
            },
        },
    },
}
export const Danger: Story = {
    args: {
        children: "Добавить пользователя",
        appearance: "danger",
    },
    parameters: {
        docs: {
            description: {
                story: 'Кнопка удаления',
            },
        },
    },
}

// Размер

export const Small: Story = {
    args: {
        children: "Добавить пользователя",
        size: "s",
    },
};

export const Medium: Story = {
    args: {
        children: "Добавить пользователя",
        size: "m",
    },
};

export const Large: Story = {
    args: {
        children: "Добавить пользователя",
        size: "l",
    },
};
