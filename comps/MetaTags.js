import { NextSeo } from "next-seo";

const MetaTags = ({ title, desc, canonical, thumbnail }) => (
  <NextSeo
    title={`${title} - SmallWorld Venture`}
    description={desc}
    canonical={canonical}
    openGraph={{
      url: canonical,
      title: `${title} - SmallWorld Venture`,
      description: desc,
      images: [{ url: thumbnail }],
      site_name: "smallworldventure",
    }}
    twitter={{
      handle: "@handle",
      site: "@site",
      cardType: "summary_large_image",
    }}
  />
);
export default MetaTags;
