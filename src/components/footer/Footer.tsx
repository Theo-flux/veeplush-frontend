import { Container } from "../containers";
import { data } from "./data";

function Footer() {
  return (
    <footer className="py-16 bg-black text-white">
      <Container>
        <div className="flex justify-between items-start flex-wrap gap-4">
          {data.map((datum, index) => {
            const { section, items } = datum;

            return (
              <div key={index}>
                <h3 className="font-bold tracking-[1.63px]">{section}</h3>
                <div className="flex flex-col mt-5">
                  {items.map((item, idx) => {
                    const { path, name } = item;

                    return (
                      <a key={idx} href={path} className="text-grey tracking-[1.089px] mb-3 hover:text-purple hover:underline transition-all duration-300">
                        {name}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="">
            <h3 className="font-bold tracking-[1.63px]">Newsletter</h3>
            <div className="mt-6 flex flex-col md:flex-row">
              <input
                type="email"
                name="newsletter"
                placeholder="Email address"
                className="bg-transparent ring-1 ring-grey p-1 placeholder:text-grey w-[150px] foucs:ring-purple"
              />
              <button className="bg-white text-veeblack p-1 ring-1 ring-white font-bold mt-2 md:mt-0 md:ml-2">Subscribe</button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
