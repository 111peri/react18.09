import React from 'react';
import { CatalogBlocks } from "../components/CatalogBlocks";

function MainPage(props) {
    const catalogBlocks = [
        {
            name: 'Mac Studio',
            text: 'Мощная станция',
            image: 'https://www.istore.kg/media/main_page/mac-studio-202203-gallery-1_GpzEcuV.webp',
            price_kg: '204 240 сом',
            price_usa: '$2300,0',
            link: 'выбрать'
        },
        {
            name: 'SanDisk Extreme',
            text: 'Мощный портативный',
            image: 'https://www.istore.kg/media/main_page/mac-studio-202203-gallery-1_GpzEcuV.webp',
            price_in_som: '17 671 сом',
            price_in_usa: 'от 199,0',
            link: 'выбрать'
        },
        {
            name: 'Watch Ultra',
            text: 'Приключения ждут',
            image: 'https://www.istore.kg/media/main_page/mac-studio-202203-gallery-1_GpzEcuV.webp',
            price_in_som: '204 240 сом',
            price_in_usa: '$830,0',
            link: 'выбрать'
        },
        {
            name: 'Apple Tv 4K',
            text: 'Киношный во всех смыслах',
            image: 'https://www.istore.kg/media/main_page/mac-studio-202203-gallery-1_GpzEcuV.webp',
            price_in_som: '14 208 сом',
            price_in_usa: '$160,0',
            link: 'выбрать'
        },
        {
            name: 'HomePod mini',
            text: 'Звук,заполняющий комнату',
            image: 'https://www.istore.kg/media/main_page/mac-studio-202203-gallery-1_GpzEcuV.webp',
            price_in_som: '11 544 сом',
            price_in_usa: ' от $130,0',
            link: 'выбрать'
        },
        {
            name: 'Airtag',
            text: 'Находчивые штучки',
            image: 'https://www.istore.kg/media/main_page/mac-studio-202203-gallery-1_GpzEcuV.webp',
            price_in_som: '3108 сом',
            price_in_usa: ' от $35,0',
            link: 'выбрать'
        },
    ];

    return (
        <div>

            <CatalogBlocks catalogBlocks={catalogBlocks} />


        </div>
    );
}

export default MainPage;
