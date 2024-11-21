import axios from "axios";
axios.defaults.baseURL = "https://zyxcl.xyz/music/api";

export interface profile {
  avatarUrl?: string;
  backgroundUrl?: string;
  userId?: number;
  signature?: string;
  nickname?: string;
}
export interface accountData {
  code: number;
  account?: {};
  profile?:profile
}

export const apiBanner = () => {
  return axios({
    url: "/banner",
  });
};

export const apiUserAccount = (cookie: string) => {
  return axios<accountData>({
    url: "/user/account",
    params: {
      cookie,
    },
  });
};
