import CallCard from './callCard'
import Key from '../../assets/png/key.png';
import Watch from '../../assets/png/Watch.png';
import Screen from '../../assets/png/Screen.png';

export default {
    title: 'Components/CallCard',
    component: CallCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: { 
        control: 'text'
        },
        img: {
            control: { type: 'radio' },
            options: [
              Key,
              Watch,
              Screen
            ]
          },
        theme: {
            control: 'radio',
            options: ['light', 'venom']
        }
        }
    }

    export const CallCardLight = {
        args: {
            title: "Получите ваш код",
            img: Key
        },
    }
    export const CallCardVenom = {
        args: {
            title: "Получите ваш код",
            img: Watch
        },
    }



