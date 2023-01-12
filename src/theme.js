import { createTheme } from '@mui/material/styles'
import { purple } from '@mui/material/colors'

const theme = createTheme({
    palette: {
      primary: {
        main: purple.A700,
    },
    secondary: {
        main: '#ff6666',
    },
  },
})

export default theme;