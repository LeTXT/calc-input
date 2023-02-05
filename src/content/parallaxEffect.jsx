import React, { useRef, useState, useEffect } from 'react';

const Parallax = () => {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(ref.current.getBoundingClientRect().top / 5);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      style={{
        backgroundImage: 'url(your-background-image.jpg)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        transform: `translate3d(0, ${offset}px, 0)`
      }}
    />
  );
};

export default Parallax;

// Nesse exemplo, o componente Parallax mantém o estado de offset para rastrear o deslocamento da rolagem da página. O componente também usa o hook useEffect para monitorar a rolagem da página e atualizar o estado de offset com base na posição da rolagem. Por fim, a propriedade style da div é usada para aplicar o estilo CSS que cria o efeito parallax. O valor de offset é aplicado à propriedade transform para deslocar a imagem de fundo na tela.