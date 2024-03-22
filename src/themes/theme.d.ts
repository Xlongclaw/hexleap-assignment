type ThemeType = "light" | "dark";

interface IThemeContext {
  value: ThemeType;
  changeTheme: (value: ThemeType) => void;
}
