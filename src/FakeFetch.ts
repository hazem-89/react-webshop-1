import { OrderKey } from "./data";

export async function fakeFetch(_: string) {
    return new Promise<OrderKey>((resolve) => {
      setTimeout(() => {
        resolve({ key: Math.random() });
      }, 2000);
    });
  }