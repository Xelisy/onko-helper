import articleCard from "./articleCard";
import catArticle from '../../assets/png/catArticle.png';
import articleTwo from '../../assets/png/articleTwo.png';
import articleThree from '../../assets/png/articleThree.png';

export default {
    title: 'Components/ArticleCard',
    component: articleCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

        date: {
            control: 'text'
        },
        title: {
            control: 'text'
        },
        author: {
            control: 'text'
        },
        img: {
            control: { type: 'radio' },
            options: [
            catArticle,
            articleTwo,
            articleThree
            
            ]
        },

    },
   
}

