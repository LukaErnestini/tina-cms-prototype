import { HomeComponent } from "@/components/home-component";
import client from "@/tina/__generated__/client";

export default async function Home() {
  const result = await client.queries.page({ relativePath: "Hello.md" });

  return <HomeComponent {...result} />;
}
