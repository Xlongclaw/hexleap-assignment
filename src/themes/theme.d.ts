type ThemeType = "LIGHT" | "DARK";

interface IThemeContext {
  value: ThemeType;
  changeTheme: (value: ThemeType) => void;
}
