import { render, screen, fireEvent } from "@testing-library/react-native";
import renderer from "react-test-renderer";

import { Carousel } from "components";

describe("Carousel Panel Component", () => {
  const images = [
    {
      url: "https://i.picsum.photos/id/270/536/354.jpg?hmac=mnhmFHibNPisjwBAA_oFyczU3QOuP0Pd6-oeEm5IQaU",
      is_portrait: true,
      position: 0,
      unit_group_ids: [],
      tags: [],
    },
  ];
  test("renders correctly", () => {
    render(<Carousel images={images} />);
    const rendered = renderer.create(<Carousel images={images} />).toJSON();

    expect(screen.getAllByTestId("carousel-item").length).toBe(1);
    expect(screen.getByTestId("carousel-item-image")).toBeTruthy();
    expect(rendered).toMatchSnapshot();
  });
});
