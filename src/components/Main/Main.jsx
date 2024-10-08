import AvailableRecipes from './AvailableRecipes';
import './Main.css';

export default function Main(props) {
    const numberOfRecipes = props.recipes.length;
    return (
        <main className="landing-main">
            <h2>Populära Bakverk</h2>
            {numberOfRecipes > 0 && <p>(Visar {numberOfRecipes} recept)</p>}
            <div className='card-container'>
                <AvailableRecipes availableRecipes={props.recipes}/>
            </div>

            <div className="scroll-container">                  {/* upwards arrow symbol */}
                <a className="scroll-button" href="#top">
                    <span>&uarr;</span>
                </a>       
            </div>
        </main>
    );
}