import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import { Ingredient } from "./Ingredient";

describe("Ingredient component", () => {
    it("Renderiza el nombre correctamente", () => {

        render(<Ingredient name="test" />);
        const text = screen.getByText("test");
        expect(text).toBeDefined();
        
    })
})