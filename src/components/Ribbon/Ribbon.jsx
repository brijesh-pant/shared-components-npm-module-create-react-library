import PropTypes from 'prop-types'
import React from 'react'
// import clsx from 'clsx'
// import { capitalize } from 'lodash'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

// const useStyles = makeStyles((theme) => ({
//   ribbon: {
//     borderRadius: theme.spacing(0, 0, 0.25, 0.25),
//     color: theme.palette.secondary.contrastText,
//     fontSize: theme.typography.pxToRem(10),
//     fontWeight: theme.typography.fontWeightBold,
//     padding: theme.spacing(0, 1),
//     position: 'absolute',
//     top: '50%'
//   },
//   ribbonAppearanceGrey900: {
//     backgroundColor: theme.palette.grey[900]
//   },
//   ribbonAppearancePrimary: {
//     backgroundColor: theme.palette.primary.main
//   },
//   ribbonAppearanceSecondary: {
//     backgroundColor: theme.palette.secondary.main
//   },
//   root: {
//     alignItems: 'center',
//     borderRadius: theme.spacing(0.25, 0.25, 0, 0),
//     borderTop: `${theme.spacing(0.25)}px solid`,
//     display: 'flex',
//     justifyContent: 'center',
//     position: 'relative'
//   },
//   rootAppearanceGrey900: {
//     borderColor: theme.palette.grey[900]
//   },
//   rootAppearancePrimary: {
//     borderColor: theme.palette.primary.main
//   },
//   rootAppearanceSecondary: {
//     borderColor: theme.palette.secondary.main
//   }
// }))

/**
 * The Ribbon is labels/tags with a background color.
 */
const Ribbon = ({ appearance, className, value }) => {
  return (
    <Box component='span' sx={{ p: 2, border: '1px dashed grey' }}>
      <Button>Save</Button>
    </Box>
  )
  // const classes = useStyles()
  // return (
  //   <Box
  //     className={clsx(
  //       classes.root,
  //       classes[`rootAppearance${capitalize(appearance)}`],
  //       className
  //     )}
  //   >
  //     <Box
  //       className={clsx(
  //         classes.ribbon,
  //         classes[`ribbonAppearance${capitalize(appearance)}`]
  //       )}
  //     >
  //       {value}
  //     </Box>
  //   </Box>
  // )
}

Ribbon.defaultProps = {}

Ribbon.propTypes = {
  /**
   * The appearance color of the selected button.
   */
  appearance: PropTypes.oneOf(['primary', 'secondary', 'grey900']),
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The currently selected value.
   * The value must have reference equality with the option in order to be selected.
   */
  value: PropTypes.any
}

export { Ribbon }
