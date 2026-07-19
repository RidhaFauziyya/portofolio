interface VideoSectionProps {
  section: {
    title: string;
    youtube: string;
  };
}

function getYoutubeEmbed(url: string) {
  let videoId = "";

  if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1].split("?")[0];
  } else if (url.includes("watch?v=")) {
    videoId = url.split("watch?v=")[1].split("&")[0];
  } else if (url.includes("/embed/")) {
    return url;
  }

  return `https://www.youtube.com/embed/${videoId}`;
}

export default function VideoSection({ section }: VideoSectionProps) {
  return (
    <section className="mt-16">
      <h2 className="mb-6 text-2xl font-semibold text-white">
        {section.title}
      </h2>

      <div className="overflow-hidden w-9/12 rounded-2xl border border-white/10">
        <iframe
          src={getYoutubeEmbed(section.youtube)}
          title="Project Demo"
          className="aspect-video w-full rounded-2xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
}
