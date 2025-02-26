import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("products/getProducts", async () => {
    const res = await axios.get("https://rentacar-r44c.vercel.app/product")
    return res.data
})

export const postProducts = createAsyncThunk("products/postProducts", async (data) => {
    const res = await axios.post("https://rentacar-r44c.vercel.app/product", data)
    return res.data
})

export const deleteProducts = createAsyncThunk("products/deleteProducts", async (_id) =>{
    const res = await axios.delete("https://rentacar-r44c.vercel.app/product", {data: {_id}})
    return _id
})
