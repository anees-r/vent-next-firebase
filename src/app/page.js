import Link from "next/link";
import LandingButton from "./components/common/LandingButton";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="py-15 px-10 overflow-hidden h-screen flex flex-col md:flex-row md:justify-center">
        <div className="h-full w-full md:w-[50%] flex flex-col justify-center items-center md:items-start gap-5 md:p-10">
          <div className="flex flex-col">
            <h4 className="text-2xl text-center md:text-start md:text-3xl">
              Welcome to
            </h4>
            <h1 className="text-8xl font-bold text-purple-600 text-center md:text-start md:text-9xl">
              vent.
            </h1>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-md text-center md:text-start md:text-xl">
              A safe, private space to unburden your thoughts.
            </p>
            <p className="text-md text-center md:text-start md:text-xl">
              Vent your stress, reflect through journaling, or make anonymous
              confessions—just for you, or to share with others anonymously.
            </p>
            <p className="text-md text-center md:text-start md:text-xl">
              No judgment. No names. Just clarity.
            </p>
          </div>
          <div>
            <LandingButton />
          </div>
        </div>
        <div className="h-full w-[50%] hidden md:flex justify-center items-center">
          <div className="h-[90%] w-[90%] bg-white rounded-2xl overflow-hidden relative shadow-md">
            <Image
              layout="fill"
              alt="scribble"
              src={"/assets/images/scribble.svg"}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export const metadata = {
  title: "Vent",
};
