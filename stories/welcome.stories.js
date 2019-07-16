import React from 'react';
import '../app/components/customStoryStyles/welcome.scss';

export const Welcome = () => {
    return(
        <div class="story-wrap">
            <h1>Привет, %юзернэйм%</h1>

            <p>Тут ты можешь посмотреть библиотеку компонентов и различные состояния каждого компонента.</p>
        </div>
    )
};