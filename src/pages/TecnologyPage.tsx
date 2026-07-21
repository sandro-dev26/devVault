import { useEffect, useState } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import getDevData from "../fetch";
import type Data from "../types/types";

function TecnologyPage() {
  const navigate = useNavigate();
  const [data, setData] = useState<null | Data[]>(null);
  const { sectionId } = useParams();

  useEffect(() => {
    async function storeData() {
      const response = await getDevData();
      console.log(response);
      setData(response);
    }
    storeData();
  }, []);

  if (!data) {
    return <main className="flex flex-col gap-8">Loading...</main>;
  }

  const filteredData = data.filter((item) => item.type === sectionId);

  if (filteredData.length === 0) {
    return <Navigate to="/404" replace />;
  }

  return (
    <main className="flex flex-col gap-8">
      <h2 className="text-2xl font-semibold">{sectionId}</h2>
      <div className="flex flex-col gap-4">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-2 p-4 rounded-lg bg-slate-800 text-slate-50 hover:bg-slate-700"
            onClick={() => navigate(`/${sectionId}/${item.id}`)}
          >
            <h3 className="text-xl">{item.name}</h3>
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.svg}/${item.svg}-original.svg`}
              alt={item.name}
              className="w-8 h-8 rounded-sm transition-all duration-200 hover:scale-120"
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
            <p className="text-sm">{item.short_description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default TecnologyPage;
