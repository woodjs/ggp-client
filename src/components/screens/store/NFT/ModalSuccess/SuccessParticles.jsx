import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

function SuccessParticles({
  particlesCount = 50,
  duration = 1000,
  delay = 500,
  scaleDiapason = [2, 3],
  rotateDiapason = [0, 360],
  offsetDiapasonY = [20, 30],
  offsetDiapasonX = [-10, 10],
  offsetDiapasonScale = [0, 0],
  isHiddingAfterAnimation = true,
  colors = [
    'red.400',
    'green.400',
    'blue.400',
    'yellow.400',
    'orange.400',
    'purple.400',
  ],
}) {
  const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const generateParticles = () =>
    [...Array(particlesCount)].map((_, i) => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const rotate = getRandomInt(
        rotateDiapason[0] || 0,
        rotateDiapason[1] || 360
      );
      const scale =
        getRandomInt(scaleDiapason[0] || 1, scaleDiapason[1] || 2) * 0.5;

      return {
        id: i,
        x,
        y,
        rotate,
        scale,
        color: colors[getRandomInt(0, colors.length - 1)],
      };
    });

  const [particles, setParticles] = useState(generateParticles());
  const [opacity, setOpacity] = useState(0);
  const [isAnimationEnded, setIsAnimationEnded] = useState(false);
  const animateParticles = () => {
    const newParticles = particles.map((particle) => ({
      ...particle,
      //   x: particle.x + Math.random() * 2 - 1,
      y: particle.y + getRandomInt(...offsetDiapasonY),
      x: particle.x + getRandomInt(...offsetDiapasonX),
      rotate: particle.rotate + getRandomInt(180, 360 * 3),
      scale: particle.scale + getRandomInt(...offsetDiapasonScale),
    }));
    setParticles(newParticles);
  };
  useEffect(() => {
    setTimeout(() => setOpacity(1), delay);
    setTimeout(() => animateParticles(), delay);

    setTimeout(() => {
      if (isHiddingAfterAnimation) {
        setOpacity(0);
      }
    }, delay + duration);
    setTimeout(() => {
      setIsAnimationEnded(true);
    }, delay + duration + 500);
  }, []);
  // const canvasRef = useRef(null);
  if (isAnimationEnded && isHiddingAfterAnimation) {
    return null;
  }
  return (
    <Box
      // ref={canvasRef}
      // as="canvas"
      position="absolute"
      top="0"
      left="0"
      w="100%"
      maxW="100vw"
      h="100%"
      maxH="100vh"
      transitionDuration="0.5s"
      css={{
        opacity,
      }}
    >
      {particles.map(({ id, x, y, scale, rotate, color }) => (
        <Box
          // eslint-disable-next-line react/no-array-index-key
          key={id}
          position="absolute"
          transitionTimingFunction="cubic-bezier(0, 0.35, 0.25, 1)"
          transitionDuration={`${duration + delay * 2}ms`}
          top={`${y}%`}
          left={`${x}%`}
          bg={color}
          w="10px"
          h="4px"
          style={{
            transform: `rotate(${rotate}deg) scale(${scale})`,
          }}
        />
      ))}
    </Box>
  );
}

export default SuccessParticles;
