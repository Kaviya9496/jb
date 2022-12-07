import { render,fireEvent, screen } from "@testing-library/react";
import Weather from "./Component/Weather";
import DisplayWeather from "./Component/DisplayWeather";

//test block
test("renders weather component", () => {
  // render the component on virtual dom
  render(<>
  <Weather />
  <DisplayWeather />
  </>);
  
  //select the elements you want to interact with

  const inputCity = screen.getByPlaceholderText('city');
  const inputCountry = screen.getByPlaceholderText('country');
  const submitBtn = screen.getByTestId("getweather");
  const description = screen.getByTestId("weather-description");
  //interact with those elements
  fireEvent.change(inputCity, {
    target: { value: 'london' },
  });
  fireEvent.change(inputCountry, {
    target: { value: 'uk' },
  });
  fireEvent.click(submitBtn);
  
  //assert the expected result
  expect(description).toBeInTheDocument();
  });