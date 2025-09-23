import Movie from "./movie";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./slice";
import Loader from "@components/Loader";

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

  if (state.loading) return <Loader />;

  return (
    <div className="container mx-auto grid grid-cols-4 gap-10">
      {renderListMovie()}
    </div>
  );
}
