import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Renders correctly to the page", () => {
    it("Renders containers", () => {
        render(<App />);

        const Nav = screen.getByTestId("nav");
        const Home = screen.getByTestId("home");

        expect(Nav).toBeInTheDocument();
        expect(Home).toBeInTheDocument();
    });

    it("Renders all the cards from the API", () => {
        render(<App />);

        const cards = screen.getAllByTestId("card");
        let noOfCards = 0;

        cards.forEach((card) => {
            noOfCards += 1;
        });

        expect(noOfCards).toBe(6);
    });
});
