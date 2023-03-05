import { Language } from 'prism-react-renderer'
import { Box, BoxProps } from '@chakra-ui/react'

import prismTheme from 'prism-react-renderer/themes/shadesOfPurple'
import { Highlights } from 'components/highlights'

interface CodePanelProps extends BoxProps {
  children: string
  language: Language
}

const CodePanel: React.FC<CodePanelProps> = ({
  children = '',
  language = 'typescript',
  ...props
}) => {
  const theme = {
    ...prismTheme,
    plain: {
      backgroundColor: 'codeBackground',
      color: prismTheme.plain.color,
    },
  }

  return (
    <Box {...props} overflow="auto">
      <Highlights theme={theme} codeString={children} language={language} />
    </Box>
  )
}

export default CodePanel