import { createAsyncThunk } from "@reduxjs/toolkit";
// toastify
import { toast } from "react-toastify";
import { toastifyOptions } from "../../utils/toastifyOptions";

import * as api from "../../shared/api/apiContacts";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(
        `Ooops! Wrong... Try again or update browser`
      );
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.addContact(data);
      toast.success("Add contact", toastifyOptions);
      return result;
    } catch ({ response }) {
      return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      toast.success("Contact delete", toastifyOptions);
      return id;
    } catch ({ response }) {
      return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
    }
  }
);

export const changeContact = createAsyncThunk(
  "contacts/editContact",
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.editContact(data);
      toast.success("Contact update", toastifyOptions);
      return result;
    } catch ({ response }) {
      return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
    }
  }
);
