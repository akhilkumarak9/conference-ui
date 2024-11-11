import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Plus, X, Cloud, Facebook, Youtube, Twitch, Instagram, Linkedin, Radio, Video } from "lucide-react"
import { useState } from "react"

export default function LiveStream({ onClose }) {
  // Add state and functions as needed
  const [showLiveStreamDialog, setShowLiveStreamDialog] = useState(false)

  const [streamEntries, setStreamEntries] = useState<StreamEntry[]>([])

  const addStreamEntry = () => {
    setStreamEntries([...streamEntries, { id: Date.now().toString(), platform: "", url: "" }])
  }

  const updateStreamEntry = (id: string, field: "platform" | "url", value: string) => {
    setStreamEntries(streamEntries.map(entry =>
      entry.id === id ? { ...entry, [field]: value } : entry
    ))
  }

  const removeStreamEntry = (id: string) => {
    setStreamEntries(streamEntries.filter(entry => entry.id !== id))
  }

  
type StreamingPlatform = {
  id: string
  name: string
  icon: React.ReactNode
}

const streamingPlatforms: StreamingPlatform[] = [
  { id: "dropbox", name: "Dropbox", icon: <Cloud className="h-4 w-4" /> },
  { id: "facebook", name: "Facebook", icon: <Facebook className="h-4 w-4" /> },
  { id: "youtube", name: "YouTube", icon: <Youtube className="h-4 w-4" /> },
  { id: "twitch", name: "Twitch", icon: <Twitch className="h-4 w-4" /> },
  { id: "instagram", name: "Instagram", icon: <Instagram className="h-4 w-4" /> },
  { id: "linkedin", name: "LinkedIn", icon: <Linkedin className="h-4 w-4" /> },
  { id: "custom-rtmp", name: "Custom RTMP", icon: <Radio className="h-4 w-4" /> },
  { id: "vimeo", name: "Vimeo", icon: <Video className="h-4 w-4" /> },
]

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Live Stream Setup</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {streamEntries.map((entry, index) => (
              <div key={entry.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Streaming Platform {index + 1}</Label>
                  <Button variant="ghost" size="sm" onClick={() => removeStreamEntry(entry.id)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <Select
                  value={entry.platform}
                  onValueChange={(value) => updateStreamEntry(entry.id, "platform", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent>
                    {streamingPlatforms.map((platform) => (
                      <SelectItem key={platform.id} value={platform.id}>
                        <div className="flex items-center">
                          {platform.icon}
                          <span className="ml-2">{platform.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter Stream Key URL"
                    value={entry.url}
                    onChange={(e) => updateStreamEntry(entry.id, "url", e.target.value)}
                  />
                </div>
              </div>
            ))}
            <Button variant="outline" onClick={addStreamEntry} className="w-full">
              <Plus className="mr-2 h-4 w-4" />
              Add Streaming Platform
            </Button>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowLiveStreamDialog(false)}>Cancel</Button>
            <Button onClick={() => {
              console.log("Stream entries:", streamEntries)
              setShowLiveStreamDialog(false)
            }}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}