import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <motion.div
    style={{ display: 'inline-block'}}
    key={useColorModeValue('light', 'dark')}
    initial={{y: -20, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    exit={{y: 20, opacity: 0}}
    transition={{duration: 0.2}}
    >
      <AnimatePresence exitBeforeEnter initial={false}>
        <IconButton
          aria-label="Toggle theme"
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        >
        </IconButton>
      </AnimatePresence>
    </motion.div>

  )
}

export default ThemeToggleButton
