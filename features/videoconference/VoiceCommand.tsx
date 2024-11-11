import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Mic } from "lucide-react"

export default function VoiceCommand({ onClose }) {
  // Add state and functions as needed

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Voice Command For Meet Hour</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4 py-8">
            <p className="text-sm text-muted-foreground">Click on the mic and voice a command</p>
            <Button
              variant="destructive"
              size="lg"
              className="h-24 w-24 rounded-full p-0"
            >
              <Mic className="h-8 w-8" />
            </Button>
          </div>
        </DialogContent>
    </Dialog>
  )
}