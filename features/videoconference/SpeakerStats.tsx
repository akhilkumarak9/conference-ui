import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"

export default function SpeakerStats({ onClose }) {
  // Add state and functions as needed
  const participantss = [
    { name: "Akhil Kumar", time: "5m34s", avatar: "/assets/images/akhil.png" },
    { name: "Shoeb Ahmad", time: "3m21s", avatar: "/assets/images/shoeb.png" },
    // ... other participants
  ]

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Speaker Stats</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[300px]">
            <div className="space-y-4">
              {participantss.map((participant) => (
                <div key={participant.name} className="flex items-center justify-between p-2">
                  <div className="flex items-center gap-2">
                    <Image
                      src={participant.avatar}
                      alt={participant.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span>{participant.name}</span>
                  </div>
                  <span className="rounded-full bg-primary/10 px-2 py-1 text-xs">
                    {participant.time}
                  </span>
                </div>
              ))}
            </div>
          </ScrollArea>
        </DialogContent>
    </Dialog>
  )
}