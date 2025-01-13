/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {
  IThemeConfig,
  useTheme,
  getConfig,
} from "../../../../_start/layout/core";
import { StartExercisePage } from "./StartExercisePage";

const defaultPageConfig = getConfig();
const dashboardPageConfig: Partial<IThemeConfig> = {
  toolbar: {
    ...defaultPageConfig.toolbar,
    display: false,
  },
};

export function StartExerciseWrapper() {
  const { setTheme } = useTheme();
  // Refresh UI after config updates
  useEffect(() => {
    setTheme(dashboardPageConfig);
    return () => {
      setTheme(defaultPageConfig);
    };
  }, []);

  return <StartExercisePage />;
}
