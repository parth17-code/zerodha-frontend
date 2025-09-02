import {render , screen} from '@testing-library/react'// test file must be in src folder for npm test to work
import '@testing-library/jest-dom' //extend expect is used to delay the check. This is done in case the component is fecthing any data from backend.
import Hero from './landingPage/Home/Hero';

//Test suite
describe('Hero Component' , ()=>{
    test('renders hero component' , ()=>{
        render(<Hero></Hero>);
        const heroImg = screen.getByAltText('Hero Image');
        expect(heroImg).toBeInTheDocument();
        expect(heroImg).toHaveAttribute("src" , "assets/homeHero.png");
    })
})