"use client";

export default function VideoIntro() {
  return (
    <section className="py-10 container px-4 mx-auto text-xl">
      <p className="mb-4">
        <b>PatternX</b> offers an advanced data de-duplication service that identifies
        duplicate entries in your datasets. Leveraging state-of-the-art machine learning techniques, 
        we efficiently and accurately detect matches in your Excel spreadsheet or databases, 
        helping you save valueable time and resources. 
      </p>
      {/*
      <p className="mb-4">
        <iframe
          className="mx-auto w-full h-96 rounded-lg sm:h-[32rem] shadow-xl"
          src="https://www.youtube.com/embed/KaLxCiilHns"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </p>
      */}
    </section>
  );
}
