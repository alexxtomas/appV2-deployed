import { DotPulse } from '@uiball/loaders'
import { useTheme } from 'styled-components'
export default function Loading() {
  const theme = useTheme()
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '400px'
      }}
    >
      <DotPulse size={120} speed={1.3} color={theme.colors.main.text} />
    </div>
  )
}
