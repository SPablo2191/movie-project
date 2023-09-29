import { useEffect, useState } from "react";
import dotenv from 'dotenv';
import { Endpoints } from "../../project/enums/endpoints.enum";
import { operations } from "../../project/enums/operation.enum";
dotenv.config();
const apiUrl: string = process.env.BACKEND_URL || 'http://localhost:3333';

export const useModelList = <Model>(
  endpoint: Endpoints,
) => {
  const [data, setData] = useState<Model>({} as Model);

  const getData = async () => {
    try {
      const response = await fetch(`${apiUrl}${process.env.VERSION}${endpoint}${operations.getAll}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data: Model = await response.json();

      setData(data);
    } catch (error) {
      if (error instanceof Error)
        throw new Error(`Error fetching data: ${error.message}`);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, setData, getData };
};
