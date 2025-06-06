import { beforeAll, afterEach, afterAll } from "vitest";
import "@testing-library/jest-dom";
import { server } from "./server";
import { configure } from "@testing-library/react";

configure({ testIdAttribute: "data-test-id" });

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
