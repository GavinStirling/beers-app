import { render, screen } from "@testing-library/react";

import Card from "./Card";

import beers from "../../data/beers";

describe("Basic tests to see if the card is working correctly", () => {
    it("Renders a card", () => {
        render(<Card beer={beers[0]} />);

        const cardDiv = screen.getByTestId("card");

        expect(cardDiv).toBeInTheDocument();
    });

    it("Renders the items on the card correctly", () => {
        render(<Card beer={beers[0]} />);

        const cardImg = screen.getByAltText(beers[0].name);
        const cardName = screen.getByText(beers[0].name);
        const cardTagLine = screen.getByText(beers[0].tagline);
        const cardFirstBrewed = screen.getByText(
            `First Brewed: ${beers[0].first_brewed}`
        );
        const cardAlcoholPercentage = screen.getByText(
            `Alcohol content: ${beers[0].abv}%`
        );
        const cardAcidity = screen.getByText(`Acidity: ${beers[0].ph}ph`);

        expect(cardImg).toBeInTheDocument();
        expect(cardName).toBeInTheDocument();
        expect(cardTagLine).toBeInTheDocument();
        expect(cardFirstBrewed).toBeInTheDocument();
        expect(cardAlcoholPercentage).toBeInTheDocument();
        expect(cardAcidity).toBeInTheDocument();
    });
});
