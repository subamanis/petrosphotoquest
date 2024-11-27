import { Service } from "../../../shared/types";
import { useApi } from '../hooks/useApi';

export const useServiceApi = () => {
  console.log('use service api');
  
  const api = useApi('/services');

  const getAll = async () => {
    return api.fetch('');
  };

  return {
    getAll
  };
};