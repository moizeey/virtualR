import { communityLinks, platformLinks, resourcesLinks } from "../constants";

function Footer() {
  return (
    <div className="mt-20">
      <div className="border-t border-t-neutral-700 pb-8"></div>
      <div className="flex flex-wrap px-2 ">
        <div className="w-1/2 lg:w-1/3  ">
          <h2 className="font-semibold mb-4">Resources</h2>
          <ul>
            {resourcesLinks.map((resources, index) => (
              <li className="mb-2" key={index}>
                <a
                  className="font-extralight hover:underline transition duration-200 tracking-wide"
                  href={resources.href}
                >
                  {resources.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 lg:w-1/3  ">
          <h2 className="font-semibold mb-4">Platform</h2>
          <ul>
            {platformLinks.map((platform, index) => (
              <li className="mb-2" key={index}>
                <a
                  className="font-extralight hover:underline transition duration-200  tracking-wide"
                  href={platform.href}
                >
                  {platform.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 space-y-4">
          <h2 className="font-semibold mb-4">Community</h2>
          <ul>
            {communityLinks.map((item, index) => (
              <li className="mb-2" key={index}>
                <a
                  className="font-extralight hover:underline transition duration-200  tracking-wide"
                  href={item.href}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-t-neutral-700 pb-4"></div>
    </div>
  );
}
export default Footer;
