import App from "./App";
import { render } from "./utils/testConfigUtils";

describe("App Component", () => {
  test("should app render", () => {
    const app = render(<App />);
    expect(app).toBeTruthy();
  });
});
