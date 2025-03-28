export default function Footer() {
    return (
      <footer className="fixed bottom-0 w-full bg-green-500 border-t border-white/20 p-12 text-center text-gray-800" 
      style={{
        backgroundImage: 'url(/public/grass.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
        © 2025 <a className="text-white" >Lamzingtech</a>. All rights reserved.
      </footer>
    );
}