export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
export function capitalizeWords(str: string): string {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
