import { CinematicPlayer } from "@/components/motion/CinematicPlayer";
import { CRAFT_SHOWCASE_POSTER, CRAFT_SHOWCASE_VIDEO } from "@/lib/motion";

export function VideoShowcase() {
  return (
    <CinematicPlayer
      videoSrc={CRAFT_SHOWCASE_VIDEO}
      poster={CRAFT_SHOWCASE_POSTER}
      playLabel="Play Craft Showcase"
      playSublabel="Culinary Precision"
      ariaLabel="Play craft showcase video"
    />
  );
}
