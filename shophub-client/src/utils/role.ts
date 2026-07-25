export function isAdmin(role?: string) {
  return role?.toLowerCase() === "admin";
}