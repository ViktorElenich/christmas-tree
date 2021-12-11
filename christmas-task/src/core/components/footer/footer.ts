import { Components } from '../../templates/components';
import './footer.css';

const Links = [
    {
        className: 'author',
        href: 'https://github.com/ViktorElenich',
        target: '_blank',
        text: '© 2021 Viktor Elenich'
    },
    {
        className: 'logo-rss',
        href: 'https://rs.school/js/',
        target: '_blank'
    }
]
export class Footer extends Components {

    constructor(tagName: string, className: string) {
        super(tagName, className)
    }

    renderAuthorDescription(){
        const footerWrapper = document.createElement('div');
        footerWrapper.classList.add('footer-wrapper');

        Links.forEach(elem =>{
            const aHTML = document.createElement('a');
            aHTML.innerText = elem.text;
            aHTML.className = elem.className;
            aHTML.href = elem.href;
            aHTML.target = elem.target;
            footerWrapper.append(aHTML);
        })

        this.container.append(footerWrapper);
    }

    render() {
        this.renderAuthorDescription();
        return this.container;
    }
}