import { useSelector } from "react-redux";

// NOTE: this hook is not particularly efficient. It broadly listens to all of theme colors and
// returns all of them. This is OK however since themes are 'static' objects and are not updated
// by gameplay color by color, rather the entire object gets swapped out via id when switching
// themes.

const useTheme = () => {
  const currentThemeId = useSelector(state => state.theme.currentThemeId);

  // const secondary = useSelector(state => state.theme.themes[currentThemeId].color.secondary);
  const color = useSelector(state => state.theme.themes[currentThemeId].color);
  const font = useSelector(state => state.theme.themes[currentThemeId].font);

  return { ...color, ...font };
};

export default useTheme;
