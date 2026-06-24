import axios from 'axios';

interface HitokotoResponse {
  id: number;
  hitokoto: string;
  type: string;
  from: string;
  from_who?: string;
  creator: string;
  creator_uid: number;
  reviewer: number;
  commit_from: string;
  created_at: string;
  length: number;
}

export const getTalk = async ():Promise<HitokotoResponse> => {
  const response = await axios.get("https://v1.hitokoto.cn");
  return response.data;
};