import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import Image from "next/image"

export default function CPConnect({ onClose }) {
  const [showCPConnectDialog, setShowCPConnectDialog] = useState(false)
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>C&P Connect Settings</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mb-4">
            <div className="space-y-2">
              <Label>Connect Form URL or Widget URL</Label>
              <Input placeholder="Enter Campaign URL" />
            </div>
            
          </div>
          <DialogFooter>
          <Image
              src="/assets/images/c&p-connect.png"
              alt="Click & Pledge logo"
              width={200}
              height={50}
              className="mx-auto"
            />
            <Button variant="outline" onClick={() => setShowCPConnectDialog(false)}>Cancel</Button>
            <Button onClick={() => setShowCPConnectDialog(false)}>Connect</Button>
          </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}