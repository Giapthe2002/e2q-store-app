import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "io1rhm8p",
  dataset: "production",
  apiVersion: "2025-11-05",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
