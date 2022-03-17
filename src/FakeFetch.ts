import { OrderKey } from "./data";

export async function fakeFetch(_: string) {
    return new Promise<OrderKey>((resolve) => {
      setTimeout(() => {
        resolve({ key: Math.floor(Math.random() * 100000000) + 10000000 });
      }, 2000);
    });
  }