import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import TableComp from "./TableComp";
import { Item } from "../../models/Item";

describe("<TableComp />", () => {
  const listItems = [
    new Item("item1", "item1 description1"),
    new Item("item2", "item2 description2"),
  ];

  it("should render table header", () => {
    const getItemsMock = jest.fn().mockReturnValueOnce(listItems);
    const deleteItemMock = jest.fn();
    render(<TableComp getItems={getItemsMock} deleteItem={deleteItemMock} />);
    
    const header = screen.getAllByRole("columnheader");

    expect(header[0]).toHaveTextContent("Name");
    expect(header[1]).toHaveTextContent("Description");
    expect(header[2]).toHaveTextContent("Action");
  })

  it("should show items in the table", () => {
    const getItemsMock = jest.fn().mockReturnValueOnce(listItems);
    const deleteItemMock = jest.fn();
    render(<TableComp getItems={getItemsMock} deleteItem={deleteItemMock} />);
    
    const rows = screen.getAllByRole("rowheader");

    expect(rows.length).toBe(2);  
    expect(rows[0].textContent).toBe("item1");
    expect(rows[1].textContent).toBe("item2");
    expect(getItemsMock).toBeCalledTimes(1);
  });

  it("should delete item in the table", () => {
    const getItemsMock = jest.fn().mockReturnValueOnce(listItems);
    const deleteItemMock = jest.fn();
    render(<TableComp getItems={getItemsMock} deleteItem={deleteItemMock} />);
    
    const buttons = screen.getAllByRole("button");

    expect(buttons.length).toBe(2);
    fireEvent.click(buttons[0]);
    expect(deleteItemMock).toBeCalledTimes(1);
  });
});
