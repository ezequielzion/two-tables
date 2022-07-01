## To run the app

To run the app, run the following command:

```bash
npm i && npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## The app itself

Table accepts two props: `data` and `columns`

- `data` is an array of objects of the same type, which means that all of them should have the same properties.
- `columns` is an array of string constants, which are used as _keys_. They help:
  - Display the appropiate text constant by using the bracket syntax in an array of display constants
  - Set the order in which each column appears, also using the bracket syntax to access each object of `data`

It is **very important** to make sure that what goes inside `columns` can safely access what's inside `data`

## Example

```
const data: ITableTwoObj[] = [
    {
      item: "apple",
      inventory: 12,
      size: "medium",
    },
    {
      item: "blueberry",
      inventory: 103,
      size: "small",
    },
  ];

const columns: string[] = [ITEM, SIZE, INVENTORY];

<Table data={data} columns={columns} />
```
