import { render, screen, fireEvent } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import { Ingredient } from "./Ingredient";
import { Login } from "../pages/login/Login.page";

describe("Ingredient component", () => {

    it("Render name successfully", () => {
        render(<Ingredient name={"cebolla"} />);
        const text = screen.getByText("cebolla");
        expect(text).toBeInTheDocument();
    });

    it("Should run function when button is clicked", () => {
        // Arrage
        const mockFunction = vi.fn();
        render(<Ingredient name="manzana" handleButtonClick={mockFunction} />);

        // Act
        const button = screen.getByRole("button");
        fireEvent.click(button);

        //Assert
        expect(mockFunction).toHaveBeenCalled();
    });

    it("Should run function when link text is clicked", () => {
        // Arrage
        const mockLink = vi.fn();
        render(<Login handleLinkClick={mockLink} />);

        // Act
        const link = screen.getByRole("Link");
        fireEvent.click(link);

        //Assert
        expect(mockLink).toHaveBeenCalled();
    });
})