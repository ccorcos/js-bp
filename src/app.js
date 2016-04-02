import React from 'react'
import config from 'config'

require('main.scss')

export default (props) => <div>{config.message}</div>
