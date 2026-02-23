import { Bounded } from "./Bounded";

const Hero = () => {
  return (
    <Bounded>
      <div className="grid">
        <div className="grid h-screen place-items-center">
          <div>Fresh Bubbly</div>
          <div>Soda Organic</div>
          <div>3-5g sugar, 9g fiber, 5 delicious flavors</div>
          <div>
            <button>Shop Now</button>
          </div>
        </div>

        <div className="grid text-side relative z-80 h-screen items-center gap-4 md:grid-cols-2">
          <div>image</div>
          <div>Try all the flavors</div>
          <div>Gut-Friendly Goodness</div>
          <div>
            <p>
              Our soda is packed with prebiotics and 1 billion probiotics,
              giving your gut the love it deserves. Say goodbye to bloating and
              hello to a happy, healthy digestive system with every sip.
            </p>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
