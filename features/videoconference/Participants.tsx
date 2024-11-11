'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { UserPlus, MicOff, Mic, VideoOff, VideoIcon, MoreVertical } from "lucide-react"

type Participant = {
  id: string
  name: string
  role: string
  avatar: string
  isMuted: boolean
  isVideoOff: boolean
}

export default function Participants() {
  const [participants, setParticipants] = useState<Participant[]>([
    { id: '1', name: 'Akhil Kumar', role: 'Host', avatar: '/assets/images/akhil.png', isMuted: false, isVideoOff: false },
    { id: '2', name: 'Shoeb Ahmad', role: 'Co-host', avatar: '/assets/images/shoeb.png', isMuted: true, isVideoOff: false },
    { id: '3', name: 'Muqeet Ahmed', role: 'Participant', avatar: '/assets/images/akhil.png', isMuted: false, isVideoOff: true },
    { id: '4', name: 'Jaya Chandra', role: 'Participant', avatar: '/assets/images/shoeb.png', isMuted: false, isVideoOff: false },
    { id: '5', name: 'Prasad Kumar', role: 'Participant', avatar: '/assets/images/akhil.png', isMuted: true, isVideoOff: true },
    { id: '6', name: 'Siva Murthi Naroji', role: 'Participant', avatar: '/assets/images/shoeb.png', isMuted: false, isVideoOff: false },
    { id: '7', name: 'Padmanabha', role: 'Participant', avatar: '/assets/images/akhil.png', isMuted: true, isVideoOff: false },
    { id: '8', name: 'Syam', role: 'Participant', avatar: '/assets/images/shoeb.png', isMuted: false, isVideoOff: true },
  ])

  const muteAll = () => {
    setParticipants(prevParticipants =>
      prevParticipants.map(participant => ({ ...participant, isMuted: true }))
    )
  }

  const turnOffAllVideos = () => {
    setParticipants(prevParticipants =>
      prevParticipants.map(participant => ({ ...participant, isVideoOff: true }))
    )
  }

  const toggleParticipantMute = (id: string) => {
    setParticipants(prevParticipants =>
      prevParticipants.map(participant =>
        participant.id === id ? { ...participant, isMuted: !participant.isMuted } : participant
      )
    )
  }

  const toggleParticipantVideo = (id: string) => {
    setParticipants(prevParticipants =>
      prevParticipants.map(participant =>
        participant.id === id ? { ...participant, isVideoOff: !participant.isVideoOff } : participant
      )
    )
  }

  return (
    <div className="w-80 border-l bottom-nav ml-3 mb-4 rounded-lg">
      <div className="flex items-center justify-between bg-header rounded-t-md border-b p-4">
        <h2 className="font-semibold text-white">Meeting Participants ({participants.length})</h2>
        <Button variant="outline" size="sm">
          <UserPlus className="h-4 w-4 mr-2" />
          Invite
        </Button>
      </div>
      <div className="p-4">
        <div className="mb-4 flex gap-2">
          <Button variant="outline" size="sm" onClick={muteAll}>
            Force Mute All
          </Button>
          <Button variant="outline" size="sm" onClick={turnOffAllVideos}>
            Force Video Mute All
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-15rem)]">
          <div className="space-y-4">
            {participants.map((participant) => (
              <div key={participant.id} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src={participant.avatar}
                    alt={participant.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-medium">{participant.name}</div>
                    <div className="text-sm text-muted-foreground">{participant.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleParticipantMute(participant.id)}
                  >
                    {participant.isMuted ? (
                      <MicOff className="h-4 w-4" />
                    ) : (
                      <Mic className="h-4 w-4" />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleParticipantVideo(participant.id)}
                  >
                    {participant.isVideoOff ? (
                      <VideoOff className="h-4 w-4" />
                    ) : (
                      <VideoIcon className="h-4 w-4" />
                    )}
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}