import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy({ onClose }) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        {/* Add privacy policy content */}
      </DialogContent>
    </Dialog>
  )
}