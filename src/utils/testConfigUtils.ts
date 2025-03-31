import { render, queries, type RenderOptions } from "@testing-library/react";
import type { ReactNode } from "react";

const customRender = (
  ui: ReactNode,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { queries, ...options });

export * from "@testing-library/react";
export { customRender as render };