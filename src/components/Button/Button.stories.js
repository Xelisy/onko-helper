import Button from './button'
import { fn } from '@storybook/test'


export default {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        theme: {
            control: 'radio',
            options: ['light', 'venom']
        },
        label: {
            control: 'text'
        },
        usingFor: {
            control: 'radio',
            options: ['main', 'signIn']
        }

    },
    args: {
        onClick: fn()
    },
}

export const ButtonMainLight = {
    args: {
        theme: 'light',
        label: "Пройдите тест",
        usingFor: 'main',
    },
}
export const ButtonMainVenom = {
    args: {
        theme: 'venom',
        label: "Пройдите тест",
        usingFor: 'main',
    },
}
export const ButtonSignInLight = {
    args: {
        theme: 'light',
        label: "Войти",
        usingFor: 'signIn',
    },
}
export const ButtonSignInVenom = {
    args: {
        theme: 'venom',
        label: "Войти",
        usingFor: 'signIn',
    },
}