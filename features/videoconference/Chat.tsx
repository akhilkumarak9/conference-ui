'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Paperclip, Send } from "lucide-react"

type Message = {
  id: string
  senderId: string
  text: string
}

type Participant = {
  id: string
  name: string
  avatar: string
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', senderId: '1', text: 'Hello everyone!' },
    { id: '2', senderId: '2', text: 'Hi there! How are you?' },
    { id: '3', senderId: '1', text: 'Im doing great, thanks for asking!' },
  ])
  const [newMessage, setNewMessage] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  const participants: Participant[] = [
    { id: '1', name: 'You', avatar: '/assets/images/akhil.png' },
    { id: '2', name: 'John Doe', avatar: '/assets/images/shoeb.png' },
  ]

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg: Message = {
        id: String(messages.length + 1),
        senderId: '1', // Assuming the current user's ID is '1'
        text: newMessage.trim(),
      }
      setMessages([...messages, newMsg])
      setNewMessage('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <div className="w-80 border-l ml-3 mb-4 rounded-lg bottom-nav">
      <div className="flex h-14 items-center rounded-t-md justify-between border-b bg-header p-4">
        <h2 className="font-semibold text-white">Chat</h2>
      </div>
      <div className="flex h-[calc(100vh-12rem)] flex-col">
        <ScrollArea ref={scrollRef} className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => {
              const sender = participants.find(p => p.id === message.senderId)
              const isCurrentUser = message.senderId === '1'

              return (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 ${isCurrentUser ? 'flex-row-reverse' : ''}`}
                >
                  <Image
                    src={sender?.avatar || '/placeholder.svg?height=40&width=40'}
                    alt={sender?.name || 'User'}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div className={`flex max-w-[70%] flex-col ${isCurrentUser ? 'items-end' : ''}`}>
                    <span className="text-sm font-medium">{sender?.name}</span>
                    <div
                      className={`rounded-lg p-3 ${
                        isCurrentUser
                          ? 'bg-header text-white'
                          : 'bg-muted'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollArea>
        <div className="border-t p-4">
          <div className="flex gap-2">
            <Input
              placeholder="Enter a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button size="icon" variant="ghost">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button size="icon" onClick={handleSendMessage}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}