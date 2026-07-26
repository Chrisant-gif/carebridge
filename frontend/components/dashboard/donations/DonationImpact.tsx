"use client";

import Image from "next/image";

const impactItems = [
  {
    image: "/images/donations/physiotherapy.jpg",
    title: "Medical Care",
    description:
      "Your donations help children receive physiotherapy, specialist treatment, medication and regular hospital care.",
  },
  {
    image: "/images/donations/home-visit.jpg",
    title: "Home Support",
    description:
      "Our caregivers visit families in their homes, providing encouragement, monitoring progress and delivering compassionate care.",
  },
  {
    image: "/images/donations/supplies.jpg",
    title: "Essential Supplies",
    description:
      "Support the distribution of diapers, nutrition, hygiene products and other daily necessities for children and families.",
  },
  {
    image: "/images/donations/tree-planting.jpg",
    title: "Community Outreach",
    description:
      "Help us build an inclusive community through environmental conservation, awareness campaigns and volunteer outreach.",
  },
];

export default function DonationImpact() {
  return (
    <section className="mb-14">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Where Your Donation Goes
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-500">
          Every contribution creates meaningful change for children living with
          disabilities and strengthens families across our communities.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {impactItems.map((item) => (
          <div
            key={item.title}
            className="overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative h-60 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-500 hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}