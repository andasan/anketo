import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Ankēto</title>
        <link rel="shortcut icon" href="/anketo.svg" />
      </Head>
      <div className="antialiased min-h-screen flex items-center justify-center text-xl font-bold">
        404 | Not Found
      </div>
    </>
  );
}
