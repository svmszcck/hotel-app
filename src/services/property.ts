import { BASE_URL, HEADERS } from "constants/config";
import { Property } from "global-types";

export const fetchProperties = async (
  id: number
): Promise<Property[] | undefined> => {
  try {
    const response = await fetch(
      `${BASE_URL}/properties/?cityId=${id}&adults=1`,
      {
        method: "GET",
        headers: HEADERS,
      }
    );

    const data = await response.json();

    return data?.payload;
  } catch (error) {
    console.log(error);
  }
};

export const fetchProperty = async (
  id: number
): Promise<Property | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/properties/${id}`, {
      method: "GET",
      headers: HEADERS,
    });

    const data = await response.json();

    return data?.payload;
  } catch (error) {
    console.log(error);
  }
};
