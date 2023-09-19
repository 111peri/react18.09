import React, { useState } from 'react';
import styles from './App.css';
import MainPage from './pages/MainPage';
import { CatalogBlocks } from "../components/CatalogBlocks";

function App() {
    const titlesAboveCatalog = [
        {
            name: 'Скидки',
            link: 'Смотреть >',
            onClick: handleDiscountClick,
        },
    ];

    const titlesBelowCatalog = [
        {
            name: 'Статьи и новости',
            text: 'Оставайтесь всегда в курсе событий',
            link: 'Подробнее >',
        },
    ];

    const [discountClicked, setDiscountClicked] = useState(false);

    function handleDiscountClick() {
        setDiscountClicked(true);
    }

    return (
        <div className="App">
            {discountClicked && <MainPage />}
            {titlesAboveCatalog.map((title, index) => (
                <div key={index}>
                    <h1 className={styles.titleName}>
                        {title.onClick ? (
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    title.onClick();
                                }}
                            >
                                {title.name}
                            </a>
                        ) : (
                            title.name
                        )}
                    </h1>
                    <p className={styles.titlelink}>
                        {title.link}
                    </p>
                </div>
            ))}
            <MainPage />
            {titlesBelowCatalog.map((title, index) => (
                <div key={index}>
                    <h1 className={styles.titleName}>
                        {title.name}
                    </h1>
                    {title.text && <h3 className={styles.titleText}>{title.text}</h3>}
                    <p className={styles.titlelink}>
                        {title.link}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default App;
