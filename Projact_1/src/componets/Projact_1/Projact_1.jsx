import img1 from "../../assets/4.jpg";
const cardDetails = [
  {
    id: 1,
    title: "TrailType",
    description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    img: img1,
  },
  {
    id: 2,
    title: "The Spark Sessions",
    description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    img: img1,
  },
  {
    id: 3,
    title: "Into the Wild",
    description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    img: img1,
  },
];
const posts = [
  {
    id: 1,
    date: "Jul 2025",
    description: "How I built my Framer template empire",
  },
  { id: 2, date: "Jun 2025", description: "My journey from $0 to $10k MRR" },
  { id: 3, date: "Jun 2025", description: "Is vibe coding here to stay? " },
  { id: 4, date: "May 2025", description: "Don't complain, create!" },
];

export default function Projact_1() {
  return (
    <div>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
        {" "}
        {/* Hero */}{" "}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
          {" "}
          Luke Williams{" "}
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 my-4">
          <h4 className="text-gray-700">Founder - Matrix Designs</h4>
          <h5>📍 New York</h5>
        </div>
        <div className="mt-8 max-w-4xl">
          <p className="mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium exercitationem, id repudiandae voluptates rerum tempora
            nam ex sapiente ad explicabo, corporis libero est asperiores
            similique odit quaerat culpa ratione quas eligendi dolorum
            aspernatur numquam.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus,
            et! Architecto atque maxime tempora omnis tempore eum molestias
            obcaecati, velit perferendis laborum modi odio cum.
          </p>
        </div>
        <div className="mt-16 sm:mt-20">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-medium">Latest Projects</h3>
            <p className="text-sm sm:text-base cursor-pointer hover:underline">
              View all
            </p>
          </div>
          <div className="border-t mt-5 border-gray-300"></div>
          {/* card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
            {cardDetails.map((card) => {
              return (
                <div>
                  <img
                    src={card.img}
                    className="w-full  object-cover rounded-md"
                  />

                  <div className="mt-3">
                    <h2 className="font-medium text-lg">{card.title}</h2>
                    <p className="text-gray-600 mt-1">{card.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* posts */}
          <div className="mt-16 sm:mt-20">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-medium">Latest Posts</h3>
              <p className="text-sm sm:text-base cursor-pointer hover:underline">
                View all
              </p>
            </div>
            <div className="border-t mt-5 py-5  border-gray-300"></div>
            {posts.map((post) => {
              return (
                <div className="flex items-center gap-10 py-3 pb-5 border-b-2 border-gray-100">
                  <p className="text-gray-400">{post.date}</p>
                  <h2>{post.description}</h2>
                </div>
              );
            })}
          </div>
          {/* about */}
          <div className="bg-gray-100 border-gray-300 border rounded-lg px-5 py-10 mt-30 flex gap-10">
            <img src={img1} alt="" className="rounded-lg w-400" />
            <div>
              <h1 className="text-5xl font-medium">
                Subscribe to my Newsletter
              </h1>
              <div className="flex gap-5 mt-10">
                <input
                  type="text"
                  className="w-50 border border-gray-400 rounded-md"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Subscribe
                </button>
              </div>
              <p>
                Sign up to stay updated about my latest work and adventures. No
                Spam, No BS, Promise !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
