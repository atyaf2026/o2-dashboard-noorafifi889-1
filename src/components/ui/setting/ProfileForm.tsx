import { Camera } from 'lucide-react';
import Image from 'next/image';

export const ProfileForm = () => (
  <section className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-8">
    <div>
      <h2 className="text-xl font-bold text-slate-900">Profile Information</h2>
      <p className="text-sm text-gray-500">Update your account's profile information and email address.</p>
    </div>

    <div className="flex gap-12">
      <div className="flex flex-col items-center gap-3">
        <div className="relative group">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-50 shadow-sm">
            <Image src="/image-profile.jpg" alt="Profile" 
            width={128} 
            height={128} 
            className="w-full h-full object-cover"
            priority/>
          </div>
          <button className="absolute bottom-0 right-1 bg-indigo-600 p-2 rounded-full text-white border-4 border-white shadow-lg hover:bg-indigo-700 transition-colors">
            <Camera className="w-4 h-4" />
          </button>
        </div>
        <div className="text-center">
          <p className="text-xs font-bold text-slate-700">Profile Photo</p>
          <p className="text-[10px] text-gray-400">JPG or PNG. Max 2MB.</p>
        </div>
      </div>

      <div className="flex-1 space-y-5">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Name</label>
          <input 
            type="text" 
            defaultValue="Mohammed Alhalabi"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          />
          <p className="text-[11px] text-gray-400">Your real name as it will appear on reports.</p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Email Address</label>
          <input 
            type="email" 
            defaultValue="mohammed.h@o2.edu"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Bio</label>
          <textarea 
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none"
            defaultValue="Front-end developer trainee passionate about building clean and functional user interfaces."
          />
          <p className="text-[11px] text-gray-400">Brief description for your profile.</p>
        </div>
      </div>
    </div>
  </section>
);