// @flow

import config from "@phenomic/core/lib/defaultConfig.js";

import transformJSON from "../index.js";

it("should transform json as json", () => {
  const plugin = transformJSON(config, {});
  expect(typeof plugin.transform === "function").toBe(true);
  expect(
    typeof plugin.transform === "function" &&
      // $FlowFixMe you are so funny sometime flow
      plugin.transform({
        file: {
          name: "file.json",
          fullpath: "/test/file.json",
          // exists: true,
          // type: "wat"
        },
        contents: Buffer.from(
          `{
      "test": "a",
      "test2": "b",
      "somedata": "Normal version"
    }`,
        ),
      }),
  ).toMatchSnapshot();
});

it("should transform json as json and support partial", () => {
  const plugin = transformJSON(config, {});
  expect(typeof plugin.transform === "function").toBe(true);
  expect(
    typeof plugin.transform === "function" &&
      // $FlowFixMe you are so funny sometime flow
      plugin.transform({
        file: {
          name: "file.json",
          fullpath: "/test/file.json",
          // exists: true,
          // type: "wat"
        },
        contents: Buffer.from(
          `{
      "test": "a",
      "test2": "b",
      "somedata": "Normal version",
      "partial": {
        "somedata": "Light version"
      }
    }`,
        ),
      }),
  ).toMatchSnapshot();
});
