import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CardList from "./CardList";

import beers from "../../data/beers";

describe("Basic tests to ensure page is loading correctly", () => {
    it("Loads all of the cards", () => {
        render(<CardList array={beers} />);

        const cards = screen.getAllByTestId("card");
        let noOfCards = 0;

        cards.forEach((card, index) => {
            expect(card).toBeInTheDocument();
            noOfCards += 1;
        });

        expect(noOfCards).toBe(6);
    });
});

