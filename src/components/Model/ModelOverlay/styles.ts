import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100vh;
  margin-top: -100vh;
  z-index: 999;
`;
