import AvailableRecipes from './AvailableRecipes';

export default function Main() {
    return (
        <main>
            <h2>Populära Bakverk</h2>
            <div className='card-container'>
                <AvailableRecipes />
            </div>

            <div className="scroll-container">                  {/* upwards arrow symbol */}
                <a className="scroll-button" href="#top">
                    <span>&uarr;</span>
                </a>       
            </div>
        </main>
    );
}