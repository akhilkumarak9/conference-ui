import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"

export default function EmbedMeeting({ onClose }) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Embed Meeting</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="rounded-lg bg-muted p-4">
              <pre className="text-sm">
                <code>{`<iframe allow="camera; microphone; fullscreen; 
display-capture; autoplay" src="https://meethour.io/
MHR2410152126?pcode=b12864J8f738542d3a8e5d1e6225ae3c"
style="height: 100%; width: 100%; border: 0px;"></iframe>`}</code>
              </pre>
            </div>
            <Button variant="outline" className="w-full" onClick={() => {
              navigator.clipboard.writeText(`<iframe allow="camera; microphone; fullscreen; display-capture; autoplay" src="https://meethour.io/MHR2410152126?pcode=b12864J8f738542d3a8e5d1e6225ae3c" style="height: 100%; width: 100%; border: 0px;"></iframe>`)
            }}>
              <Copy className="mr-2 h-4 w-4" />
              Copy Embed Code
            </Button>
          </div>
        </DialogContent>
    </Dialog>
  )
}