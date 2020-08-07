// agent to controll all api
import axios from "axios";

export const OffersAgent = {
  getAllOffers: () => {
    console.log("Fetching Data...");
    return axios.get("/api/getAllOffers");
  },
};

export const UsersAgent = {
  getAllUsers: () => "All Users from api server",
};

export const BanksAgent = {
  getAllBanks: () => "All Banks from api server",
};

export const CardsAgent = {
  getAllCards: () => "All Cards from api server",
};
