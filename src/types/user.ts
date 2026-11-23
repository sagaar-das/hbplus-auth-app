export interface AppUser {
  uid: string;
  name: string | null;
  email: string;
  photoURL: string | null;
  role: "Admin" | "User";
}