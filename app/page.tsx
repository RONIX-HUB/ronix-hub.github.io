import UserProfileCard from "@/components/user-profile-card"

export default function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/40 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[160px]" />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10">
        <UserProfileCard />
      </div>
    </div>
  )
}
