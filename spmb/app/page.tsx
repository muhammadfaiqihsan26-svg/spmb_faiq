
const steps = [
  {
    number: "1",
    title: "Buat Akun",
    description: "Daftar dengan email aktif",
  },
  {
    number: "2",
    title: "Biodata & Dokumen",
    description: "Lengkapi data dan upload berkas",
  },
  {
    number: "3",
    title: "Pilih Jurusan",
    description: "Tentukan pilihan jurusan",
  },
  {
    number: "4",
    title: "Tes TPA",
    description: "Tes online terjadwal",
  },
  {
    number: "5",
    title: "Pembayaran",
    description: "Bayar dan cek status",
  },
  {
    number: "6",
    title: "Pengumuman",
    description: "Lihat hasil seleksi",
  },
];

const majors = [
  { name: "RPL", quota: "Kuota 72 siswa" },
  { name: "TKJ", quota: "Kuota 72 siswa" },
  { name: "Akuntansi", quota: "Kuota 36 siswa" },
  { name: "Pemasaran", quota: "Kuota 36 siswa" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f8f6] text-[#17231d]">
      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-[#e7eee9] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#e4f4eb] font-extrabold text-[#14784d]">
              N
            </span>
            <span className="text-sm font-bold text-[#14784d] sm:text-base">
              SPBM SMK Nusantara
            </span>
          </a>

          <nav className="flex items-center gap-2">
            <a
              href="/login"
              className="rounded-lg border border-[#198052] px-4 py-2 text-sm font-semibold text-[#14784d] hover:bg-[#eef8f2]"
            >
              Login
            </a>
            <a
              href="/register"
              className="rounded-lg bg-[#14784d] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0e633e]"
            >
              Daftar
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-14 pt-16 text-center sm:px-8 sm:pt-24">
        <span className="inline-flex rounded-full border border-[#cce9d8] bg-[#eaf7ef] px-3 py-1 text-xs font-semibold text-[#14784d]">
          Pendaftaran Tahun Ajaran 2026/2027 Dibuka
        </span>

        <h1 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          Sistem Penerimaan Murid Baru Online
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#75817a] sm:text-base">
          Daftar, ikuti tes TPA, pilih jurusan, dan unggah dokumen dari satu tempat.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="/register"
            className="rounded-lg bg-[#14784d] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#0e633e]"
          >
            Daftar Sekarang
          </a>

          <a
            href="#alur"
            className="rounded-lg border border-[#198052] bg-white px-5 py-3 text-sm font-bold text-[#14784d] hover:bg-[#eef8f2]"
          >
            Lihat Alur
          </a>
        </div>
      </section>

      {/* Alur Pendaftaran */}
      <section
        id="alur"
        className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-12 sm:px-8"
      >
        <h2 className="mb-4 text-xl font-extrabold sm:text-2xl">
          Alur Pendaftaran
        </h2>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-xl border border-[#e3eae5] bg-white p-5 transition hover:-translate-y-1 hover:border-[#b8ddc7] hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#e5f5eb] text-sm font-extrabold text-[#198052]">
                  {step.number}
                </span>

                <h3 className="text-sm font-bold">{step.title}</h3>
              </div>

              <p className="mt-3 pl-11 text-sm text-[#75817a]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Jurusan */}
      <section
        id="jurusan"
        className="mx-auto max-w-6xl px-5 pb-20 pt-2 sm:px-8"
      >
        <h2 className="mb-4 text-xl font-extrabold sm:text-2xl">
          Jurusan
        </h2>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {majors.map((major) => (
            <article
              key={major.name}
              className="rounded-xl border border-[#e3eae5] bg-white p-5 transition hover:border-[#b8ddc7] hover:shadow-md"
            >
              <h3 className="text-sm font-extrabold">{major.name}</h3>
              <p className="mt-2 text-sm text-[#75817a]">
                {major.quota}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e3eae5] bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-[#75817a] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span className="font-semibold text-[#14784d]">
            SPBM SMK Nusantara
          </span>
          <span>
            © 2026 SPBM SMK Nusantara. Semua hak dilindungi.
          </span>
        </div>
      </footer>
    </main>
  );
}
