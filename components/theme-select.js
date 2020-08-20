import React, { useState } from "react";

import cn from "classnames";
import styles from "./theme-select.module.css";

const THEME = {
  light: "Light",
  dim: "Dim",
  dark: "Dark",
};

function ThemeSelect({}) {
  const [selectedTheme, selectedThemeSet] = useState("light");

  return (
    <div className={styles.container}>
      {/* <label>
        <input type="radio" name="theme" value="light" checked />
        Light
      </label>
      <input type="radio" name="theme" value="dim" />
      <input type="radio" name="theme" value="dark" /> */}

      {["light", "dim", "dark"].map((theme) => (
        <label key={theme} className={styles.label}>
          <input
            type="radio"
            name="theme"
            value={theme}
            checked={theme === selectedTheme}
            onChange={(e) => selectedThemeSet(e.target.value)}
          />
          {THEME[theme]}
        </label>
      ))}
    </div>
  );
}

export default ThemeSelect;
