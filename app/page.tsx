'use client'

import { useState } from "react"
import HeaderNavBar from "@/features/videoconference/HeaderNavBar"
import FooterNavBar from "@/features/videoconference/FooterNavBar"
import ParticipantsTile from "@/features/videoconference/ParticipantsTile"
import Chat from "@/features/videoconference/Chat"
import Participants from "@/features/videoconference/Participants"
import Polls from "@/features/videoconference/Polls"
import ManageVideoQuality from "@/features/videoconference/ManageVideoQuality"
import Settings from "@/features/videoconference/Settings"
import PrivacyPolicy from "@/features/videoconference/PrivacyPolicy"
import LiveStream from "@/features/videoconference/LiveStream"
import CPConnect from "@/features/videoconference/C&PConnect"
import Donorbox from "@/features/videoconference/Donorbox"
import VoiceCommand from "@/features/videoconference/VoiceCommand"
import SpeakerStats from "@/features/videoconference/SpeakerStats"
import EmbedMeeting from "@/features/videoconference/EmbedMeeting"
import KeyboardShortcuts from "@/features/videoconference/KeyboardShortcuts"
import HandRaise from "@/features/videoconference/HandRaise"

export default function Page() {
  const [sidebarContent, setSidebarContent] = useState<'participants' | 'chat' | 'polls' | null>(null)
  const [showSettingsDialog, setShowSettingsDialog] = useState(false)
  const [showPrivacyDialog, setShowPrivacyDialog] = useState(false)
  const [showQualityDialog, setShowQualityDialog] = useState(false)
  const [showLiveStreamDialog, setShowLiveStreamDialog] = useState(false)
  const [showCPConnectDialog, setShowCPConnectDialog] = useState(false)
  const [showDonorboxDialog, setShowDonorboxDialog] = useState(false)
  const [showVoiceCommandDialog, setShowVoiceCommandDialog] = useState(false)
  const [showSpeakerStatsDialog, setShowSpeakerStatsDialog] = useState(false)
  const [showEmbedDialog, setShowEmbedDialog] = useState(false)
  const [showShortcutsDialog, setShowShortcutsDialog] = useState(false)

  return (
    <div className="flex min-h-screen w-full flex-col p-4 bg-background">
      <HeaderNavBar />
      <div className="relative flex flex-1">
        <ParticipantsTile />
        {sidebarContent === 'chat' && <Chat />}
        {sidebarContent === 'participants' && <Participants />}
        {sidebarContent === 'polls' && <Polls />}
      </div>
      <FooterNavBar 
        setSidebarContent={setSidebarContent} 
        setShowSettingsDialog={setShowSettingsDialog}
        setShowPrivacyDialog={setShowPrivacyDialog}
        setShowQualityDialog={setShowQualityDialog}
        setShowLiveStreamDialog={setShowLiveStreamDialog}
        setShowCPConnectDialog={setShowCPConnectDialog}
        setShowDonorboxDialog={setShowDonorboxDialog}
        setShowVoiceCommandDialog={setShowVoiceCommandDialog}
        setShowSpeakerStatsDialog={setShowSpeakerStatsDialog}
        setShowEmbedDialog={setShowEmbedDialog}
        setShowShortcutsDialog={setShowShortcutsDialog}
      />
      {showSettingsDialog && <Settings onClose={() => setShowSettingsDialog(false)} />}
      {showPrivacyDialog && <PrivacyPolicy onClose={() => setShowPrivacyDialog(false)} />}
      {showQualityDialog && <ManageVideoQuality onClose={() => setShowQualityDialog(false)} />}
      {showLiveStreamDialog && <LiveStream onClose={() => setShowLiveStreamDialog(false)} />}
      {showCPConnectDialog && <CPConnect onClose={() => setShowCPConnectDialog(false)} />}
      {showDonorboxDialog && <Donorbox onClose={() => setShowDonorboxDialog(false)} />}
      {showVoiceCommandDialog && <VoiceCommand onClose={() => setShowVoiceCommandDialog(false)} />}
      {showSpeakerStatsDialog && <SpeakerStats onClose={() => setShowSpeakerStatsDialog(false)} />}
      {showEmbedDialog && <EmbedMeeting onClose={() => setShowEmbedDialog(false)} />}
      {showShortcutsDialog && <KeyboardShortcuts onClose={() => setShowShortcutsDialog(false)} />}
      
    </div>
  )
}