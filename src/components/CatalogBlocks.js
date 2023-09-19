import React from 'react';
import styles from './CatalogBlock.module.css'

export function CatalogBlocks(props) {
    const { catalogBlocks } = props;

    return (
        <div className={styles.catalogBlocks}>
            {catalogBlocks.map((block, index) => (
                <div key={index}>

                    <h1>{block.name}</h1>
                    <p>{block.text}</p>
                    <img src={block.image} alt={block.name} className={styles.catalogBlock}/>
                    <p>{block.price_in_som}</p>
                    <p>{block.price_in_usa}</p>

                </div>
            ))}
        </div>
    );
}

