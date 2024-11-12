export function formatCamelCaseToTextSpace(query: string) {
  return query.replace(/([a-z])([A-Z])/g, "$1 $2");
}