import {
  AppWindowMac,
  Compass,
  FolderOpen,
  Gamepad2,
  Music4,
  Route,
  ShieldCheck,
  Sparkles,
  UserRound,
  UsersRound,
  Zap,
} from 'lucide-react';

const fallbackIcons = {
  finder: FolderOpen,
  safari: Compass,
  profile: UserRound,
  retrotrip: Gamepad2,
  powpow: Zap,
  thinkdifferentapp: Sparkles,
  rotta: Route,
  ladob: Music4,
  'opera-es-gaeco': ShieldCheck,
  'comunidade-universitaria': UsersRound,
  excedentes: AppWindowMac,
};

export default function AppIcon({
  src,
  label,
  iconKey,
  className = '',
  title,
  accent = '#7c8cff',
  accentSoft = '#d7ddff',
}) {
  const FallbackIcon = fallbackIcons[iconKey] ?? AppWindowMac;

  return (
    <span
      className={`app-icon ${src ? 'app-icon--has-image' : ''} ${className}`.trim()}
      style={{
        '--icon-accent': accent,
        '--icon-accent-soft': accentSoft,
      }}
      title={title ?? label}
      aria-hidden="true"
    >
      {src ? (
        <img src={src} alt="" className="app-icon__image" />
      ) : (
        <span className="app-icon__fallback">
          <FallbackIcon size={24} strokeWidth={2.2} />
        </span>
      )}
    </span>
  );
}
