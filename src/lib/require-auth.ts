import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE } from "@/lib/auth";

export async function requireAuth() {
  const cookieStore = await cookies();
  const authUserId = cookieStore.get(AUTH_COOKIE)?.value;
  const isAuthenticated = Boolean(authUserId);

  if (!isAuthenticated) {
    redirect("/login");
  }
}
