import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Cold Esthetic Reform - Centro Estético en Bogotá';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #079145 0%, #339EAB 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            maxWidth: '800px',
            padding: '40px',
          }}
        >
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              marginBottom: '20px',
              lineHeight: '1.1',
            }}
          >
            Cold Esthetic Reform
          </div>
          <div
            style={{
              fontSize: '32px',
              fontWeight: '400',
              color: '#F5FAF9',
              marginBottom: '30px',
              lineHeight: '1.2',
            }}
          >
            Centro Estético Líder en Bogotá
          </div>
          <div
            style={{
              fontSize: '24px',
              color: '#BACFCA',
              lineHeight: '1.3',
            }}
          >
            Tratamientos faciales, corporales y de rejuvenecimiento
            con tecnología de vanguardia
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}