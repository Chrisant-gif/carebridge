"use client";

import Image from "next/image";
import PrimaryButton from "../PrimaryButton";

const stories = [
  {
    title: "Helping Children Regain Independence",
    image: "/images/donations/physiotherapy.jpg",
    badge: "Medical Care",
    description:
      "Regular physiotherapy helps children improve mobility, build confidence and achieve greater independence. Your support makes these life-changing sessions possible.",
  },
  {
    title: "Standing Beside Families",
    image: "/images/donations/home-visit.jpg",
    badge: "Home Visits",
    description:
      "Our volunteers regularly visit families, providing encouragement, diapers, essential supplies and compassionate support directly in their homes.",
  },
  {
    title: "Building Stronger Communities",
    image: "/images/donations/tree-planting.jpg",
    badge: "Community Outreach",
    description:
      "Community activities like tree planting promote environmental stewardship while creating awareness and inclusion for children living with disabilities.",
  },
];

export default function ImpactStories() {
  return (
    <section className="mb-16">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold">
          The Impact of Your Giving
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-500">
          Every donation helps transform lives through healthcare,
          home support and community outreach.
        </p>
      </div>

      <div className="space-y-12">
        {stories.map((story, index) => (
          <div
            key={story.title}
            className={`grid items-center gap-8 lg:grid-cols-2 ${
              index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative h-96 overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div>
              <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                {story.badge}
              </span>

              <h3 className="mt-6 text-3xl font-bold">
                {story.title}
              </h3>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                {story.description}
              </p>

              <PrimaryButton className="mt-8">
                Support This Program
              </PrimaryButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}