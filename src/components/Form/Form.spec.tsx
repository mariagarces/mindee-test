import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Form from "./Form";

describe("<Form />", () => {
  it("should render component", () => {
    const setItemMock = jest.fn();
    render(<Form setItem={setItemMock} />);

    const button = screen.getAllByRole("button");
    const textbox = screen.getAllByRole("textbox");

    expect(button[0]).toBeInTheDocument();
    expect(textbox[0]).toBeInTheDocument();
    expect(textbox[1]).toBeInTheDocument();
  });

  it("should submit info", () => {
    const setItemMock = jest.fn();
    render(<Form setItem={setItemMock} />);

    const button = screen.getAllByRole("button");
    const textbox = screen.getAllByRole("textbox");
    
    expect(button[0]).toHaveAttribute("disabled");
    
    fireEvent.change(textbox[0], {
      target: { value: "test" },
    });

    expect(button[0]).toHaveAttribute("disabled");

    fireEvent.change(textbox[1], {
      target: { value: "test" },
    });

    expect(button[0]).not.toHaveAttribute("disabled");

    fireEvent.click(button[0]);
    expect(setItemMock).toBeCalledTimes(1);
  });
});
