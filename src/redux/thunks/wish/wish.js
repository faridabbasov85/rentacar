import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getWishs = createAsyncThunk("wishs/getWishs", async () => {
    const res = await axios.get("https://rentacar-r44c.vercel.app/wishlist")
    return res.data
})

export const postWishs = createAsyncThunk("wishs/postWishs", async (data) => {
    const res = await axios.post("https://rentacar-r44c.vercel.app/wishlist",data)
    return res.data
})

export const deleteWishs = createAsyncThunk("wishs/deleteWishs", async (_id) =>{
    const res = await axios.delete("https://rentacar-r44c.vercel.app/wishlist", {data: {_id}})
    return _id
})
