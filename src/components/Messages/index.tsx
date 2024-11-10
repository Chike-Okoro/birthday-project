import black from "/black-dress-winners.jpg";
import red from "/red-image.jpg";
import client from "/client-profile-pic.jpg";
import hero from "/hero-image.jpg";
import gold from "/client-gold-dress.jpg";
import green from "/green-dress-client.jpg";
import ImageSlider from "../../utils/ImageSlider";

const Index = () => {
  const imageList = [black, red, client, hero, gold, green];
  return (
    <div className="p-8">
      <p className="text-center mb-4 font-bold text-[30px]">Amazing you ❤️</p>
      <div className="flex lg:justify-between lg:px-5 flex-col lg:flex-row">
        <div className="lg:w-[50%] w-full mb-9 lg:mb-0">
            <ImageSlider images={imageList} />
        </div>
        <div className="lg:w-[40%] w-full">
          <p className="font-semibolds text-[20px] text-justify">
            Nne❤️, Today, is a very special day, the world feels like it's
            enveloped in celebration, as if the very essence of joy is echoing
            the birth of a truly remarkable soul. <br /> <br />As I try to capture what you
            mean to me in mere words, I’m reminded that even the most eloquent
            phrases fall short when describing a partner as extraordinary as
            you. <br /> <br /> From the moment we connected, your presence became a beacon in
            my life. Your energy, unmatched, magnetic, and fiercely contagious;
            has a way of turning even the simplest moments into something
            unforgettable. <br /> <br /> It’s a light that draws me in, again and again, and
            leaves me endlessly grateful for every conversation we’ve had, every
            vulnerability we’ve shared, every laugh that has echoed between us,
            every moment your voice has calmed my restless mind. <br /> You’ve carved
            your own space in my thoughts, and it’s one I cherish with every
            beat of my heart. The sound of your voice, filled with such finesse
            and your thoughtful choice of words, is more than just a comfort;
            it’s a sanctuary where I find peace, no matter what storms may rage. <br /> <br />
            You just have this rare, magical gift of calming me, grounding me in
            a way that no one else can. It’s as if you carry the ability to turn
            the chaos of life into a serene melody, one that I could listen to
            forever. <br /> <br /> But beyond that, it’s the depth of your spirit that leaves
            me in awe. You are strong, intelligent, compassionate, and
            effortlessly captivating. Every time I see or hear from you, I find
            yet another reason to reach out, to linger a little longer in the
            space we've created together. <br /> <br /> Your words, your laughter, and your
            presence have been an anchor, a steady reminder that I am seen,
            valued, and loved in the purest way. <br /> <br /> These past 10 months have been
            a journey I would live a thousand times over, simply because it’s
            been with you. The sacrifices, the long conversations, the shared
            dreams and silent understandings, the tough miscommunications (or
            beef😂)—all of it has built something I hold close, something
            sacred. I value you more than words can touch, respect you for
            everything you are and everything you stand for, and I cherish you,
            deeply and wholly. <br /> <br /> So today, as we celebrate the day you graced this
            world, I want you to know that you are so much more than just
            someone I care about. You are my peace, my inspiration, the voice
            that lifts me when I need it most. <br /> <br /> Thank you Immaculata Favour Adora
            Echie, for filling my life with your light, for being a partner, a
            confidante, and the most beautiful soul I know. <br /> <br /> Happy birthday, my
            love. May this day, and every day to come, be as magnificent as the
            gift you are to me. ❤️With all that I am, I love you❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
