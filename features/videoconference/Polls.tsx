'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"

type Poll = {
  question: string
  options: string[]
}

type PollsProps = {
  setSidebarContent: (content: 'participants' | 'chat' | 'polls' | null) => void
}

export default function Polls({ setSidebarContent }: PollsProps) {
  const [newPoll, setNewPoll] = useState<Poll>({
    question: '',
    options: ['', '']
  })

  const updatePollOption = (index: number, value: string) => {
    const updatedOptions = [...newPoll.options]
    updatedOptions[index] = value
    setNewPoll(prev => ({ ...prev, options: updatedOptions }))
  }

  const addPollOption = () => {
    setNewPoll(prev => ({ ...prev, options: [...prev.options, ''] }))
  }

  const handleCreatePoll = () => {
    // Here you would typically send the poll data to your backend or state management
    console.log('Creating poll:', newPoll)
    // Reset the form and close the sidebar
    setNewPoll({ question: '', options: ['', ''] })
    setSidebarContent(null)
  }

  return (
    <div className="w-80 border-l ml-3 mb-4 rounded-lg bottom-nav">
      <div className="flex h-14 items-center rounded-t-md justify-between border-b bg-header p-4">
        <h2 className="font-semibold text-white">Create A Poll</h2>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">
              Poll Question
            </label>
            <Input
              placeholder="Ask a question"
              value={newPoll.question}
              onChange={(e) => setNewPoll(prev => ({ ...prev, question: e.target.value }))}
              className="mt-1.5"
            />
          </div>
          {newPoll.options.map((option, index) => (
            <div key={index}>
              <label className="text-sm font-medium text-muted-foreground">
                Poll Option {index + 1}
              </label>
              <Input
                placeholder={`Option ${index + 1}`}
                value={option}
                onChange={(e) => updatePollOption(index, e.target.value)}
                className="mt-1.5"
              />
            </div>
          ))}
          <Button
            variant="secondary"
            className="w-full"
            onClick={addPollOption}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Option
          </Button>
          <div className="flex gap-2 pt-4">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => {
                setNewPoll({ question: '', options: ['', ''] })
                setSidebarContent(null)
              }}
            >
              Cancel
            </Button>
            <Button
              className="flex-1"
              onClick={handleCreatePoll}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}