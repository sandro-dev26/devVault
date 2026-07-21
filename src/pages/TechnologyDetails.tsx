import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getDevData from "../fetch";
import NotFound from "./NotFound";
import type Data from "../types/types";

function TecnologyDetails() {
  const [data, setData] = useState<null | Data[]>(null);
  useEffect(() => {
    async function storeData() {
      const response = await getDevData();
      console.log(response);
      setData(response);
    }
    storeData();
  }, []);

  const { sectionId, id } = useParams();

  const item = data?.find((item) => item.id === id && item.type === sectionId);

  if (!item) {
    return <NotFound />;
  }

  return (
    <main className="flex flex-col">
      {data ? (
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold">{item.name}</h1>
          <img
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.svg}/${item.svg}-original.svg`}
            alt={item.name}
            className="w-16 h-16 rounded-sm transition-all duration-200 hover:scale-120"
            onError={(e) => {
              const target = e.currentTarget;

              if (!target.dataset.triedFallback) {
                target.dataset.triedFallback = "true";
                target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.svg}/${item.svg}-original-wordmark.svg`;
              } else {
                target.src =
                  "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/code-xml.svg";
                target.classList.add("invert-100");
              }
            }}
          />
          <div className="flex flex-col gap-2 mt-2">
            <p className="text-md font-light">
              <span className="font-normal">Description: </span>
              {item.description}
            </p>
            <p className="text-md font-light">
              <span className="font-normal">Runs In/On: </span>
              {item.environment}
            </p>
            <p className="text-md font-light">
              <span className="font-normal">File: </span>
              {item.type === "ide" ? "IDE" : ` example.${item.file}`}
            </p>
            <p className="text-md font-light">
              <span className="font-normal">Is: </span>
              {item.type.charAt(0).toUpperCase() +
                item.type.slice(1).toLowerCase()}
            </p>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </main>
  );
}

export default TecnologyDetails;
