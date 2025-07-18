import MyHome from "./components/MyHome";

export default function Home() {
  return (
    <>
      <div className="py-15 px-10 overflow-hidden">
        <MyHome/>
      </div>
      
    </>
  );
}

export const metadata = {
  title: "Vent",
};
