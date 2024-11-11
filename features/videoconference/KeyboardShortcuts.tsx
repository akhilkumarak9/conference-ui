import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function KeyboardShortcuts({ onClose }) {
  // Add shortcuts data
  const shortcuts = [
    { key: "F", action: "Show or hide video thumbnails" },
    { key: "M", action: "Mute or unmute your microphone" },
    { key: "V", action: "Start or stop your camera" },
    // ... other shortcuts
  ]

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Keyboard Shortcuts</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[400px] pr-4">
            <div className="grid grid-cols-2 gap-4">
              {shortcuts.map((shortcut) => (
                <div
                  key={shortcut.key}
                  className="flex items-center justify-between rounded-lg border p-2"
                >
                  <span>{shortcut.action}</span>
                  <kbd className="rounded bg-muted px-2 py-1 text-xs">
                    {shortcut.key}
                  </kbd>
                </div>
              ))}
            </div>
          </ScrollArea>
        </DialogContent>
    </Dialog>
  )
}