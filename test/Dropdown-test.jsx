import {
  render,
  screen,
  fireEvent,
  waitFor,
  getByTestId,
} from "@testing-library/react";
import Dropdown from "../src/components/Navbar/Dropdown.jsx";
import StoreTabs from "../src/components/Navbar/StoreTabs.jsx";
import "@testing-library/jest-dom";

describe("dropdown test", () => {
  beforeEach(() => {
    render(
      <Dropdown
        submenus={[
          { title: "test1", url: "#" },
          { title: "test2", url: "#" },
          { title: "test3", url: "#" },
        ]}
        title='dropdown-item'
      >
        <h4>Content</h4>
      </Dropdown>
    );
  });

  test("should show the content at the start", () => {
    expect(screen.getByTestId("Tab")).toBeInTheDocument();
  });

  // test("should not show the content at the start", () => {
  //   let submenus = [
  //     { title: "test1"},
  //     { title: "test2"},
  //     { title: "test3"},
  //   ];
  //   let item1 = screen.getByText(submenus[0].title)
  //   expect(item1).not.toBeInTheDocument()
  // });
});

describe("store tabs testing", () => {
  beforeEach(() => {
    render(
      <StoreTabs
        items={{
          title: "Test Store",
          url: "#",
          submenu: [
            { title: "test1", url: "#" },
            { title: "test2", url: "#" },
            { title: "test3", url: "#" },
          ],
        }}
        index={0}
      />
    );
  });

  test("should show the activeSubmenu on accordion hover", async () => {
    const menuItemsElem = screen.getByTestId("menuItems");
    const submenuElem = screen.queryAllByTestId("item");

    for (let i = 0; i < submenuElem.length; i++) {
      fireEvent.mouseOver(submenuElem[i]);

      await waitFor(() => {
        expect(menuItemsElem).toBeInTheDocument();
      });
    }
  });
});
