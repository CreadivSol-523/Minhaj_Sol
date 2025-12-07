import { useState } from "react";

const CaseStudies = () => {
  const tabs = [
    "Example 1",
    "Example 2",
    "Example 3",
    "Example 4",
    "Example 5",
  ];

  const [selectedTab, setSelectedTabs] = useState("");
  return (
    <section className=" bg-[#f7f7f7] 2xl:px-80 lg:px-40 px-5 flex items-center flex-col gap-6 justify-center lg:py-14 md:py-10 py-7">
      <div className="flex flex-col gap-10">
        <div className="gap-4 flex flex-col">
          <h3 className="text-headingColor ">Case Studies</h3>
          <p className="text-textColor">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            purus feugiat, molestie ipsum et, consequat nibh.
          </p>
        </div>
        <div className="grid grid-cols-5 rounded-md">
          {tabs.map((item, index) => (
            <div key={`tabs${index}`} className={`px-8 py-4`}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
