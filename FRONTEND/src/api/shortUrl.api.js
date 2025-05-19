import axios from "axios";
import axiosInstance from "../utils/axiosinstance";
export const createShortUrl = async(url) => {
    const {data} =  await axiosInstance.post("/api/create", { url })
    return data.shortUrl;
}


