import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gradient-to-b from-[#001f3f] to-[#005f9f] text-white font-sans">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-6xl font-bold text-center glow">
          Azure Executor
        </h1>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Azure Executor logo"
          width={240}
          height={60}
          priority
        />
        <ol className="list-inside list-decimal text-lg text-center sm:text-left glow-sm">
          <li className="mb-4">
            Start by editing{" "}
            <code className="bg-black/[.3] dark:bg-white/[.1] px-2 py-1 rounded font-semibold glow-code">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save your changes and execute them in real time.</li>
        </ol>

        <div className="flex gap-6 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border-2 border-solid border-transparent transition-all flex items-center justify-center bg-[#0078d4] hover:bg-[#005a9e] text-white text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 glow-button"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy Now
          </a>
          <a
            className="rounded-full border-2 border-solid border-white transition-all flex items-center justify-center hover:bg-white hover:text-[#0078d4] text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 glow-border"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-8 flex-wrap items-center justify-center text-lg glow-sm">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={20}
            height={20}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={20}
            height={20}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={20}
            height={20}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
