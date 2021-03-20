import Content from "../Content";
function Works() {
  const content = [
    {
      id: 1,
      title: ["STARTUP COMMUNITY"],
      des:
        "Since 2011, SmallWorld has remained focused on their vision of building a vibrant startup community in Phnom Penh through partnering with other area workspace groups to offer greater value and accessibility to early stage startup teams and entrepreneurs.",
      img: "/images/startup-com.png",
      desOrder: 1,
      imgOrder: 2,
    },
    {
      id: 2,
      title: ["SEED EQUITY INVESTMETNS"],
      des:
        "Seed Equity Investments are used to form equity investment partnerships which serve as the foundation for building a strong startup community. During our formative years we&aposve gained insightful experience by working with dozens of innovative startups and we now provide Seed Equity Investments for five new startup teams each year. With a funding range between 5,000 to 25,000 USD per team, our Seed Equity Investments are not loans, but equity based investments. Local co-investor equity participation is encouraged and generated through seminars and presentations within the greater Phnom Penh business community.",
      img: "/images/investment.png",
      imgOrder: 1,
      desOrder: 2,
    },
    {
      id: 3,
      title: ["VENTURE BUILDING", "RESEARCH AND DEVELOPMENT"],
      des: [
        "Our branded KOOMPI system is one among several exciting ventures in our portfolio. We&aposve produced a practical, affordable, and effective entry-level notebook designed for future engineers, inventors, organizers, developers, and freethinkers. The KOOMPI notebook computer is a slim, elegant, high-end, portable, personal productivity environment designed to perform well at work, school, or with managing any small business. Powering the KOOMPI notebook is KOSMOS, which is our own version of the popular open-source Linux operating system, with KramaOS specifically tailored for the Cambodian marketplace.",
        "The cornerstone of SmallWorld Ventures is to promote Venture Building with a key focus on Research and Development (R&D). We&aposre engaged in both hardware and software R&D projects related to decentralized peer-to-peer applications, tokenization, robotics, artificial intelligence, and automation. Beyond hardware and software, we&aposre building an all natural outdoor learning, living, work, and play environment using industrial hemp and bamboo design as the fundamental basis for production.",
      ],
      img: "/images/venture-building.png",
      imgOrder: 2,
      desOrder: 1,
    },
    {
      id: 4,
      title: ["ENVIRONMENTAL STEWARDSHIP"],
      des:
        "Environmental stewardship means the responsible use and protection of our natural resources through conservation and sustainable practice. We strive to be aware and knowledgeable of the natural world around us and to do as little as possible to negatively impact that world. VitaminAir is our planned ecovillage project located on 100+ hectares of rural land 100 kilometers east of Phnom Penh beneath Phnom Pich Nil near the base of the Dâmrei Mountains. At our VitaminAir project and the surrounding protected areas, we are directly engaged in small scale agriculture and reforestation, along with nature and wildlife preservation programs. In addition, we are creating a hands-on learning, working and living environment with an appropriate balance among economic opportunity, environmental protection, and sustainable living practices.",
      img: "/images/reforest.png",
      imgOrder: 1,
      desOrder: 2,
    },
  ];

  return (
    <div className="container">
      {content.map((res, index) => {
        return <Content content={content[index]} />;
      })}
    </div>
  );
}

export default Works;
