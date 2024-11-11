import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { X } from "lucide-react"
import { useState } from "react"

export default function Settings({ onClose }) {
  // Add state and functions as needed
  const [selectedCamera, setSelectedCamera] = useState("HD Camera")
  const [selectedAudioInput, setSelectedAudioInput] = useState(audioInputs[0].id)
  const [selectedAudioOutput, setSelectedAudioOutput] = useState(audioOutputs[0].id)
  const [displayName, setDisplayName] = useState("Akhil Kumar")
  const [email, setEmail] = useState("akhil.kumar@v-empower.com")
  const [language, setLanguage] = useState("en")
  const [deleteCache, setDeleteCache] = useState(false)
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

  return (
    <Dialog open={true} onOpenChange={onClose}>
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
  )
}