import { Suspense } from "react";
import Stars from "./Stars";

const repeat = 25000;
const delayInterval = 0;

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <Suspense>
        <Stars repo="vercel/next.js" delay={0} repeat={repeat} />
      </Suspense>
      <Suspense>
        <Stars repo="vercel/ai" delay={delayInterval} repeat={repeat} />
      </Suspense>
      <Suspense>
        <Stars repo="vercel/turbo" delay={delayInterval * 2} repeat={repeat} />
      </Suspense>
      <Suspense>
        <Stars repo="vercel/swr" delay={delayInterval * 3} repeat={repeat} />
      </Suspense>
    </div>
  );
}

export async function generateMetadata() {
  return {
    title: "Stars!",
  };
}
