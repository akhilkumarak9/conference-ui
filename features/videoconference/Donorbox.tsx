import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function Donorbox({ onClose }) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Donorbox Settings</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mb-4">
            <div className="space-y-2">
              <Label>Donorbox Campaign URL</Label>
              <Input placeholder="Enter Campaign URL" />
            </div>
            
          </div>
          <DialogFooter>
          <Image
              src="/assets/images/donorbox.svg"
              alt="Donorbox logo"
              width={180}
              height={40}
              className="mx-auto"
            />
            <Button variant="outline" onClick={() => setShowDonorboxDialog(false)}>Cancel</Button>
            <Button onClick={() => setShowDonorboxDialog(false)}>Connect</Button>
          </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}