
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Soundcore by Anker P20i | Big Bass, Small Price 🎧</title>
        <meta
          name="description"
          content="Discover the Soundcore by Anker P20i True Wireless Earbuds – 10mm drivers, Bluetooth 5.3, 30H playtime, and crystal-clear sound for music lovers on a budget."
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-6">
        <section className="max-w-3xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-lg">
            Feel Every Beat Without Breaking the Bank 🎶
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed">
            Are you tired of overpaying for earbuds that promise studio-quality
            sound but let your playlists fall flat? We get it — music lovers
            deserve better. That’s why the{" "}
            <strong>Soundcore by Anker P20i</strong> is making waves for all the
            right reasons.
          </p>

          <p className="text-gray-400">
            Whether you’re at the gym, on a walk, or just vibing at home, these
            earbuds deliver <strong>deep bass</strong>,{" "}
            <strong>crystal-clear vocals</strong>, and{" "}
            <strong>all-day comfort</strong> — without the hefty price tag.
          </p>

          <div className="bg-gray-800/60 p-6 rounded-2xl shadow-lg text-left mt-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
              🔥 Why You’ll Love Them
            </h2>
            <ul className="space-y-3 text-gray-300 list-disc pl-5">
              <li>🎶 <strong>10 mm drivers with big bass</strong>: Feel the beat in every track.</li>
              <li>🕒 <strong>30 hours long playtime</strong>: Music that lasts as long as you do.</li>
              <li>🛡️ <strong>Bluetooth 5.3 + IPX5 water-resistant</strong>: Reliable and durable.</li>
              <li>📱 <strong>22 preset EQs + app customization</strong>: Tune your sound for any mood.</li>
              <li>🗣️ <strong>AI dual mics</strong>: Clear calls anywhere.</li>
            </ul>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-yellow-400">
              💬 Loved by Music Lovers
            </h3>
            <p className="text-gray-300 mt-3 italic">
              “The sound quality blew me away for the price — these are my new
              go-to for everything.” — Verified Amazon Reviewer
            </p>
          </div>

          <div className="mt-12">
            <a
              href="https://amzn.to/4nFt5yB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-gray-900 font-semibold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition transform hover:scale-105"
            >
              🎧 Get Yours on Amazon Now – Hear the Difference!
            </a>
            <p className="text-sm text-gray-500 mt-2">
              *Affiliate link. We may earn a small commission at no extra cost
              to you.*
            </p>
          </div>

          <div className="overflow-x-auto mt-12">
            <table className="w-full border-collapse bg-gray-800/40 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-700 text-yellow-400 text-left">
                  <th className="py-3 px-4">Feature</th>
                  <th className="py-3 px-4">Typical Earbuds</th>
                  <th className="py-3 px-4">Soundcore P20i</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr><td className="py-2 px-4">Driver Size</td><td className="py-2 px-4">~8 mm</td><td className="py-2 px-4">10 mm Big Bass Drivers</td></tr>
                <tr><td className="py-2 px-4">Total Playtime</td><td className="py-2 px-4">~20 hrs</td><td className="py-2 px-4">30 hrs</td></tr>
                <tr><td className="py-2 px-4">EQ Options</td><td className="py-2 px-4">Few / None</td><td className="py-2 px-4">22 Presets + App Customization</td></tr>
                <tr><td className="py-2 px-4">Water Resistance</td><td className="py-2 px-4">IPX4</td><td className="py-2 px-4">IPX5 Certified</td></tr>
                <tr><td className="py-2 px-4">Price Point</td><td className="py-2 px-4">Low Cost / Compromises</td><td className="py-2 px-4">Affordable + No Compromise Quality</td></tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12">
            <p className="text-lg text-gray-300">
              Don’t miss out — your playlists deserve better sound and your ears
              deserve these earbuds.
            </p>
            <a
              href="https://amzn.to/4nFt5yB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-yellow-400 text-gray-900 font-bold py-3 px-10 rounded-full text-lg hover:bg-yellow-300 transition transform hover:scale-105"
            >
              🔊 Buy Soundcore P20i on Amazon
            </a>
          </div>
        </section>

        <footer className="mt-16 text-sm text-gray-500 text-center">
          <p>© {new Date().getFullYear()} Music Gear Finds. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
