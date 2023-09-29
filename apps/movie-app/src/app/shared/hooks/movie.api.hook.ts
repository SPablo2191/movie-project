import { useEffect, useState } from "react";
import axios from "axios";
import dotenv from 'dotenv';
import { Endpoints } from "../../project/enums/endpoints.enum";
import { operations } from "../../project/enums/operation.enum";
import { Status } from "../../project/enums/status.enum";
dotenv.config();

const apiUrl: string = process.env.BACKEND_URL || 'http://localhost:3333';

export const useModelList = <Model>(
  endpoint: Endpoints,
) => {
  const [data, setData] = useState<Model>({} as Model);

  const getData = async () => {
    try {
      const response = await axios.get(`${apiUrl}${process.env.VERSION}${endpoint}${operations.getAll}`);

      if (response.status !== Status.SUCCESS) {
        throw new Error("Network response was not ok");
      }

      const data: Model = response.data;

      setData(data);
    } catch (error) {
      if (error instanceof Error)
        throw new Error(`Error fetching data: ${error.message}`);
    }
  };

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, setData, getData };
};
