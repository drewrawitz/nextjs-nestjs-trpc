import { trpc } from "@web/app/trpc";

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: "Drew" });
  return <div>{greeting}</div>;
}
