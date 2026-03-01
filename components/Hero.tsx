import { Bounded } from "./Bounded";
import Button from "./Button";
import { TextSplitter } from "./TextSplitter";

const Hero = () => {
  return (
    <Bounded>
      <div className="grid">
        <div className="grid text-center">
          <TextSplitter
            text="Fresh Bubbly"
            className="hero-header mt-10 lg:text-[13rem] text-7xl font-black uppercase leading-[.8] text-orange-600 md:text-[9rem]"
          />

          <h2 className="hero-subheading mt-12 text-5xl font-semibold lg:text-6xl">
            Soda Organic
          </h2>
          <p className="hero-body mt-2 text-2xl font-normal">
            3-5g sugar, 9g fiber, 5 delicious flavors
          </p>
          <Button
            buttonText="Shop Now"
            className="hero-button duration-150 rounded-xl bg-secondary mt-4 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors hover:bg-orange-700 cursor-pointer md:text-2xl"
          />
        </div>

        <div className="grid text-side relative z-80 h-screen items-center gap-4 md:grid-cols-2">
          <div className="w-full md:hidden">image</div>

          <div>
            <div className="text-side-heading text-balance text-6xl font-black text-accent lg:text-8xl uppercase">
              <TextSplitter text="Try all the flavors" />
            </div>
            <div className="text-side-body mt-4 max-w-xl text-balance text-xl font-normal">
              <p>
                Our soda is packed with prebiotics and 1 billion probiotics,
                giving your gut the love it deserves. Say goodbye to bloating
                and hello to a happy, healthy digestive system with every sip.
              </p>
            </div>
          </div>

          <div>Gut-Friendly Goodness</div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
