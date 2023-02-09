import React from "react";
import { render, screen } from "@testing-library/react";

import Home from "./Home";

describe("<Home />", () => {
  it("should render page", () => {
    render(<Home/>);

    const title = screen.getAllByRole("heading");
    const table = screen.getAllByRole("table");
    const button = screen.getAllByRole("button");
    const textbox = screen.getAllByRole("textbox");

    expect(title[0].textContent).toBe("Items management App");
    expect(table.length).toBe(1);
    expect(button.length).toBe(1);
    expect(button[0].textContent).toBe("Submit");
    expect(textbox.length).toBe(2);
  });
});