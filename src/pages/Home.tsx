import { useEffect, useState } from "react";
import TecnologySection from "../components/TecnologySection";
import getDevData from "../fetch";
import type Data from "../types/types";

function Home() {
  const [data, setData] = useState<null | Data[]>(null);
  useEffect(() => {
    async function storeData() {
      const response = await getDevData();
      console.log(response);
      setData(response);
    }
    storeData();
  }, []);
  return (
    <main>
      <h1 className="flex flex-row items-center gap-2 text-4xl mb-8">
        <span>
          <img src="/favicon.svg" className="w-12 h-12" />
        </span>
        DevVault
      </h1>

      <h2 className="text-2xl">Coding Tecnologies</h2>

      <TecnologySection title="Languages" type="language" data={data} />
      <TecnologySection title="Frameworks" type="framework" data={data} />
      <TecnologySection title="Libraries" type="library" data={data} />
      <TecnologySection title="Tools" type="tool" data={data} />
      <TecnologySection title="Databases" type="database" data={data} />
      <TecnologySection title="Cloud Services" type="cloud" data={data} />
      <TecnologySection title="IDEs" type="ide" data={data} />
    </main>
  );
}

export default Home;
