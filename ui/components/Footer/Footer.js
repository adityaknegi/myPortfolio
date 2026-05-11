"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[#111] py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-[#333]">
          Aditya Kumar © {new Date().getFullYear()}
        </p>
        <p className="font-mono text-xs text-[#2a2a2a]">
          Built with Next.js
        </p>
      </div>
    </footer>
  );
}
