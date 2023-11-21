'use client'

import React, { useState } from 'react'
import { AdvancedViewMode } from '@/components/AdvancedViewMode'

const Main = () => {
  const [mode, setMode] = useState()

  return <AdvancedViewMode />
}

export default Main
