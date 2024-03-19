import { IReadOnlyChildren } from "@/types/types";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

const RootProvider: React.FC<IReadOnlyChildren> = ({ children }) => {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#624cf5",
          colorBackground: "#efefff",
          colorInputBackground: "#f7f5ff",
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
};

export default RootProvider;
