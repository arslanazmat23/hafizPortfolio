
import Header from '@/components/header';
import Footer from '@/components/footer';

const tools = [
  { name: 'Raycast', icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5 13H25.5L35 35H32L29.75 29H18.25L16 35H13L22.5 13ZM28.5 26L24 16.5L19.5 26H28.5Z" fill="#F45151"/></svg>, category: 'development' },
  { name: 'Arc', icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 13C17.9249 13 13 17.9249 13 24C13 25.4332 13.2796 26.7903 13.7889 28H17.6599C17.2536 26.7728 17 25.4243 17 24C17 20.134 20.134 17 24 17C27.866 17 31 20.134 31 24C31 27.866 27.866 31 24 31C22.6953 31 21.4687 30.7788 20.3401 30.3725V34.2111C21.5097 34.7204 22.7554 35 24 35C30.0751 35 35 30.0751 35 24C35 17.9249 30.0751 13 24 13Z" fill="#F45151"/></svg>, category: 'other' },
  { name: 'VSCode', icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.0607 14.9393C32.4749 14.3536 31.5251 14.3536 30.9393 14.9393L19 26.8787V21.1213C19 20.2267 18.1046 19.3312 17.2091 19.3312C16.3136 19.3312 15.4182 20.2267 15.4182 21.1213V26.8787L17.0607 28.5213C17.6464 29.1071 18.5962 29.1071 19.182 28.5213L33.0607 14.6427C33.6464 14.0569 33.6464 13.1071 33.0607 12.5213L30.9393 10.3999C30.3536 9.81418 29.4038 9.81418 28.818 10.3999L10 29.2179V18.7821L28.818 4.96414C29.4038 4.37841 30.3536 4.37841 30.9393 4.96414L33.0607 7.08556C33.6464 7.67129 33.6464 8.62104 33.0607 9.20677L15.2679 27L33.0607 14.9393Z" fill="#007ACC"/></svg>, category: 'development' },
  { name: 'Obsidian', icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 10L14 16.5V30.5L24 37L34 30.5V16.5L24 10ZM21.5 20L24 14L31.5 24.5L26.5 34L19 23.5L21.5 20Z" fill="#7F35F3"/></svg>, category: 'other' },
  { name: 'Notion', icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 13H32V17H28V35H24V17H20V35H16V13Z" fill="white"/></svg>, category: 'other' },
  { name: 'mymind', icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14ZM24 30C20.6863 30 18 27.3137 18 24C18 20.6863 20.6863 18 24 18C27.3137 18 30 20.6863 30 24C30 27.3137 27.3137 30 24 30Z" fill="#F45151"/></svg>, category: 'other' },
  { name: 'Tana', icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 14L18 20H30L24 14ZM24 22V34H21V22H24ZM27 22V34H30V22H27Z" fill="white"/></svg>, category: 'other' },
  { name: 'Spotify', icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 24C16 28.4183 19.5817 32 24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24ZM18 24C18 20.6863 20.6863 18 24 18C27.3137 18 30 20.6863 30 24C30 27.3137 27.3137 30 24 30C20.6863 30 18 27.3137 18 24Z" fill="#1DB954"/><path d="M19 22H29" stroke="#1DB954" strokeWidth="2"/><path d="M19 26H29" stroke="#1DB954" strokeWidth="2"/><path d="M21 30H27" stroke="#1DB954" strokeWidth="2"/></svg>, category: 'other' },
  { name: 'Figma', icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 14H28V22H20V14Z" fill="#F24E1E"/><path d="M20 22H28V30H20V22Z" fill="#FF7262"/><path d="M20 30H28V38H20V30Z" fill="#A259FF"/><path d="M28 14H36V22H28V14Z" fill="#1ABCFE"/><path d="M28 22C32.4183 22 36 25.5817 36 30C36 34.4183 32.4183 38 28 38H20V30C20 25.5817 23.5817 22 28 22Z" fill="#0ACF83"/></svg>, category: 'design' },
  { name: 'Things 3', icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 16L22 20L30 12" stroke="#FFC700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M18 24L22 28L30 20" stroke="#FFC700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M18 32L22 36L30 28" stroke="#FFC700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>, category: 'productivity' },
  { name: 'Fantastical', icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 14H34V18H14V14Z" fill="#D94C3D"/><rect x="14" y="18" width="20" height="16" fill="white"/><path d="M18 22H22" stroke="black" strokeWidth="2" strokeLinecap="round"/><path d="M26 22H30" stroke="black" strokeWidth="2" strokeLinecap="round"/><path d="M18 28H22" stroke="black" strokeWidth="2" strokeLinecap="round"/><path d="M26 28H30" stroke="black" strokeWidth="2" strokeLinecap="round"/></svg>, category: 'productivity' },
  { name: '1Password', icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12ZM24 32C19.5817 32 16 28.4183 16 24C16 19.5817 19.5817 16 24 16C28.4183 16 32 19.5817 32 24C32 28.4183 28.4183 32 24 32Z" fill="#0094F5"/><path d="M24 20V28" stroke="white" strokeWidth="3" strokeLinecap="round"/></svg>, category: 'security' },
  { name: 'Framer', icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12H36V20H24L12 36V12Z" fill="#0055FF"/><path d="M12 20H24V36H12V20Z" fill="#88DDFF"/></svg>, category: 'design' },
  { name: 'Cleanshot X', icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 14H34V34H14V14Z" fill="#4B4AFF"/><path d="M20 20L28 28" stroke="white" strokeWidth="3" strokeLinecap="round"/><path d="M28 20L20 28" stroke="white" strokeWidth="3" strokeLinecap="round"/></svg>, category: 'other' },
  { name: 'PixelSnap 2', icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 14H22V22H14V14Z" fill="#FDB448"/><path d="M26 14H34V22H26V14Z" fill="#FDB448"/><path d="M14 26H22V34H14V26Z" fill="#FDB448"/><path d="M26 26H34V34H26V26Z" fill="#FDB448"/></svg>, category: 'other' },
  { name: 'Linear', icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12Z" stroke="white" strokeWidth="4"/></svg>, category: 'development' },
];

export default function UsesPage() {
  return (
    <div className="bg-black text-neutral-300 min-h-screen font-body">
      <Header />
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <section className="text-center py-16">
          <p className="text-sm uppercase text-neutral-400 mb-2 font-headline tracking-wider">My Setup</p>
          <h1 className="text-4xl sm:text-5xl font-bold font-headline text-white">
            <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Tools</span> I Use Daily
          </h1>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
            A curated list of the software, hardware, and services I rely on every day to get things done.
          </p>
        </section>

        <section className="py-12">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {tools.map((tool) => (
                <article
                key={tool.name}
                className="group relative flex flex-col items-center p-6 bg-neutral-900 rounded-2xl border border-neutral-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
                tabIndex={0}
                aria-label={`Use ${tool.name}`}
                >
                <div
                    className="w-16 h-16 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    role="img"
                    aria-label={`${tool.name} icon`}
                >
                    {tool.icon}
                </div>
                <h3 className="mt-2 text-sm font-medium text-neutral-200">{tool.name}</h3>
                </article>
            ))}
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
