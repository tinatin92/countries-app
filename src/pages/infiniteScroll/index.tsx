import React from "react";
import classes from "./index.module.css";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import Card from "./Card";

export interface Todo {
  id: string;
  title: string;
}

const InfiniteScroll: React.FC = () => {
  const getCountries = async ({ pageParam = 1 }): Promise<Todo[]> => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_page=${pageParam}&_limit=10`,
    );
    return response.data;
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["todo-list"],
      queryFn: getCountries,
      initialPageParam: 1, // Add initialPageParam to define the starting page
      getNextPageParam: (lastPage, allPages) => {
        // Define the logic to decide if there’s another page to load
        if (lastPage && lastPage.length) {
          return allPages.length + 1;
        }
        return undefined;
      },
    });

  const todoList = data?.pages.flat() || [];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollTop + clientHeight >= scrollHeight && hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <div className={classes.scrollBox} onScroll={handleScroll}>
      {todoList.map((listItem) => (
        <Card key={listItem.id} todo={listItem} />
      ))}
      {isFetchingNextPage && <div>Loading more...</div>}
    </div>
  );
};

export default InfiniteScroll;
