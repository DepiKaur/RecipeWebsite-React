import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import './Ratings.css';

export default function RecipeRating() {
    const [recipeRating, setRecipeRating] = useState(0);
    return (
        <div className="rating-container">
            {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                    <label key={index}>
                        <input
                            type="radio"
                            value={givenRating}
                            className="rating-input"
                            onClick={() => {
                                setRecipeRating(givenRating);
                            }}
                        />
                            
                        <FaStar
                            className="rating-stars"
                            color={
                                givenRating < recipeRating || givenRating === recipeRating
                                    ? "#ec9b19"    // filled star
                                    : "rgb(192,192,192)"   // empty star
                            }
                        />
                    </label>
                );
            })}
        </div>
    );
}