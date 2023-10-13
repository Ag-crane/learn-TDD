import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { rest } from "msw";
import { setupServer } from "msw/node";

const mockServer = setupServer(
  rest.get("/api/students", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "John", age: 20 },
        { name: "Jane", age: 21 },
      ])
    );
  })
);

beforeAll(() => {
  mockServer.listen();
});
afterEach(() => {
  mockServer.resetHandlers();
});
afterAll(() => {
  mockServer.close();
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  expect(screen.getByText(/click: 0/i)).toBeInTheDocument();
  fireEvent.click(screen.getByText(/click: 0/i));
  expect(screen.getByText(/click: 1/i)).toBeInTheDocument();
  expect(screen.queryByText(/click: 0/i)).not.toBeInTheDocument();
});
