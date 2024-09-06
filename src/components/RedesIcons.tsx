import type { SocialMedia } from "../interfaces/dbData";

interface RedesSocialProps {
  redesSociales: SocialMedia[] | undefined;
}

export const RedesIcons: React.FC<RedesSocialProps> = ({ redesSociales }) => {
  return (
    <div className="flex items-center gap-3">
      {redesSociales &&
        redesSociales.map((redSocial) => (
          <a
            key={redSocial._id}
            href={redSocial.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg text-white text-xl transition-all duration-300 hover:-translate-y-1.5 hover:text-btnHover bg-primary w-10 h-10 flex justify-center items-center"
            aria-label={`Visitar nuestro perfil en ${redSocial.name}`}
          >
            <i className={`fab fa-${redSocial.icon}`}></i>
          </a>
        ))}
    </div>
  );
};
