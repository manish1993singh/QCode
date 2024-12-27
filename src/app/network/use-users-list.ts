"use client";
import { useState, useEffect } from "react";

const useUsersList = (searchKey: string) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | unknown>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const endpoint =
          process.env.NEXT_PUBLIC_DOMAIN +
          `/api/users?search=${encodeURIComponent(searchKey)}`;
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    searchKey && fetchUsers();
  }, [searchKey]);

  return { users, loading, error };
};

export default useUsersList;
