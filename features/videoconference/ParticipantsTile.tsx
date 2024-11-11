'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { 
  GalleryThumbnails, 
  LayoutPanelLeft, 
  LayoutPanelTop, 
  Grid, 
  ChevronDown, 
  PictureInPicture, 
  LockKeyhole, 
  Signal, 
  Settings, 
  ZoomIn, 
  ZoomOut, 
  X,
  Maximize2 
} from "lucide-react"

type ViewMode = 'stage' | 'verticalFilmstrip' | 'horizontalFilmstrip' | 'tile'



type ParticipantsTileProps = {
  setShowPrivacyDialog: (show: boolean) => void
  setShowQualityDialog: (show: boolean) => void
  setShowSettingsDialog: (show: boolean) => void
}

export default function ParticipantsTile({ 
  setShowPrivacyDialog, 
  setShowQualityDialog, 
}: ParticipantsTileProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('stage')
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null)
  
  const [showSettingsDialog, setShowSettingsDialog] = useState(false)

  const [audioInputs] = useState([
    { id: '1', name: 'Default - Microphone (USB Audio Device)', level: 75 },
    { id: '2', name: 'Communications - Microphone (USB Audio Device)', level: 60 },
    { id: '3', name: 'Microphone (USB Audio Device)', level: 45 },
  ])
  const [audioOutputs] = useState([
    { id: '1', name: 'Default - Speakers (USB Audio Device)' },
    { id: '2', name: 'Communications - Speakers (USB Audio Device)' },
    { id: '3', name: 'Speakers (USB Audio Device)' },
    { id: '4', name: 'Realtek Digital Output (Realtek(R) Audio)' },
  ])

  const [selectedCamera, setSelectedCamera] = useState("HD Camera")
  const [selectedAudioInput, setSelectedAudioInput] = useState(audioInputs[0].id)
  const [selectedAudioOutput, setSelectedAudioOutput] = useState(audioOutputs[0].id)
  const [displayName, setDisplayName] = useState("Akhil Kumar")
  const [email, setEmail] = useState("akhil.kumar@v-empower.com")
  const [language, setLanguage] = useState("en")
  const [deleteCache, setDeleteCache] = useState(false)

  

  return (
    <TooltipProvider>
      <div className="relative flex-1 p-2 mb-4" style={{ border: "3px solid #1ACC8D", borderRadius:"12px" }}>
        {/* Vignette Overlay */}
        <div 
          className="absolute m-2 inset-0"
          style={{
            background: "radial-gradient(circle, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.6) 100%)", 
            borderRadius: "12px"
          }}
        />

        {/* Image */}
        <Image
          src="/assets/images/person.png"
          alt="Video conference participant"
          width={1280}
          height={720}
          className="h-full w-full rounded-lg object-cover"
          style={{ borderRadius: "12px" }}
        />

        {/* Top Right Controls */}
        <div className="absolute right-4 top-4 flex items-center gap-2">
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button style={{ backgroundColor: "hsla(0, 0%, 0%, 0.6)" }} size="sm">
                {viewMode === 'stage' && <GalleryThumbnails className="mr-2 h-4 w-4" />}
                {viewMode === 'verticalFilmstrip' && <LayoutPanelLeft className="mr-2 h-4 w-4" />}
                {viewMode === 'horizontalFilmstrip' && <LayoutPanelTop className="mr-2 h-4 w-4" />}
                {viewMode === 'tile' && <Grid className="mr-2 h-4 w-4" />}
                {viewMode === 'stage' && 'Stage View'}
                {viewMode === 'verticalFilmstrip' && 'Vertical Filmstrip'}
                {viewMode === 'horizontalFilmstrip' && 'Horizontal Filmstrip'}
                {viewMode === 'tile' && 'Tile View'}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onSelect={() => setViewMode('stage')}>
                <GalleryThumbnails className="mr-2 h-4 w-4" />
                Stage View
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setViewMode('verticalFilmstrip')}>
                <LayoutPanelLeft className="mr-2 h-4 w-4" />
                Vertical Filmstrip View
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setViewMode('horizontalFilmstrip')}>
                <LayoutPanelTop className="mr-2 h-4 w-4" />
                Horizontal Filmstrip View
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setViewMode('tile')}>
                <Grid className="mr-2 h-4 w-4" />
                Tile View
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button style={{ backgroundColor: "hsla(0, 0%, 0%, 0.6)" }} size="sm">
            <PictureInPicture className="mr-2 h-4 w-4" />
            Picture in Picture
          </Button>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                style={{ backgroundColor: "hsla(0, 0%, 0%, 0.6)" }}
                size="sm"
                onClick={() => setShowPrivacyDialog(true)}
              >
                <LockKeyhole className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              Privacy Policy
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                style={{ backgroundColor: "hsla(0, 0%, 0%, 0.6)" }} 
                size="sm"
                onClick={() => setShowQualityDialog(true)}
              >
                <Signal className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              Video Quality
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                style={{ backgroundColor: "hsla(0, 0%, 0%, 0.6)" }} 
                size="sm"
                onClick={() => setShowSettingsDialog(true)}
              >
                <Settings className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              Settings
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Right Side Controls */}
        <div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-2">
          <Button style={{ backgroundColor: "hsla(0, 0%, 0%, 0.6)" }} size="icon">
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button style={{ backgroundColor: "hsla(0, 0%, 0%, 0.6)" }} size="icon">
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button style={{ backgroundColor: "hsla(0, 0%, 0%, 0.6)" }} size="icon">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>

        {/* Participant Name */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-md bg-black/50 px-2 py-1 text-white">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          Akhil Kumar
        </div>

        {/* Emoji Animation */}
        {selectedEmoji && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="animate-emoji text-9xl">{selectedEmoji}</span>
          </div>
        )}
      </div>

      <Dialog open={true} >
        <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <div className="flex items-center justify-between bg-slate-800 p-4 -m-6 mb-2 rounded-t-lg">
                <DialogTitle className="text-white">Settings</DialogTitle>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setShowSettingsDialog(false)}
                  className="text-white hover:text-white"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </DialogHeader>
            <Tabs defaultValue="devices" className="w-full">
              <TabsList>
                <TabsTrigger value="devices">Devices</TabsTrigger>
                <TabsTrigger value="general">General</TabsTrigger>
              </TabsList>
              <TabsContent value="devices" className="space-y-4">
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <label>Camera</label>
                      <Select value={selectedCamera} onValueChange={setSelectedCamera}>
                        <SelectTrigger className="w-[300px]">
                          <SelectValue placeholder="Select camera" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="HD Camera">HD Camera</SelectItem>
                          <SelectItem value="Webcam">Webcam</SelectItem>
                          <SelectItem value="External Camera">External Camera</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <Image
                        src="/assets/images/placeholder.svg"
                        alt="Camera preview"
                        width={200}
                        height={180}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <label>Microphone</label>
                      <Select value={selectedAudioInput} onValueChange={setSelectedAudioInput}>
                        <SelectTrigger className="w-[300px]">
                          <SelectValue placeholder="Select microphone" />
                        </SelectTrigger>
                        <SelectContent>
                          {audioInputs.map((input) => (
                            <SelectItem key={input.id} value={input.id}>
                              {input.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <label>Audio Output</label>
                      <Select value={selectedAudioOutput} onValueChange={setSelectedAudioOutput}>
                        <SelectTrigger className="w-[300px]">
                          <SelectValue placeholder="Select speakers" />
                        </SelectTrigger>
                        <SelectContent>
                          {audioOutputs.map((output) => (
                            <SelectItem key={output.id} value={output.id}>
                              {output.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-fit">
                      Test Audio
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="general" className="space-y-6">
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Your Display Name</label>
                    <Input
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Your Email</label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Language</label>
                    <Select value={language} onValueChange={setLanguage}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Pre Meeting</label>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="delete-cache"
                        checked={deleteCache}
                        onCheckedChange={(checked) => setDeleteCache(checked as boolean)}
                      />
                      <label
                        htmlFor="delete-cache"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Delete Cache
                      </label>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            <DialogFooter className="gap-2">
              <Button variant="outline" onClick={() => setShowSettingsDialog(false)}>
                Cancel
              </Button>
              <Button onClick={() => setShowSettingsDialog(false)}>
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
    </Dialog>
    </TooltipProvider>
  )
}