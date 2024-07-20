"use client";
import Image from "next/image";

export default function Organizations() {
  return (
    <section className="py-2 container px-4 mx-auto">
      <p className="text-xl text-center mb-4">
        Trusted at organizations around the world
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 items-center">
        <Image
          className="w-auto h-auto"
          src="/images/customers/star-tribune2.png"
          alt="Minneapolis Star Tribune"
          title="Minneapolis Star Tribune"
          width={109}
          height={60}
        />
        <Image
          className="w-auto h-auto"
          src="/images/customers/360giving.png"
          alt="360Giving"
          title="360Giving"
          width={109}
          height={67}
        />
        <Image
          className="w-auto h-auto"
          src="/images/customers/vca-logo.png"
          alt="VCA Inc"
          title="VCA Inc"
          width={109}
          height={77}
        />
        <Image
          className="w-auto h-auto"
          src="/images/customers/open-secrets.png"
          alt="Open Secrets"
          title="Open Secrets"
          width={109}
          height={57}
        />
        <Image
          className="w-auto h-auto"
          src="/images/customers/entytle.png"
          alt="Entytle Aftermarket engagement platform"
          title="Entytle Aftermarket engagement platform"
          width={109}
          height={55}
        />
        <Image
          className="w-auto h-auto"
          src="/images/customers/SCCMO-logo.jpg"
          alt="St Charles County, MO"
          title="St Charles County, MO"
          width={109}
          height={60}
        />
      </div>
    </section>
  );
}
