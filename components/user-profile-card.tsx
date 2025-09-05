"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Heart,
  MessageCircle,
  Volume2,
  VolumeX,
} from "lucide-react"
import { FaDiscord, FaGithub } from "react-icons/fa"

interface UserProfile {
  name: string
  username: string
  bio: string
  website: string
  followers: number
  likes: number
  avatar: string
  coverImage: string
  skills: string[]
  isFollowing: boolean
}

const mockUser: UserProfile = {
  name: "Bdokkx",
  username: "@bdokkx",
  bio: "Hey, my name is Bdokkx. I specialize in Java, Luau, and a few other things.",
  website: "",
  followers: 0,
  likes: 0,
  avatar: "https://cdn.discordapp.com/avatars/1210372273807298640/cc98edfc71eb5e6009c07f92a28a4e9b.webp",
  coverImage: "/abstract-design-pattern.png",
  skills: ["Java", "Luau", "Coding"],
  isFollowing: false,
}

export default function UserProfileCard() {
  const [user, setUser] = useState<UserProfile>(mockUser)
  const [isLoading, setIsLoading] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleFollow = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setUser((prev) => ({ ...prev, isFollowing: !prev.isFollowing }))
    setIsLoading(false)
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  const toggleMusic = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play().catch((err) => console.log("Play error:", err))
      setIsPlaying(true)
    }
  }

  const formatNumber = (num: number) =>
    num >= 1000 ? (num / 1000).toFixed(1) + "k" : num.toString()

  return (
    <div className="w-[420px] max-w-[420px] relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:scale-[1.01] hover:bg-white/8 hover:border-white/20 shadow-2xl">
      <Button
        onClick={toggleMusic}
        size="icon"
        className="absolute top-3 right-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white shadow-md transition-all duration-300"
      >
        {isPlaying ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
      </Button>
      <audio ref={audioRef} src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BaseBeat-Y0dNM6Tn5ZDKWViiJDTSZBKUGSWTct.mp3" loop />

      <div className="p-6 space-y-5">
        <div className="flex items-start gap-4 mb-3">
          <img
            src={user.avatar || "/placeholder.svg"}
            alt={user.name}
            className="w-24 h-24 rounded-2xl border-3 border-white/30 bg-white/10 backdrop-blur-xl shadow-lg object-cover"
          />
          <div className="flex-1 space-y-2">
            <h1 className="text-xl font-semibold text-white leading-tight">{user.name}</h1>
            <p className="text-white/70 text-sm font-medium">{user.username}</p>

            <div className="flex gap-2">
              <Button
                asChild
                size="sm"
                className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-medium transition-all duration-300 hover:scale-[1.02] shadow-md text-xs px-3 py-1.5 h-auto"
              >
                <a
                  href="https://discordapp.com/users/1210372273807298640"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDiscord className="h-3 w-3 mr-1.5" />
                  Discord
                </a>
              </Button>

              <Button
                asChild
                size="sm"
                className="bg-black hover:bg-zinc-900 text-white font-medium transition-all duration-300 hover:scale-[1.02] shadow-md text-xs px-3 py-1.5 h-auto"
              >
                <a
                  href="https://github.com/bdokkx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="h-3 w-3 mr-1.5" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>

        <p className="text-white/85 text-sm leading-relaxed">{user.bio}</p>

        <div className="flex flex-wrap gap-1.5">
          {user.skills.map((skill, index) => (
            <Badge
              key={index}
              className="bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 text-blue-100 text-xs px-2.5 py-1 transition-all duration-300 font-medium"
            >
              {skill}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 py-2">
          <div className="text-center space-y-1">
            <p className="text-white font-semibold text-base">
              {formatNumber(user.followers)}
            </p>
            <p className="text-white/60 text-xs font-medium">Followers</p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-white font-semibold text-base">
              {formatNumber(user.likes)}
            </p>
            <p className="text-white/60 text-xs font-medium">Likes</p>
          </div>
        </div>

        <div className="flex gap-2.5 pt-1">
          <Button
            onClick={handleFollow}
            disabled={isLoading}
            className="flex-1 bg-blue-500 hover:bg-blue-600 border-0 text-white font-medium transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
          >
            {isLoading ? (
              <Users className="h-4 w-4 animate-spin mr-2" />
            ) : (
              <Users className="h-4 w-4 mr-2" />
            )}
            {user.isFollowing ? "Following" : "Follow"}
          </Button>

          <Button className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white transition-all duration-300 hover:scale-[1.02] shadow-md">
            <MessageCircle className="h-4 w-4" />
          </Button>

          <Button
            onClick={handleLike}
            className={`bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white transition-all duration-300 hover:scale-[1.02] shadow-md ${
              isLiked ? "bg-red-500/20 border-red-400/30" : ""
            }`}
          >
            <Heart
              className={`h-4 w-4 transition-colors duration-300 ${
                isLiked ? "fill-red-400 text-red-400" : ""
              }`}
            />
          </Button>
        </div>
      </div>
    </div>
  )
}
