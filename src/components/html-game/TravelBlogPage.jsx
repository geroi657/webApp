import React from 'react';
import './TravelBlogPage.module.css';

const TravelBlogPage = ({ replacement }) => {
    return (
        <div className="travel-blog-page">
            <header id="header-element">
                <h1>Блог о путешествиях</h1>
            </header>
            <nav>
                <a href="#about">О нас</a> |
                <a href="#contact">Контакты</a>
            </nav>
            <main>
                <section>
                    <article id="article-1">
                        <h2>Путешествие в Италию</h2>
                        <p>Это было незабываемое путешествие...</p>
                        <img src="italy.jpg" alt="Италия" />
                    </article>
                    <article id="article-2">
                        <h2>Поездка в Японию</h2>
                        <p>Япония - страна восходящего солнца...</p>
                        <img src="japan.jpg" alt="Япония" />
                    </article>
                </section>
                <aside id="subscribe-section">
                    <h3>Подписаться на рассылку</h3>
                    <form method="post">
                        <input type="text" placeholder="Введите ваше имя" />
                        <input type="email" placeholder="Введите ваш email" />
                        <button type="submit">Подписаться</button>
                    </form>
                </aside>
            </main>
            <footer>
                <p>© 2024 Блог о путешествиях</p>
            </footer>
        </div>
    );
};

export default TravelBlogPage;
