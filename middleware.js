import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();

  let cookie = request.cookies.get("token")?.value;
  console.log(cookie);
  const loggedUserDoNotAccess =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup";

  if (loggedUserDoNotAccess) {
    if (cookie) {
      NextResponse.redirect(new URL("/", request.url));
    }
  }
  if (!cookie) {
    if (request.nextUrl.pathname.startsWith("/dashboard")) {
      return NextResponse.rewrite(new URL("/login", request.url));
    }
  } else {
    if (url.pathname === "/") {
      url.pathname = "/dashboard";
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};

// if (request.nextUrl.pathname.startsWith("/signin")) {
//   return NextResponse.rewrite(new URL("/", request.url));
// }
