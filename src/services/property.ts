import { BASE_URL } from "constants/config";

export const fetchProperties = async (id: number): Promise<any | undefined> => {
  try {
    const response = await fetch(
      `${BASE_URL}/properties/?cityId=${id}&adults=1`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    // console.log(data);

    return data?.payload;
  } catch (error) {
    console.log(error);
  }
};

export const fetchProperty = async (id: number): Promise<any | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/properties/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    // console.log(data);

    return data?.payload;
  } catch (error) {
    console.log(error);
  }
};
