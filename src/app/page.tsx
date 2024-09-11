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
	<HydrateClient>
	  <main className="bg-white-500 min-h-screen flex-col flex-nowwrap space-y-5">
		<nav className="flex flex-row justify-end"> 
			<p className="text-center text-2xl text-white">
                {session && <span>Logged in as {session.user?.name}</span>}
              </p>
			<Link
                href={session ? "/api/auth/signout" : "/api/auth/signin"}
                className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              >
                {session ? "Sign out" : "Sign in"}
              </Link>
		</nav>
		<button type="button">Create Post</button>
		<Map></Map> 

	  </main>
	</HydrateClient>
  );
}
