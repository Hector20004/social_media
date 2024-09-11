import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import Map from "~/app/_components/map"
import dynamic from "next/dynamic";
import Link from "next/link";
export default async function Home() {

	const session = await getServerAuthSession();

  //void api.post.getLatest.prefetch();
  const Map = dynamic(
    () => import('~/app/_components/map'),
    { ssr: false } 
  );
  return (
	  <main className="bg-blue-500">
		<nav className="flex flex-row"> 
			<p>Social_Media_Map</p>
			<Link
                href={session ? "/api/auth/signout" : "/api/auth/signin"}
                className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              >
                {session ? "Sign out" : "Sign in"}
              </Link>

		</nav>
		<div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-center text-2xl text-white">
                {session && <span>Logged in as {session.user?.name}</span>}
              </p>
              
            </div>
          </div>
	  </main>
  );
}
