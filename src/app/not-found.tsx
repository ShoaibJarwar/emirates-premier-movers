import { ButtonLink, ContentShell } from "@/components/site";

export default function NotFound() {
  return <ContentShell className="grid min-h-[70vh] place-items-center px-4 py-20 text-center"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-700">404</p><h1 className="mt-4 font-serif text-5xl font-bold text-slate-950">This moving page could not be found.</h1><p className="mt-5 text-slate-600">The page may have moved, but our UAE moving team is still ready to help with packing, relocation and quotes.</p><div className="mt-8 flex justify-center"><ButtonLink href="/">Return Home</ButtonLink></div></div></ContentShell>;
}
