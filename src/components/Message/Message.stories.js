import Message from './message'



export default {
    title: 'Components/Message',
    component: Message,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: { 
        control: 'text'},
        time: {
        control: 'text'
        },
        position: {
            control: 'radio',
            options: ['left', 'right']
        },
        theme: {
            control: 'radio',
            options: ['light', 'venom']
        }
        }
    }

    export const MessageLeftLight = {
        args: {
            theme: 'light',
            title: "Ты правда хочешь больше заняться своим здоровьем и проконсультироваться со специалистом? У тебя же ничего не болит, зачем тогда это нужно?",
            position: 'left',
            time: "14:42"
        },
    }
    export const MessageLeftVenom = {
        args: {
            theme: 'venom',
            title: "Ты правда хочешь больше заняться своим здоровьем и проконсультироваться со специалистом? У тебя же ничего не болит, зачем тогда это нужно?",
            position: "left",
            time: "14:52"
        },
    }
    export const MessageRightLight = {
        args: {
            theme: 'light',
            title: "1. Ранняя диагностика спасает жизни. Если на ранних стадиях выявить, то это значительно увеличит шансы на спасение",
           position: "right",
            time: "15:42"        },
    }
    export const MessageRightVenom = {
        args: {
            theme: 'venom',
            title: "1. Ранняя диагностика спасает жизни. Если на ранних стадиях выявить, то это значительно увеличит шансы на спасение",
            position: "right",
            time: "15:42"        },
    }

