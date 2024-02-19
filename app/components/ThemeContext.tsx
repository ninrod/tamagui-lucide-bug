import React, { Dispatch, SetStateAction, createContext, useState } from "react";

export const ThemeContext = React.createContext<{
    isDarkTheme: boolean;
    setIsDarkTheme: (value: boolean) => void;
  }>({
    isDarkTheme: false,
    setIsDarkTheme: () => {},
  });