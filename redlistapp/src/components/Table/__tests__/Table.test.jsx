import React from "react";
import { render, screen } from "@testing-library/react";
import TableComponent from "../Table";

describe("TableComponent", () => {
  it("should render the search text field", () => {
    render(<TableComponent species={[]} />);

    const searchInput = screen.getByPlaceholderText("Search species...");
    expect(searchInput).toBeInTheDocument();
  });
});
