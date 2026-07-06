import type { HitokotoResponse } from '@/types';
import axios from 'axios';

export const getTalk = async ():Promise<HitokotoResponse> => {
  const response = await axios.get("https://v1.hitokoto.cn");
  return response.data;
};