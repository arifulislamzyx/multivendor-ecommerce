"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

interface ReactQUeryProviderProps{
  children: ReactNode;
}

export const ReactQueryProvider: React.FC<ReactQUeryProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
