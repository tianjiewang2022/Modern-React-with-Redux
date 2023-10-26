import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios';
import { Faker } from "@faker-js/faker";
const addUser = createAsyncThunk('users/add')