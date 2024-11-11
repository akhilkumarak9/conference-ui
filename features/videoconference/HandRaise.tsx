'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Hand } from "lucide-react"

export default function HandRaise() {
  // Add state and functions as needed
  type Participant = {
    id: string
    name: string
    isHandRaised: boolean
  }
// Mock participants data
const participants: Participant[] = [
  { id: '1', name: 'Akhil Kumar', isHandRaised: true },
  { id: '2', name: 'Shoeb Ahmad', isHandRaised: false },
]

  return (
    {participants.some(p => p.isHandRaised) && (
      <Button variant="secondary" size="sm">
        <Hand className="mr-2 h-4 w-4" />
        {participants.find(p => p.isHandRaised)?.name} wants to talk
      </Button>
    )}
  )
}