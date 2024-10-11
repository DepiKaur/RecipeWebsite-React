import React from 'react';
import { Link } from 'react-router-dom';

import style from './RecipeCard.module.css';

// Kör npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { displayStarRating, renderDifficultyBars } from '../Utils/RecipeCardUtil.jsx';

export default function RecipeCard(props) {

  return (
    <Link to={`/recipes/${props.id}`} className={style['card-link']}>
      <section className={style.card}>
        <img src={props.imageUrl} alt={props.title} />
        <ul className={style['recipe-list']}>
          <li key={props.id}>
            <h3>{props.title}</h3>
            <p className={style['desc']}>{props.description}</p>
            <div className={style['stars']}>
              {displayStarRating(props.rating)}
            </div>
            <ul className={style.details}>
              <li className={style.time}>  <FontAwesomeIcon icon={faClock} />
                <span> {props.time} min</span>
              </li>
              <li>
                {renderDifficultyBars(props.time, style)}
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </Link>
  );
}