import Movie from "./movie";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./slice";

export default function ListMoviePage() {
  const state = useSelector((state) => state.listMovieReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const renderListMovie = () => {
    const { data } = state;
    return data?.map((item) => {
      return <Movie key={item.maPhim} data={item} />;
    });
  };

  if (state.loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto grid grid-cols-4 gap-10">
      {renderListMovie()}
    </div>
  );
}
