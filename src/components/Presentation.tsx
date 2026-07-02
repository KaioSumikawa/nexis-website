import { useEffect, useRef, useState } from "react";
import { Expand, Shrink } from "lucide-react";

export default function Presentation() {
  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener(
        "fullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await containerRef.current?.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error("Erro ao alternar tela cheia:", err);
    }
  };

  return (
    <section
      className={`bg-[#FFFFFF] ${
        isFullscreen ? "p-0" : "py-24"
      } transition-all`}
    >
      <div
        className={`mx-auto ${
          isFullscreen ? "max-w-none px-0" : "max-w-[1700px] px-6"
        }`}
      >
        <div className="mb-4 flex justify-end">
          <button
            onClick={toggleFullscreen}
            className="rounded-lg p-2 text-zinc-700 transition hover:bg-zinc-200"
            title={isFullscreen ? "Sair da tela cheia" : "Tela cheia"}
            aria-label={isFullscreen ? "Sair da tela cheia" : "Tela cheia"}
          >
            {isFullscreen ? (
              <Shrink size={22} />
            ) : (
              <Expand size={22} />
            )}
          </button>
        </div>

        <div
          ref={containerRef}
          className={`overflow-hidden bg-white ${
            isFullscreen
              ? "h-screen w-screen rounded-none shadow-none"
              : "rounded-2xl shadow-2xl"
          }`}
        >
          <iframe
            src="/pdf/presentation.pdf"
            title="Nexis Presentation"
            className={`w-full border-0 ${
              isFullscreen ? "h-screen" : "h-[1000px]"
            }`}
          />
        </div>
      </div>
    </section>
  );
}