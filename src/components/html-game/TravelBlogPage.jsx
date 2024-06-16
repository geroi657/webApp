import React from 'react';
import styles from './TravelBlogPage.module.css';

const TravelBlogPage = ({ replacement }) => {
    return (
        <div className={styles.travelBlogPage}>
            <header className={styles.travelBlogHeader}>
                <h1>Блог о путешествиях</h1>
            </header>
            <nav className={styles.travelBlogNav}>
                <a href="#about">О нас</a> |
                <a href="#contact">Контакты</a>
            </nav>
            <main className={styles.travelBlogMain}>
                <section className={styles.travelBlogSection}>
                    <article className={styles.travelBlogArticle}>
                        <h2 className={styles.travelBlogH2}>Путешествие в Италию</h2>
                        <p>Это было незабываемое путешествие...</p>
                        {replacement || <div style={{ background: 'black', width: '100px', height: '20px' }}></div>}
                    </article>
                    <article className={styles.travelBlogArticle}>
                        <h2 className={styles.travelBlogH2}>Поездка в Японию</h2>
                        <p>Япония - страна восходящего солнца...</p>
                        <img src="japan.jpg" alt="Япония" className={styles.travelBlogImg} />
                    </article>
                </section>
                <aside className={styles.travelBlogAside}>
                    <h3 className={styles.travelBlogH3}>Подписаться на рассылку</h3>
                    <form method="post" className={styles.travelBlogForm}>
                        <input type="text" placeholder="Введите ваше имя" />
                        <input type="email" placeholder="Введите ваш email" />
                        <button type="submit">Подписаться</button>
                    </form>
                </aside>
            </main>
            <footer className={styles.travelBlogFooter}>
                <p>© 2024 Блог о путешествиях</p>
            </footer>
        </div>
    );
};

export default TravelBlogPage;
