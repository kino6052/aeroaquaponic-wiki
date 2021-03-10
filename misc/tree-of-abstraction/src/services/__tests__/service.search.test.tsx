import { Id } from "../../bridge";
import { Utils } from "../../utils/utils";
import { sequence } from "../main.service";

let counter = 0;

beforeAll(() => {
  jest.spyOn(Utils, "generateId").mockImplementation(() => {
    const prev = counter;
    counter += 1;
    return `${prev}`;
  });
});

beforeEach(() => {
  counter = 0;
});

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe("Search", () => {
  it("should search", () => {
    expect(
      sequence([
        ["change", Id.AddItemInput, "one"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-0`, ""],
        ["change", Id.AddItemInput, "two"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-0`, ""],
        ["change", Id.AddItemInput, "three"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-2`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.SearchItemsInput, "o"],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "addItemInput": "four",
        "itemSearchInput": "o",
        "selectedNode": "item-element-3",
        "shouldShowControls": false,
        "tree": Array [
          "item-element-root",
          "item-element-0",
          "item-element-1",
          "item-element-2",
          "item-element-3",
          "item-element-4",
          "item-element-5",
          "item-element-6",
        ],
        "treeNodes": Object {
          "item-element-0": Object {
            "children": Array [
              "item-element-1",
              "item-element-2",
            ],
            "id": "item-element-0",
            "indent": 1,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": true,
            "parent": "item-element-root",
            "title": "one",
          },
          "item-element-1": Object {
            "children": Array [],
            "id": "item-element-1",
            "indent": 2,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": true,
            "parent": "item-element-0",
            "title": "two",
          },
          "item-element-2": Object {
            "children": Array [
              "item-element-3",
            ],
            "id": "item-element-2",
            "indent": 2,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "parent": "item-element-0",
            "title": "three",
          },
          "item-element-3": Object {
            "children": Array [
              "item-element-4",
              "item-element-5",
              "item-element-6",
            ],
            "id": "item-element-3",
            "indent": 3,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": true,
            "parent": "item-element-2",
            "title": "four",
          },
          "item-element-4": Object {
            "children": Array [],
            "id": "item-element-4",
            "indent": 4,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": true,
            "parent": "item-element-3",
            "title": "four",
          },
          "item-element-5": Object {
            "children": Array [],
            "id": "item-element-5",
            "indent": 4,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": true,
            "parent": "item-element-3",
            "title": "four",
          },
          "item-element-6": Object {
            "children": Array [],
            "id": "item-element-6",
            "indent": 4,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": true,
            "parent": "item-element-3",
            "title": "four",
          },
          "item-element-root": Object {
            "children": Array [
              "item-element-0",
            ],
            "id": "item-element-root",
            "indent": 0,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": true,
            "parent": "",
            "title": "ROOT",
          },
        },
      }
    `);
  });

  it("should search", () => {
    expect(
      sequence([
        ["change", Id.AddItemInput, "one"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-0`, ""],
        ["change", Id.AddItemInput, "two"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-0`, ""],
        ["change", Id.AddItemInput, "three"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-2`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.SearchItemsInput, "ur"],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "addItemInput": "four",
        "itemSearchInput": "ur",
        "selectedNode": "item-element-3",
        "shouldShowControls": false,
        "tree": Array [
          "item-element-root",
          "item-element-0",
          "item-element-2",
          "item-element-3",
          "item-element-4",
          "item-element-5",
          "item-element-6",
        ],
        "treeNodes": Object {
          "item-element-0": Object {
            "children": Array [
              "item-element-1",
              "item-element-2",
            ],
            "id": "item-element-0",
            "indent": 1,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "parent": "item-element-root",
            "title": "one",
          },
          "item-element-1": Object {
            "children": Array [],
            "id": "item-element-1",
            "indent": 2,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "parent": "item-element-0",
            "title": "two",
          },
          "item-element-2": Object {
            "children": Array [
              "item-element-3",
            ],
            "id": "item-element-2",
            "indent": 2,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "parent": "item-element-0",
            "title": "three",
          },
          "item-element-3": Object {
            "children": Array [
              "item-element-4",
              "item-element-5",
              "item-element-6",
            ],
            "id": "item-element-3",
            "indent": 3,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": true,
            "parent": "item-element-2",
            "title": "four",
          },
          "item-element-4": Object {
            "children": Array [],
            "id": "item-element-4",
            "indent": 4,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": true,
            "parent": "item-element-3",
            "title": "four",
          },
          "item-element-5": Object {
            "children": Array [],
            "id": "item-element-5",
            "indent": 4,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": true,
            "parent": "item-element-3",
            "title": "four",
          },
          "item-element-6": Object {
            "children": Array [],
            "id": "item-element-6",
            "indent": 4,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": true,
            "parent": "item-element-3",
            "title": "four",
          },
          "item-element-root": Object {
            "children": Array [
              "item-element-0",
            ],
            "id": "item-element-root",
            "indent": 0,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "parent": "",
            "title": "ROOT",
          },
        },
      }
    `);
  });

  it("should search", () => {
    expect(
      sequence([
        ["change", Id.AddItemInput, "one"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-0`, ""],
        ["change", Id.AddItemInput, "two"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-0`, ""],
        ["change", Id.AddItemInput, "three"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-2`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.SearchItemsInput, "TWO"],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "addItemInput": "four",
        "itemSearchInput": "TWO",
        "selectedNode": "item-element-3",
        "shouldShowControls": false,
        "tree": Array [
          "item-element-root",
          "item-element-0",
          "item-element-1",
          "item-element-2",
          "item-element-3",
        ],
        "treeNodes": Object {
          "item-element-0": Object {
            "children": Array [
              "item-element-1",
              "item-element-2",
            ],
            "id": "item-element-0",
            "indent": 1,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "parent": "item-element-root",
            "title": "one",
          },
          "item-element-1": Object {
            "children": Array [],
            "id": "item-element-1",
            "indent": 2,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": true,
            "parent": "item-element-0",
            "title": "two",
          },
          "item-element-2": Object {
            "children": Array [
              "item-element-3",
            ],
            "id": "item-element-2",
            "indent": 2,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "parent": "item-element-0",
            "title": "three",
          },
          "item-element-3": Object {
            "children": Array [
              "item-element-4",
              "item-element-5",
              "item-element-6",
            ],
            "id": "item-element-3",
            "indent": 3,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "parent": "item-element-2",
            "title": "four",
          },
          "item-element-4": Object {
            "children": Array [],
            "id": "item-element-4",
            "indent": 4,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "parent": "item-element-3",
            "title": "four",
          },
          "item-element-5": Object {
            "children": Array [],
            "id": "item-element-5",
            "indent": 4,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "parent": "item-element-3",
            "title": "four",
          },
          "item-element-6": Object {
            "children": Array [],
            "id": "item-element-6",
            "indent": 4,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "parent": "item-element-3",
            "title": "four",
          },
          "item-element-root": Object {
            "children": Array [
              "item-element-0",
            ],
            "id": "item-element-root",
            "indent": 0,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "parent": "",
            "title": "ROOT",
          },
        },
      }
    `);
  });

  it("should search", () => {
    expect(
      sequence([
        ["change", Id.AddItemInput, "one"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-0`, ""],
        ["change", Id.AddItemInput, "two"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-0`, ""],
        ["change", Id.AddItemInput, "three"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-2`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.SearchItemsInput, ""],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "addItemInput": "four",
        "itemSearchInput": "",
        "selectedNode": "item-element-3",
        "shouldShowControls": false,
        "tree": Array [
          "item-element-root",
          "item-element-0",
          "item-element-1",
          "item-element-2",
          "item-element-3",
          "item-element-4",
          "item-element-5",
          "item-element-6",
        ],
        "treeNodes": Object {
          "item-element-0": Object {
            "children": Array [
              "item-element-1",
              "item-element-2",
            ],
            "id": "item-element-0",
            "indent": 1,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "parent": "item-element-root",
            "title": "one",
          },
          "item-element-1": Object {
            "children": Array [],
            "id": "item-element-1",
            "indent": 2,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "parent": "item-element-0",
            "title": "two",
          },
          "item-element-2": Object {
            "children": Array [
              "item-element-3",
            ],
            "id": "item-element-2",
            "indent": 2,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "parent": "item-element-0",
            "title": "three",
          },
          "item-element-3": Object {
            "children": Array [
              "item-element-4",
              "item-element-5",
              "item-element-6",
            ],
            "id": "item-element-3",
            "indent": 3,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "parent": "item-element-2",
            "title": "four",
          },
          "item-element-4": Object {
            "children": Array [],
            "id": "item-element-4",
            "indent": 4,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "parent": "item-element-3",
            "title": "four",
          },
          "item-element-5": Object {
            "children": Array [],
            "id": "item-element-5",
            "indent": 4,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "parent": "item-element-3",
            "title": "four",
          },
          "item-element-6": Object {
            "children": Array [],
            "id": "item-element-6",
            "indent": 4,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "parent": "item-element-3",
            "title": "four",
          },
          "item-element-root": Object {
            "children": Array [
              "item-element-0",
            ],
            "id": "item-element-root",
            "indent": 0,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "parent": "",
            "title": "ROOT",
          },
        },
      }
    `);
  });

  it("should search", () => {
    expect(
      sequence([
        ["change", Id.AddItemInput, "one"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-0`, ""],
        ["change", Id.AddItemInput, "two"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-0`, ""],
        ["change", Id.AddItemInput, "three"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-2`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-3`, ""],
        ["change", Id.AddItemInput, "four"],
        ["click", Id.AddItemButton, ""],
        ["click", `${Id.Item}-1`, ""],
        ["change", Id.SearchItemsInput, "four"],
      ])
    ).toMatchInlineSnapshot(`
      Object {
        "addItemInput": "four",
        "itemSearchInput": "four",
        "selectedNode": "item-element-1",
        "shouldShowControls": false,
        "tree": Array [
          "item-element-root",
          "item-element-0",
          "item-element-1",
          "item-element-2",
          "item-element-3",
          "item-element-4",
          "item-element-5",
          "item-element-6",
        ],
        "treeNodes": Object {
          "item-element-0": Object {
            "children": Array [
              "item-element-1",
              "item-element-2",
            ],
            "id": "item-element-0",
            "indent": 1,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "parent": "item-element-root",
            "title": "one",
          },
          "item-element-1": Object {
            "children": Array [],
            "id": "item-element-1",
            "indent": 2,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "parent": "item-element-0",
            "title": "two",
          },
          "item-element-2": Object {
            "children": Array [
              "item-element-3",
            ],
            "id": "item-element-2",
            "indent": 2,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "parent": "item-element-0",
            "title": "three",
          },
          "item-element-3": Object {
            "children": Array [
              "item-element-4",
              "item-element-5",
              "item-element-6",
            ],
            "id": "item-element-3",
            "indent": 3,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": true,
            "parent": "item-element-2",
            "title": "four",
          },
          "item-element-4": Object {
            "children": Array [],
            "id": "item-element-4",
            "indent": 4,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": true,
            "parent": "item-element-3",
            "title": "four",
          },
          "item-element-5": Object {
            "children": Array [],
            "id": "item-element-5",
            "indent": 4,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": true,
            "parent": "item-element-3",
            "title": "four",
          },
          "item-element-6": Object {
            "children": Array [],
            "id": "item-element-6",
            "indent": 4,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": true,
            "parent": "item-element-3",
            "title": "four",
          },
          "item-element-root": Object {
            "children": Array [
              "item-element-0",
            ],
            "id": "item-element-root",
            "indent": 0,
            "isCollapsed": false,
            "isEditable": false,
            "isHighlighted": false,
            "parent": "",
            "title": "ROOT",
          },
        },
      }
    `);
  });
});
