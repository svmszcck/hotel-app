import { render, screen, fireEvent } from "@testing-library/react-native";
import renderer from "react-test-renderer";

import { HotelPanel } from "components";
import GlobalContext from "contexts/GlobalContext";
import { GlobalState } from "global-types";

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe("Hotel Panel Component", () => {
  const initialState: GlobalState = {
    loading: false,
    properties: [
      {
        id: 123,
        external_id: "Twerwe",
        images: [
          "https://i.picsum.photos/id/270/536/354.jpg?hmac=mnhmFHibNPisjwBAA_oFyczU3QOuP0Pd6-oeEm5IQaU",
        ],
        name: "Gdfgdf",
        distance: 1.23234,
        lowest_price_per_night: 75,
      },
    ],
    activeProperty: 123,
  };

  const contextValues = {
    ...initialState,
    setProperties: jest.fn(),
    setActiveProperty: jest.fn(),
  };

  test("renders correctly", () => {
    const tree = (
      <GlobalContext.Provider value={contextValues}>
        <HotelPanel />
      </GlobalContext.Provider>
    );

    render(tree);
    const rendered = renderer.create(tree).toJSON();

    fireEvent.press(screen.getByTestId("hotel-panel-container"));

    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(screen.getByText("Gdfgdf")).toBeTruthy();
    expect(screen.getByText("1.2 km from city center")).toBeTruthy();
    expect(screen.getByText("75€/Night")).toBeTruthy();
    expect(rendered).toMatchSnapshot();
  });
});
