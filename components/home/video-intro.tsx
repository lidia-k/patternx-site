"use client";

export default function VideoIntro() {
  return (
    <section className="py-10 container px-4 mx-auto text-xl">
      <p className="mb-4">
        <b>PatternX</b> is a powerful tool that learns the best way to find
        similar rows in your data. Using cutting-edge research in machine
        learning we quickly and accurately identify matches in your Excel
        spreadsheet or database—saving you time and money.
      </p>
      <p className="mb-4">
        <iframe
          className="mx-auto w-full h-96 rounded-lg sm:h-[32rem] shadow-xl"
          src="https://www.youtube.com/embed/KaLxCiilHns"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </p>
    </section>
  );
}
