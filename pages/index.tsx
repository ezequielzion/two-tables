import type { NextPage } from "next";
import Head from "next/head";
import Table from "../Table";
import styles from "../styles/Home.module.css";
import {
  AGE,
  CITY,
  COUNTRY,
  INVENTORY,
  ITEM,
  MOVIE_RATING,
  NAME,
  REGION,
  SIZE,
} from "../utils/constants";
import { ITableOneObj, ITableTwoObj } from "../utils/types";

const Home: NextPage = () => {
  const data_1: ITableOneObj[] = [
    {
      name: "John",
      age: 29,
      movie_rating: 4,
      city: "Vancouver",
      region: "British Columbia",
      country: "Canada",
    },
    {
      name: "Sarah",
      age: 32,
      movie_rating: 5,
      city: "Frankfurt",
      region: "Hesse",
      country: "Germany",
    },
    {
      name: "Dave",
      age: 44,
      movie_rating: 4,
      city: "San Diego",
      region: "California",
      country: "United States",
    },
  ];
  const data_2: ITableTwoObj[] = [
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
    {
      item: "grapefruit",
      inventory: 4,
      size: "large",
    },
    {
      item: "strawberry",
      inventory: 14,
      size: "small",
    },
  ];

  const columns_1: string[] = [NAME, MOVIE_RATING, AGE, CITY, REGION, COUNTRY];
  const columns_2: string[] = [ITEM, SIZE, INVENTORY];

  return (
    <div className={styles.container}>
      <Head>
        <title>Table App</title>
        <meta name="description" content="Table app" />
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/laptop_1f4bb.png"
        />
      </Head>

      <main className={styles.main}>
        <h1>Tables</h1>
        <div className={styles.tableContainer}>
          <Table data={data_1} columns={columns_1} />
          <Table data={data_2} columns={columns_2} />
        </div>
      </main>
    </div>
  );
};

export default Home;
