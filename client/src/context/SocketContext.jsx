import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "./AuthContext";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (!currentUser) return; // Don't connect if no user

    const newSocket = io("http://localhost:4000", {
      withCredentials: true, // Ensure cookies work if using authentication
    });

    setSocket(newSocket);

    newSocket.emit("newUser", currentUser.id);

    return () => {
      newSocket.disconnect();
    };
  }, [currentUser]); // Reconnect when currentUser changes

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
