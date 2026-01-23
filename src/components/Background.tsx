// @ts-expect-error: LightRays component uses JSX that may not be properly typed
import LightRays from './LightRays'

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050608]">
      {/* light rays layer */}
      <div className="absolute inset-0 opacity-60">
        <div style={{ width: "1080px", height: "1080px", position: "relative" }}>
          <LightRays
            raysOrigin="top-left"
            raysColor="#929292"
            raysSpeed={0}
            lightSpread={0.3}
            rayLength={1.7}
            pulsating={false}
            fadeDistance={0.5}
            saturation={1}
            followMouse
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
          />
        </div>
      </div>

      {/* vignette + subtle top glow */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_900px_at_20%_10%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(800px_700px_at_70%_80%,rgba(255,255,255,0.05),transparent_65%)]" />

      {/* vignette edge darkener */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.65)_85%,rgba(0,0,0,0.95)_100%)]" />
    </div>
  );
}
