import { NextResponse } from "next/server";

export function middleware(request) {
  const userId = request.cookies.has("id_token");
  if (!userId) return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/profile", "/create-post"],
};
