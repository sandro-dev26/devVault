import { useNavigate } from "react-router-dom";
import type { TechnologySectionProps } from "../types/types";

function TecnologySection({ title, type, data }: TechnologySectionProps) {
  const navigate = useNavigate();
  return (
    <>
      <div className=" mt-4 p-4 bg-slate-900 rounded-2xl">
        <h3
          className="hover:text-neutral-400 text-lg"
          onClick={() => navigate(`/${type}`)}
        >
          {title}
        </h3>
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {data
            ? data
                ?.filter((item) => item.type === type)
                .slice(0, 5)
                .map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-2 p-4 rounded-lg bg-slate-800 text-slate-50 hover:bg-slate-700"
                    onClick={() => navigate(`/${type}/${item.id}`)}
                  >
                    <h4>{item.name}</h4>
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
                        }
                      }}
                    />
                  </div>
                ))
            : "Loading..."}

          <div
            key="more-lang"
            className="flex flex-col justify-end gap-2 p-4 rounded-lg bg-slate-800 text-slate-50 hover:bg-slate-700"
            onClick={() => navigate(`/${type}`)}
          >
            <h4 className="text-2xl hover:text-neutral-300">More...</h4>
          </div>
        </section>
      </div>
    </>
  );
}

export default TecnologySection;
