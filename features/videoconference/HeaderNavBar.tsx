'use client'

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { Square, Speech } from "lucide-react"
import { useState} from "react"



export default function HeaderNavBar() {
  // Add state and functions as needed
  const [isRecording, setIsRecording] = useState(false)
  const [showVoiceCommand, setShowVoiceCommand] = useState(false)
  const [isListening, setIsListening] = useState(false)

  return (
    <div className="flex items-center justify-between bg-header rounded-lg mb-4 px-4 py-2">
          <div className="flex items-center gap-2">
          <Image
              src="/assets/images/logo-white.svg"
              alt="Meet Hour"
              width={200}
              height={36}
              className="p-2"
            />
            <Separator orientation="vertical" className="h-6 text-gray-300" />
            <span className="text-lg font-medium text-white">
              UX UI Discussions - 15-10-2024-20:00PM IST
            </span>
          </div>
          <div className="flex items-center gap-2">
          <Button 
              variant={isRecording ? "destructive" : "secondary"} 
              size="sm"
              onClick={() => setIsRecording(!isRecording)}
            >
              {isRecording ? (
                <>
                  <Square className="mr-2 h-4 w-4" />
                  Stop
                </>
              ) : (
                <>
                  <span className="mr-2 h-4 w-4 rounded-full bg-red-500" />
                  Rec
                </>
              )}
            </Button>
            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => setShowVoiceCommand(true)}
              className="relative"
            >
              <div className="relative h-4 w-4">
                <Speech className="h-4 w-4" />
                {isListening && (
                  <div className="absolute -right-1 -top-1">
                    <div className="flex gap-0.5">
                      <div className="h-2 w-0.5 animate-wave bg-current" style={{ animationDelay: '0ms' }} />
                      <div className="h-2 w-0.5 animate-wave bg-current" style={{ animationDelay: '100ms' }} />
                      <div className="h-2 w-0.5 animate-wave bg-current" style={{ animationDelay: '200ms' }} />
                    </div>
                  </div>
                )}
              </div>
            </Button>
            
          </div>
        </div>
  )
}