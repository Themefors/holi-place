"use client"

import { useState } from "react"
import Swal from "sweetalert2"
import "sweetalert2/dist/sweetalert2.min.css"
import { Input } from "../../Components/ui/input"
import { Textarea } from "../../Components/ui/textarea"
import { Button } from "../../Components/ui/button"
import { MapPin, Phone, Mail, Send } from "lucide-react"

const page = () => {
  // You can replace these with your real data or pull from a JSON later.
  const contact = {
    title: "যোগাযোগ করুন",
    subtitle: "আমরা আপনার বার্তার অপেক্ষায় আছি",
    address: "123 Madrasa Road, Dhaka, Bangladesh",
    phone: "+8801700000000",
    email: "info@holi-place.com",
    mapQuery: "Dhaka, Bangladesh",
    facebook: "https://facebook.com/holiplace",
    whatsapp: "https://wa.me/8801712345678",
  }

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const onChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !/.+@.+/.test(form.email) || !form.message) {
      Swal.fire({
        icon: "error",
        title: "ফর্মটি সঠিকভাবে পূরণ করুন",
        text: "নাম, ইমেইল ও বার্তা আবশ্যক।",
        confirmButtonColor: "#047857",
        confirmButtonText: "ঠিক আছে",
      })
      return
    }

    // Simulate sending
    Swal.fire({
      title: "বার্তা পাঠানো হচ্ছে...",
      timer: 900,
      didOpen: () => Swal.showLoading(),
      willClose: () => {},
    }).then(() => {
      Swal.fire({
        icon: "success",
        title: "ধন্যবাদ!",
        text: "আপনার বার্তা সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই যোগাযোগ করবো।",
        confirmButtonColor: "#047857",
        confirmButtonText: "ঠিক আছে",
      })
      setForm({ name: "", email: "", subject: "", message: "" })
    })
  }

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="w-full bg-[#ebf5f3]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-700" />
              <span className="select-none">{contact.subtitle}</span>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-emerald-900 md:text-5xl">{contact.title}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-emerald-800/80">
              যেকোন প্রশ্ন, প্রস্তাবনা বা তথ্যের জন্য আমাদের সাথে যোগাযোগ করুন।
            </p>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-4 pt-10 md:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-emerald-100">
            <iframe
              title="Location Map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`}
              className="h-[300px] w-full md:h-[420px] lg:h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Info + Form */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Contact info */}
            <div className="flex flex-col gap-6 rounded-2xl bg-[#ebf5f3] p-6 shadow-sm ring-1 ring-emerald-100">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-emerald-700" aria-hidden="true" />
                <div>
                  <div className="font-semibold text-emerald-900">ঠিকানা</div>
                  <div className="text-[15px] text-emerald-800/80">{contact.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-emerald-700" aria-hidden="true" />
                <div>
                  <div className="font-semibold text-emerald-900">ফোন</div>
                  <a href={`tel:${contact.phone}`} className="text-[15px] text-emerald-800/80 hover:text-emerald-900">
                    {contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-emerald-700" aria-hidden="true" />
                <div>
                  <div className="font-semibold text-emerald-900">ইমেইল</div>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-[15px] text-emerald-800/80 hover:text-emerald-900"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="mt-2 h-px w-full bg-emerald-200/70" />

              <div className="text-sm text-emerald-800/80">অফিস সময়: শনি–বৃহস্পতি, সকাল ৯টা – বিকাল ৫টা</div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={onSubmit}
                className="rounded-2xl bg-[#ebf5f3] p-6 shadow-sm ring-1 ring-emerald-100"
                noValidate
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-emerald-900">
                      নাম
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      placeholder="আপনার নাম"
                      required
                      className="bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-emerald-900">
                      ইমেইল
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="you@example.com"
                      required
                      className="bg-white"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="subject" className="mb-1 block text-sm font-medium text-emerald-900">
                      বিষয়
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={onChange}
                      placeholder="বার্তার বিষয়"
                      className="bg-white"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="mb-1 block text-sm font-medium text-emerald-900">
                      বার্তা
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={onChange}
                      placeholder="আপনার বার্তা লিখুন..."
                      required
                      className="bg-white"
                    />
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-end">
                  <Button type="submit" className="rounded-xl bg-emerald-700 px-6 text-white hover:bg-emerald-800">
                    পাঠিয়ে দিন
                    <Send className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Mini note */}
          <div className="mt-8 text-center text-sm text-emerald-800/70">
            বিকল্পভাবে আমাদেরকে ইমেইল করতে পারেন:{" "}
            <a href={`mailto:${contact.email}`} className="font-medium text-emerald-900 hover:underline">
              {contact.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page
