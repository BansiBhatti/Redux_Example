import React from "react";
import { Button } from "antd";

export default {
    title: "Components/btn",
    component: Button,
};

export const Primary = {
    args: {
        type: "primary",
        children: "Button",
    },
    render: (args) => <Button {...args} />,
};

export const Secondary = {
    args: {
        type: "default",
        children: "Button",
    },
    render: (args) => <Button {...args} />,
};
