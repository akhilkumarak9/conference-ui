'use client'

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Slider } from "@/components/ui/slider"
import {
  Mic,
  MicOff,
  VideoIcon,
  VideoOff,
  MonitorUp,
  PhoneOff,
  UserPlus,
  Copy,
  Hand,
  Smile,
  MessageCircle,
  ListTodo,
  Users,
  MenuIcon,
  ChevronDown,
  Volume,
  Volume2,
  Pencil,
  FileText,
  Youtube,
  Film,
  Radio,
  Speech,
  AudioLines,
  Code,
  SquareSlash
} from "lucide-react"

type FooterNavBarProps = {
  setSidebarContent: (content: 'participants' | 'chat' | 'polls' | null) => void
  setShowSettingsDialog: (show: boolean) => void
  setShowPrivacyDialog: (show: boolean) => void
  setShowQualityDialog: (show: boolean) => void
  setShowLiveStreamDialog: (show: boolean) => void
  setShowCPConnectDialog: (show: boolean) => void
  setShowDonorboxDialog: (show: boolean) => void
  setShowVoiceCommandDialog: (show: boolean) => void
  setShowSpeakerStatsDialog: (show: boolean) => void
  setShowEmbedDialog: (show: boolean) => void
  setShowShortcutsDialog: (show: boolean) => void
}

export default function FooterNavBar({
  setSidebarContent,
  setShowSettingsDialog,
  setShowPrivacyDialog,
  setShowQualityDialog,
  setShowLiveStreamDialog,
  setShowCPConnectDialog,
  setShowDonorboxDialog,
  setShowVoiceCommandDialog,
  setShowSpeakerStatsDialog,
  setShowEmbedDialog,
  setShowShortcutsDialog
}: FooterNavBarProps) {
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)
  const [isHandRaised, setIsHandRaised] = useState(false)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [isChatActive, setIsChatActive] = useState(false)
  const [isPollsActive, setIsPollsActive] = useState(false)
  const [isParticipantsActive, setIsParticipantsActive] = useState(false)
  const [selectedAudioInput, setSelectedAudioInput] = useState("1")
  const [selectedAudioOutput, setSelectedAudioOutput] = useState("1")
  const [micVolume, setMicVolume] = useState(75)
  const [speakerVolume, setSpeakerVolume] = useState(50)

  const audioInputs = [
    { id: '1', name: 'Default - Microphone (USB Audio Device)', level: 75 },
    { id: '2', name: 'Communications - Microphone (USB Audio Device)', level: 60 },
    { id: '3', name: 'Microphone (USB Audio Device)', level: 45 },
  ]

  const audioOutputs = [
    { id: '1', name: 'Default - Speakers (USB Audio Device)' },
    { id: '2', name: 'Communications - Speakers (USB Audio Device)' },
    { id: '3', name: 'Speakers (USB Audio Device)' },
    { id: '4', name: 'Realtek Digital Output (Realtek(R) Audio)' },
  ]

  const emojis = [
    { emoji: "👍", name: "thumbs-up" },
    { emoji: "👎", name: "thumbs-down" },
    { emoji: "👋", name: "wave" },
    { emoji: "👏", name: "clap" },
    { emoji: "🔥", name: "fire" },
    { emoji: "🎉", name: "party" },
    { emoji: "😍", name: "heart-eyes" },
    { emoji: "😂", name: "laugh" },
    { emoji: "🎁", name: "gift" },
  ]

  const copyMeetingLink = () => {
    // Implement copy meeting link functionality
  }

  const handleEmojiSelect = (emoji: string) => {
    // Implement emoji selection functionality
  }

  const toggleParticipantHandRaise = (id: string) => {
    // Implement hand raise functionality
  }

  

  return (
    <TooltipProvider>
     
      <div className="relative items-center justify-between rounded-none p-none mt-16">
        <div className="absolute bottom-2 flex items-center gap-4 rounded-lg bottom-nav p-2 shadow-md" style={{minWidth:"1005px"}}>
          <div className="flex items-center gap-2">
            <div style={{backgroundColor:'#EFF6FF', borderRadius:'50px'}}>
              <DropdownMenu>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center">
                      <Button
                        style={{
                          borderRadius:'50px',
                          backgroundColor: isMuted ? '#DAE7F8' : 'transparent',
                          color: '#395071',
                        }}
                        size="icon"
                        onClick={() => setIsMuted(!isMuted)}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E4EBF5')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = isMuted ? '#F8FBFF' : 'transparent')}
                      >
                        {isMuted ? <MicOff className="rounded" style={{ color: '#4b6790' }} /> : <Mic className="rounded" style={{  minWidth:'40px', color: '#4b6790' }} />}
                      </Button>
                      <DropdownMenuTrigger asChild>
                        <Button style={{marginLeft:'-10px', backgroundColor:'transparent', color:'#000'}} className="rounded-full" size="icon">
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    {isMuted ? "Unmute" : "Mute"}
                  </TooltipContent>
                </Tooltip>
                <DropdownMenuContent align="start" className="w-80">
                  <div className="p-4 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium flex items-center gap-2">
                        <Mic className="h-4 w-4" /> Microphones
                      </h3>
                      {audioInputs.map((input) => (
                        <div key={input.id} className="flex items-center gap-2">
                          <input
                            type="radio"
                            id={`mic-${input.id}`}
                            name="microphone"
                            checked={selectedAudioInput === input.id}
                            onChange={() => setSelectedAudioInput(input.id)}
                            className="rounded-full"
                          />
                          <label htmlFor={`mic-${input.id}`} className="flex-1 text-sm">
                            {input.name}
                          </label>
                          <div className="w-20 h-1 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-green-500"
                              style={{ width: `${input.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Volume2 className="h-4 w-4" /> Microphone Volume
                      </label>
                      <Slider
                        value={[micVolume]}
                        onValueChange={([value]) => setMicVolume(value)}
                        max={100}
                        step={1}
                      />
                    </div>
                    <DropdownMenuSeparator />
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium flex items-center gap-2">
                        <Volume className="h-4 w-4" /> Speakers
                      </h3>
                      {audioOutputs.map((output) => (
                        <div key={output.id} className="flex items-center gap-2">
                          <input
                            type="radio"
                            id={`speaker-${output.id}`}
                            name="speaker"
                            checked={selectedAudioOutput === output.id}
                            onChange={() => setSelectedAudioOutput(output.id)}
                            className="rounded-full"
                          />
                          <label htmlFor={`speaker-${output.id}`} className="text-sm">
                            {output.name}
                          </label>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Volume2 className="h-4 w-4" /> Speaker Volume
                      </label>
                      <Slider
                        value={[speakerVolume]}
                        onValueChange={([value]) => setSpeakerVolume(value)}
                        max={100}
                        step={1}
                      />
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div style={{backgroundColor:'#EFF6FF', borderRadius:'50px'}}>
              <DropdownMenu>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center">
                      <Button
                        style={{
                          borderRadius:'50px',
                          backgroundColor: isVideoOff ? '#F8FBFF' : 'transparent',
                          color: '#4b6790',
                        }}
                        size="icon"
                        onClick={() => setIsVideoOff(!isVideoOff)}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F8FBFF')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = isVideoOff ? '#F8FBFF' : 'transparent')}
                      >
                        {isVideoOff ? (
                          <VideoOff className="rounded" style={{  minWidth:'40px', color: '#4b6790' }} />
                        ) : (
                          <VideoIcon className="rounded" style={{  minWidth:'40px', color: '#4b6790' }} />
                        )}
                      </Button>
                      <DropdownMenuTrigger asChild>
                        <Button style={{marginLeft:'-10px', backgroundColor:'transparent', color:'#000'}} className="rounded-full" size="icon">
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    {isVideoOff ? "Unmute Video" : "Mute Video"}
                  </TooltipContent>
                </Tooltip>
                <DropdownMenuContent align="start" className="w-80">
                  <div className="p-4 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium flex items-center gap-2">
                        <VideoIcon className="h-4 w-4" /> Camera
                      </h3>
                      <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                        <Image
                          src="/assets/images/placeholder.svg"
                          alt="Camera preview"
                          width={320}
                          height={180}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">
                      Camera Settings
                    </Button>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div style={{backgroundColor:'#EFF6FF', borderRadius:'50px'}}>
              <DropdownMenu>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center">
                      <DropdownMenuTrigger asChild>
                        <Button
                          style={{
                            borderRadius:'50px',
                            backgroundColor: 'transparent',
                            color: '#4b6790',
                          }}
                          size="icon"
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F8FBFF')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                        >
                          <MonitorUp className="rounded" style={{  minWidth:'40px', color: '#4b6790' }} />
                        </Button>
                      </DropdownMenuTrigger>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    Share Screen
                  </TooltipContent>
                </Tooltip>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>
                    <MonitorUp className="h-4 w-4 mr-2" />
                    Screen Share
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Pencil className="h-4 w-4 mr-2" />
                    Whiteboard Share
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FileText className="h-4 w-4 mr-2" />
                    LivePad
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Youtube className="h-4 w-4 mr-2" />
                    YouTube Share
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Button style={{backgroundColor:'#DC3C4E', borderRadius:'50px'}}>
              <PhoneOff className="mr-2 h-4 w-4" />
              End Meeting
            </Button>
          </div>
          <div className="flex items-center gap-2 border-l pl-4">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={copyMeetingLink}>
                <Copy className="h-4 w-4"/>
              </Button>
              <code style={{border: '1px Solid #C7D5E9'}} className="rounded bg-muted px-3 py-1.5">MHR2410152126</code>
            </div>
            <Button style={{backgroundColor:'#395071'}} onClick={() => setShowInviteDialog(true)}>
              <UserPlus className="h-4 w-4 " />
              Invite
            </Button>
          </div>
        </div>
        <div className="absolute bottom-2 right-0 flex items-center gap-2 rounded-lg bottom-nav p-2 shadow-md">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                style={{
                  borderRadius:'50px',
                  backgroundColor: isHandRaised ? '#395071' : 'transparent',
                  color: isHandRaised ? '#fff' : '#4b6790',
                }}
                size="icon"
                onMouseEnter={(e) => {
                  if (!isHandRaised) {
                    e.currentTarget.style.backgroundColor = '#E4EBF5';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isHandRaised) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
                onClick={() => {
                  setIsHandRaised((prev) => !prev);
                  toggleParticipantHandRaise('1');
                }}
              >
                <Hand className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              Raise Hand
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              >
                <Smile className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top" className="flex gap-1 p-2">
              {emojis.map((emoji) => (
                <Button
                  key={emoji.name}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 p-0 hover:bg-muted"
                  onClick={() => handleEmojiSelect(emoji.emoji)}
                >
                  <span className="text-lg">{emoji.emoji}</span>
                </Button>
              ))}
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                style={{
                  borderRadius:'50px',
                  backgroundColor: isChatActive ? '#395071' : 'transparent',
                  color: isChatActive ? '#fff' : '#4b6790',
                }}
                variant={isChatActive ? "secondary" : "ghost"}
                size="icon"
                onMouseEnter={(e) => {
                  if (!isChatActive) {
                    e.currentTarget.style.backgroundColor = '#E4EBF5';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isChatActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
                onClick={() => {
                  setIsChatActive((prev) => !prev);
                  setSidebarContent(isChatActive ? null : 'chat')
                }}
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              Chat
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                style={{
                  borderRadius:'50px',
                  backgroundColor: isPollsActive ? '#395071' : 'transparent',
                  color: isPollsActive ? '#fff' : '#4b6790',
                }}
                variant={isPollsActive ? "secondary" : "ghost"}
                size="icon"
                onMouseEnter={(e) => {
                  if (!isPollsActive) {
                    e.currentTarget.style.backgroundColor = '#E4EBF5';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isPollsActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
                onClick={() => {
                  setIsPollsActive((prev) => !prev);
                  setSidebarContent(isPollsActive ? null : 'polls')
                }}
              >
                <ListTodo className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              Polls
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                style={{
                  borderRadius:'50px',
                  backgroundColor: isParticipantsActive ? '#395071' : 'transparent',
                  color: isParticipantsActive ? '#fff' : '#4b6790',
                }}
                variant={isParticipantsActive ? "secondary" : "ghost"}
                size="icon"
                onMouseEnter={(e) => {
                  if (!isParticipantsActive) {
                    e.currentTarget.style.backgroundColor = '#E4EBF5';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isParticipantsActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
                onClick={() => {
                  setIsParticipantsActive((prev) => !prev);
                  setSidebarContent(isParticipantsActive ? null : 'participants')
                }}
              >
                <Users className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              Participants
            </TooltipContent>
          </Tooltip>
          <DropdownMenu>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center">
                    <Button 
                      variant="ghost" 
                      size="icon">
                      <MenuIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent>
                More Options
              </TooltipContent>
            </Tooltip>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => setShowQualityDialog(true)}>
                <Film className="h-4 w-4 mr-2" />
                Manage Video Quality
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setShowLiveStreamDialog(true)}>
                <Radio className="h-4 w-4 mr-2" />
                Live Stream
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setShowCPConnectDialog(true)}>
                <FileText className="h-4 w-4 mr-2" />
                C&P Connect Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setShowDonorboxDialog(true)}>
                <Youtube className="h-4 w-4 mr-2" />
                Donorbox Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setShowVoiceCommandDialog(true)}>
                <Speech className="h-4 w-4 mr-2" />
                Voice Command
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setShowSpeakerStatsDialog(true)}>
                <AudioLines className="h-4 w-4 mr-2" />
                Speaker Stats
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setShowEmbedDialog(true)}>
                <Code className="h-4 w-4 mr-2" />
                Embed Meeting
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setShowShortcutsDialog(true)}>
                <SquareSlash className="h-4 w-4 mr-2" />
                View Shortcuts
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </TooltipProvider>
  )
}