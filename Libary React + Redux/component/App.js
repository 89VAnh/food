import html from '../core.js';
import Header from '../component/Header.js';
import Footer from '../component/Footer.js';
import TodoList from '../component/TodoList.js';


function App() {
    return html`
    <section class="todoapp">
        ${Header()}
        ${TodoList()}
        ${Footer()}
    </section>
    `
}

export default  App