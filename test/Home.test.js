import {render , screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' //extend expect is used to delay the check. This is done in case the component is fecthing any data from backend.
import Hero from '../src/landingPage/Home/Hero';

//Test suite
describe('Hero Component' , ()=>{
    test('renders hero component' , ()=>{
        render(<Hero></Hero>);
        const heroImg = screen.getAllByAltText('Hero Image');
        expect(heroImg).toBeInTheDocument();
        expect(heroImg).toHaveAttribute("src" , "assets/homeHero.png");
    })
})