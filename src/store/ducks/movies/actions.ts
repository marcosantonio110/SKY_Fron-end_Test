import { action } from "typesafe-actions";
import {MoviesTypes, } from "./types";

export const getListMoviesRequest = () =>
  action(MoviesTypes.GET_LIST_MOVIES_REQUEST, {});

export const getListMoviesSuccess = (data: []) =>
  action(MoviesTypes.GET_LIST_MOVIES_SUCCESS, { data });

export const getListMoviesFailure = () =>
  action(MoviesTypes.GET_LIST_MOVIES_FAILURE, {});
