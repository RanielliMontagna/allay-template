type ThemeWithColors = {
  colors: {
    gray: Record<string, string>
    [key: string]: string | Record<string, string>
  }
}
export const resolveColor = (theme: ThemeWithColors, color: string) => {
  if (color?.startsWith('gray.')) {
    const shade = color.split('.')[1]
    return theme.colors.gray[shade]
  }

  return theme.colors[color] as string
}
